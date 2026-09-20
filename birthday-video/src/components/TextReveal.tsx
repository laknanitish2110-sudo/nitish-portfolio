import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export const TextReveal: React.FC<{
  text: string;
  startFrame?: number;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  letterSpacing?: string;
  textTransform?: React.CSSProperties["textTransform"];
  textAlign?: React.CSSProperties["textAlign"];
  lineHeight?: number;
  maxWidth?: string;
  glow?: boolean;
  glowColor?: string;
}> = ({
  text,
  startFrame = 0,
  fontSize = 72,
  color = "#f5efe6",
  fontFamily = "serif",
  fontWeight = 700,
  letterSpacing,
  textTransform,
  textAlign = "center",
  lineHeight = 1.1,
  maxWidth = "90%",
  glow = false,
  glowColor = "rgba(232, 196, 108, 0.4)",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const relFrame = frame - startFrame;

  if (relFrame < 0) return null;

  const opacity = spring({
    frame: relFrame,
    fps,
    config: { damping: 30, mass: 0.8 },
  });

  const translateY = interpolate(
    spring({ frame: relFrame, fps, config: { damping: 25, mass: 0.6 } }),
    [0, 1],
    [40, 0]
  );

  const scale = interpolate(
    spring({ frame: relFrame, fps, config: { damping: 20, mass: 0.5 } }),
    [0, 1],
    [0.92, 1]
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        fontSize,
        color,
        fontFamily,
        fontWeight,
        letterSpacing,
        textTransform,
        textAlign,
        lineHeight,
        maxWidth,
        textShadow: glow ? `0 0 40px ${glowColor}, 0 0 80px ${glowColor}` : undefined,
        whiteSpace: "pre-line",
      }}
    >
      {text}
    </div>
  );
};
