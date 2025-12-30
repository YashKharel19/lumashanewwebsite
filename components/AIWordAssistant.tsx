
import React, { useState, useEffect } from 'react';
import { Sparkles, Globe, Loader2 } from 'lucide-react';
import { WORD_OF_DAY_DATA } from '../constants';

const LANGUAGES = ['Hindi', 'Gujarati', 'Punjabi', 'Spanish', 'French'];

export const AIWordAssistant = () => {
  const [activeLang, setActiveLang] = useState(LANGUAGES[0]);
  const [word, setWord] = useState<any>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const fetchWord = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const list = WORD_OF_DAY_DATA[activeLang];
      const randomIndex = Math.floor(Math.random() * list.length);
      setWord(list[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    fetchWord();
  }, [activeLang]);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-accent/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Sparkles className="w-20 h-20 text-accent" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-lg text-accent">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl text-neutral-dark">Word of the Day</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map(lang => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${activeLang === lang ? 'bg-accent text-white shadow-md' : 'bg-gray-100 text-neutral-dark hover:bg-gray-200'}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {word && (
          <div className={`space-y-4 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div>
              <div className="text-5xl font-heading text-primary mb-1">{word.word}</div>
              <div className="text-xl font-bold text-neutral-dark/70">"{word.translation}"</div>
              <div className="text-sm text-accent font-medium italic">{word.pronunciation}</div>
            </div>
            <div className="p-4 bg-pastel-blue rounded-2xl border border-accent/10 text-neutral-dark/80 font-medium leading-relaxed">
              💡 {word.funFact}
            </div>
            <button
              onClick={fetchWord}
              disabled={isAnimating}
              className="w-full py-3 bg-neutral-dark text-white rounded-xl font-heading hover:bg-black transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            >
              {isAnimating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              Generate Another {activeLang} Word
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
