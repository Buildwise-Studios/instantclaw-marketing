import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Img,
  staticFile,
  Easing,
} from 'remotion';
import { IPhoneFrame } from '../components/IPhoneFrame';

const AGENT_MESSAGE = `Hey! I just came online. Who am I? Who are you?

Let's figure this out together. I'm reading through my bootstrap files to understand what's going on. This looks like a fresh workspace - I don't see any memory files yet, which is normal for a first conversation.

So... what should I call you? And what would you like to call me? I could be an AI assistant, or maybe something weirder if you prefer. What's your vibe?`;

export const Scene05bTelegram = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // 3D tilt: phone starts slightly rotated away, eases to facing viewer
  const tiltDeg = interpolate(
    frame,
    [0, durationInFrames * 0.5],
    [-18, 8],
    { easing: Easing.out(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Phone entrance: scale up and fade in
  const entranceProgress = interpolate(
    frame,
    [0, 25],
    [0, 1],
    { easing: Easing.out(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  const scale = interpolate(entranceProgress, [0, 1], [0.9, 1], { extrapolateRight: 'clamp' });
  const opacity = entranceProgress;

  // Message appears in one go after short delay
  const messageOpacity = interpolate(
    frame,
    [15, 30],
    [0, 1],
    { easing: Easing.out(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const telegramBg = staticFile('assets/telegram_wallp.jpg');

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 48,
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IPhoneFrame tiltDeg={tiltDeg} transformOrigin="center center">
          <div
            style={{
              height: '100%',
              minHeight: 500,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fff',
            }}
          >
            {/* Telegram header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '100px 24px 20px 24px',
                backgroundColor: '#1c1c1d',
                color: '#fff',
                position: 'relative',
                zIndex: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#54A9EB" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#D4A574',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    fontWeight: 600,
                    color: '#1D1C1D',
                  }}
                >
                  I
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: 2 }}>
                  instantClawSupport
                </div>
                <div style={{ fontSize: 15, color: '#8e8e93' }}>bot</div>
              </div>
            </div>

            {/* Chat area with wallpaper */}
            <div
              style={{
                flex: 1,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Background wallpaper */}
              <Img
                src={telegramBg}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 0,
                }}
              />

              {/* Messages container */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '24px 20px 100px',
                  gap: 16,
                  opacity: messageOpacity,
                }}
              >
                {/* Agent message */}
                <div
                  style={{
                    maxWidth: '92%',
                    padding: '20px 24px',
                    backgroundColor: '#1E2B3C',
                    borderRadius: 24,
                    borderBottomLeftRadius: 6,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 34,
                      lineHeight: 1.5,
                      color: '#fff',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {AGENT_MESSAGE}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.5)',
                      textAlign: 'right',
                      marginTop: 10,
                    }}
                  >
                    14:26
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 16px 28px',
                  backgroundColor: '#1c1c1d',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '10px 16px',
                    backgroundColor: '#54A9EB',
                    border: 'none',
                    borderRadius: 12,
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                  Menu
                </button>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 44,
                    height: 44,
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: 12,
                    color: '#8e8e93',
                  }}
                >
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                </button>
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#2c2c2e',
                    borderRadius: 20,
                    padding: '12px 20px',
                    minHeight: 44,
                  }}
                >
                  <span style={{ color: '#8e8e93', fontSize: 16 }}>Message</span>
                </div>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 44,
                    height: 44,
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: 12,
                    color: '#8e8e93',
                  }}
                >
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  </svg>
                </button>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 44,
                    height: 44,
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: 12,
                    color: '#8e8e93',
                  }}
                >
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </IPhoneFrame>
      </div>
    </AbsoluteFill>
  );
};
