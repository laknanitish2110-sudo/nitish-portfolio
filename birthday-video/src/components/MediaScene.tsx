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

export const MediaScene: React.FC<{
  item: MediaItem;
  index: number;
}> = ({ item, index }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const kenBurnsScale = interpolate(frame, [0, 120], [1, 1.08], {
    extrapolateRight: "clamp",
  });

  const kenBurnsX = interpolate(frame, [0, 120], [0, index % 2 === 0 ? -15 : 15], {
    extrapolateRight: "clamp",
  });

  const enterOpacity = spring({
    frame,
    fps,
    config: { damping: 30 },
  });

  const isPortrait = height > width;
  const mediaSrc = staticFile(`media/${item.src}`);

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
      }}
    >
      {/* Background blur layer */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          opacity: 0.3,
          filter: "blur(30px) saturate(1.4)",
          transform: `scale(${kenBurnsScale}) translateX(${kenBurnsX}px)`,
        }}
      >
        {item.type === "image" ? (
          <Img src={mediaSrc} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <Video
            src={mediaSrc}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            volume={0}
          />
        )}
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(10,10,18,0.3) 0%, rgba(10,10,18,0.7) 100%)",
        }}
      />

      {/* Main media */}
      <div
        style={{
          position: "relative",
          width: isPortrait ? "82%" : "75%",
          maxHeight: isPortrait ? "55%" : "65%",
          opacity: enterOpacity,
          transform: `scale(${kenBurnsScale}) translateX(${kenBurnsX}px)`,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,196,108,0.15)",
        }}
      >
        {item.type === "image" ? (
          <Img
            src={mediaSrc}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <Video
            src={mediaSrc}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            volume={0}
          />
        )}

        {/* Gold border glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 16,
            border: "1.5px solid rgba(232,196,108,0.2)",
            boxShadow: "inset 0 0 30px rgba(232,196,108,0.05)",
          }}
        />
      </div>

      {/* Caption */}
      {item.caption && (
        <div style={{ marginTop: 36, position: "relative" }}>
          <TextReveal
            text={item.caption}
            startFrame={15}
            fontSize={isPortrait ? 36 : 30}
            fontFamily="'Georgia', serif"
            fontWeight={400}
            color="#f5efe6"
            glow
            glowColor="rgba(232,196,108,0.3)"
          />
        </div>
      )}
    </div>
  );
};
