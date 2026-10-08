import { useState } from "react";
import { Icon } from "./Icons";
import { PRODUTO_OPCOES, wa } from "../data/site";

/** Orçamento rápido: três campos e a mensagem já sai pronta no WhatsApp. */
export default function QuickQuote() {
  const [produto, setProduto] = useState("");
  const [qtd, setQtd] = useState("");
  const [cidade, setCidade] = useState("");

  const linhas = ["Olá! Gostaria de um orçamento rápido."];
  if (produto) linhas.push(`Produto: ${produto}`);
  if (qtd.trim()) linhas.push(`Quantidade: ${qtd.trim()}`);
  if (cidade.trim()) linhas.push(`Cidade: ${cidade.trim()}`);

  return (
    <section className="quick" aria-label="Orçamento rápido">
      <div className="wrap">
        <div className="qcard">
          <div className="qtitle">
            <b>Orçamento rápido</b>
            <span>Escolha o produto e abra o WhatsApp com a mensagem pronta.</span>
          </div>
          <div className="qf">
            <div>
              <label htmlFor="q-prod">Produto</label>
              <select id="q-prod" value={produto} onChange={(e) => setProduto(e.target.value)}>
                <option value="">A definir</option>
                {PRODUTO_OPCOES.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="q-qtd">Quantidade</label>
              <input id="q-qtd" placeholder="Ex.: 10 unidades" value={qtd} onChange={(e) => setQtd(e.target.value)} />
            </div>
            <div>
              <label htmlFor="q-cid">Cidade</label>
              <input
                id="q-cid"
                autoComplete="address-level2"
                placeholder="Sua cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
            <a className="btn btn-wa" href={wa(linhas.join("\n"))} target="_blank" rel="noopener noreferrer">
              <Icon name="i-wa" />
              Pedir no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
