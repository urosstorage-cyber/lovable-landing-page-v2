import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, X as XIcon, Minus } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal(0.1);
  const { language } = useLanguage();

  const title = language === 'slo' ? 'Kako se Heparbion Plus primerja' : 'How Heparbion Plus Compares';
  const eyebrow = language === 'slo' ? 'Primerjalna tabela' : 'Comparison Table';

  const features = language === 'slo' ? [
    { label: 'Klinično zasnovan', hep: true, detox: false, juice: false },
    { label: 'EU GMP & ISO 22000', hep: true, detox: false, juice: false },
    { label: 'Dolgoročna uporaba', hep: true, detox: false, juice: 'partial' },
    { label: 'Brez stranskih učinkov', hep: true, detox: false, juice: 'partial' },
    { label: 'Sinergija zelišč', hep: true, detox: false, juice: false },
    { label: 'Laboratorijsko testirano', hep: true, detox: 'partial', juice: false },
    { label: 'Primerno za vsakodnevno rutino', hep: true, detox: false, juice: false },
  ] : [
    { label: 'Clinically formulated', hep: true, detox: false, juice: false },
    { label: 'EU GMP & ISO 22000', hep: true, detox: false, juice: false },
    { label: 'Long-term safe use', hep: true, detox: false, juice: 'partial' },
    { label: 'No side effects', hep: true, detox: false, juice: 'partial' },
    { label: 'Botanical synergy', hep: true, detox: false, juice: false },
    { label: 'Lab tested', hep: true, detox: 'partial', juice: false },
    { label: 'Suitable for daily routine', hep: true, detox: false, juice: false },
  ];

  const colHeaders = language === 'slo'
    ? ['Heparbion Plus', 'Detox čaji', 'Sokovi za čiščenje']
    : ['Heparbion Plus', 'Detox Teas', 'Juice Cleanses'];

  const renderIcon = (val: boolean | string) => {
    if (val === true) return <Check size={16} className="text-brand" />;
    if (val === 'partial') return <Minus size={16} className="text-gold-400" />;
    return <XIcon size={16} className="text-foreground/20" />;
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="text-[10px] font-medium tracking-wide-elegant text-gold-400/70 uppercase block mb-4">{eyebrow}</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-elegant">{title}</h2>
          <div className="divider-gold w-16 mx-auto mt-6 opacity-40" />
        </div>

        <div className={`overflow-x-auto scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
          <table className="w-full min-w-[500px]">
            <thead>
              <tr>
                <th className="text-left text-xs text-white/30 font-medium pb-4 pr-4"></th>
                {colHeaders.map((h, i) => (
                  <th key={i} className={`text-center text-xs font-semibold pb-4 px-4 ${i === 0 ? 'text-brand' : 'text-white/40'}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-t border-white/[0.06]">
                  <td className="text-sm text-white/60 py-4 pr-4">{f.label}</td>
                  <td className="text-center py-4 px-4">{renderIcon(f.hep)}</td>
                  <td className="text-center py-4 px-4">{renderIcon(f.detox)}</td>
                  <td className="text-center py-4 px-4">{renderIcon(f.juice)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
