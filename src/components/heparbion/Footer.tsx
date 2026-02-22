import React from 'react';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative bg-emerald-500 text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      {/* Mesh overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-emerald-400/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Leaf size={18} className="text-gold-400/70" />
              <div>
                <span className="font-serif text-lg font-semibold tracking-elegant text-white leading-tight block">
                  Aleksandra Komasz
                </span>
                <span className="text-xs text-white/40 tracking-wide">/ Plus<span className="text-gold-400">+</span></span>
              </div>
            </div>
            <p className="text-sm text-white/35 leading-relaxed mb-6">
              An original Ayurvedic botanical formula for daily inner balance. 
              Clinical-grade liver support from Ljubljana to your home.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-white/30">
                <MapPin size={12} />
                <span>Ayurvedic Health Center, Ljubljana</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/30">
                <Mail size={12} />
                <span>info@aleksandrakomasz-plus.com</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-wide-elegant text-white/60 uppercase mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Our Formula', id: 'solution' },
                { label: 'The Clinic', id: 'clinic' },
                { label: 'Health Assessment', id: 'quiz' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Pain Points', id: 'pain-points' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-white/35 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality */}
          <div>
            <h4 className="text-xs font-semibold tracking-wide-elegant text-white/60 uppercase mb-5">
              Quality Standards
            </h4>
            <ul className="space-y-3">
              {[
                'GMP Certified Production',
                'ISO 22000 Food Safety',
                'Independent Lab Testing',
                'EU Manufactured',
                'Vegan & Vegetarian',
                'No Sugar, Gluten Free',
              ].map((item, i) => (
                <li key={i} className="text-sm text-white/35">{item}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold tracking-wide-elegant text-white/60 uppercase mb-5">
              Wellness Insights
            </h4>
            <p className="text-sm text-white/35 mb-4">
              Receive Ayurvedic liver health tips and exclusive offers directly to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector('input');
                if (input && input.value) {
                  input.value = '';
                  // Show success
                  const btn = e.currentTarget.querySelector('button');
                  if (btn) {
                    btn.textContent = 'Subscribed!';
                    setTimeout(() => {
                      if (btn) btn.textContent = 'Subscribe';
                    }, 2000);
                  }
                }
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-2.5 bg-white/[0.06] border border-white/[0.08] rounded-lg text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold-400/30 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-gold-400/20 border border-gold-400/20 text-gold-400 text-xs font-medium rounded-lg hover:bg-gold-400/30 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/[0.06] mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            2026 Aleksandra Komasz / Plus+. All rights reserved. Made with care in the EU.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((link, i) => (
              <button
                key={i}
                onClick={() => {/* placeholder for legal pages */}}
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
