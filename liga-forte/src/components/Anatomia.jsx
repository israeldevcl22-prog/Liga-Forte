import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../hooks/motion";

const PARTES = [
  { titulo: "Topo e luminária", texto: "No topo são fixados os braços e as luminárias dos projetos de iluminação.", ponto: [292, 48], zona: { x: 150, y: 28, w: 150, h: 54 } },
  { titulo: "Cruzeta e isoladores", texto: "Nas redes e instalações elétricas, a cruzeta sustenta os cabos e os isoladores.", ponto: [270, 123], zona: { x: 86, y: 96, w: 188, h: 46 } },
  { titulo: "Corpo do poste", texto: "Feito em fibra de vidro: leve, resistente à corrosão e com baixa necessidade de manutenção.", ponto: [180, 262], zona: { x: 158, y: 152, w: 44, h: 220 } },
  { titulo: "Engaste", texto: "Trecho enterrado que dá estabilidade ao conjunto. A profundidade e a fundação seguem a especificação do projeto.", ponto: [180, 436], zona: { x: 146, y: 388, w: 68, h: 96 } },
];

export default function Anatomia() {
  const [ativo, setAtivo] = useState(0);
  const automatico = useRef(!prefersReducedMotion());

  /* passa de uma parte para a outra até a pessoa interagir */
  useEffect(() => {
    const id = setInterval(() => {
      if (automatico.current) setAtivo((v) => (v + 1) % PARTES.length);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  const escolher = (i) => {
    automatico.current = false;
    setAtivo(i);
  };

  return (
    <section className="sec on-deep" id="anatomia">
      <div className="wrap">
        <p className="eyebrow">Anatomia</p>
        <h2>Conheça as partes de um poste de fibra de vidro</h2>
        <p className="lead">Passe o mouse ou toque nos pontos para ver o que cada parte faz no seu projeto.</p>

        <div className="anat">
          <svg
            viewBox="0 0 360 520"
            role="img"
            aria-label="Poste de fibra de vidro com quatro pontos: topo e luminária, cruzeta, corpo do poste e engaste"
          >
            <defs>
              <linearGradient id="gPoleA" x1="0" x2="1">
                <stop offset="0" stopColor="#FFFFFF" />
                <stop offset=".55" stopColor="#C9D0DB" />
                <stop offset="1" stopColor="#8793A4" />
              </linearGradient>
              <pattern id="hatchA" width="9" height="9" patternUnits="userSpaceOnUse">
                <path d="M0 9L9 0" stroke="#5F82A6" strokeWidth="1" opacity=".55" />
              </pattern>
            </defs>
            <rect x="0" y="380" width="360" height="110" fill="url(#hatchA)" />
            <line x1="0" y1="380" x2="360" y2="380" stroke="#7FA7D1" strokeWidth="2" />

            {PARTES.map((p, i) => (
              <rect
                key={p.titulo}
                className={`zone${ativo === i ? " on" : ""}`}
                x={p.zona.x}
                y={p.zona.y}
                width={p.zona.w}
                height={p.zona.h}
                rx="8"
              />
            ))}

            <path d="M180 72 Q180 48 208 48 H250" fill="none" stroke="#E8EEF5" strokeWidth="5" strokeLinecap="round" />
            <rect x="238" y="42" width="44" height="13" rx="3" fill="#FFFFFF" />
            <polygon points="173,70 187,70 194,484 166,484" fill="url(#gPoleA)" />
            <rect x="160" y="380" width="40" height="104" fill="#071C30" opacity=".5" />
            <rect x="100" y="118" width="160" height="10" rx="1" fill="#0077FF" />
            <g fill="#B7BCC6">
              <rect x="103" y="104" width="6" height="14" />
              <rect x="133" y="104" width="6" height="14" />
              <rect x="221" y="104" width="6" height="14" />
              <rect x="251" y="104" width="6" height="14" />
            </g>

            {PARTES.map((p, i) => (
              <g
                key={p.titulo}
                className="hot"
                transform={`translate(${p.ponto[0]} ${p.ponto[1]})`}
                tabIndex={0}
                role="button"
                aria-label={p.titulo}
                onMouseEnter={() => escolher(i)}
                onFocus={() => escolher(i)}
                onClick={() => escolher(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    escolher(i);
                  }
                }}
              >
                <circle className="ring" r="12" />
                <circle className="dot" r="9" />
              </g>
            ))}
          </svg>

          <div className="parts">
            {PARTES.map((p, i) => (
              <button
                type="button"
                key={p.titulo}
                className={`part${ativo === i ? " on" : ""}`}
                onMouseEnter={() => escolher(i)}
                onFocus={() => escolher(i)}
                onClick={() => escolher(i)}
              >
                <b>{p.titulo}</b>
                <span>{p.texto}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
