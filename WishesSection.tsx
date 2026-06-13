import { useEffect, useRef, useState } from "react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.4;
    audio.loop = true;
    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => setPlaying(true))
        .catch(() => setBlocked(true));
    }
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => {
        setPlaying(true);
        setBlocked(false);
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/fatixv.mp3" preload="auto" />
      <button
        onClick={toggle}
        title={playing ? "Pausar música" : "Reproducir música"}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(212,160,192,0.9), rgba(212,175,112,0.9))",
          border: "2px solid rgba(255,255,255,0.3)",
          color: "#fff",
          fontSize: "20px",
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(212,160,192,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(212,160,192,0.8)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(212,160,192,0.5)";
        }}
      >
        {blocked ? "🎵" : playing ? "🔊" : "🔇"}
      </button>
      {blocked && (
        <div
          style={{
            position: "fixed",
            bottom: "76px",
            right: "10px",
            zIndex: 9999,
            background: "rgba(17,10,42,0.95)",
            border: "1px solid rgba(212,160,192,0.4)",
            borderRadius: "12px",
            padding: "8px 14px",
            color: "#d4a0c0",
            fontSize: "12px",
            maxWidth: "180px",
            textAlign: "center",
            lineHeight: "1.4",
          }}
        >
          Toca 🎵 para activar la música
        </div>
      )}
    </>
  );
}
