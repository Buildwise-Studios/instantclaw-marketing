import React from 'react';
import { RemotionMarquee } from '../RemotionMarquee';
import { cn } from '../../../lib/utils';

const files = [
  {
    name: 'bitcoin.pdf',
    body: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.',
  },
  {
    name: 'finances.xlsx',
    body: 'A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.',
  },
  {
    name: 'logo.svg',
    body: 'Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics.',
  },
  {
    name: 'keys.gpg',
    body: 'GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions.',
  },
  {
    name: 'seed.txt',
    body: 'A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds.',
  },
];

const colors = [
  'border-amber-200/60 bg-amber-50/80',
  'border-emerald-200/60 bg-emerald-50/80',
  'border-blue-200/60 bg-blue-50/80',
  'border-purple-200/60 bg-purple-50/80',
  'border-rose-200/60 bg-rose-50/80',
];

export function FilesMarqueeDemo({ className }: { className?: string }) {
  return (
    <RemotionMarquee
      className={cn(
        'top-10 left-0 right-0 h-28 max-h-[40%] overflow-hidden [--duration:20s]',
        className
      )}
    >
      {files.map((f, idx) => (
        <figure
          key={idx}
          className={cn(
            'relative w-32 overflow-hidden rounded-xl border p-4',
            colors[idx % colors.length]
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium text-neutral-900">
                {f.name}
              </figcaption>
            </div>
          </div>
          <blockquote className="mt-2 text-xs text-neutral-600 line-clamp-2">
            {f.body}
          </blockquote>
        </figure>
      ))}
    </RemotionMarquee>
  );
}
