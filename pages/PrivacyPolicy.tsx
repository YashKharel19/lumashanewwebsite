
import React from 'react';
import { ShieldCheck, Lock, Eye, CheckCircle, Mail, ShoppingCart } from 'lucide-react';

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
                            <h2 className="font-heading text-2xl text-neutral-dark">Our Free & Safe App</h2>
                        </div>
                        <p>Lumasha's interactive learning platform is free to use. As of now, the application does not collect any personal information while your child is playing. There are no ads, no trackers, and no hidden data collection scripts inside the games area.</p>
                    </section>

                    <section>
                        <h2 className="font-heading text-3xl text-neutral-dark mb-4">Newsletter Subscription</h2>
                        <div className="flex gap-4 items-start">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <p>We only collect your email address when you explicitly subscribe to our newsletter via the website. This email is used solely to send you updates about new products, language tips, and community news.</p>
                        </div>
                    </section>

                    <section className="bg-neutral-light p-8 rounded-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <ShoppingCart className="w-6 h-6 text-primary" />
                            <h2 className="font-heading text-2xl text-neutral-dark">E-commerce Partners (Amazon & Etsy)</h2>
                        </div>
                        <p className="mb-4">When you purchase Lumasha products through our official stores on Amazon or Etsy, we receive and store limited data provided by those platforms for order fulfillment and tracking purposes:</p>
                        <ul className="space-y-2 ml-4">
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent-green" /> Full Name</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent-green" /> Shipping Address</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent-green" /> Email address associated with the store account</li>
                        </ul>
                        <p className="mt-4 text-sm opacity-70">This information is used strictly to ensure your kits reach you safely and to provide customer support if needed.</p>
                    </section>

                    <section>
                        <h2 className="font-heading text-3xl text-neutral-dark mb-4">Data Retention</h2>
                        <p>We keep your order information for as long as necessary to comply with tax laws and to provide you with support regarding your purchase. You can request the deletion of your data at any time by contacting us.</p>
                    </section>

                    <p className="text-sm text-center text-neutral-dark/40 pt-10 border-t border-gray-100">
                        Last Updated: December 2025. Questions? Email lumasha0407@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
};
