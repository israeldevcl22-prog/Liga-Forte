import { Icon } from "./Icons";
import WaLink from "./WaLink";
import { FOTOS, PRODUTOS, wa } from "../data/site";

export default function Concreto() {
  return (
    <section className="sec on-tint" id="concreto">
      <div className="wrap">
        <p className="eyebrow">Concreto e cimento</p>
        <h2>Artefatos de Concreto para sua Obra</h2>
        <p className="lead">
          Além dos postes de fibra de vidro, trabalhamos com <b>artefatos de concreto/cimento</b>, oferecendo soluções
          para diferentes necessidades de obras, instalações e projetos. Consulte também produtos de concreto e
          pré-moldados de concreto.
        </p>

        <div className="grid g3">
          {PRODUTOS.map((p) => (
            <article className="card prod" key={p.nome}>
              <div className="pv">
                <img src={FOTOS[p.foto]} alt={p.nome} loading="lazy" />
              </div>
              <h3>{p.nome}</h3>
              <p>{p.desc}</p>
              <a
                className="btn-line"
                href={wa(`Olá! Gostaria de consultar disponibilidade e orçamento de: ${p.nome}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar disponibilidade
              </a>
            </article>
          ))}
        </div>

        <div className="cta-strip">
          <p>
            Precisa de artefatos de concreto para sua obra? Entre em contato e consulte disponibilidade, medidas e
            condições comerciais.
          </p>
          <WaLink className="btn btn-wa" msg="Olá! Preciso de artefatos de concreto e gostaria de solicitar um orçamento">
            <Icon name="i-wa" />
            Solicitar orçamento
          </WaLink>
        </div>
      </div>
    </section>
  );
}
