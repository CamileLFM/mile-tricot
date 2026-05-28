export const brand = {
  name: 'Milë Tricot',
  tagline: 'Tricot autoral, premium e feito sob encomenda.',
  whatsapp: {
    label: 'Chamar no WhatsApp',
    number: '5500000000000',
    message:
      'Olá, Milë Tricot! Quero conversar sobre uma peça sob encomenda.',
  },
  instagram: {
    label: 'Ver Instagram',
    handle: '@mile.tricot',
    url: 'https://instagram.com/mile.tricot',
  },
  contact: {
    email: 'contato@miletricot.com.br',
    location: 'Atendimento online para todo o Brasil',
  },
};

export const getWhatsAppUrl = () =>
  `https://wa.me/${brand.whatsapp.number}?text=${encodeURIComponent(
    brand.whatsapp.message,
  )}`;

export const navItems = [
  { label: 'Produtos', href: '#produtos' },
  { label: 'Materiais', href: '#materiais' },
  { label: 'Encomendas', href: '#encomendas' },
  { label: 'Contato', href: '#contato' },
];

export const products = [
  {
    title: 'Cardigans statement',
    text: 'Modelagens elegantes, caimento confortável e pontos que valorizam a textura artesanal.',
  },
  {
    title: 'Blusas e tops',
    text: 'Peças versáteis para compor looks sofisticados em meia-estação ou sobreposições.',
  },
  {
    title: 'Acessórios afetivos',
    text: 'Cachecóis, golas e detalhes em tricot para presentear com significado.',
  },
];

export const materials = [
  'Fios selecionados por toque, durabilidade e beleza visual.',
  'Paleta curada em tons neutros, terrosos e cores especiais sob consulta.',
  'Acabamentos manuais para reforçar exclusividade e conforto.',
];

export const galleryItems = [
  'Tramas amplas',
  'Texturas naturais',
  'Detalhes de punho',
  'Peças presenteáveis',
  'Pontos autorais',
  'Paleta sofisticada',
];
