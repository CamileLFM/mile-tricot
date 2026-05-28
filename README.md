# Mile & Tricot

Vitrine premium para captação de encomendas personalizadas de maxi tricô artesanal.

## Tecnologias utilizadas

- HTML, CSS e JavaScript modular.
- Componentes em arquivos `.jsx` renderizados no navegador.
- Conteúdo centralizado em arquivo `.ts` usado como módulo JavaScript.
- Scripts Node.js nativos para servidor local e geração de build estático.
- Sem dependências externas de runtime ou build.

## Instalação

Instale as dependências do projeto com:

```bash
npm install
```

> Atualmente o projeto não declara pacotes externos em `package.json`, mas o comando mantém o fluxo padrão de instalação e prepara o `package-lock.json` quando necessário.

## Rodar localmente

Inicie o servidor local de desenvolvimento com:

```bash
npm run dev
```

Por padrão, o site fica disponível em `http://localhost:4173`.

## Build de produção

Gere a versão estática de produção com:

```bash
npm run build
```

O build é exportado para a pasta `dist/`, pronta para hospedagem em serviços como Vercel, Netlify, Cloudflare Pages ou servidores estáticos.

Para visualizar o build localmente, use:

```bash
npm run preview
```

## Configuração de conteúdo e marca

As principais informações editáveis ficam em `src/content/brand.ts`:

- WhatsApp: número, mensagem inicial e texto do botão em `brand.whatsapp`.
- Instagram: URL, arroba e texto do botão em `brand.instagram`.
- Textos institucionais e informações da marca: nome, tagline, e-mail, localização, navegação, produtos, materiais e itens da galeria.

Outros pontos de personalização:

- Textos e seções da página: `src/App.jsx`.
- Componentes reutilizáveis: `src/components/`.
- Estilos visuais, cores, espaçamentos e responsividade: `src/styles/global.css`.
- Imagens e demais arquivos estáticos da marca: `src/assets/`.

## Observação comercial

Este site é uma vitrine institucional para iniciar conversas e captar encomendas personalizadas. Ele não é um e-commerce, não possui carrinho de compras, não processa pagamentos e não exibe preços.
