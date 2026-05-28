export const WHATSAPP_NUMBER = "351934071660";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Vasco! Vi a proposta para o Mauro Alves e gostaria de avançar.",
)}`;

export const CLIENT = {
  name: "Mauro Alves",
  segment: "Imobiliária",
  pitch: "Conteúdo audiovisual e tráfego pago para captar clientes e fortalecer a marca pessoal.",
} as const;

export const AGENCY = {
  name: "highlevelvnc",
  fullName: "highlevelvnc · Vasco Oliveira",
  email: "vnc.oli@gmail.com",
  phone: "+351 934 071 660",
  region: "Portugal",
} as const;

export const PROPOSAL = {
  validityDays: 15,
  firstDeliveryBusinessDays: 10,
  issuedAt: "Maio 2026",
} as const;

export type Plan = {
  id: "essencial" | "completo";
  name: string;
  badge?: string;
  price: string;
  cadence: string;
  tagline: string;
  highlight: boolean;
  features: { label: string; detail?: string }[];
  ctaLabel: string;
};

export const PLANS: Plan[] = [
  {
    id: "essencial",
    name: "Pacote Essencial",
    price: "650€",
    cadence: "/ mês",
    tagline:
      "4 vídeos por mês (com ou sem drone) + tráfego pago para amplificar os resultados.",
    highlight: false,
    features: [
      {
        label: "4 vídeos premium por mês",
        detail: "Reels verticais para Instagram, TikTok e YouTube Shorts.",
      },
      {
        label: "Opção com ou sem drone",
        detail: "Planos aéreos para destacar imóveis e localização.",
      },
      {
        label: "Roteiro, edição e legendas",
        detail: "Ritmo, música e CTAs pensados para conversão.",
      },
      {
        label: "Tráfego pago incluído",
        detail: "Campanhas Meta e Google segmentadas ao público-alvo certo.",
      },
      {
        label: "Relatório mensal",
        detail: "Alcance, engagement, leads e custo por contacto.",
      },
    ],
    ctaLabel: "Quero o Pacote Essencial",
  },
  {
    id: "completo",
    name: "Pacote Completo",
    badge: "Mais escolhido",
    price: "850€",
    cadence: "/ mês",
    tagline:
      "Tudo o que precisa para crescer: vídeos, tráfego, social media, site e SEO num único parceiro.",
    highlight: true,
    features: [
      { label: "Tudo o que está no Essencial" },
      {
        label: "Gestão de social media",
        detail: "Calendário editorial, copy, publicações e stories semanais.",
      },
      {
        label: "Integração com website",
        detail: "Página de imóvel, formulário e pixel para retargeting.",
      },
      {
        label: "SEO local",
        detail: "Optimização para pesquisas como “casas em [zona]”.",
      },
      {
        label: "Planeamento estratégico",
        detail: "Reunião mensal de estratégia e roadmap trimestral.",
      },
      {
        label: "Prioridade no atendimento",
        detail: "Resposta em até 4h úteis e ajustes rápidos.",
      },
    ],
    ctaLabel: "Quero o Pacote Completo",
  },
];

export const PILLARS = [
  {
    title: "Conteúdo que vende imóveis",
    body:
      "Vídeo é o formato com maior retenção em imobiliária. Mostra espaço, luz e contexto melhor do que qualquer fotografia.",
  },
  {
    title: "Tráfego que chega às pessoas certas",
    body:
      "Campanhas segmentadas por localização, interesses e comportamento em Meta e Google para captar quem está mesmo a comprar ou a vender.",
  },
  {
    title: "Marca pessoal forte",
    body:
      "O Mauro torna-se a primeira escolha quando alguém pensa em comprar, vender ou arrendar.",
  },
  {
    title: "Acompanhamento em tempo real",
    body:
      "Ajustes contínuos com base em métricas reais — não trabalhamos no escuro.",
  },
];

export const TRAFFIC_BLOCKS = [
  {
    title: "Google e YouTube Ads",
    body:
      "Captação de quem pesquisa activamente por imóveis e por consultores na sua zona, mais retargeting em YouTube.",
    bullets: [
      "Search por intenção (“comprar casa em…”, “vender apartamento…”).",
      "Anúncios em vídeo no YouTube em formato curto e in-stream.",
      "Retargeting de quem visitou o site ou viu mais de 50% de um reel.",
    ],
  },
  {
    title: "Meta Ads (Facebook e Instagram)",
    body:
      "Reels patrocinados, campanhas de mensagens directas para WhatsApp e formulários de captação.",
    bullets: [
      "Segmentação por zona, idade, rendimento estimado e interesses.",
      "Lookalike de quem já contactou para captar perfis semelhantes.",
      "Campanhas de marca pessoal para reforçar autoridade do Mauro.",
    ],
  },
  {
    title: "Acompanhamento e optimização",
    body:
      "Não basta pôr a correr. Lemos os dados todas as semanas e ajustamos onde é preciso.",
    bullets: [
      "Painel partilhado com métricas em tempo real.",
      "Ajuste semanal de criativos, públicos e investimento.",
      "Relatório mensal com leads, custo por lead e próximos passos.",
    ],
  },
];

export const EXAMPLES = [
  {
    url: "https://www.instagram.com/reel/DXv1ypAiPAw/?igsh=MTVzdnFyZ2dqM3M3bg==",
    label: "Reel · cliente real",
    description: "Apresentação de imóvel em formato curto, com ritmo e CTA claro.",
  },
  {
    url: "https://www.instagram.com/reel/DWQti_-jQGn/?igsh=ZnNsOGY5NzRzaWNq",
    label: "Reel · cliente real",
    description: "Marca pessoal: o consultor como protagonista, próximo do cliente.",
  },
  {
    url: "https://www.instagram.com/reel/DTxwwJ4gobX/?igsh=d3RvOGE2cXI5bHV5",
    label: "Reel · cliente real",
    description: "Tour de imóvel com planos aéreos e foco na luz natural.",
  },
  {
    url: "https://www.instagram.com/reel/DVbxH9pDUmf/?igsh=NzY5cmZzdzhud3dr",
    label: "Reel · cliente real",
    description: "Conteúdo educativo curto a posicionar o consultor como referência.",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Briefing e estratégia",
    body:
      "Reunião inicial para perceber objectivos, público e portefólio. Saímos com plano de conteúdos para o mês.",
  },
  {
    title: "Pré-produção",
    body:
      "Guiões dos 4 vídeos, planos de filmagem, lista de equipamentos (incluindo drone, se aplicável).",
  },
  {
    title: "Filmagem",
    body:
      "1 a 2 dias de filmagem por mês, em imóveis e exteriores, com câmara, áudio profissional e drone.",
  },
  {
    title: "Edição e revisão",
    body:
      "Montagem, color grading, legendas e música. 1 ronda de ajustes incluída por vídeo.",
  },
  {
    title: "Publicação e tráfego pago",
    body:
      "Publicação coordenada nas plataformas e arranque das campanhas Meta e Google.",
  },
  {
    title: "Análise e ajuste",
    body:
      "Optimização contínua, relatório mensal e reunião de balanço para preparar o ciclo seguinte.",
  },
];

export const NAV_LINKS = [
  { href: "#porque", label: "Porquê" },
  { href: "#planos", label: "Planos" },
  { href: "#trafego", label: "Tráfego" },
  { href: "#exemplos", label: "Exemplos" },
  { href: "#processo", label: "Processo" },
] as const;
