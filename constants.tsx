
import { Star, Play, Pencil, Music, Globe, Sparkles, ShieldCheck, Heart, Zap, BookOpen, Layers, Palette, Bell, Truck, RotateCcw, Shield } from 'lucide-react';
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

export const MOCK_STORIES = [
  {
    id: 1,
    title: "Why we Celebrate Christmas?",
    language: " English",
    cover: "/assets/Christmas.png",
    pages: 11,
    glimpse: ["/assets/christmas/1.png", "/assets/christmas/2.png", "/assets/christmas/3.png", "/assets/christmas/4.png"],
    etsyUrl: "https://www.etsy.com/ca/listing/4428424869/why-we-celebrate-christmas-o-a-fun"
  },
  {
    id: 2,
    title: "Little Ganesh",
    language: "English",
    cover: "/assets/ganesh.jpg",
    pages: 16,
    glimpse: ["/assets/ganesh/1.png", "/assets/ganesh/2.png", "/assets/ganesh/3.png", "/assets/ganesh/4.png"],
    etsyUrl: "https://www.etsy.com/ca/listing/4427351267/little-ganesh-a-childrens-story-of"
  },
  {
    id: 3,
    title: "Dashain and Durga",
    language: "English",
    cover: "/assets/DashainandDurga.png",
    pages: 29,
    glimpse: ["/assets/dashain/1.png", "/assets/dashain/2.png", "/assets/dashain/3.png", "/assets/dashain/4.png", "/assets/dashain/5.png", "/assets/dashain/6.png", "/assets/dashain/7.png"],
    etsyUrl: "https://www.etsy.com/ca/listing/4408132645/dashain-durga-storybook-kids-illustrated"
  },
  {
    id: 4,
    title: "Lakshmi Puja",
    language: "English",
    cover: "/assets/LaxmiPuja.png",
    pages: 31,
    glimpse: ["/assets/laxmipuja/1.png", "/assets/laxmipuja/2.png", "/assets/laxmipuja/3.png", "/assets/laxmipuja/4.png", "/assets/laxmipuja/5.png"],
    etsyUrl: "https://www.etsy.com/ca/listing/4408120408/lakshmi-puja-book-for-kids-cultural"
  },
];

export const MOCK_GAMES: Game[] = [
  { id: 1, title: "Number Safari", desc: "Count items and learn numbers 0-10.", icon: 'star', color: "bg-primary", tag: "Counting", age: "3-7" },
  { id: 2, title: "Fruit Basket", desc: "Learn fruit names in multiple languages.", icon: 'play', color: "bg-secondary", tag: "Vocab", age: "3-7" },
];



