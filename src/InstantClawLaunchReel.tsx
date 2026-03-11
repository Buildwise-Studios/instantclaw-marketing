import React from 'react';
import { AbsoluteFill } from 'remotion';
import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { iris } from '@remotion/transitions/iris';
import { slide } from '@remotion/transitions/slide';
import { wipe } from '@remotion/transitions/wipe';
import { Scene01aText } from './scenes/Scene01aText';
import { Scene01bTerminalFullscreen } from './scenes/Scene01bTerminalFullscreen';
import { Scene02aText } from './scenes/Scene02aText';
import { Scene02bDeployButton } from './scenes/Scene02bDeployButton';
import { Scene03aText } from './scenes/Scene03aText';
import { Scene03bBento } from './scenes/Scene03bBento';
import { Scene03cOrbiting } from './scenes/Scene03cOrbiting';
import { Scene04aProblemText } from './scenes/Scene04aProblemText';
import { Scene04bTextStack } from './scenes/Scene04bTextStack';
import { Scene04cSolutionText } from './scenes/Scene04cSolutionText';
import { Scene04dVideoInMac } from './scenes/Scene04dVideoInMac';
import { Scene05Timer } from './scenes/Scene05Timer';
import { Scene05bTelegram } from './scenes/Scene05bTelegram';
import { Scene06CTA } from './scenes/Scene06CTA';

const FPS = 30;
// Snappier pacing: ~40–45 seconds total
const SCENE01a_FRAMES = Math.ceil(1.2 * FPS);
const SCENE01b_FRAMES = Math.ceil(2.5 * FPS);
const SCENE02a_FRAMES = Math.ceil(1.8 * FPS);
const SCENE02b_FRAMES = Math.ceil(3.5 * FPS);
const SCENE03a_FRAMES = Math.ceil(1.2 * FPS);
const SCENE03b_FRAMES = Math.ceil(4 * FPS);
const SCENE03c_FRAMES = Math.ceil(3.5 * FPS);
const SCENE04a_FRAMES = Math.ceil(2.5 * FPS);
const SCENE04b_FRAMES = Math.ceil(4.5 * FPS);
const SCENE04c_FRAMES = Math.ceil(2 * FPS);
const SCENE04d_FRAMES = Math.ceil(4 * FPS);
const SCENE05_FRAMES = Math.ceil(5 * FPS);
const SCENE05b_FRAMES = Math.ceil(6.5 * FPS);
const SCENE06_FRAMES = Math.ceil(3 * FPS);

// Transition durations (in frames) – snappier
const T6 = linearTiming({ durationInFrames: 6 });
const T10 = linearTiming({ durationInFrames: 10 });
const T12 = linearTiming({ durationInFrames: 12 });
const T15 = linearTiming({ durationInFrames: 15 });

// Total = sum(sequences) - sum(transition overlaps)
const TRANSITION_OVERLAP_TOTAL = 7 * 10 + 6 + 2 * 12 + 2 * 15;
const INSTANTCLAW_LAUNCH_REEL_FRAMES =
  SCENE01a_FRAMES +
  SCENE01b_FRAMES +
  SCENE02a_FRAMES +
  SCENE02b_FRAMES +
  SCENE03a_FRAMES +
  SCENE03b_FRAMES +
  SCENE03c_FRAMES +
  SCENE04a_FRAMES +
  SCENE04b_FRAMES +
  SCENE04c_FRAMES +
  SCENE04d_FRAMES +
  SCENE05_FRAMES +
  SCENE05b_FRAMES +
  SCENE06_FRAMES -
  TRANSITION_OVERLAP_TOTAL;

export const InstantClawLaunchReel = () => {
  return (
    <AbsoluteFill>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SCENE01a_FRAMES}>
          <Scene01aText />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T10} />
        <TransitionSeries.Sequence durationInFrames={SCENE01b_FRAMES}>
          <Scene01bTerminalFullscreen />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: 'from-right' })} timing={T10} />
        <TransitionSeries.Sequence durationInFrames={SCENE02a_FRAMES}>
          <Scene02aText />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T10} />
        <TransitionSeries.Sequence durationInFrames={SCENE02b_FRAMES}>
          <Scene02bDeployButton />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T10} />
        <TransitionSeries.Sequence durationInFrames={SCENE03a_FRAMES}>
          <Scene03aText />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({ direction: 'from-top-left' })} timing={T15} />
        <TransitionSeries.Sequence durationInFrames={SCENE03b_FRAMES}>
          <Scene03bBento />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({ direction: 'from-left' })} timing={T12} />
        <TransitionSeries.Sequence durationInFrames={SCENE03c_FRAMES}>
          <Scene03cOrbiting />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={iris({ width: 1080, height: 1920 })} timing={T10} />
        <TransitionSeries.Sequence durationInFrames={SCENE04a_FRAMES}>
          <Scene04aProblemText />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({ direction: 'from-top' })} timing={T10} />
        <TransitionSeries.Sequence durationInFrames={SCENE04b_FRAMES}>
          <Scene04bTextStack />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T6} />
        <TransitionSeries.Sequence durationInFrames={SCENE04c_FRAMES}>
          <Scene04cSolutionText />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: 'from-right' })} timing={T15} />
        <TransitionSeries.Sequence durationInFrames={SCENE04d_FRAMES}>
          <Scene04dVideoInMac />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T10} />
        <TransitionSeries.Sequence durationInFrames={SCENE05_FRAMES}>
          <Scene05Timer />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T10} />
        <TransitionSeries.Sequence durationInFrames={SCENE05b_FRAMES}>
          <Scene05bTelegram />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={T12} />
        <TransitionSeries.Sequence durationInFrames={SCENE06_FRAMES}>
          <Scene06CTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

export { INSTANTCLAW_LAUNCH_REEL_FRAMES };
