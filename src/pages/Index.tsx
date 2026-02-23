
import React from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';
import { CartProvider } from '@/contexts/CartContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index: React.FC = () => {
  return (
    <AppProvider>
      <LanguageProvider>
        <CartProvider>
          <AppLayout />
        </CartProvider>
      </LanguageProvider>
    </AppProvider>
  );
};

export default Index;
