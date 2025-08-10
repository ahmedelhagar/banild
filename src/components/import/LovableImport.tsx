'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useDarkMode } from '@/lib/useDarkMode';
import { useLanguage } from '@/lib/useLanguage';
import { Heart, ChevronLeft, Github, ArrowLeftRight } from 'lucide-react';
import { Logo } from '@/ui/logo';

export default function LovableImport() {
  const { isDarkMode } = useDarkMode();
  const { isRTL } = useLanguage();
  const [repoUrl, setRepoUrl] = useState('');
  // privacy removed per request

  return (
    <div className={cn('w-full max-w-4xl mx-auto px-6 py-10')}>
      <div className="mb-4">
        <Link
          href="/app/import"
          className={cn(
            'inline-flex items-center gap-2 border-1 rounded-lg px-3 py-1.5 text-sm transition-colors',
            isDarkMode ? 'text-darkmode-primarytxt hover:bg-darkmode-primary' : 'text-lightmode-primarytxt border border-lightmode-secondary hover:bg-lightmode-primary'
          )}
        >
          <ChevronLeft className="w-4 h-4" /> {isRTL ? 'رجوع إلى الاستيراد' : 'Back to Import'}
        </Link>
      </div>

      <div className={cn('flex items-center gap-3 mb-6')}>
        <div className={cn('w-10 h-10 rounded-md flex items-center justify-center', isDarkMode ? 'bg-darkmode-tertiary' : 'bg-lightmode-secondary')}>
          <Heart className={cn('w-5 h-5', isDarkMode ? 'text-darkmode-primarytxt' : 'text-lightmode-primarytxt')} />
        </div>
        <h1 className={cn('text-2xl font-bold', isDarkMode ? 'text-darkmode-primarytxt' : 'text-lightmode-primarytxt')}>
          {isRTL ? 'الاستيراد من Lovable' : 'Import from Lovable'}
        </h1>
      </div>

      <p className={cn('mt-2 mb-6', isDarkMode ? 'text-darkmode-secondarytxt' : 'text-lightmode-secondarytxt')}>
        {isRTL ? 'انقل موقعك من Lovable ليصبح جاهزًا للإنتاج في Banild' : 'Migrate your Lovable site to make it production‑ready in Banild'}
      </p>

      <div className={cn('rounded-2xl border', isDarkMode ? 'bg-darkmode-secondary border-darkmode-primary' : 'bg-lightmode-primary border-lightmode-primary')}>
        <div className="p-5 md:p-6">
          <label className={cn('text-sm font-medium', isDarkMode ? 'text-darkmode-primarytxt' : 'text-lightmode-primarytxt')}>
            {isRTL ? 'رابط مستودع GitHub' : 'GitHub Repo URL'}
          </label>
          <input
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            type="text"
            placeholder="https://github.com/username/repo"
            className={cn(
              'mt-2 w-full rounded-lg px-3 py-2 outline-none',
              isDarkMode
                ? 'bg-darkmode-tertiary text-darkmode-primarytxt placeholder:text-darkmode-secondarytxt'
                : 'bg-lightmode-secondary text-lightmode-primarytxt placeholder:text-lightmode-secondarytxt'
            )}
          />

          {/* Import action under input */}
          <div className="mt-3 flex justify-end">
            <button
              disabled={!repoUrl}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-5 py-2 font-semibold cursor-pointer',
                repoUrl ? (isDarkMode
                  ? 'bg-darkmode-primarytxt text-darkmode-primary hover:bg-darkmode-secondarytxt'
                  : 'bg-black text-lightmode-primary hover:bg-lightmode-primarytxt') : 'opacity-60 cursor-not-allowed'
              )}
            >
              {isRTL ? 'الاستيراد من GitHub' : 'Import from GitHub'}
            </button>
          </div>

          <div className={cn('my-5 h-px', isDarkMode ? 'bg-darkmode-primary' : 'bg-lightmode-primary')} />

          <div className={cn('text-sm mb-3', isDarkMode ? 'text-darkmode-secondarytxt' : 'text-lightmode-secondarytxt')}>
            {isRTL ? 'أو اختر مستودعًا من حسابك' : 'Or select a repo from your account'}
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Logo variant={isDarkMode ? 'dark' : 'light'} />
            <div className={cn('w-10 h-10 rounded-md flex items-center justify-center', isDarkMode ? 'bg-darkmode-tertiary' : 'bg-lightmode-secondary')}>
              <ArrowLeftRight className={cn('w-5 h-5', isDarkMode ? 'text-darkmode-secondarytxt' : 'text-lightmode-secondarytxt')} />
            </div>
            <Github className={cn('w-6 h-6', isDarkMode ? 'text-darkmode-primarytxt' : 'text-lightmode-primarytxt')} />
          </div>

          <div className="text-center">
            <h3 className={cn('text-lg font-semibold', isDarkMode ? 'text-darkmode-primarytxt' : 'text-lightmode-primarytxt')}>
              {isRTL ? 'اتصال GitHub' : 'Connect to GitHub'}
            </h3>
            <p className={cn('mt-1 mb-3 text-sm', isDarkMode ? 'text-darkmode-secondarytxt' : 'text-lightmode-secondarytxt')}>
              {isRTL ? 'ابدأ بتسجيل الدخول باستخدام حساب GitHub' : 'Get started by logging in with your GitHub account'}
            </p>
            <button
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold',
                isDarkMode
                  ? 'bg-darkmode-primarytxt text-darkmode-primary hover:bg-darkmode-secondarytxt'
                  : 'bg-black text-lightmode-primary hover:bg-lightmode-primarytxt'
              )}
            >
              {isRTL ? 'اتصل بحساب GitHub' : 'Connect your GitHub account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


