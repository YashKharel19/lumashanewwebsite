
import React from 'react';
import { Heart, Globe, Users } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-neutral-light py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block font-body">About Lumasha</span>
          <h1 className="font-heading text-5xl md:text-6xl text-neutral-dark mb-6">
            Keeping Culture Alive,<br />One Word at a Time
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
              When our daughter Maya was born, we wanted her to speak Nepali with her grandparents. But most learning materials were outdated or boring. We wanted something that felt like <strong>play</strong>, not homework.
            </p>
            <p>
              So we gathered a team of educators, illustrators, and parents to build Lumasha (a blend of "Luma" meaning light and "Asha" meaning hope).
            </p>
            <p>
              Today, we help thousands of families connect with their heritage through beautiful, research-backed learning tools.
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
          <button className="bg-primary text-white px-8 py-4 rounded-full font-heading text-xl shadow-lg hover:bg-primary-hover transition-colors">
            Shop Products
          </button>
          <button className="border-2 border-neutral-dark text-neutral-dark px-8 py-4 rounded-full font-heading text-xl hover:bg-neutral-dark hover:text-white transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
