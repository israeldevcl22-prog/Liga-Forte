import { Icon } from "./Icons";

const ITENS = [
  { icone: "i-medal", titulo: "Qualidade", texto: "Produtos selecionados e fabricados para atender às necessidades de diferentes projetos." },
  { icone: "i-shield", titulo: "Resistência", texto: "Soluções desenvolvidas pensando em durabilidade e desempenho." },
  { icone: "i-chat", titulo: "Atendimento", texto: "Atendimento direto para entender sua necessidade e indicar a solução adequada." },
  { icone: "i-doc", titulo: "Orçamento personalizado", texto: "Consulte preços, quantidades, medidas e condições diretamente com nossa equipe." },
];

export default function Qualidade() {
  return (
    <section className="sec on-navy" id="qualidade">
      <div className="wrap">
        <p className="eyebrow">Qualidade e confiança</p>
        <h2>Produtos pensados para entregar resistência e confiança</h2>
        <div className="grid g4">
          {ITENS.map((i) => (
            <article className="card" key={i.titulo}>
              <div className="ico"><Icon name={i.icone} /></div>
              <h3>{i.titulo}</h3>
              <p>{i.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
