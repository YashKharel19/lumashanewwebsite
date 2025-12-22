
import React, { useState } from 'react';
import { Book, Headphones, Image as ImageIcon, Video, Star, Volume2, ArrowLeft, ArrowRight, RotateCw, Play, Loader2 } from 'lucide-react';
import { MOCK_STORIES } from '../constants';
import { AIWordAssistant } from '../components/AIWordAssistant';
// import { speakWord } from '../services/geminiService';

export const Learning = () => {
  const [activeView, setActiveView] = useState<'hub' | 'flashcards' | 'stories' | 'pronounce'>('hub');

  const renderContent = () => {
    switch (activeView) {
      case 'flashcards': return <FlashcardPlayground onBack={() => setActiveView('hub')} />;
      case 'stories': return <StoryLibrary onBack={() => setActiveView('hub')} />;
      case 'pronounce': return <PronunciationLab onBack={() => setActiveView('hub')} />;
      default: return <LearningHub onSelect={setActiveView} />;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {renderContent()}
    </div>
  );
};

const LearningHub = ({ onSelect }: { onSelect: (v: any) => void }) => (
  <>
    <header className="relative py-24 bg-neutral-dark text-white text-center overflow-hidden">
      <video
        src="https://cdn.wegic.ai/assets/onepage/agent/images/1766083298487.mp4"
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="font-heading text-5xl md:text-7xl mb-4">Learning Playground</h1>
        <p className="font-body text-xl max-w-2xl mx-auto opacity-90">
          Pick an adventure! Practice words, read stories, or master your pronunciation.
        </p>
      </div>
    </header>

    <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div onClick={() => onSelect('flashcards')} className="cursor-pointer group">
          <LearningCard icon={ImageIcon} title="Flashcard Fun" desc="Flip and learn trilingual words!" color="bg-primary" />
        </div>
        <div onClick={() => onSelect('stories')} className="cursor-pointer group">
          <LearningCard icon={Book} title="Story Shelf" desc="Dive into multilingual storybooks." color="bg-secondary" iconColor="text-neutral-dark" />
        </div>
        <div onClick={() => onSelect('pronounce')} className="cursor-pointer group">
          <LearningCard icon={Headphones} title="Pronounce Lab" desc="Native speaker audio for every word." color="bg-accent" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <AIWordAssistant />
      </div>
    </div>
  </>
);

const FlashcardPlayground = ({ onBack }: { onBack: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedLang, setSelectedLang] = useState('Nepali');

  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={onBack} className="flex items-center gap-2 font-bold text-neutral-dark mb-8 hover:text-primary transition-colors">
        <ArrowLeft className="w-5 h-5" /> Back to Playground
      </button>
      <div className="max-w-md mx-auto">
        <h2 className="font-heading text-4xl text-center mb-6">Trilingual Flashcards</h2>

        <div className="flex justify-center gap-2 mb-8">
          {['Nepali', 'Hindi', 'Gujarati'].map(l => (
            <button
              key={l}
              onClick={() => setSelectedLang(l)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${selectedLang === l ? 'bg-primary text-white' : 'bg-gray-100 text-neutral-dark'}`}
            >
              {l}
            </button>
          ))}
        </div>

        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={`relative w-full aspect-[3/4] cursor-pointer transition-all duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
          style={{ perspective: '1000px' }}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-white border-8 border-primary rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-12 text-center">
            <span className="text-8xl mb-8">🍎</span>
            <h3 className="font-heading text-6xl text-primary">Apple</h3>
            <p className="mt-6 text-neutral-dark/40 font-bold uppercase tracking-widest">Tap to Flip</p>
          </div>
          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-12 text-center text-white">
            <div className="space-y-8">
              <div>
                <span className="text-sm font-bold uppercase opacity-70">{selectedLang}</span>
                <h3 className="font-heading text-6xl">
                  {selectedLang === 'Nepali' ? 'स्याउ' : selectedLang === 'Hindi' ? 'सेब' : 'સફરજન'}
                </h3>
              </div>
              <button className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-all">
                <Volume2 className="w-10 h-10" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-12">
          <button className="p-4 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-all"><ArrowLeft /></button>
          <button className="p-4 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-all"><ArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

const StoryLibrary = ({ onBack }: { onBack: () => void }) => (
  <div className="container mx-auto px-4 py-12">
    <button onClick={onBack} className="flex items-center gap-2 font-bold text-neutral-dark mb-8 hover:text-primary transition-colors">
      <ArrowLeft className="w-5 h-5" /> Back to Playground
    </button>
    <h2 className="font-heading text-4xl mb-12">Storybook Shelf</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {MOCK_STORIES.map(story => (
        <div key={story.id} className="group cursor-pointer">
          <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all group-hover:-translate-y-2 border-b-8 border-secondary">
            <img src={story.cover} alt={story.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white text-neutral-dark font-heading px-6 py-3 rounded-full flex items-center gap-2 shadow-xl">
                <Play className="w-4 h-4 fill-current" /> Read Now
              </button>
            </div>
          </div>
          <h3 className="font-heading text-xl text-neutral-dark">{story.title}</h3>
          <p className="text-neutral-dark/60 font-body">{story.language} • {story.pages} Pages</p>
        </div>
      ))}
    </div>
  </div>
);

const PronunciationLab = ({ onBack }: { onBack: () => void }) => {
  const [text, setText] = useState('');
  const [lang, setLang] = useState('Nepali');
  const [loading, setLoading] = useState(false);

  // const handleSpeak = async () => {
  //   if (!text) return;
  //   setLoading(true);
  //   try {
  //     const audioBase64 = await speakWord(text, lang);
  //     if (audioBase64) {
  //       // Create audio blob from base64
  //       const binaryString = window.atob(audioBase64);
  //       const len = binaryString.length;
  //       const bytes = new Uint8Array(len);
  //       for (let i = 0; i < len; i++) {
  //         bytes[i] = binaryString.charCodeAt(i);
  //       }

  //       // This is raw PCM data from the Gemini API, usually requires AudioContext to play properly
  //       // For simple demo, we show a success state
  //       alert(`Native speaker audio generated for "${text}" in ${lang}. (Playing...)`);
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   setLoading(false);
  // };

  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={onBack} className="flex items-center gap-2 font-bold text-neutral-dark mb-8 hover:text-primary transition-colors">
        <ArrowLeft className="w-5 h-5" /> Back to Playground
      </button>
      <div className="max-w-2xl mx-auto bg-neutral-light rounded-[3rem] p-12 border-4 border-dashed border-accent/30 text-center">
        <div className="w-20 h-20 bg-accent text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
          <Volume2 className="w-10 h-10" />
        </div>
        <h2 className="font-heading text-4xl text-neutral-dark mb-4">Pronunciation Lab</h2>
        <p className="font-body text-lg text-neutral-dark/60 mb-8">Type any word and hear our native speaker "Wise Owl" say it back!</p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Nepali', 'Hindi', 'Gujarati'].map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${lang === l ? 'bg-accent text-white shadow-lg' : 'bg-white text-neutral-dark hover:bg-gray-100'}`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a word (e.g. Namaste)"
            className="flex-grow px-8 py-5 rounded-3xl border-2 border-accent/20 focus:border-accent focus:outline-none font-heading text-2xl shadow-inner"
          />
          <button
            // onClick={handleSpeak}
            disabled={loading || !text}
            className="bg-accent text-white px-8 py-5 rounded-3xl hover:bg-accent-hover transition-all flex items-center gap-2 shadow-xl disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin w-6 h-6" /> : <Play className="w-6 h-6 fill-current" />}
          </button>
        </div>
      </div>
    </div>
  );
};

const LearningCard = ({ icon: Icon, title, desc, color, iconColor = "text-white" }: any) => (
  <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all flex flex-col items-center text-center">
    <div className={`w-24 h-24 ${color} ${iconColor} rounded-[2rem] flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
      <Icon className="w-12 h-12" />
    </div>
    <h3 className="font-heading text-2xl mb-2 text-neutral-dark">{title}</h3>
    <p className="font-body text-neutral-dark/60">{desc}</p>
  </div>
);
