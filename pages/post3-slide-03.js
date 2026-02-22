import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post3Slide03Maintenance = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          Every Update is a Risk
        </h1>
        <p className="text-xl text-[#616061]">Something breaks. You fix it. Repeat.</p>
      </div>

      {/* Breaking Chain Visual */}
      <div className="flex items-center gap-2 mb-8 flex-wrap justify-center">
        {/* Link 1 - Good */}
        <div className="flex items-center">
          <div className="w-16 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
            v1.0
          </div>
        </div>
        
        {/* Chain connector */}
        <div className="w-6 h-1 bg-green-500"></div>
        
        {/* Link 2 - Broken */}
        <div className="flex items-center">
          <div className="w-16 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg relative">
            v1.1
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">!</span>
            </div>
          </div>
        </div>
        
        {/* Broken connector */}
        <div className="w-6 h-1 bg-gray-400 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 text-xl">✕</div>
        </div>
        
        {/* Link 3 - Broken */}
        <div className="flex items-center">
          <div className="w-16 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg relative">
            v1.2
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">!</span>
            </div>
          </div>
        </div>
        
        {/* Broken connector */}
        <div className="w-6 h-1 bg-gray-400 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 text-xl">✕</div>
        </div>
        
        {/* Link 4 - Warning */}
        <div className="flex items-center">
          <div className="w-16 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg relative">
            v1.3
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">?</span>
            </div>
          </div>
        </div>
      </div>

      {/* Frustration Scenarios */}
      <div className="max-w-[500px] w-full space-y-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white text-lg">😤</span>
          </div>
          <span className="text-lg text-[#1D1C1D]">Waking up to broken features</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A574] to-[#c53131] flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white text-lg">😵</span>
          </div>
          <span className="text-lg text-[#1D1C1D]">Spending hours on things you don't understand</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white text-lg">🤷</span>
          </div>
          <span className="text-lg text-[#1D1C1D]">When your AI stops working... and you're stuck</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A574] to-[#c53131] flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white text-lg">😰</span>
          </div>
          <span className="text-lg text-[#1D1C1D]">The stress of "will it work today?"</span>
        </div>
      </div>

      {/* Key Message */}
      <div className="text-center max-w-[500px]">
        <p className="text-2xl text-[#1D1C1D] font-medium">
          While you sleep, your setup gets{' '}
          <span className="font-bold text-red-500">outdated</span>
        </p>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for reason #3</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post3Slide03Maintenance;
