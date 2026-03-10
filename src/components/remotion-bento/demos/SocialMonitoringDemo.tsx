import React from 'react';
import { MessageCircle, User } from 'lucide-react';
import { RemotionAnimatedList } from '../RemotionAnimatedList';
import { cn } from '../../../lib/utils';

const posts = [
  { handle: '@startup_io', text: 'Just tried InstantClaw and...', time: '5m' },
  { handle: '@tech_podcast', text: 'Deploy in <1 min? That\'s...', time: '12m' },
  { handle: '@dev_team', text: 'Finally, agents that actually do...', time: '23m' },
];

function PostItem({
  handle,
  text,
  time,
}: {
  handle: string;
  text: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2 shadow-sm">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100">
        <User className="h-4 w-4 text-neutral-500" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-neutral-900">
          {handle} <span className="font-normal text-neutral-400">· {time}</span>
        </p>
        <p className="truncate text-xs text-neutral-600">{text}</p>
      </div>
      <MessageCircle className="h-4 w-4 shrink-0 text-[#D4A574]" />
    </div>
  );
}

export function SocialMonitoringDemo({ className }: { className?: string }) {
  return (
    <RemotionAnimatedList
      className={cn('flex flex-col gap-3', className)}
      startFrame={0}
      staggerFrames={18}
      fadeDurationFrames={12}
    >
      {posts.map((p, i) => (
        <PostItem key={i} {...p} />
      ))}
    </RemotionAnimatedList>
  );
}
