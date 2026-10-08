import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";
import { wa } from "../data/site";
import { prefersReducedMotion } from "../hooks/motion";

const ESCALA = 22; // pixels por metro no desenho
const CHAO = 390; // linha do solo no desenho
const INICIAL = 9;

const APLICACOES = [
  { rotulo: "Iluminação", app: "iluminação", tipo: "luz" },
  { rotulo: "Rede elétrica", app: "rede elétrica", tipo: "arm" },
];

const formatar = (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/** Visualizador: compara a altura do poste com uma pessoa e com casas, e envia a altura escolhida no WhatsApp. */
export default function Altura() {
  const [alvo, setAlvo] = useState(INICIAL);
  const [app, setApp] = useState(APLICACOES[0]);

  const haste = useRef(null);
  const topo = useRef(null);
  const cota = useRef(null);
  const atual = useRef(INICIAL);
  const quadro = useRef(0);

  /* desenha o poste com a altura (em metros) informada */
  const desenhar = (v) => {
    const y = CHAO - v * ESCALA;
    if (haste.current) {
      haste.current.setAttribute("y", y);
      haste.current.setAttribute("height", v * ESCALA);
    }
    if (topo.current) topo.current.setAttribute("transform", `translate(0 ${y})`);
    if (cota.current) cota.current.setAttribute("y1", y);
  };

  /* anima suavemente até a altura escolhida */
  useEffect(() => {
    cancelAnimationFrame(quadro.current);
    if (prefersReducedMotion()) {
      atual.current = alvo;
      desenhar(alvo);
      return undefined;
    }
    const passo = () => {
      atual.current += (alvo - atual.current) * 0.2;
      if (Math.abs(alvo - atual.current) < 0.005) atual.current = alvo;
      desenhar(atual.current);
      if (atual.current !== alvo) quadro.current = requestAnimationFrame(passo);
    };
    quadro.current = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(quadro.current);
  }, [alvo]);

  const mensagem = `Olá! Gostaria de um orçamento de poste de fibra de vidro com cerca de ${formatar(alvo)} m de altura, para ${app.app}.`;
  const y0 = CHAO - INICIAL * ESCALA;

  return (
    <section className="sec" id="altura">
      <div className="wrap tool">
        <div>
          <p className="eyebrow">Escolha a altura</p>
          <h2>Veja o tamanho do poste ao lado de uma casa</h2>
          <p className="lead">
            Arraste e compare. Depois envie a altura de referência para a nossa equipe e receba orientação sobre as medidas
            disponíveis.
          </p>

          <div className="big">
            <span id="h-out">{formatar(alvo)}</span>
            <small>m</small>
          </div>
          <label htmlFor="h-range">Altura de referência</label>
          <input
            id="h-range"
            type="range"
            min="5"
            max="14"
            step="0.5"
            value={alvo}
            aria-describedby="h-out"
            onChange={(e) => setAlvo(parseFloat(e.target.value))}
          />

          <div className="chips" role="group" aria-label="Aplicação">
            {APLICACOES.map((a) => (
              <button
                type="button"
                key={a.app}
                className="chip"
                aria-pressed={app.app === a.app}
                onClick={() => setApp(a)}
              >
                {a.rotulo}
              </button>
            ))}
          </div>

          <a className="btn btn-wa" href={wa(mensagem)} target="_blank" rel="noopener noreferrer">
            <Icon name="i-wa" />
            Pedir orçamento com esta altura
          </a>
        </div>

        <div className="scene">
          <svg
            viewBox="0 0 520 420"
            role="img"
            aria-label="Escala comparando a altura do poste com uma pessoa, uma casa térrea e um sobrado"
          >
            <defs>
              <linearGradient id="gPole2" x1="0" x2="1">
                <stop offset="0" stopColor="#C3CCD8" />
                <stop offset="1" stopColor="#6B7A8F" />
              </linearGradient>
            </defs>

            <g className="sc-grid">
              {[2, 4, 6, 8, 10, 12, 14].map((m) => (
                <g key={m}>
                  <line x1="44" x2="514" y1={CHAO - m * ESCALA} y2={CHAO - m * ESCALA} />
                  <text x="6" y={CHAO - m * ESCALA + 4}>{m} m</text>
                </g>
              ))}
            </g>

            <g className="sc-ref">
              <rect x="330" y="324" width="86" height="66" />
              <polygon points="322,324 373,296 424,324" />
              <rect x="432" y="258" width="80" height="132" />
              <polygon points="424,258 472,226 520,258" />
              <rect x="104" y="358" width="12" height="32" rx="4" />
              <circle cx="110" cy="352" r="6" />
            </g>

            <line className="sc-ground" x1="0" x2="520" y1={CHAO} y2={CHAO} />
            <g className="sc-lab">
              <text x="78" y="410">Pessoa 1,7 m</text>
              <text x="326" y="410">Casa ≈ 3 m</text>
              <text x="436" y="410">Sobrado ≈ 6 m</text>
            </g>

            <line className="sc-dim" ref={cota} x1="205" x2="205" y1={y0} y2={CHAO} />
            <rect ref={haste} x="225" y={y0} width="10" height={INICIAL * ESCALA} fill="url(#gPole2)" />

            <g ref={topo} transform={`translate(0 ${y0})`}>
              <g style={{ opacity: app.tipo === "luz" ? 1 : 0, transition: "opacity .3s" }}>
                <path d="M230 0 Q230 -22 252 -22 H282" fill="none" stroke="#6B7A8F" strokeWidth="4" strokeLinecap="round" />
                <rect x="272" y="-28" width="36" height="10" rx="3" fill="#8794A6" />
                <polygon points="276,-18 304,-18 322,26 258,26" fill="#FFC857" opacity=".28" />
              </g>
              <g style={{ opacity: app.tipo === "arm" ? 1 : 0, transition: "opacity .3s" }}>
                <rect x="188" y="12" width="84" height="8" fill="#0077FF" />
                <g fill="#8794A6">
                  <rect x="192" y="2" width="5" height="10" />
                  <rect x="212" y="2" width="5" height="10" />
                  <rect x="243" y="2" width="5" height="10" />
                  <rect x="263" y="2" width="5" height="10" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
