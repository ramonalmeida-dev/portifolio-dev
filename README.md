# 🚀 Portfolio Template - React + TypeScript + Tailwind CSS

Um template moderno e profissional para portfólios de desenvolvedores, construído com as melhores tecnologias e práticas de desenvolvimento.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite)

## ✨ Características

### 🎨 **Design Moderno**
- **Interface elegante** com design glassmorphism
- **Animações suaves** com Framer Motion
- **Efeitos visuais** de asteroides e partículas cósmicas
- **Responsivo** para todos os dispositivos
- **Tema escuro** com gradientes profissionais

### 🏗️ **Arquitetura Profissional**
- **Feature-based architecture** para organização escalável
- **Componentes reutilizáveis** com props tipadas
- **Hooks customizados** para lógica compartilhada
- **TypeScript** para type safety completo
- **Separação clara** entre UI e business logic

### ⚡ **Performance Otimizada**
- **Vite** para build ultra-rápido
- **Code splitting** automático
- **Tree shaking** para bundle otimizado
- **Lazy loading** de componentes
- **Imagens otimizadas** e lazy loading

### 🎯 **Funcionalidades**
- **Seções modulares** (Hero, About, Tech Stack, Projects, Testimonials, Contact)
- **Navegação suave** com scroll spy
- **Formulários interativos** com validação
- **Animações de entrada** e hover effects
- **Efeitos de parallax** e scroll-based animations

## 🛠️ Tecnologias

### **Core**
- [React 18](https://reactjs.org/) - Biblioteca JavaScript para interfaces
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Vite](https://vitejs.dev/) - Build tool ultra-rápido

### **Styling & UI**
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI modernos
- [Framer Motion](https://www.framer.com/motion/) - Animações fluidas
- [Lucide React](https://lucide.dev/) - Ícones consistentes

### **Development**
- [ESLint](https://eslint.org/) - Linting de código
- [Prettier](https://prettier.io/) - Formatação automática
- [React Router](https://reactrouter.com/) - Roteamento

## 🚀 Começando

### **Pré-requisitos**
- Node.js 18+ 
- npm, yarn ou pnpm

### **Instalação**

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/portfolio-template.git
cd portfolio-template
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. **Abra no navegador**
```
http://localhost:5173
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes UI (shadcn/ui)
│   └── ui/            # Design system
├── features/           # Arquitetura baseada em features
│   ├── home/          # Hero, About, Navigation
│   ├── portfolio/     # Tech Stack, Projects, Testimonials
│   └── contact/       # CTA, Footer
├── shared/            # Recursos compartilhados
│   ├── components/    # Componentes reutilizáveis
│   ├── hooks/         # Hooks customizados
│   ├── types/         # Tipos compartilhados
│   └── utils/         # Utilitários
├── pages/             # Páginas da aplicação
├── constants/         # Dados e configurações
├── types/             # Tipos globais
├── utils/             # Utilitários globais
└── lib/               # Configurações de bibliotecas
```

## 🎨 Personalização

### **1. Dados do Portfólio**

Edite `src/constants/data.ts` para personalizar:

```typescript
// Seus dados pessoais
export const PERSONAL_INFO = {
  name: "Seu Nome",
  title: "Seu Título",
  email: "seu@email.com",
  phone: "+55 (11) 99999-9999",
  location: "São Paulo, SP",
  github: "https://github.com/seu-usuario",
  linkedin: "https://linkedin.com/in/seu-usuario"
};

// Seus projetos
export const PROJECTS = [
  {
    title: "Nome do Projeto",
    description: "Descrição do projeto...",
    technologies: ["React", "TypeScript", "Node.js"],
    image: "🚀",
    category: "Web App",
    result: "Resultado alcançado...",
    url: "https://projeto.com"
  }
];
```

### **2. Cores e Tema**

Personalize as cores em `tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Suas cores customizadas
      }
    }
  }
}
```

### **3. Componentes**

Cada seção é um componente independente em `src/features/`:

- **HeroSection**: Seção principal com apresentação
- **AboutSection**: Sobre você e habilidades
- **TechStackSection**: Suas tecnologias
- **ProjectsSection**: Seus projetos
- **TestimonialsSection**: Depoimentos de clientes
- **CTASection**: Call-to-action para contato

### **4. Efeitos Visuais**

O componente `AsteroidBackground` pode ser configurado:

```typescript
<AsteroidBackground 
  intensity="subtle"    // subtle | medium | strong
  asteroidCount={12}    // Quantidade de asteroides
  dustCount={8}         // Quantidade de poeira cósmica
/>
```

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build

# Qualidade de código
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige problemas de linting
npm run format       # Formata código com Prettier

# TypeScript
npm run type-check   # Verifica tipos TypeScript
```

## 🎯 Melhores Práticas Implementadas

### **✅ Arquitetura**
- Feature-based organization
- Componentes reutilizáveis
- Hooks customizados
- Type safety completo
- Separação de responsabilidades

### **✅ Performance**
- Code splitting automático
- Lazy loading de componentes
- Imagens otimizadas
- Bundle size otimizado
- Tree shaking

### **✅ UX/UI**
- Animações suaves
- Feedback visual
- Acessibilidade
- Responsividade
- Loading states

### **✅ Code Quality**
- TypeScript strict mode
- ESLint + Prettier
- Component testing ready
- Error boundaries
- Performance monitoring

## 🔧 Configuração Avançada

### **Deploy**

#### **Vercel (Recomendado)**
```bash
npm install -g vercel
vercel
```

#### **Netlify**
```bash
npm run build
# Upload da pasta dist/
```

#### **GitHub Pages**
```bash
npm run build
# Configure GitHub Actions para deploy automático
```

### **SEO**
- Meta tags configuráveis
- Open Graph tags
- Sitemap automático
- Robots.txt

### **Analytics**
- Google Analytics
- Hotjar
- Custom events

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) pelos componentes
- [Framer Motion](https://www.framer.com/motion/) pelas animações
- [Tailwind CSS](https://tailwindcss.com/) pelo styling
- [Vite](https://vitejs.dev/) pela build tool

## 📞 Suporte

Se você encontrou algum problema ou tem sugestões:

- [Issues](https://github.com/seu-usuario/portfolio-template/issues)
- [Discussions](https://github.com/seu-usuario/portfolio-template/discussions)

---

⭐ **Se este template te ajudou, considere dar uma estrela no repositório!**

---

**Desenvolvido com ❤️ por [Seu Nome]**
