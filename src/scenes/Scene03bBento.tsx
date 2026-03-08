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

const CELL_SIZE = 140;
const GAP = 12;

type CardType =
  | 'icon-label'
  | 'feature-dropdown'
  | 'feature-buttons'
  | 'feature-list'
  | 'feature-typography'
  | 'feature-progress'
  | 'conceptual-icon'
  | 'marquee-files'
  | 'animated-list'
  | 'animated-beam'
  | 'calendar';

type BentoItem = {
  cardType: CardType;
  label: string;
  colStart: number;
  rowStart: number;
  colSpan: number;
  rowSpan: number;
  startFrame: number;
  icon?: string;
  color?: string;
  conceptualIcon?: 'graduation' | 'people' | 'shield' | 'document' | 'cloud' | 'bell' | 'compliance';
};

const COLS = 6;
const ROWS = 7;

// Boxes appear from center outward: startFrame assigned by distance from grid center
const GRID_CENTER_X = (COLS + 1) / 2;
const GRID_CENTER_Y = (ROWS + 1) / 2;
const STAGGER = 3; // 27 items × 3 ≈ 78, +18 appear = 96, fits in 120 frames

function distanceFromCenter(item: { colStart: number; rowStart: number; colSpan: number; rowSpan: number }): number {
  const cx = item.colStart + item.colSpan / 2 - 0.5;
  const cy = item.rowStart + item.rowSpan / 2 - 0.5;
  return Math.sqrt(Math.pow(cx - GRID_CENTER_X, 2) + Math.pow(cy - GRID_CENTER_Y, 2));
}

const BENTO_ITEMS_RAW: Omit<BentoItem, 'startFrame'>[] = [
  { cardType: 'feature-dropdown', label: 'Advanced permissions', colStart: 1, rowStart: 1, colSpan: 3, rowSpan: 2, conceptualIcon: 'people' },
  { cardType: 'icon-label', label: 'Email automation', colStart: 4, rowStart: 1, colSpan: 1, rowSpan: 1, icon: 'gmail.svg', color: '#ea4335' },
  { cardType: 'icon-label', label: 'Team chat', colStart: 5, rowStart: 1, colSpan: 1, rowSpan: 1, icon: 'slack.svg', color: '#4a154b' },
  { cardType: 'conceptual-icon', label: 'Custom user roles', colStart: 6, rowStart: 1, colSpan: 1, rowSpan: 1, conceptualIcon: 'graduation' },
  { cardType: 'feature-typography', label: 'Custom branding', colStart: 4, rowStart: 2, colSpan: 2, rowSpan: 1 },
  { cardType: 'icon-label', label: 'Video calls', colStart: 6, rowStart: 2, colSpan: 1, rowSpan: 1, icon: 'zoom.svg', color: '#2d8cff' },
  { cardType: 'icon-label', label: 'Task boards', colStart: 1, rowStart: 3, colSpan: 2, rowSpan: 1, icon: 'trello.svg', color: '#0079bf' },
  { cardType: 'animated-list', label: 'Notifications', colStart: 3, rowStart: 3, colSpan: 2, rowSpan: 1 },
  { cardType: 'icon-label', label: 'File sync', colStart: 5, rowStart: 3, colSpan: 1, rowSpan: 1, icon: 'googledrive.svg', color: '#4285f4' },
  { cardType: 'conceptual-icon', label: 'Secure auth', colStart: 6, rowStart: 3, colSpan: 1, rowSpan: 1, conceptualIcon: 'shield' },
  { cardType: 'feature-list', label: 'Team members', colStart: 1, rowStart: 4, colSpan: 2, rowSpan: 2 },
  { cardType: 'marquee-files', label: 'Save your files', colStart: 3, rowStart: 4, colSpan: 1, rowSpan: 1 },
  { cardType: 'animated-beam', label: 'Integrations', colStart: 4, rowStart: 4, colSpan: 1, rowSpan: 1 },
  { cardType: 'icon-label', label: 'Payments', colStart: 5, rowStart: 4, colSpan: 1, rowSpan: 1, icon: 'stripe.svg', color: '#635bff' },
  { cardType: 'conceptual-icon', label: 'Compliance', colStart: 6, rowStart: 4, colSpan: 1, rowSpan: 1, conceptualIcon: 'compliance' },
  { cardType: 'calendar', label: 'Calendar', colStart: 3, rowStart: 5, colSpan: 1, rowSpan: 1 },
  { cardType: 'feature-progress', label: 'Deploy progress', colStart: 4, rowStart: 5, colSpan: 2, rowSpan: 1 },
  { cardType: 'icon-label', label: 'Code & repos', colStart: 6, rowStart: 5, colSpan: 1, rowSpan: 1, icon: 'github.svg', color: '#24292f' },
  { cardType: 'icon-label', label: 'Messaging', colStart: 1, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'telegram.svg', color: '#0088cc' },
  { cardType: 'icon-label', label: 'Support', colStart: 2, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'whatsapp.svg', color: '#25d366' },
  { cardType: 'icon-label', label: 'Cloud storage', colStart: 3, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'dropbox.svg', color: '#0061ff' },
  { cardType: 'icon-label', label: 'Design', colStart: 4, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'figma.svg', color: '#f24e1e' },
  { cardType: 'icon-label', label: 'Databases', colStart: 5, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'airtable.svg', color: '#18bfff' },
  { cardType: 'icon-label', label: 'Spreadsheets', colStart: 6, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'excel.svg', color: '#217346' },
  { cardType: 'icon-label', label: 'Meetings', colStart: 1, rowStart: 7, colSpan: 1, rowSpan: 1, icon: 'teams.svg', color: '#6264a7' },
  { cardType: 'icon-label', label: 'Community', colStart: 2, rowStart: 7, colSpan: 1, rowSpan: 1, icon: 'discord.svg', color: '#5865f2' },
  { cardType: 'conceptual-icon', label: 'Notifications', colStart: 3, rowStart: 7, colSpan: 1, rowSpan: 1, conceptualIcon: 'bell' },
  { cardType: 'conceptual-icon', label: 'SAML SSO', colStart: 4, rowStart: 7, colSpan: 1, rowSpan: 1, conceptualIcon: 'cloud' },
  { cardType: 'icon-label', label: 'Projects', colStart: 5, rowStart: 7, colSpan: 1, rowSpan: 1, icon: 'asana.svg', color: '#f06a6a' },
  { cardType: 'icon-label', label: 'HubSpot CRM', colStart: 6, rowStart: 7, colSpan: 1, rowSpan: 1, icon: 'hubspot.svg', color: '#ff7a59' },
];

