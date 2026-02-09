
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Product, CartItem, Order } from './types';
import { INITIAL_PRODUCTS, WHATSAPP_NUMBER } from './constants';
import HomePage from './components/HomePage';
import AdminDashboard from './components/AdminDashboard';
import CartSidebar from './components/CartSidebar';
import CheckoutForm from './components/CheckoutForm';
import { supabase } from './lib/supabase';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: prodData, error: prodError } = await supabase
          .from('products')
          .select('*')
          .order('name');
        
        if (prodError) throw prodError;
        
        if (!prodData || prodData.length === 0) {
          setProducts(INITIAL_PRODUCTS);
        } else {
          setProducts(prodData);
        }

        const { data: ordData, error: ordError } = await supabase
          .from('orders')
          .select('*')
          .order('createdAt', { ascending: false });
        
        if (!ordError) {
          setOrders(ordData || []);
        }

      } catch (err: any) {
        console.error("Connection failed, using local data:", err);
        setProducts(INITIAL_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item =>
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const placeOrder = async (order: Order) => {
    try {
      const { error: dbError } = await supabase.from('orders').insert([order]);
      if (dbError) throw dbError;

      setOrders(prev => [order, ...prev]);
      setCart([]);
      setIsCheckoutOpen(false);
      setIsOrderCompleted(true); // Show success message
      
      const itemsList = order.items.map(i => `- ${i.product.name} (${i.quantity} x ${i.product.unit})`).join('%0A');
      const addressInfo = `*Address Details:*%0AHouse: ${order.address.houseNumber}%0AStreet: ${order.address.streetNumber}%0AColony: ${order.address.colony}%0APhone: ${order.address.phone}`;
      const locationLink = order.location ? `%0A%0A*📍 Location Link:*%0A${order.location.mapsLink}` : '';
      
      const text = `*New Order from TDR Mart*%0A%0AOrder ID: ${order.id}%0A%0ACustomer: ${order.customer_name}%0A%0A*Items Ordered:*%0A${itemsList}%0A%0A*Total Bill: Rs. ${order.total}*%0A%0A${addressInfo}${locationLink}`;
      
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    } catch (err: any) {
      console.error(err);
      setIsOrderCompleted(true);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Order ID: ${order.id}`, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest">TDR Mart Loading...</p>
        </div>
      </div>
    );
  }

  // Success Screen
  if (isOrderCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter mb-4">Apkay Itmad Ka Shukriya!</h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              Aapka order receive ho gaya hai. Hum jald hi aap se raabta karein ge aur aapka saman deliver kar diya jaye ga.
            </p>
          </div>
          <button 
            onClick={() => setIsOrderCompleted(false)}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-black px-10 py-5 rounded-[2rem] text-xs uppercase tracking-widest transition-all shadow-xl shadow-green-100 active:scale-95"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 bg-white border-b shadow-sm px-4 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-green-600 p-2 rounded-xl shadow-md shadow-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black text-gray-900 leading-none tracking-tight">TDR MART</h1>
              <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Tando Allahyar</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/admin" className="text-gray-500 hover:text-green-600 p-2 font-black text-[10px] uppercase tracking-widest">Admin</Link>
            <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-gray-700 bg-gray-50 rounded-2xl transition-colors hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full ring-2 ring-white">
                  {cart.reduce((sum, i) => sum + i.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage products={products} addToCart={addToCart} />} />
            <Route path="/admin" element={<AdminDashboard products={products} setProducts={setProducts} orders={orders} setOrders={setOrders} />} />
          </Routes>
        </main>

        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} onUpdateQuantity={updateCartQuantity} onCheckout={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }} />
        {isCheckoutOpen && <CheckoutForm cart={cart} onClose={() => setIsCheckoutOpen(false)} onSubmit={placeOrder} />}

        <footer className="bg-white border-t py-6 text-center">
           <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">© 2024 TDR Mart Tando Allahyar</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
