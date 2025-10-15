import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLHeadingElement>(null);
    const isVisible = useOnScreen(ref);
    return (
        <h2 ref={ref} className={`text-4xl md:text-5xl font-extrabold text-center text-white mb-4 scroll-animation ${isVisible ? 'animate' : ''}`}>
            {children}
            <span className="block w-24 h-1 bg-amber-500 mx-auto mt-4"></span>
        </h2>
    );
};

const Services: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);
    const { t } = useLanguage();

    const servicesData: Service[] = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            title: t('servicePromoTitle'),
            description: t('servicePromoDesc'),
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
            title: t('serviceSocialTitle'),
            description: t('serviceSocialDesc'),
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
            title: t('serviceCorpTitle'),
            description: t('serviceCorpDesc'),
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
            title: t('serviceTestimonialTitle'),
            description: t('serviceTestimonialDesc'),
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
            title: t('serviceEventTitle'),
            description: t('serviceEventDesc'),
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 010-2.828L16 8M12 20h.01" /><path d="M12 20h.01" strokeWidth={2} /><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} /></svg>,
            title: t('serviceGraphicTitle'),
            description: t('serviceGraphicDesc'),
        }
    ];

    return (
        <section id="services" className="py-20 sm:py-28 bg-[#111111]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t('servicesTitle')}</SectionTitle>
                <p ref={ref} className={`max-w-3xl mx-auto text-center text-gray-400 text-lg mb-16 scroll-animation ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '200ms' }}>
                    {t('servicesSubtitle')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div ref={ref} className={`bg-gray-800/50 p-8 rounded-lg border border-gray-700/50 shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/30 transition-all duration-300 transform hover:-translate-y-2 scroll-animation ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: `${index * 100 + 300}ms` }}>
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
        </div>
    );
};

export default Services;