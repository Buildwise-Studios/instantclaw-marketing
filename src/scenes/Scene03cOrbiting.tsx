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

const FPS = 30;
const SCENE_DURATION = 4 * FPS; // 4 seconds

// 20 branded app icons - outer ring (10) + inner ring (10), full screen
const OUTER_ICONS = [
  'gmail.svg',
  'slack.svg',
  'telegram.svg',
  'whatsapp.svg',
  'hubspot.svg',
  'googledrive.svg',
  'notion.svg',
  'asana.svg',
  'trello.svg',
  'zoom.svg',
];
const INNER_ICONS = [
  'dropbox.svg',
  'figma.svg',
  'github.svg',
  'stripe.svg',
  'zendesk.svg',
  'airtable.svg',
  'excel.svg',
  'teams.svg',
  'discord.svg',
  'spotify.svg',
];

// Full screen: composition 1080x1920, zoomed in (~220% of viewport)
const COMP_SIZE = Math.min(1080, 1920) * 2.2;
const OUTER_RADIUS = COMP_SIZE * 0.26;
const INNER_RADIUS = COMP_SIZE * 0.16;
const OUTER_ICON_SIZE = 94; // 72 * 1.3
const INNER_ICON_SIZE = 73; // 56 * 1.3
const LOGO_SIZE = 180;

const STAGGER_FRAMES = 2; // frames between each icon's entrance
const ICON_FADE_FRAMES = 10; // how long each icon takes to fade in

function AppIconRing({
  icons,
  radius,
  iconSize,
  frame,
  fps,
  reverse,
}: {
  icons: string[];
  radius: number;
  iconSize: number;
  frame: number;
  fps: number;
  reverse: boolean;
}) {
  const rotationDurationFrames = 25 * fps; // ~25 seconds per full rotation (significantly slower)
  const rotationDeg = (frame / rotationDurationFrames) * 360 * (reverse ? -1 : 1);

  const containerSize = (radius + iconSize) * 2;

  return (
    <div
      style={{
        position: 'relative',
        width: containerSize,
        height: containerSize,
      }}
    >
      {icons.map((iconFile, index) => {
        const baseAngle = (360 / icons.length) * index;
        const angle = baseAngle + rotationDeg;
        const rad = (angle * Math.PI) / 180;
        const center = containerSize / 2;
        const x = center + radius * Math.cos(rad);
        const y = center + radius * Math.sin(rad);

        const startFrame = index * STAGGER_FRAMES;
        const opacity = interpolate(
          frame,
          [startFrame, startFrame + ICON_FADE_FRAMES],
          [0, 1],
          { easing: Easing.out(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );
        const scale = interpolate(
          frame,
          [startFrame, startFrame + ICON_FADE_FRAMES],
          [0.7, 1],
          { easing: Easing.out(Easing.back(1.2)), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        return (
          <div
            key={iconFile}
            style={{
              position: 'absolute',
              left: x - iconSize / 2,
              top: y - iconSize / 2,
              width: iconSize,
              height: iconSize,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: 'white',
              border: 'none',
              boxShadow: 'none',
              overflow: 'hidden',
              opacity,
              transform: `scale(${scale})`,
            }}
          >
            <img
              src={staticFile(`icons/${iconFile}`)}
              alt=""
              style={{ width: iconSize * 0.6, height: iconSize * 0.6 }}
            />
          </div>
        );
      })}
    </div>
  );
}

export const Scene03cOrbiting = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', overflow: 'hidden' }}>
        {/* Shared container so both rings are centered together */}
        <div style={{ position: 'relative', width: (OUTER_RADIUS + OUTER_ICON_SIZE) * 2, height: (OUTER_RADIUS + OUTER_ICON_SIZE) * 2, flexShrink: 0 }}>
          {/* Outer ring - rotates clockwise */}
          <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AppIconRing
              icons={OUTER_ICONS}
              radius={OUTER_RADIUS}
              iconSize={OUTER_ICON_SIZE}
              frame={frame}
              fps={fps}
              reverse={false}
            />
          </div>
          {/* Inner ring - rotates counter-clockwise */}
          <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
            <AppIconRing
              icons={INNER_ICONS}
              radius={INNER_RADIUS}
              iconSize={INNER_ICON_SIZE}
              frame={frame}
              fps={fps}
              reverse={true}
            />
          </div>
        </div>
        {/* InstantClaw logo at center - directly on background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <Img
            src={staticFile('new-instantclaw-logo.svg')}
            alt="InstantClaw"
            style={{
              width: LOGO_SIZE,
              height: LOGO_SIZE,
              opacity: interpolate(
                frame,
                [0, 15],
                [0, 1],
                { easing: Easing.out(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
              ),
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
