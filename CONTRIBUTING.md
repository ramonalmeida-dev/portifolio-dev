# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o Portfolio Template! Este documento fornece diretrizes para contribuições.

## 📋 Como Contribuir

### **1. Reportando Bugs**

- Use o template de issue para bugs
- Inclua passos para reproduzir o problema
- Adicione screenshots se relevante
- Especifique seu ambiente (OS, navegador, versões)

### **2. Sugerindo Melhorias**

- Descreva a funcionalidade desejada
- Explique o benefício para outros usuários
- Inclua mockups ou exemplos se possível

### **3. Enviando Pull Requests**

1. **Fork o repositório**
2. **Crie uma branch** para sua feature
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Faça suas mudanças** seguindo as diretrizes
4. **Teste suas mudanças** localmente
5. **Commit suas mudanças**
   ```bash
   git commit -m 'feat: adiciona nova funcionalidade'
   ```
6. **Push para sua branch**
   ```bash
   git push origin feature/nova-funcionalidade
   ```
7. **Abra um Pull Request**

## 🎯 Diretrizes de Código

### **TypeScript**
- Use TypeScript strict mode
- Defina tipos para todas as props
- Evite `any` - use tipos específicos
- Use interfaces para objetos complexos

### **React**
- Use functional components
- Implemente hooks customizados quando necessário
- Siga as regras dos hooks
- Use memoização quando apropriado

### **Styling**
- Use Tailwind CSS classes
- Mantenha consistência com o design system
- Use variáveis CSS para cores
- Siga mobile-first approach

### **Performance**
- Implemente lazy loading para componentes grandes
- Otimize imagens e assets
- Use React.memo quando apropriado
- Evite re-renders desnecessários

### **Acessibilidade**
- Use semantic HTML
- Implemente ARIA labels
- Teste com screen readers
- Mantenha contraste adequado

## 📝 Padrões de Commit

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona nova funcionalidade
fix: corrige bug na navegação
docs: atualiza documentação
style: ajusta formatação
refactor: refatora componente
test: adiciona testes
chore: atualiza dependências
```

## 🧪 Testes

### **Executando Testes**
```bash
npm run test
npm run test:watch
npm run test:coverage
```

### **Escrevendo Testes**
- Teste componentes isoladamente
- Use React Testing Library
- Teste comportamento, não implementação
- Mantenha cobertura de testes alta

## 🎨 Design System

### **Cores**
- Use as cores definidas no tema
- Mantenha consistência visual
- Teste em modo escuro/claro

### **Componentes**
- Siga o padrão shadcn/ui
- Mantenha props consistentes
- Documente props obrigatórias

### **Animações**
- Use Framer Motion
- Mantenha animações suaves
- Considere preferências de redução de movimento

## 📚 Documentação

### **Comentando Código**
- Comente lógica complexa
- Documente APIs públicas
- Use JSDoc para funções

### **README**
- Mantenha README atualizado
- Inclua exemplos de uso
- Documente configurações

## 🔧 Configuração Local

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/portfolio-template.git
   cd portfolio-template
   ```

2. **Instale dependências**
   ```bash
   npm install
   ```

3. **Configure pre-commit hooks**
   ```bash
   npm run prepare
   ```

4. **Inicie servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

## 🚀 Checklist para Pull Requests

- [ ] Código segue padrões do projeto
- [ ] Testes passam
- [ ] Documentação atualizada
- [ ] Não quebra funcionalidades existentes
- [ ] Responsivo em diferentes dispositivos
- [ ] Acessível (testado com screen reader)
- [ ] Performance não degradada

## 🎉 Reconhecimento

Contribuições significativas serão reconhecidas no README do projeto.

## 📞 Suporte

Se você tem dúvidas sobre contribuição:

- Abra uma [Discussion](https://github.com/seu-usuario/portfolio-template/discussions)
- Entre em contato via [Issues](https://github.com/seu-usuario/portfolio-template/issues)

---

**Obrigado por contribuir! 🚀** 