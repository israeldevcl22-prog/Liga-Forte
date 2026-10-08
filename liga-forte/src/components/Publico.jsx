import { Icon } from "./Icons";
import WaLink from "./WaLink";

const PUBLICO = [
  "Construtoras",
  "Eletricistas",
  "Instaladores",
  "Engenheiros",
  "Empresas",
  "Obras residenciais",
  "Obras comerciais",
  "Obras industriais",
  "Projetos elétricos",
  "Compradores e revendedores",
];

export default function Publico() {
  return (
    <section className="sec on-tint" id="publico">
      <div className="wrap">
        <p className="eyebrow">Para quem</p>
        <h2>Soluções para diferentes necessidades</h2>
        <ul className="tags">
          {PUBLICO.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className="cta-row">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.15rem",
              maxWidth: "34ch",
              textWrap: "balance",
            }}
          >
            Fale com nossa equipe e descubra a melhor solução para o seu projeto.
          </p>
          <WaLink className="btn btn-wa" msg="Olá! Gostaria de falar com a equipe sobre o meu projeto">
            <Icon name="i-wa" />
            Chamar no WhatsApp
          </WaLink>
        </div>
      </div>
    </section>
  );
}
