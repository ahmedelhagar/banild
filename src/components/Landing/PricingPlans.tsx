'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/useLanguage';

interface PricingPlan {
  nameKey: string;
  descKey: string;
  featuresKey: string;
  popular: boolean;
  price: { monthly: number; annual: number };
}

interface PricingPlansProps {
  showToggles?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function PricingPlans({ 
  showToggles = true, 
  title,
  subtitle,
  className = "py-20"
}: PricingPlansProps) {
  const { t, tArray, isRTL } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState('USD'); // USD or EGP
  
  // Exchange rate: 1 USD = 31 EGP (approximate)
  const exchangeRate = 31;

  // Animation state for pricing
  const [animatedPrices, setAnimatedPrices] = useState<{ [key: number]: number }>({});

  const pricingPlans: PricingPlan[] = [
    {
      nameKey: 'intro.pricing.free.name',
      descKey: 'intro.pricing.free.desc',
      featuresKey: 'intro.pricing.free.features',
      popular: false,
      price: { monthly: 0, annual: 0 }
    },
    {
      nameKey: 'intro.pricing.pro.name',
      descKey: 'intro.pricing.pro.desc',
      featuresKey: 'intro.pricing.pro.features',
      popular: true,
      price: { monthly: 29, annual: 24 }
    },
    {
      nameKey: 'intro.pricing.enterprise.name',
      descKey: 'intro.pricing.enterprise.desc',
      featuresKey: 'intro.pricing.enterprise.features',
      popular: false,
      price: { monthly: 99, annual: 79 }
    }
  ];

  // Initialize animated prices on mount and currency change
  useEffect(() => {
    const initialPrices: { [key: number]: number } = {};
    pricingPlans.forEach((plan, index) => {
      const targetPrice = isAnnual ? plan.price.annual : plan.price.monthly;
      const finalPrice = currency === 'USD' ? targetPrice : Math.round(targetPrice * exchangeRate);
      initialPrices[index] = finalPrice;
    });
    setAnimatedPrices(initialPrices);
  }, [currency]); // Reset when currency changes

  // Custom hook for animating numbers
  const useCounterAnimation = (targetValue: number, index: number, duration: number = 500) => {
    useEffect(() => {
      const startValue = animatedPrices[index] || targetValue;
      const difference = targetValue - startValue;
      const startTime = Date.now();

      if (difference === 0) return;

      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (difference * easeOutQuart);
        
        setAnimatedPrices(prev => ({
          ...prev,
          [index]: Math.round(currentValue)
        }));

        if (progress >= 1) {
          clearInterval(timer);
        }
      }, 16); // ~60fps

      return () => clearInterval(timer);
    }, [targetValue, index]);

    return animatedPrices[index] || targetValue;
  };

  // Animated Price Component
  const AnimatedPrice = ({ plan, index }: { plan: PricingPlan, index: number }) => {
    const targetPrice = isAnnual ? plan.price.annual : plan.price.monthly;
    const finalPrice = currency === 'USD' ? targetPrice : Math.round(targetPrice * exchangeRate);
    const animatedValue = useCounterAnimation(finalPrice, index);
    
    if (targetPrice === 0) {
      return <span>{isRTL ? 'مجاني' : 'Free'}</span>;
    }
    
    if (currency === 'USD') {
      return <span>${animatedValue}</span>;
    } else {
      return <span>{animatedValue} {isRTL ? 'ج.م' : 'EGP'}</span>;
    }
  };
  
  // Helper function to format price based on currency
  const formatPrice = (usdPrice: number) => {
    if (usdPrice === 0) {
      return isRTL ? 'مجاني' : 'Free';
    }
    
    const finalPrice = currency === 'USD' ? usdPrice : Math.round(usdPrice * exchangeRate);
    
    if (currency === 'USD') {
      return `$${finalPrice}`;
    } else {
      return `${finalPrice} ${isRTL ? 'ج.م' : 'EGP'}`;
    }
  };

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {title || t('intro.pricing.title')}
          </h2>
          <p className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 ${isRTL ? 'font-arabic' : ''}`}>
            {subtitle || t('intro.pricing.subtitle')}
          </p>

          {showToggles && (
            <>
              {/* Billing Toggle */}
              <div className={`flex flex-wrap items-center justify-center mb-4 sm:mb-6 gap-2 sm:gap-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'} ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'شهرياً' : 'Monthly'}
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                    isAnnual ? 'bg-black' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isAnnual ? (isRTL ? '-translate-x-6' : 'translate-x-6') : (isRTL ? '-translate-x-1' : 'translate-x-1')
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'} ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'سنوياً' : 'Annual'}
                </span>
                <span className={`bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'وفر ٢٠٪' : 'Save 20%'}
                </span>
              </div>

              {/* Currency Toggle */}
              <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                <span className={`text-sm font-medium text-gray-700 ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'العملة:' : 'Currency:'}
                </span>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 ${
                      currency === 'USD'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    } ${isRTL ? 'font-arabic' : ''}`}
                  >
                    {isRTL ? 'دولار ($)' : 'USD ($)'}
                  </button>
                  <button
                    onClick={() => setCurrency('EGP')}
                    className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 ${
                      currency === 'EGP'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    } ${isRTL ? 'font-arabic' : ''}`}
                  >
                    {isRTL ? 'جنيه (ج.م)' : 'EGP (ج.م)'}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl h-full flex flex-col ${
                plan.popular 
                  ? 'border-black ring-2 ring-black ring-opacity-20' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`bg-black text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}>
                    {t('intro.pricing.popular')}
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8 lg:p-10 flex flex-col h-full">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(plan.nameKey)}
                  </h3>
                  <p className={`text-sm sm:text-base text-gray-600 mb-4 h-10 sm:h-12 flex items-center justify-center ${isRTL ? 'font-arabic' : ''}`}>
                    {t(plan.descKey)}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6 h-20 sm:h-24 flex flex-col justify-center">
                    <div className={`text-3xl sm:text-4xl font-bold text-gray-900 ${isRTL ? 'font-arabic' : ''}`}>
                      <AnimatedPrice plan={plan} index={index} />
                    </div>
                    {plan.nameKey !== 'intro.pricing.free.name' && (
                      <div className={`text-xs sm:text-sm text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL 
                          ? (isAnnual ? 'سنوياً' : 'شهرياً')
                          : (isAnnual ? 'per year' : 'per month')
                        }
                      </div>
                    )}
                    {isAnnual && plan.price.monthly > plan.price.annual && plan.nameKey !== 'intro.pricing.free.name' && (
                      <div className={`text-xs sm:text-sm text-green-600 font-medium ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL ? 'وفر' : 'Save'} {formatPrice((plan.price.monthly - plan.price.annual) * 12)}/{isRTL ? 'سنة' : 'year'}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm sm:text-base ${
                    plan.popular 
                      ? 'bg-black text-white hover:bg-gray-800 focus:ring-black' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500'
                  } ${isRTL ? 'font-arabic' : ''}`}>
                    {t('intro.pricing.getStarted')}
                  </button>
                </div>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <div className="mb-4">
                    <h4 className={`font-semibold text-gray-900 mb-3 text-sm sm:text-base ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {isRTL ? 'ما يشمله:' : "What's included:"}
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {tArray(plan.featuresKey).map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                          <svg className={`w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0 ${isRTL ? 'ml-2 sm:ml-3' : 'mr-2 sm:mr-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`text-xs sm:text-sm text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
