import React, { useState, useEffect, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    decimals?: number;
    suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, decimals = 0, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const endValue = end;
            if (start === endValue) return;

            const totalFrames = Math.round(duration / (1000 / 60));
            const increment = (endValue - start) / totalFrames;
            let currentFrame = 0;

            const timer = setInterval(() => {
                currentFrame++;
                start += increment;
                setCount(start);

                if (currentFrame === totalFrames) {
                    setCount(endValue);
                    clearInterval(timer);
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isVisible, end, duration]);
    
    const formatNumber = (num: number) => {
        if (decimals > 0) {
            return (Math.round(num * (10 ** decimals)) / (10 ** decimals)).toFixed(decimals);
        }
        return Math.round(num).toLocaleString();
    };


    return <span ref={ref}>{formatNumber(count)}{suffix}</span>;
};

const Stats: React.FC = () => {
    const { t } = useLanguage();
    const statsData = [
        { value: 10, label: t('statsAwards'), suffix: '+' },
        { value: 5, label: t('statsCountries'), suffix: '+' },
        { value: 35, label: t('statsPartners'), suffix: '+' },
        { value: 3.5, label: t('statsViewer'), suffix: 'M+', decimals: 1 },
    ];
    return (
        <section className="py-20 sm:py-28 bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {statsData.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <p className="text-5xl md:text-6xl font-extrabold text-amber-400">
                                <AnimatedCounter end={stat.value} decimals={stat.decimals || 0} suffix={stat.suffix || ''} />
                            </p>
                            <h3 className="text-lg md:text-xl font-semibold text-gray-300 mt-2">{stat.label}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;