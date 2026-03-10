import React from 'react';
import { MapPin } from 'lucide-react';
import { RemotionMarquee } from '../RemotionMarquee';
import { cn } from '../../../lib/utils';

const destinations = [
  { city: 'Paris', dates: 'Mar 15–22' },
  { city: 'Tokyo', dates: 'Apr 2–10' },
  { city: 'NYC', dates: 'May 1–7' },
  { city: 'London', dates: 'Jun 12–18' },
];

function DestinationCard({ city, dates }: { city: string; dates: string }) {
  return (
    <div className="flex shrink-0 flex-col gap-1 rounded-xl border border-blue-200/60 bg-blue-50/80 p-3 w-24">
      <MapPin className="h-4 w-4 text-[#D4A574]" />
      <span className="font-medium text-neutral-800">{city}</span>
      <span className="text-[10px] text-neutral-500">{dates}</span>
    </div>
  );
}

export function TravelMarqueeDemo({ className }: { className?: string }) {
  return (
    <RemotionMarquee className={cn('pt-4 [--duration:20s]', className)}>
      {destinations.map((d, i) => (
        <DestinationCard key={i} {...d} />
      ))}
    </RemotionMarquee>
  );
}
