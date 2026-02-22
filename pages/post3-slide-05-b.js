import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post3Slide05SolutionB = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          Meet InstantClaw
        </h1>
        <p className="text-xl text-[#616061]">Your AI assistant, without the headaches</p>
      </div>

      {/* Logo/Icon */}
      <div className="mb-8">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#D4A574] to-[#c53131] flex items-center justify-center shadow-2xl">
          <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>

      {/* 3 Value Props */}
      <div className="max-w-[500px] w-full space-y-4 mb-8">
        <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-[#1D1C1D] text-lg">Secure by Default</h3>
            <p className="text-[#616061] text-sm">No exposed ports, no vulnerabilities</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shrink-0 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-[#1D1C1D] text-lg">Always Updated</h3>
            <p className="text-[#616061] text-sm">We handle updates, you stay current</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4">
          <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shrink-0 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-[#1D1C1D] text-lg">Zero Maintenance</h3>
            <p className="text-[#616061] text-sm">Set it up in &lt;1 minute, forget about it</p>
          </div>
        </div>
      </div>

      {/* CTA Hint */}
      <div className="text-center">
        <p className="text-lg text-[#616061]">
          Swipe to see how easy it is →
        </p>
      </div>
    </div>
  );
};

export default Post3Slide05SolutionB;
