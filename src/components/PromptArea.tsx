'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/useLanguage';

interface PromptAreaProps {
  onSendMessage?: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export default function PromptArea({
  onSendMessage,
  isLoading = false,
  placeholder
}: PromptAreaProps) {
  const [message, setMessage] = useState('');
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [fullText, setFullText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { t, isRTL } = useLanguage();

  // Convert English numbers to Arabic numerals
  const toArabicNumerals = (num: number | string) => {
    if (!isRTL) return num.toString();

    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().replace(/[0-9]/g, (digit) => arabicNumerals[parseInt(digit)]);
  };

  // Select random heading on component mount and language change
  useEffect(() => {
    const headings = t('home.headings');
    if (Array.isArray(headings)) {
      const randomIndex = Math.floor(Math.random() * headings.length);
      setFullText(headings[randomIndex]);
      // Reset typewriter state when language changes
      setTypedText('');
      setIsTyping(true);
    }
  }, [t, isRTL]); // Added isRTL dependency to trigger on language change

  // Typewriter effect
  useEffect(() => {
    if (fullText && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100); // Adjust speed here (lower = faster)
      return () => clearTimeout(timeout);
    } else if (fullText && typedText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [typedText, fullText]);

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage?.(message.trim());
      setMessage('');
      adjustTextareaHeight();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const handleQuickPrompt = (prompt: string) => {
    setMessage(prompt);
    textareaRef.current?.focus();
  };

  const quickPrompts = t('home.quickPrompts') || [];

  return (
    <div className={`w-full bg-white border-t border-gray-100 min-h-screen flex items-center justify-center ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">

        {/* Welcome Section */}
        <div className="pt-8 sm:pt-12 text-center">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight px-4 min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[3rem] ${isRTL ? 'font-arabic' : ''}`}>
            {typedText}
            {isTyping && (
              <span className="animate-pulse text-gray-400">|</span>
            )}
          </h1>
          <p className={`text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('home.subtitle')}
          </p>
        </div>

        {/* Main Input Area */}
        <div className="py-6 sm:py-8">
          <div className="relative">
            {/* Textarea */}
            <div className="relative border-2 border-gray-200 rounded-lg sm:rounded-xl focus-within:border-gray-400 transition-colors duration-200">
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholder || t('home.placeholder')}
                disabled={isLoading}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 ${isRTL ? 'pl-12 sm:pl-16 pr-4 sm:pr-6' : 'pr-12 sm:pr-16'} text-gray-900 placeholder-gray-500 bg-transparent border-none outline-none resize-none font-medium text-sm sm:text-base leading-relaxed min-h-[50px] sm:min-h-[60px] max-h-[100px] sm:max-h-[120px] ${isRTL ? 'text-right font-arabic' : 'text-left'}`}
                style={{
                  fontFamily: isRTL ? 'Cairo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}
              />

              {/* Send Button */}
              <button
                onClick={handleSend}
                disabled={!message.trim() || isLoading}
                className={`absolute ${isRTL ? 'left-2 sm:left-3' : 'right-2 sm:right-3'} bottom-2 sm:bottom-3 p-2 sm:p-3 bg-gray-900 text-white rounded-md sm:rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95`}
                style={{
                  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                {isLoading ? (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Character Counter */}
            <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 px-2 space-y-2 sm:space-y-0 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <div className={`flex items-center ${isRTL ? 'justify-center sm:justify-end' : 'justify-center sm:justify-start'} space-x-4 text-xs sm:text-sm text-gray-500`}>
                <span className="flex items-center space-x-1">
                  <span className={`text-black text-xs ${isRTL ? 'font-arabic' : ''}`}>
                    Powered by Banild AI
                  </span>
                </span>
              </div>
              <span className={`text-xs sm:text-sm text-gray-400 ${isRTL ? 'text-center sm:text-left font-arabic' : 'text-center sm:text-right'}`}>
                {toArabicNumerals(message.length)}{isRTL ? '/٢٠٠٠' : '/2000'}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Prompts */}
        <div className="py-6">
          <h3 className={`text-xs sm:text-sm font-semibold text-gray-700 text-center mb-4 uppercase tracking-wide ${isRTL ? 'font-arabic' : ''}`}>
            {t('home.quickPromptsTitle')}
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {quickPrompts.map((prompt: string, index: number) => (
              <button
                key={index}
                onClick={() => handleQuickPrompt(prompt)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200 font-medium break-words max-w-full sm:max-w-none ${isRTL ? 'font-arabic' : ''}`}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
