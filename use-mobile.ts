import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { ShootingStarsOverlay } from "./components/ShootingStarsOverlay";
import { MusicPlayer } from "./components/MusicPlayer";
import { QuoteCarousel } from "./components/QuoteCarousel";
import { BibleSection } from "./components/BibleSection";
import { PoemGarden } from "./components/PoemGarden";
import { ConstellationSection } from "./components/ConstellationSection";
import { WishesSection } from "./components/WishesSection";
import { PhrasesSection } from "./components/PhrasesSection";
import { FlowerSection } from "./components/FlowerSection";
import { FinalMessage } from "./components/FinalMessage";
import { StarField } from "./components/StarField";

export default function App() {
  const [showStars, setShowStars] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#08051a",
        fontFamily: "'Raleway', sans-serif",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Music */}
      <MusicPlayer />

      {/* Shooting Stars Overlay */}
      {showStars && <ShootingStarsOverlay onClose={() => setShowStars(false)} />}

      {/* === HERO === */}
      <HeroSection onShowStars={() => setShowStars(true)} />

      {/* === INTRO QUOTE === */}
      <section
        style={{
          position: "relative",
          padding: "80px 20px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(212,160,192,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <StarField count={60} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(28px, 7vw, 52px)",
            color: "#f8e8f0",
            lineHeight: 1.5,
            textShadow: "0 0 20px rgba(212,160,192,0.4)",
            marginBottom: "24px",
          }}>
            "Hay quince razones para celebrar, y todas llevan tu nombre"
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <div style={{ height: "1px", flex: 1, maxWidth: "100px", background: "linear-gradient(to right, transparent, #d4af70)" }} />
            <span style={{ color: "#d4af70", fontSize: "18px" }}>🌸</span>
            <div style={{ height: "1px", flex: 1, maxWidth: "100px", background: "linear-gradient(to left, transparent, #d4af70)" }} />
          </div>
        </div>
      </section>

      {/* === VERSE CAROUSEL === */}
      <section style={{ padding: "20px 0 60px", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "11px",
            color: "#d4af70",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
          }}>
            ✦ Versículos que te acompañan ✦
          </p>
        </div>
        <QuoteCarousel />
      </section>

      {/* === BIBLE SECTION === */}
      <BibleSection />

      {/* Divider */}
      <SectionDivider />

      {/* === POEM GARDEN === */}
      <PoemGarden />

      {/* Divider */}
      <SectionDivider />

      {/* === PHRASES === */}
      <PhrasesSection />

      {/* Divider */}
      <SectionDivider />

      {/* === CONSTELLATION === */}
      <ConstellationSection />

      {/* Divider */}
      <SectionDivider />

      {/* === FLOWERS === */}
      <FlowerSection />

      {/* Divider */}
      <SectionDivider />

      {/* === WISHES === */}
      <WishesSection />

      {/* === XV COUNT === */}
      <XVCount />

      {/* === FINAL MESSAGE === */}
      <FinalMessage />
    </div>
  );
}

function SectionDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 40px", gap: "16px" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(212,160,192,0.3))" }} />
      <span style={{ color: "#d4af70", fontSize: "16px", flexShrink: 0 }}>✦ ✦ ✦</span>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(212,160,192,0.3))" }} />
    </div>
  );
}

function XVCount() {
  const digits = ["X", "V"];
  return (
    <section style={{ padding: "80px 20px", textAlign: "center", position: "relative" }}>
      <StarField count={80} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "12px",
          color: "#d4af70",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          marginBottom: "32px",
        }}>
          ✦ Quince momentos para recordar ✦
        </p>

        {/* Big XV */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "40px" }}>
          {digits.map((d, i) => (
            <div
              key={i}
              style={{
                width: "clamp(80px, 20vw, 140px)",
                height: "clamp(80px, 20vw, 140px)",
                borderRadius: "24px",
                background: "linear-gradient(135deg, rgba(212,160,192,0.2), rgba(212,175,112,0.15))",
                border: "1px solid rgba(212,175,112,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 40px rgba(212,175,112,0.2)",
                animation: `floatXV ${2 + i * 0.5}s ease-in-out infinite alternate`,
              }}
            >
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(40px, 12vw, 80px)",
                color: "#d4af70",
                textShadow: "0 0 20px rgba(212,175,112,0.6)",
              }}>
                {d}
              </span>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: "clamp(16px, 3.5vw, 22px)",
          color: "rgba(248,232,240,0.8)",
          fontStyle: "italic",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: 1.8,
        }}>
          Quince años de existir, de crecer, de brillar...
          <br />
          El universo lleva quince años preparando un lugar especial para ti.
        </p>
      </div>
      <style>{`
        @keyframes floatXV {
          from { transform: translateY(0); }
          to { transform: translateY(-16px); }
        }
      `}</style>
    </section>
  );
}
