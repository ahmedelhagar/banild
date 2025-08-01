'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/useLanguage';

export default function SignPage() {
    const { language, t } = useLanguage();
    const isRTL = language === 'ar';
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleEmailSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement email sign-up logic
        console.log('Email sign-up:', { name, email, password });
    };

    const handleSocialLogin = (provider: string) => {
        // TODO: Implement social login logic
        console.log(`${provider} login clicked`);
    };

    const handleContinueWithEmail = () => {
        setShowEmailForm(true);
    };

    const handleBackToButtons = () => {
        setShowEmailForm(false);
    };

    return (
        <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Back to Landing Page Button */}
            <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'}`}>
                <Link 
                    href="/" 
                    className={`flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/80 rounded-lg transition-all duration-200 backdrop-blur-sm ${isRTL ? 'space-x-reverse font-arabic' : ''}`}
                >
                    <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {t('auth.backToHome')}
                </Link>
            </div>

            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <Image 
                            src="/site-icon.png" 
                            alt="Banild AI" 
                            width={60} 
                            height={60}
                            className="rounded-lg"
                        />
                    </div>
                    <h1 className={`text-2xl font-bold text-gray-900 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                        {t('auth.signup.title')}
                    </h1>
                    <p className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                        {t('auth.signup.subtitle')}
                    </p>
                </div>

                {!showEmailForm ? (
                    /* Social Login Buttons */
                    <div className="space-y-3">
                        <button
                            onClick={() => handleSocialLogin('Google')}
                            className={`w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                        >
                            <svg className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            {t('auth.continueWithGoogle')}
                        </button>

                        <button
                            onClick={() => handleSocialLogin('Facebook')}
                            className={`w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                        >
                            <svg className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} fill="#1877F2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            {t('auth.continueWithFacebook')}
                        </button>

                        <button
                            onClick={() => handleSocialLogin('GitHub')}
                            className={`w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                        >
                            <svg className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            {t('auth.continueWithGitHub')}
                        </button>

                        <button
                            onClick={handleContinueWithEmail}
                            className={`w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 ${isRTL ? 'font-arabic' : ''}`}
                        >
                            <svg className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            {t('auth.continueWithEmail')}
                        </button>
                    </div>
                ) : (
                    /* Email Form */
                    <div>
                        <button 
                            onClick={handleBackToButtons}
                            className={`flex items-center text-gray-600 hover:text-gray-800 mb-6 ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}
                        >
                            <svg className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            {t('auth.back')}
                        </button>

                        <form onSubmit={handleEmailSignUp} className="space-y-4">
                            <div>
                                <label htmlFor="name" className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                                    {t('auth.fullName')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black ${isRTL ? 'text-right font-arabic' : 'text-left'}`}
                                    placeholder={t('auth.fullNamePlaceholder')}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                                    {t('auth.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black ${isRTL ? 'text-right font-arabic' : 'text-left'}`}
                                    placeholder={t('auth.emailPlaceholder')}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                                    {t('auth.password')}
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black ${isRTL ? 'text-right font-arabic' : 'text-left'}`}
                                    placeholder={t('auth.passwordPlaceholder')}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors duration-200 font-medium ${isRTL ? 'font-arabic' : ''}`}
                            >
                                {t('auth.signup.button')}
                            </button>
                        </form>
                    </div>
                )}

                {/* Sign In Link */}
                <div className="mt-6 text-center">
                    <p className={`text-sm text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                        {t('auth.signup.hasAccount')}{' '}
                        <Link href="/login" className={`text-blue-600 hover:text-gray-800 font-medium ${isRTL ? 'font-arabic' : ''}`}>
                            {t('auth.signup.signInLink')}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}