import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Droplets, Wind, Sparkles, ChevronDown, X } from 'lucide-react';

import amalakiImg from '@/assets/ingredients/amalaki.jpg';
import barberryImg from '@/assets/ingredients/barberry.jpg';
import bhumyamalakiImg from '@/assets/ingredients/bhumyamalaki.jpg';
import celerySeedImg from '@/assets/ingredients/celery-seed.jpg';
import fenugreekImg from '@/assets/ingredients/fenugreek.jpg';
import gingerImg from '@/assets/ingredients/ginger.jpg';

const PRODUCT_BACK = 'https://d64gsuwffb70l.cloudfront.net/699afc85723b98553d778884_1771766009852_ac9a1f3d.webp';

const SolutionSection: React.FC = () => {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal(0.1);
  const { ref: ingredientRef, isRevealed: ingredientRevealed } = useScrollReveal(0.1);
  const { t, language } = useLanguage();
  const [expandedIng, setExpandedIng] = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const ingredients = [
    { name: language === 'slo' ? 'Kalmegha' : 'Kalmegh (Andrographis)', detail: language === 'slo' ? 'Najpomembnejše grenko zelišče, ki hladi telo in je bogato z diterpenskimi laktoni, s čimer dolgoročno podpira celično stabilnost jeter.' : 'The premier bitter herb that cools the body, rich in diterpene lactones for long-term hepatic cell stability.', strength: '200mg', image: bhumyamalakiImg },
    { name: language === 'slo' ? 'Bhumyamalaki' : 'Bhumyamalaki (Phyllanthus niruri)', detail: language === 'slo' ? 'Bogat z lignani, dolgoročno podpira celično stabilnost jeter brez stranskih učinkov.' : 'Rich in lignans, provides long-term hepatic cell stability without side effects.', strength: '150mg', image: bhumyamalakiImg },
    { name: language === 'slo' ? 'Češmin (Berberis vulgaris)' : 'Barberry (Berberis vulgaris)', detail: language === 'slo' ? 'Vir berberina, ki v sinergiji podpira presnovo lipidov in izločanje žolča.' : 'Source of berberine, synergistically supports lipid metabolism and bile secretion.', strength: '200mg', image: barberryImg },
    { name: language === 'slo' ? 'Ingver' : 'Ginger (Zingiber officinale)', detail: language === 'slo' ? 'Zasnovan za varno vsakodnevno rutino, podpira prebavo in zmanjšuje napihnjenost.' : 'Designed for safe daily routine, supports digestion and reduces bloating.', strength: '100mg', image: gingerImg },
    { name: language === 'slo' ? 'Amalaki' : 'Amalaki (Phyllanthus emblica)', detail: language === 'slo' ? 'Bogat vir vitamina C in antioksidantov za celostno podporo presnovi.' : 'Rich source of vitamin C and antioxidants for holistic metabolic support.', strength: '100mg', image: amalakiImg },
    { name: language === 'slo' ? 'Seme zelene (Apium graveolens)' : 'Celery Seed (Apium graveolens)', detail: language === 'slo' ? 'Naravno zelišče za prebavo. Opomba: vsebuje alergen zelene (celery).' : 'Natural digestive herb. Note: contains celery allergen.', strength: '50mg', image: celerySeedImg },
  ];

  const principles = [
    { icon: Droplets, title: t('solution.p1.title'), desc: t('solution.p1.desc') },
    { icon: Wind, title: t('solution.p2.title'), desc: t('solution.p2.desc') },
    { icon: Sparkles, title: t('solution.p3.title'), desc: t('solution.p3.desc') },
  ];

  return (
    <section id="solution" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-20 scroll-reveal ${titleRevealed ? 'revealed' : ''}`}>
          <span className="text-[10px] font-medium tracking-wide-elegant text-gold-400/70 uppercase block mb-4">{t('solution.eyebrow')}</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-elegant mb-5">
            {t('solution.h2.1')}<span className="text-shimmer">{t('solution.h2.shimmer')}</span>
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed">{t('solution.sub')}</p>
          <div className="divider-gold w-16 mx-auto mt-8 opacity-40" />
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className={`scroll-reveal-left ${contentRevealed ? 'revealed' : ''}`}>
            <div className="space-y-8">
              {principles.map((item, i) => (
                <div key={i} className={`flex gap-5 scroll-reveal ${contentRevealed ? 'revealed' : ''}`} style={{ transitionDelay: `${(i + 1) * 150}ms` }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                    <item.icon size={20} className="text-gold-400/70" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex justify-center scroll-reveal-right ${contentRevealed ? 'revealed' : ''}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-transparent to-brand/10 rounded-3xl blur-3xl scale-110" />
              <img src={PRODUCT_BACK} alt="Heparbion Plus ingredients label" className="relative w-[300px] md:w-[360px] h-auto rounded-2xl shadow-2xl shadow-black/20" />
              <div className="absolute -top-4 -right-4 glass-dark rounded-xl px-4 py-2.5 animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-[10px] text-gold-400/60 uppercase tracking-wide">{t('solution.badge')}</p>
                <p className="text-sm font-medium text-white">120 {t('solution.capsules')}</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={ingredientRef}>
          <h3 className={`font-serif text-2xl font-medium text-white text-center mb-10 scroll-reveal ${ingredientRevealed ? 'revealed' : ''}`}>
            {t('solution.ingredients')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ingredients.map((ing, i) => (
              <div key={i}
                className={`group relative rounded-2xl bg-white/[0.04] border border-white/[0.06] overflow-hidden hover:bg-white/[0.08] hover:border-gold-400/20 transition-all duration-500 bento-item scroll-reveal ${ingredientRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="h-32 overflow-hidden cursor-pointer" onClick={() => setLightboxImg(ing.image)}>
                  <img src={ing.image} alt={ing.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-serif text-base font-medium text-white group-hover:text-gold-300 transition-colors">{ing.name}</h4>
                    <span className="text-xs font-mono text-gold-400/60 bg-gold-400/[0.08] px-2 py-0.5 rounded-full">{ing.strength}</span>
                  </div>
                  <button onClick={() => setExpandedIng(expandedIng === i ? null : i)}
                    className="flex items-center gap-1 text-xs text-gold-400/70 hover:text-gold-300 transition-colors mb-1">
                    <span>{expandedIng === i ? 'Less' : 'Details'}</span>
                    <ChevronDown size={12} className={`transition-transform ${expandedIng === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${expandedIng === i ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs text-white/35 leading-relaxed pt-1">{ing.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white" onClick={() => setLightboxImg(null)}>
            <X size={28} />
          </button>
          <img src={lightboxImg} alt="Ingredient detail" className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default SolutionSection;
