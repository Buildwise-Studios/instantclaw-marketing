import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post3Slide02Security = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight text-[#1D1C1D] mb-2">
          Security Risk
        </h1>
        <p className="text-xl text-[#616061]">Self-hosting opens doors</p>
      </div>

      {/* Split Screen Cards */}
      <div className="flex flex-col md:flex-row gap-6 max-w-[900px] w-full">
        {/* Left - Exposed (Problem) */}
        <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-red-300 shadow-lg">
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-red-500 mb-2">Your Machine</h2>
            <p className="text-sm text-red-400 font-semibold uppercase tracking-wide">EXPOSED</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-red-400 text-xl">•</span>
              <span>Open ports to internet</span>
            </div>
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-red-400 text-xl">•</span>
              <span>No firewall protection</span>
            </div>
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-red-400 text-xl">•</span>
              <span>Public IP exposed</span>
            </div>
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-red-400 text-xl">•</span>
              <span>Vulnerable to attacks</span>
            </div>
          </div>

          {/* Attack icons */}
          <div className="mt-6 flex justify-center gap-3">
            <span className="text-2xl">🎯</span>
            <span className="text-2xl">💻</span>
            <span className="text-2xl">🔓</span>
          </div>
        </div>

        {/* VS Badge */}
        <div className="flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[#D4A574] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">VS</span>
          </div>
        </div>

        {/* Right - Protected (Solution) */}
        <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-300 shadow-lg">
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">InstantClaw</h2>
            <p className="text-sm text-green-500 font-semibold uppercase tracking-wide">PROTECTED</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-green-500 text-xl">✓</span>
              <span>Isolated containers</span>
            </div>
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-green-500 text-xl">✓</span>
              <span>Managed firewall</span>
            </div>
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-green-500 text-xl">✓</span>
              <span>Private infrastructure</span>
            </div>
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-green-500 text-xl">✓</span>
              <span>Security monitoring</span>
            </div>
          </div>

          {/* Shield icon */}
          <div className="mt-6 text-center">
            <span className="text-3xl">🛡️</span>
          </div>
        </div>
      </div>

      {/* Key Message */}
      <div className="mt-8 text-center max-w-[600px]">
        <p className="text-xl text-[#1D1C1D] font-medium">
          Exposed ports = <span className="text-red-500 font-bold">Vulnerable to attacks</span>
        </p>
      </div>

      {/* Swipe indicator */}
      <div className="mt-6 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for reason #2</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post3Slide02Security;
