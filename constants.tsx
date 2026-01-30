import { Utensils, Sun, Heart, Leaf } from 'lucide-react';
import { MenuItem, Feature, Review } from './types';

export const APP_NAME = "Essofra";
export const PHONE_NUMBER = "+216 98 281 049";
export const ADDRESS = "Avenue Taieb Mhiri, Houmt Souk, Djerba Island, Tunisia";
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Essofra+Restaurant+Houmt+Souk+Djerba";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Brik à l\'Oeuf',
    description: 'Crispy traditional pastry filled with fresh egg, parsley, and tuna. A Tunisian classic.',
    category: 'starter',
    popular: true,
  },
  {
    id: '2',
    name: 'Tunisian Salad',
    description: 'Finely diced tomatoes, peppers, onions, and cucumber, dressed with olive oil and mint.',
    category: 'starter',
  },
  {
    id: '3',
    name: 'Lamb Couscous',
    description: 'Fluffy steamed semolina served with tender lamb meat and seasonal vegetables.',
    category: 'main',
    popular: true,
  },
  {
    id: '4',
    name: 'Méchoui',
    description: 'Succulent grilled lamb seasoned with local spices, served with grilled vegetables.',
    category: 'main',
    popular: true,
  },
  {
    id: '5',
    name: 'Meloukhia',
    description: 'A rich, slow-cooked stew made from jew\'s mallow leaves and tender beef. A local delicacy.',
    category: 'main',
    popular: true,
  },
  {
    id: '6',
    name: 'Royal Kamounia',
    description: 'Traditional stew prepared with cumin, beef liver, and meat pieces.',
    category: 'main',
    popular: true,
  },
  {
    id: '7',
    name: 'Mint Tea with Pine Nuts',
    description: 'Sweet, hot green tea served with fresh mint leaves and crunchy pine nuts.',
    category: 'drink',
    popular: true,
  },
  {
    id: '8',
    name: 'Assorted Parfaits',
    description: 'Refreshing layered desserts featuring local fruits and nuts.',
    category: 'dessert',
  },
];

export const FEATURES: Feature[] = [
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Authentic Cuisine",
    description: "Traditional recipes passed down through generations.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Terrace Dining",
    description: "Enjoy your meal in our beautiful open-air courtyard.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Dietary Friendly",
    description: "Halal, vegetarian, and vegan options available.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Warm Hospitality",
    description: "Rated 4.7⭐ for our friendly and welcoming service.",
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: "Sarah J.",
    rating: 5,
    text: "The most authentic meal we had in Djerba. The setting is magical and the couscous is to die for.",
    source: "Tripadvisor",
  },
  {
    id: 'r2',
    author: "Ahmed K.",
    rating: 5,
    text: "Excellent service and beautiful decor. A true representation of Tunisian culture.",
    source: "Google",
  },
  {
    id: 'r3',
    author: "Elena R.",
    rating: 4,
    text: "Lovely atmosphere. The mint tea at the end was the perfect finish.",
    source: "Tripadvisor",
  },
];