import React from 'react';
import { Pencil, MessageCircle, User } from 'lucide-react';
import { RemotionAnimatedList } from '../RemotionAnimatedList';
import { cn } from '../../../lib/utils';

const notifications = [
  {
    name: 'New event',
    description: 'Magic UI',
    time: '2m ago',
    icon: Pencil,
    color: '#1E86FF',
  },
  {
    name: 'New message',
    description: 'Magic UI',
    time: '5m ago',
    icon: MessageCircle,
    color: '#FF3D71',
  },
  {
    name: 'User signed up',
    description: 'Magic UI',
    time: '10m ago',
    icon: User,
    color: '#FFB800',
  },
];

function NotificationItem({
  name,
  description,
  icon: Icon,
  color,
  time,
}: {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border bg-white px-3 py-2 shadow-sm">
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="h-4 w-4" style={{ color }} strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-900 truncate">
          {name}{' '}
          <span className="text-neutral-500 font-normal">· {time}</span>
        </p>
        <p className="text-xs text-neutral-500 truncate">{description}</p>
      </div>
    </div>
  );
}

export function NotificationsDemo({ className }: { className?: string }) {
  return (
    <RemotionAnimatedList
      className={cn('flex flex-col items-center gap-4', className)}
      startFrame={0}
      staggerFrames={18}
      fadeDurationFrames={12}
    >
      {notifications.map((item, idx) => (
        <NotificationItem key={idx} {...item} />
      ))}
    </RemotionAnimatedList>
  );
}
