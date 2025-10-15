import React, { useRef, useState } from 'react';
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


const Contact: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formMessage, setFormMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus('error');
            setFormMessage(t('formErrorMessage'));
            return;
        }

        setFormStatus('submitting');
        setFormMessage('');

        // Simulate sending an email. In a real app, this would be an API call to a backend service.
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setFormStatus('success');
        setFormMessage(t('formSuccessMessage'));
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
            setFormStatus('idle');
            setFormMessage('');
        }, 5000);
    };


    return (
        <section id="contact" className="py-20 sm:py-28 bg-[#0c0c0c]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>{t('contactTitle')}</SectionTitle>
                <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-start scroll-animation ${isVisible ? 'animate' : ''}`}>
                    <div className="text-lg">
                        <p className="max-w-md text-gray-400 mb-8">
                           {t('contactSubtitle')}
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPinIcon />
                                <div>
                                    <h3 className="font-bold text-white">{t('contactLocation')}</h3>
                                    <p className="text-gray-400">Bole KKare Building 2nd floor 2F-017</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <PhoneIcon />
                                <div>
                                    <h3 className="font-bold text-white">{t('contactMobile')}</h3>
                                    <p className="text-gray-400">+251 92 298 1639</p>
                                    <p className="text-gray-400">+251 93 109 7879</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                               <MailIcon />
                                <div>
                                    <h3 className="font-bold text-white">{t('contactEmail')}</h3>
                                    <p className="text-gray-400">geezdigitals@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                               <GlobeIcon />
                                <div>
                                    <h3 className="font-bold text-white">{t('contactWebsite')}</h3>
                                    <p className="text-gray-400">geezstars.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700/50">
                        <h3 className="text-2xl font-bold text-white mb-6">{t('contactFormTitle')}</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{t('contactNameLabel')}</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                    placeholder={t('contactNamePlaceholder')}
                                    aria-label={t('contactNameLabel')}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{t('contactEmailLabel')}</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                    placeholder={t('contactEmailPlaceholder')}
                                    aria-label={t('contactEmailLabel')}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{t('contactMessageLabel')}</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                    placeholder={t('contactMessagePlaceholder')}
                                    aria-label={t('contactMessageLabel')}
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-gray-900 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500 transition-all duration-300 disabled:bg-amber-800 disabled:cursor-not-allowed"
                                >
                                    {formStatus === 'submitting' ? t('contactSendingButton') : t('contactSendButton')}
                                </button>
                            </div>
                        </form>
                         {formMessage && (
                            <div className={`mt-4 text-center p-3 rounded-md text-sm ${
                                formStatus === 'success' ? 'bg-green-800/50 text-green-300' : ''
                            } ${
                                formStatus === 'error' ? 'bg-red-800/50 text-red-300' : ''
                            }`} role="alert">
                                {formMessage}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};


const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4 text-amber-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4 text-amber-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4 text-amber-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-4 text-amber-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.586-.586A2 2 0 0110.013 3h3.974a2 2 0 011.722.707l.586.586M3 21h18M12 3v18" /></svg>;

export default Contact;