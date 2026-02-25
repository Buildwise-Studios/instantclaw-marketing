import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import { Cloud } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Teaser Post 3: Solution Countdown - 1 Day to Go
const TeaserPost3 = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased relative overflow-hidden`}>
      
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

      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        
        {/* Large "1" */}
        <div className="text-center">
          <span className="font-sans text-[200px] font-black leading-none bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
            1
          </span>
        </div>

        {/* Subtitle */}
        <div className="text-center -mt-8">
          <p className="font-sans text-4xl font-black text-[#1D1C1D] uppercase tracking-wide">
            DAY TO GO
          </p>
          <p className="font-sans text-3xl font-bold text-[#616061] mt-2">
            AI agents for everyone
          </p>
        </div>

        {/* Value props */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-xl text-[#1D1C1D] font-medium">
            Deploy in <span className="font-bold text-[#c53131]">&lt;60 seconds</span>
          </p>
          <p className="text-lg text-[#616061]">
            No Mac Minis • No VPS • No hardware costs
          </p>
        </div>
      </div>

      {/* Bottom: Set your reminder CTA - Safe zone (200px from bottom) */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 text-center w-full px-8"
        style={{ bottom: '200px' }}
      >
        <p className="text-2xl font-black text-[#1D1C1D] mb-2">
          Set your reminder!
        </p>
        <p className="text-lg text-[#616061] font-medium">
          The future starts tomorrow
        </p>
      </div>

      {/* Very bottom: Powered by OpenClaw */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 text-center"
        style={{ bottom: '60px' }}
      >
        <p className="text-sm text-[#616061] font-bold">Powered by</p>
        <p className="text-2xl font-black text-[#1D1C1D]">OpenClaw</p>
      </div>
    </div>
  );
};

export default TeaserPost3;
