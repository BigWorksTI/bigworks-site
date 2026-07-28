export const site = {
  name: 'BigWorks',
  tagline: 'TI e desenvolvimento de software',
  description:
    'Estúdio de software brasileiro. Construímos SaaS multi-tenant em produção: restaurantes, varejo, WhatsApp com IA e ferramentas de nicho.',
  url: 'https://site.bigworks.com.br',
  whatsapp: '5551999276563',
  whatsappDisplay: '(51) 99927-6563',
  contactName: 'Tailon',
  location: 'Brasil',
  github: 'https://github.com/BigWorksTI',
  sections: [
    { id: 'intro', label: 'Início', num: '01' },
    { id: 'products', label: 'Produtos', num: '02' },
    { id: 'craft', label: 'Como fazemos', num: '03' },
    { id: 'contact', label: 'Contato', num: '04' },
  ],
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}`;

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  category: string;
  logo: string;
  featured?: boolean;
  highlight?: string;
  locale?: 'pt' | 'en';
};

export const products: Product[] = [
  {
    id: 'meu-garcom',
    name: 'Meu Garçom',
    tagline: 'Cardápio digital e operação do restaurante',
    description:
      'QR Code, pedidos em tempo real, monitor de cozinha e multi-tenant. Cada restaurante no seu subdomínio.',
    url: 'https://meugarcom.app',
    category: 'Gastronomia',
    logo: '/logos/meu-garcom.png',
  },
  {
    id: 'minha-fila',
    name: 'Minha Fila',
    tagline: 'Fila virtual em tempo real',
    description:
      'O público acompanha a posição no celular. Sem senha de papel, sem hardware extra.',
    url: 'https://minha-fila.meugarcom.app',
    category: 'Gastronomia',
    logo: '/logos/minha-fila.png',
  },
  {
    id: 'gastronomia-local',
    name: 'Gastronomia Local',
    tagline: 'Hub gastronômico regional',
    description:
      'Marketplace que conecta o público à gastronomia da cidade.',
    url: 'https://gastronomialocal.com.br',
    category: 'Marketplace',
    logo: '/logos/gastronomia-local.png',
  },
  {
    id: 'prompt-bi',
    name: 'Prompt BI',
    tagline: 'Ask your data in plain English',
    description:
      'Metrics and reports in natural language. No maze of filters. Visual answers instantly.',
    url: 'https://www.promptbi.com.br',
    category: 'BI · AI',
    logo: '/logos/prompt-bi.png',
    locale: 'en',
  },
  {
    id: 'bot-bigworks',
    name: 'BOT BigWorks',
    tagline: 'WhatsApp operacional com IA',
    description:
      'Pedidos, vendas e OS em linguagem natural. A IA entende o que você pede, sem menu infinito de opções.',
    url: 'https://bot.bigworks.com.br',
    category: 'WhatsApp · IA',
    logo: '/logos/bot-bigworks.png',
    featured: true,
    highlight: 'Linguagem natural',
  },
  {
    id: 'avalie-ai',
    name: 'Avalie Aí',
    tagline: 'NPS e feedback para varejo',
    description:
      'Dashboard operacional, FalaE, Google Avaliações e análise de concorrência com IA.',
    url: 'https://avalieai.com.br',
    category: 'NPS',
    logo: '/logos/avalie-ai.png',
  },
  {
    id: 'minha-foto',
    name: 'Minha Foto',
    tagline: 'Álbuns e vendas para fotógrafos',
    description:
      'Compartilhe via link ou QR e venda fotos individuais. Escolar e eventos.',
    url: 'https://minhafoto.bigworks.com.br',
    category: 'Fotografia',
    logo: '/logos/minha-foto.png',
  },
  {
    id: 'imageup',
    name: 'ImageUp',
    tagline: 'Sua imagem, no próximo nível',
    description:
      'Otimização e processamento de imagens para web e operação. Pipeline pensado para volume e qualidade.',
    url: 'https://imageup.vps.bigworks.com.br',
    category: 'Imagem · SaaS',
    logo: '/logos/imageup.png',
  },
  {
    id: 'lia',
    name: 'Lia',
    tagline: 'Secretária virtual administrativa',
    description:
      'NFS-e, clientes, serviços e assinaturas no painel. WhatsApp em linguagem natural como canal principal.',
    url: 'https://lia.bigworks.com.br',
    category: 'Admin · WhatsApp',
    logo: '/logos/lia.png',
    highlight: 'Linguagem natural',
  },
  {
    id: 'upcontroller',
    name: 'UpController',
    tagline: 'Gestão para oficinas mecânicas',
    description:
      'Ordens de serviço, clientes, veículos, financeiro e documentos via Google Drive. Foco em prestadores automotivos.',
    url: 'https://upcontroller.app',
    category: 'Automotivo · SaaS',
    logo: '/logos/upcontroller.jpg',
  },
  {
    id: 'elo',
    name: 'ielos',
    tagline: 'Links, redes e programa ao vivo',
    description:
      'Página de links feita para o Brasil. Bloco ao vivo com contador que vira "no ar" sozinho, cliques rastreados e abre rápido no celular.',
    url: 'https://elo.bigworks.com.br',
    category: 'Link in bio',
    logo: '/logos/elo.svg',
  },
  {
    id: 'app-marcenaria',
    name: 'App Marcenaria',
    tagline: 'Projeto 3D e pedido de corte',
    description:
      'Painéis em 3D, fita de borda, export WhatsApp/CSV. Funciona no celular.',
    url: 'https://marcenaria.morla.com.br',
    category: 'Marcenaria',
    logo: '/logos/app-marcenaria.svg',
  },
];

export const principles = [
  {
    title: 'Produção primeiro',
    body: 'Não vendemos protótipo. Cada produto na vitrine tem usuários reais e infra rodando.',
  },
  {
    title: 'IA com critério',
    body: 'Inteligência onde resolve: WhatsApp em linguagem natural, BI conversacional. Sem glitter em todo botão.',
  },
  {
    title: 'Multi-tenant nativo',
    body: 'Arquitetura pensada para muitos clientes no mesmo deploy, com isolamento e escala.',
  },
];
