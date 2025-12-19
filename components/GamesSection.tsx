
import React from 'react';
import { Play, Star, Pencil, Music } from 'lucide-react';
import { MOCK_GAMES } from '../constants';
import { Link } from 'react-router-dom';

const IconMap: any = {
  star: Star,
  play: Play,
  pencil: Pencil,
  music: Music,
};

export const GamesSection = () => {
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MOCK_GAMES.map(game => {
              const Icon = IconMap[game.icon];
              return (
                <div
                  key={game.id}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer group border-2 border-transparent hover:border-black/5"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${game.color} text-white shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="bg-neutral-gray text-neutral-dark text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                      {game.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-neutral-dark mb-2 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-sm text-neutral-dark/70 font-body">{game.desc}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs font-bold text-neutral-dark/50">Ages {game.age}</span>
                    <Link to="/games" className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Play Now
                      <Play className="w-3 h-3 fill-current" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center lg:text-left">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Games Playground 🎮</span>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-dark mb-6 leading-tight">
              Turn Vocabulary into <span className="text-primary relative inline-block">Play
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="8" fill="none"></path>
                </svg>
              </span>
            </h2>
            <p className="font-body text-xl text-neutral-dark/70 mb-8 leading-relaxed">
              Short, screen-safe games that help kids recognize letters, sounds, and words without feeling like "homework".
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/games" className="bg-neutral-dark text-white font-heading text-lg px-8 py-4 rounded-full shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                <span>Enter Playground</span>
              </Link>
              <button onClick={handleDownloadApp} className="bg-white text-neutral-dark border-2 border-neutral-light hover:border-neutral-dark/20 font-heading text-lg px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all">
                Download App
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 opacity-70">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold">Played 50k+ times this week!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