// Assign startFrame by distance from center: closest first, farthest last
const BENTO_ITEMS: BentoItem[] = (() => {
  const indexed = BENTO_ITEMS_RAW.map((item, idx) => ({ item, idx, d: distanceFromCenter(item) }));
  indexed.sort((a, b) => a.d - b.d);
  return BENTO_ITEMS_RAW.map((item, originalIdx) => {
    const rank = indexed.findIndex((x) => x.idx === originalIdx);
    return { ...item, startFrame: rank * STAGGER };
  });
})();
const GRID_WIDTH = COLS * CELL_SIZE + (COLS - 1) * GAP;
const GRID_HEIGHT = ROWS * CELL_SIZE + (ROWS - 1) * GAP;

const CARD_STYLE: React.CSSProperties = {
  padding: 14,
  borderRadius: 12,
  backgroundColor: '#fafafa',
  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  border: '1px solid rgba(0,0,0,0.04)',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
};

const LABEL_STYLE: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: '#1a1a1a',
  lineHeight: 1.3,
};

// BentoDemo-style file cards (from BentoGrid.tsx)
const MARQUEE_FILES = [
  { name: 'bitcoin.pdf', body: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.' },
  { name: 'finances.xlsx', body: 'A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.' },
  { name: 'logo.svg', body: 'Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.' },
  { name: 'keys.gpg', body: 'GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.' },
  { name: 'seed.txt', body: 'A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.' },
];

function ConceptualIcon({ type }: { type: NonNullable<BentoItem['conceptualIcon']> }) {
  const size = 28;
  const color = '#4b5563';
  const icons: Record<string, React.ReactNode> = {
    graduation: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    people: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    document: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    cloud: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    bell: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    compliance: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const r = 10;
          const x = 12 + Math.cos(a) * r;
          const y = 12 + Math.sin(a) * r;
          return <circle key={i} cx={x} cy={y} r="0.8" fill={color} />;
        })}
        <text x="12" y="14" textAnchor="middle" fontSize="4" fontWeight="bold" fill={color} fontFamily="sans-serif">GDPR</text>
      </svg>
    ),
  };
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icons[type] ?? null}</div>;
}

