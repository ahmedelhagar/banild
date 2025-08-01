'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/useLanguage';

export default function ResetPasswordPage() {
    const { language, t } = useLanguage();
    const isRTL = language === 'ar';
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        // TODO: Implement password reset logic
        console.log('Password reset requested for:', email);
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 2000);
    };

    if (isSubmitted) {
        return (
            <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                {/* Back Button */}
                <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'}`}>
                    <Link 
                        href="/login" 
                        className={`flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/80 rounded-lg transition-all duration-200 backdrop-blur-sm ${isRTL ? 'space-x-reverse' : ''}`}
                    >
                        <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {t('auth.resetPassword.backToLogin')}
                    </Link>
                </div>

                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
                    {/* Success Header */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            {t('auth.resetPassword.success.title')}
                        </h1>
                        <p className="text-gray-600 mb-4">
                            {t('auth.resetPassword.success.subtitle')}
                        </p>
                        <p className="text-gray-900 font-medium bg-gray-50 px-4 py-2 rounded-lg">
                            {email}
                        </p>
                    </div>

                    {/* Instructions */}
                    <div className="space-y-4 mb-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h3 className={`font-medium text-blue-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                                {t('auth.resetPassword.success.nextSteps')}:
                            </h3>
                            <ol className={`text-sm text-blue-800 space-y-1 list-decimal ${isRTL ? 'list-inside text-right' : 'list-inside text-left'}`}>
                                <li>{t('auth.resetPassword.success.step1')}</li>
                                <li>{t('auth.resetPassword.success.step2')}</li>
                                <li>{t('auth.resetPassword.success.step3')}</li>
                                <li>{t('auth.resetPassword.success.step4')}</li>
                            </ol>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                        <Link
                            href="/login"
                            className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors duration-200 font-medium text-center block"
                        >
                            {t('auth.resetPassword.backToLogin')}
                        </Link>
                        
                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                setEmail('');
                            }}
                            className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors duration-200 font-medium"
                        >
                            {t('auth.resetPassword.success.tryDifferent')}
                        </button>
                    </div>

                    {/* Help Text */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-500">
                            {t('auth.resetPassword.success.helpText')}{' '}
                            <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                                {t('auth.resetPassword.success.contactSupport')}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Back Button */}
            <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'}`}>
                <Link 
                    href="/login" 
                    className={`flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/80 rounded-lg transition-all duration-200 backdrop-blur-sm ${isRTL ? 'space-x-reverse' : ''}`}
                >
                    <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {t('auth.resetPassword.backToLogin')}
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
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        {t('auth.resetPassword.title')}
                    </h1>
                    <p className="text-gray-600">
                        {t('auth.resetPassword.subtitle')}
                    </p>
                </div>

                {/* Reset Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {t('auth.email')}
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black ${isRTL ? 'text-right' : 'text-left'}`}
                            placeholder={t('auth.emailPlaceholder')}
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                            isLoading
                                ? 'bg-gray-400 text-white cursor-not-allowed'
                                : 'bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
                        }`}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <svg className={`animate-spin h-5 w-5 text-white ${isRTL ? 'ml-3 -mr-1' : '-ml-1 mr-3'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {t('auth.resetPassword.sending')}
                            </div>
                        ) : (
                            t('auth.resetPassword.button')
                        )}
                    </button>
                </form>

                {/* Alternative Actions */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        {t('auth.resetPassword.rememberPassword')}{' '}
                        <Link href="/login" className="text-blue-600 hover:text-gray-800 font-medium">
                            {t('auth.resetPassword.backToLogin')}
                        </Link>
                    </p>
                </div>

                {/* Security Note */}
                <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <svg className={`w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z" />
                        </svg>
                        <p className={`text-xs text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {t('auth.resetPassword.securityNote')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
