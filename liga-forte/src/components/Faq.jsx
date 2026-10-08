const PERGUNTAS = [
  {
    p: "Qual a durabilidade dos postes de fibra de vidro?",
    r: "A durabilidade depende das condições de uso, instalação, exposição ambiental, carga e especificação do produto. Quando corretamente especificados e instalados, podem apresentar longa vida útil, podendo chegar a várias décadas.",
  },
  {
    p: "Os postes de fibra de vidro são resistentes?",
    r: "Sim. São desenvolvidos para oferecer resistência mecânica e desempenho adequado às aplicações para as quais são dimensionados.",
  },
  {
    p: "Os postes de fibra de vidro enferrujam?",
    r: "Não. A fibra de vidro não sofre corrosão da mesma forma que materiais metálicos.",
  },
  {
    p: "Os postes de fibra são mais leves?",
    r: "Sim. Uma das principais vantagens é o menor peso em comparação com determinadas soluções tradicionais, facilitando transporte e instalação.",
  },
  {
    p: "Vocês trabalham com artefatos de concreto?",
    r: "Sim. Trabalhamos com artefatos de concreto/cimento. Consulte pelo WhatsApp a disponibilidade, as medidas e as condições comerciais de cada item.",
  },
  {
    p: "Quais informações preciso enviar para pedir um orçamento?",
    r: "Para postes, informe a altura, o esforço no topo (daN), a quantidade e a aplicação, como iluminação ou rede elétrica. Para artefatos de concreto, informe o produto, as medidas e a quantidade. Nos dois casos, diga a cidade ou o local da obra.",
  },
  {
    p: "Como solicitar um orçamento?",
    r: "Basta clicar em qualquer botão de WhatsApp do site e enviar sua necessidade para nossa equipe. Se quiser saber o preço de um poste de fibra de vidro, informe altura, esforço no topo e quantidade.",
  },
];

export default function Faq() {
  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <p className="eyebrow">Perguntas frequentes</p>
        <h2>Tire suas dúvidas antes de pedir o orçamento</h2>
        <div className="faq">
          {PERGUNTAS.map((q) => (
            <details key={q.p}>
              <summary>{q.p}</summary>
              <p>{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
