import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Slide03DeployForm = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
          Connect in Seconds
        </h1>
        <p className="text-2xl text-[#616061] mt-4 font-light">
          Choose your platform, enter your token, deploy
        </p>
      </div>

      {/* Deploy Form Mockup */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 w-full max-w-[600px] border border-[#D4A574]/20">
        {/* Channel Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#1D1C1D] mb-3 uppercase tracking-wide">
            Choose Platform
          </label>
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-[#D4A574] bg-[#D4A574]/10 text-[#1D1C1D] font-medium">
              <img src="/telegram.svg" alt="Telegram" className="w-5 h-5" />
              Telegram
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-gray-200 text-gray-500 font-medium hover:border-gray-300">
              <img src="/slack.svg" alt="Slack" className="w-5 h-5" />
              Slack
            </button>
          </div>
        </div>

        {/* Bot Token Input */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#1D1C1D] mb-3 uppercase tracking-wide">
            Bot Token
          </label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="123456789:ABCdefGHIjklMNOpqrSTUvwxyz"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-[#1D1C1D] placeholder-gray-400 focus:border-[#D4A574] focus:outline-none"
              readOnly
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Your token is encrypted and secure</p>
        </div>

        {/* Deploy Button */}
        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4A574] to-[#c53131] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow">
          Deploy Agent
        </button>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Instant
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Verified
          </span>
        </div>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for more</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Slide03DeployForm;
