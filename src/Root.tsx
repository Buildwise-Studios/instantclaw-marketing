import React from 'react';
import './style.css';
import { Composition } from 'remotion';
import { DeploySteps3DTilt } from './DeploySteps3DTilt';
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
import { Scene04ProblemSolution } from './scenes/Scene04ProblemSolution';
import { Scene05Timer } from './scenes/Scene05Timer';
import { Scene06CTA } from './scenes/Scene06CTA';

const FPS = 30;
// One full loop: phase0 (3s) + phase1 (3s) + phase2 (3s) + payoff (2.5s) = 11.5s
// Loop a few times for a usable video
const DURATION_SEC = 11.5 * 3; // ~34.5 seconds
const DURATION_FRAMES = Math.ceil(DURATION_SEC * FPS);

// Scene 1a: 1.5s text, Scene 1b: 3s terminal (split from original Scene 1)
const SCENE01a_FRAMES = Math.ceil(1.5 * FPS);
const SCENE01b_FRAMES = Math.ceil(3 * FPS);
// Scene 2a: 1.5s text, Scene 2b: 3.5s deploy button
const SCENE02a_FRAMES = Math.ceil(1.5 * FPS);
const SCENE02b_FRAMES = Math.ceil(3.5 * FPS);
// Scene 3a: 1.5s text, 3b: bento (4s), 3c: orbiting full-screen (4s)
const SCENE03a_FRAMES = Math.ceil(1.5 * FPS);
const SCENE03b_FRAMES = Math.ceil(4 * FPS);
const SCENE03c_FRAMES = Math.ceil(4 * FPS);
// Scene 4 split: 4a problem (3s), 4b terminal→deploy (4s), 4c solution (2.5s), 4d video (4s)
const SCENE04_FRAMES = 7 * FPS; // legacy combined
const SCENE04a_FRAMES = Math.ceil(3 * FPS);
const SCENE04b_FRAMES = Math.ceil(4 * FPS);
const SCENE04c_FRAMES = Math.ceil(2.5 * FPS);
const SCENE04d_FRAMES = Math.ceil(4 * FPS);
const SCENE05_FRAMES = 5 * FPS;
const SCENE06_FRAMES = 3 * FPS;

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="DeploySteps3DTilt"
        component={DeploySteps3DTilt}
        durationInFrames={DURATION_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene01aText"
        component={Scene01aText}
        durationInFrames={SCENE01a_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene01bTerminal"
        component={Scene01bTerminal}
        durationInFrames={SCENE01b_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene02aText"
        component={Scene02aText}
        durationInFrames={SCENE02a_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene02bDeployButton"
        component={Scene02bDeployButton}
        durationInFrames={SCENE02b_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene03aText"
        component={Scene03aText}
        durationInFrames={SCENE03a_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene03bBento"
        component={Scene03bBento}
        durationInFrames={SCENE03b_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene03cOrbiting"
        component={Scene03cOrbiting}
        durationInFrames={SCENE03c_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene04aProblemText"
        component={Scene04aProblemText}
        durationInFrames={SCENE04a_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene04bTerminalToDeploy"
        component={Scene04bTerminalToDeploy}
        durationInFrames={SCENE04b_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene04cSolutionText"
        component={Scene04cSolutionText}
        durationInFrames={SCENE04c_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene04dVideoInMac"
        component={Scene04dVideoInMac}
        durationInFrames={SCENE04d_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene04ProblemSolution"
        component={Scene04ProblemSolution}
        durationInFrames={SCENE04_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene05Timer"
        component={Scene05Timer}
        durationInFrames={SCENE05_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="Scene06CTA"
        component={Scene06CTA}
        durationInFrames={SCENE06_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
    </>
  );
};
