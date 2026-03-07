import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  Easing,
} from 'remotion';
import {
  Mail,
  Calendar,
  FileText,
  Plane,
  Bell,
  Share2,
} from 'lucide-react';
import { MacWindow } from '../components/MacWindow';

const FPS = 30;
const SCENE_DURATION = 4 * FPS; // 4 seconds

// Bento-style use cases inspired by BentoGrid.tsx (Save files, Notifications, Integrations, Calendar)
const BENTO_ITEMS = [
  { icon: Mail, label: 'Save your files', description: 'We auto-save as you type.', color: '#6366f1' },
  { icon: Bell, label: 'Notifications', description: 'Get notified when it happens.', color: '#ec4899' },
  { icon: Share2, label: 'Integrations', description: '100+ integrations.', color: '#10b981' },
  { icon: Calendar, label: 'Calendar', description: 'Filter files by date.', color: '#f59e0b' },
  { icon: FileText, label: 'Doc summary', description: 'Summarize files instantly.', color: '#06b6d4' },
  { icon: Plane, label: 'Travel', description: 'Book and manage trips.', color: '#8b5cf6' },
];

const SCROLL_DURATION_FRAMES = 25;
const STAGGER_FRAMES = 8;

export const Scene03bBento = () => {
  const frame = useCurrentFrame();

  const tiltDeg = interpolate(
    frame,
    [0, SCENE_DURATION - 30],
    [0, 12],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 48,
      }}
    >
      <div style={{ width: '100%', maxWidth: 900 }}>
        <MacWindow tiltDeg={tiltDeg} style={{ width: '100%' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
              padding: 32,
              paddingTop: 48,
              minHeight: 380,
              overflow: 'hidden',
            }}
          >
            {BENTO_ITEMS.map((item, index) => {
              const itemStartFrame = index * STAGGER_FRAMES;
              const scrollProgress = interpolate(
                frame,
                [itemStartFrame, itemStartFrame + SCROLL_DURATION_FRAMES],
                [0, 1],
                {
                  easing: Easing.out(Easing.cubic),
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }
              );

              const translateY = interpolate(scrollProgress, [0, 1], [80, 0]);
              const opacity = interpolate(scrollProgress, [0, 0.3, 1], [0, 0.5, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });

              const Icon = item.icon;
              return (
                <div
                  key={index}
                  style={{
                    opacity,
                    transform: `translateY(${translateY}px)`,
                    padding: 20,
                    borderRadius: 16,
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: `${item.color}18`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={24} color={item.color} strokeWidth={2} />
                  </div>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: '#1a1a1a',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: '#6b7280',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.description}
                  </span>
                </div>
              );
            })}
          </div>
        </MacWindow>
      </div>
    </AbsoluteFill>
  );
};
