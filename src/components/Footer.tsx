'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/useLanguage';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export default function Footer() {
    const { t, isRTL } = useLanguage();

    const navigationLinks = [
        { href: '/intro', labelKey: 'footer.navigation.about' },
        { href: '/templates', labelKey: 'footer.navigation.templates' },
        { href: '/pricing', labelKey: 'footer.navigation.pricing' },
        { href: '/blog', labelKey: 'footer.navigation.blog' },
        { href: '/community', labelKey: 'footer.navigation.community' }
    ];

    const productLinks = [
        { href: '/', labelKey: 'footer.product.aiBuilder' },
        { href: '/wordpress-plugin', labelKey: 'footer.product.wordpress' },
        { href: '/templates', labelKey: 'footer.product.templates' }
    ];

    const supportLinks = [
        { href: '/help', labelKey: 'footer.support.help' },
        { href: '/contact', labelKey: 'footer.support.contact' },
        { href: '/tutorials', labelKey: 'footer.support.tutorials' }
    ];

    const legalLinks = [
        { href: '/privacy', labelKey: 'footer.legal.privacy' },
        { href: '/terms', labelKey: 'footer.legal.terms' },
        { href: '/cookies', labelKey: 'footer.legal.cookies' },
        { href: '/gdpr', labelKey: 'footer.legal.gdpr' }
    ];

    const socialLinks = [
        { href: 'mailto:contact@banild.ai', icon: Mail, label: 'Email' },
        { href: 'https://x.com/banildai', icon: XIcon, label: 'X' },
        { href: 'https://facebook.com/banildai', icon: Facebook, label: 'Facebook' },
        { href: 'https://instagram.com/banildai', icon: Instagram, label: 'Instagram' },
        { href: 'https://linkedin.com/company/banildai', icon: Linkedin, label: 'LinkedIn' },
        { href: 'https://youtube.com/@banildai', icon: Youtube, label: 'YouTube' }
    ];

    return (
        <footer className="bg-gray-50 text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 sm:gap-8 mb-8 sm:mb-12">

                    {/* Company Info */}
                    <div className={`lg:col-span-2 ${isRTL ? 'flex flex-col items-end' : ''}`}>
                        <div className={`mb-4 sm:mb-6 ${isRTL ? 'text-right' : ''}`}>
                            <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black ${isRTL ? 'font-arabic' : ''}`}>
                                Banild AI
                            </h3>
                            <p className={`text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                                {t('footer.company.description')}
                            </p>
                        </div>


                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-black ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
                            {t('footer.navigation.title')}
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {navigationLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm sm:text-base text-gray-600 hover:text-black transition-colors duration-200 block ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
                                    >
                                        {t(link.labelKey)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-black ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
                            {t('footer.product.title')}
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {productLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm sm:text-base text-gray-600 hover:text-black transition-colors duration-200 block ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
                                    >
                                        {t(link.labelKey)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-black ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
                            {t('footer.support.title')}
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {supportLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm sm:text-base text-gray-600 hover:text-black transition-colors duration-200 block ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
                                    >
                                        {t(link.labelKey)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-black ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
                            {t('footer.legal.title')}
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm sm:text-base text-gray-600 hover:text-black transition-colors duration-200 block ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
                                    >
                                        {t(link.labelKey)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className={`pt-6 sm:pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`text-gray-600 text-xs sm:text-sm mb-3 md:mb-0 ${isRTL ? 'font-arabic' : ''}`}>
                        © {new Date().getFullYear()} {t('footer.copyright')}
                    </div>

                    <div className={`flex flex-wrap items-center gap-4 sm:gap-6 ${isRTL ? 'space-x-reverse' : ''}`}>
                        {/* Social Links */}
                        <div className={`${isRTL ? 'flex flex-col items-end' : ''}`}>
                            <div className={`flex gap-3 sm:gap-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-black transition-colors duration-200"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
