import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Logo = () => (
    <img 
    src="/geez-stars-logo.png"  // Update this path to match your file location
    alt="My Logo"
    width="48"
    height="48"
    style={{ objectFit: 'contain' }}  // Ensures it scales nicely without distortion
  />
);


const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('navServices'), href: '#services' },
        { name: t('navPricing'), href: '#pricing' },
        { name: t('navPortfolio'), href: '#portfolio' },
        { name: t('navTeam'), href: '#team' },
        { name: t('navContact'), href: '#contact' },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'am' : 'en');
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0c0c0c]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-2">
                        <Logo />
                        <span className="text-xl font-bold text-white tracking-wider">GEEZ DIGITALS</span>
                    </a>

                    <div className="flex items-center">
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">{link.name}</a>
                            ))}
                        </nav>
                        
                        <button onClick={toggleLanguage} className="ml-8 hidden md:block border-2 border-amber-500 text-amber-500 font-bold py-1 px-3 rounded-md hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300">
                            {language === 'en' ? 'አማ' : 'EN'}
                        </button>

                        <div className="md:hidden flex items-center">
                             <button onClick={toggleLanguage} className="text-amber-500 font-bold py-1 px-3 rounded-md mr-2">
                                {language === 'en' ? 'አማ' : 'EN'}
                            </button>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-[#0c0c0c]/95 backdrop-blur-sm">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                         {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">{link.name}</a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;