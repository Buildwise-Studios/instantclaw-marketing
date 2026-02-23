import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

const Slide05CTA = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Main Content */}
      <div className="text-center max-w-[800px]">
        {/* Headline */}
        <h1 className="font-sans text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-6">
          Ready for Your<br/>AI Assistant?
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-[#616061] font-medium mb-10">
          Deploy in 60 seconds. No setup required.
        </p>

        {/* CTA Button - Shimmer Style */}
        <div className="mb-8">
          <button 
            className="group relative px-12 py-4 rounded-full overflow-hidden border border-white/20 text-[#1D1C1D] font-bold text-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
            style={{ background: '#D4A574' }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -z-10 blur-[2px] overflow-visible">
              <div className="absolute inset-0 h-full animate-[shimmer_3s_infinite]">
                <div className="absolute -inset-full w-auto h-full animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_225deg,transparent_0,#1A1A1A_90deg,transparent_90deg)] opacity-20" />
              </div>
            </div>
            
            {/* Highlight */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_-8px_10px_#ffffff1f] group-hover:shadow-[inset_0_-6px_10px_#ffffff2a] transition-all duration-300" />
            
            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              Deploy Now
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* URL */}
        <p className="text-lg text-[#616061] font-medium">
          instantclaw.com
        </p>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-10 flex items-center gap-3">
        <img 
          src="/instantclaw-logo.png" 
          alt="InstantClaw" 
          className="h-10 w-auto"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span className="text-2xl font-bold text-[#1D1C1D]">InstantClaw</span>
      </div>
    </div>
  );
};

export default Slide05CTA;
