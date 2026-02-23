import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Slide 3: Deploy Form - Following Slide 1 patterns
const Slide03Revamped = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-6 font-sans antialiased relative`}>
      
      {/* TOP SECTION: Title and Subheadline - centered in top area */}
      <div className="h-[160px] flex flex-col justify-center">
        <h1 className="font-sans text-5xl font-black tracking-tight text-[#1D1C1D]">
          Deploy in
        </h1>
        <h2 className="font-sans text-6xl font-black tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
          Seconds
        </h2>
        <p className="text-xl text-[#616061] mt-2">
          Choose your platform, paste your token, done.
        </p>
      </div>

      {/* MIDDLE: Form - vertically centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-xl p-6 w-[85%] border-2 border-[#D4A574]/30" style={{ boxShadow: '0 20px 50px -10px rgba(197, 49, 49, 0.12)' }}>
          
          {/* Platform Selection */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-[#1D1C1D] mb-3 uppercase tracking-wide">
              Choose Platform
            </label>
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-3 py-4 px-5 rounded-xl border-2 border-[#D4A574] bg-[#D4A574]/10 text-[#1D1C1D] font-bold text-lg">
                <img src="/telegram.svg" alt="Telegram" className="w-6 h-6" />
                Telegram
              </button>
              <button className="flex-1 flex items-center justify-center gap-3 py-4 px-5 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-lg">
                <img src="/slack.svg" alt="Slack" className="w-6 h-6" />
                Slack
              </button>
            </div>
          </div>

          {/* Bot Token Input */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-[#1D1C1D] mb-3 uppercase tracking-wide">
              Bot Token
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="123456789:ABCdefGHIjklMNOpqrSTUvwxyz"
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 text-[#1D1C1D] placeholder-gray-400 font-mono text-sm focus:border-[#D4A574] focus:outline-none"
                readOnly
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Your token is encrypted and secure
            </p>
          </div>

          {/* Deploy Button - ShimmerButton Style */}
          <button className="w-full py-4 rounded-full bg-[#D4A574] text-[#1D1C1D] font-black text-xl shadow-lg relative overflow-hidden" style={{ boxShadow: 'inset 0 -8px 10px #ffffff1f, 0 8px 20px rgba(212, 165, 116, 0.4)' }}>
            <span className="relative z-10">Deploy Your Agent</span>
          </button>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-[#616061]">
            <span className="flex items-center gap-1 font-medium">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Secure
            </span>
            <span className="flex items-center gap-1 font-medium">
              <svg className="w-4 h-4 text-[#D4A574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Instant
            </span>
            <span className="flex items-center gap-1 font-medium">
              <svg className="w-4 h-4 text-[#c53131]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Verified
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Left: Platform Logos - Same as Slide 1 */}
      <div className="absolute bottom-16 left-6">
        <p className="text-base text-[#616061] font-bold mb-4 uppercase tracking-wider">
          Works with
        </p>
        <div className="flex items-center gap-5">
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-[#D4A574]/30">
            <img src="/telegram.svg" alt="Telegram" className="w-16 h-16" />
          </div>
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-[#D4A574]/30">
            <img src="/slack.svg" alt="Slack" className="w-16 h-16" />
          </div>
        </div>
      </div>

      {/* Bottom Right: Powered by OpenClaw - Same as Slide 1 (NO LOGO) */}
      <div className="absolute bottom-20 right-6 text-right">
        <p className="text-xl text-[#616061] font-bold">
          Powered by
        </p>
        <p className="text-5xl font-black text-[#1D1C1D]">
          OpenClaw
        </p>
      </div>
    </div>
  );
};

export default Slide03Revamped;
