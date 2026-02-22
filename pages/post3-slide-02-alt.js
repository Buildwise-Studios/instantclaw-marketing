import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post3Slide02Unlocked = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight text-[#1D1C1D] mb-2">
          Open Door for Hackers
        </h1>
        <p className="text-xl text-[#616061]">Exposed ports = Easy entry</p>
      </div>

      {/* Main Visual - Unlocked Door */}
      <div className="relative mb-8">
        {/* Door frame */}
        <div className="w-48 h-64 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-3xl relative overflow-hidden shadow-2xl">
          {/* Open door */}
          <div className="absolute right-0 top-0 bottom-0 w-4/5 bg-gradient-to-r from-gray-600 to-gray-800 transform origin-right rotate-12 border-l-4 border-gray-500">
            {/* Door handle */}
            <div className="absolute left-4 top-1/2 w-3 h-3 bg-yellow-500 rounded-full"></div>
          </div>
          
          {/* Dark void behind door */}
          <div className="absolute left-0 top-0 bottom-0 w-3/5 bg-black flex items-center justify-center">
            {/* Threat icons */}
            <div className="text-center space-y-2">
              <div className="text-4xl">👤</div>
              <div className="text-red-500 text-sm font-bold">ATTACKER</div>
            </div>
          </div>
        </div>

        {/* Lock icon - unlocked */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {/* Key Message */}
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl px-8 py-4 text-center mb-8">
        <p className="text-2xl text-red-500 font-bold">
          Self-hosting = You're the target
        </p>
      </div>

      {/* Problem List */}
      <div className="flex flex-wrap justify-center gap-4 max-w-[600px]">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-red-200">
          <span className="text-red-500">•</span>
          <span className="text-[#1D1C1D] font-medium">Open ports</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-red-200">
          <span className="text-red-500">•</span>
          <span className="text-[#1D1C1D] font-medium">Public IP</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-red-200">
          <span className="text-red-500">•</span>
          <span className="text-[#1D1C1D] font-medium">No protection</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-red-200">
          <span className="text-red-500">•</span>
          <span className="text-[#1D1C1D] font-medium">Vulnerable</span>
        </div>
      </div>

      {/* Swipe indicator */}
      <div className="mt-10 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for reason #2</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post3Slide02Unlocked;
