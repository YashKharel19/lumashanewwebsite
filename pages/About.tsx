
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Globe, Users } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-neutral-light py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block font-body">About Lumasha</span>
          <h1 className="font-heading text-5xl md:text-6xl text-neutral-dark mb-6">
            Learn Local, Speak Global <br />
          </h1>
          <p className="font-body text-xl text-neutral-dark/70 max-w-2xl mx-auto leading-relaxed">
            We’re on a mission to make language learning playful, accessible, and joyful for families raising global citizens.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-secondary/20 rounded-3xl p-8 rotate-3">
              <img
                alt="Founders with kids"
                className="rounded-2xl shadow-lg -rotate-3 hover:rotate-0 transition-transform duration-500 w-full"
                src="https://cdn.wegic.ai/assets/onepage/agent/images/1766083107774.jpg"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6 text-lg text-neutral-dark/80 leading-relaxed font-body">
            <h2 className="font-heading text-4xl text-neutral-dark">Our Story</h2>
            <p>
              Keeping Culture Alive,  One Word at a Time<br /><br />

              Hi! We’re Yash and Niskarsha — two friends, like brothers, with a shared dream. <br /><br />

              Lumasha (Lumaषा) started with a simple conversation between us — one of those random chats about ideas that could actually make a difference. Yash said something that stuck with both of us: “So many families in the diaspora are struggling to teach their kids their native language.” That one line lit a spark.<br /><br />

              We looked around and realized—it was true. So many immigrant families, including our own, were doing everything they could to build a future in a new country, but at the cost of something deeply personal: our roots. Our language, our culture, our stories—slowly slipping away with each new generation.<br /><br />

              That’s where Lumasha (Lumaषा) was born.<br /><br />

              We launched Lumasha (Lumaषा) on April 7, 2025, with a mission to help children reconnect with their heritage through fun, simple, and meaningful tools. What started as just flashcards has grown into something much more. Today, Lumasha (Lumaषा) is about language, culture, and identity. It’s about giving kids a chance to know not just where they’re going—but where they come from.<br /><br />

              We’re still crawling, just getting started—but our dreams are big. We're building Lumasha (Lumaषा) not just for us, but for every family who’s ever felt the same longing we did.<br /><br />

              Thank you for being here. If you’ve read this far, we hope you’ll join us—share our story, try our products, and be part of this journey. Together, let’s raise a generation that knows who they are. <br /><br />

              Lumasha (Lumaषा) – Learn local, speak global.
            </p>
          </div>
        </div>
      </div>

      {/* Beliefs Grid */}
      <div className="bg-neutral-light py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-neutral-dark text-center mb-16">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl mb-3">Love First</h3>
              <p className="text-neutral-dark/70 font-body">Language is a connection of hearts, not just a skill.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl mb-3">Culture is Cool</h3>
              <p className="text-neutral-dark/70 font-body">We celebrate the beauty of every tradition and dialect.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl mb-3">It Takes a Village</h3>
              <p className="text-neutral-dark/70 font-body">We support parents, teachers, and grandparents alike.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Journey CTA */}
      <div className="py-20 container mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl mb-8">Join Our Journey</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/products" className="bg-primary text-white px-8 py-4 rounded-full font-heading text-xl shadow-lg hover:bg-primary-hover transition-colors">
            Shop Products
          </Link>
          <Link to="/contact" className="border-2 border-neutral-dark text-neutral-dark px-8 py-4 rounded-full font-heading text-xl hover:bg-neutral-dark hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
