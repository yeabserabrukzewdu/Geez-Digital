import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLHeadingElement>(null);
    const isVisible = useOnScreen(ref);
    return (
        <h2 
            ref={ref} 
            className={`text-4xl md:text-5xl font-extrabold text-center text-white mb-4 scroll-animation ${isVisible ? 'animate' : ''}`}
            style={{ fontFamily: 'TikTok Sans, sans-serif' }}
        >
            {children}
            <span className="block w-24 h-1 bg-amber-500 mx-auto mt-4"></span>
        </h2>
    );
};

const Portfolio: React.FC = () => {
    const { t } = useLanguage();

    const portfolioItems = [
        { id: 1, title: t('portfolioItemTitle1'), category: t('portfolioItemCat1'), videoUrl: 'https://drive.google.com/file/d/1F4oO1Y0an63okjd73WdfQEExBUaEuC5J/view' },
        { id: 2, title: t('portfolioItemTitle2'), category: t('portfolioItemCat2'), videoUrl: 'https://drive.google.com/file/d/1jbXWlVt7L0psYlMDRxMB1ZnEmbO_UFma/view' },
        { id: 3, title: t('portfolioItemTitle3'), category: t('portfolioItemCat3'), videoUrl: 'https://drive.google.com/file/d/1BXmsZBSbjhZ5wzoulSSTyhse1S8QEjRd/view' },
        { id: 4, title: t('portfolioItemTitle4'), category: t('portfolioItemCat4'), videoUrl: 'https://drive.google.com/file/d/1pdpOgJXzSHUizdtQsrF8vl9-djvQuYNQ/view' },
        { id: 5, title: t('portfolioItemTitle5'), category: t('portfolioItemCat5'), videoUrl: 'https://drive.google.com/file/d/1BST5PRN59UsIPY-z4MF2Q9Z9Ndoligh4/view' },
        { id: 6, title: t('portfolioItemTitle6'), category: t('portfolioItemCat6'), videoUrl: 'https://drive.google.com/file/d/1B_oeoChBeb8M13OaOT7A00Agjz_Aj-bF/view' },
        { id: 7, title: t('portfolioItemTitle7'), category: t('portfolioItemCat7'), videoUrl: 'https://drive.google.com/file/d/1BZcFcZi3jeusc-IJfDo7_OLmi0dJa4Kv/view' },
        { id: 8, title: t('portfolioItemTitle8'), category: t('portfolioItemCat8'), videoUrl: 'https://drive.google.com/file/d/1Qs-_QnYe9Q0dotJAfdbA2ZQn6y2KmgaT/view' },
        { id: 9, title: t('portfolioItemTitle9'), category: t('portfolioItemCat9'), videoUrl: 'https://drive.google.com/file/d/1BSwqfMK15NT8kQPzJhLc1Vv6SkpkfX2k/view' },
    ];
    
    return (
        <section id="portfolio" className="py-20 sm:py-28 bg-[#111111]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t('portfolioTitle')}</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface PortfolioItemData {
    id: number;
    title: string;
    category: string;
    videoUrl?: string;
}

const PortfolioItem: React.FC<{ item: PortfolioItemData; index: number }> = ({ item, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const getVideoEmbedUrl = (url: string) => {
        const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
        if (fileIdMatch) {
            const id = fileIdMatch[1];
            // Append parameters to force portrait mode and set a 9:16 aspect (400x711 approx)
            return `https://drive.google.com/file/d/${id}/preview?embedded=true&portrait=true&width=400&height=711`;
        }
        return url;
    };

    const mediaContent = (
        <div className="relative pt-[177.78%] overflow-hidden rounded-md">
            <iframe
                src={getVideoEmbedUrl(item.videoUrl || '')}
                title={item.title}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading="lazy"
            />
        </div>
    );

    return (
        <div
            ref={ref}
            className={`relative rounded-md shadow-lg scroll-animation ${isVisible ? 'animate' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {mediaContent}
        </div>
    );
};

export default Portfolio;