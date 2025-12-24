
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../constants';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="w-20 h-20 bg-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-secondary">
                        <HelpCircle className="w-12 h-12" />
                    </div>
                    <h1 className="font-heading text-5xl text-neutral-dark mb-4">Frequently Asked Questions</h1>
                    <p className="font-body text-xl text-neutral-dark/60">Everything you need to know about Lumasha products and tools.</p>
                </div>

                <div className="space-y-4">
                    {FAQ_DATA.map((item, i) => (
                        <div
                            key={i}
                            className={`border-2 rounded-3xl overflow-hidden transition-all ${openIndex === i ? 'border-primary bg-primary/5 shadow-lg' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">{item.category}</span>
                                    <h3 className="font-heading text-2xl text-neutral-dark">{item.q}</h3>
                                </div>
                                <ChevronDown className={`w-6 h-6 transition-transform ${openIndex === i ? 'rotate-180 text-primary' : 'text-gray-300'}`} />
                            </button>
                            <div
                                className={`px-8 transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="font-body text-lg text-neutral-dark/70 leading-relaxed">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-neutral-light rounded-[3rem] text-center border-4 border-dashed border-gray-200">
                    <h2 className="font-heading text-3xl mb-4">Still have questions?</h2>
                    <p className="font-body text-lg text-neutral-dark/60 mb-8">Our friendly support team is always ready to help you out.</p>
                    <a href="/contact" className="inline-block bg-primary text-white font-heading text-xl px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform">
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    );
};
