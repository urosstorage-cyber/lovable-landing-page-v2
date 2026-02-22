import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CloudFog, Zap, Scale, Brain, Moon } from 'lucide-react';

const painPoints = [
  {
    icon: Scale,
    question: 'Do you often feel heavy or bloated after a normal meal?',
    detail: 'Digestive heaviness is one of the earliest signs your liver may need support.',
    accent: 'bg-emerald-500/[0.06]',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    icon: CloudFog,
    question: 'Is your energy crashing in the afternoon?',
    detail: 'Brain fog and afternoon slumps often indicate metabolic overload.',
    accent: 'bg-gold-400/[0.06]',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    icon: Zap,
    question: 'Is your metabolism sluggish despite a healthy diet?',
    detail: 'When the liver is overwhelmed, even clean eating can feel ineffective.',
    accent: 'bg-emerald-500/[0.04]',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: Brain,
    question: 'Are you under constant stress affecting your digestion?',
    detail: 'Chronic stress disrupts the vagus nerve, impairing bile flow and digestion.',
    accent: 'bg-gold-400/[0.04]',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: Moon,
    question: 'Do you wake up feeling unrefreshed and "stagnant"?',
    detail: 'Poor overnight detoxification leaves you feeling heavy each morning.',
    accent: 'bg-emerald-500/[0.05]',
    span: 'md:col-span-2 md:row-span-1',
  },
];

const PainPointsGrid: React.FC = () => {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal(0.1);

  return (
    <section id="pain-points" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 scroll-reveal ${titleRevealed ? 'revealed' : ''}`}
        >
          <span className="text-[10px] font-medium tracking-wide-elegant text-gold-400 uppercase block mb-4">
            Recognize the Signs
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-emerald-500 tracking-elegant mb-4">
            Is Your Body Asking for Help?
          </h2>
          <div className="divider-gold w-16 mx-auto mt-6" />
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          {painPoints.map((point, i) => (
            <div
              key={i}
              className={`${point.span} glass-card rounded-2xl p-6 md:p-8 bento-item scroll-reveal ${
                gridRevealed ? 'revealed' : ''
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${point.accent} flex items-center justify-center mb-5`}>
                <point.icon size={22} className="text-emerald-500/70" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-medium text-emerald-500 mb-3 leading-snug">
                {point.question}
              </h3>
              <p className="text-sm text-emerald-500/50 leading-relaxed">
                {point.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 scroll-reveal ${gridRevealed ? 'revealed' : ''}`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-sm text-emerald-500/50 mb-4">
            If you answered yes to 2 or more, your liver may benefit from targeted botanical support.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('quiz');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-500 transition-colors"
          >
            Take the Clinical Assessment
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
