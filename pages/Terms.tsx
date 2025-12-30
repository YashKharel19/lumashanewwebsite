
import React from 'react';
import { Gavel, ShieldCheck, Heart, FileText } from 'lucide-react';

export const Terms = () => {
    return (
        <div className="bg-white min-h-screen py-20 font-body">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="w-20 h-20 bg-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-neutral-dark">
                        <Gavel className="w-12 h-12" />
                    </div>
                    <h1 className="font-heading text-5xl text-neutral-dark mb-4">Terms of Lumasha</h1>
                    <p className="font-body text-xl text-neutral-dark/60">Our promises to you, and a few rules for our playground.</p>
                </div>

                <div className="space-y-12 text-lg text-neutral-dark/80 leading-relaxed">
                    <section className="bg-pastel-yellow p-8 rounded-3xl border border-secondary/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Heart className="w-6 h-6 text-primary" />
                            <h2 className="font-heading text-2xl text-neutral-dark">Welcome to Lumasha!</h2>
                        </div>
                        <p>By using our website, app, or purchasing our tools, you're joining a community dedicated to cultural preservation. These terms help us keep the magic safe and fun for everyone.</p>
                    </section>

                    <section>
                        <h2 className="font-heading text-3xl text-neutral-dark mb-4">1. Digital & Physical Content</h2>
                        <p className="mb-4">All Lumasha resources (videos, games, PDFs, and flashcards) are protected by copyright. They are for your personal, non-commercial use only. This means you can't resell our beautiful designs—they're meant for family learning!</p>
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-accent">
                            <p className="text-sm font-bold">Note for Teachers: If you'd like to use our tools in a classroom, please contact us for a corperate packages.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading text-3xl text-neutral-dark mb-4">2. Purchases & Marketplaces</h2>
                        <p>While you browse Lumasha, we often redirect you to Etsy or Amazon to complete your purchase safely. Your transactions on those platforms are governed by their respective terms and conditions. We only ship once payment is confirmed by our partners.</p>
                    </section>

                    <section className="bg-neutral-light p-8 rounded-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="w-6 h-6 text-accent-green" />
                            <h2 className="font-heading text-2xl text-neutral-dark">3. Safety & Accuracy</h2>
                        </div>
                        <p>We work with native speakers and educators to ensure our content is accurate. However, language is living and evolving! We are not responsible for regional dialect variations that may differ from your specific community's usage.</p>
                    </section>

                    <section>
                        <h2 className="font-heading text-3xl text-neutral-dark mb-4">4. Limitation of Liability</h2>
                        <p>Lumasha is a learning aid. We're here to help, but we don't guarantee specific fluency levels. We are also not liable for any tiny bumps or scrapes if a child plays too enthusiastically with our physical mats—please always supervise playtime!</p>
                    </section>

                    <p className="text-sm text-center text-neutral-dark/40 pt-10 border-t border-gray-100 italic">
                        Questions about these terms? Reach out to us at lumasha0407@gmail.com. <br />
                        Last Updated: December 2025.
                    </p>
                </div>
            </div>
        </div>
    );
};
