
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

export const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white px-4">
                <div className="text-center animate-in fade-in zoom-in duration-500 max-w-md">
                    <div className="w-24 h-24 bg-accent-green text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                        <CheckCircle className="w-12 h-12" />
                    </div>
                    <h1 className="font-heading text-5xl text-neutral-dark mb-4">Message Sent!</h1>
                    <p className="font-body text-xl text-neutral-dark/60 mb-10">
                        Thanks for reaching out to the Lumasha family. We'll get back to you faster than a soaring kite!
                        If we don't reply within 2 buisness day please mail at <strong> <em>lumasha0407@gmail.com</em></strong>
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="bg-primary text-white font-heading px-10 py-4 rounded-full shadow-lg hover:bg-primary-hover transition-all"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-pastel-blue py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
                    <MessageSquare className="w-64 h-64 text-accent" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="font-heading text-5xl md:text-6xl text-neutral-dark mb-6">Let’s Chat!</h1>
                    <p className="font-body text-xl text-neutral-dark/70 max-w-2xl mx-auto">
                        Have questions about our trilingual kits? Need help with the app? Or just want to say Namaste? We're all ears!
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 -mt-16 relative z-20">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h2 className="font-heading text-2xl text-neutral-dark mb-8">Quick Contact</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shadow-sm">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase text-neutral-dark/40">Email Us</p>
                                        <p className="font-bold text-neutral-dark">lumas0407@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shadow-sm">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase text-neutral-dark/40">Call/WhatsApp</p>
                                        <p className="font-bold text-neutral-dark">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 text-neutral-dark rounded-xl flex items-center justify-center shadow-sm">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase text-neutral-dark/40">Our Studio</p>
                                        <p className="font-bold text-neutral-dark">Edmonton,Candada</p>
                                        <p className="font-bold text-neutral-dark">Californaia,United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary text-white p-8 rounded-3xl shadow-xl text-center">
                            <h3 className="font-heading text-2xl mb-4">Parent Community</h3>
                            <p className="font-body mb-6 opacity-90">Join 200+ parents sharing language tips and culture hacks.</p>
                            <button className="bg-white text-primary font-bold px-6 py-3 rounded-full hover:scale-105 transition-all">
                                Join our FB Group
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="font-bold text-neutral-dark ml-2">Your Name</label>
                                        <input
                                            required
                                            placeholder="e.g. Maya Sharma"
                                            className="w-full px-6 py-4 rounded-2xl bg-neutral-gray border border-gray-100 focus:outline-none focus:border-primary transition-all font-body"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-bold text-neutral-dark ml-2">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="maya@example.com"
                                            className="w-full px-6 py-4 rounded-2xl bg-neutral-gray border border-gray-100 focus:outline-none focus:border-primary transition-all font-body"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="font-bold text-neutral-dark ml-2">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-6 py-4 rounded-2xl bg-neutral-gray border border-gray-100 focus:outline-none focus:border-primary transition-all font-body"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="font-bold text-neutral-dark ml-2">Your Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="Tell us about your learning journey..."
                                        className="w-full px-6 py-4 rounded-2xl bg-neutral-gray border border-gray-100 focus:outline-none focus:border-primary transition-all font-body resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-neutral-dark text-white font-heading text-xl py-6 rounded-2xl shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Magic Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
