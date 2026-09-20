import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { SlamText, TextReveal } from "./TextReveal";
import { FloatingParticles } from "./Particles";
import { FloatingHearts } from "./Hearts";
import { Fireworks } from "./Fireworks";
import { ConfettiBurst } from "./Confetti";

export const OutroScene: React.FC<{ friendName: string }> = ({ friendName }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isPortrait = height > width;

  const warmOverlay = interpolate(frame, [0, 30, 120], [0, 0.08, 0.12], {
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(frame, [130, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
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
        opacity: fadeOut,
      }}
    >
      {/* Warm gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 40%, rgba(232,196,108,${warmOverlay}) 0%, transparent 60%),
                       radial-gradient(ellipse at 30% 70%, rgba(232,124,138,0.08) 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 30%, rgba(184,169,212,0.06) 0%, transparent 50%)`,
        }}
      />

      {/* Golden warm overlay that builds */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(232,196,108,0.03)",
          opacity: warmOverlay * 8,
        }}
      />

      <FloatingParticles count={45} colors={["rgba(232,196,108,0.5)", "rgba(232,124,138,0.4)", "rgba(255,215,0,0.4)", "rgba(184,169,212,0.3)"]} />
      <FloatingHearts count={25} startFrame={5} />
      <Fireworks startFrame={10} burstCount={4} />
      <Fireworks startFrame={50} burstCount={4} />
      <ConfettiBurst startFrame={5} count={100} />
      <ConfettiBurst startFrame={35} count={60} />

      {/* Eyebrow */}
      <TextReveal
        text="WITH ALL THE LOVE"
        startFrame={5}
        fontSize={isPortrait ? 14 : 12}
        fontFamily="'Helvetica Neue', sans-serif"
        fontWeight={500}
        color="#e8c46c"
        letterSpacing="0.35em"
        textTransform="uppercase"
      />

      <div style={{ height: isPortrait ? 20 : 14 }} />

      {/* Main slam text */}
      <SlamText
        text={`Happy Birthday,\n${friendName}`}
        startFrame={12}
        fontSize={isPortrait ? 74 : 58}
        glowColor="rgba(232,196,108,0.4)"
        lineHeight={1.1}
      />

      <div style={{ height: isPortrait ? 18 : 12 }} />

      {/* Typewriter subtitle */}
      <TextReveal
        text="You deserve the whole world"
        startFrame={30}
        fontSize={isPortrait ? 30 : 26}
        fontFamily="'Georgia', serif"
        fontWeight={400}
        color="#e87c8a"
        typewriter
        glow
        glowColor="rgba(232,124,138,0.3)"
      />

      <div style={{ height: isPortrait ? 36 : 24 }} />

      {/* Emoji row with staggered bounce */}
      <div style={{ display: "flex", gap: 16 }}>
        {["❤️", "🎉", "🥳", "🎂", "❤️"].map((e, i) => {
          const s = spring({
            frame: Math.max(0, frame - 50 - i * 4),
            fps,
            config: { damping: 8, mass: 0.5, stiffness: 200 },
          });
          return (
            <span
              key={i}
              style={{
                fontSize: isPortrait ? 48 : 36,
                transform: `scale(${s}) rotate(${interpolate(s, [0, 0.5, 1], [0, -15, 0])}deg)`,
                display: "inline-block",
                filter: `drop-shadow(0 0 12px rgba(232,196,108,0.4))`,
              }}
            >
              {e}
            </span>
          );
        })}
      </div>

      <div style={{ height: isPortrait ? 50 : 30 }} />

      <TextReveal
        text="From someone who's grateful\nto have you in their life"
        startFrame={70}
        fontSize={isPortrait ? 20 : 17}
        fontFamily="'Helvetica Neue', sans-serif"
        fontWeight={300}
        color="rgba(245,239,230,0.55)"
        lineHeight={1.6}
        typewriter
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(10,10,18,0.6) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
