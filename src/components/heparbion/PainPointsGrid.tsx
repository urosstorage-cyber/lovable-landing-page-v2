import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { CloudFog, Zap, Scale, Brain, Moon, ChevronDown } from 'lucide-react';

const PainPointsGrid: React.FC = () => {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal(0.1);
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number | null>(null);

  const painPoints = [
    { icon: Scale, question: t('pain.q1'), detail: t('pain.d1'), accent: 'bg-brand/[0.06]', span: 'md:col-span-2 md:row-span-1' },
    { icon: CloudFog, question: t('pain.q2'), detail: t('pain.d2'), accent: 'bg-gold-400/[0.06]', span: 'md:col-span-1 md:row-span-2' },
    { icon: Zap, question: t('pain.q3'), detail: t('pain.d3'), accent: 'bg-brand/[0.04]', span: 'md:col-span-1 md:row-span-1' },
    { icon: Brain, question: t('pain.q4'), detail: t('pain.d4'), accent: 'bg-gold-400/[0.04]', span: 'md:col-span-1 md:row-span-1' },
    { icon: Moon, question: t('pain.q5'), detail: t('pain.d5'), accent: 'bg-brand/[0.05]', span: 'md:col-span-2 md:row-span-1' },
  ];

  return (
    <section id="pain-points" className="relative py-24 md:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 scroll-reveal ${titleRevealed ? 'revealed' : ''}`}>
          <span className="text-[10px] font-medium tracking-wide-elegant text-gold-400 uppercase block mb-4">{t('pain.eyebrow')}</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-elegant mb-4">{t('pain.h2')}</h2>
          <div className="divider-gold w-16 mx-auto mt-6" />
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {painPoints.map((point, i) => (
            <div key={i}
              className={`${point.span} glass-card rounded-2xl p-6 md:p-8 bento-item scroll-reveal ${gridRevealed ? 'revealed' : ''} cursor-pointer`}
              style={{ transitionDelay: `${i * 120}ms` }}
              onClick={() => setExpanded(expanded === i ? null : i)}>
              <div className={`w-12 h-12 rounded-xl ${point.accent} flex items-center justify-center mb-5`}>
                <point.icon size={22} className="text-brand/70" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-medium text-foreground mb-3 leading-snug">{point.question}</h3>
              <div className="flex items-center gap-1 text-xs text-brand font-medium mb-2">
                <span>{expanded === i ? (t('pain.readLess') || 'Read less') : (t('pain.readMore') || 'Read more')}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${expanded === i ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-500 ${expanded === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm text-foreground/50 leading-relaxed pt-2">{point.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA before Solution section */}
        <div className={`text-center mt-12 scroll-reveal ${gridRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '600ms' }}>
          <p className="text-sm text-foreground/50 mb-4">{t('pain.bottom')}</p>
          <button onClick={() => { const el = document.getElementById('quiz'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-500 transition-colors">
            {t('pain.cta')}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainPointsGrid;
