import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCart } from '@/contexts/CartContext';
import { ClipboardCheck, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';

const PRODUCT_THUMB = 'https://d64gsuwffb70l.cloudfront.net/699afc85723b98553d778884_1771766011742_1f7093db.webp';

interface Question {
  text: string;
  options: { label: string; value: 'a' | 'b' | 'c' }[];
}

const questions: Question[] = [
  {
    text: 'Do you experience a sensation of heaviness or pressure in the upper right abdomen after meals?',
    options: [
      { label: 'Never, I feel light.', value: 'a' },
      { label: 'Occasionally, especially after heavier meals.', value: 'b' },
      { label: 'Frequently, it\'s a consistent discomfort.', value: 'c' },
    ],
  },
  {
    text: 'How do you feel 30 minutes after a main meal?',
    options: [
      { label: 'Energetic and light.', value: 'a' },
      { label: 'Slightly bloated, need a short rest.', value: 'b' },
      { label: 'Heavy fatigue (brain fog) and a sense of weight.', value: 'c' },
    ],
  },
  {
    text: 'Does your body tend to retain water or feel "stagnant" despite a healthy diet?',
    options: [
      { label: 'No, my fluid balance feels normal.', value: 'a' },
      { label: 'Sometimes, especially in the evenings.', value: 'b' },
      { label: 'Yes, I feel constantly "puffy" and sluggish.', value: 'c' },
    ],
  },
  {
    text: 'How important is it for you that a supplement is independently lab-tested and verified for purity in the EU?',
    options: [
      { label: 'It\'s a nice-to-have.', value: 'a' },
      { label: 'It\'s important for my peace of mind.', value: 'b' },
      { label: 'It is a non-negotiable requirement for my safety.', value: 'c' },
    ],
  },
];

interface ResultData {
  title: string;
  description: string;
  recommendation: string;
  cta: string;
  productId: string;
  productName: string;
  bottles: number;
  price: number;
  originalPrice: number;
  perBottle: string;
  savings: number;
}

const resultsData: Record<string, ResultData> = {
  high: {
    title: 'High Metabolic Load Detected',
    description: 'Your system shows signs of significant metabolic burden. The patterns you describe suggest your liver could benefit from a structured, clinical-grade botanical protocol.',
    recommendation: 'We recommend a 3-month Heparbion Plus protocol to support hepatic recovery and bile flow.',
    cta: 'Add 3-Bottle Bundle to Cart',
    productId: 'heparbion-3',
    productName: '3-Month Transformation',
    bottles: 3,
    price: 119.00,
    originalPrice: 134.70,
    perBottle: '39.67',
    savings: 15.70,
  },
  moderate: {
    title: 'Your System is Seeking Balance',
    description: 'Your responses indicate moderate digestive and metabolic stress. Heparbion Plus provides the necessary bitters to maintain healthy liver function and daily digestive comfort.',
    recommendation: 'Start with a single bottle to experience the difference in your daily wellbeing.',
    cta: 'Add 1 Bottle to Cart',
    productId: 'heparbion-1',
    productName: 'Flexible Start',
    bottles: 1,
    price: 44.90,
    originalPrice: 44.90,
    perBottle: '44.90',
    savings: 0,
  },
  low: {
    title: 'Preventive Wellness',
    description: 'Your liver appears to be functioning well. However, proactive support with bitter botanicals can help maintain this balance, especially during periods of stress or dietary changes.',
    recommendation: 'Consider Heparbion Plus as a preventive addition to your wellness routine.',
    cta: 'Add 1 Bottle to Cart',
    productId: 'heparbion-1',
    productName: 'Flexible Start',
    bottles: 1,
    price: 44.90,
    originalPrice: 44.90,
    perBottle: '44.90',
    savings: 0,
  },
};

const QuizSection: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal(0.15);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { addItem } = useCart();

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    setAnswers({ ...answers, [currentQ]: selectedOption });
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(answers[currentQ + 1] || null);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelectedOption(answers[currentQ - 1] || null);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setAnswers({});
    setShowResult(false);
    setSelectedOption(null);
  };

  const getResult = (): ResultData => {
    const allAnswers = Object.values(answers);
    const cCount = allAnswers.filter((a) => a === 'c').length;
    const bCount = allAnswers.filter((a) => a === 'b').length;
    if (cCount >= 2) return resultsData.high;
    if (bCount >= 2 || cCount >= 1) return resultsData.moderate;
    return resultsData.low;
  };

  const handleAddResultToCart = () => {
    const result = getResult();
    addItem({
      id: result.productId,
      name: result.productName,
      bottles: result.bottles,
      price: result.price,
      originalPrice: result.originalPrice,
      perBottle: result.perBottle,
      savings: result.savings,
      image: PRODUCT_THUMB,
    });
  };

  const progress = showResult ? 100 : ((currentQ) / questions.length) * 100;

  return (
    <section id="quiz" className="relative py-24 md:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
        >
          <span className="text-[10px] font-medium tracking-wide-elegant text-gold-400 uppercase block mb-4">
            Clinical Assessment
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-emerald-500 tracking-elegant mb-4">
            Liver Health Assessment
          </h2>
          <p className="text-sm text-emerald-500/50 max-w-lg mx-auto">
            Answer 4 quick questions to receive a personalized analysis of your metabolic indicators.
          </p>
          <div className="divider-gold w-16 mx-auto mt-6" />
        </div>

        {/* Quiz Card */}
        <div className="max-w-2xl mx-auto">
          <div className={`glass-card rounded-3xl p-8 md:p-10 scroll-reveal-scale ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <ClipboardCheck size={16} className="text-emerald-500/50" />
                  <span className="text-xs text-emerald-500/50 font-medium">
                    {showResult ? 'Complete' : `Question ${currentQ + 1} of ${questions.length}`}
                  </span>
                </div>
                <span className="text-xs text-emerald-500/30">{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-emerald-500/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {!showResult ? (
              <>
                {/* Question */}
                <h3 className="font-serif text-xl md:text-2xl font-medium text-emerald-500 mb-8 leading-snug">
                  {questions[currentQ].text}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {questions[currentQ].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(option.value)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group ${
                        selectedOption === option.value
                          ? 'border-emerald-500/30 bg-emerald-500/[0.06] shadow-sm'
                          : 'border-emerald-500/[0.06] bg-white/30 hover:border-emerald-500/15 hover:bg-white/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            selectedOption === option.value
                              ? 'border-emerald-500 bg-emerald-500'
                              : 'border-emerald-500/20'
                          }`}
                        >
                          {selectedOption === option.value && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span
                          className={`text-sm transition-colors ${
                            selectedOption === option.value
                              ? 'text-emerald-500 font-medium'
                              : 'text-emerald-500/60'
                          }`}
                        >
                          {option.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleBack}
                    disabled={currentQ === 0}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      currentQ === 0
                        ? 'text-emerald-500/20 cursor-not-allowed'
                        : 'text-emerald-500/50 hover:text-emerald-500'
                    }`}
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className={`btn-glow flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                      selectedOption === null
                        ? 'bg-emerald-500/20 text-white/50 cursor-not-allowed'
                        : 'bg-emerald-500 text-white hover:bg-emerald-600'
                    }`}
                  >
                    {currentQ === questions.length - 1 ? 'See Results' : 'Next'}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            ) : (
              /* Results */
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/[0.08] flex items-center justify-center mx-auto mb-6">
                  <ClipboardCheck size={28} className="text-emerald-500" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-emerald-500 mb-4">
                  {getResult().title}
                </h3>
                <p className="text-sm text-emerald-500/50 leading-relaxed mb-4 max-w-md mx-auto">
                  {getResult().description}
                </p>
                <p className="text-sm text-emerald-500/70 font-medium mb-8 max-w-md mx-auto">
                  {getResult().recommendation}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleAddResultToCart}
                    className="btn-glow px-8 py-3.5 bg-emerald-500 text-white text-sm font-medium tracking-wide rounded-full flex items-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 01-8 0"/>
                    </svg>
                    {getResult().cta}
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-6 py-3.5 text-sm text-emerald-500/50 hover:text-emerald-500 transition-colors"
                  >
                    <RotateCcw size={14} />
                    Retake Assessment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
