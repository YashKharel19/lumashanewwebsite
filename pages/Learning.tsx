
import React, { useState } from 'react';
import { Book, Headphones, Image as ImageIcon, ArrowLeft, ArrowRight, Play, Loader2, X, ShoppingBag, Sparkles } from 'lucide-react';
import { MOCK_STORIES, PRONUNCIATION_DATA, FLASHCARD_ITEMS } from '../constants';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedLang, setSelectedLang] = useState('Nepali');

  const currentItem = FLASHCARD_ITEMS[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % FLASHCARD_ITEMS.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + FLASHCARD_ITEMS.length) % FLASHCARD_ITEMS.length);
    }, 150);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={onBack} className="flex items-center gap-2 font-bold text-neutral-dark mb-8 hover:text-primary transition-colors">
        <ArrowLeft className="w-5 h-5" /> Back to Playground
      </button>
      <div className="max-w-md mx-auto">
        <h2 className="font-heading text-4xl text-center mb-6">Word & Image Flashcards</h2>

        <div className="flex justify-center gap-2 mb-8 overflow-x-auto py-2">
          {['Nepali', 'Hindi', 'Gujarati'].map(l => (
            <button
              key={l}
              onClick={() => setSelectedLang(l)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${selectedLang === l ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-neutral-dark hover:bg-gray-200'}`}
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
            <h3 className="font-heading text-7xl text-primary mb-2 leading-tight">
              {(currentItem.translations as any)[selectedLang]}
            </h3>
            <p className="mt-10 text-neutral-dark/40 font-bold uppercase tracking-widest text-xs">Tap to See Image</p>
          </div>
          {/* Back: Image */}
          <div className={`absolute inset-0 backface-hidden rotate-y-180 ${currentItem.color} rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-12 text-center text-white`}>
            <div className="space-y-4">
              <span className="text-9xl animate-bounce inline-block drop-shadow-xl">{currentItem.emoji}</span>
              <h4 className="font-heading text-4xl mt-6 uppercase tracking-wider">{currentItem.english}</h4>
            </div>
            <p className="mt-10 text-white/40 font-bold uppercase tracking-widest text-xs">Tap to See Word</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 mt-12">
          <button
            onClick={handlePrev}
            className="p-5 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-all shadow-md active:scale-90"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="font-heading text-2xl text-neutral-dark/40">
            {currentIndex + 1} / {FLASHCARD_ITEMS.length}
          </div>
          <button
            onClick={handleNext}
            className="p-5 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-all shadow-md active:scale-90"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const StoryLibrary = ({ onBack }: { onBack: () => void }) => {
  const [glimpseStory, setGlimpseStory] = useState<any>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={onBack} className="flex items-center gap-2 font-bold text-neutral-dark mb-8 hover:text-primary transition-colors">
        <ArrowLeft className="w-5 h-5" /> Back to Playground
      </button>
      <h2 className="font-heading text-4xl mb-12">Storybook Shelf</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {MOCK_STORIES.map(story => (
          <div key={story.id} className="group cursor-pointer" onClick={() => setGlimpseStory(story)}>
            <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all group-hover:-translate-y-2 border-b-8 border-secondary">
              <img src={story.cover} alt={story.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-neutral-dark font-heading px-6 py-3 rounded-full flex items-center gap-2 shadow-xl">
                  <Play className="w-4 h-4 fill-current" /> Read Glimpse
                </button>
              </div>
            </div>
            <h3 className="font-heading text-xl text-neutral-dark">{story.title}</h3>
            <p className="text-neutral-dark/60 font-body">{story.language} • {story.pages} Pages</p>
          </div>
        ))}
      </div>

      {glimpseStory && (
        <GlimpseModal
          title={glimpseStory.title}
          images={glimpseStory.glimpse}
          ctaUrl={glimpseStory.etsyUrl}
          onClose={() => setGlimpseStory(null)}
        />
      )}
    </div>
  );
};

const GlimpseModal = ({ title, images, ctaUrl, onClose }: { title: string, images: string[], ctaUrl: string, onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
    <div className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      <div className="flex justify-between items-center p-8 bg-neutral-light border-b-2 border-gray-100">
        <h3 className="font-heading text-3xl text-neutral-dark">{title} (Preview)</h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors"><X className="w-8 h-8" /></button>
      </div>

      <div className="flex-grow overflow-y-auto p-8 md:p-12 space-y-12 bg-gray-50">
        <div className="max-w-2xl mx-auto space-y-12">
          {images.map((img, i) => (
            <div key={i} className="relative shadow-2xl rounded-xl overflow-hidden border-8 border-white bg-white">
              <img src={img} alt={`Page ${i + 1}`} className="w-full h-auto" />
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold">Page {i + 1}</div>
            </div>
          ))}
          <div className="text-center py-20 bg-white rounded-3xl border-4 border-dashed border-gray-200">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Book className="w-8 h-8" />
            </div>
            <h4 className="font-heading text-4xl text-neutral-dark mb-4">Want to read the whole story?</h4>
            <p className="font-body text-xl text-neutral-dark/60 mb-8 px-8">This is just a tiny glimpse! Get the full physical or digital version to finish Maya's adventure for {title}.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-8">
              <a
                href={ctaUrl}
                target="_blank"
                className="bg-primary text-white font-heading text-xl px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" /> Buy Full Book
              </a>
              <button
                onClick={onClose}
                className="border-2 border-neutral-dark text-neutral-dark font-heading text-xl px-10 py-4 rounded-full hover:bg-neutral-dark hover:text-white transition-all"
              >
                Keep Exploring
              </button>
            </div>
          </div>
        </div>
      </div>
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
  <div className="bg-white rounded-[2.5rem] p-10 border-2 border-gray-100 shadow-lg group-hover:shadow-2xl group-hover:border-primary group-hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center relative active:scale-95 overflow-hidden">
    {/* Decorative background element */}
    <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${color} opacity-5 group-hover:opacity-10 transition-all rounded-full group-hover:scale-150 duration-700`}></div>

    <div className={`w-28 h-28 ${color} ${iconColor} rounded-[2.5rem] flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
      <Icon className="w-14 h-14" />
      <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 text-neutral-dark opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-md">
        <Sparkles className="w-4 h-4 text-secondary fill-secondary" />
      </div>
    </div>

    <h3 className="font-heading text-3xl mb-4 text-neutral-dark relative z-10 group-hover:text-primary transition-colors">{title}</h3>
    <p className="font-body text-xl text-neutral-dark/60 mb-10 relative z-10 leading-relaxed">{desc}</p>

    <div className={`mt-auto w-full py-4 rounded-2xl font-heading text-xl border-2 flex items-center justify-center gap-3 transition-all duration-500 relative z-10 ${color === 'bg-primary' ? 'border-primary text-primary group-hover:bg-primary group-hover:text-white' : color === 'bg-secondary' ? 'border-secondary text-neutral-dark group-hover:bg-secondary' : 'border-accent text-accent group-hover:bg-accent group-hover:text-white'}`}>
      <Play className="w-5 h-5 fill-current" />
      <span>Enter Adventure</span>
    </div>
  </div>
);
