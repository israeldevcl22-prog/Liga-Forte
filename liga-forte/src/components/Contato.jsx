import { useRef, useState } from "react";
import { Icon } from "./Icons";
import WaLink from "./WaLink";
import { PHONE, PRODUTO_OPCOES, wa } from "../data/site";

const CAMPOS = [
  ["nome", "Nome"],
  ["empresa", "Empresa"],
  ["tel", "Telefone/WhatsApp"],
  ["produto", "Produto de interesse"],
  ["qtd", "Quantidade"],
  ["cidade", "Cidade"],
  ["msg", "Mensagem"],
];

const VAZIO = { nome: "", empresa: "", tel: "", produto: "", qtd: "", cidade: "", msg: "" };

export default function Contato() {
  const [dados, setDados] = useState(VAZIO);
  const [erro, setErro] = useState(false);
  const nomeRef = useRef(null);
  const produtoRef = useRef(null);

  const mudar = (campo) => (e) => setDados((d) => ({ ...d, [campo]: e.target.value }));

  /* mensagem do WhatsApp com só os campos preenchidos */
  const linhas = ["Olá! Gostaria de solicitar um orçamento."];
  CAMPOS.forEach(([chave, rotulo]) => {
    const valor = dados[chave].trim();
    if (valor) linhas.push(`${rotulo}: ${valor}`);
  });

  const enviar = (e) => {
    if (!dados.nome.trim()) {
      e.preventDefault();
      setErro(true);
      nomeRef.current?.focus();
    } else if (!dados.produto) {
      e.preventDefault();
      setErro(true);
      produtoRef.current?.focus();
    } else {
      setErro(false);
    }
  };

  return (
    <section className="sec conv" id="contato">
      <div className="wrap">
        <div>
          <p className="eyebrow">Orçamento</p>
          <h2>Precisa de postes de fibra de vidro ou artefatos de concreto?</h2>
          <p className="lead">
            Envie uma mensagem para nossa equipe pelo WhatsApp e solicite seu orçamento. Informe o produto que você
            precisa, a quantidade e, se possível, as medidas ou especificações do projeto. Para postes, ajuda saber a
            altura e o esforço no topo (daN). Nossa equipe poderá orientar você.
          </p>
          <div className="cta-row">
            <WaLink className="btn btn-wa btn-lg" msg="Olá! Gostaria de solicitar um orçamento">
              <Icon name="i-wa" />
              Solicitar orçamento pelo WhatsApp
            </WaLink>
          </div>
          <p className="num">
            WhatsApp<b>{PHONE}</b>
          </p>
        </div>

        <form className="form" id="orc" noValidate onSubmit={(e) => e.preventDefault()}>
          <h3>Receba seu orçamento pelo WhatsApp</h3>
          <p className="hint">Preencha e abriremos o WhatsApp com a mensagem pronta para enviar.</p>

          <div className="fields">
            <div>
              <label htmlFor="f-nome">Nome <i>*</i></label>
              <input id="f-nome" name="nome" autoComplete="name" required ref={nomeRef} value={dados.nome} onChange={mudar("nome")} />
            </div>
            <div>
              <label htmlFor="f-empresa">Empresa</label>
              <input id="f-empresa" name="empresa" autoComplete="organization" value={dados.empresa} onChange={mudar("empresa")} />
            </div>
            <div>
              <label htmlFor="f-tel">Telefone / WhatsApp</label>
              <input
                id="f-tel"
                name="tel"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(00) 00000-0000"
                value={dados.tel}
                onChange={mudar("tel")}
              />
            </div>
            <div>
              <label htmlFor="f-produto">Produto de interesse <i>*</i></label>
              <select id="f-produto" name="produto" required ref={produtoRef} value={dados.produto} onChange={mudar("produto")}>
                <option value="">Selecione</option>
                {PRODUTO_OPCOES.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="f-qtd">Quantidade</label>
              <input id="f-qtd" name="qtd" placeholder="Ex.: 10 unidades" value={dados.qtd} onChange={mudar("qtd")} />
            </div>
            <div>
              <label htmlFor="f-cidade">Cidade</label>
              <input id="f-cidade" name="cidade" autoComplete="address-level2" value={dados.cidade} onChange={mudar("cidade")} />
            </div>
            <div className="full">
              <label htmlFor="f-msg">Mensagem</label>
              <textarea
                id="f-msg"
                name="msg"
                placeholder="Ex.: altura, esforço no topo (daN), medidas, aplicação"
                value={dados.msg}
                onChange={mudar("msg")}
              />
            </div>
          </div>

          <a
            className="btn btn-wa btn-lg"
            id="enviar"
            href={wa(linhas.join("\n"))}
            target="_blank"
            rel="noopener noreferrer"
            onClick={enviar}
          >
            <Icon name="i-wa" />
            Solicitar orçamento
          </a>
          <p className="err" role="alert" hidden={!erro}>
            Informe seu nome e o produto de interesse para continuar.
          </p>
          <p className="after">Ao clicar, o WhatsApp abre com os dados que você informou.</p>
        </form>
      </div>
    </section>
  );
}