// DATA SET 1: Specifically for the Home Page Featured Section
export const FEATURED_PRODUCTS: Product[] = [
  { id: 1, title: "Lumasha Flashcards Set", category: "Flashcards", price: "$22USD", image: "/assets/punjabiflashcards.jpeg", badge: "Bestseller", badgeColor: "bg-secondary text-neutral-dark", rating: 5, reviews: 48 },
  { id: 2, title: "Lumasha Printable Books", category: "EBooks", price: "$3.97USD", image: "/assets/DigitalPDF.png", badge: "New", badgeColor: "bg-primary text-white", rating: 4, reviews: 32 },
  { id: 3, title: "Lumasha Story Books", category: "StoryBooks", price: "$12.99USD", image: "/assets/ganesh.jpg", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
];

// DATA SET 2: Comprehensive list for the Shop Page
export const ALL_PRODUCTS: Product[] = [
  { id: 1, title: "Nepali Language Flashcards for Kids | Fun Way to Learn Nepali Alphabet & Words", category: "Flashcards", price: "$22USD", image: "/assets/Nepali.jpeg", badge: "Bestseller", badgeColor: "bg-secondary text-neutral-dark", rating: 5, reviews: 10 },
  { id: 2, title: "Gujarati Language Flashcards for Kids | Fun Way to Learn Gujarati Alphabet & Words", category: "Flashcards", price: "$22USD", image: "/assets/Gujarati.jpeg", badge: "New", badgeColor: "bg-primary text-white", rating: 4, reviews: 32 },
  { id: 3, title: "Punjabi Language Flashcards for Beginners - Learn Punjabi Easily", category: "Flashcards", price: "$22USD", image: "/assets/punjabi.jpeg", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 4, title: "Why we Celebrate Christmas? | A Fun Christian Christmas Story for Kids (Ages 3–8) | Printable Digital Book (Digital Download)", category: "StoryBooks", price: "$6.97USD", image: "/assets/Christmas.png", badge: "Bestseller", badgeColor: "bg-secondary text-neutral-dark", rating: 5, reviews: 48 },
  { id: 5, title: "Little Ganesh – A Children’s Story of Courage, Love & New Beginnings | Hindu Mythology Kids Book | Cultural Storybook | Digital Books(Digital Download)", category: "StoryBooks", price: "$6.97USD", image: "/assets/ganesh.jpg", badge: "New", badgeColor: "bg-primary text-white", rating: 4, reviews: 32 },
  { id: 6, title: "Dashain Durga Storybook Kids | Illustrated Learning for Kids(Digital Download)", category: "StoryBooks", price: "$6.97USD", image: "/assets/DashainandDurga.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 7, title: "Lakshmi Puja Book for Kids, Cultural & Educational Digital PDF(Digital Download)", category: "StoryBooks", price: "$6.97USD", image: "/assets/LaxmiPuja.png", badge: "Bestseller", badgeColor: "bg-secondary text-neutral-dark", rating: 5, reviews: 48 },
  { id: 8, title: "Persian Alphabet Flashcards: Farsi Learning Cards, Montessori Printable (Digital Download))", category: "EBooks", price: "$3.97USD", image: "/assets/Persianpdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 4, reviews: 32 },
  { id: 9, title: "Gujarati Alphabet Flashcards: Montessori Learning Cards (Digital Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Gujratipdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 10, title: "Nepali Language Flashcards: Montessori Learning Cards with Devanagari Script (Digital Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Nepalipdf.png", badge: "Bestseller", badgeColor: "bg-secondary text-neutral-dark", rating: 5, reviews: 48 },
  { id: 11, title: "Punjabi Alphabet Flashcards: Punjabi Learning Cards, Montessori Printable (Digital Download))", category: "EBooks", price: "$3.97USD", image: "/assets/Punjabipdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 4, reviews: 32 },
  { id: 12, title: "Hindi Flashcards: Montessori Printable Learning Cards with Pronunciation (Digital Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Hindipdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 13, title: "English Alphabet Flashcards: Montessori Printable Learning Cards (Digital Download))", category: "EBooks", price: "$3.97USD", image: "/assets/Englishpdf.png", badge: "Bestseller", badgeColor: "bg-secondary text-neutral-dark", rating: 5, reviews: 48 },
  { id: 14, title: "Filipino Language Flashcards: Montessori Learning Cards (Digital Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Filipinopdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 4, reviews: 32 },
  { id: 15, title: "Kannada Language Flashcards: Montessori Learning Cards for Kids (Digital Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Kannadapdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 16, title: "French Alphabet Flashcards: Montessori Learning Cards (Digital Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Frenchpdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 17, title: "Korean Alphabet Flashcards: Montessori Learning Cards (Digital Download PDF)", category: "EBooks", price: "$3.97USD", image: "/assets/Koreanpdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 18, title: "Portuguese Language Flashcards: Montessori Learning Cards (Digital Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Portugesepdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 19, title: "Printable Punjabi Number Flashcards: Gurmukhi Numerics 1-20 (Digital Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Punjabinumberspdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 20, title: "Spanish Numbers Flashcards 1-9: Montessori Printable Learning Cards (Digital Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Spanishnumberspdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 21, title: "Gujarati Numbers Flashcards 1-9: Bilingual Learning Cards (PDF Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Gujaratinumberspdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 22, title: "English Number Flashcards 1-9: Montessori Printable (Digital Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Englishnumberspdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 23, title: "French Number Flashcards 1-9: Bilingual Learning Cards (Digital Download)", category: "EBooks", price: "$3.97USD", image: "/assets/Frenchnumberspdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 24, title: "Nepali Numbers Flashcards: Devanagari Script, Pronunciation Guide (Digital Download, PDF)", category: "EBooks", price: "$3.97USD", image: "/assets/Nepalinumberspdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },
  { id: 25, title: "Spanish Alphabet Flashcards: Montessori Learning Cards (Digital Download PDF)", category: "EBooks", price: "$3.97USD", image: "/assets/Spanishpdf.png", badge: "New", badgeColor: "bg-primary text-white", rating: 5, reviews: 15 },

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

export const FAQ_DATA = [
  { category: "General", q: "What age is Lumasha for?", a: "Our tools are designed primarily for children aged 2-8 years old, but language learners of all ages find our flashcards helpful!" },
  { category: "General", q: "Which languages do you support?", a: "Currently we have comprehensive kits for Nepali, Hindi, Gujarati, Punjabi, French, Spanish, English and many more." },
  { category: "Products", q: "Are the flashcards durable?", a: "Yes! Our physical cards are made from extra-thick 700gsm cardstock with a matte splash-proof finish to handle sticky toddler fingers." },
  { category: "Products", q: "Is the app safe for my child?", a: "100%. Our app is ad-free and contains no external links or social media integrations in the child's play area." },
];

export const PRINTABLES_DATA = [
  {
    id: 1, title: "Nepali Alphabet Coloring Book",
    level: "Beginner",
    pages: 4,
    type: "PDF",
    icon: Palette,
    color: "bg-primary",
    glimpse: ["/assets/colorbook/nepali/1.png", "/assets/colorbook/nepali/2.png", "/assets/colorbook/nepali/3.png", "/assets/colorbook/nepali/4.png"],
    pdfUrl: "/assets/printables/1.pdf"
  },
  {
    id: 2,
    title: "Hindi Alpabhet coloring Books",
    level: "Intermediate",
    pages: 4,
    type: "PDF",
    icon: Pencil,
    color: "bg-accent",
    glimpse: ["/assets/colorbook/hindi/1.png", "/assets/colorbook/hindi/2.png", "/assets/colorbook/hindi/3.png", "/assets/colorbook/hindi/4.png"],
    pdfUrl: "/assets/printables/2.pdf"
  },
  {
    id: 3,
    title: "Festivals Color Books",
    level: "All Ages",
    pages: 3,
    type: "PDF",
    icon: Globe,
    color: "bg-secondary",
    glimpse: ["/assets/colorbook/festival/1.png", "/assets/colorbook/festival/2.png", "/assets/colorbook/festival/3.png"],
    pdfUrl: "/assets/printables/3.pdf"
  },
  {
    id: 4,
    title: "Coloring Books for Filipino",
    level: "Beginner",
    pages: 4,
    type: "PDF",
    icon: BookOpen,
    color: "bg-accent-green",
    glimpse: ["/assets/colorbook/filipino/1.png", "/assets/colorbook/filipino/2.png", "/assets/colorbook/filipino/3.png", "/assets/colorbook/filipino/4.png"],
    pdfUrl: "/assets/printables/3.pdf"
  },
];


export const WORD_OF_DAY_DATA: Record<string, any[]> = {
  Hindi: [
    { word: "नमस्ते", translation: "Hello", pronunciation: "Nah-mas-tay", funFact: "A common greeting that shows deep respect." },
    { word: "सूरज", translation: "Sun", pronunciation: "Soo-raj", funFact: "The sun provides energy to all living things." },
    { word: "फूल", translation: "Flower", pronunciation: "Phool", funFact: "Flowers attract bees with their bright colors." },
    { word: "किताब", translation: "Book", pronunciation: "Ki-taab", funFact: "Reading takes you to magical worlds!" },
    { word: "दोस्त", translation: "Friend", pronunciation: "Dost", funFact: "Friends make every game more fun." },
    { word: "पानी", translation: "Water", pronunciation: "Pa-ni", funFact: "Our body is mostly made of water!" },
    { word: "खाना", translation: "Food", pronunciation: "Kha-na", funFact: "Eating healthy gives you strength to play." },
    { word: "पेड़", translation: "Tree", pronunciation: "Ped", funFact: "Trees give us the oxygen we breathe." },
    { word: "बादल", translation: "Cloud", pronunciation: "Ba-dal", funFact: "Clouds are made of tiny water droplets." },
    { word: "बारिश", translation: "Rain", pronunciation: "Ba-rish", funFact: "Rain helps the plants grow green." },
    { word: "मिठाई", translation: "Sweet", pronunciation: "Mi-thai", funFact: "Hindi festivals always feature delicious sweets." },
    { word: "घर", translation: "House", pronunciation: "Ghar", funFact: "Home is where the heart is." },
    { word: "माँ", translation: "Mother", pronunciation: "Maa", funFact: "Usually the very first word a baby learns." },
    { word: "आसमान", translation: "Sky", pronunciation: "Aas-man", funFact: "The sky looks blue because of sunlight scattering." },
    { word: "तारा", translation: "Star", pronunciation: "Ta-ra", funFact: "Stars are giant balls of burning gas far away." },
  ],
  Gujarati: [
    { word: "નમસ્તે", translation: "Hello", pronunciation: "Na-mas-te", funFact: "The traditional way to greet someone in Gujarat." },
    { word: "પાણી", translation: "Water", pronunciation: "Pa-ni", funFact: "Always stay hydrated for a healthy brain!" },
    { word: "પુસ્તક", translation: "Book", pronunciation: "Pus-tak", funFact: "Every book is a door to a new adventure." },
    { word: "મિત્ર", translation: "Friend", pronunciation: "Mi-tra", funFact: "A friend is someone you can always rely on." },
    { word: "ઝાડ", translation: "Tree", pronunciation: "Zhad", funFact: "Trees are the lungs of our planet." },
    { word: "ફળ", translation: "Fruit", pronunciation: "Fal", funFact: "Fruits are nature's candy!" },
    { word: "ચકલી", translation: "Sparrow", pronunciation: "Chak-li", funFact: "Sparrows are very social little birds." },
    { word: "ગાય", translation: "Cow", pronunciation: "Gaay", funFact: "Cows are respected in Indian culture." },
    { word: "સૂર્ય", translation: "Sun", pronunciation: "Sur-ya", funFact: "The sun is the center of our solar system." },
    { word: "ચંદ્ર", translation: "Moon", pronunciation: "Chan-dra", funFact: "The moon doesn't shine; it reflects sunlight." },
    { word: "પતંગ", translation: "Kite", pronunciation: "Pa-tang", funFact: "Gujarat is famous for its kite flying festival!" },
    { word: "મમ્મી", translation: "Mom", pronunciation: "Mam-mi", funFact: "Moms are our first teachers." },
    { word: "પપ્પા", translation: "Dad", pronunciation: "Pap-pa", funFact: "Dads are our first heroes." },
    { word: "ઘર", translation: "Home", pronunciation: "Ghar", funFact: "There's no place like home." },
    { word: "તારો", translation: "Star", pronunciation: "Ta-ro", funFact: "Stars twinkle because of Earth's atmosphere." },
  ],
  Punjabi: [
    { word: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", translation: "Hello", pronunciation: "Sat Sri Akal", funFact: "A respectful greeting in the Sikh community." },
    { word: "ਪਾਣੀ", translation: "Water", pronunciation: "Pa-ni", funFact: "Water is life. Save every drop!" },
    { word: "ਕਿਤਾਬ", translation: "Book", pronunciation: "Ki-taab", funFact: "Books help our imagination grow big." },
    { word: "ਦੋਸਤ", translation: "Friend", pronunciation: "Dost", funFact: "A true friend is a treasure." },
    { word: "ਦਰੱਖਤ", translation: "Tree", pronunciation: "Da-rakh-at", funFact: "Trees provide shade on hot summer days." },
    { word: "ਫੁੱਲ", translation: "Flower", pronunciation: "Full", funFact: "Flowers smell sweet to attract butterflies." },
    { word: "ਰੋਟੀ", translation: "Bread", pronunciation: "Ro-ti", funFact: "The staple food in every Punjabi home." },
    { word: "ਦੁੱਧ", translation: "Milk", pronunciation: "Dudh", funFact: "Milk makes your bones and teeth strong." },
    { word: "ਪੰਜਾਬ", translation: "Punjab", pronunciation: "Pun-jab", funFact: "The land of five rivers." },
    { word: "ਸੂਰਜ", translation: "Sun", pronunciation: "Soo-raj", funFact: "Without the sun, there would be no life." },
    { word: "ਤਾਰਾ", translation: "Star", pronunciation: "Ta-ra", funFact: "There are trillions of stars in the universe." },
    { word: "ਹਾਥੀ", translation: "Elephant", pronunciation: "Haa-thi", funFact: "Elephants use their trunks to say hello." },
    { word: "ਸ਼ੇਰ", translation: "Lion", pronunciation: "Sher", funFact: "Lions are known as the kings of the jungle." },
    { word: "ਘਰ", translation: "Home", pronunciation: "Ghar", funFact: "A place where we feel safe and loved." },
    { word: "ਖੁਸ਼ੀ", translation: "Happiness", pronunciation: "Khu-shi", funFact: "Sharing makes everyone feel happy." },
  ],
  Spanish: [
    { word: "Hola", translation: "Hello", pronunciation: "O-la", funFact: "Remember, the 'H' is silent in Spanish!" },
    { word: "Agua", translation: "Water", pronunciation: "A-gua", funFact: "Water is essential for every living cell." },
    { word: "Libro", translation: "Book", pronunciation: "Li-bro", funFact: "A book can take you on a trip without leaving home." },
    { word: "Amigo", translation: "Friend", pronunciation: "A-mi-go", funFact: "Life is better with a good friend by your side." },
    { word: "Árbol", translation: "Tree", pronunciation: "Ar-bol", funFact: "Some trees can live for thousands of years!" },
    { word: "Flor", translation: "Flower", pronunciation: "Flor", funFact: "Bees need flowers to make honey." },
    { word: "Sol", translation: "Sun", pronunciation: "Sol", funFact: "The sun is a star at the center of our system." },
    { word: "Luna", translation: "Moon", pronunciation: "Lu-na", funFact: "The moon influences the tides on Earth." },
    { word: "Casa", translation: "House", pronunciation: "Ca-sa", funFact: "The place where your family gathers." },
    { word: "Perro", translation: "Dog", pronunciation: "Pe-rro", funFact: "Dogs are known as man's best friend." },
    { word: "Gato", translation: "Cat", pronunciation: "Ga-to", funFact: "Cats spend 70% of their lives sleeping!" },
    { word: "Comida", translation: "Food", pronunciation: "Co-mi-da", funFact: "Spanish food is famous for its bold flavors." },
    { word: "Gracias", translation: "Thank you", pronunciation: "Gra-cias", funFact: "One of the most important words in any language." },
    { word: "Amor", translation: "Love", pronunciation: "A-mor", funFact: "Love is the universal language of the heart." },
    { word: "Estrella", translation: "Star", pronunciation: "Es-tre-lla", funFact: "The stars we see are far, far away." },
  ],
  French: [
    { word: "Bonjour", translation: "Hello", pronunciation: "Bon-zhoor", funFact: "The most common way to greet people in France." },
    { word: "Eau", translation: "Water", pronunciation: "O", funFact: "Just one letter, but so important for life!" },
    { word: "Livre", translation: "Book", pronunciation: "Lee-vruh", funFact: "France has a very long history of great writers." },
    { word: "Ami", translation: "Friend", pronunciation: "A-mee", funFact: "A true friend helps you through everything." },
    { word: "Arbre", translation: "Tree", pronunciation: "Ar-bruh", funFact: "Trees provide food and shelter for many animals." },
    { word: "Fleur", translation: "Flower", pronunciation: "Flur", funFact: "Paris is famous for its beautiful flower gardens." },
    { word: "Soleil", translation: "Sun", pronunciation: "So-lay", funFact: "The sun's light takes 8 minutes to reach us." },
    { word: "Lune", translation: "Moon", pronunciation: "Loon", funFact: "The moon is Earth's only natural satellite." },
    { word: "Maison", translation: "House", pronunciation: "May-zon", funFact: "Every house tells a family's unique story." },
    { word: "Chien", translation: "Dog", pronunciation: "She-en", funFact: "Dogs can understand up to 250 words!" },
    { word: "Chat", translation: "Cat", pronunciation: "Sha", funFact: "A group of cats is called a 'clowder'." },
    { word: "Merci", translation: "Thank you", pronunciation: "Mer-see", funFact: "Always remember to be polite and say thanks!" },
    { word: "Amour", translation: "Love", pronunciation: "A-moor", funFact: "Paris is often called the 'City of Love'." },
    { word: "Étoile", translation: "Star", pronunciation: "Ay-twall", funFact: "The closest star to Earth is the Sun." },
    { word: "Pain", translation: "Bread", pronunciation: "Pan", funFact: "The French baguette is world-famous!" },
  ],
};

export const PRONUNCIATION_DATA: Record<string, any[]> = {
  English: [
    { word: "Hello", translation: "Hello", ipa: "/həˈləʊ/", emoji: "👋" },
    { word: "Thank You", translation: "Thank You", ipa: "/θæŋk juː/", emoji: "🙏" },
    { word: 'Apple', translation: 'Apple', ipa: '/ˈæp.əl/', emoji: '🍎' },
    { word: 'Sun', translation: 'Sun', ipa: '/sʌn/', emoji: '☀️' }
  ],
  Nepali: [
    { word: "नमस्ते", translation: "Hello", ipa: "/nʌmʌsˈteɪ/", emoji: "🙏" },
    { word: "धन्यवाद", translation: "Thank You", ipa: "/dʱʌnjʌvad/", emoji: "🌸" },
    { word: 'स्याउ', translation: 'Apple', ipa: 'syāu', emoji: '🍎' },
    { word: 'पानी', translation: 'Water', ipa: 'pānī', emoji: '💧' }
  ],
  Hindi: [
    { word: "नमस्ते", translation: "Hello", ipa: "/nəˈməsteː/", emoji: "👋" },
    { word: "शुक्रिया", translation: "Thank You", ipa: "/ʃʊkɾɪjaː/", emoji: "💖" },
    { word: 'सेब', translation: 'Apple', ipa: 'seb', emoji: '🍎' },
    { word: 'सूरज', translation: 'Sun', ipa: 'sūraj', emoji: '☀️' }
  ],
  Punjabi: [
    { word: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", translation: "Hello", ipa: "/sət̪ sɾiː əkɑːl/", emoji: "🦁" },
    { word: "ਧੰਨਵਾਦ", translation: "Thank You", ipa: "/t̪ənnəvɑːd̪/", emoji: "🌟" },
    { word: 'ਸੇਬ', translation: 'Apple', ipa: 'sēba', emoji: '🍎' },
    { word: 'ਪਾਣੀ', translation: 'Water', ipa: 'pāṇī', emoji: '💧' }
  ],
  Gujarati: [
    { word: "નમસ્તે", translation: "Hello", ipa: "/nəˈməsteː/", emoji: "🌞" },
    { word: "આભાર", translation: "Thank You", ipa: "/abʰaɾ/", emoji: "🌈" },
    { word: 'સફરજન', translation: 'Apple', ipa: 'sapharajana', emoji: '🍎' },
    { word: 'સૂર્ય', translation: 'Sun', ipa: 'sūrya', emoji: '☀️' }
  ],
  French: [
    { word: "Bonjour", translation: "Hello", ipa: "/bɔ̃ʒuʁ/", emoji: "🥖" },
    { word: "Merci", translation: "Thank You", ipa: "/mɛʁsi/", emoji: "🎁" },
    { word: 'Pomme', translation: 'Apple', ipa: '/pɔm/', emoji: '🍎' },
    { word: 'Eau', translation: 'Water', ipa: '/o/', emoji: '💧' }
  ],
  Spanish: [
    { word: "Hola", translation: "Hello", ipa: "/ˈola/", emoji: "🌵" },
    { word: "Gracias", translation: "Thank You", ipa: "/ˈɡɾaθjas/", emoji: "👒" },
    { word: 'Manzana', translation: 'Apple', ipa: '/manˈθana/', emoji: '🍎' },
    { word: 'Agua', translation: 'Water', ipa: '/ˈaɣwa/', emoji: '💧' }
  ],
};

export const FLASHCARD_ITEMS = [
  { emoji: '🍎', english: 'Apple', translations: { Nepali: 'स्याउ', Hindi: 'सेब', Gujarati: 'સફરજન' }, color: 'bg-primary' },
  { emoji: '🍌', english: 'Banana', translations: { Nepali: 'केरा', Hindi: 'કેલા', Gujarati: 'કેળા' }, color: 'bg-secondary' },
  { emoji: '🐄', english: 'Cow', translations: { Nepali: 'गाई', Hindi: 'गाय', Gujarati: 'ગાય' }, color: 'bg-accent-green' },
  { emoji: '☀️', english: 'Sun', translations: { Nepali: 'घाम', Hindi: 'सूरज', Gujarati: 'સૂર્ય' }, color: 'bg-secondary' },
  { emoji: '🌙', english: 'Moon', translations: { Nepali: 'जुन', Hindi: 'चाँद', Gujarati: 'ચંદ્ર' }, color: 'bg-neutral-dark' },
  { emoji: '💧', english: 'Water', translations: { Nepali: 'पानी', Hindi: 'पानी', Gujarati: 'પાણી' }, color: 'bg-accent' },
  { emoji: '🤝', english: 'Friend', translations: { Nepali: 'साथी', Hindi: 'दोस्त', Gujarati: 'મિત્ર' }, color: 'bg-primary' },
  { emoji: '📖', english: 'Book', translations: { Nepali: 'किताब', Hindi: 'किताब', Gujarati: 'પુસ્તક' }, color: 'bg-accent' },
  { emoji: '🌸', english: 'Flower', translations: { Nepali: 'फूल', Hindi: 'फूल', Gujarati: 'ફૂલ' }, color: 'bg-pastel-pink' },
  { emoji: '🥛', english: 'Milk', translations: { Nepali: 'दूध', Hindi: 'दूध', Gujarati: 'દૂધ' }, color: 'bg-neutral-gray' },
];