function MockDropdown() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
      <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 2 }}>Access level</div>
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 6, padding: '6px 8px', fontSize: 11, color: '#9ca3af' }}>
        Administrator ▾
      </div>
      <div style={{ background: '#fff', borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', overflow: 'hidden', marginTop: 2 }}>
        <div style={{ padding: '6px 8px', fontSize: 11, background: '#f3f4f6', color: '#1a1a1a' }}>Administrator</div>
        <div style={{ padding: '6px 8px', fontSize: 11, color: '#4b5563' }}>Creator</div>
        <div style={{ padding: '6px 8px', fontSize: 11, color: '#4b5563' }}>Learner</div>
      </div>
    </div>
  );
}

function MockButtonGroup() {
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <div style={{ padding: '6px 10px', background: '#f3f4f6', borderRadius: 6, fontSize: 10, fontWeight: 600, color: '#1a1a1a' }}>
        Browse templates
      </div>
      <div style={{ padding: '6px 10px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 10, color: '#6b7280' }}>
        Create new
      </div>
    </div>
  );
}

function MockUserList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {[
        { name: 'Alex Chen', email: 'alex@co.com', online: true },
        { name: 'Sam Rivera', email: 'sam@co.com', online: false },
      ].map((u, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#e5e7eb', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#1a1a1a' }}>{u.name}</div>
            <div style={{ fontSize: 9, color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis' }}>{u.email}</div>
          </div>
          {u.online && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />}
        </div>
      ))}
    </div>
  );
}

function MockProgressBar() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ fontSize: 10, color: '#6b7280' }}>Deploying...</div>
      <div style={{ height: 6, background: '#e5e7eb', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ width: '65%', height: '100%', background: '#3b82f6', borderRadius: 3 }} />
      </div>
    </div>
  );
}

function TypographySample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: '#6b7280', fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
        Your Brand
      </div>
      <div style={{ fontSize: 9, color: '#9ca3af' }}>Custom font & colors</div>
    </div>
  );
}

