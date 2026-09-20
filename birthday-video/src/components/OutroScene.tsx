import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { TextReveal } from "./TextReveal";
import { FloatingParticles } from "./Particles";
import { FloatingHearts } from "./Hearts";
import { Fireworks } from "./Fireworks";
import { ConfettiBurst } from "./Confetti";

export const OutroScene: React.FC<{ friendName: string }> = ({ friendName }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isPortrait = height > width;

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
      {/* Warm gradient backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 40%, rgba(232,196,108,0.08) 0%, transparent 60%),
                       radial-gradient(ellipse at 30% 70%, rgba(232,124,138,0.06) 0%, transparent 50%)`,
        }}
      />

      <FloatingParticles count={35} colors={["#e8c46c", "#e87c8a", "#ffd700", "#b8a9d4"]} />
      <FloatingHearts count={18} startFrame={10} />
      <Fireworks startFrame={15} burstCount={6} />
      <ConfettiBurst startFrame={5} count={80} />

      {/* Main message */}
      <TextReveal
        text="WITH ALL THE LOVE"
        startFrame={5}
        fontSize={isPortrait ? 13 : 12}
        fontFamily="'Helvetica Neue', sans-serif"
        fontWeight={500}
        color="#e8c46c"
        letterSpacing="0.35em"
        textTransform="uppercase"
      />

      <div style={{ height: isPortrait ? 20 : 14 }} />

      <TextReveal
        text={`Happy Birthday,\n${friendName}`}
        startFrame={15}
        fontSize={isPortrait ? 72 : 56}
        fontFamily="'Georgia', serif"
        fontWeight={700}
        color="#f5efe6"
        lineHeight={1.1}
        glow
        glowColor="rgba(232,196,108,0.35)"
      />

      <div style={{ height: isPortrait ? 16 : 10 }} />

      <TextReveal
        text="You deserve the whole world"
        startFrame={30}
        fontSize={isPortrait ? 28 : 24}
        fontFamily="'Georgia', serif"
        fontWeight={400}
        color="#e87c8a"
      />

      <div style={{ height: isPortrait ? 32 : 20 }} />

      {/* Hearts row */}
      <div
        style={{
          display: "flex",
          gap: 12,
          opacity: spring({ frame: Math.max(0, frame - 40), fps, config: { damping: 20 } }),
        }}
      >
        {["❤️", "🎉", "🥳", "🎂", "❤️"].map((e, i) => (
          <span
            key={i}
            style={{
              fontSize: isPortrait ? 40 : 32,
              transform: `scale(${spring({
                frame: Math.max(0, frame - 45 - i * 3),
                fps,
                config: { damping: 10, mass: 0.6 },
              })})`,
              display: "inline-block",
            }}
          >
            {e}
          </span>
        ))}
      </div>

      <div style={{ height: isPortrait ? 50 : 30 }} />

      {/* From line */}
      <TextReveal
        text="From someone who's grateful\nto have you in their life"
        startFrame={55}
        fontSize={isPortrait ? 18 : 16}
        fontFamily="'Helvetica Neue', sans-serif"
        fontWeight={300}
        color="rgba(245,239,230,0.5)"
        lineHeight={1.6}
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,18,0.6) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
