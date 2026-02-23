import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

const Slide04Staggered = () => {
  const useCases = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "Transcribe Audio Notes",
      description: "Convert voice memos to text instantly"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: "Excel Sheet Analysis",
      description: "Get insights from your spreadsheets"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      title: "PPT Edit Slides",
      description: "Create and modify presentations"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: "Read & Send Emails",
      description: "Manage your inbox automatically"
    }
  ];

  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] px-6 py-6 font-sans antialiased relative`}>
      {/* TOP: Headline centered vertically in the space above the content */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="font-sans text-6xl font-black tracking-tight text-[#1D1C1D] leading-[1.1]">
          Your AI Agent{' '}
          <span className="bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">Handles</span>
        </h1>
        <p className="text-2xl text-[#616061] mt-2">
          Transcribe, analyze, create — and 100+ more.
        </p>
      </div>

      {/* CENTER: Staggered list at natural height — centered on page by equal flex-1 above and below */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[500px] space-y-4">
          {useCases.map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-4 flex items-center gap-4 ${
                index % 2 === 0 ? 'mr-auto' : 'ml-auto'
              }`}
              style={{ 
                boxShadow: '0 10px 40px -12px rgba(197, 49, 49, 0.12)',
                width: '85%'
              }}
            >
              {/* Icon with gold brand background */}
              <div className="w-14 h-14 rounded-xl bg-[#D4A574] flex items-center justify-center shrink-0 text-white">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1D1C1D]">{item.title}</h3>
                <p className="text-sm text-[#616061] mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM: Empty flex-1 to center the content vertically (footer overlays via absolute) */}
      <div className="flex-1" />

      {/* Bottom Left: Platform Logos - Same as Slide 3 */}
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

      {/* Bottom Right: Powered by OpenClaw - Same as Slide 3 */}
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

export default Slide04Staggered;
