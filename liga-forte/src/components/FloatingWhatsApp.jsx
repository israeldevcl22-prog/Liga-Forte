import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import WaLink from "./WaLink";
import logoSimbolo from "../assets/logo-simbolo.png";

const OPCOES = [
  ["Postes de fibra de vidro", "Olá! Gostaria de um orçamento de postes de fibra de vidro"],
  ["Artefatos de concreto", "Olá! Gostaria de um orçamento de artefatos de concreto"],
  ["Quero orientação para o meu projeto", "Olá! Preciso de orientação para o meu projeto"],
];

/** Botão fixo "Fale conosco" e o balão de atendimento que aparece depois de alguns segundos. */
export default function FloatingWhatsApp() {
  const [balao, setBalao] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBalao(true), 7000);
    const aoTecla = (e) => {
      if (e.key === "Escape") setBalao(false);
    };
    document.addEventListener("keydown", aoTecla);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", aoTecla);
    };
  }, []);

  return (
    <>
      <div className={`chatpop${balao ? " show" : ""}`} role="dialog" aria-label="Atendimento pelo WhatsApp">
        <button className="pop-x" type="button" aria-label="Fechar" onClick={() => setBalao(false)}>
          ×
        </button>
        <div className="pop-h">
          <img src={logoSimbolo} alt="" width="34" height="38" />
          <div>
            <b>Liga Forte</b>
            <span>Atendimento direto pelo WhatsApp</span>
          </div>
        </div>
        <p className="pop-b">Olá! Sobre o que você precisa de orçamento?</p>
        {OPCOES.map(([rotulo, msg]) => (
          <WaLink className="pop-o" msg={msg} key={rotulo}>
            {rotulo}
          </WaLink>
        ))}
      </div>

      <WaLink className="float" msg="Olá! Vi o site e gostaria de saber mais sobre os produtos" aria-label="Fale conosco pelo WhatsApp">
        <Icon name="i-wa" />
        Fale conosco
      </WaLink>
    </>
  );
}
