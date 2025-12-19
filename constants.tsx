
import { Star, Play, Pencil, Music, Globe, Sparkles, ShieldCheck, Heart, Zap, BookOpen, Layers, Palette, Bell } from 'lucide-react';
import { Product, Game, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Learning', path: '/learning' },
  { name: 'Games', path: '/games' },
  { name: 'Products', path: '/products' },
  { name: 'For Parents', path: '/parents' },
  { name: 'About', path: '/about' },
];

export const TRUST_CARDS = [
  { icon: Globe, title: "Multilingual Magic", desc: "Learn in Nepali, Hindi, Philipino, Punjabi, Gujarati and more.", color: "bg-blue-100 text-blue-600" },
  { icon: Sparkles, title: "Play-Based Learning", desc: "Games, stories, and activities built for curious minds.", color: "bg-yellow-100 text-yellow-600" },
  { icon: ShieldCheck, title: "Kid-Safe & Approved", desc: "No scary ads. Just calm, joyful learning.", color: "bg-green-100 text-green-600" },
  { icon: Heart, title: "Research-Inspired", desc: "Inspired by Montessori + early childhood experts.", color: "bg-pink-100 text-pink-600" },
];

export const CATEGORIES = [
  { title: "Interactive Flashcards", desc: "Picture + word + sound for quick, joyful learning.", icon: Zap, color: "bg-primary", bg: "bg-red-50" },
  { title: "Educational PDFs & EBooks", desc: "Print-at-home resources and activity packs.", icon: BookOpen, color: "bg-secondary", bg: "bg-yellow-50" },
  { title: "Story Books", desc: "Multicultural Story Books for kids to learn about culture.", icon: Layers, color: "bg-accent", bg: "bg-blue-50" },
  { title: "Creative Activities", desc: "Coloring books, crafts, and story-based activities.", icon: Palette, color: "bg-accent-green", bg: "bg-green-50" },
];

export const MOCK_GAMES: Game[] = [
  { id: 1, title: "Alphabet Match", desc: "Match letters to cute pictures.", icon: 'star', color: "bg-primary", tag: "Free demo", age: "3-7" },
  { id: 2, title: "Memory Flip", desc: "Find pairs and practice new words.", icon: 'play', color: "bg-secondary", tag: "Popular", age: "3-7" },
  { id: 3, title: "Trace & Glow", desc: "Trace Nepali and English letters.", icon: 'pencil', color: "bg-accent", tag: "New", age: "3-7" },
  { id: 4, title: "Sound & Guess", desc: "Listen and tap the matching card.", icon: 'music', color: "bg-accent-green", tag: "Audio", age: "3-7" },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, title: "Lumasha Flashcards Set", category: "Flashcards", price: "$22USD", image: "https://cdn.wegic.ai/assets/onepage/agent/images/1766083342658.jpg", badge: "Bestseller", badgeColor: "bg-secondary text-neutral-dark", rating: 5, reviews: 48 },
  { id: 2, title: "Lumasha Printable Books", category: "EBooks", price: "$3.97USD", image: "https://picsum.photos/seed/coloring/600/450", badge: "New", badgeColor: "bg-primary text-white", rating: 4, reviews: 32 },
  { id: 3, title: "Lumasha Story Books", category: "StoryBooks", price: "$12.99USD", image: "https://picsum.photos/seed/mat/600/450", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah M.", role: "Preschool Parent", quote: "My son now uses Nepali words at breakfast without me reminding him. Lumasha made it feel like a game instead of homework.", bg: "bg-pastel-pink" },
  { name: "Rajiv K.", role: "Homeschooling Dad", quote: "The quality of the flashcards is amazing. They withstand my toddler's sticky hands and rough play!", bg: "bg-pastel-blue" },
  { name: "Elena G.", role: "Language Teacher", quote: "Finally, a resource that respects the culture while being fun. The illustrations are beautiful and inclusive.", bg: "bg-pastel-yellow" },
];

export const NEWS_ITEMS = [
  { id: 1, title: "New: French,Kannada, Malyalam,Telugu, Hindi flashcards launching soon!", desc: "Pre-orders open next week. Sign up to get notified.", icon: Bell, borderColor: "border-primary", bgColor: "bg-primary/10", textColor: "text-primary" },
  { id: 2, title: "Beta: In-app storytime with Grandma is live.", desc: "Update your app to version 2.0 to try it out.", icon: Bell, borderColor: "border-secondary", bgColor: "bg-secondary/10", textColor: "text-secondary-hover" },
  { id: 3, title: "Free printable: Winter vocabulary coloring pages.", desc: "Download now from the Parent Resources section.", icon: Bell, borderColor: "border-accent", bgColor: "bg-accent/10", textColor: "text-accent" },
];
