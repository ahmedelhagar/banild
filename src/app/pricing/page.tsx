'use client';

import LandHeader from '@/components/Landing/LandingHeader';
import PricingPlans from '@/components/Landing/PricingPlans';
import { useLanguage } from '@/lib/useLanguage';
import Link from 'next/link';

export default function PricingPage() {
    const { t, isRTL } = useLanguage();

    return (
        <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>

            {/* Header */}
            <LandHeader />
            
            {/* Pricing */}
            <div className="container mx-auto px-4 py-16">
                <PricingPlans />

                {/* FAQ Section */}
                <div className="mt-24 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('pricing.faq.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-2">{t('pricing.faq.q1.question')}</h3>
                            <p className="text-gray-600">{t('pricing.faq.q1.answer')}</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-2">{t('pricing.faq.q2.question')}</h3>
                            <p className="text-gray-600">{t('pricing.faq.q2.answer')}</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-2">{t('pricing.faq.q3.question')}</h3>
                            <p className="text-gray-600">{t('pricing.faq.q3.answer')}</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="font-semibold text-gray-900 mb-2">{t('pricing.faq.q4.question')}</h3>
                            <p className="text-gray-600">{t('pricing.faq.q4.answer')}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-black text-white rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">{t('pricing.cta.title')}</h3>
                        <p className="text-gray-300 mb-6">
                            {t('pricing.cta.description')}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                        >
                            {t('pricing.cta.button')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
