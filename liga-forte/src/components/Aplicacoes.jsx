import WaLink from "./WaLink";
import { FOTOS } from "../data/site";

const APLICACOES = [
  {
    foto: FOTOS.postes,
    alt: "Postes de fibra de vidro com luminárias ao longo de uma via",
    titulo: "Iluminação pública e privada",
    texto: "Postes de fibra de vidro para vias, áreas externas e projetos de iluminação.",
    msg: "Olá! Gostaria de saber mais sobre produtos para iluminação",
  },
  {
    foto: FOTOS.tubos,
    alt: "Postes de fibra de vidro armazenados",
    titulo: "Instalações elétricas",
    texto: "Suporte para redes e instalações, com leveza no transporte e na instalação.",
    msg: "Olá! Gostaria de saber mais sobre produtos para instalações elétricas",
  },
  {
    foto: FOTOS.bloquetes,
    alt: "Bloquetes de concreto em pavimentação",
    titulo: "Pavimentação",
    texto: "Bloquetes e pisos com mais resistência e praticidade.",
    msg: "Olá! Gostaria de saber mais sobre bloquetes e pisos para pavimentação",
  },
  {
    foto: FOTOS.canaletas,
    alt: "Canaletas de concreto para drenagem",
    titulo: "Drenagem e acabamento",
    texto: "Canaletas, meio-fio e guias para organizar o escoamento e o acabamento da obra.",
    msg: "Olá! Gostaria de saber mais sobre canaletas, meio-fio e guias",
  },
];

export default function Aplicacoes() {
  return (
    <section className="sec" id="aplicacoes">
      <div className="wrap">
        <p className="eyebrow">Aplicações</p>
        <h2>Onde usar nossos produtos</h2>
        <p className="lead">
          Do poste na rua ao piso da calçada. Toque em uma aplicação e fale com a equipe sobre o seu caso.
        </p>
        <div className="tiles">
          {APLICACOES.map((a) => (
            <WaLink className="tile" msg={a.msg} key={a.titulo}>
              <img src={a.foto} alt={a.alt} loading="lazy" />
              <div>
                <b>{a.titulo}</b>
                <span>{a.texto}</span>
                <i>Consultar</i>
              </div>
            </WaLink>
          ))}
        </div>
      </div>
    </section>
  );
}
