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
  typewriter?: boolean;
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
  typewriter = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const relFrame = frame - startFrame;

  if (relFrame < 0) return null;

  if (typewriter) {
    const charsPerSec = 20;
    const framesPerChar = fps / charsPerSec;
    const visibleChars = Math.min(text.length, Math.floor(relFrame / framesPerChar));
    const allDone = visibleChars >= text.length;

    const glowPulse = allDone
      ? 0.5 + 0.3 * Math.sin((relFrame - text.length * framesPerChar) * 0.06)
      : 0;

    return (
      <div
        style={{
          fontSize,
          fontFamily,
          fontWeight,
          color,
          textAlign,
          lineHeight,
          maxWidth,
          letterSpacing,
          textTransform,
          whiteSpace: "pre-line",
          textShadow: glow
            ? `0 0 ${25 + glowPulse * 20}px ${glowColor}, 0 0 ${50 + glowPulse * 30}px ${glowColor}`
            : undefined,
        }}
      >
        <span>{text.slice(0, visibleChars)}</span>
        {!allDone && (
          <span
            style={{
              color: Math.floor(relFrame * 0.15) % 2 === 0 ? color : "transparent",
              fontWeight: 300,
            }}
          >
            |
          </span>
        )}
      </div>
    );
  }

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

export const SlamText: React.FC<{
  text: string;
  startFrame?: number;
  fontSize?: number;
  color?: string;
  glowColor?: string;
  lineHeight?: number;
}> = ({
  text,
  startFrame = 0,
  fontSize = 72,
  color = "#f5efe6",
  glowColor = "rgba(232,196,108,0.5)",
  lineHeight = 1.05,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = Math.max(0, frame - startFrame);
  if (frame < startFrame) return null;

  const slam = spring({ frame: f, fps, config: { damping: 12, stiffness: 200, mass: 0.8 } });
  const scale = interpolate(slam, [0, 1], [3.5, 1]);
  const opacity = interpolate(slam, [0, 0.2, 1], [0, 1, 1], { extrapolateRight: "clamp" });

  const glowIntensity = interpolate(f, [0, 6, 25], [0, 1.2, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        fontSize,
        fontFamily: "'Georgia', serif",
        fontWeight: 700,
        color,
        textAlign: "center",
        opacity,
        transform: `scale(${scale})`,
        textShadow: `0 0 ${35 * glowIntensity}px ${glowColor}, 0 0 ${70 * glowIntensity}px ${glowColor}, 0 0 ${120 * glowIntensity}px ${glowColor}`,
        letterSpacing: "0.03em",
        lineHeight,
        whiteSpace: "pre-line",
      }}
    >
      {text}
    </div>
  );
};
