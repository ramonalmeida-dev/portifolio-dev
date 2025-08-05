import { Project, TechCategory, Testimonial, CTAOption, Skill, MenuItem } from '@/types';
import { Brain, Zap, Rocket, Target, Mail, MessageCircle } from 'lucide-react';

// Navigation Menu Items
export const MENU_ITEMS: MenuItem[] = [
  { id: "hero", label: "Início", href: "#hero" },
  { id: "about", label: "Sobre", href: "#about" },
  { id: "tech-stack", label: "Tech Stack", href: "#tech-stack" },
  { id: "projects", label: "Projetos", href: "#projects" },
  { id: "testimonials", label: "Depoimentos", href: "#testimonials" },
  { id: "contact", label: "Contato", href: "#contact" }
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    title: "Send Contábil",
    description: "Plataforma SaaS de contabilidade online para empresas no regime Simples Nacional. Sistema completo com 3 mil clientes ativos, atualização automática e integrações fiscais automatizadas.",
    technologies: ["Next.js", "Supabase", "N8N", "Stripe", "Electron"],
    image: "📊",
    category: "SaaS",
    result: "3 mil clientes ativos com envio automático de arquivos fiscais",
    url: "https://www.sendcontabil.com.br"
  },
  {
    title: "Gestão Joias",
    description: "Sistema de gestão para revendedoras de joias com controle de kits, vendas, metas e comissionamento. Dashboard em tempo real com algoritmos de comissionamento automatizado.",
    technologies: ["FlutterFlow", "Supabase", "N8N", "Efi"],
    image: "💎",
    category: "SaaS",
    result: "Sistema de comissionamento e controle de revendedoras de joias e semijoias",
    url: "https://www.gestaojoias.com.br"
  },
  {
    title: "Sistema de Atendimento Psicológico",
    description: "Plataforma completa para clínicas de psicologia com atendimento online, agendamento mobile, transcrição automática de consultas e gestão financeira com divisão de pagamentos.",
    technologies: ["Bubble.io", "FlutterFlow", "Supabase", "Daily.co", "Asaas"],
    image: "🧠",
    category: "Healthcare",
    result: "Transcrição automática de consultas",
    url: "#"
  },
  {
    title: "Sistema de Gestão de Construtora",
    description: "Plataforma híbrida para gestão de obras públicas com painel web gerencial e aplicativo mobile para apontamentos de campo com geolocalização em tempo real.",
    technologies: ["FlutterFlow", "Supabase", "Leaflet.js", "Geolocalização"],
    image: "🏗️",
    category: "Enterprise",
    result: "Gestão de obras com geolocalização",
    url: "#"
  },
  {
    title: "FFAdvisor",
    description: "Ferramenta que analisa projetos FlutterFlow com IA e gera relatórios técnicos com insights práticos. Análise de componentes, páginas, estados do aplicativo e funções.",
    technologies: ["Node.js", "OpenAI", "Supabase", "YAML Parser"],
    image: "🤖",
    category: "Ferramenta",
    result: "Análise automatizada de projetos FlutterFlow",
    url: "https://www.ffadvisor.com.br"
  },
  {
    title: "Clínica Odontológica Portugal",
    description: "Sistema clínico personalizado para clínica odontológica em Portugal. Periodontograma interativo, prontuários digitais e gerenciamento de filiais com 90k pacientes cadastrados.",
    technologies: ["FlutterFlow", "Supabase", "Mobile + Web"],
    image: "🦷",
    category: "Healthcare",
    result: "Controle de clínica odontológica com 90 mil pacientes cadastrados",
    url: "#"
  }
];

// Tech Stack Categories
export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: "Frontend",
    title: "Interfaces Modernas",
    description: "Desenvolvimento de interfaces responsivas e interativas com as melhores tecnologias do mercado.",
    image: "🎨",
    technologies: ["Next.js", "React.js", "TailwindCSS", "shadcn"]
  },
  {
    category: "Backend",
    title: "APIs Robustas",
    description: "Desenvolvimento de APIs escaláveis e arquiteturas de backend performáticas.",
    image: "⚙️",
    technologies: ["NestJS", "Node.js", "Python", "Supabase", "Firebase"]
  },
  {
    category: "Low/No Code",
    title: "Prototipagem Rápida",
    description: "Ferramentas para validação rápida de ideias e automação de processos.",
    image: "🚀",
    technologies: ["FlutterFlow", "Bubble", "N8N"]
  },
  {
    category: "DevOps & Infra",
    title: "Deploy & Escalabilidade",
    description: "Infraestrutura como código, containers e deploy automatizado.",
    image: "☁️",
    technologies: ["Docker", "Vercel", "PostgreSQL"]
  },
  {
    category: "Inteligência Artificial",
    title: "IA & Machine Learning",
    description: "Integração com modelos de IA para criar experiências inteligentes e automatizadas.",
    image: "🤖",
    technologies: ["OpenAI", "CrewAI", "LLMs"]
  },
  {
    category: "Pagamentos",
    title: "Integração de Pagamentos",
    description: "Sistemas de pagamento seguros e confiáveis para monetização de produtos.",
    image: "💳",
    technologies: ["Stripe", "Asaas"]
  }
];

// Testimonials Data
export const TESTIMONIALS: Testimonial[] = [ 
  {
    name: "Maria Costa",
    position: "Fundadora",
    company: "Gestão Joias",
    content: "Precisávamos de um sistema que funcionasse para equipes de vendas no campo. O Ramon criou algo que realmente resolveu nossos problemas de comissionamento. O dashboard em tempo real mudou a forma como gerenciamos as vendas.",
    rating: 4,
    avatar: "MC"
  },
  {
    name: "Dr. Carlos Mendes",
    position: "Psicólogo",
    company: "Clínica Psicológica",
    content: "A transcrição automática das consultas salvou muito tempo. Antes gastávamos horas transcrevendo, agora é automático. O split de pagamentos também resolveu uma dor de cabeça que tínhamos há anos.",
    rating: 5,
    avatar: "CM"
  },
  {
    name: "Roberto",
    position: "Gerente de Obras",
    company: "Construtora",
    content: "Nossas equipes de campo sempre reclamavam dos sistemas antigos. Com o app que o Ramon fez, eles conseguem registrar tudo no local, com GPS. Os relatórios no mapa facilitam muito o acompanhamento das obras.",
    rating: 5,
    avatar: "RA"
  }
];

// CTA Options
export const CTA_OPTIONS: CTAOption[] = [
  {
    icon: Mail,
    title: "Email direto",
    description: "Vamos discutir seu projeto por email",
    action: "ramonalmeidarocha@gmail.com",
    primary: false
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Conversa rápida e direta",
    action: "Chamar no WhatsApp",
    primary: true
  }
];

// Skills Data
export const SKILLS: Skill[] = [
  { 
    icon: Brain, 
    title: "🧠 Estratégia Técnica", 
    description: "Validação de ideias e MVPs, arquitetura escalável desde o início, planejamento técnico focado em negócio." 
  },
  { 
    icon: Zap, 
    title: "⚙️ Desenvolvimento de Produtos", 
    description: "SaaS multitenant completos com painel, billing e métricas. Apps web/mobile com FlutterFlow + Supabase." 
  },
  { 
    icon: Brain, 
    title: "🤖 Automações e IA aplicada", 
    description: "Processos 100% automatizados com IA + N8N. Análises e decisões baseadas em dados." 
  },
  { 
    icon: Rocket, 
    title: "🚀 Do zero à produção", 
    description: "Implantação rápida (MVP em dias, não meses). Stack enxuta, robusta e fácil de manter." 
  }
]; 