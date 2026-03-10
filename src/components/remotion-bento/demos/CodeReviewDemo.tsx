import React from 'react';
import { cn } from '../../../lib/utils';

export function CodeReviewDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg bg-neutral-900/90 p-3 font-mono text-[11px] leading-relaxed',
        className
      )}
    >
      <pre className="text-neutral-300">
        <code>
          <span className="text-purple-400">function</span>{' '}
          <span className="text-amber-300">fetchData</span>
          <span className="text-neutral-400">() {'{'}</span>
          <br />
          <span className="text-neutral-500">
            {' '}
            {'// Consider extracting to utils'}
          </span>
          <br />
          <span className="text-purple-400">  const</span> url ={' '}
          <span className="text-amber-300">getApiUrl</span>
          <span className="text-neutral-400">();</span>
          <br />
          <span className="text-purple-400">  return</span>{' '}
          <span className="text-amber-300">fetch</span>
          <span className="text-neutral-400">(url);</span>
          <br />
          <span className="text-neutral-400">{'}'}</span>
        </code>
      </pre>
      <div className="mt-2 flex items-center gap-1 rounded border-l-2 border-[#D4A574] bg-[#D4A574]/10 px-2 py-1 text-[10px] text-neutral-600">
        <span className="text-[#D4A574]">→</span> Extract to utils
      </div>
    </div>
  );
}
