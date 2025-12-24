
import React from 'react';
import { Truck, RotateCcw, Package, Globe } from 'lucide-react';

export const ShippingReturns = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-primary">
                        <Truck className="w-12 h-12" />
                    </div>
                    <h1 className="font-heading text-5xl text-neutral-dark mb-4">Shipping & Returns</h1>
                    <p className="font-body text-xl text-neutral-dark/60">How we get the magic from our studio to your doorstep.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Shipping Section */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-primary rounded-2xl text-white shadow-lg">
                                <Package className="w-8 h-8" />
                            </div>
                            <h2 className="font-heading text-4xl text-neutral-dark">Shipping Info</h2>
                        </div>

                        <div className="space-y-6 font-body">
                            <div className="p-6 bg-neutral-light rounded-3xl border border-primary/10">
                                <h3 className="font-heading text-xl text-primary mb-2">Global Shipping</h3>
                                <p className="text-neutral-dark/70">We ship from our hubs in New York and Nepal to over 40 countries worldwide! Shipping rates are calculated at checkout based on weight and destination.</p>
                            </div>

                            <div className="p-6 bg-neutral-light rounded-3xl border border-primary/10">
                                <h3 className="font-heading text-xl text-primary mb-2">Processing Time</h3>
                                <p className="text-neutral-dark/70">Physical flashcard orders usually ship within 24-48 hours. Digital downloads are available instantly after payment.</p>
                            </div>

                            <div className="p-6 bg-neutral-light rounded-3xl border border-primary/10">
                                <h3 className="font-heading text-xl text-primary mb-2">Delivery Times</h3>
                                <ul className="space-y-2 text-sm text-neutral-dark/70">
                                    <li className="flex justify-between border-b border-white/50 pb-1"><span>US / Canada:</span> <span className="font-bold">3-7 business days</span></li>
                                    <li className="flex justify-between border-b border-white/50 pb-1"><span>UK / Europe:</span> <span className="font-bold">5-10 business days</span></li>
                                    <li className="flex justify-between pb-1"><span>Australia / Asia:</span> <span className="font-bold">7-14 business days</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Returns Section */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-secondary rounded-2xl text-neutral-dark shadow-lg">
                                <RotateCcw className="w-8 h-8" />
                            </div>
                            <h2 className="font-heading text-4xl text-neutral-dark">Returns Policy</h2>
                        </div>

                        <div className="space-y-6 font-body">
                            <div className="p-6 bg-pastel-yellow rounded-3xl border border-secondary/20">
                                <h3 className="font-heading text-xl text-neutral-dark mb-2">Love It Guarantee</h3>
                                <p className="text-neutral-dark/70">If you and your child don't love our flashcards, you can return them within 30 days for a full refund. No hard feelings!</p>
                            </div>

                            <div className="p-6 bg-pastel-yellow rounded-3xl border border-secondary/20">
                                <h3 className="font-heading text-xl text-neutral-dark mb-2">Return Conditions</h3>
                                <p className="text-neutral-dark/70">Flashcards should be in original packaging and in like-new condition. Return shipping costs are the responsibility of the customer unless the product arrived damaged.</p>
                            </div>

                            <div className="p-6 bg-pastel-yellow rounded-3xl border border-secondary/20">
                                <h3 className="font-heading text-xl text-neutral-dark mb-2">Damaged Items</h3>
                                <p className="text-neutral-dark/70">Did the postman get a bit rough? Email us a photo of the damage at lumasha0407@gmail.com and we'll send a replacement set immediately, for free!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 p-10 bg-neutral-dark rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                    <div className="flex items-center gap-6">
                        <Globe className="w-16 h-16 text-secondary animate-spin-slow" />
                        <div>
                            <h4 className="font-heading text-3xl">Free Shipping!</h4>
                            <p className="font-body opacity-80">On all US orders over $150USD. Automatically applied at checkout.</p>
                        </div>
                    </div>
                    <a href="/products" className="bg-secondary text-neutral-dark font-heading text-xl px-10 py-4 rounded-full hover:scale-105 transition-all">
                        Start Shopping
                    </a>
                </div>
            </div>
        </div>
    );
};