// BentoDemo-style: Marquee with scrolling file cards (frame-driven)
function MarqueeFilesContent({ frame }: { frame: number }) {
  const scrollDuration = 90;
  const cardWidth = 100;
  const totalWidth = MARQUEE_FILES.length * (cardWidth + 12);
  const scrollX = interpolate(
    (frame % scrollDuration) / scrollDuration,
    [0, 1],
    [0, -totalWidth],
    { extrapolateRight: 'clamp' }
  );
  const blurPx = interpolate(frame, [0, 20], [2, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <div
      style={{
        position: 'absolute',
        top: 8,
        left: 0,
        right: 0,
        height: 90,
        overflow: 'hidden',
        maskImage: 'linear-gradient(to top, transparent 40%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to top, transparent 40%, black 100%)',
      }}
    >
      <div style={{ display: 'flex', gap: 12, transform: `translateX(${scrollX}px)`, width: 'max-content' }}>
        {[...MARQUEE_FILES, ...MARQUEE_FILES].map((f, idx) => (
          <div
            key={idx}
            style={{
              width: cardWidth,
              flexShrink: 0,
              padding: 8,
              borderRadius: 8,
              border: '1px solid rgba(0,0,0,0.08)',
              background: 'rgba(255,255,255,0.6)',
              filter: `blur(${blurPx}px)`,
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 600, color: '#1a1a1a' }}>{f.name}</div>
            <div style={{ fontSize: 8, color: '#6b7280', marginTop: 4, lineHeight: 1.3 }}>{f.body.slice(0, 60)}...</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// BentoDemo-style: Animated list with staggered entrance
function AnimatedListContent({ frame }: { frame: number }) {
  const items = [
    { text: 'Deploy completed', sub: '2 min ago' },
    { text: 'New team member', sub: 'Alex joined' },
    { text: 'Integration ready', sub: 'Slack connected' },
  ];
  return (
    <div
      style={{
        position: 'absolute',
        top: 8,
        left: 0,
        right: 0,
        height: 90,
        overflow: 'hidden',
        maskImage: 'linear-gradient(to top, transparent 10%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to top, transparent 10%, black 100%)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map((item, i) => {
          const start = i * 8;
          const opacity = interpolate(frame, [start, start + 12], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          const translateY = interpolate(frame, [start, start + 12], [8, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 8px',
                background: 'rgba(255,255,255,0.8)',
                borderRadius: 6,
                opacity,
                transform: `translateY(${translateY}px)`,
              }}
            >
              <div style={{ width: 20, height: 20, borderRadius: 4, background: '#e5e7eb' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: '#1a1a1a' }}>{item.text}</div>
                <div style={{ fontSize: 8, color: '#9ca3af' }}>{item.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// BentoDemo-style: Animated beam / connection lines
function AnimatedBeamContent({ frame }: { frame: number }) {
  const pathLength = 120;
  const progress = interpolate(
    frame % 45,
    [0, 45],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );
  const strokeOffset = pathLength * (1 - progress);
  return (
    <div
      style={{
        position: 'absolute',
        top: 4,
        left: 4,
        right: 4,
        bottom: 4,
        overflow: 'hidden',
        maskImage: 'linear-gradient(to top, transparent 10%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to top, transparent 10%, black 100%)',
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 120 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          d="M 10 50 Q 60 20, 110 50"
          fill="none"
          stroke="url(#beamGrad)"
          strokeWidth="2"
          strokeDasharray={pathLength}
          strokeDashoffset={strokeOffset}
          strokeLinecap="round"
        />
        <path
          d="M 10 70 Q 60 40, 110 70"
          fill="none"
          stroke="url(#beamGrad)"
          strokeWidth="2"
          strokeDasharray={pathLength}
          strokeDashoffset={strokeOffset * 0.7}
          strokeLinecap="round"
          opacity={0.7}
        />
        <circle cx="10" cy="50" r="6" fill="#3b82f6" />
        <circle cx="110" cy="50" r="6" fill="#8b5cf6" />
      </svg>
    </div>
  );
}

// BentoDemo-style: Calendar grid
function CalendarContent() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = Array.from({ length: 35 }, (_, i) => (i < 7 ? null : i - 6));
  const selected = 11;
  return (
    <div
      style={{
        position: 'absolute',
        top: 8,
        right: 0,
        padding: 8,
        borderRadius: 8,
        border: '1px solid #e5e7eb',
        background: '#fff',
        maskImage: 'linear-gradient(to top, transparent 40%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to top, transparent 40%, black 100%)',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 14px)', gap: 2, fontSize: 8 }}>
        {days.map((d, i) => (
          <div key={i} style={{ textAlign: 'center', color: '#9ca3af', fontWeight: 600 }}>{d}</div>
        ))}
        {dates.map((d, i) => (
          <div
            key={i}
            style={{
              width: 14,
              height: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
              background: d === selected ? '#3b82f6' : 'transparent',
              color: d === selected ? '#fff' : '#374151',
              fontWeight: d === selected ? 700 : 400,
            }}
          >
            {d ?? ''}
          </div>
        ))}
      </div>
    </div>
  );
}

function BentoCard({ item, opacity, scale, frame }: { item: BentoItem; opacity: number; scale: number; frame: number }) {
  const isWide = item.colSpan >= 2;
  const isLeftAligned = item.cardType !== 'icon-label' || isWide;

  const baseCardStyle: React.CSSProperties = {
    ...CARD_STYLE,
    opacity,
    transform: `scale(${scale})`,
    transformOrigin: 'center center',
    alignItems: isLeftAligned ? 'flex-start' : 'center',
    justifyContent: isLeftAligned ? 'flex-start' : 'center',
  };

  if (item.cardType === 'feature-dropdown') {
    return (
      <div style={baseCardStyle}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, width: '100%' }}>
          <div style={{ flexShrink: 0 }}>
            <ConceptualIcon type="people" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={LABEL_STYLE}>{item.label}</div>
            <div style={{ marginTop: 8 }}>
              <MockDropdown />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (item.cardType === 'feature-buttons') {
    return (
      <div style={baseCardStyle}>
        <div style={LABEL_STYLE}>{item.label}</div>
        <MockButtonGroup />
      </div>
    );
  }

  if (item.cardType === 'feature-list') {
    return (
      <div style={baseCardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <ConceptualIcon type="people" />
          <div style={LABEL_STYLE}>{item.label}</div>
        </div>
        <MockUserList />
      </div>
    );
  }

  if (item.cardType === 'feature-typography') {
    return (
      <div style={baseCardStyle}>
        <div style={LABEL_STYLE}>{item.label}</div>
        <TypographySample />
      </div>
    );
  }

  if (item.cardType === 'feature-progress') {
    return (
      <div style={baseCardStyle}>
        <div style={LABEL_STYLE}>{item.label}</div>
        <MockProgressBar />
      </div>
    );
  }

  if (item.cardType === 'marquee-files') {
    return (
      <div style={baseCardStyle}>
        <div style={LABEL_STYLE}>{item.label}</div>
        <MarqueeFilesContent frame={frame} />
      </div>
    );
  }

  if (item.cardType === 'animated-list') {
    return (
      <div style={baseCardStyle}>
        <div style={LABEL_STYLE}>{item.label}</div>
        <AnimatedListContent frame={frame} />
      </div>
    );
  }

  if (item.cardType === 'animated-beam') {
    return (
      <div style={baseCardStyle}>
        <div style={LABEL_STYLE}>{item.label}</div>
        <AnimatedBeamContent frame={frame} />
      </div>
    );
  }

  if (item.cardType === 'calendar') {
    return (
      <div style={baseCardStyle}>
        <div style={LABEL_STYLE}>{item.label}</div>
        <CalendarContent />
      </div>
    );
  }

  if (item.cardType === 'conceptual-icon' && item.conceptualIcon) {
    return (
      <div style={baseCardStyle}>
        <ConceptualIcon type={item.conceptualIcon} />
        <div style={{ ...LABEL_STYLE, textAlign: isLeftAligned ? 'left' : 'center' }}>{item.label}</div>
      </div>
    );
  }

  // icon-label
  return (
    <div style={baseCardStyle}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          backgroundColor: item.color ? `${item.color}18` : '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {item.icon && (
          <Img
            src={staticFile(`icons/${item.icon}`)}
            style={{ width: 24, height: 24, objectFit: 'contain' }}
          />
        )}
      </div>
      <div style={{ ...LABEL_STYLE, textAlign: 'center' }}>{item.label}</div>
    </div>
  );
}

export const Scene03bBento = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const zoomOutStartFrame = 70;
  const zoomOutEndFrame = durationInFrames - 10;
  const zoomScale = interpolate(
    frame,
    [0, zoomOutStartFrame, zoomOutEndFrame],
    [2.8, 2.8, 1.25],
    {
      easing: Easing.out(Easing.cubic),
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F5F4F2',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          transform: `scale(${zoomScale})`,
          transformOrigin: 'center center',
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
          gap: GAP,
          width: GRID_WIDTH,
          height: GRID_HEIGHT,
        }}
      >
        {BENTO_ITEMS.map((item, index) => {
          const appearProgress = interpolate(
            frame,
            [item.startFrame, item.startFrame + 18],
            [0, 1],
            {
              easing: Easing.out(Easing.back(1.2)),
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }
          );
          const opacity = appearProgress;
          const scale = interpolate(appearProgress, [0, 1], [0.85, 1], { extrapolateRight: 'clamp' });

          return (
            <div
              key={index}
              style={{
                gridColumn: `${item.colStart} / span ${item.colSpan}`,
                gridRow: `${item.rowStart} / span ${item.rowSpan}`,
              }}
            >
              <BentoCard item={item} opacity={opacity} scale={scale} frame={frame} />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
