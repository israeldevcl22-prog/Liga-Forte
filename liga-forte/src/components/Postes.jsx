import { Icon } from "./Icons";
import WaLink from "./WaLink";
import { FOTOS } from "../data/site";

const BENEFICIOS = [
  { icone: "i-feather", titulo: "Leveza", texto: "Mais leves que muitas alternativas tradicionais, facilitando o transporte, manuseio e instalação." },
  { icone: "i-bolt", titulo: "Alta resistência", texto: "Excelente resistência mecânica e capacidade de suportar diferentes condições de utilização quando corretamente dimensionados." },
  { icone: "i-drop", titulo: "Resistência à corrosão", texto: "A fibra de vidro não sofre corrosão como materiais metálicos, sendo uma excelente opção para ambientes sujeitos à umidade." },
  { icone: "i-clock", titulo: "Longa vida útil", texto: "Material desenvolvido para proporcionar durabilidade e desempenho durante muitos anos." },
  { icone: "i-truck", titulo: "Praticidade na instalação", texto: "O menor peso pode facilitar o transporte e a instalação, contribuindo para uma operação mais prática." },
  { icone: "i-shield", titulo: "Baixa manutenção", texto: "Por não apresentar os mesmos problemas de corrosão encontrados em determinados materiais metálicos, pode proporcionar menor necessidade de manutenção." },
];

export default function Postes() {
  return (
    <section className="sec" id="postes">
      <div className="wrap">
        <p className="eyebrow">Postes de fibra de vidro</p>
        <h2>Postes de Fibra de Vidro: Tecnologia, Resistência e Durabilidade</h2>

        <div className="split">
          <div>
            <p className="lead">
              Os postes de fibra de vidro são uma excelente alternativa para projetos que buscam{" "}
              <b>leveza, resistência, praticidade e longa vida útil</b>.
            </p>
            <p className="lead">
              Fabricados com materiais de alta resistência, apresentam diversas vantagens em relação aos postes
              convencionais, o que os torna cada vez mais interessantes em diferentes tipos de instalações, do poste de
              fibra de vidro para iluminação ao poste para instalação elétrica.
            </p>
            <p className="lead">
              Quando corretamente especificados, instalados e mantidos de acordo com as condições de uso e as
              recomendações do fabricante, podem apresentar{" "}
              <b>longa vida útil, podendo chegar a várias décadas</b>.
            </p>
          </div>
          <figure className="photo">
            <img
              src={FOTOS.tubos}
              alt="Postes de fibra de vidro armazenados em diversos tamanhos"
              width="645"
              height="397"
              loading="lazy"
            />
            <figcaption>Postes de fibra de vidro em diversos tamanhos e especificações.</figcaption>
          </figure>
        </div>

        <div className="grid g3">
          {BENEFICIOS.map((b) => (
            <article className="card" key={b.titulo}>
              <div className="ico"><Icon name={b.icone} /></div>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </article>
          ))}
        </div>
        <p className="note">
          A vida útil depende das condições de instalação, da exposição ambiental, da carga, da manutenção e da
          especificação do produto.
        </p>

        <div className="cta-strip">
          <p>Quer saber qual poste de fibra é ideal para o seu projeto?</p>
          <WaLink className="btn btn-wa" msg="Olá! Gostaria de falar com um especialista sobre postes de fibra de vidro">
            <Icon name="i-wa" />
            Falar com um especialista no WhatsApp
          </WaLink>
        </div>
      </div>
    </section>
  );
}
