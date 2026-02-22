import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Shield, FlaskConical, Leaf, Award, Globe } from 'lucide-react';

const badges = [
  { icon: Globe, label: 'Made in EU', sub: 'European Quality' },
  { icon: Shield, label: 'GMP Certified', sub: 'Pharmaceutical Grade' },
  { icon: Award, label: 'ISO 22000', sub: 'Food Safety' },
  { icon: Leaf, label: 'Vegetarian', sub: 'Vegan Capsules' },
  { icon: FlaskConical, label: 'Lab Tested', sub: 'Independent Verification' },
];

const TrustBar: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="relative py-12 border-y border-emerald-500/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16">
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className={`flex items-center gap-3 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/[0.06] flex items-center justify-center">
                <badge.icon size={18} className="text-emerald-500/50" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold text-emerald-500/80 tracking-wide">
                  {badge.label}
                </p>
                <p className="text-[10px] text-emerald-500/40">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
