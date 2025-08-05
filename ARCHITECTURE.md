# 🏗️ Arquitetura do Projeto

## 📁 Estrutura de Pastas

```
src/
├── components/          # Componentes UI (shadcn/ui)
│   └── ui/            # Componentes base do design system
├── features/           # Arquitetura baseada em features
│   ├── home/          # Feature: Página inicial
│   │   ├── components/
│   │   └── index.ts
│   ├── portfolio/     # Feature: Portfólio e projetos
│   │   ├── components/
│   │   └── index.ts
│   └── contact/       # Feature: Contato e CTA
│       ├── components/
│       └── index.ts
├── shared/            # Recursos compartilhados
│   ├── components/    # Componentes reutilizáveis
│   ├── hooks/         # Hooks customizados
│   ├── types/         # Tipos compartilhados
│   └── utils/         # Utilitários compartilhados
├── pages/             # Páginas da aplicação
├── constants/         # Constantes e dados
├── types/             # Tipos globais
├── utils/             # Utilitários globais
├── lib/               # Bibliotecas e configurações
└── hooks/             # Hooks específicos do shadcn/ui
```

## 🎯 Princípios Arquiteturais

### 1. **Feature-Based Architecture**
- Cada feature é um domínio independente
- Componentes organizados por funcionalidade
- Exports centralizados em `index.ts`

### 2. **Separação de Responsabilidades**
- **UI Components**: Componentes base do design system
- **Business Components**: Lógica de negócio específica
- **Shared Components**: Componentes reutilizáveis

### 3. **Organização de Hooks**
- **Shared Hooks**: Hooks customizados reutilizáveis
- **UI Hooks**: Hooks específicos do shadcn/ui

### 4. **Padrões de Nomenclatura**
- **Components**: PascalCase (ex: `HeroSection`)
- **Hooks**: camelCase com prefixo `use` (ex: `useActiveSection`)
- **Files**: kebab-case (ex: `use-active-section.ts`)

## 🔧 Melhores Práticas

### ✅ Implementadas
- ✅ Feature-based architecture
- ✅ Componentes reutilizáveis
- ✅ Hooks customizados organizados
- ✅ Types centralizados
- ✅ Constants organizadas
- ✅ Exports centralizados
- ✅ Separação clara entre UI e business logic

### 🚫 Evitadas
- ❌ Duplicação de componentes
- ❌ Arquivos desnecessários
- ❌ Imports desorganizados
- ❌ Lógica espalhada

## 📦 Estrutura de Features

### **Home Feature**
```
features/home/
├── components/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   └── NavigationMenu.tsx
└── index.ts
```

### **Portfolio Feature**
```
features/portfolio/
├── components/
│   ├── TechStackSection.tsx
│   ├── ProjectsSection.tsx
│   └── TestimonialsSection.tsx
└── index.ts
```

### **Contact Feature**
```
features/contact/
├── components/
│   ├── CTASection.tsx
│   └── FooterSection.tsx
└── index.ts
```

## 🎨 Componentes Compartilhados

### **AsteroidBackground**
- Componente reutilizável para efeitos de asteroides
- Configurável por intensidade e quantidade
- Usado em todas as seções

### **AnimatedBackground**
- Background animado com partículas
- Configurável para diferentes contextos

### **SectionTitle**
- Título padronizado para seções
- Animações consistentes

## 🔄 Fluxo de Dados

1. **Pages** → Importam features
2. **Features** → Importam shared components
3. **Shared Components** → Usam hooks e utils
4. **Constants** → Dados centralizados
5. **Types** → Tipagem global

## 🚀 Benefícios

- **Manutenibilidade**: Código organizado e fácil de manter
- **Reutilização**: Componentes e hooks reutilizáveis
- **Escalabilidade**: Estrutura preparada para crescimento
- **Performance**: Imports otimizados e sem duplicação
- **Colaboração**: Estrutura clara para trabalho em equipe 