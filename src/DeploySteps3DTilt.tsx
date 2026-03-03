import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
  Img,
  staticFile,
} from 'remotion';
import { UserPlus, Key, Rocket, Sparkles, Check, ChevronRight } from 'lucide-react';

const STEP_2_VARIANTS = [{ animationLabel: 'Include 3K DeepSeek Requests / mo' }, {}];

const STEPS = [
  { step: 1, title: 'Sign in', description: 'Create your account', icon: UserPlus },
  { step: 2, title: 'Choose your set up', icon: Key },
  { step: 3, title: 'Go Live', description: 'Deploy + connect messaging app', icon: Rocket },
];

const API_KEY_ANIMATION_TARGET = 'sk-••••••••••••••';

export const DeploySteps3DTilt = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const PHASE_FRAMES = 3 * fps;
  const PAYOFF_FRAMES = 2.5 * fps;
  const STEP_2_ALTERNATE_FRAMES = 1.5 * fps;
  const STEP_3_ALTERNATE_FRAMES = 1.5 * fps;

  const cycleFrames = PHASE_FRAMES * 3 + PAYOFF_FRAMES;
  const frameInCycle = frame % cycleFrames;

  const phase =
    frameInCycle < PHASE_FRAMES
      ? 0
      : frameInCycle < PHASE_FRAMES * 2
        ? 1
        : frameInCycle < PHASE_FRAMES * 3
          ? 2
          : 3;

  const phaseStart =
    phase === 0 ? 0 : phase === 1 ? PHASE_FRAMES : phase === 2 ? PHASE_FRAMES * 2 : PHASE_FRAMES * 3;
  const frameInPhase = frameInCycle - phaseStart;
  const phaseDuration = phase === 3 ? PAYOFF_FRAMES : PHASE_FRAMES;
  const phaseProgress = Math.min(frameInPhase / phaseDuration, 1);

  const step2TextIndex =
    phase < 1 ? 0 : phase > 1 ? 1 : frameInPhase >= STEP_2_ALTERNATE_FRAMES ? 1 : 0;
  const step3SubIndex =
    phase < 2 ? 0 : phase > 2 ? 1 : frameInPhase >= STEP_3_ALTERNATE_FRAMES ? 1 : 0;

  const apiKeyCharCount =
    phase === 1 && step2TextIndex === 1
      ? Math.min(
          API_KEY_ANIMATION_TARGET.length,
          Math.floor((frameInPhase - STEP_2_ALTERNATE_FRAMES) / 1.35)
        )
      : 0;
  const apiKeyDisplay = API_KEY_ANIMATION_TARGET.slice(0, Math.max(0, apiKeyCharCount));

  const displayPhase = phase;
  const isSettingUp = displayPhase < 3;
  const showPayoff = displayPhase >= 3;

  const getStepStatus = (stepIndex: number): 'pending' | 'active' | 'done' => {
    if (displayPhase > stepIndex) return 'done';
    if (displayPhase === stepIndex) return 'active';
    return 'pending';
  };

  const getProgressWidth = (stepIndex: number): number => {
    const status = getStepStatus(stepIndex);
    if (status === 'done') return 100;
    if (status === 'active') return phaseProgress * 100;
    return 0;
  };

  // Progressive tilt: 0° → 14° during phases 0 and 1, stop at start of phase 2, hold till end
  const tiltEndFrame = PHASE_FRAMES * 2; // End of phase 1 = start of phase 2
  const tiltDeg = interpolate(frame, [0, tiltEndFrame], [0, 14], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const payoffOpacity = showPayoff
    ? spring({
        frame: frameInPhase,
        fps,
        config: { damping: 30 },
        durationInFrames: 15,
      })
    : 0;

  const telegramLogo = staticFile('logos/telegram.svg');
  const slackLogo = staticFile('logos/slack.svg');

  return (
    <AbsoluteFill className="bg-warm-bg items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-8 flex flex-col items-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px flex-1 max-w-[80px] bg-[#c53131]/80" />
          <span className="text-sm font-semibold text-[#c53131] uppercase tracking-wider">
            How it works
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-[#c53131]/80" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-8 text-center">
          Deploy in 3 simple steps
        </h2>

        <div style={{ perspective: '1200px', width: '100%' }}>
          <div
            style={{
              transform: `rotateY(${tiltDeg}deg)`,
              transformStyle: 'preserve-3d',
            }}
            className="relative rounded-[24px] bg-white border border-slate-200 shadow-lg overflow-hidden"
          >
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>

            <div className="flex justify-end px-6 md:px-8 pt-6 pb-2">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm ${
                  isSettingUp
                    ? 'bg-white border border-slate-200 text-dark-text'
                    : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                }`}
              >
                {isSettingUp ? (
                  <>
                    <Sparkles className="h-4 w-4 text-slate-400" />
                    <span>Setting up...</span>
                    <span
                      style={{
                        transform: `rotate(${(frame % fps) * (360 / fps)}deg)`,
                      }}
                      className="inline-block"
                    >
                      <Sparkles className="h-3 w-3 text-slate-400" />
                    </span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Agent Live</span>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 md:gap-0 p-6 md:p-8">
              {STEPS.flatMap((step, index) => {
                const status = getStepStatus(index);
                const Icon = step.icon;
                const progressWidth = getProgressWidth(index);
                const isLast = index === STEPS.length - 1;

                return [
                  <div
                    key={`card-${step.step}`}
                    className={`relative rounded-2xl p-6 md:p-8 border min-w-0 min-h-[280px] flex flex-col ${
                      status === 'active'
                        ? 'bg-white border-warm-gold/40 shadow-lg shadow-warm-gold/5'
                        : status === 'pending'
                          ? 'bg-slate-100/70 border-slate-200/70'
                          : 'bg-white border-slate-100 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex flex-col items-start gap-3">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            status === 'active'
                              ? 'text-warm-gold'
                              : status === 'pending'
                                ? 'text-slate-400'
                                : 'text-dark-text'
                          }`}
                        >
                          Step {step.step}
                        </span>
                        <Icon
                          className={`h-6 w-6 ${
                            status === 'pending' ? 'text-slate-300' : 'text-warm-gold'
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="shrink-0 mt-1">
                        {status === 'pending' && (
                          <div className="w-6 h-6 rounded-full border-[1.5px] border-slate-300/60" />
                        )}
                        {status === 'active' && (
                          <div
                            style={{
                              transform: `rotate(${(frame % fps) * (360 / fps)}deg)`,
                            }}
                            className="w-6 h-6 rounded-full border-[1.5px] border-warm-gold border-t-transparent"
                          />
                        )}
                        {status === 'done' && (
                          <div className="w-6 h-6 rounded-full bg-warm-gold flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                          </div>
                        )}
                      </div>
                    </div>

                    <h3
                      className={`font-bold mb-2 text-[17px] ${
                        status === 'pending' ? 'text-slate-400' : 'text-dark-text'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <div
                      className={`text-sm mb-6 leading-relaxed flex-1 min-h-[48px] ${
                        status === 'pending' ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {index === 2 ? (
                        step.description && (
                          <p
                            className={
                              status === 'pending' ? 'text-slate-400' : 'text-slate-600'
                            }
                          >
                            {step.description}
                          </p>
                        )
                      ) : index === 1 ? (
                        <div>
                          <p
                            className={`text-xs font-medium mb-2 ${
                              status === 'pending' ? 'text-slate-400' : 'text-dark-text'
                            }`}
                          >
                            Choose your plan
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span
                              className={`inline-flex items-center px-2.5 py-1.5 rounded-lg border-2 text-xs font-medium ${
                                (status === 'pending' ? 0 : status === 'done' ? 1 : step2TextIndex) ===
                                0
                                  ? 'border-warm-gold bg-warm-gold/10 text-dark-text'
                                  : 'border-slate-200 text-slate-600'
                              }`}
                            >
                              Easy
                            </span>
                            <span
                              className={`inline-flex items-center px-2.5 py-1.5 rounded-lg border-2 text-xs font-medium ${
                                (status === 'pending' ? 0 : status === 'done' ? 1 : step2TextIndex) ===
                                1
                                  ? 'border-warm-gold bg-warm-gold/10 text-dark-text'
                                  : 'border-slate-200 text-slate-600'
                              }`}
                            >
                              Premium
                            </span>
                          </div>
                        </div>
                      ) : (
                        step.description && (
                          <p
                            className={
                              status === 'pending' ? 'text-slate-400' : 'text-slate-500'
                            }
                          >
                            {step.description}
                          </p>
                        )
                      )}
                    </div>

                    <div className="flex flex-col gap-2 mt-auto">
                      {status === 'pending' && index === 1 ? (
                        <div className="py-2">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100/80 text-slate-500 border border-slate-200/60">
                            {STEP_2_VARIANTS[0].animationLabel}
                          </span>
                        </div>
                      ) : status === 'pending' ? (
                        <div className="h-2 rounded-full bg-slate-100/60 w-full" />
                      ) : index === 1 && status === 'active' && step2TextIndex === 1 ? (
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-dark-text text-left">
                            Bring your own API key
                          </label>
                          <div className="relative overflow-hidden rounded-lg">
                            <div className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono bg-white text-dark-text">
                              {apiKeyDisplay}
                            </div>
                            {apiKeyCharCount < API_KEY_ANIMATION_TARGET.length && (
                              <div
                                style={{
                                  left: `calc(0.75rem + ${apiKeyDisplay.length * 0.6}em)`,
                                  opacity: (Math.sin(frame * 0.2) + 1) / 2,
                                }}
                                className="absolute top-1/2 -translate-y-1/2 w-0.5 h-4 bg-warm-gold pointer-events-none"
                              />
                            )}
                          </div>
                        </div>
                      ) : index === 1 && status === 'active' && step2TextIndex === 0 ? (
                        <div className="py-2">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-warm-gold/15 text-warm-gold border border-warm-gold/30">
                            {STEP_2_VARIANTS[0].animationLabel}
                          </span>
                        </div>
                      ) : index === 2 && status === 'active' ? (
                        step3SubIndex === 0 ? (
                          <div className="flex flex-col gap-2">
                            <div className="relative h-2 rounded-full overflow-hidden w-full flex items-center bg-slate-100">
                              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-warm-gold/80 z-10" />
                              <div
                                className="h-1.5 rounded-full bg-warm-gold/70 self-center"
                                style={{
                                  marginLeft: 10,
                                  width: `${Math.min(phaseProgress * 2, 1) * 100}%`,
                                }}
                              />
                            </div>
                            <span className="text-[11px] font-medium text-slate-500">
                              Deploy server...
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 mt-1">
                            <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm">
                              <Img src={telegramLogo} alt="Telegram" className="h-4 w-4" />
                            </div>
                            <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm">
                              <Img src={slackLogo} alt="Slack" className="h-4 w-4" />
                            </div>
                            <span className="text-[13px] font-medium text-slate-600">connected</span>
                            <div className="h-6 w-6 rounded-full bg-warm-gold flex items-center justify-center shrink-0">
                              <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                            </div>
                          </div>
                        )
                      ) : (
                        <>
                          <div
                            className={`relative h-2 rounded-full overflow-hidden w-full flex items-center ${
                              status === 'done' ? 'bg-[#D4A574]/20' : 'bg-slate-100'
                            }`}
                          >
                            {status === 'active' && progressWidth > 0 && (
                              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-warm-gold/80 z-10" />
                            )}
                            <div
                              className={`h-1.5 rounded-full self-center ${
                                status === 'done' ? 'bg-[#D4A574]/35' : 'bg-warm-gold/70'
                              }`}
                              style={{
                                marginLeft: status === 'active' && progressWidth > 0 ? 10 : 0,
                                width: `${progressWidth}%`,
                              }}
                            />
                          </div>
                          {status === 'done' && (
                            <span className="text-[11px] font-medium text-warm-gold">Done</span>
                          )}
                          {index === 0 && status === 'active' && (
                            <div className="w-full py-2.5 rounded-full bg-warm-gold border border-white/20 px-6 text-dark-text font-medium text-center">
                              Sign in
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>,
                  !isLast && (
                    <div
                      key={`arrow-${step.step}`}
                      className="hidden md:flex items-center justify-center w-8 shrink-0"
                    >
                      <ChevronRight className="h-5 w-5 text-slate-300" strokeWidth={1.5} />
                    </div>
                  ),
                ].filter(Boolean);
              })}
            </div>

            {showPayoff && (
              <div
                style={{
                  opacity: payoffOpacity,
                }}
                className="border-t border-slate-100 bg-[#FAF9F7]"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-gold/15">
                      <Sparkles className="h-5 w-5 text-warm-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-text text-[15px]">Your agent is live!</p>
                      <p className="text-[13px] text-slate-500">Ready to receive messages</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm">
                        <Img src={telegramLogo} alt="Telegram" className="h-4 w-4" />
                      </div>
                      <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm">
                        <Img src={slackLogo} alt="Slack" className="h-4 w-4" />
                      </div>
                    </div>
                    <span className="text-[13px] font-medium text-slate-600">
                      Slack or Telegram connected
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
