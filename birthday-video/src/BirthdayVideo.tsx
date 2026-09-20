import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  interpolate,
} from "remotion";
import { MEDIA_ITEMS, FRIEND_NAME } from "./mediaConfig";
import { IntroScene } from "./components/IntroScene";
import { OutroScene } from "./components/OutroScene";
import { MediaScene } from "./components/MediaScene";
import { FloatingParticles } from "./components/Particles";

const IMAGE_DURATION_SEC = 3;
const VIDEO_DURATION_SEC = 4;
const TRANSITION_SEC = 0.6;

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

  // Calculate cumulative start frames
  const sceneStarts: number[] = [];
  let cursor = INTRO_FRAMES - TRANS_FRAMES;
  scenes.forEach((item) => {
    sceneStarts.push(cursor);
    cursor += getSceneDuration(item.type, fps) - TRANS_FRAMES;
  });
  const outroStart = cursor;

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
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <FloatingParticles count={15} colors={["rgba(232,196,108,0.3)", "rgba(232,124,138,0.2)"]} />
      </div>

      {/* Intro */}
      <Sequence from={0} durationInFrames={INTRO_FRAMES}>
        <SceneWrapper frame={frame} startFrame={0} duration={INTRO_FRAMES} transFrames={TRANS_FRAMES}>
          <IntroScene friendName={name} />
        </SceneWrapper>
      </Sequence>

      {/* Media scenes */}
      {scenes.map((item, i) => {
        const dur = getSceneDuration(item.type, fps);
        return (
          <Sequence key={i} from={sceneStarts[i]} durationInFrames={dur}>
            <SceneWrapper
              frame={frame}
              startFrame={sceneStarts[i]}
              duration={dur}
              transFrames={TRANS_FRAMES}
            >
              <MediaScene item={item} index={i} />
            </SceneWrapper>
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
        >
          <OutroScene friendName={name} />
        </SceneWrapper>
      </Sequence>

      {/* Global vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(10,10,18,0.35) 100%)",
          pointerEvents: "none",
          zIndex: 100,
        }}
      />
    </div>
  );
};

export function calculateTotalDuration(fps: number): number {
  const TRANS_FRAMES = Math.round(0.6 * fps);
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
}> = ({ children, frame, startFrame, duration, transFrames }) => {
  const relFrame = frame - startFrame;

  const enterOpacity = interpolate(relFrame, [0, transFrames], [0, 1], {
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

  const enterScale = interpolate(relFrame, [0, transFrames], [1.06, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = Math.min(enterOpacity, exitOpacity);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        transform: `scale(${enterScale})`,
      }}
    >
      {children}
    </div>
  );
};
