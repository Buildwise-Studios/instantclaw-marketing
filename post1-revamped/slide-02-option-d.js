import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Slide 2 Option D: Minimal List
const Slide02ComparisonOptionD = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          Self-Hosting vs InstantClaw
        </h1>
        <p className="text-xl text-[#616061]">The difference is clear</p>
      </div>

      {/* Minimal List Comparison */}
      <div className="flex-1 flex flex-col justify-center max-w-[500px] mx-auto w-full">
        {/* Mac Mini Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.08-3.11-1.05.05-2.31.72-3.06 1.64-.68.84-1.27 2.18-1.11 3.23 1.18.09 2.38-.71 3.09-1.76"/>
            </svg>
            <h2 className="text-2xl font-bold text-gray-500">Mac Mini Self-Hosting</h2>
          </div>
          
          <div className="space-y-3 pl-11">
            <div className="flex items-center gap-3 text-gray-500">
              <span className="text-red-400 text-xl">•</span>
              <span className="text-lg">$699 hardware</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <span className="text-red-400 text-xl">•</span>
              <span className="text-lg">5 days setup</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <span className="text-red-400 text-xl">•</span>
              <span className="text-lg">Manual updates</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <span className="text-red-400 text-xl">•</span>
              <span className="text-lg">You manage everything</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-2xl font-bold text-[#D4A574]">VS</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* InstantClaw Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/instantclaw-logo.png" 
              alt="InstantClaw" 
              className="h-8 w-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <h2 className="text-2xl font-bold text-[#1D1C1D]">InstantClaw</h2>
          </div>
          
          <div className="space-y-3 pl-11">
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg font-medium">No hardware</span>
            </div>
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg font-medium">&lt; 1 minute deploy</span>
            </div>
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg font-medium">Auto updates</span>
            </div>
            <div className="flex items-center gap-3 text-[#1D1C1D]">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg font-medium">We handle it all</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Message */}
      <div className="text-center mt-8">
        <p className="text-xl font-bold text-[#1D1C1D]">
          Why configure servers when you could be building?
        </p>
      </div>
    </div>
  );
};

export default Slide02ComparisonOptionD;
