
import React, { useState, useEffect } from 'react';
import { Sparkles, Loader2, Globe } from 'lucide-react';
import { generateDailyWord } from '../services/geminiService';
import { AIResponse } from '../types';

export const AIWordAssistant = () => {
  const [word, setWord] = useState<AIResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState('Nepali');

  const fetchWord = async () => {
    setLoading(true);
    try {
      const data = await generateDailyWord(lang);
      setWord(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWord();
  }, [lang]);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-accent/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Sparkles className="w-20 h-20 text-accent" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-accent/10 rounded-lg text-accent">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-2xl text-neutral-dark">AI Word of the Day</h3>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {['Nepali', 'Hindi', 'Gujarati'].map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${lang === l ? 'bg-accent text-white' : 'bg-gray-100 text-neutral-dark hover:bg-gray-200'}`}
            >
              {l}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-10">
            <Loader2 className="w-10 h-10 text-accent animate-spin mb-4" />
            <p className="font-body font-bold text-neutral-dark/60 italic">Asking the Wise Owl...</p>
          </div>
        ) : word ? (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <div className="text-5xl font-heading text-primary mb-1">{word.word}</div>
              <div className="text-xl font-bold text-neutral-dark/70">"{word.translation}"</div>
              <div className="text-sm text-accent font-medium italic">{word.pronunciation}</div>
            </div>
            <div className="p-4 bg-pastel-blue rounded-2xl border border-accent/10 text-neutral-dark/80 font-medium">
              💡 {word.funFact}
            </div>
            <button 
              onClick={fetchWord}
              className="w-full py-3 bg-neutral-dark text-white rounded-xl font-heading hover:bg-black transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Generate Another
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
