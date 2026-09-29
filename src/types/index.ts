export type ProductCategory = 
  | 'Fine Jewelry' 
  | 'Diamonds' 
  | 'Fine Accessories' 
  | 'Haute Couture' 
  | 'Bespoke Bridal';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  tag?: string;
  details: {
    metal: string;
    gemstone?: string;
    carat?: string;
    dimensions?: string;
    origin: string;
  };
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface CollectionCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  itemCount: number;
  href: string;
}

export interface SpeedCategoryItem {
  id: string;
  title: string;
  category: ProductCategory;
  tag: string;
  imageUrl: string;
  subtitle: string;
}

export interface ClientReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  category: ProductCategory;
  location?: string;
  verified?: boolean;
}

export interface SalonAppointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  salonLocation: string;
  notes?: string;
  createdAt: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
}

export interface PackageSuite {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalValue: number;
  description: string;
  includes: string[];
  image: string;
  tag: string;
}
