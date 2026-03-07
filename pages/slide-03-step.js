import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Slide 3 Option A: Minimal Step-by-Step
const Slide03StepByStep = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
          Connect in Seconds
        </h1>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-3 mb-8">
        {/* Step 1 - Completed */}
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="w-8 h-0.5 bg-green-500"></div>
        
        {/* Step 2 - Active */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4A574] to-[#c53131] flex items-center justify-center text-white font-bold">
          2
        </div>
        <div className="w-8 h-0.5 bg-gray-300"></div>
        
        {/* Step 3 - Pending */}
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
          3
        </div>
      </div>

      {/* Step Label */}
      <p className="text-sm text-[#616061] mb-6">Step 2 of 3</p>

      {/* Active Step Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-[450px]">
        {/* Step Title */}
        <h2 className="text-2xl font-bold text-[#1D1C1D] mb-6">
          Enter Bot Token
        </h2>

        {/* Previous Step (Completed) */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Platform</p>
          <div className="flex items-center gap-2 text-[#1D1C1D]">
            <img src="/telegram.svg" alt="Telegram" className="w-5 h-5" />
            <span className="font-medium">Telegram</span>
            <svg className="w-4 h-4 text-green-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Active Input */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#1D1C1D] mb-3">
            Bot Token
          </label>
          <div className="relative">
            <input 
              type="text" 
              value="123456789:ABCdefGHIjklMNOpqrSTUvwxyz"
              className="w-full px-4 py-3 rounded-xl border-2 border-[#D4A574] bg-[#D4A574]/5 text-[#1D1C1D] font-mono text-sm"
              readOnly
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">Token encrypted & secure</p>
        </div>

        {/* Next Button */}
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4A574] to-[#c53131] text-white font-bold shadow-lg flex items-center justify-center gap-2">
          Next Step
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Completion Preview */}
      <div className="mt-6 flex items-center gap-2 text-gray-400">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <span className="text-sm">Deploy Agent</span>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe to see more</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Slide03StepByStep;