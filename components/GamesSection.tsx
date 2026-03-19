
import React from 'react';
import { Play, Star, Pencil, Music, Palette, Layers, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';
import { MOCK_GAMES } from '../constants';

const IconMap: any = {
  star: Star,
  play: Play,
  pencil: Pencil,
  music: Music,
  palette: Palette,
  layers: Layers,
  sparkles: Sparkles,
};

export const GamesSection = () => {
  const navigate = useNavigate();

  const handleDownloadApp = () => {
    const element = document.getElementById('app-promo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="games-playground" className="py-20 bg-pastel-yellow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl font-heading text-secondary rotate-12">A</div>
        <div className="absolute bottom-20 right-20 text-9xl font-heading text-primary -rotate-12">क</div>
        <div className="absolute top-40 right-40 text-8xl font-heading text-accent rotate-45">1</div>
      </div>

      <div className="w-full px-4 relative z-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block font-body">Games Playground 🎮</span>
            <h2 className="font-heading text-5xl md:text-7xl text-neutral-dark mb-6 leading-tight">
              Turn Vocabulary into <span className="text-primary relative inline-block">Play
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none"></path>
                </svg>
              </span>
            </h2>
            <p className="font-body text-xl text-neutral-dark/70 mb-8 leading-relaxed max-w-2xl mx-auto">
              Short, screen-safe games that help kids recognize letters, sounds, and words without feeling like "homework".
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_GAMES.map(game => {
              const Icon = IconMap[game.icon];
              return (
                <div
                  key={game.id}
                  onClick={() => navigate('/games')}
                  className="bg-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all cursor-pointer group border-2 border-transparent hover:border-black/5 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-5 rounded-2xl ${game.color} text-white shadow-lg group-hover:rotate-12 transition-transform`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    <span className="bg-neutral-gray text-neutral-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {game.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl text-neutral-dark mb-4 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-lg text-neutral-dark/70 font-body flex-grow">{game.desc}</p>
                  <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm font-bold text-neutral-dark/50 italic">Ages {game.age}</span>
                    <div className="text-primary font-bold text-lg flex items-center gap-2 group-hover:gap-4 transition-all">
                      Play Now
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate('/games')}
              className="bg-neutral-dark text-white font-heading text-2xl px-12 py-6 rounded-full shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
            >
              <Play className="w-6 h-6 fill-current" />
              <span>Enter Playground</span>
            </button>
            <button
              onClick={handleDownloadApp}
              className="bg-white text-neutral-dark border-2 border-neutral-light hover:border-neutral-dark/20 font-heading text-2xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
