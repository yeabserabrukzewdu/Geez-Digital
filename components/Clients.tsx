import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const clientLogos = [
    '/01.png',
    '/02.png',
    '/03.png',
    '/04.png',
    '/05.png',
    '/06.png',
    '/07.png',
    '/08.png',
    '/09.png',
    '/10.png',
    '/11.png',
    '/12.png',
    '/01.png',
    '/03.png',
];

const Clients: React.FC = () => {
    const duplicatedLogos = [...clientLogos, ...clientLogos];
    const { t } = useLanguage();

    return (
        <section id="clients" className="py-20 bg-[#111111] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-400 mb-12">{t('clientsTitle')}</h2>
                <div className="relative w-full space-y-8">
                    {/* Top marquee: Right to Left */}
                    <div className="relative w-full">
                        <div className="flex animate-marquee whitespace-nowrap">
                            {duplicatedLogos.map((logo, index) => (
                                <div key={`top-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center h-24">
                                    <img 
                                        src={logo} 
                                        alt="Client Logo" 
                                        className="h-full w-auto max-h-24 object-contain transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Bottom marquee: Left to Right (reverse animation direction) */}
                    <div className="relative w-full">
                        <div className="flex animate-marquee-reverse whitespace-nowrap">
                            {duplicatedLogos.map((logo, index) => (
                                <div key={`bottom-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center h-24">
                                    <img 
                                        src={logo} 
                                        alt="Client Logo" 
                                        className="h-full w-auto max-h-24 object-contain transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee 40s linear infinite reverse;
                }
            `}</style>
        </section>
    );
};

export default Clients;