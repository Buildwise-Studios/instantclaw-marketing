import React from 'react';
import { Receipt } from 'lucide-react';
import { cn } from '../../../lib/utils';

const invoices = [
  { vendor: 'AWS', amount: '$124.50', status: 'Paid' },
  { vendor: 'Figma', amount: '$45.00', status: 'Pending' },
  { vendor: 'Notion', amount: '$12/mo', status: 'Paid' },
];

export function InvoiceStackDemo({ className }: { className?: string }) {
  return (
    <div className={cn('relative p-4', className)}>
      {invoices.map((inv, i) => (
        <div
          key={i}
          className="absolute left-4 right-4 rounded-lg border bg-white p-2 shadow-sm"
          style={{
            top: 12 + i * 36,
            transform: `rotate(${(i - 1) * 4}deg)`,
            zIndex: invoices.length - i,
          }}
        >
          <div className="flex items-center gap-2">
            <Receipt className="h-4 w-4 text-[#D4A574]" />
            <span className="flex-1 truncate text-xs font-medium">
              {inv.vendor}
            </span>
            <span
              className={cn(
                'rounded px-1.5 py-0.5 text-[10px] font-medium',
                inv.status === 'Paid'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-amber-100 text-amber-700'
              )}
            >
              {inv.status}
            </span>
          </div>
          <p className="mt-1 text-xs text-neutral-500">{inv.amount}</p>
        </div>
      ))}
    </div>
  );
}
