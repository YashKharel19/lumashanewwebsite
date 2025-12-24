
import React, { useState } from 'react';
import { ArrowLeft, Play, Star, RotateCcw, Volume2, Sparkles, Loader2 } from 'lucide-react';
// import { speakWord } from '../services/geminiService';

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

const LANGUAGES = [
    { name: 'Nepali', code: 'ne' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Gujarati', code: 'gu' }
];

export const Games = () => {
    const [activeGame, setActiveGame] = useState<'menu' | 'counting' | 'vocab'>('menu');

    return (
        <div className="bg-neutral-light min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {activeGame !== 'menu' && (
                    <button
                        onClick={() => setActiveGame('menu')}
                        className="flex items-center gap-2 font-bold text-neutral-dark mb-8 hover:text-primary transition-colors bg-white px-6 py-3 rounded-full shadow-sm"
                    >
                        <ArrowLeft className="w-5 h-5" /> Back to Playground
                    </button>
                )}

                {activeGame === 'menu' && <GameMenu onSelect={setActiveGame} />}
                {activeGame === 'counting' && <CountingGame />}
                {activeGame === 'vocab' && <VocabExplorer />}
            </div>
        </div>
    );
};

const GameMenu = ({ onSelect }: { onSelect: (g: any) => void }) => (
    <div className="text-center animate-in fade-in zoom-in duration-500">
        <div className="inline-flex items-center gap-3 bg-secondary/20 text-neutral-dark px-6 py-2 rounded-full font-bold text-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            Interactive Playground
        </div>
        <h1 className="font-heading text-5xl md:text-7xl text-neutral-dark mb-12">Pick a Game!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
                onClick={() => onSelect('counting')}
                className="group bg-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border-b-8 border-primary"
            >
                <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all">
                    <Star className="w-12 h-12 fill-current" />
                </div>
                <h3 className="font-heading text-3xl mb-3">Number Safari</h3>
                <p className="font-body text-neutral-dark/60 text-lg">Learn counting 1-10 with cute friends.</p>
            </div>
            <div
                onClick={() => onSelect('vocab')}
                className="group bg-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border-b-8 border-accent"
            >
                <div className="w-24 h-24 bg-accent rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg group-hover:-rotate-12 group-hover:scale-110 transition-all">
                    <Play className="w-12 h-12 fill-current" />
                </div>
                <h3 className="font-heading text-3xl mb-3">Vocab Explorer</h3>
                <p className="font-body text-neutral-dark/60 text-lg">Discover apples, water, and more!</p>
            </div>
        </div>
    </div>
);

