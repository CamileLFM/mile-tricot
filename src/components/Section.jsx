export function Section({ id = '', eyebrow = '', title, children, className = '' }) {
  const idAttribute = id ? ` id="${id}"` : '';
  const eyebrowMarkup = eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : '';

  return `
    <section${idAttribute} class="${`section ${className}`.trim()}">
      <div class="section__heading">
        ${eyebrowMarkup}
        <h2>${title}</h2>
      </div>
      ${children}
    </section>
  `;
}
