import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Slide 3 Enhanced: Clean Form with App Button Style
const Slide03Enhanced = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
          Connect in Seconds
        </h1>
        <p className="text-xl text-[#616061] mt-3">
          Choose your platform, deploy instantly
        </p>
      </div>

      {/* Form Card - with subtle reddish shadow */}
      <div className="bg-white rounded-2xl p-8 w-full max-w-[480px]" style={{ boxShadow: '0 20px 50px -12px rgba(197, 49, 49, 0.15)' }}>
        {/* Platform Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#1D1C1D] mb-3 uppercase tracking-wide">
            Choose Platform
          </label>
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-[#D4A574] bg-[#D4A574]/10 text-[#1D1C1D] font-medium transition-colors">
              <img src="/telegram.svg" alt="Telegram" className="w-5 h-5" />
              Telegram
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-colors">
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
              placeholder="Paste your bot token here"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-[#1D1C1D] placeholder-gray-400 focus:border-[#D4A574] focus:outline-none transition-colors"
              readOnly
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">Your token is encrypted and never stored</p>
        </div>

        {/* Deploy Button - Shimmer Style */}
        <button 
          className="group relative w-full py-4 rounded-full overflow-hidden border border-white/20 text-[#1D1C1D] font-bold text-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
          style={{ background: '#D4A574' }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -z-10 blur-[2px] overflow-visible">
            <div className="absolute inset-0 h-full animate-[shimmer_3s_infinite]">
              <div className="absolute -inset-full w-auto h-full animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_225deg,transparent_0,#1A1A1A_90deg,transparent_90deg)] opacity-20" />
            </div>
          </div>
          
          {/* Highlight */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_-8px_10px_#ffffff1f] group-hover:shadow-[inset_0_-6px_10px_#ffffff2a] transition-all duration-300" />
          
          {/* Content */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            Deploy Now
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </div>

      {/* Simple Tagline */}
      <div className="mt-6 flex items-center gap-2 text-[#616061]">
        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-sm">Deploy in under 1 minute</span>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for use cases</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Slide03Enhanced;
