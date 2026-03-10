import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';

const LINES = [
  { text: '> curl -fsSL https://openclaw.ai/install.sh \\', color: '#e0e0e0' },
  { text: '  | bash', color: '#e0e0e0' },
  { text: 'Installing OpenClaw...', color: '#81c784' },
  { text: 'Verifying node... OK', color: '#81c784' },
  { text: '> openclaw onboard --install-daemon', color: '#e0e0e0' },
  { text: 'Configuring gateway...', color: '#81c784' },
  { text: '> openclaw gateway install', color: '#e0e0e0' },
  { text: 'Setting up LXD containers...', color: '#81c784' },
  { text: '> openclaw health', color: '#e0e0e0' },
  { text: 'Error: sudo required', color: '#e57373' },
];

const CHARS_PER_SEC = 55;
const LINE_DELAY_FRAMES = 5;

type TerminalLine = { text: string; color: string };

type RemotionTerminalProps = {
  className?: string;
  fontSize?: number;
  style?: React.CSSProperties;
  prefixLines?: TerminalLine[];
};

export const RemotionTerminal: React.FC<RemotionTerminalProps> = ({
  className = '',
  fontSize = 18,
  style,
  prefixLines = [],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const charsPerFrame = CHARS_PER_SEC / fps;
  const allLines = [...prefixLines, ...LINES];

  const getLineStartFrame = (index: number) => {
    let start = 0;
    for (let i = 0; i < index; i++) {
      start += allLines[i].text.length / charsPerFrame + LINE_DELAY_FRAMES;
    }
    return start;
  };

  return (
    <div
      className={className}
      style={{
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        border: '1px solid #333',
        overflow: 'hidden',
        fontFamily: 'ui-monospace, "Cascadia Code", "Source Code Pro", monospace',
        fontSize,
        minHeight: 420,
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '12px 16px',
          borderBottom: '1px solid #333',
          backgroundColor: '#252526',
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#febc2e' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28c840' }} />
      </div>
      <pre
        style={{
          padding: 16,
          margin: 0,
          overflow: 'hidden',
          overflowWrap: 'break-word',
          whiteSpace: 'pre-wrap',
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        <code style={{ display: 'grid', gap: 4 }}>
          {allLines.map((line, index) => {
            const lineCharCount = line.text.length;
            const startFrame = getLineStartFrame(index);

            const charsRevealed = Math.max(
              0,
              Math.min(lineCharCount, Math.floor((frame - startFrame) * charsPerFrame))
            );
            const visibleText = line.text.slice(0, charsRevealed);

            return (
              <div key={index} style={{ color: line.color }}>
                {visibleText}
                {charsRevealed < line.text.length && frame >= startFrame && (
                  <span style={{ opacity: 0.7 }}>▌</span>
                )}
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
};
