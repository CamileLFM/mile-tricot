import { CtaButtons } from './components/CtaButtons.jsx';
import { Section } from './components/Section.jsx';
import { brand, galleryItems, materials, navItems, products } from './content/brand.ts';

const list = (items) => items.map((item) => `<li>${item}</li>`).join('');

export function renderApp() {
  return `
    <div class="app-shell">
      <header class="site-header">
        <a class="brand-mark" href="#top" aria-label="Voltar ao início">
          <span>Milë</span>
          <small>Tricot</small>
        </a>
        <nav class="site-nav" aria-label="Navegação principal">
          ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
        </nav>
      </header>

      <main id="top">
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero__content">
            <span class="eyebrow">Ateliê contemporâneo de tricot</span>
            <h1 id="hero-title">Peças autorais para vestir presença, afeto e sofisticação.</h1>
            <p>
              ${brand.name} cria tricots premium sob encomenda, com fios selecionados,
              medidas cuidadosas e acabamento manual para cada cliente.
            </p>
            ${CtaButtons()}
          </div>
          <div class="hero__card" aria-label="Resumo da proposta Milë Tricot">
            <span>feito sob encomenda</span>
            <strong>Tramas que traduzem calma, elegância e exclusividade.</strong>
          </div>
        </section>

        ${Section({
          eyebrow: 'Posicionamento',
          title: 'Luxo discreto com alma artesanal.',
          children: `<p class="lead">
            A Milë nasce para mulheres que valorizam peças duráveis, toque macio e
            estética refinada. Cada criação é pensada para atravessar estações sem
            perder identidade.
          </p>`,
        })}

        ${Section({
          id: 'produtos',
          eyebrow: 'Produtos',
          title: 'Uma curadoria de peças essenciais.',
          children: `<div class="cards-grid">
            ${products
              .map(
                (product) => `<article class="info-card">
                  <h3>${product.title}</h3>
                  <p>${product.text}</p>
                </article>`,
              )
              .join('')}
          </div>`,
        })}

        ${Section({
          eyebrow: 'Público sofisticado',
          title: 'Para quem escolhe menos, melhor e com intenção.',
          children: `<div class="split">
            <p>
              A cliente Milë busca uma peça que pareça feita para sua rotina: elegante no
              trabalho, acolhedora em viagens e memorável em encontros especiais.
            </p>
            <ul>
              ${list([
                'Valoriza produção em pequena escala.',
                'Prefere design atemporal a tendências passageiras.',
                'Procura atendimento próximo, claro e consultivo.',
              ])}
            </ul>
          </div>`,
        })}

        ${Section({
          id: 'materiais',
          eyebrow: 'Materiais',
          title: 'Fios, textura e acabamento como protagonistas.',
          children: `<div class="feature-list">
            ${materials.map((item) => `<p>${item}</p>`).join('')}
          </div>`,
        })}

        ${Section({
          eyebrow: 'Medidas',
          title: 'Caimento pensado para você.',
          children: `<p class="lead">
            Antes da produção, coletamos medidas essenciais e referências de uso para
            orientar comprimento, largura, mangas e preferências de ajuste.
          </p>`,
        })}

        ${Section({
          eyebrow: 'Personalização',
          title: 'Detalhes que transformam uma peça em assinatura.',
          children: `<div class="highlight-panel">
            <p>
              Cores, fios, pontos, proporções e acabamentos podem ser alinhados em uma
              conversa de briefing, respeitando viabilidade técnica e prazo de produção.
            </p>
          </div>`,
        })}

        ${Section({
          id: 'encomendas',
          eyebrow: 'Encomendas',
          title: 'Um processo simples, transparente e acompanhado.',
          children: `<ol class="steps">
            ${list([
              'Contato inicial por WhatsApp ou Instagram.',
              'Definição de modelo, medidas, materiais e orçamento.',
              'Produção artesanal com atualizações durante o processo.',
              'Entrega combinada com instruções de cuidado.',
            ])}
          </ol>`,
        })}

        ${Section({
          eyebrow: 'Presentes',
          title: 'Um presente afetivo para marcar ocasiões especiais.',
          children: `<p class="lead">
            Peças e acessórios podem ser planejados para aniversários, maternidade,
            datas comemorativas ou gestos de carinho com apresentação cuidadosa.
          </p>`,
        })}

        ${Section({
          eyebrow: 'Prova de valor',
          title: 'Feito devagar para durar mais.',
          children: `<div class="metrics">
            <div><strong>1:1</strong><span>atendimento consultivo</span></div>
            <div><strong>100%</strong><span>produção sob encomenda</span></div>
            <div><strong>slow</strong><span>moda com intenção</span></div>
          </div>`,
        })}

        ${Section({
          eyebrow: 'Galeria',
          title: 'Inspirações visuais para imaginar sua peça.',
          children: `<div class="gallery" aria-label="Galeria conceitual Milë Tricot">
            ${galleryItems
              .map(
                (item, index) => `<div class="gallery__item">
                  <span>${String(index + 1).padStart(2, '0')}</span>
                  <p>${item}</p>
                </div>`,
              )
              .join('')}
          </div>`,
        })}

        ${Section({
          id: 'contato',
          eyebrow: 'Contato',
          title: 'Vamos desenhar sua próxima peça?',
          className: 'contact-section',
          children: `<p>
            Atendimento online para encomendas, presentes e dúvidas sobre modelos,
            prazos e possibilidades de personalização.
          </p>
          ${CtaButtons()}
          <div class="contact-meta">
            <span>${brand.instagram.handle}</span>
            <span>${brand.contact.email}</span>
            <span>${brand.contact.location}</span>
          </div>`,
        })}
      </main>

      <footer class="site-footer">
        <p>© ${new Date().getFullYear()} ${brand.name}. Tricot autoral sob encomenda.</p>
        <a href="#top">Voltar ao topo</a>
      </footer>
    </div>
  `;
}
