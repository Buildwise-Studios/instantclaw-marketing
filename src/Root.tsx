import React from 'react';
import './style.css';
import { Composition } from 'remotion';
import { DeploySteps3DTilt } from './DeploySteps3DTilt';

const FPS = 30;
// One full loop: phase0 (3s) + phase1 (3s) + phase2 (3s) + payoff (2.5s) = 11.5s
// Loop a few times for a usable video
const DURATION_SEC = 11.5 * 3; // ~34.5 seconds
const DURATION_FRAMES = Math.ceil(DURATION_SEC * FPS);

export const RemotionRoot = () => {
  return (
    <Composition
      id="DeploySteps3DTilt"
      component={DeploySteps3DTilt}
      durationInFrames={DURATION_FRAMES}
      fps={FPS}
      width={1080}
      height={1920}
      defaultProps={{}}
    />
  );
};
