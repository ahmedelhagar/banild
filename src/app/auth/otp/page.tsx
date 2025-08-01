'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OTPPage() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timeLeft, setTimeLeft] = useState(60);
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    
    // Timer countdown
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setCanResend(true);
        }
    }, [timeLeft]);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return; // Only allow single digit
        
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        const newOtp = [...otp];
        
        for (let i = 0; i < pastedData.length && i < 6; i++) {
            if (/^\d$/.test(pastedData[i])) {
                newOtp[i] = pastedData[i];
            }
        }
        
        setOtp(newOtp);
        
        // Focus last filled input or next empty one
        const lastFilledIndex = newOtp.findLastIndex(digit => digit !== '');
        const nextEmptyIndex = newOtp.findIndex(digit => digit === '');
        const focusIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : Math.min(lastFilledIndex + 1, 5);
        inputRefs.current[focusIndex]?.focus();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const otpCode = otp.join('');
        if (otpCode.length === 6) {
            // TODO: Implement OTP verification logic
            console.log('OTP submitted:', otpCode);
        }
    };

    const handleResend = () => {
        if (canResend) {
            setTimeLeft(60);
            setCanResend(false);
            setOtp(['', '', '', '', '', '']);
            inputRefs.current[0]?.focus();
            // TODO: Implement resend OTP logic
            console.log('Resending OTP...');
        }
    };

    const otpComplete = otp.every(digit => digit !== '');

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
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
                        Verify Your Email
                    </h1>
                    <p className="text-gray-600 mb-2">
                        We&apos;ve sent a 6-digit code to
                    </p>
                    <p className="text-gray-900 font-medium">
                        your***@email.com
                    </p>
                </div>

                {/* OTP Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* OTP Input Fields */}
                    <div className="flex justify-center space-x-3">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => { inputRefs.current[index] = el; }}
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                                className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                                autoComplete="off"
                            />
                        ))}
                    </div>

                    {/* Timer and Resend */}
                    <div className="text-center">
                        {!canResend ? (
                            <p className="text-sm text-gray-600">
                                Resend code in <span className="font-medium text-black">{timeLeft}s</span>
                            </p>
                        ) : (
                            <button
                                type="button"
                                onClick={handleResend}
                                className="text-sm text-black hover:text-gray-800 font-medium cursor-pointer underline"
                            >
                                Resend Code
                            </button>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={!otpComplete}
                        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                            otpComplete
                                ? 'bg-black text-white hover:bg-gray-800 focus:outline-none cursor-pointer focus:ring-black focus:ring-offset-2'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        Verify Code
                    </button>
                </form>

                {/* Help Text */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Didn&apos;t receive the code?{' '}
                        <Link href="/contact" className="text-black hover:text-gray-800 font-medium">
                            Contact Support
                        </Link>
                    </p>
                </div>

                {/* Security Note */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start">
                        <svg className="w-4 h-4 text-gray-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs text-gray-600">
                            For your security, this code will expire in 10 minutes. Never share your verification code with anyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 