import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";
import WaLink from "./WaLink";
import logoSimbolo from "../assets/logo-simbolo.png";
import { MAPA_MENU, PHONE } from "../data/site";

const MSG_ORCAMENTO = "Olá! Gostaria de solicitar um orçamento";

const CONCRETO = ["Meio-fio", "Bloquetes / pisos", "Canaletas", "Guias", "Peças pré-moldadas", "Outros artefatos"];

export default function Header() {
  const [aberto, setAberto] = useState(false); // menu do celular
  const [produtos, setProdutos] = useState(false); // submenu "Produtos"
  const [ativo, setAtivo] = useState("inicio");
  const [rolou, setRolou] = useState(false);
  const ddRef = useRef(null);

  /* seção ativa e sombra do cabeçalho */
  useEffect(() => {
    const secoes = Array.from(document.querySelectorAll("section[id]")).filter((s) => MAPA_MENU[s.id]);
    let ocupado = false;
    const verificar = () => {
      ocupado = false;
      let atual = "inicio";
      secoes.forEach((s) => {
        if (s.getBoundingClientRect().top <= 150) atual = s.id;
      });
      setAtivo(MAPA_MENU[atual]);
      setRolou((window.scrollY || 0) > 24);
    };
    const aoRolar = () => {
      if (ocupado) return;
      ocupado = true;
      requestAnimationFrame(verificar);
    };
    window.addEventListener("scroll", aoRolar, { passive: true });
    verificar();
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  /* trava a rolagem enquanto o menu do celular está aberto */
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", aberto);
    return () => document.documentElement.classList.remove("menu-open");
  }, [aberto]);

  /* Esc fecha tudo, clique fora fecha o submenu, tela larga fecha o menu do celular */
  useEffect(() => {
    const aoTecla = (e) => {
      if (e.key === "Escape") {
        setAberto(false);
        setProdutos(false);
      }
    };
    const aoClicar = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setProdutos(false);
    };
    const aoRedimensionar = () => {
      if (window.innerWidth > 960) setAberto(false);
    };
    document.addEventListener("keydown", aoTecla);
    document.addEventListener("click", aoClicar);
    window.addEventListener("resize", aoRedimensionar);
    return () => {
      document.removeEventListener("keydown", aoTecla);
      document.removeEventListener("click", aoClicar);
      window.removeEventListener("resize", aoRedimensionar);
    };
  }, []);

  const fechar = () => setAberto(false);
  const on = (chave) => (ativo === chave ? "on" : undefined);

  return (
    <>
      <div className="util">
        <div className="wrap">
          <span className="hide-s">Postes de fibra de vidro e artefatos de concreto</span>
          <WaLink msg="Olá! Gostaria de falar com a equipe">
            <Icon name="i-wa" />
            WhatsApp {PHONE}
          </WaLink>
        </div>
      </div>

      <header className={`top${rolou ? " scrolled" : ""}`} id="topbar">
        <div className="wrap">
          <a className="brand" href="#inicio" aria-label="Liga Forte, início">
            <img src={logoSimbolo} alt="" width="40" height="44" />
            <b>
              Liga
              <br />
              Forte<sup>®</sup>
            </b>
          </a>

          <nav className="nav" aria-label="Principal">
            <a href="#inicio" className={on("inicio")}>Início</a>

            <div className={`dd${produtos ? " open" : ""}`} ref={ddRef}>
              <button
                type="button"
                className={`ddb ${on("produtos") || ""}`.trim()}
                aria-expanded={produtos}
                aria-haspopup="true"
                onClick={() => setProdutos((v) => !v)}
              >
                Produtos
                <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="ddm">
                <div>
                  <h4>Fibra de vidro</h4>
                  <a href="#postes" onClick={() => setProdutos(false)}>Postes de fibra de vidro</a>
                  <a href="#anatomia" onClick={() => setProdutos(false)}>Anatomia do poste</a>
                  <a href="#altura" onClick={() => setProdutos(false)}>Escolha a altura</a>
                  <a href="#vantagens" onClick={() => setProdutos(false)}>Vantagens sobre o concreto</a>
                </div>
                <div>
                  <h4>Artefatos de concreto</h4>
                  {CONCRETO.map((nome) => (
                    <a key={nome} href="#concreto" onClick={() => setProdutos(false)}>{nome}</a>
                  ))}
                </div>
                <WaLink className="ddm-foot" msg="Olá! Não encontrei o que procuro e gostaria de consultar a equipe">
                  Não achou o que procura? Consulte pelo WhatsApp →
                </WaLink>
              </div>
            </div>

            <a href="#aplicacoes" className={on("aplicacoes")}>Aplicações</a>
            <a href="#vantagens" className={on("vantagens")}>Vantagens</a>
            <a href="#passos" className={on("passos")}>Como funciona</a>
            <a href="#faq" className={on("faq")}>FAQ</a>
            <a href="#contato" className={on("contato")}>Contato</a>
          </nav>

          <WaLink className="btn btn-wa" msg={MSG_ORCAMENTO}>
            <Icon name="i-wa" />
            <span className="s-long">Solicitar orçamento</span>
            <span className="s-short">Orçamento</span>
          </WaLink>

          <button
            type="button"
            className="burger"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            aria-controls="drawer"
            onClick={() => setAberto((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`drawer${aberto ? " open" : ""}`} id="drawer" aria-hidden={!aberto}>
        <a href="#inicio" onClick={fechar}>Início</a>
        <details>
          <summary>Postes de fibra de vidro</summary>
          <div className="subl">
            <a href="#postes" onClick={fechar}>Sobre os postes</a>
            <a href="#anatomia" onClick={fechar}>Anatomia do poste</a>
            <a href="#altura" onClick={fechar}>Escolha a altura</a>
            <a href="#vantagens" onClick={fechar}>Vantagens sobre o concreto</a>
          </div>
        </details>
        <details>
          <summary>Artefatos de concreto</summary>
          <div className="subl">
            {CONCRETO.map((nome) => (
              <a key={nome} href="#concreto" onClick={fechar}>{nome}</a>
            ))}
          </div>
        </details>
        <a href="#aplicacoes" onClick={fechar}>Aplicações</a>
        <a href="#passos" onClick={fechar}>Como funciona</a>
        <a href="#faq" onClick={fechar}>Perguntas frequentes</a>
        <a href="#contato" onClick={fechar}>Contato</a>
        <div className="drawer-cta">
          <WaLink className="btn btn-wa btn-lg" msg={MSG_ORCAMENTO} onClick={fechar}>
            <Icon name="i-wa" />
            Solicitar orçamento no WhatsApp
          </WaLink>
          <p>{PHONE}</p>
        </div>
      </div>
    </>
  );
}
