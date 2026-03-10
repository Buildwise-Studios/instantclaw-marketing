import React from 'react';
import { FileText } from 'lucide-react';
import { RemotionMarquee } from '../RemotionMarquee';
import { cn } from '../../../lib/utils';

const docs = [
  { label: 'Contract.pdf', tags: ['Dates', 'Amounts'] },
  { label: 'Invoice_2024.pdf', tags: ['Total', 'Due date'] },
  { label: 'Report.pdf', tags: ['Summary'] },
];

function DocCard({ label, tags }: { label: string; tags: string[] }) {
  return (
    <div className="flex shrink-0 flex-col gap-1 rounded-lg border border-amber-200/60 bg-amber-50/80 p-3 w-28">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-[#D4A574]" />
        <span className="truncate text-xs font-medium text-neutral-700">
          {label}
        </span>
      </div>
      <div className="flex flex-wrap gap-1">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded bg-[#D4A574]/20 px-1.5 py-0.5 text-[10px] text-[#1D1C1D]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PDFExtractionDemo({ className }: { className?: string }) {
  return (
    <RemotionMarquee className={cn('pt-4 [--duration:25s]', className)}>
      {docs.map((d, i) => (
        <DocCard key={i} {...d} />
      ))}
    </RemotionMarquee>
  );
}
