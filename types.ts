export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: string; // Optional as specific prices weren't provided, can use placeholders
  category: 'starter' | 'main' | 'dessert' | 'drink';
  popular?: boolean;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: 'Google' | 'Tripadvisor';
}