import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

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

const Pricing: React.FC = () => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isVisible = useOnScreen(ref);
    const { t } = useLanguage();

    const pricingData = [
        {
            plan: t('planBasic'),
            price: '25,000',
            color: 'red',
            featureGroups: [
                {
                    title: t('featureGroupVideo', { count: 8 }),
                    items: [
                        t('featureVideoShoot'),
                        t('featureVideoEditing'),
                        t('featureDirecting'),
                    ]
                },
                {
                    title: t('featureGroupPhoto', { count: 20 }),
                    items: [
                        t('featureProductPhoto'),
                        t('featureServicePhoto'),
                    ]
                }
            ]
        },
        {
            plan: t('planStandard'),
            price: '40,000',
            color: 'blue',
            featureGroups: [
                {
                    title: t('featureGroupVideo', { count: 10 }),
                    items: [
                        t('featureVideoShoot'),
                        t('featureVideoEditing'),
                        t('featureDirecting'),
                        t('featureContentCreation'),
                    ]
                },
                {
                    title: t('featureGroupPhoto', { count: 30 }),
                    items: [
                        t('featureProductPhoto'),
                        t('featureServicePhoto'),
                    ]
                }
            ]
        },
        {
            plan: t('planPremium'),
            price: '70,000',
            color: 'amber',
            featureGroups: [
                {
                    title: t('featureGroupVideo', { count: 10 }),
                    items: [
                        t('featureVideoShoot'),
                        t('featureVideoEditing'),
                        t('featureDirecting'),
                        t('featureContentCreation'),
                    ]
                },
                {
                    title: t('featureGroupPhoto', { count: 50 }),
                    items: [
                        t('featureProductPhoto'),
                        t('featureServicePhoto'),
                    ]
                },
                {
                    title: t('featureGroupSMM'),
                    items: [
                        t('featureSMMPlatforms'),
                    ]
                },
                {
                    title: t('featureGroupGD'),
                    items: [
                        t('featureProductGraphics'),
                        t('featureMockup'),
                        t('featurePostGraphics'),
                    ]
                }
            ]
        },
    ];

    const colorClasses = {
        red: {
            bg: 'bg-red-600',
            hoverBg: 'hover:bg-red-500',
            borderColor: 'border-red-500/50',
            shadow: 'hover:shadow-red-500/20',
            textColor: 'text-red-500'
        },
        blue: {
            bg: 'bg-blue-600',
            hoverBg: 'hover:bg-blue-500',
            borderColor: 'border-blue-500/50',
            shadow: 'hover:shadow-blue-500/20',
            textColor: 'text-blue-500'
        },
        amber: {
            bg: 'bg-amber-500',
            hoverBg: 'hover:bg-amber-400',
            borderColor: 'border-amber-500/50',
            shadow: 'hover:shadow-amber-500/20',
            textColor: 'text-amber-500'
        },
    };

    return (
        <section id="pricing" className="py-20 sm:py-28 bg-[#0c0c0c]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t('pricingTitle')}</SectionTitle>
                <p ref={ref} className={`max-w-3xl mx-auto text-center text-gray-400 text-lg mb-16 scroll-animation ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '200ms' }}>
                    {t('pricingSubtitle')}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {pricingData.map((pkg, index) => {
                        const colors = colorClasses[pkg.color as keyof typeof colorClasses];
                        const cardRef = useRef<HTMLDivElement>(null);
                        const cardIsVisible = useOnScreen(cardRef);
                        return (
                            <div
                                key={pkg.plan}
                                ref={cardRef}
                                className={`relative flex flex-col bg-gray-900/50 rounded-xl border ${colors.borderColor} p-8 shadow-lg ${colors.shadow} transition-all duration-300 transform hover:-translate-y-2 scroll-animation ${cardIsVisible ? 'animate' : ''}`}
                                style={{ transitionDelay: `${index * 150 + 300}ms` }}
                            >
                                <div className="flex-grow">
                                    <h3 className={`text-3xl font-extrabold text-white text-center mb-2`}>{pkg.plan}</h3>
                                    <div className={`w-full h-1 ${colors.bg} mb-6`}></div>
                                    <p className="text-center text-5xl font-bold text-white mb-6">{pkg.price} <span className="text-2xl font-medium text-gray-400">{t('priceCurrency')}</span></p>
                                    <ul className="space-y-4">
                                        {pkg.featureGroups.map((group, groupIndex) => (
                                            <li key={groupIndex}>
                                                <div className="flex items-start">
                                                     <svg className={`w-6 h-6 mr-3 flex-shrink-0 ${colors.textColor}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                                    <span className="font-semibold text-white">{group.title}</span>
                                                </div>
                                                <ul className="pl-9 mt-2 space-y-2 text-sm">
                                                    {group.items.map((item, itemIndex) => (
                                                        <li key={itemIndex} className="flex items-start text-gray-400">
                                                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8">
                                    <a href="#contact"
                                       className={`block w-full text-center py-3 px-6 rounded-lg font-bold text-white transition-colors duration-300 ${colors.bg} ${colors.hoverBg}`}
                                       onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                        {t('getStarted')}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
