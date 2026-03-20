
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Star, RotateCcw, Volume2, Sparkles, Loader2, Palette, Layers, Pencil, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';


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
    { name: 'English', code: 'en' },
    { name: 'Nepali', code: 'ne' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Punjabi', code: 'pb' },
    { name: 'Gujarati', code: 'gu' },
    { name: 'French', code: 'fr' },
    { name: 'Spanish', code: 'es' }
];

export const Games = () => {
    const [activeGame, setActiveGame] = useState<'menu' | 'counting' | 'vocab' | 'colors' | 'memory' | 'match' | 'quiz'>('menu');

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
                {activeGame === 'colors' && <ColorHunt />}
                {activeGame === 'memory' && <MemoryMatch />}
                {activeGame === 'match' && <MatchMania />}
                {activeGame === 'quiz' && <QuizWhiz />}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
                onClick={() => onSelect('counting')}
                className="group bg-white p-8 rounded-[3rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border-b-8 border-primary"
            >
                <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all">
                    <Star className="w-10 h-10 fill-current" />
                </div>
                <h3 className="font-heading text-2xl mb-2">Number Safari</h3>
                <p className="font-body text-neutral-dark/60 text-base">Learn counting 0-10 with cute friends.</p>
            </div>
            <div
                onClick={() => onSelect('vocab')}
                className="group bg-white p-8 rounded-[3rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border-b-8 border-accent"
            >
                <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:-rotate-12 group-hover:scale-110 transition-all">
                    <Play className="w-10 h-10 fill-current" />
                </div>
                <h3 className="font-heading text-2xl mb-2">Vocab Explorer</h3>
                <p className="font-body text-neutral-dark/60 text-base">Discover apples, water, and more!</p>
            </div>
            <div
                onClick={() => onSelect('colors')}
                className="group bg-white p-8 rounded-[3rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border-b-8 border-secondary"
            >
                <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all">
                    <Palette className="w-10 h-10" />
                </div>
                <h3 className="font-heading text-2xl mb-2">Color Hunt</h3>
                <p className="font-body text-neutral-dark/60 text-base">Guess the color of hidden objects!</p>
            </div>
            <div
                onClick={() => onSelect('memory')}
                className="group bg-white p-8 rounded-[3rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border-b-8 border-accent-green"
            >
                <div className="w-20 h-20 bg-accent-green rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:-rotate-12 group-hover:scale-110 transition-all">
                    <Layers className="w-10 h-10" />
                </div>
                <h3 className="font-heading text-2xl mb-2">Memory Match</h3>
                <p className="font-body text-neutral-dark/60 text-base">Find the matching pairs of cards.</p>
            </div>
            <div
                onClick={() => onSelect('match')}
                className="group bg-white p-8 rounded-[3rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border-b-8 border-primary"
            >
                <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all">
                    <Pencil className="w-10 h-10" />
                </div>
                <h3 className="font-heading text-2xl mb-2">Match Mania</h3>
                <p className="font-body text-neutral-dark/60 text-base">Match the words to their pictures.</p>
            </div>
            <div
                onClick={() => onSelect('quiz')}
                className="group bg-white p-8 rounded-[3rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border-b-8 border-secondary"
            >
                <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:-rotate-12 group-hover:scale-110 transition-all">
                    <Sparkles className="w-10 h-10" />
                </div>
                <h3 className="font-heading text-2xl mb-2">Quiz Whiz</h3>
                <p className="font-body text-neutral-dark/60 text-base">Test your knowledge with fun questions!</p>
            </div>
        </div>
    </div>
);


