import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post8Slide01Cover = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center max-w-[900px] mb-8">
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1C1D] mb-4">
          Book Your Next Trip
        </h1>
        <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
          Through Text
        </h2>
      </div>

      {/* Subtitle */}
      <p className="text-xl text-[#616061] text-center max-w-[600px] mb-12">
        Your personal travel agent, available 24/7
      </p>

      {/* Travel Icon */}
      <div className="mb-10">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#D4A574] to-[#c53131] flex items-center justify-center shadow-2xl">
          <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>

      {/* Preview dots for carousel */}
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#1D1C1D]"></div>
        <div className="w-3 h-3 rounded-full bg-[#D4A574]"></div>
        <div className="w-3 h-3 rounded-full bg-[#D4A574]"></div>
        <div className="w-3 h-3 rounded-full bg-[#D4A574]"></div>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe to see how</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post8Slide01Cover;
