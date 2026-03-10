import React from 'react';
import { RemotionMarquee } from '../RemotionMarquee';
import { cn } from '../../../lib/utils';

const waveformBars = [32, 48, 28, 55, 42, 58, 35, 62, 45, 52, 38, 48];

function WaveformBar({ height }: { height: number }) {
  return (
    <div
      className="w-2 rounded-full bg-[#D4A574]/60"
      style={{ height: `${height}px` }}
    />
  );
}

function WaveformRow() {
  return (
    <div className="flex items-end gap-1.5">
      {waveformBars.map((h, i) => (
        <WaveformBar key={i} height={h} />
      ))}
    </div>
  );
}

export function TranscribeWaveformDemo({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-3 p-4', className)}>
      <RemotionMarquee className="flex gap-3 [--duration:15s]">
        <WaveformRow />
        <WaveformRow />
      </RemotionMarquee>
      <p className="text-xs text-neutral-500 font-mono truncate max-w-[200px]">
        &quot;Meeting notes: Q1 review...&quot;
      </p>
    </div>
  );
}
