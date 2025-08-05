import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const FooterSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/ramonalmeida-dev/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ramon-almeida-981314166/" },
    { icon: Mail, label: "Email", href: "mailto:ramonalmeidarocha@gmail.com" }
  ];

  const quickLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" }
  ];

  const services = [
    "Desenvolvimento SaaS",
    "Automação com IA",
    "Apps Mobile",
    "Consultoria Técnica"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="relative bg-background/95 backdrop-blur-xl border-t border-glass-border" style={{ backgroundColor: '#030014' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Floating background elements */}
      <motion.div
        className="absolute top-10 left-20 w-20 h-20 bg-primary/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-bold font-aeonik mb-4"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Ramon
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent gradient-text-animate">
                  .dev
                </span>
              </motion.h3>
              <motion.p 
                className="text-muted-foreground leading-relaxed mb-6 max-w-md"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Tech Strategist & Product Developer. Especialista em transformar ideias em produtos digitais que funcionam e geram valor real. 
                10 anos criando soluções que impactaram mais de 90 mil usuários.
              </motion.p>
              
              {/* Enhanced Newsletter */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="glass-enhanced card-hover max-w-md">
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input 
                        type="email" 
                        placeholder="Seu melhor email"
                        className="flex-1 bg-transparent border border-glass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      />
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" className="bg-gradient-primary hover:scale-105 transition-transform magnetic">
                          Inscrever
                        </Button>
                      </motion.div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Dicas semanais sobre desenvolvimento e IA
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="font-semibold mb-4 text-foreground"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Navegação
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {quickLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="font-semibold mb-4 text-foreground"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Serviços
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Estratégia Técnica",
                "Desenvolvimento de Produtos",
                "Automações e IA",
                "Do zero à produção"
              ].map((service, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="text-muted-foreground text-sm"
                  whileHover={{ 
                    x: 5,
                    color: "hsl(var(--primary))",
                    transition: { duration: 0.2 }
                  }}
                >
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Enhanced Social links and bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-glass-border"
        >
          <motion.div 
            className="flex items-center space-x-6 mb-4 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="p-2 glass-enhanced rounded-lg hover:border-primary/50 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="text-center md:text-right"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground mb-2">
              © 2024 Ramon. Todos os direitos reservados.
            </p>
            <motion.div 
              className="flex items-center justify-center md:justify-end space-x-4 text-xs text-muted-foreground"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: "Privacidade", href: "#" },
                { label: "Termos", href: "#" },
                { label: "Portfolio completo", href: "#", icon: ExternalLink }
              ].map((link, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-center">
                  {index > 0 && <span>•</span>}
                  <motion.a 
                    href={link.href} 
                    className="hover:text-primary transition-colors flex items-center gap-1"
                    whileHover={{ 
                      x: 2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {link.label}
                    {link.icon && <link.icon className="h-3 w-3" />}
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors magnetic hover:text-white"
            >
              ↑ Voltar ao topo
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced background decoration */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </footer>
  );
};

export default FooterSection;