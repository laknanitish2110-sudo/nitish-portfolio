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

const SCENE_DURATION_SEC = 4;
const TRANSITION_SEC = 0.8;

export const BirthdayVideo: React.FC<{
  friendName?: string;
}> = ({ friendName }) => {
  const { fps, width, height } = useVideoConfig();
  const frame = useCurrentFrame();
  const name = friendName || FRIEND_NAME;

  const SCENE_FRAMES = Math.round(SCENE_DURATION_SEC * fps);
  const TRANS_FRAMES = Math.round(TRANSITION_SEC * fps);
  const INTRO_FRAMES = 3 * fps;
  const OUTRO_FRAMES = 5 * fps;

  const scenes = MEDIA_ITEMS;
  const totalScenes = scenes.length;

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
      {/* Global ambient particles (always visible) */}
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
        const startFrame = INTRO_FRAMES + i * (SCENE_FRAMES - TRANS_FRAMES);
        return (
          <Sequence key={i} from={startFrame} durationInFrames={SCENE_FRAMES}>
            <SceneWrapper
              frame={frame}
              startFrame={startFrame}
              duration={SCENE_FRAMES}
              transFrames={TRANS_FRAMES}
            >
              <MediaScene item={item} index={i} />
            </SceneWrapper>
          </Sequence>
        );
      })}

      {/* Outro */}
      {(() => {
        const outroStart =
          INTRO_FRAMES +
          (totalScenes > 0
            ? totalScenes * (SCENE_FRAMES - TRANS_FRAMES)
            : 0);
        return (
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
        );
      })()}

      {/* Global vignette overlay */}
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
