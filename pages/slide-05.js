import React from 'react';

const Slide05CTA = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased">
      {/* Main Content */}
      <div className="text-center max-w-[800px]">
        {/* Headline */}
        <h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-8">
          Ready for Your<br/>AI Assistant?
        </h1>

        {/* Subheadline */}
        <p className="text-3xl md:text-4xl text-[#616061] font-light mb-12">
          Deploy in 60 seconds.<br/>No setup required.
        </p>

        {/* CTA Button */}
        <div className="mb-10">
          <div className="inline-block px-12 py-5 bg-gradient-to-r from-[#D4A574] to-[#c53131] rounded-2xl shadow-2xl">
            <span className="text-3xl md:text-4xl font-bold text-white">
              Get Started →
            </span>
          </div>
        </div>

        {/* Link indicator */}
        <div className="flex items-center justify-center gap-3 text-[#616061]">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span className="text-xl font-medium">Link in bio</span>
        </div>
      </div>

      {/* Bottom: InstantClaw branding */}
      <div className="absolute bottom-12 flex items-center gap-3">
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
