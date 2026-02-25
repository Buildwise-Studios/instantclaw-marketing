import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

const Slide05 = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-6 font-sans antialiased relative`}>
      {/* Top: InstantClaw Logo */}
      <div className="flex items-center gap-4 mb-4">
        <img 
          src="/instantclaw-logo.png" 
          alt="InstantClaw" 
          className="h-28 w-28"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span className="text-4xl font-bold tracking-tight text-[#1D1C1D]">InstantClaw</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-[800px]">
          <h1 className="font-sans text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-6">
            Ready for Your<br/>AI Assistant?
          </h1>

          <p className="text-2xl md:text-3xl text-[#616061] font-medium mb-10">
            Deploy in 60 seconds. No setup required.
          </p>

          <div className="mb-8">
            <button 
              className="group relative px-12 py-4 rounded-full overflow-hidden border border-white/20 text-[#1D1C1D] font-bold text-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
              style={{ background: '#D4A574' }}
            >
              <div className="absolute inset-0 -z-10 blur-[2px] overflow-visible">
                <div className="absolute inset-0 h-full animate-[shimmer_3s_infinite]">
                  <div className="absolute -inset-full w-auto h-full animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_225deg,transparent_0,#1A1A1A_90deg,transparent_90deg)] opacity-20" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full shadow-[inset_0_-8px_10px_#ffffff1f] group-hover:shadow-[inset_0_-6px_10px_#ffffff2a] transition-all duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Deploy Now
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

          <p className="text-lg text-[#616061] font-medium">
            instantclaw.com
          </p>
        </div>
      </div>

      {/* Bottom Left: Platform Logos */}
      <div className="absolute bottom-16 left-6">
        <p className="text-base text-[#616061] font-bold mb-4 uppercase tracking-wider">
          Works with
        </p>
        <div className="flex items-center gap-5">
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-[#D4A574]/30">
            <img src="/telegram.svg" alt="Telegram" className="w-16 h-16" />
          </div>
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-[#D4A574]/30">
            <img src="/slack.svg" alt="Slack" className="w-16 h-16" />
          </div>
        </div>
      </div>

      {/* Bottom Right: Powered by OpenClaw */}
      <div className="absolute bottom-20 right-6 text-right">
        <p className="text-xl text-[#616061] font-bold">
          Powered by
        </p>
        <p className="text-5xl font-black text-[#1D1C1D]">
          OpenClaw
        </p>
      </div>
    </div>
  );
};

export default Slide05;
