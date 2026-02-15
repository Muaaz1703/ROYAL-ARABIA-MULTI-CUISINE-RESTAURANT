
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  isFeatured?: boolean;
}

export enum MenuCategory {
  APPETIZERS = 'Appetizers',
  ARABIC_SPECIALS = 'Arabic Specials',
  MAIN_COURSE = 'Main Course',
  DESSERTS = 'Desserts',
  BEVERAGES = 'Beverages'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'Food' | 'Interior' | 'Events';
}
