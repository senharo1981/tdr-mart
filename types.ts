
export type Category = 'Vegetable' | 'Fruit' | 'Deal';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  unit: string;
  availability: boolean;
  imageUrl: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Address {
  name: string;
  houseNumber: string;
  streetNumber: string;
  landmark: string;
  colony: string;
  phone?: string;
}

export interface Order {
  id: string;
  customer_name?: string;
  items: CartItem[];
  address: Address;
  location?: {
    lat: number;
    lng: number;
    mapsLink: string;
  };
  total: number;
  status: 'Pending' | 'Delivered';
  createdAt: string;
}