const CountingGame = () => {
    const [number, setNumber] = useState(1);
    const [lang, setLang] = useState('Nepali');
    const [loading, setLoading] = useState(false);

    const numMap: any = {
        Nepali: ['०', 'एक', 'दुई', 'तीन', 'चार', 'पाँच', 'छ', 'सात', 'आठ', 'नौ', 'दश'],
        Hindi: ['०', 'एक', 'दो', 'तीन', 'चार', 'पाँच', 'छ', 'सात', 'आठ', 'नौ', 'दस'],
        Gujarati: ['૦', 'એક', 'બે', 'ત્રણ', 'ચાર', 'પાંચ', 'છ', 'સાત', 'આઠ', 'નવ', 'દસ']
    };

    // const handleSpeak = async () => {
    //     setLoading(true);
    //     try {
    //         const audio = await speakWord(numMap[lang][number], lang);
    //         if (audio) {
    //             const ctx = new AudioContext({ sampleRate: 24000 });
    //             const buffer = await decodeAudioData(decode(audio), ctx, 24000, 1);
    //             const source = ctx.createBufferSource();
    //             source.buffer = buffer;
    //             source.connect(ctx.destination);
    //             source.start();
    //         }
    //     } catch (e) { console.error(e); }
    //     setLoading(false);
    // };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl text-center">
                <div className="flex justify-center gap-2 mb-10">
                    {LANGUAGES.map(l => (
                        <button
                            key={l.name}
                            onClick={() => setLang(l.name)}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${lang === l.name ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-neutral-dark'}`}
                        >
                            {l.name}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-between mb-12">
                    <button
                        disabled={number <= 1}
                        onClick={() => setNumber(n => n - 1)}
                        className="w-16 h-16 bg-neutral-light rounded-full flex items-center justify-center text-primary disabled:opacity-20 hover:bg-primary/10 transition-colors"
                    >
                        <ArrowLeft className="w-8 h-8" />
                    </button>

                    <div className="flex flex-col items-center">
                        <div className="text-9xl font-heading text-primary mb-4 animate-bounce">
                            {number}
                        </div>
                        <div className="text-5xl font-heading text-neutral-dark mb-4">
                            {numMap[lang][number]}
                        </div>
                        <button
                            // onClick={handleSpeak}
                            disabled={loading}
                            className="bg-accent text-white p-6 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="w-10 h-10 animate-spin" /> : <Volume2 className="w-10 h-10" />}
                        </button>
                    </div>

                    <button
                        disabled={number >= 10}
                        onClick={() => setNumber(n => n + 1)}
                        className="w-16 h-16 bg-neutral-light rounded-full flex items-center justify-center text-primary disabled:opacity-20 hover:bg-primary/10 transition-colors"
                    >
                        <ArrowRight className="w-8 h-8" strokeWidth={3} />
                    </button>
                </div>

                <div className="grid grid-cols-5 gap-4">
                    {[...Array(number)].map((_, i) => (
                        <div key={i} className="aspect-square bg-pastel-yellow rounded-2xl flex items-center justify-center text-5xl animate-in zoom-in duration-300">
                            🦁
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const VocabExplorer = () => {
    const [lang, setLang] = useState('Nepali');
    const [activeItem, setActiveItem] = useState(0);
    const [loading, setLoading] = useState(false);

    const items = [
        { emoji: '🍎', english: 'Apple', translations: { Nepali: 'स्याउ', Hindi: 'सेब', Gujarati: 'સફરજન' }, color: 'bg-primary' },
        { emoji: '🍌', english: 'Banana', translations: { Nepali: 'केरा', Hindi: 'केला', Gujarati: 'કેળા' }, color: 'bg-secondary' },
        { emoji: '💧', english: 'Water', translations: { Nepali: 'पानी', Hindi: 'पानी', Gujarati: 'પાણી' }, color: 'bg-accent' },
        { emoji: '🐶', english: 'Dog', translations: { Nepali: 'कुकुर', Hindi: 'कुत्ता', Gujarati: 'કુતરો' }, color: 'bg-accent-green' },
    ];

    // const handleSpeak = async () => {
    //     setLoading(true);
    //     try {
    //         const audio = await speakWord(items[activeItem].translations[lang as keyof typeof items[0]['translations']], lang);
    //         if (audio) {
    //             const ctx = new AudioContext({ sampleRate: 24000 });
    //             const buffer = await decodeAudioData(decode(audio), ctx, 24000, 1);
    //             const source = ctx.createBufferSource();
    //             source.buffer = buffer;
    //             source.connect(ctx.destination);
    //             source.start();
    //         }
    //     } catch (e) { console.error(e); }
    //     setLoading(false);
    // };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl">
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {LANGUAGES.map(l => (
                        <button
                            key={l.name}
                            onClick={() => setLang(l.name)}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${lang === l.name ? 'bg-accent text-white shadow-lg' : 'bg-gray-100 text-neutral-dark'}`}
                        >
                            {l.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {items.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveItem(i)}
                            className={`p-6 rounded-[2rem] transition-all flex flex-col items-center ${activeItem === i ? 'bg-neutral-dark text-white ring-4 ring-accent' : 'bg-neutral-gray text-neutral-dark hover:bg-gray-200'}`}
                        >
                            <span className="text-5xl mb-2">{item.emoji}</span>
                            <span className="font-bold">{item.english}</span>
                        </button>
                    ))}
                </div>

                <div className={`p-16 rounded-[4rem] text-center text-white shadow-inner relative overflow-hidden transition-colors ${items[activeItem].color}`}>
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Volume2 className="w-48 h-48" />
                    </div>
                    <div className="relative z-10">
                        <div className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">{lang}</div>
                        <h2 className="font-heading text-8xl mb-8">{items[activeItem].translations[lang as keyof typeof items[0]['translations']]}</h2>
                        <button
                            // onClick={handleSpeak}
                            disabled={loading}
                            className="bg-white text-neutral-dark w-24 h-24 rounded-full shadow-2xl flex items-center justify-center mx-auto hover:scale-110 active:scale-95 transition-all disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="w-10 h-10 animate-spin" /> : <Volume2 className="w-10 h-10" />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ArrowRight = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);
