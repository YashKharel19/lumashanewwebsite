
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
  { id: 1, title: "Lumasha Flashcards Set", category: "Flashcards", price: "$22USD", image: "./assets/punjabiflashcards.jpeg", badge: "Bestseller", badgeColor: "bg-secondary text-neutral-dark", rating: 5, reviews: 48 },
  { id: 2, title: "Lumasha Printable Books", category: "EBooks", price: "$3.97USD", image: "./assets/DigitalPDF.png", badge: "New", badgeColor: "bg-primary text-white", rating: 4, reviews: 32 },
  { id: 3, title: "Lumasha Story Books", category: "StoryBooks", price: "$12.99USD", image: "./assets/storybook.jpg", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Grishma Lamsal", role: "Language Teacher", quote: "I recently got this set of Nepali flashcards for my niece and they've been super helpful for her. I love how colorful and engaging these Nepali flashcards are. The vibrant design really keeps her interested while learning. The mix of visuals and translations makes it fun and easy to remember new words. A Great Tool for Learning Nepali!", bg: "bg-pastel-pink" },
  { name: "Chandini", role: "Homeschooling Mom", quote: "Great quality flashcards to help children learn their native language! Highly recommend", bg: "bg-pastel-blue" },
  { name: "Margaret S.", role: "Homeschooling Mom", quote: "unique product and fast shipping - thanks!", bg: "bg-pastel-yellow" },
];

export const NEWS_ITEMS = [
  { id: 1, title: "New: French,Kannada, Malyalam,Telugu, Hindi flashcards launching soon!", desc: "Pre-orders open next week. Sign up to get notified.", icon: Bell, borderColor: "border-primary", bgColor: "bg-primary/10", textColor: "text-primary" },
  { id: 2, title: "Beta: In-app storytime with Grandma is live.", desc: "Coming Soon in our app.", icon: Bell, borderColor: "border-secondary", bgColor: "bg-secondary/10", textColor: "text-secondary-hover" },
  { id: 3, title: "Printable: Multi Cultural Story Books", desc: "Story Books for different culture available in kindle and etsy.", icon: Bell, borderColor: "border-accent", bgColor: "bg-accent/10", textColor: "text-accent" },
];
