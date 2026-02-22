import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post3Slide05SolutionC = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          What If It Just...
        </h1>
        <h2 className="font-sans text-6xl md:text-7xl font-bold text-green-500">
          Worked?
        </h2>
      </div>

      {/* The Flip Visual */}
      <div className="flex flex-col md:flex-row items-center gap-6 max-w-[700px] w-full mb-8">
        {/* Left - Problems (Faded) */}
        <div className="flex-1 opacity-40 grayscale">
          <div className="bg-white/50 rounded-2xl p-5 border-2 border-gray-300">
            <h3 className="text-center font-bold text-gray-500 mb-4 text-lg">❌ Self-Hosted</h3>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>Exposed & Vulnerable</span>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>Broken Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>DevOps Nightmare</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4A574] to-[#c53131] flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>

        {/* Right - Solution (Vibrant) */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl p-5 border-2 border-green-400 shadow-xl">
            <h3 className="text-center font-bold text-green-600 mb-4 text-lg">✓ InstantClaw</h3>
            <div className="space-y-2 text-sm text-[#1D1C1D]">
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Secure & Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Always Updated</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Zero Hassle</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="text-center max-w-[500px]">
        <p className="text-2xl text-[#1D1C1D] font-medium">
          No servers. No stress. No surprises.
        </p>
        <p className="text-lg text-[#616061] mt-2">
          Just your AI assistant, working 24/7.
        </p>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe to get started →</span>
      </div>
    </div>
  );
};

export default Post3Slide05SolutionC;
