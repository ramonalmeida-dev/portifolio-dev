import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TECH_CATEGORIES } from "@/constants/data";
import { SectionTitle, AnimatedBackground, AsteroidBackground } from "@/shared/components";
import { containerVariants, itemVariants } from "@/utils/animations";
import { getTechIcon, getFallbackEmoji } from "@/utils/tech-icons";

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-24 relative" style={{ backgroundColor: '#030014' }}>
      <AnimatedBackground showParticles={false} />
      
      {/* Asteroid background effect */}
      <AsteroidBackground intensity="subtle" asteroidCount={12} dustCount={8} />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Tech Stack"
          subtitle="Tecnologias modernas e ferramentas que utilizo para criar soluções escaláveis e performáticas."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TECH_CATEGORIES.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="glass-enhanced card-hover card-shimmer group h-full overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        className="text-4xl"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {category.image}
                      </motion.div>
                      <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
                        {category.category}
                      </Badge>
                    </div>
                    
                    <motion.h3 
                      className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      {category.title}
                    </motion.h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Tech Cards Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ 
                            scale: 1.05,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          className="bg-secondary/10 border-2 border-foreground/40 rounded-lg p-3 cursor-pointer transition-all duration-300 hover:border-primary/70 hover:bg-primary/5 group/tech"
                        >
                          <div className="text-center">
                            <div className="flex justify-center items-center mb-2 h-8">
                              <img 
                                src={getTechIcon(tech)} 
                                alt={`${tech} logo`}
                                className="h-6 w-auto max-w-full object-contain group-hover/tech:scale-110 transition-transform duration-200"
                                onError={(e) => {
                                  console.log(`Erro ao carregar logo para ${tech}:`, getTechIcon(tech));
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = document.createElement('div');
                                  fallback.className = 'text-lg group-hover/tech:scale-110 transition-transform duration-200';
                                  fallback.textContent = getFallbackEmoji(tech);
                                  target.parentNode?.appendChild(fallback);
                                }}
                                onLoad={() => {
                                  console.log(`Logo carregada com sucesso para ${tech}:`, getTechIcon(tech));
                                }}
                              />
                            </div>
                            <div className="text-xs font-medium text-foreground/90 group-hover/tech:text-primary transition-colors duration-200">
                              {tech}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection; 