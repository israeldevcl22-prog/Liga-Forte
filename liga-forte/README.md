# Liga Forte — Site (React + Vite)

Site de geração de leads da Liga Forte: postes de fibra de vidro e artefatos de concreto, com WhatsApp como chamada principal.

## Rodar localmente

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # gera a pasta dist/
npm run preview   # serve o build para conferir
```

Requer Node 18.18 ou superior.

## Publicar na Vercel

**Pelo Git (recomendado):**
1. Suba esta pasta para um repositório no GitHub.
2. Na Vercel: *Add New → Project* e importe o repositório.
3. Framework Preset: **Vite** · Build Command: `npm run build` · Output Directory: `dist` (já definido em `vercel.json`).
4. Clique em *Deploy*.

**Pela CLI:**
```bash
npm i -g vercel
vercel --prod
```

## Onde editar

- **Telefone/WhatsApp e lista de produtos:** `src/data/site.js` (`WHATSAPP`, `PHONE`, `PRODUTOS`). Todos os botões usam esse número.
- **Textos das seções:** `src/components/*.jsx`.
- **Cores, fontes e espaçamentos:** `src/styles/global.css` (variáveis CSS no início do arquivo).
- **Imagens:** `src/assets/` (importadas nos componentes; o Vite gera nomes com hash).
- **SEO:** `index.html` (title, description, Open Graph, JSON-LD).

## Observações

- Quando o domínio definitivo existir, troque `og:image` e `twitter:image` em `index.html` por URL absoluta (ex.: `https://seudominio.com.br/og.png`) para a prévia correta ao compartilhar.
- As fontes (Montserrat e Source Sans 3) carregam do Google Fonts via `index.html`.
- Nenhum dado, certificação ou número foi inventado; ajuste os textos apenas com informações reais da empresa.
