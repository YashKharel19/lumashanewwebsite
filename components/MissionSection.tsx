
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const MissionSection = () => {
  return (
    <section className="py-20 bg-neutral-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block font-body">Our Mission</span>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-dark mb-6 leading-tight">Why We Built Lumasha</h2>
            <div className="space-y-6 text-lg text-neutral-dark/70 font-body leading-relaxed mb-8">
              <p>Luamasha(Lumaषा) started with a simple conversation between us — one of those random chats about ideas that could actually make a difference. One of said something that stuck with both of us: “So many families in the diaspora are struggling to teach their kids their native language.” That one line lit a spark.<br /><br />

                We looked around and realized—it was true. So many immigrant families, including our own, were doing everything they could to build a future in a new country, but at the cost of something deeply personal: our roots. Our language, our culture, our stories—slowly slipping away with each new generation.<br /><br />

                That’s where Luamasha(Lumaषा) was born.
              </p>
            </div>
            <div className="space-y-4 mb-10">
              {[
                "Encourage curiosity, not pressure",
                "Celebrate every language equally",
                "Align with early childhood development"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary fill-current" />
                  <span className="font-bold text-neutral-dark font-body">{text}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="text-neutral-dark border-b-2 border-primary hover:text-primary transition-colors font-heading text-xl pb-1 inline-flex items-center gap-2">
              Read our full story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://cdn.wegic.ai/assets/onepage/agent/images/1766083107774.jpg" alt="Grandma reading to kids" className="w-full h-auto" />
            </div>
            <div className="absolute top-10 -right-10 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
