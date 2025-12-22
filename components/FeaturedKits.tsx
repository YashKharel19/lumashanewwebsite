
import React from 'react';
import { ArrowRight, ShoppingBag, Star, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../constants';

export const FeaturedKits = () => {
  return (
    <section id="featured-kits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-dark mb-3">Featured Learning Kits</h2>
            <p className="font-body text-xl text-neutral-dark/70 max-w-xl">High-quality tools created for tiny hands and big imaginations.</p>
          </div>
          <Link to="/products" className="text-primary font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all">
            View all products <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 bg-gray-100">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {product.badge && (
                  <div className={`absolute top-4 left-4 ${product.badgeColor} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm`}>
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Link to="/products" className="bg-white text-neutral-dark font-bold px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    View Details
                  </Link>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading text-xl text-neutral-dark group-hover:text-primary transition-colors">{product.title}</h3>
                <span className="font-bold text-lg text-neutral-dark">{product.price}</span>
              </div>
              <p className="text-neutral-dark/60 text-sm mb-4">Multilingual learning pack.</p>
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'text-gray-200'}`} />
                ))}
                <span className="text-neutral-dark/40 ml-1">({product.reviews})</span>
              </div>
            </div>
          ))}
        </div>

        {/* Marketplace Links Section */}
        <div className="mt-16 bg-neutral-gray rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
          <div>
            <h4 className="font-heading text-xl text-neutral-dark mb-1">Prefer to shop on marketplaces?</h4>
            <p className="text-neutral-dark/60 font-body">Find our official stores on your favorite platforms.</p>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="https://www.etsy.com/ca/shop/Lumasha"
              target="_blank"
              rel="noopener noreferrer" className="bg-white border border-gray-200 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:border-primary hover:text-primary transition-colors shadow-sm">
              Buy on Etsy <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.amazon.com/s?k=Lumaषा"
              target="_blank"
              rel="noopener noreferrer" className="bg-white border border-gray-200 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:border-primary hover:text-primary transition-colors shadow-sm whitespace-nowrap text-xs sm:text-sm">
              Buy on Amazon <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
