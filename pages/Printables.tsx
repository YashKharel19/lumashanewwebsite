
import React from 'react';
import { Download, BookOpen, Star, FileText } from 'lucide-react';
import { PRINTABLES_DATA } from '../constants';

export const Printables = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block font-body">Free & Paid Resources</span>
                    <h1 className="font-heading text-5xl md:text-7xl text-neutral-dark mb-4">Learning Lab Printables</h1>
                    <p className="font-body text-xl text-neutral-dark/60 max-w-2xl mx-auto">
                        Bring the Lumasha magic to your printer. Coloring pages, activity sheets, and cultural posters ready in seconds.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRINTABLES_DATA.map((item) => (
                        <div key={item.id} className="group bg-white rounded-[2.5rem] border-2 border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col h-full">
                            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-heading text-2xl text-neutral-dark mb-3 line-clamp-2 h-[4rem]">{item.title}</h3>
                            <div className="flex items-center gap-2 mb-6 text-sm font-bold text-neutral-dark/40 uppercase tracking-widest font-body">
                                <FileText className="w-4 h-4" />
                                <span>{item.pages} Pages • {item.type}</span>
                            </div>
                            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                <span className="bg-gray-100 text-neutral-dark text-xs font-bold px-3 py-1 rounded-full uppercase">{item.level}</span>
                                <button className="bg-neutral-dark text-white p-3 rounded-full hover:bg-primary transition-colors shadow-md">
                                    <Download className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-pastel-pink rounded-[3rem] text-center border-4 border-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                        <BookOpen className="w-40 h-40" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="font-heading text-4xl text-neutral-dark mb-4">Want the VIP Printables Pack?</h2>
                        <p className="font-body text-xl text-neutral-dark/70 mb-8 max-w-xl mx-auto">Get our 100-page "Cultural Journey Bundle" for just $12.99. Everything your child needs for a year of cultural discovery.</p>
                        <button className="bg-primary text-white font-heading text-xl px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
                            <Star className="w-6 h-6 fill-current" />
                            <span>Unlock the Bundle</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
