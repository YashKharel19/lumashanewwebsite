
import React from 'react';
import { Book, Headphones, Image as ImageIcon, Video, Star } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const LEARNING_STATS = [
  { name: 'Mon', words: 5 },
  { name: 'Tue', words: 8 },
  { name: 'Wed', words: 12 },
  { name: 'Thu', words: 7 },
  { name: 'Fri', words: 15 },
  { name: 'Sat', words: 20 },
  { name: 'Sun', words: 10 },
];

const COLORS = ['#FF6B6B', '#FFD93D', '#4D96FF', '#6BCB77', '#FF6B6B', '#FFD93D', '#4D96FF'];

export const Learning = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h1 className="font-heading text-5xl text-neutral-dark mb-4">Your Learning Library</h1>
          <p className="font-body text-xl text-neutral-dark/60 max-w-2xl mx-auto">Track your progress and dive into multilingual stories and activities.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 bg-pastel-blue rounded-3xl p-8 border-4 border-accent/10">
            <h2 className="font-heading text-2xl mb-8 flex items-center gap-2">
              <Star className="w-6 h-6 text-accent fill-accent" />
              Words Learned This Week
            </h2>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={LEARNING_STATS}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#4A5568', fontSize: 12, fontWeight: 'bold'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#4A5568', fontSize: 12}} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="words" radius={[10, 10, 0, 0]} barSize={40}>
                    {LEARNING_STATS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-pastel-pink rounded-3xl p-8 border-4 border-primary/10 flex flex-col justify-center">
            <div className="text-center">
              <div className="text-7xl font-heading text-primary mb-2">77</div>
              <div className="text-xl font-bold text-neutral-dark/70 uppercase tracking-widest mb-6">Total Words</div>
              <div className="space-y-4">
                <div className="bg-white/50 p-4 rounded-2xl flex items-center justify-between">
                  <span className="font-bold">Nepali</span>
                  <span className="text-primary font-heading">42</span>
                </div>
                <div className="bg-white/50 p-4 rounded-2xl flex items-center justify-between">
                  <span className="font-bold">Hindi</span>
                  <span className="text-secondary font-heading">25</span>
                </div>
                <div className="bg-white/50 p-4 rounded-2xl flex items-center justify-between">
                  <span className="font-bold">Gujarati</span>
                  <span className="text-accent font-heading">10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-gray rounded-3xl p-8 hover:shadow-xl transition-all cursor-pointer group flex items-center gap-6 border-b-4 border-accent">
            <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
              <Book className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-heading text-2xl mb-1">Story Time</h3>
              <p className="font-body text-neutral-dark/60">Read aloud stories with Maya and her grandmother.</p>
            </div>
          </div>
          <div className="bg-neutral-gray rounded-3xl p-8 hover:shadow-xl transition-all cursor-pointer group flex items-center gap-6 border-b-4 border-primary">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
              <Headphones className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-heading text-2xl mb-1">Listen & Learn</h3>
              <p className="font-body text-neutral-dark/60">Audio lessons and catchy nursery rhymes.</p>
            </div>
          </div>
          <div className="bg-neutral-gray rounded-3xl p-8 hover:shadow-xl transition-all cursor-pointer group flex items-center gap-6 border-b-4 border-secondary">
            <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
              <ImageIcon className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-heading text-2xl mb-1">Flashcard Master</h3>
              <p className="font-body text-neutral-dark/60">Review your collection of trilingual flashcards.</p>
            </div>
          </div>
          <div className="bg-neutral-gray rounded-3xl p-8 hover:shadow-xl transition-all cursor-pointer group flex items-center gap-6 border-b-4 border-accent-green">
            <div className="w-20 h-20 bg-accent-green rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
              <Video className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-heading text-2xl mb-1">Video Lessons</h3>
              <p className="font-body text-neutral-dark/60">Short, engaging animated clips for quick learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
