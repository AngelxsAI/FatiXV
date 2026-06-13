import { useState } from "react";

const PAGES: { title: string; verses: { ref: string; text: string; highlighted?: boolean }[] }[] = [
  {
    title: "El Amor",
    verses: [
      { ref: "1 Corintios 13:4-7", text: "El amor es paciente, es bondadoso. El amor no tiene envidia; el amor no es jactancioso, no es arrogante; no actúa de manera indigna; no busca lo suyo, no se irrita, no toma en cuenta el mal recibido...", highlighted: true },
      { ref: "Juan 3:16", text: "Porque de tal manera amó Dios al mundo, que dio a su Hijo unigénito, para que todo el que cree en Él no se pierda, sino que tenga vida eterna.", highlighted: true },
      { ref: "1 Juan 4:8", text: "El que no ama no conoce a Dios, porque Dios es amor.", highlighted: true },
      { ref: "Romanos 8:38-39", text: "Porque estoy convencido de que ni la muerte, ni la vida, ni ángeles, ni principados, ni lo presente, ni lo por venir, ni los poderes, ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios." },
    ],
  },
  {
    title: "La Bondad",
    verses: [
      { ref: "Proverbios 31:26", text: "Abre su boca con sabiduría, y hay enseñanza de bondad en su lengua.", highlighted: true },
      { ref: "Gálatas 5:22-23", text: "Pero el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza.", highlighted: true },
      { ref: "Proverbios 16:24", text: "Las palabras amables son como la miel: dulces al alma y sanadoras al cuerpo.", highlighted: true },
      { ref: "Lucas 6:38", text: "Den, y se les dará; medida buena, apretada, sacudida y desbordante verterán en su regazo." },
    ],
  },
  {
    title: "La Esperanza",
    verses: [
      { ref: "Jeremías 29:11", text: "Porque yo sé los planes que tengo para ustedes —declara el Señor—, planes de bienestar y no de calamidad, para darles un futuro y una esperanza.", highlighted: true },
      { ref: "Isaías 40:31", text: "Pero los que esperan en el Señor renovarán sus fuerzas; se remontarán con alas como las águilas, correrán y no se cansarán, caminarán y no desfallecerán.", highlighted: true },
      { ref: "Romanos 15:13", text: "Y que el Dios de la esperanza los llene de todo gozo y paz al creer, para que abunden en esperanza por el poder del Espíritu Santo.", highlighted: true },
      { ref: "Lamentaciones 3:22-23", text: "Por la misericordia del Señor no hemos sido consumidos, porque nunca decayeron sus compasiones. Son nuevas cada mañana; grande es tu fidelidad." },
    ],
  },
  {
    title: "La Amistad",
    verses: [
      { ref: "Proverbios 17:17", text: "En todo tiempo ama el amigo, y es como un hermano en tiempo de angustia.", highlighted: true },
      { ref: "Eclesiastés 4:9-10", text: "Más valen dos que uno, porque obtienen más fruto de su esfuerzo. Si caen, el uno levanta al otro.", highlighted: true },
      { ref: "Juan 15:13", text: "Nadie tiene mayor amor que éste: que uno dé su vida por sus amigos.", highlighted: true },
      { ref: "Proverbios 27:9", text: "El ungüento y el perfume alegran el corazón, y el dulce consejo del amigo alienta al hombre." },
    ],
  },
  {
    title: "La Paciencia",
    verses: [
      { ref: "Santiago 1:3-4", text: "Sabiendo que la prueba de vuestra fe produce paciencia. Y la paciencia ha de tener su obra completa, para que seáis perfectos y cabales.", highlighted: true },
      { ref: "Hebreos 10:36", text: "Porque os es necesaria la paciencia, para que habiendo hecho la voluntad de Dios, obtengáis la promesa.", highlighted: true },
      { ref: "Salmos 27:14", text: "Espera al Señor; esfuérzate y aliéntese tu corazón; sí, espera al Señor.", highlighted: true },
      { ref: "Romanos 12:12", text: "Gozosos en la esperanza, pacientes en la tribulación, constantes en la oración." },
    ],
  },
  {
    title: "El Cariño y Valentía",
    verses: [
      { ref: "Sofonías 3:17", text: "El Señor tu Dios está en medio de ti como guerrero victorioso. Se deleitará en ti con gozo, te renovará con su amor, se alegrará por ti con cánticos.", highlighted: true },
      { ref: "Josué 1:9", text: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque el Señor tu Dios estará contigo en dondequiera que vayas.", highlighted: true },
      { ref: "Salmos 46:5", text: "Dios está en medio de ella; no será removida. Dios la ayudará al clarear la mañana.", highlighted: true },
      { ref: "Proverbios 31:25", text: "Se viste de fuerza y dignidad, y se ríe del futuro." },
    ],
  },
];

export function BibleSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState<"left" | "right" | null>(null);

  const goNext = () => {
    if (currentPage >= PAGES.length - 1 || flipping) return;
    setFlipping("right");
    setTimeout(() => {
      setCurrentPage(p => p + 1);
      setFlipping(null);
    }, 400);
  };

  const goPrev = () => {
    if (currentPage <= 0 || flipping) return;
    setFlipping("left");
    setTimeout(() => {
      setCurrentPage(p => p - 1);
      setFlipping(null);
    }, 400);
  };

  const page = PAGES[currentPage];

  return (
    <section style={{ padding: "80px 20px", position: "relative" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "12px",
            color: "#d4af70",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            ✦ Palabras del Cielo ✦
          </p>
          <h2 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(42px, 10vw, 72px)",
            color: "#f8e8f0",
            textShadow: "0 0 20px rgba(212,160,192,0.5)",
            marginBottom: "16px",
          }}>
            La Biblia de Fátima
          </h2>
          <p style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: "16px",
            color: "rgba(248,232,240,0.7)",
            fontStyle: "italic",
          }}>
            Versículos marcados con amor, para un corazón hermoso
          </p>
        </div>

        {/* Book */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #1a0e2e, #110a1e)",
            borderRadius: "4px 16px 16px 4px",
            boxShadow: `
              -8px 0 30px rgba(0,0,0,0.5),
              0 0 60px rgba(212,160,192,0.15),
              inset 4px 0 20px rgba(0,0,0,0.4)
            `,
            border: "1px solid rgba(212,175,112,0.2)",
            overflow: "hidden",
            minHeight: "420px",
            transform: flipping === "right" ? "perspective(1000px) rotateY(-5deg)" :
                        flipping === "left" ? "perspective(1000px) rotateY(5deg)" : "none",
            transition: "transform 0.4s ease",
            opacity: flipping ? 0.7 : 1,
          }}
        >
          {/* Spine decoration */}
          <div style={{
            position: "absolute",
            left: 0, top: 0, bottom: 0,
            width: "24px",
            background: "linear-gradient(to right, #0a0518, #1a0e2e)",
            borderRight: "1px solid rgba(212,175,112,0.3)",
          }} />

          {/* Page content */}
          <div style={{ padding: "32px 28px 32px 48px" }}>
            {/* Chapter title */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "28px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(212,175,112,0.2)",
            }}>
              <span style={{ fontSize: "24px" }}>📖</span>
              <div>
                <p style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "10px",
                  color: "#d4af70",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}>
                  Capítulo {currentPage + 1} de {PAGES.length}
                </p>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  color: "#f8e8f0",
                  fontStyle: "italic",
                }}>
                  {page.title}
                </h3>
              </div>
            </div>

            {/* Verses */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {page.verses.map((v, i) => (
                <div
                  key={i}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "8px",
                    background: v.highlighted
                      ? "linear-gradient(135deg, rgba(212,160,192,0.18), rgba(212,175,112,0.1))"
                      : "rgba(255,255,255,0.03)",
                    borderLeft: v.highlighted ? "3px solid #d4a0c0" : "3px solid rgba(255,255,255,0.08)",
                    position: "relative",
                  }}
                >
                  {v.highlighted && (
                    <div style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: "rgba(212,160,192,0.05)",
                      borderRadius: "8px",
                      pointerEvents: "none",
                    }} />
                  )}
                  <p style={{
                    fontFamily: "'Crimson Text', serif",
                    fontSize: "clamp(14px, 3.5vw, 16px)",
                    color: v.highlighted ? "#ffd6e7" : "rgba(248,232,240,0.75)",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    marginBottom: "8px",
                  }}>
                    "{v.text}"
                  </p>
                  <p style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "11px",
                    color: "#d4af70",
                    letterSpacing: "0.1em",
                  }}>
                    — {v.ref}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Page number */}
          <div style={{
            position: "absolute",
            bottom: "16px",
            right: "24px",
            fontFamily: "'Crimson Text', serif",
            fontSize: "12px",
            color: "rgba(212,175,112,0.5)",
            fontStyle: "italic",
          }}>
            Página {currentPage + 1}
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          marginTop: "28px",
        }}>
          <button
            onClick={goPrev}
            disabled={currentPage === 0}
            style={{
              background: "linear-gradient(135deg, rgba(212,160,192,0.2), rgba(212,175,112,0.15))",
              border: "1px solid rgba(212,160,192,0.3)",
              color: currentPage === 0 ? "rgba(248,232,240,0.3)" : "#f8e8f0",
              padding: "10px 24px",
              borderRadius: "50px",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "13px",
              cursor: currentPage === 0 ? "default" : "pointer",
              transition: "all 0.2s",
            }}
          >
            ← Anterior
          </button>

          <div style={{ display: "flex", gap: "8px" }}>
            {PAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: "none",
                  background: i === currentPage
                    ? "linear-gradient(135deg, #d4a0c0, #d4af70)"
                    : "rgba(212,160,192,0.3)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.2s",
                }}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={currentPage === PAGES.length - 1}
            style={{
              background: "linear-gradient(135deg, rgba(212,160,192,0.2), rgba(212,175,112,0.15))",
              border: "1px solid rgba(212,160,192,0.3)",
              color: currentPage === PAGES.length - 1 ? "rgba(248,232,240,0.3)" : "#f8e8f0",
              padding: "10px 24px",
              borderRadius: "50px",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "13px",
              cursor: currentPage === PAGES.length - 1 ? "default" : "pointer",
              transition: "all 0.2s",
            }}
          >
            Siguiente →
          </button>
        </div>
      </div>
    </section>
  );
}