const CountingGame = () => {
    const [number, setNumber] = useState(1);
    const [lang, setLang] = useState('English');
    const [loading, setLoading] = useState(false);

    const digitsMap: any = {
        English: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        Nepali: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९', '१०'],
        Hindi: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९', '१०'],
        Punjabi: ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯', '੧੦'],
        Gujarati: ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯', '૧૦'],
        French: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        Spanish: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    };

    const wordsMap: any = {
        English: ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'],
        Nepali: ['शून्य', 'एक', 'दुई', 'तीन', 'चार', 'पाँच', 'छ', 'सात', 'आठ', 'नौ', 'दश'],
        Hindi: ['शून्य', 'एक', 'दो', 'तीन', 'चार', 'पाँच', 'छ', 'सात', 'आठ', 'नौ', 'दस'],
        Punjabi: ['ਸਿਫ਼ਰ', 'ਇੱਕ', 'ਦੋ', 'ਤਿੰਨ', 'ਚਾਰ', 'ਪੰਜ', 'ਛੇ', 'ਸੱਤ', 'ਅੱਠ', 'ਨੌਂ', 'ਦਸ'],
        Gujarati: ['શૂન્ય', 'એક', 'બે', 'ત્રણ', 'ચાર', 'પાંચ', 'છ', 'સાત', 'આઠ', 'નવ', 'દસ'],
        French: ['Zéro', 'Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf', 'Dix'],
        Spanish: ['Cero', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez']
    };



    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2">
                    {LANGUAGES.map(l => (
                        <button
                            key={l.name}
                            onClick={() => setLang(l.name)}
                            className={`px-4 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${lang === l.name ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-neutral-dark hover:bg-gray-200'}`}
                        >
                            {l.name}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-between mb-12">
                    <button
                        disabled={number <= 0}
                        onClick={() => setNumber(n => n - 1)}
                        className="w-12 h-12 md:w-16 md:h-16 bg-neutral-light rounded-full flex items-center justify-center text-primary disabled:opacity-20 hover:bg-primary/10 transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    <div className="flex flex-col items-center">
                        <div className="text-8xl md:text-9xl font-heading text-primary mb-2 animate-bounce">
                            {digitsMap[lang][number]}
                        </div>
                        <div className="text-3xl md:text-5xl font-heading text-neutral-dark mb-6">
                            {wordsMap[lang][number]}
                        </div>

                    </div>

                    <button
                        disabled={number >= 10}
                        onClick={() => setNumber(n => n + 1)}
                        className="w-12 h-12 md:w-16 md:h-16 bg-neutral-light rounded-full flex items-center justify-center text-primary disabled:opacity-20 hover:bg-primary/10 transition-colors"
                    >
                        <ArrowRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                    </button>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 md:gap-4 min-h-[120px] content-start py-4">
                    {[...Array(number)].map((_, i) => (
                        <div key={i} className="aspect-square bg-pastel-yellow rounded-2xl flex items-center justify-center text-3xl md:text-5xl animate-in zoom-in duration-300">
                            🦁
                        </div>
                    ))}
                    {number === 0 && <div className="col-span-full py-10 text-neutral-dark/30 font-bold uppercase italic">No lions yet! Add one!</div>}
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
        { emoji: '🍎', english: 'Apple', translations: { English: 'Apple', Nepali: 'स्याउ', Hindi: 'सेब', Punjabi: 'ਸੇਬ', Gujarati: 'સફરજન', French: 'Pomme', Spanish: 'Manzana' }, color: 'bg-primary' },
        { emoji: '🍌', english: 'Banana', translations: { English: 'Banana', Nepali: 'केरा', Hindi: 'केला', Punjabi: 'ਕੇਲਾ', Gujarati: 'કેળા', French: 'Banane', Spanish: 'Plátano' }, color: 'bg-secondary' },
        { emoji: '💧', english: 'Water', translations: { English: 'Water', Nepali: 'पानी', Hindi: 'पानी', Punjabi: 'ਪਾਣੀ', Gujarati: 'પાણી', French: 'Eau', Spanish: 'Agua' }, color: 'bg-accent' },
        { emoji: '🐶', english: 'Dog', translations: { English: 'Dog', Nepali: 'कुकुर', Hindi: 'कुत्ता', Punjabi: 'ਕੁੱਤਾ', Gujarati: 'કુતરો', French: 'Chien', Spanish: 'Perro' }, color: 'bg-accent-green' },
    ];



    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl">
                <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2">
                    {LANGUAGES.map(l => (
                        <button
                            key={l.name}
                            onClick={() => setLang(l.name)}
                            className={`px-4 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${lang === l.name ? 'bg-accent text-white shadow-lg' : 'bg-gray-100 text-neutral-dark hover:bg-gray-200'}`}
                        >
                            {l.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {items.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveItem(i)}
                            className={`p-4 md:p-6 rounded-[2rem] transition-all flex flex-col items-center ${activeItem === i ? 'bg-neutral-dark text-white ring-4 ring-accent' : 'bg-neutral-gray text-neutral-dark hover:bg-gray-200'}`}
                        >
                            <span className="text-4xl md:text-5xl mb-2">{item.emoji}</span>
                            <span className="font-bold text-sm md:text-base">{item.english}</span>
                        </button>
                    ))}
                </div>

                <div className={`p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] text-center text-white shadow-inner relative overflow-hidden transition-colors ${items[activeItem].color}`}>
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Volume2 className="w-48 h-48" />
                    </div>
                    <div className="relative z-10">
                        <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">{lang}</div>
                        <h2 className="font-heading text-5xl md:text-8xl mb-8 leading-tight">{items[activeItem].translations[lang as keyof typeof items[0]['translations']]}</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};
const ColorHunt = () => {
    const [lang, setLang] = useState('English');
    const colors = [
        { name: { English: 'Red', Nepali: 'रातो', Hindi: 'लाल', Punjabi: 'ਲਾਲ', Gujarati: 'લાલ', French: 'Rouge', Spanish: 'Rojo' }, class: 'bg-primary', image: '/assets/Apple.png' },
        { name: { English: 'Yellow', Nepali: 'पहेंलो', Hindi: 'पीला', Punjabi: 'ਪੀਲਾ', Gujarati: 'પીળો', French: 'Jaune', Spanish: 'Amarillo' }, class: 'bg-secondary', image: '/assets/Banana.png' },
        { name: { English: 'Blue', Nepali: 'निलो', Hindi: 'नीला', Punjabi: 'ਨੀਲਾ', Gujarati: 'વાદળી', French: 'Bleu', Spanish: 'Azul' }, class: 'bg-accent', image: '/assets/Glasswater.png' },
        { name: { English: 'Green', Nepali: 'हरियो', Hindi: 'हरा', Punjabi: 'ਹਰਾ', Gujarati: 'લીલો', French: 'Vert', Spanish: 'Verde' }, class: 'bg-accent-green', image: '/assets/Coriander.png' },
        { name: { English: 'Orange', Nepali: 'सुन्तला', Hindi: 'नारंगी', Punjabi: 'ਸੰਤਰੀ', Gujarati: 'નારંગી', French: 'Orange', Spanish: 'Naranja' }, class: 'bg-orange-500', image: '/assets/Orange.png' },
        { name: { English: 'Purple', Nepali: 'बैजनी', Hindi: 'बैंगनी', Punjabi: 'ਜਾਮਨੀ', Gujarati: 'જાંબલી', French: 'Violet', Spanish: 'Morado' }, class: 'bg-purple-500', image: '/assets/Brinjal.png' },
    ];

    const sentences: Record<string, (color: string) => string> = {
        English: (c) => `Can you find the ${c} color?`,
        Nepali: (c) => `के तपाईं ${c} रङ फेला पार्न सक्नुहुन्छ?`,
        Hindi: (c) => `क्या आप ${c} रंग पा सकते हैं?`,
        Punjabi: (c) => `ਕੀ ਤੁਸੀਂ ${c} ਰੰਗ ਲੱਭ ਸਕਦੇ ਹੋ?`,
        Gujarati: (c) => `શું તમે ${c} રંગ શોધી શકો છો?`,
        French: (c) => `Peux-tu trouver la couleur ${c} ?`,
        Spanish: (c) => `¿Puedes encontrar el color ${c}?`,
    };

    const [target, setTarget] = useState(colors[Math.floor(Math.random() * colors.length)]);
    const [revealed, setRevealed] = useState(false);
    const [score, setScore] = useState(0);

    const nextRound = () => {
        setTarget(colors[Math.floor(Math.random() * colors.length)]);
        setRevealed(false);
    };

    const handleGuess = (color: any) => {
        if (color.name.English === target.name.English) {
            setRevealed(true);
            setScore(s => s + 1);
            setTimeout(nextRound, 2000);
        }
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 text-center">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl">
                <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2">
                    {LANGUAGES.map(l => (
                        <button
                            key={l.name}
                            onClick={() => setLang(l.name)}
                            className={`px-4 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${lang === l.name ? 'bg-secondary text-neutral-dark shadow-lg' : 'bg-gray-100 text-neutral-dark hover:bg-gray-200'}`}
                        >
                            {l.name}
                        </button>
                    ))}
                </div>
                <div className="mb-8">
                    <span className="text-xl font-bold text-neutral-dark/50">Score: {score}</span>
                    <h2 className="font-heading text-3xl md:text-5xl text-neutral-dark mt-2">
                        {sentences[lang](target.name[lang as keyof typeof target.name])}
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                    {colors.map((c, i) => (
                        <button
                            key={i}
                            onClick={() => handleGuess(c)}
                            className={`aspect-square rounded-[2rem] shadow-lg hover:scale-105 transition-all flex flex-col overflow-hidden relative ${c.class} ${revealed && c.name.English === target.name.English ? 'ring-8 ring-white ring-offset-4 ring-offset-accent-green' : ''}`}
                        >
                            {revealed && c.name.English === target.name.English ? (
                                <div className="w-full h-full p-2 flex flex-col items-center justify-center">
                                    <div className="flex-1 w-full flex items-center justify-center min-h-0">
                                        <img
                                            src={c.image}
                                            alt=""
                                            className="max-w-full max-h-full object-contain rounded-xl shadow-sm"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                    <div className="text-white font-bold text-lg md:text-xl truncate mt-1 w-full text-center px-1">
                                        {c.name[lang as keyof typeof c.name]}
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-white/50 font-heading text-5xl">?</span>
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {revealed && (
                    <div className="animate-bounce text-accent-green font-bold text-2xl flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-8 h-8" /> Great Job!
                    </div>
                )}
            </div>
        </div>
    );
};

const MemoryMatch = () => {
    const [lang, setLang] = useState('English');
    const items = [
        { emoji: '🐶', image: '/assets/Dog.png', translations: { English: 'Dog', Nepali: 'कुकुर', Hindi: 'कुत्ता', Punjabi: 'ਕੁੱਤਾ', Gujarati: 'કુતરો', French: 'Chien', Spanish: 'Perro' } },
        { emoji: '🐱', image: '/assets/Cat.png', translations: { English: 'Cat', Nepali: 'बिरालो', Hindi: 'बिल्ली', Punjabi: 'ਬਿੱਲੀ', Gujarati: 'બિલાડી', French: 'Chat', Spanish: 'Gato' } },
        { emoji: '🐭', image: '/assets/Mouse.png', translations: { English: 'Mouse', Nepali: 'मुसो', Hindi: 'चूहा', Punjabi: 'ਚੂਹਾ', Gujarati: 'ઉંદર', French: 'Souris', Spanish: 'Ratón' } },
        { emoji: '🐰', image: '/assets/Kharayo.png', translations: { English: 'Rabbit', Nepali: 'खरायो', Hindi: 'खरगोश', Punjabi: 'ਖਰਗੋਸ਼', Gujarati: 'સસલું', French: 'Lapin', Spanish: 'Conejo' } },
        { emoji: '🦊', image: '/assets/Fox.png', translations: { English: 'Fox', Nepali: 'फ्याउरो', Hindi: 'लोमड़ी', Punjabi: 'ਲੋਮੜੀ', Gujarati: 'શિયાળ', French: 'Renard', Spanish: 'Zorro' } },
        { emoji: '🐻', image: '/assets/Bhalu.png', translations: { English: 'Bear', Nepali: 'भालु', Hindi: 'भालू', Punjabi: 'ਭਾਲੂ', Gujarati: 'રીંછ', French: 'Ours', Spanish: 'Oso' } },
    ];

    const [cards, setCards] = useState(() => {
        const doubled = [...items, ...items];
        return doubled.sort(() => Math.random() - 0.5).map((item, id) => ({ ...item, id, flipped: false, matched: false, rotating: false }));
    });
    const [flipped, setFlipped] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);
    const [isPreview, setIsPreview] = useState(true);

    // Initial preview
    useEffect(() => {
        const timer = setTimeout(() => {
            setCards(prev => prev.map(c => ({ ...c, flipped: false })));
            setIsPreview(false);
        }, 3000);

        // Flip all cards for preview
        setCards(prev => prev.map(c => ({ ...c, flipped: true })));

        return () => clearTimeout(timer);
    }, []);

    const handleFlip = (id: number) => {
        if (isPreview || flipped.length === 2 || cards[id].flipped || cards[id].matched) return;

        const newCards = [...cards];
        newCards[id].flipped = true;
        setCards(newCards);

        const newFlipped = [...flipped, id];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setMoves(m => m + 1);
            const [first, second] = newFlipped;
            if (cards[first].image === cards[second].image) {
                setTimeout(() => {
                    const rotatingCards = [...cards];
                    rotatingCards[first].rotating = true;
                    rotatingCards[second].rotating = true;
                    setCards(rotatingCards);

                    setTimeout(() => {
                        const matchedCards = [...cards];
                        matchedCards[first].matched = true;
                        matchedCards[second].matched = true;
                        setCards(matchedCards);
                        setFlipped([]);
                    }, 1000);
                }, 500);
            } else {
                setTimeout(() => {
                    const resetCards = [...cards];
                    resetCards[first].flipped = false;
                    resetCards[second].flipped = false;
                    setCards(resetCards);
                    setFlipped([]);
                }, 1000);
            }
        }
    };

    const resetGame = () => {
        const doubled = [...items, ...items];
        const shuffled = doubled.sort(() => Math.random() - 0.5).map((item, id) => ({ ...item, id, flipped: true, matched: false, rotating: false }));
        setCards(shuffled);
        setFlipped([]);
        setMoves(0);
        setIsPreview(true);

        setTimeout(() => {
            setCards(prev => prev.map(c => ({ ...c, flipped: false })));
            setIsPreview(false);
        }, 3000);
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 text-center">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl">
                <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2">
                    {LANGUAGES.map(l => (
                        <button
                            key={l.name}
                            onClick={() => setLang(l.name)}
                            className={`px-4 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${lang === l.name ? 'bg-accent-green text-white shadow-lg' : 'bg-gray-100 text-neutral-dark hover:bg-gray-200'}`}
                        >
                            {l.name}
                        </button>
                    ))}
                </div>
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xl font-bold text-neutral-dark/50">Moves: {moves}</span>
                    <button onClick={resetGame} className="text-primary hover:rotate-180 transition-all duration-500">
                        <RotateCcw className="w-8 h-8" />
                    </button>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {cards.map((card) => (
                        <button
                            key={card.id}
                            onClick={() => handleFlip(card.id)}
                            className={`aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-500 transform relative preserve-3d ${card.flipped || card.matched ? 'rotate-y-180' : ''} ${card.rotating ? 'animate-spin' : ''}`}
                        >
                            <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-neutral-gray flex items-center justify-center border-2 border-transparent hover:border-accent/20 transition-colors`}>
                                <HelpCircle className="w-10 h-10 text-neutral-dark/20" />
                            </div>
                            <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-accent text-white flex flex-col items-center justify-center p-2 shadow-lg overflow-hidden`}>
                                <div className="flex-1 w-full flex items-center justify-center min-h-0">
                                    <img
                                        src={card.image}
                                        alt=""
                                        className="max-w-full max-h-full object-contain rounded-lg"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                                <span className="text-sm sm:text-base font-bold uppercase tracking-tight truncate w-full text-center mt-1 px-1">
                                    {card.translations[lang as keyof typeof card.translations]}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
        </div>
    );
};

const MatchMania = () => {
    const [lang, setLang] = useState('English');
    const pairs = [
        { emoji: '🍎', translations: { English: 'Apple', Nepali: 'स्याउ', Hindi: 'सेब', Gujarati: 'સફરજન' } },
        { emoji: '🐶', translations: { English: 'Dog', Nepali: 'कुकुर', Hindi: 'कुत्ता', Gujarati: 'કુતરો' } },
        { emoji: '☀️', translations: { English: 'Sun', Nepali: 'घाम', Hindi: 'सूरज', Gujarati: 'સૂર્ય' } },
        { emoji: '🌙', translations: { English: 'Moon', Nepali: 'जुन', Hindi: 'चाँद', Gujarati: 'ચંદ્ર' } },
        { emoji: '🚗', translations: { English: 'Car', Nepali: 'गाडी', Hindi: 'गाड़ी', Gujarati: 'ગાડી' } },
        { emoji: '🏠', translations: { English: 'House', Nepali: 'घर', Hindi: 'घर', Gujarati: 'ઘર' } },
    ];

    const [shuffledEmojis, setShuffledEmojis] = useState(() => [...pairs].sort(() => Math.random() - 0.5));
    const [shuffledWords, setShuffledWords] = useState(() => [...pairs].sort(() => Math.random() - 0.5));
    const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
    const [selectedWord, setSelectedWord] = useState<string | null>(null);
    const [matches, setMatches] = useState<string[]>([]);

    const handleEmojiClick = (emoji: string) => {
        if (matches.includes(emoji)) return;
        setSelectedEmoji(emoji);
        if (selectedWord) {
            const pair = pairs.find(p => p.emoji === emoji);
            if (pair?.translations[lang as keyof typeof pair.translations] === selectedWord) {
                setMatches([...matches, emoji]);
                setSelectedEmoji(null);
                setSelectedWord(null);
            } else {
                setTimeout(() => {
                    setSelectedEmoji(null);
                    setSelectedWord(null);
                }, 500);
            }
        }
    };

    const handleWordClick = (word: string) => {
        const pair = pairs.find(p => p.translations[lang as keyof typeof p.translations] === word);
        if (pair && matches.includes(pair.emoji)) return;
        setSelectedWord(word);
        if (selectedEmoji) {
            const pair = pairs.find(p => p.emoji === selectedEmoji);
            if (pair?.translations[lang as keyof typeof pair.translations] === word) {
                setMatches([...matches, selectedEmoji]);
                setSelectedEmoji(null);
                setSelectedWord(null);
            } else {
                setTimeout(() => {
                    setSelectedEmoji(null);
                    setSelectedWord(null);
                }, 500);
            }
        }
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl">
                <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2">
                    {LANGUAGES.map(l => (
                        <button
                            key={l.name}
                            onClick={() => { setLang(l.name); setMatches([]); setSelectedEmoji(null); setSelectedWord(null); setShuffledWords([...pairs].sort(() => Math.random() - 0.5)); }}
                            className={`px-4 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${lang === l.name ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-neutral-dark hover:bg-gray-200'}`}
                        >
                            {l.name}
                        </button>
                    ))}
                </div>
                <h2 className="font-heading text-4xl text-center mb-12">Match Mania!</h2>
                <div className="grid grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-4">
                        {shuffledEmojis.map((p, i) => (
                            <button
                                key={i}
                                onClick={() => handleEmojiClick(p.emoji)}
                                className={`w-full p-4 md:p-6 rounded-2xl text-5xl shadow-md transition-all flex items-center justify-center min-h-[100px] md:min-h-[120px] ${matches.includes(p.emoji) ? 'bg-accent-green text-white opacity-50' : selectedEmoji === p.emoji ? 'bg-accent text-white scale-105' : 'bg-neutral-gray hover:bg-gray-200'}`}
                            >
                                {p.emoji}
                            </button>
                        ))}
                    </div>
                    <div className="space-y-4">
                        {shuffledWords.map((p, i) => (
                            <button
                                key={i}
                                onClick={() => handleWordClick(p.translations[lang as keyof typeof p.translations])}
                                className={`w-full p-4 md:p-6 rounded-2xl text-lg md:text-xl font-bold shadow-md transition-all flex items-center justify-center min-h-[100px] md:min-h-[120px] ${matches.find(m => pairs.find(pair => pair.emoji === m)?.translations[lang as keyof typeof p.translations] === p.translations[lang as keyof typeof p.translations]) ? 'bg-accent-green text-white opacity-50' : selectedWord === p.translations[lang as keyof typeof p.translations] ? 'bg-accent text-white scale-105' : 'bg-neutral-gray hover:bg-gray-200'}`}
                            >
                                {p.translations[lang as keyof typeof p.translations]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const QuizWhiz = () => {
    const [lang, setLang] = useState('English');
    const questionsMap: Record<string, any[]> = {
        English: [
            { q: "What color is an apple?", options: ["Red", "Blue", "Green", "Yellow"], a: "Red" },
            { q: "Which animal says 'Woof'?", options: ["Cat", "Dog", "Cow", "Lion"], a: "Dog" },
            { q: "What do we see in the sky at night?", options: ["Sun", "Moon", "Clouds", "Rainbow"], a: "Moon" },
            { q: "How many fingers do we have on one hand?", options: ["3", "4", "5", "10"], a: "5" },
        ],
        Nepali: [
            { q: "“Apple” लाई नेपालीमा के भनिन्छ?", options: ["केरा", "स्याउ", "आम", "कागती"], a: "स्याउ" },
            { q: "“Water” लाई नेपालीमा के भनिन्छ?", options: ["दूध", "चिया", "रस", "पानी"], a: "पानी" },
            { q: "“Balloon” लाई नेपालीमा के भनिन्छ?", options: ["किताब", "झोला", "गुब्बारा", "गाडी"], a: "गुब्बारा" },
            { q: "खाली ठाउँ भर्नुहोस् (Fill in the blank): “म ___ खान्छु।”", options: ["किताब", "स्याउ", "झोला", "कुर्सी"], a: "स्याउ" },
            { q: "राति आकाशमा के चम्किन्छ?", options: ["घाम", "तारा", "गाडी", "किताब"], a: "तारा" },
            { q: "घाम बिहान के गर्छ?", options: ["उदाउँछ", "सुत्छ", "उड्छ", "झर्छ"], a: "उदाउँछ" },
            { q: "कुकुर के गर्छ?", options: ["उड्छ", "भुक्छ", "तैरन्छ", "खेल्छ"], a: "भुक्छ" },
            { q: "कुन जनावर पानीमा बस्छ?", options: ["भालु", "माछा", "कुखुरा", "बिरालो"], a: "माछा" },
            { q: "५ भन्दा सानो अंक कुन हो?", options: ["७", "३", "८", "६"], a: "३" },
            { q: "कुन चीज गोलो हुन्छ?", options: ["किताब", "बल", "झोला", "कुर्सी"], a: "बल" },
            { q: "गाई के दिन्छ?", options: ["दूध", "माछा", "किताब", "चिया"], a: "दूध" },
            { q: "आकाशको रंग के हो?", options: ["नीलो", "हरियो", "पहेँलो", "रातो"], a: "नीलो" },
            { q: "“घ” पछि कुन अक्षर आउँछ?", options: ["ग", "च", "ङ", "क"], a: "ङ" },
            { q: "“च” बाट सुरु हुने कुन शब्द हो?", options: ["चरा", "केरा", "स्याउ", "गाई"], a: "चरा" },
            { q: "“झ” बाट सुरु हुने कुन शब्द हो?", options: ["झोला", "गाडी", "स्याउ", "आप"], a: "झोला" },
            { q: "“क” बाट सुरु हुने कुन शब्द हो?", options: ["किताब", "आप", "झोला", "घर"], a: "किताब" },
            { q: "“Sun” लाई नेपालीमा के भनिन्छ?", options: ["चन्द्रमा", "सूर्य", "तारा", "बादल"], a: "सूर्य" },
            { q: "“Car” लाई नेपालीमा के भनिन्छ?", options: ["घर", "गाडी", "रेल", "साइकल"], a: "गाडी" },
            { q: "कुन जनावर लामो घाँटी भएको हुन्छ?", options: ["भालु", "जिराफ", "कुकुर", "सुँगुर"], a: "जिराफ" },
        ],
        Hindi: [
            { q: "सेब का रंग क्या है?", options: ["लाल", "नीला", "हरा", "पीला"], a: "लाल" },
            { q: "कौन सा जानवर 'भौ-भौ' करता है?", options: ["बिल्ली", "कुत्ता", "गाय", "शेर"], a: "कुत्ता" },
            { q: "हम रात में आकाश में क्या देखते हैं?", options: ["सूरज", "चाँद", "बादल", "इंद्रधनुष"], a: "चाँद" },
            { q: "एक हाथ में कितनी उंगलियां होती हैं?", options: ["३", "४", "५", "१०"], a: "५" },
        ],
        Gujarati: [
            { q: "સફરજનનો રંગ કેવો હોય છે?", options: ["લાલ", "વાદળી", "લીલો", "પીળો"], a: "લાલ" },
            { q: "કયું પ્રાણી 'ભઉં-ભઉં' કરે છે?", options: ["બિલાડી", "કુતરો", "ગાય", "સિંહ"], a: "કુતરો" },
            { q: "આપણે રાત્રે આકાશમાં શું જોઈએ છીએ?", options: ["સૂર્ય", "ચંદ્ર", "વાદળ", "મેઘધનુષ"], a: "ચંદ્ર" },
            { q: "એક હાથમાં કેટલી આંગળીઓ હોય છે?", options: ["૩", "૪", "૫", "૧૦"], a: "૫" },
        ],
    };

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

    const handleAnswer = (option: string) => {
        if (feedback) return;

        if (option === questionsMap[lang][current].a) {
            setScore(s => s + 1);
            setFeedback('correct');
        } else {
            setFeedback('wrong');
        }

        setTimeout(() => {
            setFeedback(null);
            if (current < questionsMap[lang].length - 1) {
                setCurrent(c => c + 1);
            } else {
                setShowResult(true);
            }
        }, 1500);
    };

    if (showResult) {
        return (
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-white mx-auto mb-8">
                    <Star className="w-12 h-12 fill-current" />
                </div>
                <h2 className="font-heading text-5xl mb-4">Quiz Complete!</h2>
                <p className="text-2xl mb-8">You scored {score} out of {questionsMap[lang].length}</p>
                <button
                    onClick={() => { setCurrent(0); setScore(0); setShowResult(false); }}
                    className="bg-primary text-white px-8 py-4 rounded-full font-heading text-xl shadow-lg hover:scale-105 transition-all"
                >
                    Play Again
                </button>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl">
                <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2">
                    {Object.keys(questionsMap).map(l => (
                        <button
                            key={l}
                            onClick={() => { setLang(l); setCurrent(0); setScore(0); setShowResult(false); }}
                            className={`px-4 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${lang === l ? 'bg-secondary text-neutral-dark shadow-lg' : 'bg-gray-100 text-neutral-dark hover:bg-gray-200'}`}
                        >
                            {l}
                        </button>
                    ))}
                </div>
                <div className="mb-8 flex justify-between items-center">
                    <span className="bg-accent/10 text-accent px-4 py-1 rounded-full font-bold">Question {current + 1}/{questionsMap[lang].length}</span>
                    <span className="font-bold text-neutral-dark/50">Score: {score}</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-neutral-dark mb-10">{questionsMap[lang][current].q}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {questionsMap[lang][current].options.map((opt: string, i: number) => (
                        <button
                            key={i}
                            onClick={() => handleAnswer(opt)}
                            className={`p-6 rounded-2xl text-xl font-bold shadow-md transition-all text-left flex justify-between items-center ${feedback === 'correct' && opt === questionsMap[lang][current].a ? 'bg-accent-green text-white' : feedback === 'wrong' && opt === questionsMap[lang][current].a ? 'bg-accent-green text-white' : feedback === 'wrong' && opt !== questionsMap[lang][current].a ? 'bg-primary text-white' : 'bg-neutral-gray hover:bg-gray-200'}`}
                        >
                            {opt}
                            {feedback === 'correct' && opt === questionsMap[lang][current].a && <CheckCircle2 className="w-6 h-6" />}
                            {feedback === 'wrong' && opt !== questionsMap[lang][current].a && <XCircle className="w-6 h-6" />}
                        </button>
                    ))}
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
