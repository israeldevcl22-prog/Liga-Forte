import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";
import WaLink from "./WaLink";
import { FOTOS } from "../data/site";
import { prefersReducedMotion } from "../hooks/motion";

const PALAVRAS = [
  "postes de fibra de vidro",
  "meio-fio",
  "bloquetes e pisos",
  "canaletas",
  "guias",
  "peças pré-moldadas",
];

export default function Hero() {
  const [indice, setIndice] = useState(0);
  const [saindo, setSaindo] = useState(false);
  const fotos = useRef(null);

  /* frase que troca a cada instante */
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let t2;
    const t1 = setInterval(() => {
      setSaindo(true);
      t2 = setTimeout(() => {
        setIndice((i) => (i + 1) % PALAVRAS.length);
        setSaindo(false);
      }, 350);
    }, 2600);
    return () => {
      clearInterval(t1);
      clearTimeout(t2);
    };
  }, []);

  /* leve paralaxe nas fotos ao rolar */
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let ocupado = false;
    const mover = () => {
      ocupado = false;
      if (fotos.current) fotos.current.style.transform = `translateY(${Math.min(window.scrollY || 0, 700) * 0.08}px)`;
    };
    const aoRolar = () => {
      if (ocupado) return;
      ocupado = true;
      requestAnimationFrame(mover);
    };
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <div>
          <p className="eyebrow">Fabricação e comercialização</p>
          <h1>
            Postes de Fibra de Vidro e Artefatos de Concreto com <em>Qualidade e Alta Durabilidade</em>
          </h1>
          <p className="sub">
            Soluções resistentes, leves e confiáveis para instalações elétricas, obras e projetos. Conte com produtos de
            qualidade para sua empresa, obra ou projeto.
          </p>
          <p className="rot">
            Peça seu orçamento de <b className={saindo ? "out" : undefined}>{PALAVRAS[indice]}</b>
          </p>
          <div className="cta-row">
            <WaLink className="btn btn-wa btn-lg" msg="Olá! Gostaria de solicitar um orçamento">
              <Icon name="i-wa" />
              Solicitar orçamento no WhatsApp
            </WaLink>
            <a className="btn btn-ghost btn-lg" href="#postes">Conhecer nossos produtos</a>
          </div>
          <ul className="perks">
            <li><span className="pi"><Icon name="i-feather" /></span>Leves e fáceis de transportar</li>
            <li><span className="pi"><Icon name="i-drop" /></span>Não sofrem corrosão</li>
            <li><span className="pi"><Icon name="i-clock" /></span>Pensados para durar</li>
            <li><span className="pi"><Icon name="i-chat" /></span>Atendimento direto no WhatsApp</li>
          </ul>
          <p className="trust">Atendimento rápido • Orçamento personalizado • Produtos de qualidade</p>
        </div>

        <figure className="shots" ref={fotos}>
          <div className="shot shot-a">
            <img
              src={FOTOS.postes}
              alt="Fileira de postes de fibra de vidro com luminárias ao longo de uma via"
              width="395"
              height="573"
            />
          </div>
          <div className="shot shot-b">
            <img src={FOTOS.pre} alt="Peças pré-moldadas de concreto" width="328" height="191" />
          </div>
          <div className="dimv" aria-hidden="true">
            <span>Altura conforme o projeto</span>
          </div>
          <div className="tag">
            <b>Postes de fibra de vidro</b>
            Diversos tamanhos e especificações
          </div>
        </figure>
      </div>
    </section>
  );
}
