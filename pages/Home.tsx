
import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TRUST_CARDS, CATEGORIES } from '../constants';
import { GamesSection } from '../components/GamesSection';
import { FeaturedKits } from '../components/FeaturedKits';
import { NewsSection } from '../components/NewsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { MissionSection } from '../components/MissionSection';
import { Download, Check } from 'lucide-react';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative w-full h-[85vh] lg:h-[90vh] overflow-hidden bg-neutral-dark">
      <video
        src="../assets/main.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      <div className="absolute inset-0 container mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-accent/20 backdrop-blur-md border border-accent/30 text-accent-green px-4 py-1.5 rounded-full font-bold text-sm mb-6">
            ✨ Loved by 100+ Families
          </div>
          <h1 className="font-heading text-5xl md:text-7xl leading-tight mb-6 drop-shadow-lg">
            Learning is <span className="text-secondary">Fun</span> in Every Language 🌍
          </h1>
          <p className="font-body text-xl md:text-2xl mb-8 text-gray-100 max-w-lg leading-relaxed drop-shadow-md">
            Playful flashcards, stories, and games that help kids fall in love with Nepali, Punjabi, Gujarati and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('games-playground')}
              className="bg-primary hover:bg-primary-hover text-white font-heading text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5 fill-current" />
              <span>Play a Game in App</span>
            </button>
            <button onClick={() => scrollToSection('featured-kits')}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 font-heading text-xl px-10 py-5 rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3">
              <span>Explore Kits</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-6 text-sm text-white/80 font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Designed for ages 2–8 • Montessori Inspired
          </p>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => (
  <section className="py-12 bg-white relative -mt-8 z-20 container mx-auto px-4 rounded-xl shadow-xl border-b-4 border-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {TRUST_CARDS.map((card, i) => (
        <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
          <div className={`p-3 rounded-full ${card.color} shrink-0`}>
            <card.icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading text-lg text-neutral-dark mb-1">{card.title}</h3>
            <p className="text-sm text-neutral-dark/70 leading-relaxed font-body font-medium">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const AppPromo = () => (
  <section id="app-promo" className="py-24 bg-primary overflow-hidden relative">
    <div className="absolute inset-0 opacity-10 bg-[url('../assets/cube.png')] pointer-events-none"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-white text-center lg:text-left">
          <h2 className="font-heading text-4xl md:text-6xl mb-6 leading-tight">Learning Continues in the App</h2>
          <div className="space-y-4 mb-10 max-w-md mx-auto lg:mx-0 font-body">
            {[
              "Play all games in one safe space",
              "Listen to stories with Maya & Grandma",
              "Practice words with trilingual cards"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-white/20 p-1 rounded-full"><Check className="w-4 h-4" /></div>
                <span className="font-bold text-lg">{text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a
              href="https://apps.apple.com/ca/app/lumasha/id6749781997"
              target="_blank"
              rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-gray-900 transition-all shadow-2xl hover:-translate-y-1">
              <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="text-left border-l border-white/20 pl-4">
                <div className="text-[10px] uppercase font-bold text-gray-400">Available on</div>
                <div className="font-bold text-xl leading-none">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.yash048.lumasha"
              target="_blank"
              rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-gray-900 transition-all shadow-2xl hover:-translate-y-1">
              <svg viewBox="0 0 512 512" className="w-8 h-8">
                <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                <path fill="#34A853" d="M47 0c-13 6.8-21.7 19.2-21.7 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                <path fill="#FBBC05" d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
                <path fill="#EA4335" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="text-left border-l border-white/20 pl-4">
                <div className="text-[10px] uppercase font-bold text-gray-400">Get it on</div>
                <div className="font-bold text-xl leading-none">Play Store</div>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-[320px] h-[640px] bg-black rounded-[3.5rem] border-[12px] border-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-30"></div>
            {/* High fidelity app photo mockup */}
            <div className="w-full h-full bg-neutral-light relative">
              <img
                src="../assets/appphoto.jpeg"
                alt="Lumasha App Screen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              {/* Optional UI overlay for realism */}

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Home = () => {
  return (
    <div className="flex flex-col bg-neutral-light">
      <Hero />
      <TrustBar />

      {/* Explore Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-dark mb-4">Explore Learning with Lumasha</h2>
            <p className="font-body text-xl text-neutral-dark/70 max-w-2xl mx-auto">Choose a path that matches your mood today—play, read, or explore.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((cat, i) => (
              <Link
                to="/products"
                key={i}
                className={`group relative overflow-hidden rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl border-b-4 ${cat.bg} border-transparent hover:border-black/5 cursor-pointer`}>
                <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-md rotate-3 group-hover:rotate-6 transition-transform`}>
                  <cat.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl text-neutral-dark mb-3">{cat.title}</h3>
                <p className="font-body text-neutral-dark/70 mb-8 leading-relaxed">{cat.desc}</p>
                <div className="flex items-center gap-2 font-bold text-neutral-dark group-hover:text-primary transition-colors">
                  <span>View all</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${cat.color} opacity-10 group-hover:scale-150 transition-transform duration-500`}></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Turn Vocabulary into Play Section */}
      <GamesSection />

      {/* 2. Featured Learning Kits Section */}
      <FeaturedKits />

      {/* 3. What's New Section (includes Newsletter) */}
      <NewsSection />

      {/* 4. What Parents Are Saying */}
      <TestimonialsSection />

      {/* 5. Our Mission Section */}
      <MissionSection />

      {/* App Promo at bottom */}
      <AppPromo />
    </div>
  );
};
