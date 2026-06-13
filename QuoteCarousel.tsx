import { useEffect, useRef, useState } from "react";
import { StarField } from "./StarField";

export function FinalMessage() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) setRevealed(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "radial-gradient(ellipse at center bottom, #200a35 0%, #08051a 60%)",
        padding: "80px 20px",
      }}
    >
      <StarField count={200} />

      {/* Animated rings */}
      {[1, 2, 3].map(ring => (
        <div
          key={ring}
          style={{
            position: "absolute",
            width: `${ring * 200}px`,
            height: `${ring * 200}px`,
            borderRadius: "50%",
            border: "1px solid rgba(212,175,112,0.1)",
            animation: `ringExpand ${ring * 3}s ease-in-out infinite alternate`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "750px",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1.5s ease, transform 1.5s ease",
        }}
      >
        {/* Crown emoji */}
        <div style={{
          fontSize: "72px",
          marginBottom: "24px",
          animation: revealed ? "crownFloat 3s ease-in-out infinite" : "none",
        }}>
          👑
        </div>

        {/* Title */}
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "clamp(11px, 2.5vw, 13px)",
          color: "#d4af70",
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}>
          ✦ Feliz cumpleaños ✦
        </p>

        <h2 style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(56px, 18vw, 120px)",
          color: "#fff",
          textShadow: "0 0 40px rgba(212,160,192,0.8), 0 0 80px rgba(212,175,112,0.4), 0 0 120px rgba(255,255,255,0.2)",
          lineHeight: 1,
          marginBottom: "16px",
        }}>
          Fátima
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginBottom: "32px",
        }}>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #d4af70)" }} />
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(16px, 4vw, 24px)",
            color: "#d4af70",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontStyle: "italic",
          }}>
            XV Años
          </p>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #d4af70)" }} />
        </div>

        {/* Main message */}
        <div style={{
          background: "linear-gradient(135deg, rgba(212,160,192,0.12), rgba(17,10,42,0.7))",
          border: "1px solid rgba(212,160,192,0.25)",
          borderRadius: "24px",
          padding: "clamp(24px, 5vw, 48px)",
          marginBottom: "40px",
          backdropFilter: "blur(10px)",
        }}>
          <p style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: "clamp(17px, 3.5vw, 22px)",
            color: "#f8e8f0",
            lineHeight: 2,
            fontStyle: "italic",
          }}>
            Hoy el cielo se viste de gala para celebrar que hace quince años llegó al mundo
            una persona extraordinaria. Cada estrella que brilla esta noche lleva tu nombre,
            cada constelación forma tu historia, y cada brillo del universo es un aplauso
            por la persona maravillosa que eres.
          </p>
        </div>

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(17px, 3.5vw, 21px)",
          color: "rgba(248,232,240,0.85)",
          lineHeight: 1.8,
          fontStyle: "italic",
          marginBottom: "32px",
        }}>
          Que estos XV años sean solo el principio de una vida llena de
          <span style={{ color: "#d4a0c0" }}> amor</span>,
          <span style={{ color: "#d4af70" }}> sueños</span> y
          <span style={{ color: "#c8a0e0" }}> magia</span>.
        </p>

        {/* Fireworks emojis */}
        <div style={{ fontSize: "clamp(24px, 6vw, 40px)", letterSpacing: "12px", marginBottom: "40px" }}>
          🌸✨🌟💖🌺⭐💫🌙✨🌸
        </div>

        {/* Signature */}
        <div style={{
          borderTop: "1px solid rgba(212,160,192,0.2)",
          paddingTop: "32px",
          marginTop: "8px",
        }}>
          <p style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(28px, 7vw, 48px)",
            color: "#d4af70",
            textShadow: "0 0 20px rgba(212,175,112,0.5)",
          }}>
            Con todo el amor del universo
          </p>
          <div style={{ marginTop: "16px", display: "flex", justifyContent: "center", gap: "8px" }}>
            {["🌟", "💖", "✨", "🌙", "⭐"].map((e, i) => (
              <span
                key={i}
                style={{
                  fontSize: "24px",
                  animation: `starSpin ${1 + i * 0.3}s ease-in-out ${i * 0.2}s infinite alternate`,
                }}
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ringExpand {
          0% { transform: scale(0.9); opacity: 0.1; }
          100% { transform: scale(1.1); opacity: 0.4; }
        }
        @keyframes crownFloat {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-12px) rotate(5deg); }
        }
        @keyframes starSpin {
          0% { transform: scale(0.8) rotate(-10deg); opacity: 0.6; }
          100% { transform: scale(1.2) rotate(10deg); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
