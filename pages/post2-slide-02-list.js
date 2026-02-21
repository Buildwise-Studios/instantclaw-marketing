import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// Option D: Simple Itemized List with Icons
const Post2Slide02List = () => {
  const costItems = [
    {
      icon: "💻",
      title: "Mac Mini Hardware",
      cost: "$699",
      subtitle: "One-time purchase",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: "⚡",
      title: "Electricity",
      cost: "$10-20/mo",
      subtitle: "24/7 server running",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: "🔧",
      title: "Maintenance",
      cost: "Your time",
      subtitle: "Manual updates & fixes",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: "🔄",
      title: "Updates & Repairs",
      cost: "$??",
      subtitle: "When things break",
      color: "bg-gray-100 text-gray-600"
    }
  ];

  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1C1D] mb-2">
          Mac Mini Costs
        </h1>
        <p className="text-xl text-[#616061]">What you're really paying</p>
      </div>

      {/* List Items */}
      <div className="flex flex-col gap-4 max-w-[600px] w-full">
        {costItems.map((item, index) => (
          <div 
            key={index}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 flex items-center gap-5 shadow-lg border border-[#D4A574]/20 hover:shadow-xl transition-shadow"
          >
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-3xl shrink-0`}>
              {item.icon}
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-bold text-[#1D1C1D]">{item.title}</h3>
                <span className="text-2xl font-bold text-[#1D1C1D]">{item.cost}</span>
              </div>
              <p className="text-[#616061]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-2xl px-10 py-5 text-center">
        <p className="text-sm text-red-600 font-semibold uppercase tracking-wide mb-1">True Cost First Year</p>
        <p className="text-5xl font-bold text-red-500">$819+</p>
        <p className="text-sm text-gray-500 mt-1">Plus your time & repairs</p>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for more</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post2Slide02List;
