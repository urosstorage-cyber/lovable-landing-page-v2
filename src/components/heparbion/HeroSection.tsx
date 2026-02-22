import React, { useEffect, useState } from 'react';
import { useParallax } from '@/hooks/useScrollReveal';
import { useCart } from '@/contexts/CartContext';
import { ArrowDown, Leaf } from 'lucide-react';

const PRODUCT_IMG = 'https://d64gsuwffb70l.cloudfront.net/699afc85723b98553d778884_1771766011742_1f7093db.webp';
const PRODUCT_THUMB = 'https://d64gsuwffb70l.cloudfront.net/699afc85723b98553d778884_1771766011742_1f7093db.webp';

const HeroSection: React.FC = () => {
  const parallaxRef = useParallax();
  const [loaded, setLoaded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAddPopular = () => {
    addItem({
      id: 'heparbion-3',
      name: '3-Month Transformation',
      bottles: 3,
      price: 119.00,
      originalPrice: 134.70,
      perBottle: '39.67',
      savings: 15.70,
      image: PRODUCT_THUMB,
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-hero bg-cream-100" />

      {/* Subtle decorative circles */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.02] blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-gold-400/[0.04] blur-3xl" />

      {/* Thin gold line accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-2 mb-6 transition-all duration-700 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Leaf size={14} className="text-gold-400" />
              <span className="text-xs font-medium tracking-wide-elegant text-emerald-500/50 uppercase">
                Ayurvedic Botanical Formula
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-semibold leading-[1.1] text-emerald-500 mb-6 transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              When your liver is{' '}
              <span className="italic text-emerald-400">overloaded</span>,
              <br className="hidden md:block" /> your body simply{' '}
              <span className="relative inline-block">
                holds on
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold-400/60" />
              </span>
              .
            </h1>

            {/* Subheadline */}
            <p
              className={`text-base md:text-lg text-emerald-500/60 leading-relaxed max-w-xl mb-8 transition-all duration-700 delay-400 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              An original botanical formula from the renowned Ayurvedic clinic of{' '}
              <span className="font-medium text-emerald-500/80">Aleksandra Komasz</span>. 
              A synergy of traditional bitter herbs designed for daily inner balance, 
              without aggressive "detox" shocks.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-500 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={handleAddPopular}
                className="btn-glow px-8 py-4 bg-emerald-500 text-white font-medium text-sm tracking-wide rounded-full hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>SUPPORT YOUR LIVER</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => scrollTo('quiz')}
                className="px-8 py-4 border border-emerald-500/20 text-emerald-500 font-medium text-sm tracking-wide rounded-full hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300"
              >
                TAKE THE ASSESSMENT
              </button>
            </div>

            {/* Micro-trust */}
            <div
              className={`flex items-center gap-3 text-xs text-emerald-500/40 transition-all duration-700 delay-600 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="font-medium">15% off 3-month supply</span>
              <span className="w-1 h-1 rounded-full bg-gold-400/40" />
              <span>Free EU shipping over 60</span>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={parallaxRef}
              className={`relative transition-all duration-1000 delay-300 ${
                loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              {/* Glow behind product */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-gold-400/5 rounded-full blur-3xl scale-110" />
              
              {/* Product image with float animation */}
              <div className="parallax-float relative">
                <img
                  src={PRODUCT_IMG}
                  alt="Heparbion Plus - Premium Ayurvedic Liver Support"
                  className="w-[320px] md:w-[400px] lg:w-[460px] h-auto drop-shadow-2xl"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 animate-float-slow" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Leaf size={14} className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-500/50 uppercase tracking-wide">120 Vegan</p>
                    <p className="text-xs font-semibold text-emerald-500">Capsules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-[10px] tracking-wide-elegant text-emerald-500/30 uppercase">Discover</span>
          <ArrowDown size={16} className="text-emerald-500/30 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
