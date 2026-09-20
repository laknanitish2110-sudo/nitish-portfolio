import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  interpolate,
  Audio,
  staticFile,
} from "remotion";
import { MEDIA_ITEMS, FRIEND_NAME } from "./mediaConfig";
import { IntroScene } from "./components/IntroScene";
import { OutroScene } from "./components/OutroScene";
import { MediaScene, TransitionType } from "./components/MediaScene";
import { FloatingParticles } from "./components/Particles";

const IMAGE_DURATION_SEC = 3;
const VIDEO_DURATION_SEC = 4;
const TRANSITION_SEC = 0.5;

const TRANSITIONS: TransitionType[] = [
  "zoomBurst",
  "slideLeft",
  "flashCut",
  "slideRight",
  "rotateIn",
  "fade",
  "flashCut",
  "zoomBurst",
  "slideRight",
  "rotateIn",
  "slideLeft",
  "flashCut",
  "zoomBurst",
  "fade",
  "slideLeft",
  "flashCut",
  "rotateIn",
];

function getSceneDuration(type: "image" | "video", fps: number) {
  return Math.round((type === "video" ? VIDEO_DURATION_SEC : IMAGE_DURATION_SEC) * fps);
}

export const BirthdayVideo: React.FC<{
  friendName?: string;
}> = ({ friendName }) => {
  const { fps, width, height } = useVideoConfig();
  const frame = useCurrentFrame();
  const name = friendName || FRIEND_NAME;

  const TRANS_FRAMES = Math.round(TRANSITION_SEC * fps);
  const INTRO_FRAMES = Math.round(3.5 * fps);
  const OUTRO_FRAMES = Math.round(5 * fps);

  const scenes = MEDIA_ITEMS;

  const sceneStarts: number[] = [];
  let cursor = INTRO_FRAMES - TRANS_FRAMES;
  scenes.forEach((item) => {
    sceneStarts.push(cursor);
    cursor += getSceneDuration(item.type, fps) - TRANS_FRAMES;
  });
  const outroStart = cursor;

  const beatInterval = Math.round(fps * 0.5);
  const beatPhase = frame % beatInterval;
  const beatPulse = interpolate(beatPhase, [0, 3, beatInterval], [0.06, 0.03, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "#0a0a12",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background music */}
      <Audio
        src={staticFile("media/bgm.wav")}
        volume={(f) => {
          const totalFrames = outroStart + OUTRO_FRAMES;
          const fadeInEnd = fps * 2;
          const fadeOutStart = totalFrames - fps * 3;
          if (f < fadeInEnd) return (f / fadeInEnd) * 0.5;
          if (f > fadeOutStart) return Math.max(0, ((totalFrames - f) / (fps * 3)) * 0.5);
          return 0.5;
        }}
      />

      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <FloatingParticles count={18} colors={["rgba(232,196,108,0.3)", "rgba(232,124,138,0.2)"]} />
      </div>

      {/* Intro */}
      <Sequence from={0} durationInFrames={INTRO_FRAMES}>
        <SceneWrapper
          frame={frame}
          startFrame={0}
          duration={INTRO_FRAMES}
          transFrames={TRANS_FRAMES}
          transition="fade"
        >
          <IntroScene friendName={name} />
        </SceneWrapper>
      </Sequence>

      {/* Media scenes with varied transitions */}
      {scenes.map((item, i) => {
        const dur = getSceneDuration(item.type, fps);
        const transition = TRANSITIONS[i % TRANSITIONS.length];
        return (
          <Sequence key={i} from={sceneStarts[i]} durationInFrames={dur}>
            <SceneWrapper
              frame={frame}
              startFrame={sceneStarts[i]}
              duration={dur}
              transFrames={TRANS_FRAMES}
              transition={transition}
            >
              <MediaScene item={item} index={i} transition={transition} />
            </SceneWrapper>
          </Sequence>
        );
      })}

      {/* Flash frames between scenes */}
      {sceneStarts.map((start, i) => {
        const trans = TRANSITIONS[i % TRANSITIONS.length];
        if (trans !== "flashCut") return null;
        return (
          <Sequence key={`flash-${i}`} from={start} durationInFrames={4}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#fff",
                opacity: interpolate(frame - start, [0, 1, 4], [0.9, 0.5, 0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                zIndex: 90,
              }}
            />
          </Sequence>
        );
      })}

      {/* Outro */}
      <Sequence from={outroStart} durationInFrames={OUTRO_FRAMES}>
        <SceneWrapper
          frame={frame}
          startFrame={outroStart}
          duration={OUTRO_FRAMES}
          transFrames={TRANS_FRAMES}
          transition="fade"
        >
          <OutroScene friendName={name} />
        </SceneWrapper>
      </Sequence>

      {/* Beat pulse overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(232,196,108,0.1)",
          opacity: beatPulse,
          pointerEvents: "none",
          zIndex: 95,
        }}
      />

      {/* Global vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,18,0.4) 100%)",
          pointerEvents: "none",
          zIndex: 100,
        }}
      />
    </div>
  );
};

export function calculateTotalDuration(fps: number): number {
  const TRANS_FRAMES = Math.round(0.5 * fps);
  const INTRO_FRAMES = Math.round(3.5 * fps);
  const OUTRO_FRAMES = Math.round(5 * fps);

  let cursor = INTRO_FRAMES - TRANS_FRAMES;
  MEDIA_ITEMS.forEach((item) => {
    cursor += getSceneDuration(item.type, fps) - TRANS_FRAMES;
  });
  return cursor + OUTRO_FRAMES;
}

const SceneWrapper: React.FC<{
  children: React.ReactNode;
  frame: number;
  startFrame: number;
  duration: number;
  transFrames: number;
  transition: TransitionType;
}> = ({ children, frame, startFrame, duration, transFrames, transition }) => {
  const relFrame = frame - startFrame;

  const enterOpacity = transition === "flashCut"
    ? (relFrame >= 0 ? 1 : 0)
    : interpolate(relFrame, [0, transFrames], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  const exitOpacity = interpolate(
    relFrame,
    [duration - transFrames, duration],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const opacity = Math.min(enterOpacity, exitOpacity);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity,
      }}
    >
      {children}
    </div>
  );
};
