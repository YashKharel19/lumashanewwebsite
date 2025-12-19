
export interface Product {
  id: number;
  title: string;
  category: 'Flashcards' | 'Books' | 'Mats' | 'Activities';
  price: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  rating: number;
  reviews: number;
}

export interface Game {
  id: number;
  title: string;
  desc: string;
  icon: string;
  color: string;
  tag: string;
  age: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  bg: string;
}

export interface AIResponse {
  word: string;
  translation: string;
  pronunciation: string;
  funFact: string;
}
