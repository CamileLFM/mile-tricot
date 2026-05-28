import { brand, getWhatsAppUrl } from '../content/brand.ts';

export function CtaButtons() {
  return `
    <div class="cta-group" aria-label="Canais de contato">
      <a class="button button--primary" href="${getWhatsAppUrl()}" target="_blank" rel="noreferrer">
        ${brand.whatsapp.label}
      </a>
      <a class="button button--ghost" href="${brand.instagram.url}" target="_blank" rel="noreferrer">
        ${brand.instagram.label}
      </a>
    </div>
  `;
}
