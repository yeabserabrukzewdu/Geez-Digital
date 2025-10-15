import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Team from './components/Team';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'am') {
      document.body.style.fontFamily = "'Noto Sans Ethiopic', sans-serif";
    } else {
      document.body.style.fontFamily = "'Poppins', sans-serif";
    }
  }, [language]);

  return (
    <div className="bg-[#0c0c0c] text-gray-100 antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Portfolio />
        <Stats />
        <Team />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;