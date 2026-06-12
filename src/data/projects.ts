export type ProjectStatus = "Em desenvolvimento" | "Em produção" | "Em breve";

export interface Project {
  /** Identificador único, usado como chave/âncora */
  slug: string;
  name: string;
  status: ProjectStatus;
  tagline: string;
  /** Cada item é um parágrafo */
  description: string[];
  /** Card em destaque (visual diferenciado). Apenas um projeto deve usar por vez. */
  featured?: boolean;
  /** Identifica qual ilustração customizada usar no card em destaque */
  visual?: "clipofy";
  cta?: {
    label: string;
    whatsappMessage: string;
  };
}

/**
 * Projetos próprios da Orvenz.
 * Para adicionar um novo projeto, basta incluir um novo item neste array —
 * a seção "Projetos" na página inicial é renderizada automaticamente a partir dele.
 */
export const projects: Project[] = [
  {
    slug: "clipofy",
    name: "Clipofy",
    status: "Em desenvolvimento",
    tagline: "Replay inteligente para quadras de vôlei",
    description: [
      "O Clipofy grava continuamente o jogo e permite capturar os últimos segundos de qualquer jogada marcante — um ataque, um bloqueio, um ponto decisivo — para replay imediato na quadra.",
      "Uma tecnologia que antes só se via em transmissões profissionais, agora ao alcance de quadras, clubes e escolinhas da região. Em fase final de instalação em uma quadra parceira em Novo Horizonte-SP.",
    ],
    featured: true,
    visual: "clipofy",
    cta: {
      label: "Quero o Clipofy na minha quadra",
      whatsappMessage: "Olá! Quero saber mais sobre o Clipofy para a minha quadra.",
    },
  },
];
