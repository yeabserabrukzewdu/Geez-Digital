import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
            style={{ backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 30%)` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white animate-fade-in-down">
                    <span className="block">{t('heroTitle1')}</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">{t('heroTitle2')}</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    {t('heroSubtitle')}
                </p>
                <a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
                   className="mt-10 inline-block bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    {t('heroButton')}
                </a>
            </div>
            {/* Fix: Removed non-standard `jsx` prop from style tag. */}
            <style>{`
                @keyframes fade-in-down {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 1s ease-out forwards;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Hero;