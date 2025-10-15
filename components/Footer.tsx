import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const socialLinks = [
    { name: 'Facebook', href: '#', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z"></path></svg> },
    { name: 'Instagram', href: '#', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.217.598 1.772 1.153.556.556.9 1.113 1.153 1.772.248.638.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.013 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.556.556-1.113.9-1.772 1.153-.638.248-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.013-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.883 4.883 0 01-1.772-1.153 4.883 4.883 0 01-1.153-1.772c-.248-.638-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.013-3.056.06-4.122c.05-1.065.218-1.79.465-2.428.254-.66.598-1.217 1.153-1.772.556-.556 1.113.9 1.772-1.153.638-.248 1.363.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z"></path></svg> },
    { name: 'LinkedIn', href: '#', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg> },
    { name: 'TikTok', href: '#', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.32-4.2-1.86-6.33.36-1.72 1.46-3.1 2.9-4.04.85-.56 1.82-.86 2.79-.91 1.6-.1 3.2-.02 4.8.03z"></path></svg> },
    { name: 'YouTube', href: '#', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M21.582 6.186A2.153 2.153 0 0020.15 4.99a51.34 51.34 0 00-8.15-.42c-2.85 0-5.5.14-8.15.42A2.153 2.153 0 002.418 6.186c-.27.75-.418 2.01-.418 5.814s.148 5.064.418 5.814a2.153 2.153 0 001.433 1.196c2.65.28 5.3.42 8.15.42 2.85 0 5.5-.14 8.15-.42a2.153 2.153 0 001.433-1.196c.27-.75.418-2.01.418-5.814s-.148-5.064-.418-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg> },
];

const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-[#111111] border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-400 text-center sm:text-left mb-4 sm:mb-0">
                        &copy; {new Date().getFullYear()} {t('footerCopyright')}
                    </p>
                    <div className="flex items-center space-x-5">
                        {socialLinks.map((social) => (
                            <a key={social.name} href={social.href} className="text-gray-400 hover:text-amber-400 transition-colors duration-300" aria-label={social.name}>
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;