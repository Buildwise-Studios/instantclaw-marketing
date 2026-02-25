import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import { Cloud } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Teaser Post 3 Alternative: Minimal Countdown
const TeaserPost3Alt = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased relative overflow-hidden`}>
      
      {/* Background dot pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #1D1C1D 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Cloud imagery background - subtle */}
      <div className="absolute top-20 right-10 opacity-10">
        <Cloud className="w-64 h-64 text-[#D4A574]" />
      </div>
      <div className="absolute bottom-40 left-10 opacity-10">
        <Cloud className="w-48 h-48 text-[#D4A574]" />
      </div>

      {/* Main Content - Centered, Minimal */}
      <div className="flex flex-col items-center justify-center relative z-10">
        
        {/* Large "1" */}
        <div className="text-center">
          <span className="font-sans text-[280px] font-black leading-none bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
            1
          </span>
        </div>

        {/* Subtitle - with breathing room */}
        <div className="text-center mt-4">
          <p className="font-sans text-7xl font-black text-[#1D1C1D] uppercase tracking-wide">
            DAY TO GO
          </p>
          <p className="font-sans text-6xl font-bold text-[#616061] mt-4">
            AI agents for everyone
          </p>
        </div>
      </div>

      {/* Only attribution at bottom - safe zone */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 text-center"
        style={{ bottom: '200px' }}
      >
        <p className="text-2xl text-[#616061] font-bold mb-1">Powered by</p>
        <p className="text-5xl font-black text-[#1D1C1D]">OpenClaw</p>
      </div>
    </div>
  );
};

export default TeaserPost3Alt;
