const FLOWERS = [
  { emoji: "🌸", label: "Dulzura", text: "Como la flor de cerezo, eres delicada y hermosa, capaz de transformar el paisaje con tu sola presencia." },
  { emoji: "🌹", label: "Amor", text: "La rosa roja habla del amor profundo que mereces: apasionado, sincero y eterno." },
  { emoji: "🌺", label: "Alegría", text: "La flor tropical que florece en los lugares más inesperados, como tu sonrisa que ilumina cualquier momento." },
  { emoji: "🌷", label: "Gracia", text: "El tulipán, elegante y puro, representa la gracia con la que caminas por la vida." },
  { emoji: "🌼", label: "Luz", text: "La margarita, sencilla y brillante como el sol, así es tu alegría que no necesita adornos para ser perfecta." },
  { emoji: "🌻", label: "Fe", text: "El girasol siempre sigue la luz del sol, como tú siempre sigues la luz de tu fe y tus sueños." },
];

export function FlowerSection() {
  return (
    <section style={{ padding: "80px 20px", position: "relative", overflow: "hidden" }}>
      {/* Decorative background gradient */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at top, rgba(212,160,192,0.1) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "12px",
            color: "#d4af70",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            ✦ Florece siempre ✦
          </p>
          <h2 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(42px, 10vw, 72px)",
            color: "#f8e8f0",
            textShadow: "0 0 20px rgba(212,160,192,0.5)",
            marginBottom: "16px",
          }}>
            El Jardín de la Vida
          </h2>
          <p style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: "16px",
            color: "rgba(248,232,240,0.7)",
            fontStyle: "italic",
          }}>
            Cada flor tiene un mensaje especial para ti, Fátima
          </p>
        </div>

        {/* Flowers */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px",
        }}>
          {FLOWERS.map((flower, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, rgba(17,10,42,0.8), rgba(26,14,53,0.6))",
                border: "1px solid rgba(212,160,192,0.2)",
                borderRadius: "20px",
                padding: "32px 24px",
                textAlign: "center",
                transition: "all 0.4s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-8px) scale(1.02)";
                el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(212,160,192,0.2)";
                el.style.borderColor = "rgba(212,160,192,0.4)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "none";
                el.style.borderColor = "rgba(212,160,192,0.2)";
              }}
            >
              {/* Shimmer effect */}
              <div style={{
                position: "absolute",
                top: 0, left: "-100%",
                width: "60%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(212,160,192,0.05), transparent)",
                animation: `shimmer ${3 + i * 0.5}s ease-in-out infinite`,
                pointerEvents: "none",
              }} />

              {/* Flower emoji with animation */}
              <div
                style={{
                  fontSize: "56px",
                  marginBottom: "16px",
                  animation: `flowerBob ${2 + i * 0.3}s ease-in-out infinite alternate`,
                }}
              >
                {flower.emoji}
              </div>

              {/* Label */}
              <p style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "11px",
                color: "#d4af70",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}>
                {flower.label}
              </p>

              {/* Divider */}
              <div style={{
                width: "40px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #d4a0c0, transparent)",
                margin: "0 auto 16px",
              }} />

              {/* Text */}
              <p style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: "15px",
                color: "rgba(248,232,240,0.8)",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}>
                {flower.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes flowerBob {
          from { transform: translateY(0) rotate(-3deg); }
          to { transform: translateY(-8px) rotate(3deg); }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </section>
  );
}
