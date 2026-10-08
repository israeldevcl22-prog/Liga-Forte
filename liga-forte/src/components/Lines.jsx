import { Icon } from "./Icons";
import WaLink from "./WaLink";
import { FOTOS } from "../data/site";

const LINHAS = [
  {
    chave: "fibra",
    foto: FOTOS.tubos,
    alt: "Postes de fibra de vidro em diversos tamanhos",
    selo: "Fibra de vidro",
    titulo: "Postes de fibra de vidro",
    texto: "Leves, resistentes e com longa vida útil quando bem especificados. Indicados para iluminação e instalações elétricas.",
    itens: [
      "Fáceis de transportar e instalar",
      "Não sofrem corrosão",
      "Baixa necessidade de manutenção",
      "Diversos tamanhos e especificações",
    ],
    msg: "Olá! Gostaria de solicitar um orçamento de postes de fibra de vidro",
    botao: "Orçamento de postes",
    link: "#postes",
    linkTexto: "Ver detalhes →",
  },
  {
    chave: "concreto",
    foto: FOTOS.outros,
    alt: "Artefatos de concreto variados",
    selo: "Concreto",
    titulo: "Artefatos de concreto",
    texto: "Soluções sob medida para o seu projeto, do acabamento à drenagem e à pavimentação.",
    itens: [
      "Meio-fio e guias",
      "Bloquetes e pisos",
      "Canaletas para drenagem",
      "Peças pré-moldadas e outros artefatos",
    ],
    msg: "Olá! Gostaria de solicitar um orçamento de artefatos de concreto",
    botao: "Orçamento de concreto",
    link: "#concreto",
    linkTexto: "Ver produtos →",
  },
];

export default function Lines() {
  return (
    <section className="sec on-tint" id="linhas">
      <div className="wrap">
        <p className="eyebrow">O que fabricamos e vendemos</p>
        <h2>Duas linhas de produtos para a sua obra</h2>
        <p className="lead">
          Escolha a linha e fale com a equipe. Informamos disponibilidade, medidas e condições comerciais pelo WhatsApp.
        </p>
        <div className="lines">
          {LINHAS.map((l) => (
            <article className="line" key={l.chave}>
              <div className="ph">
                <img src={l.foto} alt={l.alt} loading="lazy" />
                <em>{l.selo}</em>
              </div>
              <div className="bd">
                <h3>{l.titulo}</h3>
                <p>{l.texto}</p>
                <ul>
                  {l.itens.map((i) => (
                    <li key={i}>
                      <Icon name="i-check" />
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="acts">
                  <WaLink className="btn btn-wa" msg={l.msg}>
                    <Icon name="i-wa" />
                    {l.botao}
                  </WaLink>
                  <a className="link-arrow" href={l.link}>{l.linkTexto}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
