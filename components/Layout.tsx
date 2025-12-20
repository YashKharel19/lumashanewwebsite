
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Star, Download, Menu, X, Instagram, Facebook, Youtube, Music2 } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleGetApp = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu first to prevent layout jumping

    if (location.pathname !== '/') {
      navigate('/');
      // Use a slightly longer timeout to ensure the Home component is mounted and rendered
      setTimeout(() => {
        const element = document.getElementById('app-promo');

        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      const element = document.getElementById('app-promo');

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="../assets/favicon.png" alt="Lumasha Logo" className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform" />
          <span className="font-heading text-2xl md:text-3xl text-primary tracking-wide">Lumasha</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `font-body font-bold text-lg transition-colors hover:text-accent ${isActive ? 'text-primary' : 'text-neutral-dark'}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">

          <button onClick={handleGetApp}
            className="bg-accent hover:bg-accent-hover text-white font-heading px-4 py-2 rounded-full flex items-center gap-2 shadow-sm transition-all active:scale-95">
            <Download className="w-4 h-4" />
            <span>Get App</span>
          </button>
        </div>

        <button className="lg:hidden text-neutral-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="font-body font-bold text-neutral-dark py-2 border-b border-gray-100"
            >
              {link.name}
            </NavLink>
          ))}
          <button onClick={handleGetApp}
            className="bg-accent text-white font-heading w-full py-3 rounded-xl flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            <span>Download App</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  const socialLinks = [
    { Icon: Instagram, url: 'https://www.instagram.com/learn_lumasha/', label: 'Instagram' },
    { Icon: Facebook, url: 'https://www.facebook.com/people/Learn-Lumasha/61575959525874/', label: 'Facebook' },
    { Icon: Music2, url: 'https://www.tiktok.com/@lumasha8', label: 'TikTok' },
    { Icon: Youtube, url: 'https://www.youtube.com/@Lumashalearn', label: 'YouTube' },
  ];
  return (
    <footer className="bg-neutral-light pt-16 pb-8 border-t-4 border-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="../assets/favicon.png" alt="Lumasha Logo" className="w-12 h-12" />
              <span className="font-heading text-3xl text-primary">Lumasha</span>
            </Link>
            <p className="font-body text-neutral-dark mb-6 max-w-sm">
              Helping families preserve their languages and culture through playful design, stories, and joyful learning.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, url, label }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm hover:scale-110 active:scale-95"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-xl text-neutral-dark mb-4">For Families</h4>
            <ul className="space-y-2 font-body text-neutral-dark/80">
              <li><Link to="/learning" className="hover:text-primary">Learning Library</Link></li>
              <li><Link to="/games" className="hover:text-primary">Games Playground</Link></li>
              <li><Link to="/printables" className="hover:text-primary">Printables</Link></li>
              <li><Link to="/app" className="hover:text-primary">Download App</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xl text-neutral-dark mb-4">Shop</h4>
            <ul className="space-y-2 font-body text-neutral-dark/80">
              <li><Link to="/products" className="hover:text-primary">Flashcards</Link></li>
              <li><Link to="/products" className="hover:text-primary">Ebooks and PDF</Link></li>
              <li><Link to="/products" className="hover:text-primary">Digital Storybooks</Link></li>
              <li><Link to="/shipping" className="hover:text-primary">Shipping & Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xl text-neutral-dark mb-4">Help</h4>
            <ul className="space-y-2 font-body text-neutral-dark/80">
              <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-neutral-dark/60">© 2025 Lumasha. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-neutral-dark/60 font-body">
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            <Link to="/terms" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const AnnouncementBar = () => (
  <div className="bg-secondary text-neutral-dark py-2 px-4 text-center font-bold text-sm md:text-base flex items-center justify-center gap-2 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-white/10 animate-pulse"></div>
    <Star className="w-4 h-4 text-primary fill-primary animate-spin-slow" />
    <span className="relative z-10">New! Neplai,Gujarati & Punjabi flashcards now shipping worldwide! 🎉</span>
    <Star className="w-4 h-4 text-primary fill-primary animate-spin-slow" />
  </div>
);

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
