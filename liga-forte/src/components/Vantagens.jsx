import { Icon } from "./Icons";
import WaLink from "./WaLink";

const VANTAGENS = [
  "Leveza",
  "Resistência",
  "Durabilidade",
  "Resistência à corrosão",
  "Facilidade de transporte",
  "Praticidade na instalação",
  "Baixa necessidade de manutenção",
  "Excelente solução para diferentes aplicações",
];

const COMPARACAO = [
  ["Peso", "Leve", "Em geral, bem mais pesado"],
  ["Corrosão", "Não sofre corrosão", "A armadura de aço pode corroer"],
  ["Transporte", "Mais prático", "Exige mais esforço e equipamento"],
  ["Instalação", "Manuseio facilitado", "Costuma exigir mais equipamento"],
  ["Manutenção", "Tende a ser menor", "Pode exigir reparos com o tempo"],
];

const GOTAS = Array.from({ length: 28 }, (_, i) => ({
  x: 8 + i * 18.5,
  atraso: -((i * 0.37) % 1.4),
  duracao: 0.9 + (i % 5) * 0.12,
}));

/** Ilustração: chuva sobre um poste de concreto (fissura e mancha) e um de fibra de vidro (limpo). */
function Chuva() {
  return (
    <figure className="rain">
      <svg
        viewBox="0 0 520 300"
        role="img"
        aria-label="Ilustração de chuva sobre um poste de concreto, que fissura e mancha, e um poste de fibra de vidro, que permanece limpo"
      >
        <defs>
          <linearGradient id="gPole3" x1="0" x2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#9AA6B6" />
          </linearGradient>
        </defs>
        <rect x="0" y="250" width="520" height="50" fill="#0A2238" />
        <line x1="0" y1="250" x2="520" y2="250" stroke="#4F7396" strokeWidth="2" />

        <rect x="112" y="40" width="44" height="210" fill="#838C97" />
        <rect x="112" y="40" width="12" height="210" fill="#9AA3AE" opacity=".6" />
        <g stroke="#707983" strokeWidth="1" opacity=".7">
          <line x1="112" y1="80" x2="156" y2="80" />
          <line x1="112" y1="130" x2="156" y2="130" />
          <line x1="112" y1="180" x2="156" y2="180" />
          <line x1="112" y1="225" x2="156" y2="225" />
        </g>
        <path className="crack" d="M118 96 l12 14 -7 16 12 18 -4 14" style={{ animationDelay: "0s" }} />
        <path className="crack" d="M150 172 l-10 12 6 14 -8 16" style={{ animationDelay: "1.4s" }} />
        <ellipse className="rust" cx="130" cy="150" rx="9" ry="14" style={{ animationDelay: "1s" }} />
        <ellipse className="rust" cx="142" cy="214" rx="8" ry="11" style={{ animationDelay: "2.4s" }} />

        <rect x="368" y="40" width="36" height="210" fill="url(#gPole3)" />
        <circle className="bead" cx="378" cy="54" r="3.2" style={{ animationDelay: "0s" }} />
        <circle className="bead" cx="394" cy="60" r="2.6" style={{ animationDelay: ".9s" }} />
        <circle className="bead" cx="386" cy="50" r="3" style={{ animationDelay: "1.7s" }} />

        <g>
          {GOTAS.map((g, i) => (
            <line
              key={i}
              className="drop"
              x1={g.x}
              x2={g.x - 4}
              y1="0"
              y2="18"
              style={{ animationDelay: `${g.atraso}s`, animationDuration: `${g.duracao}s` }}
            />
          ))}
        </g>

        <g fontFamily="Montserrat, Arial, sans-serif" fontWeight="800" fontSize="13" letterSpacing="1.6" textAnchor="middle">
          <text x="134" y="278" fill="#C3CCD8">CONCRETO</text>
          <text x="386" y="278" fill="#FFFFFF">FIBRA DE VIDRO</text>
        </g>
        <g fontFamily="Source Sans 3, Arial, sans-serif" fontWeight="600" fontSize="14" textAnchor="middle">
          <text x="134" y="24" fill="#F2A36B">Pode fissurar e corroer a armadura</text>
          <text x="386" y="24" fill="#7FE0A8">Não sofre corrosão</text>
        </g>
      </svg>
      <figcaption>
        Ilustração conceitual: com a umidade, o concreto pode fissurar e a armadura de aço pode corroer. A fibra de vidro
        não sofre corrosão.
      </figcaption>
    </figure>
  );
}

export default function Vantagens() {
  return (
    <section className="sec on-tint" id="vantagens">
      <div className="wrap why">
        <div>
          <p className="eyebrow">Vantagens</p>
          <h2>Por que escolher postes de fibra de vidro?</h2>
          <ul className="checks">
            {VANTAGENS.map((v) => (
              <li key={v}>
                <Icon name="i-check" />
                {v}
              </li>
            ))}
          </ul>
          <p className="closing">Invista em uma solução moderna, resistente e preparada para durar.</p>
          <div className="cta-row">
            <WaLink className="btn btn-wa" msg="Olá! Gostaria de pedir um orçamento de postes de fibra de vidro">
              <Icon name="i-wa" />
              Pedir orçamento
            </WaLink>
          </div>
        </div>

        <div className="stack">
          <Chuva />
          <div className="cmp">
            <table>
              <thead>
                <tr>
                  <th scope="col">Critério</th>
                  <th scope="col">Fibra de vidro</th>
                  <th scope="col">Poste de concreto</th>
                </tr>
              </thead>
              <tbody>
                {COMPARACAO.map(([criterio, fibra, concreto]) => (
                  <tr key={criterio}>
                    <th scope="row">{criterio}</th>
                    <td>{fibra}</td>
                    <td>{concreto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <small>
              Comparação geral com postes de concreto convencionais. O resultado varia conforme a especificação, o
              fabricante e o ambiente de uso.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
