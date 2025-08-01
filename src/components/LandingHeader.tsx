'use client';

import Link from "next/link";
import { useState } from "react";
import { Logo } from "../ui/logo";
import { useLanguage } from "@/lib/useLanguage";
import { Globe } from "lucide-react";

export default function LandHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t, isRTL } = useLanguage();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    return (
        <header className="w-full bg-white">
            <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Logo showText={true} variant="light" className="h-8" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center justify-center">
                        <div className={`flex font-semibold justify-between items-center ${isRTL ? 'space-x-reverse space-x-12' : 'space-x-12'}`}>
                            <Link
                                href="/intro"
                                className={`text-gray-600 hover:text-gray-900 font-semibold text-sm tracking-wide transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                            >
                                {t('header.intro')}
                            </Link>
                            <Link
                                href="/community"
                                className={`text-gray-600 hover:text-gray-900 font-semibold text-sm tracking-wide transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                            >
                                {t('header.community')}
                            </Link>
                            <Link
                                href="/templates"
                                className={`text-gray-600 hover:text-gray-900 font-semibold text-sm tracking-wide transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                            >
                                {t('header.templates')}
                            </Link>
                            <Link
                                href="/pricing"
                                className={`text-gray-600 hover:text-gray-900 font-semibold text-sm tracking-wide transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                            >
                                {t('header.pricing')}
                            </Link>
                            <Link
                                href="/blog"
                                className={`text-gray-600 hover:text-gray-900 font-semibold text-sm tracking-wide transition-colors duration-200 ${isRTL ? 'font-arabic mx-12' : ''}`}
                            >
                                {t('header.blog')}
                            </Link>
                        </div>
                    </nav>

                    {/* Desktop Auth Buttons & Language Switcher */}
                    <div className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className={`flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors duration-200 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                        >
                            <Globe className="w-4 h-4" />
                            <span className={`text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}>
                                {language === 'en' ? 'العربية' : 'English'}
                            </span>
                        </button>

                        <Link
                            href="/sign"
                            className={`bg-black text-white border-2 border-black font-bold text-sm px-5 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-black active:scale-95 transform hover:translate-y-[-1px] active:translate-y-[1px] ${isRTL ? 'font-arabic' : ''}`}
                        >
                            {t('header.getStarted')}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className={`lg:hidden flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                        {/* Mobile Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className={`p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                        >
                            <Globe className="w-5 h-5" />
                        </button>

                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                            aria-label="Toggle mobile menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-50 bg-white">
                    <div className={`px-8 py-8 space-y-6 ${isRTL ? 'text-right' : ''}`}>
                        {/* Mobile Navigation Links */}
                        <div className="space-y-4">
                            <Link
                                href="/intro"
                                className={`block text-gray-600 hover:text-gray-900 font-medium text-base py-2 transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('header.intro')}
                            </Link>
                            <Link
                                href="/community"
                                className={`block text-gray-600 hover:text-gray-900 font-medium text-base py-2 transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('header.community')}
                            </Link>
                            <Link
                                href="/blog"
                                className={`block text-gray-600 hover:text-gray-900 font-medium text-base py-2 transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('header.blog')}
                            </Link>
                            <Link
                                href="/templates"
                                className={`block text-gray-600 hover:text-gray-900 font-medium text-base py-2 transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('header.templates')}
                            </Link>
                            <Link
                                href="/pricing"
                                className={`block text-gray-600 hover:text-gray-900 font-medium text-base py-2 transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('header.pricing')}
                            </Link>
                        </div>

                        {/* Mobile Auth Buttons */}
                        <div className="pt-6 w-full border-t border-gray-100 space-y-4">
                            <Link
                                href="/sign"
                                className={`bg-black text-white w-full border-1 border-black font-bold text-sm px-5 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-black active:scale-95 transform hover:translate-y-[-1px] active:translate-y-[1px] ${isRTL ? 'font-arabic' : ''}`}
                            >
                                {t('header.getStarted')}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}