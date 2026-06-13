import { useEffect, useRef, useState } from "react";
import { StarField } from "./StarField";

const VIDEOS = [
  "/Fatixv.mp4",
  "/Fatixv2.mp4",
  "/Fatixv3.mp4",
  "/Fatixv4.mp4",
  "/Fatixv5.mp4",
  "/Fatixv6.mp4",
];

interface Props {
  onShowStars: () => void;
}

export function HeroSection({ onShowStars }: Props) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [nextVideo, setNextVideo] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setTransitioning(true);
    setTimeout(() => {
      const next = (currentVideo + 1) % VIDEOS.length;
      setCurrentVideo(next);
      setNextVideo((next + 1) % VIDEOS.length);
      setTransitioning(false);
    }, 800);
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Current video */}
      <video
        ref={videoRef}
        key={currentVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: transitioning ? 0 : 1,
          transition: "opacity 0.8s ease",
        }}
      >
        <source src={VIDEOS[currentVideo]} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(8,5,26,0.3) 0%, rgba(8,5,26,0.5) 50%, rgba(8,5,26,0.85) 100%)",
        }}
      />

      <StarField count={120} />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "24px",
          maxWidth: "700px",
        }}
      >
        {/* Decorative top */}
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "clamp(11px, 2.5vw, 14px)",
            color: "#d4af70",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "12px",
            animation: "fadeInUp 1s ease 0.3s both",
          }}
        >
          ✦ Una noche especial para ✦
        </p>

        {/* Main name */}
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(64px, 18vw, 130px)",
            color: "#fff",
            lineHeight: 1,
            marginBottom: "8px",
            textShadow:
              "0 0 30px rgba(212,160,192,0.8), 0 0 60px rgba(212,175,112,0.4)",
            animation: "fadeInUp 1s ease 0.6s both",
          }}
        >
          Fátima
        </h1>

        {/* XV */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(18px, 4vw, 28px)",
            color: "#d4af70",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            marginBottom: "20px",
            animation: "fadeInUp 1s ease 0.9s both",
          }}
        >
          ✨ XV Años ✨
        </p>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: "clamp(15px, 3.5vw, 20px)",
            color: "rgba(248,232,240,0.85)",
            lineHeight: 1.7,
            marginBottom: "40px",
            fontStyle: "italic",
            animation: "fadeInUp 1s ease 1.2s both",
          }}
        >
          Donde cada estrella lleva tu nombre
          <br />
          y cada brillo es un abrazo del universo
        </p>

        {/* CTA Button */}
        <button
          onClick={onShowStars}
          style={{
            background:
              "linear-gradient(135deg, rgba(212,160,192,0.25), rgba(212,175,112,0.25))",
            border: "1px solid rgba(212,175,112,0.6)",
            color: "#fff",
            padding: "14px 36px",
            borderRadius: "50px",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "clamp(13px, 3vw, 16px)",
            letterSpacing: "0.1em",
            cursor: "pointer",
            backdropFilter: "blur(10px)",
            boxShadow:
              "0 0 30px rgba(212,175,112,0.3), inset 0 0 20px rgba(212,160,192,0.1)",
            animation: "fadeInUp 1s ease 1.5s both, glowPulse 3s ease-in-out infinite",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          }}
        >
          🌠 Ver Estrellas Fugaces
        </button>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(248,232,240,0.5)",
          animation: "bounceDown 2s ease-in-out infinite",
          zIndex: 2,
        }}
      >
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}>
          DESCUBRIR
        </p>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(248,232,240,0.5), transparent)" }} />
      </div>

      {/* Floating flowers */}
      <FloatingPetals />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(212,175,112,0.3), inset 0 0 20px rgba(212,160,192,0.1); }
          50% { box-shadow: 0 0 50px rgba(212,175,112,0.6), inset 0 0 30px rgba(212,160,192,0.2); }
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
        @keyframes petalFloat {
          0% { transform: translateY(110vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-20px) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

function FloatingPetals() {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: `${8 + Math.random() * 8}s`,
    delay: `${Math.random() * 8}s`,
    size: `${14 + Math.random() * 16}px`,
    emoji: ["🌸", "🌺", "✨", "⭐", "💫", "🌷"][Math.floor(Math.random() * 6)],
  }));

  return (
    <>
      {petals.map(p => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: p.left,
            bottom: "-30px",
            fontSize: p.size,
            animation: `petalFloat ${p.duration} ${p.delay} linear infinite`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </>
  );
}
