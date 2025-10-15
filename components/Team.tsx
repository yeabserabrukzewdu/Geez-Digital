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

// FIX: Define a type for team members to be used in both components.
interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
}

const Team: React.FC = () => {
    const { t } = useLanguage();

    const teamMembers: TeamMember[] = [
        { name: 'Abel Defar', role: t('teamRole1'), imageUrl: 'https://picsum.photos/seed/abel/400/400' },
        { name: 'Ashenafi Mesfin', role: t('teamRole2'), imageUrl: 'https://picsum.photos/seed/ashenafi/400/400' },
        { name: 'Milkeyas Haile', role: t('teamRole3'), imageUrl: 'https://picsum.photos/seed/milkeyas/400/400' },
        { name: 'Kirubel Girma', role: t('teamRole4'), imageUrl: 'https://picsum.photos/seed/kirubel/400/400' },
        { name: 'Natnael Tadesse', role: t('teamRole5'), imageUrl: 'https://picsum.photos/seed/natnael/400/400' },
        { name: 'Ezra Eshetu', role: t('teamRole6'), imageUrl: 'https://picsum.photos/seed/ezra/400/400' },
        { name: 'Biniyam Birhanu', role: t('teamRole7'), imageUrl: 'https://picsum.photos/seed/biniyam/400/400' },
        { name: 'Musea Teklit', role: t('teamRole8'), imageUrl: 'https://picsum.photos/seed/musea/400/400' },
    ];

    return (
        <section id="team" className="py-20 sm:py-28 bg-[#0c0c0c]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t('teamTitle')}</SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TeamMemberCard: React.FC<{ member: TeamMember, index: number }> = ({ member, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, 0.1);
    return (
        <div 
            ref={ref}
            className={`text-center scroll-animation ${isVisible ? 'animate' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="relative inline-block">
                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto border-4 border-gray-700 shadow-lg" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">{member.name}</h3>
            <p className="text-amber-400">{member.role}</p>
        </div>
    );
};


export default Team;