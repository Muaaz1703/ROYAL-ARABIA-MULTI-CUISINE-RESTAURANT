
import { MenuCategory, MenuItem, Testimonial, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Royal Lamb Mandi',
    description: 'Traditional Yemeni dish with succulent lamb, fragrant basmati rice, and Arabic spices.',
    price: '$24.99',
    category: MenuCategory.ARABIC_SPECIALS,
    image: 'https://picsum.photos/seed/mandi/600/400',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Hummus with Sizzling Lamb',
    description: 'Creamy chickpeas puree topped with spiced minced lamb and toasted pine nuts.',
    price: '$12.50',
    category: MenuCategory.APPETIZERS,
    image: 'https://picsum.photos/seed/hummus/600/400',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Shish Tawook',
    description: 'Skewers of marinated chicken breast grilled to perfection, served with garlic paste.',
    price: '$18.90',
    category: MenuCategory.ARABIC_SPECIALS,
    image: 'https://picsum.photos/seed/tawook/600/400',
    isFeatured: true
  },
  {
    id: '4',
    name: 'Butter Chicken Masala',
    description: 'Classic North Indian curry with tender chicken in a rich tomato-butter sauce.',
    price: '$16.50',
    category: MenuCategory.MAIN_COURSE,
    image: 'https://picsum.photos/seed/butter/600/400'
  },
  {
    id: '5',
    name: 'Pistachio Baklava',
    description: 'Layers of phyllo pastry filled with crushed pistachios and sweet syrup.',
    price: '$8.00',
    category: MenuCategory.DESSERTS,
    image: 'https://picsum.photos/seed/baklava/600/400'
  },
  {
    id: '6',
    name: 'Saffron Milk Cake',
    description: 'Moist sponge cake soaked in saffron-infused milk, topped with whipped cream.',
    price: '$9.50',
    category: MenuCategory.DESSERTS,
    image: 'https://picsum.photos/seed/saffron/600/400',
    isFeatured: true
  },
  {
    id: '7',
    name: 'Fresh Mint Lemonade',
    description: 'Zesty lemon juice blended with fresh mint and ice for ultimate refreshment.',
    price: '$5.50',
    category: MenuCategory.BEVERAGES,
    image: 'https://picsum.photos/seed/lemon/600/400'
  },
  {
    id: '8',
    name: 'Kashmiri Mutton Rogan Josh',
    description: 'Tender mutton cooked in a yogurt-based gravy flavored with Kashmiri chilies.',
    price: '$19.99',
    category: MenuCategory.MAIN_COURSE,
    image: 'https://picsum.photos/seed/mutton/600/400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Al-Sayed',
    role: 'Regular Guest',
    content: 'The authentic flavors of the Mandi took me back to the Middle East. Truly the most royal experience in town.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/ahmed/100/100'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Food Blogger',
    content: 'Exceptional service and the decor is breathtaking. The Saffron Milk Cake is a masterpiece you cannot miss!',
    rating: 5,
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '3',
    name: 'Vikram Singh',
    role: 'Local Resident',
    content: 'Perfect blend of Indian and Arabic cuisines. The Shish Tawook is juicy and flavorful. Highly recommended.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/vikram/100/100'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', url: 'https://picsum.photos/seed/res1/800/600', title: 'Main Dining Hall', category: 'Interior' },
  { id: '2', url: 'https://picsum.photos/seed/res2/800/600', title: 'Lamb Platter', category: 'Food' },
  { id: '3', url: 'https://picsum.photos/seed/res3/800/600', title: 'Private Event Setup', category: 'Events' },
  { id: '4', url: 'https://picsum.photos/seed/res4/800/600', title: 'Arabic Coffee Service', category: 'Food' },
  { id: '5', url: 'https://picsum.photos/seed/res5/800/600', title: 'Outdoor Seating', category: 'Interior' },
  { id: '6', url: 'https://picsum.photos/seed/res6/800/600', title: 'Baklava Assortment', category: 'Food' }
];
