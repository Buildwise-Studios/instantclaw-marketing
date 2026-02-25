import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import { Cloud, ArrowRight, Server } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Teaser Post 2: Hardware vs Cloud
const TeaserPost2 = () => {
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

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        
        {/* Split Screen Design */}
        <div className="flex items-center justify-center gap-4 mb-12">
          
          {/* LEFT: Mac Mini - SOLD OUT */}
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Mac Mini Icon */}
              <div className="w-40 h-40 bg-[#1D1C1D] rounded-2xl flex items-center justify-center shadow-2xl">
                <Server className="w-20 h-20 text-white" />
              </div>
              {/* SOLD OUT Sticker - 2x BIGGER */}
              <div className="absolute -top-4 -right-4 bg-[#c53131] text-white px-4 py-2 rounded-full text-2xl font-black transform rotate-12 shadow-lg">
                SOLD OUT
              </div>
            </div>
            <p className="mt-6 text-4xl font-bold text-[#1D1C1D]">Mac Mini</p>
          </div>

          {/* CENTER: Arrow - BIGGER */}
          <div className="flex flex-col items-center mx-6">
            <ArrowRight className="w-24 h-24 text-[#c53131]" />
          </div>

          {/* RIGHT: Cloud */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-[#D4A574] rounded-2xl flex items-center justify-center shadow-2xl">
              <Cloud className="w-20 h-20 text-white" />
            </div>
            <p className="mt-6 text-4xl font-bold text-[#1D1C1D]">CLOUD</p>
          </div>
        </div>

        {/* Text Overlay: No hardware needed */}
        <div className="text-center">
          <h1 className="font-sans text-6xl font-black tracking-tight text-[#1D1C1D]">
            No hardware
          </h1>
          <h2 className="font-sans text-7xl font-black tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
            needed
          </h2>
        </div>
      </div>

      {/* Bottom: Powered by OpenClaw - Safe zone (200px from bottom) - 2x BIGGER */}
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

export default TeaserPost2;
