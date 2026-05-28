# Milë Tricot Landing Page

Aplicação web exportável e versionável para a landing page da **Milë Tricot**, construída com HTML, CSS e JavaScript modular sem dependências externas.

## Estrutura

```text
package.json
index.html
src/main.jsx
src/App.jsx
src/components/
src/content/
src/assets/
src/styles/
README.md
```

## Conteúdo e CTAs

Os links e textos centrais da marca ficam em `src/content/brand.ts`, incluindo WhatsApp, Instagram, dados de contato, navegação, produtos, materiais e itens da galeria. Para trocar os CTAs, altere:

- `brand.whatsapp.number`
- `brand.whatsapp.message`
- `brand.instagram.url`
- `brand.instagram.handle`

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Exportação

O comando `npm run build` gera a versão estática em `dist/`, pronta para hospedagem em serviços como Vercel, Netlify, Cloudflare Pages ou servidor estático próprio.
