import React from 'react';
import { AbsoluteFill } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Fraunces';
import { loadFont as loadSyne } from '@remotion/google-fonts/Syne';
import { loadFont as loadDMSans } from '@remotion/google-fonts/DMSans';
import { loadFont as loadOutfit } from '@remotion/google-fonts/Outfit';
import { loadFont as loadPlusJakarta } from '@remotion/google-fonts/PlusJakartaSans';
import { loadFont as loadManrope } from '@remotion/google-fonts/Manrope';
import { loadFont as loadSora } from '@remotion/google-fonts/Sora';
import { loadFont as loadInstrumentSans } from '@remotion/google-fonts/InstrumentSans';
import { loadFont as loadLibreBaskerville } from '@remotion/google-fonts/LibreBaskerville';
import { loadFont as loadSpaceGrotesk } from '@remotion/google-fonts/SpaceGrotesk';

const { fontFamily: fraunces } = loadFont('normal', { weights: ['700'], subsets: ['latin'] });
const { fontFamily: syne } = loadSyne('normal', { weights: ['700'], subsets: ['latin'] });
const { fontFamily: dmSans } = loadDMSans('normal', { weights: ['700'], subsets: ['latin'] });
const { fontFamily: outfit } = loadOutfit('normal', { weights: ['700'], subsets: ['latin'] });
const { fontFamily: plusJakarta } = loadPlusJakarta('normal', { weights: ['700'], subsets: ['latin'] });
const { fontFamily: manrope } = loadManrope('normal', { weights: ['700'], subsets: ['latin'] });
const { fontFamily: sora } = loadSora('normal', { weights: ['700'], subsets: ['latin'] });
const { fontFamily: instrumentSans } = loadInstrumentSans('normal', { weights: ['700'], subsets: ['latin'] });
const { fontFamily: libreBaskerville } = loadLibreBaskerville('normal', { weights: ['700'], subsets: ['latin'] });
const { fontFamily: spaceGrotesk } = loadSpaceGrotesk('normal', { weights: ['700'], subsets: ['latin'] });

const BRAND_GRADIENT = 'linear-gradient(to right, #1D1C1D, #c53131, #D4A574, #1D1C1D)';
const SAMPLE_TEXT = 'Trying to deploy OpenClaw?';

const FONTS: { name: string; fontFamily: string }[] = [
  { name: 'Fraunces', fontFamily: fraunces },
  { name: 'Syne', fontFamily: syne },
  { name: 'DM Sans', fontFamily: dmSans },
  { name: 'Outfit', fontFamily: outfit },
  { name: 'Plus Jakarta Sans', fontFamily: plusJakarta },
  { name: 'Manrope', fontFamily: manrope },
  { name: 'Sora', fontFamily: sora },
  { name: 'Instrument Sans', fontFamily: instrumentSans },
  { name: 'Libre Baskerville', fontFamily: libreBaskerville },
  { name: 'Space Grotesk (current)', fontFamily: spaceGrotesk },
];

export const SceneTextValidation = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 48,
        overflow: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          maxWidth: '95%',
        }}
      >
        {FONTS.map(({ name, fontFamily }) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div
              style={{
                fontSize: 18,
                color: '#6b7280',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: 56,
                fontWeight: 700,
                fontFamily,
                lineHeight: 1.2,
                background: BRAND_GRADIENT,
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {SAMPLE_TEXT}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
