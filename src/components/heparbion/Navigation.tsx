import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const navLinks = [
    { label: t('nav.formula'), id: 'solution' },
    { label: t('nav.clinic'), id: 'clinic' },
    { label: t('nav.assessment'), id: 'quiz' },
    { label: t('nav.pricing'), id: 'pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-semibold tracking-elegant text-emerald-500 leading-tight">
              Aleksandra
            </span>
            <span className="font-serif text-lg md:text-xl font-semibold tracking-elegant text-emerald-500 leading-tight">
              Komasz <span className="text-gold-400">/</span> Plus
              <span className="text-gold-400 text-xs align-super ml-0.5">+</span>
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium tracking-wide text-emerald-500/70 hover:text-emerald-500 transition-colors duration-300 relative group"
            >
              {link.label.toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* CTA + Cart + Language */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-emerald-500/[0.04] border border-emerald-500/[0.08] rounded-full p-0.5">
            <button
              onClick={() => setLanguage('slo')}
              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-300 ${
                language === 'slo'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-emerald-500/50 hover:text-emerald-500'
              }`}
            >
              SLO
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-300 ${
                language === 'en'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-emerald-500/50 hover:text-emerald-500'
              }`}
            >
              EN
            </button>
          </div>

          {/* Cart Button */}
          <button
            onClick={openDrawer}
            className="relative p-2.5 rounded-xl hover:bg-emerald-500/5 transition-colors group"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} className="text-emerald-500/60 group-hover:text-emerald-500 transition-colors" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] font-bold text-white bg-gold-400 rounded-full px-1 shadow-sm animate-scale-in">
                {itemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => scrollTo('pricing')}
            className="btn-glow relative px-6 py-2.5 bg-emerald-500 text-white text-sm font-medium tracking-wide rounded-full hover:bg-emerald-600 transition-all duration-300"
          >
            {t('nav.orderNow')}
          </button>
        </div>

        {/* Mobile: Lang + Cart + Menu */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'slo' : 'en')}
            className="px-2 py-1 rounded-lg bg-emerald-500/[0.06] text-[10px] font-bold text-emerald-500/70 tracking-wide"
          >
            {language === 'en' ? 'SLO' : 'EN'}
          </button>

          {/* Mobile Cart */}
          <button
            onClick={openDrawer}
            className="relative p-2 text-emerald-500"
            aria-label="Open cart"
          >
            <ShoppingBag size={22} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] flex items-center justify-center text-[9px] font-bold text-white bg-gold-400 rounded-full px-0.5">
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-emerald-500"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 animate-reveal-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-base font-medium tracking-wide text-emerald-500/80 hover:text-emerald-500 py-2 border-b border-emerald-500/5"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollTo('pricing');
                setMobileOpen(false);
              }}
              className="mt-2 w-full py-3 bg-emerald-500 text-white text-sm font-medium tracking-wide rounded-full"
            >
              {t('nav.orderNow')}
            </button>
          </div>
        </div>
      )}

      {/* Badge scale-in animation */}
      <style>{`
        @keyframes scale-in {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
