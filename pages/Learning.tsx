
import React, { useState } from 'react';
import { Book, Headphones, Image as ImageIcon, Video, Star, Volume2, ArrowLeft, ArrowRight, RotateCw, Play, Loader2 } from 'lucide-react';
import { MOCK_STORIES, PRONUNCIATION_DATA } from '../constants';
import { AIWordAssistant } from '../components/AIWordAssistant';


// Audio helper from guidelines
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

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
        src="/assets/main.mp4"
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
          <LearningCard icon={ImageIcon} title="Flashcard Fun" desc="Rotate between words and images!" color="bg-primary" />
        </div>
        <div onClick={() => onSelect('stories')} className="cursor-pointer group">
          <LearningCard icon={Book} title="Story Shelf" desc="Dive into multilingual storybooks." color="bg-secondary" iconColor="text-neutral-dark" />
        </div>
        <div onClick={() => onSelect('pronounce')} className="cursor-pointer group">
          <LearningCard icon={Headphones} title="Pronounce Lab" desc="Master phonetics in 7 languages." color="bg-accent" />
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

  const wordMap: Record<string, string> = {
    Nepali: 'स्याउ',
    Hindi: 'सेब',
    Gujarati: 'સફરજન'
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={onBack} className="flex items-center gap-2 font-bold text-neutral-dark mb-8 hover:text-primary transition-colors">
        <ArrowLeft className="w-5 h-5" /> Back to Playground
      </button>
      <div className="max-w-md mx-auto">
        <h2 className="font-heading text-4xl text-center mb-6">Word & Image Flashcards</h2>

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
          {/* Front: Multilingual Word */}
          <div className="absolute inset-0 backface-hidden bg-white border-8 border-primary rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-12 text-center">
            <div className="text-sm font-bold uppercase text-primary/40 mb-2 tracking-widest">{selectedLang} Word</div>
            <h3 className="font-heading text-8xl text-primary">{wordMap[selectedLang]}</h3>
            <p className="mt-10 text-neutral-dark/40 font-bold uppercase tracking-widest text-xs">Tap to See Image</p>
          </div>
          {/* Back: Image */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-12 text-center text-white">
            <div className="space-y-4">
              <span className="text-9xl animate-bounce inline-block">🍎</span>
              <h4 className="font-heading text-4xl mt-6 uppercase tracking-wider">Apple</h4>
            </div>
            <p className="mt-10 text-white/40 font-bold uppercase tracking-widest text-xs">Tap to See Word</p>
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
  const [lang, setLang] = useState('English');
  const [loading, setLoading] = useState(false);



  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={onBack} className="flex items-center gap-2 font-bold text-neutral-dark mb-8 hover:text-primary transition-colors">
        <ArrowLeft className="w-5 h-5" /> Back to Playground
      </button>
      <div className="max-w-4xl mx-auto bg-neutral-light rounded-[3rem] p-8 md:p-12 border-4 border-dashed border-accent/30 text-center">
        <div className="w-20 h-20 bg-accent text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
          <Headphones className="w-10 h-10" />
        </div>
        <h2 className="font-heading text-4xl text-neutral-dark mb-4">Pronunciation Lab</h2>
        <p className="font-body text-lg text-neutral-dark/60 mb-8">Listen to key words with accurate IPA phonetics.</p>

        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 overflow-x-auto scrollbar-hide">
          {['English', 'Nepali', 'Hindi', 'Punjabi', 'Gujarati', 'French', 'Spanish'].map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-5 py-2 rounded-full font-bold transition-all text-sm whitespace-nowrap ${lang === l ? 'bg-accent text-white shadow-lg' : 'bg-white text-neutral-dark hover:bg-gray-100'}`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRONUNCIATION_DATA[lang].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-[2.5rem] shadow-lg border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-8xl">{item.emoji}</span>
              </div>
              <div className="relative z-10 text-left">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-4xl text-neutral-dark">{item.word}</h3>

                </div>
                <p className="font-bold text-accent text-lg mb-1">{item.translation}</p>
                <div className="inline-block bg-gray-100 px-3 py-1 rounded-lg text-xs font-mono text-neutral-dark/60 font-bold uppercase tracking-wider">
                  Phonetics: {item.ipa}
                </div>
              </div>
            </div>
          ))}
        </div>

        {loading && (
          <div className="mt-8 flex items-center justify-center gap-2 text-accent font-bold animate-pulse">
            <Loader2 className="animate-spin w-5 h-5" />
            Generating Audio...
          </div>
        )}
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
