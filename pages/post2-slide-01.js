import React from 'react';

const Post2Slide01Cover = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight text-[#1D1C1D] mb-3">
          Self-Hosting vs InstantClaw
        </h1>
        <p className="text-xl text-[#616061]">Why spend days when you can deploy in seconds?</p>
      </div>

      {/* Comparison Cards */}
      <div className="flex flex-col md:flex-row gap-6 max-w-[900px] w-full">
        {/* Mac Mini Card */}
        <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-red-200 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
              <svg className="w-7 h-7 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.08-3.11-1.05.05-2.31.72-3.06 1.64-.68.84-1.27 2.18-1.11 3.23 1.18.09 2.38-.71 3.09-1.76"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1D1C1D]">Mac Mini</h2>
          </div>
          
          <div className="space-y-4">
            <div className="text-center py-4 bg-red-50 rounded-xl">
              <span className="text-3xl font-bold text-red-500">$699 Mac Mini</span>
              <p className="text-3xl font-bold text-red-500 mt-2">+ 5 Days Setup</p>
            </div>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-red-400">•</span>
                <span>Buy hardware</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">•</span>
                <span>Install software</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">•</span>
                <span>Configure server</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">•</span>
                <span>Manual updates</span>
              </div>
            </div>
          </div>
        </div>

        {/* VS Badge */}
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#D4A574] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">VS</span>
          </div>
        </div>

        {/* InstantClaw Card */}
        <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-200 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/instantclaw-logo.png" 
              alt="InstantClaw" 
              className="h-12 w-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <h2 className="text-2xl font-bold text-[#1D1C1D]">InstantClaw</h2>
          </div>
          
          <div className="space-y-4">
            <div className="text-center py-4 bg-green-50 rounded-xl">
              <span className="text-5xl font-bold text-green-600">&lt;1 Min</span>
              <p className="text-sm text-gray-600 mt-1">deployment</p>
            </div>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>One-click deploy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Pre-configured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Cloud hosted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Auto updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Message */}
      <div className="mt-8 text-center">
        <p className="text-2xl font-bold text-[#1D1C1D]">
          Focus on mastering OpenClaw, not configuring servers
        </p>
      </div>

      {/* Swipe indicator */}
      <div className="mt-6 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for the breakdown</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post2Slide01Cover;
