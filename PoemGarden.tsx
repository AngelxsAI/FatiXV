import { useEffect, useRef, useState } from "react";

const STAR_MESSAGES = [
  { x: 15, y: 20, msg: "Eres la más hermosa del universo ✨" },
  { x: 75, y: 15, msg: "Tu bondad ilumina el mundo 🌟" },
  { x: 35, y: 60, msg: "Felices XV años, Fátima 🌸" },
  { x: 85, y: 55, msg: "Cada sueño tuyo vale oro 💫" },
  { x: 55, y: 80, msg: "El cielo te cuida siempre 🌙" },
  { x: 25, y: 85, msg: "Eres especial e irrepetible 💖" },
  { x: 65, y: 35, msg: "Tu risa es música celestial 🎶" },
  { x: 10, y: 50, msg: "El universo se alegra contigo 🌌" },
  { x: 90, y: 30, msg: "Brillas más que mil estrellas ⭐" },
  { x: 48, y: 15, msg: "Dios te ama profundamente 🙏" },
];

export function ConstellationSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [msgPos, setMsgPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    let t = 0;
    let rafId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw constellation lines
      const stars = STAR_MESSAGES.map(s => ({
        x: (s.x / 100) * canvas.width,
        y: (s.y / 100) * canvas.height,
      }));

      // Connect nearby stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < canvas.width * 0.28) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(212,160,192,${0.08 + 0.04 * Math.sin(t * 0.02)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw stars
      stars.forEach((s, i) => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.03 + i * 0.8);
        const r = 4 + pulse * 3;
        const isHov = hovered === i;

        // Glow
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * (isHov ? 5 : 3));
        grd.addColorStop(0, isHov ? "rgba(212,175,112,0.9)" : "rgba(255,255,255,0.9)");
        grd.addColorStop(0.4, isHov ? "rgba(212,160,192,0.4)" : "rgba(212,160,192,0.3)");
        grd.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(s.x, s.y, r * (isHov ? 5 : 3), 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Star dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, r * (isHov ? 1.5 : 1), 0, Math.PI * 2);
        ctx.fillStyle = isHov ? "#d4af70" : "#fff";
        ctx.fill();
      });

      t++;
      rafId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(rafId);
  }, [hovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    let found: number | null = null;
    STAR_MESSAGES.forEach((s, i) => {
      const sx = (s.x / 100) * canvas.width;
      const sy = (s.y / 100) * canvas.height;
      const dist = Math.sqrt((mx - sx) ** 2 + (my - sy) ** 2);
      if (dist < 30) found = i;
    });
    setHovered(found);
    if (found !== null) {
      setMsgPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const mx = touch.clientX - rect.left;
    const my = touch.clientY - rect.top;

    let found: number | null = null;
    STAR_MESSAGES.forEach((s, i) => {
      const sx = (s.x / 100) * canvas.width;
      const sy = (s.y / 100) * canvas.height;
      const dist = Math.sqrt((mx - sx) ** 2 + (my - sy) ** 2);
      if (dist < 40) found = i;
    });
    setHovered(found);
    if (found !== null) setMsgPos({ x: mx, y: my });
  };

  return (
    <section style={{ padding: "80px 20px", position: "relative" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "12px",
            color: "#d4af70",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            ✦ Secretos del firmamento ✦
          </p>
          <h2 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(42px, 10vw, 72px)",
            color: "#f8e8f0",
            textShadow: "0 0 20px rgba(212,160,192,0.5)",
            marginBottom: "16px",
          }}>
            Constelación de Fátima
          </h2>
          <p style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: "16px",
            color: "rgba(248,232,240,0.7)",
            fontStyle: "italic",
          }}>
            Toca cada estrella para descubrir su mensaje escondido
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHovered(null)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setHovered(null)}
            style={{
              width: "100%",
              height: "400px",
              cursor: hovered !== null ? "pointer" : "default",
              borderRadius: "20px",
              background: "radial-gradient(ellipse at center, #150a2a 0%, #08051a 70%)",
              border: "1px solid rgba(212,160,192,0.15)",
            }}
          />

          {hovered !== null && (
            <div
              style={{
                position: "absolute",
                left: `${Math.min(msgPos.x, 70)}%`,
                top: `${msgPos.y > 300 ? msgPos.y - 80 : msgPos.y + 20}px`,
                background: "linear-gradient(135deg, rgba(17,10,42,0.95), rgba(26,14,53,0.95))",
                border: "1px solid rgba(212,175,112,0.4)",
                borderRadius: "12px",
                padding: "12px 20px",
                color: "#ffd6e7",
                fontFamily: "'Crimson Text', serif",
                fontSize: "15px",
                fontStyle: "italic",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                boxShadow: "0 0 30px rgba(212,175,112,0.3)",
                zIndex: 10,
                transform: "translateX(-50%)",
              }}
            >
              {STAR_MESSAGES[hovered].msg}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
