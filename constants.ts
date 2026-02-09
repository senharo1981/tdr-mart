
import { Product } from './types';

export const WHATSAPP_NUMBER = '03471115131';
export const ADMIN_PASSKEY = 'TDR2024';

export const INITIAL_PRODUCTS: Product[] = [
  // VEGETABLES
  {
    id: '1',
    name: 'Fresh Tomatoes (Tamatar)',
    category: 'Vegetable',
    price: 120,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
    description: 'Fresh organic red tomatoes, perfect for handi and salads.'
  },
  {
    id: 'v2',
    name: 'Onions (Piaz)',
    category: 'Vegetable',
    price: 150,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=400&fit=crop',
    description: 'Premium quality pink onions, essential for every kitchen.'
  },
  {
    id: 'v3',
    name: 'Potatoes (Aloo)',
    category: 'Vegetable',
    price: 80,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop',
    description: 'Fresh seasonal potatoes, firm and versatile.'
  },
  {
    id: 'v4',
    name: 'Ginger (Adrak)',
    category: 'Vegetable',
    price: 400,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=400&h=400&fit=crop',
    description: 'Strong and aromatic fresh ginger root.'
  },
  {
    id: 'v5',
    name: 'Garlic (Lehsan)',
    category: 'Vegetable',
    price: 350,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1589615228048-225933f83875?w=400&h=400&fit=crop',
    description: 'White local garlic bulbs with intense flavor.'
  },
  {
    id: 'v6',
    name: 'Green Chilies (Hari Mirch)',
    category: 'Vegetable',
    price: 40,
    unit: '250g',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=400&h=400&fit=crop',
    description: 'Spicy fresh green chilies.'
  },
  {
    id: 'v7',
    name: 'Lady Finger (Bhindi)',
    category: 'Vegetable',
    price: 140,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1425082661705-18361f677c9d?w=400&h=400&fit=crop',
    description: 'Fresh and tender okra, harvested daily.'
  },

  // FRUITS
  {
    id: '2',
    name: 'Red Apples (Kala Kulu)',
    category: 'Fruit',
    price: 250,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb?w=400&h=400&fit=crop',
    description: 'Sweet and crunchy apples from northern orchards.'
  },
  {
    id: 'f2',
    name: 'Bananas (Kela)',
    category: 'Fruit',
    price: 120,
    unit: 'dozen',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=400&fit=crop',
    description: 'Golden yellow ripe bananas from Sindh farms.'
  },
  {
    id: '4',
    name: 'Farm Mangoes (Chaunsa)',
    category: 'Fruit',
    price: 220,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop',
    description: 'King of fruits, the famous sweet mangoes of Tando Allahyar.'
  },
  {
    id: 'f3',
    name: 'Pomegranate (Anar)',
    category: 'Fruit',
    price: 300,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop',
    description: 'Juicy red pomegranate seeds, full of antioxidants.'
  },

  // GROCERY & PANTRY
  {
    id: 'g1',
    name: 'Fine Flour (Chakki Atta)',
    category: 'Deal',
    price: 1450,
    unit: '10kg bag',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    description: 'Pure whole wheat flour, freshly ground for soft rotis.'
  },
  {
    id: 'g2',
    name: 'Basmati Rice (Kainat)',
    category: 'Deal',
    price: 320,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    description: 'Long grain aromatic basmati rice.'
  },
  {
    id: 'g3',
    name: 'Cooking Oil (5L Can)',
    category: 'Deal',
    price: 2650,
    unit: '5L',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
    description: 'Premium cholesterol-free cooking oil.'
  },
  {
    id: 'g4',
    name: 'Sugar (Cheeni)',
    category: 'Deal',
    price: 145,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=400&h=400&fit=crop',
    description: 'Clean white crystalline sugar.'
  },
  {
    id: 'g5',
    name: 'Daal Chana',
    category: 'Deal',
    price: 280,
    unit: 'kg',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1585996838426-60de5136863e?w=400&h=400&fit=crop',
    description: 'Premium quality polished yellow split peas.'
  },

  // COMBO DEALS
  {
    id: '5',
    name: 'Weekly Veggie Basket',
    category: 'Deal',
    price: 850,
    unit: 'basket',
    availability: true,
    imageUrl: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&h=400&fit=crop',
    description: 'Potatoes (2kg), Onions (2kg), Tomatoes (1kg), Ginger/Garlic mix.'
  }
];
