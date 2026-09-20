import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  Video,
  staticFile,
} from "remotion";
import type { MediaItem } from "../mediaConfig";
import { TextReveal } from "./TextReveal";

export type TransitionType = "zoomBurst" | "slideLeft" | "slideRight" | "flashCut" | "rotateIn" | "fade";

export const MediaScene: React.FC<{
  item: MediaItem;
  index: number;
  transition?: TransitionType;
}> = ({ item, index, transition = "fade" }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isPortrait = height > width;

  const kenBurnsScale = interpolate(frame, [0, 120], [1, 1.12], {
    extrapolateRight: "clamp",
  });

  const directions = [
    { x: -20, y: -10 },
    { x: 20, y: -8 },
    { x: -15, y: 12 },
    { x: 18, y: -15 },
    { x: -10, y: 8 },
    { x: 12, y: -12 },
  ];
  const dir = directions[index % directions.length];
  const kenBurnsX = interpolate(frame, [0, 120], [0, dir.x], { extrapolateRight: "clamp" });
  const kenBurnsY = interpolate(frame, [0, 120], [0, dir.y], { extrapolateRight: "clamp" });

  const mediaSrc = staticFile(`media/${item.src}`);

  const { enterTransform, enterOpacity, enterFilter } = getEntranceStyle(
    frame, fps, width, height, transition
  );

  const flashOpacity = transition === "flashCut"
    ? interpolate(frame, [0, 2, 6], [1, 0.8, 0], { extrapolateRight: "clamp" })
    : 0;

  const borderGlow = interpolate(
    Math.sin(frame * 0.05),
    [-1, 1],
    [0.15, 0.35],
  );

  const borderScale = spring({
    frame: Math.max(0, frame - 3),
    fps,
    config: { damping: 14, mass: 0.7 },
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#0a0a12",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        transform: enterTransform,
        opacity: enterOpacity,
        filter: enterFilter,
      }}
    >
      {/* Flash overlay for flashCut transition */}
      {flashOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#fff",
            opacity: flashOpacity,
            zIndex: 20,
          }}
        />
      )}

      {/* Background blur layer */}
      <div
        style={{
          position: "absolute",
          inset: -60,
          opacity: 0.35,
          filter: "blur(35px) saturate(1.5)",
          transform: `scale(${kenBurnsScale}) translate(${kenBurnsX}px, ${kenBurnsY}px)`,
        }}
      >
        {item.type === "image" ? (
          <Img src={mediaSrc} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <Video src={mediaSrc} style={{ width: "100%", height: "100%", objectFit: "cover" }} volume={0} />
        )}
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(10,10,18,0.25) 0%, rgba(10,10,18,0.7) 100%)",
        }}
      />

      {/* Main media with animated border */}
      <div
        style={{
          position: "relative",
          width: isPortrait ? "84%" : "76%",
          maxHeight: isPortrait ? "58%" : "68%",
          transform: `scale(${borderScale}) translate(${kenBurnsX * 0.3}px, ${kenBurnsY * 0.3}px)`,
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: `
            0 25px 60px rgba(0,0,0,0.6),
            0 0 0 1.5px rgba(232,196,108,${borderGlow}),
            0 0 ${40 * borderGlow}px rgba(232,196,108,${borderGlow * 0.4}),
            0 0 ${80 * borderGlow}px rgba(232,196,108,${borderGlow * 0.15})
          `,
        }}
      >
        <div
          style={{
            transform: `scale(${kenBurnsScale}) translate(${kenBurnsX}px, ${kenBurnsY}px)`,
          }}
        >
          {item.type === "image" ? (
            <Img
              src={mediaSrc}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <Video
              src={mediaSrc}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              volume={0}
            />
          )}
        </div>

        {/* Gold border inner glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 18,
            border: `1.5px solid rgba(232,196,108,${borderGlow})`,
            boxShadow: `inset 0 0 40px rgba(232,196,108,${borderGlow * 0.1})`,
          }}
        />
      </div>

      {/* Caption with typewriter */}
      {item.caption && (
        <div style={{ marginTop: 40, position: "relative" }}>
          <TextReveal
            text={item.caption}
            startFrame={10}
            fontSize={isPortrait ? 38 : 32}
            fontFamily="'Georgia', serif"
            fontWeight={400}
            color="#f5efe6"
            glow
            glowColor="rgba(232,196,108,0.35)"
            typewriter
          />
        </div>
      )}
    </div>
  );
};

function getEntranceStyle(
  frame: number,
  fps: number,
  width: number,
  height: number,
  transition: TransitionType,
) {
  const progress = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.7, stiffness: 120 },
  });

  switch (transition) {
    case "zoomBurst": {
      const scale = interpolate(progress, [0, 1], [1.4, 1]);
      return {
        enterTransform: `scale(${scale})`,
        enterOpacity: interpolate(progress, [0, 0.4, 1], [0, 1, 1], { extrapolateRight: "clamp" }),
        enterFilter: `blur(${interpolate(progress, [0, 1], [8, 0])}px)`,
      };
    }
    case "slideLeft": {
      const tx = interpolate(progress, [0, 1], [width * 0.5, 0]);
      return {
        enterTransform: `translateX(${tx}px) scale(${interpolate(progress, [0, 1], [0.92, 1])})`,
        enterOpacity: interpolate(progress, [0, 0.3, 1], [0, 1, 1], { extrapolateRight: "clamp" }),
        enterFilter: "none",
      };
    }
    case "slideRight": {
      const tx = interpolate(progress, [0, 1], [-width * 0.5, 0]);
      return {
        enterTransform: `translateX(${tx}px) scale(${interpolate(progress, [0, 1], [0.92, 1])})`,
        enterOpacity: interpolate(progress, [0, 0.3, 1], [0, 1, 1], { extrapolateRight: "clamp" }),
        enterFilter: "none",
      };
    }
    case "flashCut":
      return {
        enterTransform: `scale(${interpolate(progress, [0, 1], [1.05, 1])})`,
        enterOpacity: 1,
        enterFilter: "none",
      };
    case "rotateIn": {
      const rot = interpolate(progress, [0, 1], [6, 0]);
      const sc = interpolate(progress, [0, 1], [1.15, 1]);
      return {
        enterTransform: `rotate(${rot}deg) scale(${sc})`,
        enterOpacity: interpolate(progress, [0, 0.3, 1], [0, 1, 1], { extrapolateRight: "clamp" }),
        enterFilter: "none",
      };
    }
    case "fade":
    default:
      return {
        enterTransform: `scale(${interpolate(progress, [0, 1], [1.06, 1])})`,
        enterOpacity: progress,
        enterFilter: "none",
      };
  }
}
