
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-neutral-dark mb-4">What Parents Are Saying</h2>
          <p className="font-body text-xl text-neutral-dark/70">Real families, real languages, real giggles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`p-8 rounded-3xl ${t.bg} relative hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md`}>
              <Quote className="w-10 h-10 text-black/10 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center font-heading text-xl text-neutral-dark">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-neutral-dark">{t.name}</h4>
                  <p className="text-xs text-neutral-dark/60 uppercase tracking-wider font-bold">{t.role}</p>
                </div>
              </div>
              <p className="font-body text-lg text-neutral-dark/80 italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
