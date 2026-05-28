export const WHATSAPP_NUMBER = "351934071660";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Vinicius! Vi a proposta para o Mauro Alves e gostaria de avançar.",
)}`;

export const CLIENT = {
  name: "Mauro Alves",
  firstName: "Mauro",
  segment: "Imobiliária",
  pitch: "Conteúdo audiovisual e tráfego pago para captar clientes e consolidar a marca pessoal.",
} as const;

export const AGENCY = {
  name: "High Level",
  fullName: "High Level · Vinicius Oliveira",
  email: "vnc.oli@gmail.com",
  phone: "+351 934 071 660",
  region: "Portugal",
  website: "highlevelmkt.com",
  websiteUrl: "https://highlevelmkt.com",
} as const;

export const PROPOSAL = {
  validityDays: 15,
  firstDeliveryBusinessDays: 10,
  issuedAt: "Maio 2026",
} as const;

export type Plan = {
  id: "start" | "crescer" | "acelerar" | "dominar";
  name: string;
  badge?: string;
  price: string;
  cadence: string;
  tagline: string;
  highlight: boolean;
  features: { label: string; detail?: string }[];
  ctaLabel: string;
  bestFor: string;
};

export const PLANS: Plan[] = [
  {
    id: "start",
    name: "Start",
    price: "390€",
    cadence: "/ mês",
    tagline:
      "Entrada estratégica para começar a aparecer com regularidade nas redes sociais.",
    bestFor: "Para quem quer testar o método com cadência leve.",
    highlight: false,
    features: [
      { label: "2 vídeos por mês", detail: "Curtos verticais para Reels, TikTok e Shorts." },
      { label: "Roteiro, edição e legendas" },
      { label: "Música licenciada" },
      { label: "1 ronda de ajustes por vídeo" },
      { label: "Relatório mensal de alcance" },
    ],
    ctaLabel: "Quero o Start",
  },
  {
    id: "crescer",
    name: "Crescer",
    price: "650€",
    cadence: "/ mês",
    tagline:
      "Mais conteúdo, opção de drone e tráfego pago a amplificar tudo o que se publica.",
    bestFor: "Para quem quer começar a gerar leads com consistência.",
    highlight: false,
    features: [
      { label: "Tudo o que está no Start" },
      { label: "4 vídeos por mês", detail: "Com ou sem drone, conforme o conteúdo do mês." },
      { label: "Tráfego pago em Meta e Google" },
      { label: "Segmentação por zona, interesses e comportamento" },
      { label: "Painel com métricas em tempo real" },
    ],
    ctaLabel: "Quero o Crescer",
  },
  {
    id: "acelerar",
    name: "Acelerar",
    badge: "Mais escolhido",
    price: "850€",
    cadence: "/ mês",
    tagline:
      "Presença digital completa num único parceiro. Vídeo, social media, site e SEO em conjunto.",
    bestFor: "Para quem quer presença digital consolidada em todos os canais.",
    highlight: true,
    features: [
      { label: "Tudo o que está no Crescer" },
      { label: "Gestão de social media", detail: "Calendário editorial, copy, publicações e stories." },
      { label: "Integração com website", detail: "Página de imóvel, formulário, pixel para retargeting." },
      { label: "SEO local", detail: "Optimização para pesquisas como “casas em [zona]”." },
      { label: "Planeamento estratégico mensal" },
      { label: "Prioridade no atendimento", detail: "Resposta em até 4h úteis." },
    ],
    ctaLabel: "Quero o Acelerar",
  },
  {
    id: "dominar",
    name: "Dominar",
    badge: "Topo de gama",
    price: "1.490€",
    cadence: "/ mês",
    tagline:
      "Volume forte de produção, branded content mensal e estratégia avançada para liderar o mercado local.",
    bestFor: "Para quem quer ser a referência da zona em poucos meses.",
    highlight: false,
    features: [
      { label: "Tudo o que está no Acelerar" },
      { label: "8 vídeos por mês", detail: "Drone incluído sempre que faça sentido." },
      { label: "1 branded content por mês", detail: "Vídeo de marca pessoal entre 60 e 90 segundos." },
      { label: "Email marketing", detail: "Newsletter mensal para a base de leads." },
      { label: "Reunião quinzenal de estratégia" },
      { label: "Atendimento dedicado", detail: "Resposta em até 2h úteis." },
      { label: "Auditoria trimestral aprofundada" },
    ],
    ctaLabel: "Quero o Dominar",
  },
];

export type Addon = {
  title: string;
  price: string;
  cadence: string;
  description: string;
};

export const ADDONS: Addon[] = [
  {
    title: "Vídeo extra",
    price: "150€",
    cadence: "por vídeo",
    description: "Mais um vídeo no mês para alimentar uma campanha ou aproveitar um lançamento.",
  },
  {
    title: "Drone adicional",
    price: "50€",
    cadence: "por vídeo",
    description: "Planos aéreos extra em vídeos onde a vista do imóvel ou da zona faz diferença.",
  },
  {
    title: "Tour virtual 360°",
    price: "200€",
    cadence: "por imóvel",
    description: "Visita imersiva ao imóvel para quem não pode ir presencialmente.",
  },
  {
    title: "Sessão fotográfica de imóvel",
    price: "250€",
    cadence: "por imóvel",
    description: "Fotografia profissional para anúncios e portais imobiliários.",
  },
  {
    title: "Vídeo de marca pessoal",
    price: "1.490€",
    cadence: "valor único",
    description: "Vídeo manifesto entre 60 e 90 segundos para posicionar o Mauro no mercado.",
  },
  {
    title: "Landing page de imóvel",
    price: "300€",
    cadence: "por imóvel",
    description: "Página dedicada com galeria, vídeo, mapa e formulário ligado ao WhatsApp.",
  },
];

export const PILLARS = [
  {
    title: "Conteúdo que vende imóveis",
    body:
      "Vídeo é o formato com maior retenção em imobiliária. Mostra espaço, luz e contexto muito melhor do que qualquer fotografia.",
  },
  {
    title: "Tráfego que chega às pessoas certas",
    body:
      "Campanhas segmentadas por zona, interesses e comportamento em Meta e Google para apanhar quem está mesmo na fase de comprar ou vender.",
  },
  {
    title: "Marca pessoal forte",
    body:
      "O Mauro fica na cabeça do cliente como primeira escolha quando este pensa em comprar, vender ou arrendar na sua zona.",
  },
  {
    title: "Acompanhamento em tempo real",
    body:
      "Ajustes contínuos com base nas métricas reais das campanhas. Não andamos a trabalhar no escuro.",
  },
];

export const TRAFFIC_BLOCKS = [
  {
    title: "Google e YouTube Ads",
    body:
      "Captação de quem pesquisa activamente por imóveis e por consultores na zona do Mauro, com retargeting forte em YouTube.",
    bullets: [
      "Pesquisa por intenção, tipo “comprar casa em Setúbal” ou “vender apartamento Lisboa”.",
      "Vídeo no YouTube em formato curto e in-stream.",
      "Retargeting para quem visitou o site ou viu mais de metade de um reel.",
    ],
  },
  {
    title: "Meta Ads (Facebook e Instagram)",
    body:
      "Reels patrocinados, campanhas de mensagens directas para o WhatsApp e formulários de captação.",
    bullets: [
      "Segmentação por zona, idade, rendimento estimado e interesses.",
      "Lookalikes a partir de quem já contactou, para apanhar perfis semelhantes.",
      "Campanhas de marca pessoal para reforçar a autoridade do Mauro no mercado local.",
    ],
  },
  {
    title: "Acompanhamento e optimização",
    body:
      "Pôr campanhas a correr é metade do trabalho. A outra metade é ler os dados todas as semanas e ajustar onde faz falta.",
    bullets: [
      "Painel partilhado com métricas em tempo real.",
      "Ajuste semanal de criativos, públicos e investimento.",
      "Relatório mensal com leads, custo por lead e próximos passos.",
    ],
  },
];

export const EXAMPLES = [
  {
    code: "DXv1ypAiPAw",
    url: "https://www.instagram.com/reel/DXv1ypAiPAw/?igsh=MTVzdnFyZ2dqM3M3bg==",
    label: "Reel · cliente real",
    description: "Apresentação de imóvel em formato curto, com ritmo e CTA claro.",
  },
  {
    code: "DWQti_-jQGn",
    url: "https://www.instagram.com/reel/DWQti_-jQGn/?igsh=ZnNsOGY5NzRzaWNq",
    label: "Reel · cliente real",
    description: "Marca pessoal do consultor como protagonista, próximo do cliente.",
  },
  {
    code: "DTxwwJ4gobX",
    url: "https://www.instagram.com/reel/DTxwwJ4gobX/?igsh=d3RvOGE2cXI5bHV5",
    label: "Reel · cliente real",
    description: "Tour de imóvel com planos aéreos a destacar a luz natural.",
  },
  {
    code: "DVbxH9pDUmf",
    url: "https://www.instagram.com/reel/DVbxH9pDUmf/?igsh=NzY5cmZzdzhud3dr",
    label: "Reel · cliente real",
    description: "Conteúdo educativo curto a posicionar o consultor como referência.",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Briefing e estratégia",
    body:
      "Reunião inicial para mapear objectivos, público e portefólio. Sai daqui o plano de conteúdos do mês.",
  },
  {
    title: "Pré-produção",
    body:
      "Guiões de cada vídeo, planos de filmagem e lista de equipamentos, drone incluído sempre que faz sentido.",
  },
  {
    title: "Filmagem",
    body:
      "1 a 2 dias de filmagem por mês, em imóveis e exteriores, com câmara, áudio profissional e drone.",
  },
  {
    title: "Edição e revisão",
    body:
      "Montagem, color grading, legendas e música. Cada vídeo tem 1 ronda de ajustes incluída.",
  },
  {
    title: "Publicação e tráfego pago",
    body:
      "Publicação coordenada nos canais do Mauro e arranque das campanhas Meta e Google.",
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
  { href: "#extras", label: "Extras" },
  { href: "#trafego", label: "Tráfego" },
  { href: "#exemplos", label: "Exemplos" },
  { href: "#processo", label: "Processo" },
] as const;
