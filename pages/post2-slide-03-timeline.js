import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// Option A: Visual Timeline Comparison
const Post2Slide03Timeline = () => {
  const macMiniTimeline = [
    { day: "Day 1", task: "Buy & Unbox", icon: "📦" },
    { day: "Day 2", task: "Install OS & Dependencies", icon: "💿" },
    { day: "Day 3", task: "Configure Server", icon: "⚙️" },
    { day: "Day 4", task: "Install OpenClaw", icon: "🔧" },
    { day: "Day 5", task: "Debug Issues", icon: "🐛" },
    { day: "Ongoing", task: "Manual Updates", icon: "🔄" }
  ];

  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-6 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight text-[#1D1C1D] mb-2">
          The Journey
        </h1>
        <p className="text-xl text-[#616061]">5 days vs 1 minute</p>
      </div>

      {/* Side by Side */}
      <div className="flex flex-col md:flex-row gap-8 max-w-[900px] w-full">
        {/* Mac Mini Timeline */}
        <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-200 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-10 h-10 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.08-3.11-1.05.05-2.31.72-3.06 1.64-.68.84-1.27 2.18-1.11 3.23 1.18.09 2.38-.71 3.09-1.76"/>
            </svg>
            <h2 className="text-2xl font-bold text-[#1D1C1D]">Mac Mini</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-200"></div>
            <div className="space-y-3">
              {macMiniTimeline.map((item, index) => (
                <div key={index} className="relative flex items-center gap-3 pl-2">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-sm relative z-10 border-2 border-white">
                    {item.icon}
                  </div>
                  <div className="flex-1 bg-red-50 rounded-lg p-2">
                    <span className="text-xs font-semibold text-red-500">{item.day}</span>
                    <p className="text-sm font-medium text-[#1D1C1D]">{item.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-3xl font-bold text-red-500">5 Days</span>
          </div>
        </div>

        {/* InstantClaw */}
        <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-200 shadow-lg flex flex-col items-center justify-center">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/instantclaw-logo.png" 
              alt="InstantClaw" 
              className="h-10 w-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <h2 className="text-2xl font-bold text-[#1D1C1D]">InstantClaw</h2>
          </div>

          {/* Single Check */}
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <p className="text-xl text-center text-[#1D1C1D] font-medium mb-4">
            One Click
          </p>

          <div className="text-center">
            <span className="text-4xl font-bold text-green-600">&lt;1 Min</span>
          </div>

          <div className="mt-6 space-y-2 text-center">
            <p className="text-green-600 text-sm">✓ Deployed</p>
            <p className="text-green-600 text-sm">✓ Running</p>
            <p className="text-green-600 text-sm">✓ Ready to use</p>
          </div>
        </div>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for final slide</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post2Slide03Timeline;
