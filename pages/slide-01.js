import React from 'react';

// Slide 1: Cover - "Your 24/7 AI Assistant in <1 Minute"
const Slide01Cover = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased">
      {/* Logo at top - bigger */}
      <div className="flex items-center gap-4 mb-10">
        <img 
          src="/instantclaw-logo.png" 
          alt="InstantClaw" 
          className="h-16 w-auto"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span className="text-3xl font-bold tracking-tight text-[#1D1C1D]">InstantClaw</span>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-4 max-w-[900px]">
        {/* Main Headline */}
        <h1 className="font-sans text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.05] bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
          Your 24/7<br/>AI Assistant
        </h1>
        
        {/* Subheadline */}
        <p className="text-5xl md:text-6xl text-[#1D1C1D] font-medium mt-6">
          in <span className="font-bold text-[#c53131]">&lt;1 Minute</span>
        </p>
      </div>

      {/* Platform Icons at bottom */}
      <div className="mt-16 flex items-center gap-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#D4A574]/30">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.55 9.89 16.06 12.5 15.8 13.61C15.7 14.04 15.55 14.17 15.4 14.19C15.1 14.22 14.86 13.98 14.57 13.77C14.09 13.42 13.83 13.21 13.37 12.88C12.83 12.48 13.17 12.28 13.48 11.92C13.57 11.82 15.14 10.44 15.17 10.32C15.17 10.28 15.17 10.26 15.15 10.23C15.12 10.21 15.09 10.22 15.05 10.23C15 10.25 13.26 11.42 13.2 11.46C13.14 11.5 13.08 11.52 13.01 11.52C12.95 11.52 12.89 11.5 12.83 11.46C12.71 11.39 10.35 10.09 10.35 10.09C10.23 10.03 10.11 9.99 10 10.02C9.88 10.06 9.79 10.15 9.73 10.28C9.67 10.41 8.55 13.08 8.55 13.08C8.5 13.23 8.45 13.38 8.45 13.54C8.45 13.85 8.61 14.08 8.86 14.21C9.62 14.6 10.38 15 11.14 15.4C11.9 15.8 12.66 16.2 13.42 16.6C13.78 16.8 14.14 16.9 14.5 16.9C14.86 16.9 15.16 16.75 15.38 16.48C16.13 15.53 16.88 14.58 17.63 13.63C17.85 13.35 17.97 13.05 17.99 12.71C18 12.37 17.89 12.05 17.65 11.78L16.64 8.8Z" fill="#0088cc"/>
          </svg>
          <span className="text-sm font-medium text-[#1D1C1D]">Telegram</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#D4A574]/30">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#4A154B"/>
          </svg>
          <span className="text-sm font-medium text-[#1D1C1D]">Slack</span>
        </div>
      </div>
    </div>
  );
};

export default Slide01Cover;
