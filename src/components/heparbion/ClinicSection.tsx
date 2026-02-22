import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, Shield, FlaskConical, Clock, MapPin, Stethoscope } from 'lucide-react';

const PRODUCT_MAIN = 'https://d64gsuwffb70l.cloudfront.net/699afc85723b98553d778884_1771765975701_dcad46bf.jpg';

const trustCards = [
  {
    icon: Clock,
    title: '20 Years',
    subtitle: 'Clinical Practice',
    description: 'Formulated based on two decades of hands-on clinical experience in Ayurvedic medicine.',
  },
  {
    icon: Stethoscope,
    title: 'Clinical-Grade',
    subtitle: 'Professional Formula',
    description: 'Not just a supplement — a formula used in our professional therapeutic protocols.',
  },
  {
    icon: Shield,
    title: 'GMP / ISO 22000',
    subtitle: 'Pharmaceutical Standard',
    description: 'Produced in a pharmaceutical-grade facility with independent lab testing for purity.',
  },
];

const ClinicSection: React.FC = () => {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal(0.1);
  const { ref: cardsRef, isRevealed: cardsRevealed } = useScrollReveal(0.1);

  return (
    <section id="clinic" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-cream-200/50" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 scroll-reveal ${titleRevealed ? 'revealed' : ''}`}
        >
          <span className="text-[10px] font-medium tracking-wide-elegant text-gold-400 uppercase block mb-4">
            Trust & Authority
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-emerald-500 tracking-elegant mb-5">
            The Aleksandra Komasz Clinic
          </h2>
          <p className="text-base text-emerald-500/50 max-w-2xl mx-auto leading-relaxed">
            Rooted in 20 years of clinical Ayurvedic practice at the Health Center in Ljubljana, 
            our formulas bridge ancient wisdom with modern pharmaceutical standards.
          </p>
          <div className="divider-gold w-16 mx-auto mt-8" />
        </div>

        {/* Split layout */}
        <div
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20"
        >
          {/* Left: Image */}
          <div className={`scroll-reveal-left ${contentRevealed ? 'revealed' : ''}`}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold-400/10 rounded-3xl" />
              <div className="absolute -inset-8 border border-emerald-500/[0.03] rounded-3xl" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                <img
                  src={PRODUCT_MAIN}
                  alt="Heparbion Plus with traditional Ayurvedic ingredients"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-transparent to-transparent" />
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 glass-card rounded-2xl px-5 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center">
                    <Award size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xl font-serif font-bold text-emerald-500">4.9/5</p>
                    <p className="text-[10px] text-emerald-500/40">511+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`scroll-reveal-right ${contentRevealed ? 'revealed' : ''}`}>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-gold-400" />
                <span className="text-xs font-medium tracking-wide text-emerald-500/50 uppercase">
                  Ljubljana, Slovenia
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-emerald-500 leading-snug">
                Where Ancient Ayurvedic Wisdom Meets Modern Clinical Precision
              </h3>

              <p className="text-sm text-emerald-500/50 leading-relaxed">
                Every bottle of Heparbion Plus carries the expertise of Aleksandra Komasz — 
                a practitioner who has dedicated her career to understanding the liver's role 
                in holistic health. Our formula isn't born from a marketing brief; it's born 
                from thousands of patient consultations and clinical observations.
              </p>

              <div className="pt-4 space-y-4">
                {[
                  'Formulated from real clinical practice, not theoretical research alone',
                  'Used in professional Ayurvedic therapy protocols at the clinic',
                  'Each batch independently tested for purity and potency',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/[0.08] flex items-center justify-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#043927" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-sm text-emerald-500/60">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-5">
          {trustCards.map((card, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-7 bento-item scroll-reveal ${
                cardsRevealed ? 'revealed' : ''
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/[0.05] flex items-center justify-center mb-5">
                <card.icon size={22} className="text-emerald-500/60" strokeWidth={1.5} />
              </div>
              <div className="mb-2">
                <span className="font-serif text-2xl font-bold text-emerald-500">{card.title}</span>
                <span className="text-xs text-gold-400 ml-2 font-medium">{card.subtitle}</span>
              </div>
              <p className="text-sm text-emerald-500/45 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
