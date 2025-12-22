
import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { ALL_PRODUCTS } from '../constants';

const CATEGORIES = ['All', 'Flashcards', 'EBooks', 'StoryBooks', 'Activities'];

export const Products = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProducts = activeTab === 'All'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === activeTab);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-8">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-neutral-dark mb-2">Shop Learning Tools</h1>
            <p className="font-body text-xl text-neutral-dark/60">Tools for tiny hands and big imaginations.</p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${activeTab === cat ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-neutral-dark hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map(p => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 bg-gray-100 shadow-sm border border-gray-100">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {p.badge && (
                  <div className={`absolute top-4 left-4 ${p.badgeColor} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm`}>
                    {p.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4 backdrop-blur-[2px]">
                  <a
                    href="https://www.etsy.com/ca/shop/Lumasha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-neutral-dark font-bold py-3 px-3 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-1.5 flex-1 justify-center hover:bg-neutral-light whitespace-nowrap text-xs sm:text-sm"
                  >
                    <ShoppingCart className="w-4 h-4 shrink-0" />
                    Buy on Etsy
                  </a>
                  <a
                    href="https://www.amazon.com/s?k=Lumaषा"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF9900] text-black font-bold py-3 px-3 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-1.5 flex-1 justify-center delay-75 hover:bg-[#FF8C00] whitespace-nowrap text-xs sm:text-sm"
                  >
                    <ShoppingCart className="w-4 h-4 shrink-0" />
                    Buy on Amazon
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-heading text-xl text-neutral-dark group-hover:text-primary transition-colors">{p.title}</h3>
                  <span className="font-bold text-lg text-primary">{p.price}</span>
                </div>
                <p className="text-neutral-dark/40 text-sm font-bold uppercase tracking-wider">{p.category}</p>
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  {[...Array(p.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  <span className="text-neutral-dark/40 ml-1 font-bold">({p.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
