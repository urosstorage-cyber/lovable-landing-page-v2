import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Droplets, Wind, Sparkles } from 'lucide-react';

const PRODUCT_BACK = 'https://d64gsuwffb70l.cloudfront.net/699afc85723b98553d778884_1771766009852_ac9a1f3d.webp';

const SolutionSection: React.FC = () => {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal(0.1);
  const { ref: ingredientRef, isRevealed: ingredientRevealed } = useScrollReveal(0.1);
  const { t, language } = useLanguage();

  const ingredients = language === 'slo' ? [
    { name: t('ing.milkThistle'), detail: t('ing.milkThistle.detail'), strength: '200mg' },
    { name: t('ing.artichoke'), detail: t('ing.artichoke.detail'), strength: '150mg' },
    { name: t('ing.dandelion'), detail: t('ing.dandelion.detail'), strength: '100mg' },
    { name: t('ing.kalmegh'), detail: t('ing.kalmegh.detail'), strength: '200mg' },
    { name: t('ing.bhumyamalaki'), detail: t('ing.bhumyamalaki.detail'), strength: '150mg' },
    { name: t('ing.berberine'), detail: t('ing.berberine.detail'), strength: '200mg' },
  ] : [
    { name: 'Milk Thistle', detail: 'High Silymarin content for hepatocyte protection', strength: '200mg' },
    { name: 'Artichoke', detail: 'Stimulates bile production and flow', strength: '150mg' },
    { name: 'Dandelion', detail: 'Traditional liver tonic and gentle diuretic', strength: '100mg' },
    { name: 'Kalmegh', detail: 'Ayurvedic "King of Bitters" for liver cooling', strength: '200mg' },
    { name: 'Bhumyamalaki', detail: 'Phyllanthus niruri for hepatic regeneration', strength: '150mg' },
    { name: 'Berberine HCl', detail: 'Berberis vulgaris root extract', strength: '200mg' },
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
          <span className="text-[10px] font-medium tracking-wide-elegant text-gold-400/70 uppercase block mb-4">
            {t('solution.eyebrow')}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-elegant mb-5">
            {t('solution.h2.1')}
            <span className="text-shimmer">{t('solution.h2.shimmer')}</span>
          </h2>
          <p className="text-base text-white/40 max-w-2xl mx-auto leading-relaxed">
            {t('solution.sub')}
          </p>
          <div className="divider-gold w-16 mx-auto mt-8 opacity-40" />
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className={`scroll-reveal-left ${contentRevealed ? 'revealed' : ''}`}>
            <div className="space-y-8">
              {principles.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-5 scroll-reveal ${contentRevealed ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${(i + 1) * 150}ms` }}
                >
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
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-transparent to-emerald-400/10 rounded-3xl blur-3xl scale-110" />
              <img
                src={PRODUCT_BACK}
                alt="Heparbion Plus ingredients label"
                className="relative w-[300px] md:w-[360px] h-auto rounded-2xl shadow-2xl shadow-black/20"
              />
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
              <div
                key={i}
                className={`group relative rounded-2xl bg-white/[0.04] border border-white/[0.06] p-6 hover:bg-white/[0.08] hover:border-gold-400/20 transition-all duration-500 bento-item scroll-reveal ${ingredientRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-serif text-base font-medium text-white group-hover:text-gold-300 transition-colors">
                    {ing.name}
                  </h4>
                  <span className="text-xs font-mono text-gold-400/60 bg-gold-400/[0.08] px-2 py-0.5 rounded-full">
                    {ing.strength}
                  </span>
                </div>
                <p className="text-xs text-white/35 leading-relaxed">{ing.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
