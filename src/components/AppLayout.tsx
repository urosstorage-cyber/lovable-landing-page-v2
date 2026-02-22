import React from 'react';
import Navigation from '@/components/heparbion/Navigation';
import HeroSection from '@/components/heparbion/HeroSection';
import TrustBar from '@/components/heparbion/TrustBar';
import PainPointsGrid from '@/components/heparbion/PainPointsGrid';
import SolutionSection from '@/components/heparbion/SolutionSection';
import QuizSection from '@/components/heparbion/QuizSection';
import ClinicSection from '@/components/heparbion/ClinicSection';
import PricingSection from '@/components/heparbion/PricingSection';
import AudioWidget from '@/components/heparbion/AudioWidget';
import Footer from '@/components/heparbion/Footer';
import CartDrawer from '@/components/heparbion/CartDrawer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-100 overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navigation />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section — Full viewport with floating product */}
        <HeroSection />

        {/* 2. Trust Bar — Certification badges */}
        <TrustBar />

        {/* 3. Pain Points — Bento grid with glassmorphism */}
        <PainPointsGrid />

        {/* 4. Solution / Science of Ayurveda — Dark section with ingredients */}
        <SolutionSection />

        {/* 5. Interactive Quiz — Glassmorphism assessment card */}
        <QuizSection />

        {/* 6. Clinic Authority — Split layout with trust indicators */}
        <ClinicSection />

        {/* 7. Pricing Table — 3-tier bundles on dark background */}
        <PricingSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Audio Widget */}
      <AudioWidget />

      {/* Cart Drawer Overlay */}
      <CartDrawer />
    </div>
  );
};

export default AppLayout;
