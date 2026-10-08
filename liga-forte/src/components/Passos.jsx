import { Icon } from "./Icons";
import WaLink from "./WaLink";

const PASSOS = [
  { titulo: "Chame no WhatsApp", texto: "Clique em qualquer botão do site e fale direto com a nossa equipe." },
  { titulo: "Informe sua necessidade", texto: "Diga o produto, a quantidade e, se possível, as medidas ou as especificações do projeto." },
  { titulo: "Receba seu orçamento", texto: "Nossa equipe orienta você e envia um orçamento personalizado." },
];

const EM_MAOS = [
  "Produto desejado",
  "Quantidade",
  "Altura e esforço no topo (daN), para postes",
  "Medidas, para artefatos de concreto",
  "Cidade ou local da obra",
];

export default function Passos() {
  return (
    <section className="sec" id="passos">
      <div className="wrap">
        <p className="eyebrow">Como funciona</p>
        <h2>Do primeiro contato ao orçamento em três passos</h2>

        <div className="steps">
          {PASSOS.map((p, i) => (
            <article className="card" key={p.titulo}>
              <div className="n">{i + 1}</div>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </article>
          ))}
        </div>

        <div className="need">
          <b>Tenha em mãos para agilizar o seu orçamento</b>
          <ul>
            {EM_MAOS.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>

        <div className="cta-row">
          <WaLink className="btn btn-wa btn-lg" msg="Olá! Quero começar meu orçamento">
            <Icon name="i-wa" />
            Começar pelo WhatsApp
          </WaLink>
        </div>
      </div>
    </section>
  );
}
