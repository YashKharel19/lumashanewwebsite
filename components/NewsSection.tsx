
import React from 'react';
import { Mail } from 'lucide-react';
import { NEWS_ITEMS } from '../constants';

export const NewsSection = () => {
  return (
    <section className="py-20 bg-neutral-light border-y border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl text-neutral-dark mb-10 text-center md:text-left">What’s New at Lumasha?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {NEWS_ITEMS.map(item => (
              <div 
                key={item.id} 
                className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start border-l-4 ${item.borderColor}`}
              >
                <span className={`${item.bgColor} ${item.textColor} p-2 rounded-lg shrink-0`}>
                  <item.icon className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-lg text-neutral-dark mb-1">{item.title}</h4>
                  <p className="text-neutral-dark/60 text-sm font-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center">
            <div className="mb-6 text-center">
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Newsletter</span>
              <h3 className="font-heading text-2xl text-neutral-dark mb-2">Be the first to know</h3>
              <p className="text-neutral-dark/60 text-sm font-body">Get early access to new languages and secret launch discounts.</p>
            </div>
            <form className="space-y-3" onSubmit={e => e.preventDefault()}>
              <input 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body"
                type="email" 
              />
              <button className="w-full bg-neutral-dark text-white font-heading py-3 rounded-xl hover:bg-black transition-colors flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Notify Me
              </button>
            </form>
            <p className="text-xs text-neutral-dark/40 mt-4 text-center">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
