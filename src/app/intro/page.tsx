'use client';

import { useLanguage } from '@/lib/useLanguage';
import Link from 'next/link';
import { Users, Zap, Shield, ArrowRight, Download } from 'lucide-react';
import LandHeader from '@/components/Landing/LandingHeader';
import PricingPlans from '@/components/Landing/PricingPlans';
import Footer from '@/components/Landing/Footer';

export default function IntroPage() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      titleKey: 'intro.services.aiGeneration.title',
      descKey: 'intro.services.aiGeneration.desc'
    },
    {
      icon: <Users className="w-8 h-8" />,
      titleKey: 'intro.services.wordpress.title', 
      descKey: 'intro.services.wordpress.desc'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      titleKey: 'intro.services.support.title',
      descKey: 'intro.services.support.desc'
    }
  ];

  const youtubeVideos = [
    {
      id: 'ScMzIvxBSi4', // Example: Replace with your platform demo video ID
      titleKey: 'intro.videos.demo.title',
      descKey: 'intro.videos.demo.desc'
    },
    {
      id: 'HVyJ6yFXelM', // Example: Replace with your tutorial video ID  
      titleKey: 'intro.videos.tutorial.title',
      descKey: 'intro.videos.tutorial.desc'
    },
    {
      id: 'dQw4w9WgXcQ', // Example: Getting Started Guide
      titleKey: 'intro.videos.gettingStarted.title',
      descKey: 'intro.videos.gettingStarted.desc'
    },
    {
      id: 'jNQXAC9IVRw', // Example: Advanced Features
      titleKey: 'intro.videos.advanced.title',
      descKey: 'intro.videos.advanced.desc'
    },
    {
      id: '9bZkp7q19f0', // Example: WordPress Integration
      titleKey: 'intro.videos.wordpress.title',
      descKey: 'intro.videos.wordpress.desc'
    },
    {
      id: 'kJQP7kiw5Fk', // Example: Templates Guide
      titleKey: 'intro.videos.templates.title',
      descKey: 'intro.videos.templates.desc'
    },
    {
      id: 'ZZ5LpwO-An4', // Example: Customization Tips
      titleKey: 'intro.videos.customization.title',
      descKey: 'intro.videos.customization.desc'
    },
    {
      id: 'fJ9rUzIMcZQ', // Example: Deployment Guide
      titleKey: 'intro.videos.deployment.title',
      descKey: 'intro.videos.deployment.desc'
    },
    {
      id: 'Ks-_Mh1QhMc', // Example: Tips and Tricks
      titleKey: 'intro.videos.tips.title',
      descKey: 'intro.videos.tips.desc'
    }
  ];

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <LandHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b bg-white py-16 sm:py-20 md:py-24 lg:py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight ${isRTL ? 'font-arabic' : ''}`}>
              {t('intro.hero.title')}
            </h1>
            <p className={`text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('intro.hero.subtitle')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link
                href="/"
                className={`w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 inline-flex items-center justify-center ${isRTL ? 'font-arabic' : ''}`}
              >
                {t('intro.hero.startButton')}
                <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Link>
              <Link
                href="/wordpress-plugin"
                className={`w-full sm:w-auto border-2 border-gray-300 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 inline-flex items-center justify-center ${isRTL ? 'font-arabic' : ''}`}
              >
                <Download className={`w-4 h-4 sm:w-5 sm:h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span className="truncate">{t('intro.hero.watchButton')}</span>
              </Link>
            </div>  
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 ${isRTL ? 'font-arabic text-center lg:text-right' : 'text-center lg:text-left'}`}>
                {t('intro.about.title')}
              </h2>
              <p className={`text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed ${isRTL ? 'font-arabic text-center lg:text-right' : 'text-center lg:text-left'}`}>
                {t('intro.about.description')}
              </p>
              <p className={`text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed ${isRTL ? 'font-arabic text-center lg:text-right' : 'text-center lg:text-left'}`}>
                {t('intro.about.mission')}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
                <div className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`text-2xl sm:text-3xl font-bold text-black mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                    {isRTL ? '١٠٠+' : '100+'}
                  </div>
                  <div className={`text-sm sm:text-base text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                    {t('intro.about.stats.websites')}
                  </div>
                </div>
                <div className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`text-2xl sm:text-3xl font-bold text-black mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                    {isRTL ? '٥٠+' : '50+'}
                  </div>
                  <div className={`text-sm sm:text-base text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                    {t('intro.about.stats.clients')}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeVideos[0].id}`}
                    title={t('intro.about.title')}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('intro.services.title')}
            </h2>
            <p className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('intro.services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg flex items-center justify-center text-white mb-4 ${isRTL ? 'mr-auto' : 'ml-0'}`}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className={`text-lg sm:text-xl font-semibold text-gray-900 mb-3 ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
                    {t(service.titleKey)}
                  </h3>
                  <p className={`text-sm sm:text-base text-gray-600 leading-relaxed ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingPlans />

      {/* Videos Section */}
      <section id="videos" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('intro.videos.title')}
            </h2>
            <p className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('intro.videos.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {youtubeVideos.slice(0, 6).map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={t(video.titleKey)}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className={`text-lg sm:text-xl font-semibold text-gray-900 mb-2 ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
                    {t(video.titleKey)}
                  </h3>
                  <p className={`text-sm sm:text-base text-gray-600 ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
                    {t(video.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center mt-8 sm:mt-12">
            <button className={`w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 inline-flex items-center justify-center ${isRTL ? 'font-arabic' : ''}`}>
              {t('intro.videos.seeMore')}
              <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {t('intro.cta.title')}
          </h2>
          <p className={`text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('intro.cta.subtitle')}
          </p>
          <Link
            href="/"
            className={`w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 inline-flex items-center justify-center ${isRTL ? 'font-arabic' : ''}`}
          >
            {t('intro.cta.button')}
            <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}