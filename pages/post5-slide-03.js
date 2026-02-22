import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post5Slide03Firewall = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          Step 2: Firewall Rules
        </h1>
        <p className="text-xl text-[#616061]">Open port 3000? Or was it 8080?</p>
      </div>

      {/* Firewall Rules - Direct on background */}
      <div className="max-w-[500px] w-full space-y-3 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white text-xl">✓</span>
          </div>
          <div className="flex-1">
            <p className="text-lg font-bold text-[#1D1C1D]">Port 22 (SSH)</p>
            <p className="text-sm text-[#616061]">ALLOW — You can still get in</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white text-xl">✓</span>
          </div>
          <div className="flex-1">
            <p className="text-lg font-bold text-[#1D1C1D]">Port 80 (HTTP)</p>
            <p className="text-sm text-[#616061]">ALLOW — Basic web traffic</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white text-xl">✗</span>
          </div>
          <div className="flex-1">
            <p className="text-lg font-bold text-[#1D1C1D]">Port 3000 (OpenClaw?)</p>
            <p className="text-sm text-[#616061]">DENY — Wait, you need this!</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white text-xl">?</span>
          </div>
          <div className="flex-1">
            <p className="text-lg font-bold text-[#1D1C1D]">Port 3456 (OpenClaw)</p>
            <p className="text-sm text-[#616061]">You opened 3000 instead...</p>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="text-center max-w-[500px] mb-8">
        <p className="text-2xl text-[#1D1C1D] font-medium">
          You opened port <span className="text-red-500 font-bold">3000</span>, but OpenClaw is on <span className="text-green-600 font-bold">3456</span>.
        </p>
        <p className="text-lg text-[#616061] mt-3">
          Your AI agent can't connect. And you have no idea why.
        </p>
      </div>

      {/* Swipe indicator */}
      <div className="flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for Docker nightmares →</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post5Slide03Firewall;
