import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { Scene01aText } from './scenes/Scene01aText';
import { Scene01bTerminal } from './scenes/Scene01bTerminal';
import { Scene02aText } from './scenes/Scene02aText';
import { Scene02bDeployButton } from './scenes/Scene02bDeployButton';
import { Scene03aText } from './scenes/Scene03aText';
import { Scene03bBento } from './scenes/Scene03bBento';
import { Scene03cOrbiting } from './scenes/Scene03cOrbiting';
import { Scene04aProblemText } from './scenes/Scene04aProblemText';
import { Scene04bTerminalToDeploy } from './scenes/Scene04bTerminalToDeploy';
import { Scene04cSolutionText } from './scenes/Scene04cSolutionText';
import { Scene04dVideoInMac } from './scenes/Scene04dVideoInMac';
import { Scene05Timer } from './scenes/Scene05Timer';
import { Scene06CTA } from './scenes/Scene06CTA';

const FPS = 30;
const SCENE01a_FRAMES = Math.ceil(1.5 * FPS);
const SCENE01b_FRAMES = Math.ceil(3 * FPS);
const SCENE02a_FRAMES = Math.ceil(1.5 * FPS);
const SCENE02b_FRAMES = Math.ceil(3.5 * FPS);
const SCENE03a_FRAMES = Math.ceil(1.5 * FPS);
const SCENE03b_FRAMES = Math.ceil(4 * FPS);
const SCENE03c_FRAMES = Math.ceil(4 * FPS);
const SCENE04a_FRAMES = Math.ceil(3 * FPS);
const SCENE04b_FRAMES = Math.ceil(4 * FPS);
const SCENE04c_FRAMES = Math.ceil(2.5 * FPS);
const SCENE04d_FRAMES = Math.ceil(4 * FPS);
const SCENE05_FRAMES = 5 * FPS;
const SCENE06_FRAMES = 3 * FPS;

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
  SCENE06_FRAMES;

export const InstantClawLaunchReel = () => {
  let offset = 0;
  return (
    <AbsoluteFill>
      <Sequence from={offset} durationInFrames={SCENE01a_FRAMES}>
        <Scene01aText />
      </Sequence>
      <Sequence from={(offset += SCENE01a_FRAMES)} durationInFrames={SCENE01b_FRAMES}>
        <Scene01bTerminal />
      </Sequence>
      <Sequence from={(offset += SCENE01b_FRAMES)} durationInFrames={SCENE02a_FRAMES}>
        <Scene02aText />
      </Sequence>
      <Sequence from={(offset += SCENE02a_FRAMES)} durationInFrames={SCENE02b_FRAMES}>
        <Scene02bDeployButton />
      </Sequence>
      <Sequence from={(offset += SCENE02b_FRAMES)} durationInFrames={SCENE03a_FRAMES}>
        <Scene03aText />
      </Sequence>
      <Sequence from={(offset += SCENE03a_FRAMES)} durationInFrames={SCENE03b_FRAMES}>
        <Scene03bBento />
      </Sequence>
      <Sequence from={(offset += SCENE03b_FRAMES)} durationInFrames={SCENE03c_FRAMES}>
        <Scene03cOrbiting />
      </Sequence>
      <Sequence from={(offset += SCENE03c_FRAMES)} durationInFrames={SCENE04a_FRAMES}>
        <Scene04aProblemText />
      </Sequence>
      <Sequence from={(offset += SCENE04a_FRAMES)} durationInFrames={SCENE04b_FRAMES}>
        <Scene04bTerminalToDeploy />
      </Sequence>
      <Sequence from={(offset += SCENE04b_FRAMES)} durationInFrames={SCENE04c_FRAMES}>
        <Scene04cSolutionText />
      </Sequence>
      <Sequence from={(offset += SCENE04c_FRAMES)} durationInFrames={SCENE04d_FRAMES}>
        <Scene04dVideoInMac />
      </Sequence>
      <Sequence from={(offset += SCENE04d_FRAMES)} durationInFrames={SCENE05_FRAMES}>
        <Scene05Timer />
      </Sequence>
      <Sequence from={(offset += SCENE05_FRAMES)} durationInFrames={SCENE06_FRAMES}>
        <Scene06CTA />
      </Sequence>
    </AbsoluteFill>
  );
};

export { INSTANTCLAW_LAUNCH_REEL_FRAMES };
