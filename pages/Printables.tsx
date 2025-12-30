
import React, { useState } from 'react';
import { Download, BookOpen, Star, FileText, X, Check, Loader2, Sparkles, Layout } from 'lucide-react';
import { PRINTABLES_DATA } from '../constants';

export const Printables = () => {
    const [glimpsePrintable, setGlimpsePrintable] = useState<any>(null);
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = (printable: any) => {
        setIsDownloading(true);
        // Simulate processing time
        setTimeout(() => {
            try {
                const { title, pdfUrl } = printable;
                if (!pdfUrl) throw new Error("PDF URL not found");

                // Trigger a direct download from the path
                const link = document.createElement('a');
                link.href = pdfUrl;
                link.setAttribute('download', `${title.replace(/\s+/g, '_')}_Lumasha.pdf`);
                document.body.appendChild(link);
                link.click();
                link.parentNode?.removeChild(link);
            } catch (error) {
                console.error("Download failed:", error);
            } finally {
                setIsDownloading(false);
            }
        }, 1200);
    };

    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        <Sparkles className="w-4 h-4" />
                        Home Learning Library
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl text-neutral-dark mb-4">Printable Resources</h1>
                    <p className="font-body text-xl text-neutral-dark/60 max-w-2xl mx-auto">
                        High-quality PDF downloads for home learning. No physical shipping required—just download and play!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRINTABLES_DATA.map((item) => (
                        <div key={item.id} className="group bg-white rounded-[2.5rem] border-2 border-gray-100 p-8 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 transition-all flex flex-col h-full relative overflow-hidden">
                            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-heading text-2xl text-neutral-dark mb-3 line-clamp-2 h-[4rem] group-hover:text-primary transition-colors">{item.title}</h3>
                            <div className="flex items-center gap-2 mb-6 text-sm font-bold text-neutral-dark/40 uppercase tracking-widest font-body">
                                <FileText className="w-4 h-4" />
                                <span>{item.pages} Pages • {item.type}</span>
                            </div>
                            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                <span className="bg-gray-100 text-neutral-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase">{item.level}</span>
                                <button
                                    onClick={() => setGlimpsePrintable(item)}
                                    className="bg-neutral-dark text-white px-5 py-2.5 rounded-xl hover:bg-primary transition-all shadow-md flex items-center gap-2 text-sm font-heading active:scale-95"
                                >
                                    <Layout className="w-4 h-4" />
                                    View Glimpse
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {glimpsePrintable && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setGlimpsePrintable(null)}></div>
                        <div className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300">
                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-8 bg-neutral-light border-b-2 border-gray-100">
                                <div>
                                    <h3 className="font-heading text-3xl text-neutral-dark">{glimpsePrintable.title}</h3>
                                    <p className="text-sm font-bold text-neutral-dark/40 uppercase tracking-widest">Resource Preview</p>
                                </div>
                                <button
                                    onClick={() => setGlimpsePrintable(null)}
                                    className="p-3 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                            </div>

                            {/* Modal Content - Mirrored from Story Shelf */}
                            <div className="flex-grow overflow-y-auto p-8 md:p-12 space-y-12 bg-gray-50">
                                <div className="max-w-2xl mx-auto space-y-12">
                                    {glimpsePrintable.glimpse.map((img: string, i: number) => (
                                        <div key={i} className="relative shadow-2xl rounded-xl overflow-hidden border-8 border-white bg-white group/page transition-transform hover:scale-[1.02]">
                                            <img
                                                src={img}
                                                alt={`Preview Page ${i + 1}`}
                                                className="w-full h-auto opacity-95 group-hover/page:opacity-100 transition-opacity"
                                            />
                                            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                                                Preview Page {i + 1}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Download CTA Section */}
                                    <div className="text-center py-20 bg-white rounded-[3rem] border-4 border-dashed border-gray-200 p-8 shadow-inner">
                                        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                            <Download className="w-10 h-10" />
                                        </div>
                                        <h4 className="font-heading text-4xl text-neutral-dark mb-4">Ready to Print?</h4>
                                        <p className="font-body text-xl text-neutral-dark/60 mb-10 px-8 max-w-lg mx-auto leading-relaxed">
                                            Download the full, high-resolution PDF for <strong>{glimpsePrintable.title}</strong> directly from our library.
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-8">
                                            <button
                                                onClick={() => handleDownload(glimpsePrintable)}
                                                disabled={isDownloading}
                                                className="bg-primary text-white font-heading text-2xl px-12 py-5 rounded-full shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100 min-w-[280px] active:scale-95"
                                            >
                                                {isDownloading ? (
                                                    <>
                                                        <Loader2 className="w-6 h-6 animate-spin" />
                                                        Fetching File...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Download className="w-6 h-6" />
                                                        Download PDF Now
                                                    </>
                                                )}
                                            </button>
                                            <button
                                                onClick={() => setGlimpsePrintable(null)}
                                                className="border-2 border-neutral-dark text-neutral-dark font-heading text-xl px-10 py-5 rounded-full hover:bg-neutral-dark hover:text-white transition-all active:scale-95"
                                            >
                                                Close Preview
                                            </button>
                                        </div>
                                        <p className="mt-8 text-sm font-bold text-neutral-dark/30 flex items-center justify-center gap-2">
                                            <Check className="w-4 h-4 text-accent-green" /> Instant Direct Download
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mega Bundle CTA */}
                <div className="mt-24 p-12 bg-pastel-pink rounded-[4rem] text-center border-4 border-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                        <BookOpen className="w-64 h-64" />
                    </div>
                    <div className="relative z-10">
                        <div className="inline-block bg-white text-primary px-6 py-2 rounded-full text-sm font-bold shadow-sm mb-6 uppercase tracking-tighter">Limited Time Offer</div>
                        <h2 className="font-heading text-5xl md:text-6xl text-neutral-dark mb-6">The Mega Printables Pack</h2>
                        <p className="font-body text-2xl text-neutral-dark/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Unlock our massive 100-page bundle featuring Coloring Books, Flashcard Templates, and Trilingual Worksheets in one click.
                        </p>
                        <button className="bg-primary text-white font-heading text-2xl px-14 py-6 rounded-full shadow-[0_15px_30px_-5px_rgba(255,107,107,0.4)] hover:scale-105 hover:shadow-[0_20px_40px_-5px_rgba(255,107,107,0.6)] transition-all flex items-center gap-4 mx-auto active:scale-95">
                            <Star className="w-8 h-8 fill-current text-secondary" />
                            <span>Get the 100-Page Bundle</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
