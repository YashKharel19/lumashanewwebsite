
import React from 'react';
import { ShieldCheck, Lock, Eye, CheckCircle } from 'lucide-react';

export const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-accent">
                        <ShieldCheck className="w-12 h-12" />
                    </div>
                    <h1 className="font-heading text-5xl text-neutral-dark mb-4">Privacy & Safety</h1>
                    <p className="font-body text-xl text-neutral-dark/60">How we protect your family's information.</p>
                </div>

                <div className="space-y-12 font-body text-lg text-neutral-dark/80 leading-relaxed">
                    <section className="bg-pastel-blue p-8 rounded-3xl border border-accent/10">
                        <div className="flex items-center gap-3 mb-4">
                            <Lock className="w-6 h-6 text-accent" />
                            <h2 className="font-heading text-2xl text-neutral-dark">Our Kid-Safe Guarantee</h2>
                        </div>
                        <p>Lumasha is designed with kids at the center. We never display third-party ads, we never track children's individual behaviors for marketing, and we never sell any data. Period.</p>
                    </section>

                    <section>
                        <h2 className="font-heading text-3xl text-neutral-dark mb-4">Information We Collect</h2>
                        <p className="mb-4">When you purchase a kit or sign up for our newsletter, we collect standard info like:</p>
                        <ul className="space-y-2 ml-4">
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent-green" /> Name and email address</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent-green" /> Shipping address for physical kits</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent-green" /> Payment details (processed securely by Stripe or PayPal)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-heading text-3xl text-neutral-dark mb-4">How We Use Data</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-neutral-dark mb-2">Orders</h3>
                                <p className="text-sm">To ship your flashcards and send you digital downloads you've purchased.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-neutral-dark mb-2">Community</h3>
                                <p className="text-sm">To send you language tips, cultural stories, and product updates if you've opted in.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-neutral-light p-8 rounded-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Eye className="w-6 h-6 text-primary" />
                            <h2 className="font-heading text-2xl text-neutral-dark">Cookies</h2>
                        </div>
                        <p>We use essential cookies to keep your shopping cart working. We use minimal analytics to see which products parents love the most so we can make more of them!</p>
                    </section>

                    <p className="text-sm text-center text-neutral-dark/40 pt-10 border-t border-gray-100">
                        Last Updated: January 2024. Questions? Email hello@lumasha.com
                    </p>
                </div>
            </div>
        </div>
    );
};
