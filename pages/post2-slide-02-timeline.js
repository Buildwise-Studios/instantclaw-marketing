import React from 'react';

// Option C: Timeline with Accumulating Costs
const Post2Slide02Timeline = () => {
  const timelineItems = [
    {
      month: "Month 0",
      label: "Purchase",
      cost: "$699",
      description: "Mac Mini hardware",
      icon: "💻",
      color: "bg-red-100 text-red-600"
    },
    {
      month: "Month 1-12",
      label: "Electricity",
      cost: "$10-20/mo",
      description: "24/7 server running",
      icon: "⚡",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      month: "Ongoing",
      label: "Maintenance",
      cost: "Your time",
      description: "Manual updates & fixes",
      icon: "🔧",
      color: "bg-orange-100 text-orange-600"
    },
    {
      month: "When it breaks",
      label: "Repairs",
      cost: "$??",
      description: "Unexpected issues",
      icon: "🔄",
      color: "bg-gray-100 text-gray-600"
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-6 font-sans antialiased">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight text-[#1D1C1D] mb-2">
          The Real Cost
        </h1>
        <p className="text-xl text-[#616061]">Mac Mini over 12 months</p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-[600px] w-full">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#D4A574]/40"></div>

        {/* Timeline Items */}
        <div className="space-y-4">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative flex items-start gap-4 pl-2">
              {/* Icon Circle */}
              <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-2xl shrink-0 relative z-10 border-4 border-[#F8F7F5]`}>
                {item.icon}
              </div>
              
              {/* Content Card */}
              <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md border border-[#D4A574]/20">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-semibold text-[#616061]">{item.month}</span>
                  <span className="text-xl font-bold text-[#1D1C1D]">{item.cost}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1D1C1D]">{item.label}</h3>
                <p className="text-sm text-[#616061]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total Cost Callout */}
      <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-2xl px-8 py-4 text-center">
        <p className="text-sm text-red-600 font-semibold uppercase tracking-wide mb-1">Total First Year</p>
        <p className="text-4xl font-bold text-red-500">$699+</p>
        <p className="text-sm text-gray-500">and counting...</p>
      </div>

      {/* Swipe indicator */}
      <div className="mt-6 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for more</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post2Slide02Timeline;
