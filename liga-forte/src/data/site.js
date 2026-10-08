import postes from "../assets/poste-fileira.jpg";
import tubos from "../assets/postes-empilhados.jpg";
import meio from "../assets/meio-fio.jpg";
import bloquetes from "../assets/bloquetes.jpg";
import canaletas from "../assets/canaletas.jpg";
import guias from "../assets/guias.jpg";
import pre from "../assets/pre-moldados.jpg";
import outros from "../assets/outros-artefatos.jpg";

/* ===== CONTATO ===== */
// Número no formato internacional, só dígitos (55 + DDD + número).
export const WHATSAPP = "5524981110754";
// Como o número aparece escrito no site.
export const PHONE = "(24) 98111-0754";

/** Gera o link do WhatsApp, com mensagem pré-preenchida opcional. */
export function wa(text) {
  return text
    ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${WHATSAPP}`;
}

/* ===== FOTOS ===== */
export const FOTOS = { postes, tubos, meio, bloquetes, canaletas, guias, pre, outros };

/* ===== PRODUTOS DE CONCRETO — edite aqui os nomes e inclua ou remova itens ===== */
export const PRODUTOS = [
  { nome: "Meio-fio", foto: "meio", desc: "Acabamento e organização para sua obra." },
  { nome: "Bloquetes / pisos", foto: "bloquetes", desc: "Mais resistência e praticidade." },
  { nome: "Canaletas", foto: "canaletas", desc: "Ideal para drenagem de água." },
  { nome: "Guias", foto: "guias", desc: "Mais segurança e durabilidade." },
  { nome: "Peças pré-moldadas", foto: "pre", desc: "Soluções sob medida para o seu projeto." },
  { nome: "Outros artefatos de concreto", foto: "outros", desc: "Variedade de produtos para diferentes necessidades." },
];

/** Opções dos campos "Produto" (formulário e orçamento rápido). */
export const PRODUTO_OPCOES = [
  "Poste de fibra de vidro",
  ...PRODUTOS.map((p) => p.nome),
  "Mais de um produto",
];

/** Relaciona cada seção (id) ao item do menu que fica destacado. */
export const MAPA_MENU = {
  inicio: "inicio",
  linhas: "produtos",
  postes: "produtos",
  anatomia: "produtos",
  altura: "produtos",
  concreto: "produtos",
  aplicacoes: "aplicacoes",
  vantagens: "vantagens",
  qualidade: "vantagens",
  publico: "passos",
  passos: "passos",
  contato: "contato",
  faq: "faq",
};
