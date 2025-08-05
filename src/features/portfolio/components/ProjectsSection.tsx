import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/constants/data";
import { SectionTitle, AnimatedBackground, AsteroidBackground } from "@/shared/components";
import { containerVariants, itemVariants } from "@/utils/animations";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative" style={{ backgroundColor: '#030014' }}>
      <AnimatedBackground showParticles={false} />
      
      {/* Asteroid background effect */}
      <AsteroidBackground intensity="subtle" asteroidCount={10} dustCount={6} />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Projetos que fazem a diferença"
          subtitle="Cada projeto é uma oportunidade de criar algo extraordinário. Veja alguns cases de sucesso e os resultados alcançados."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROJECTS.map((project, index) => (
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
                        {project.image}
                      </motion.div>
                      <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <motion.h3 
                      className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ 
                            scale: 1.1,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-secondary/50 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300 border-primary/20"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="bg-primary/5 border border-primary/10 rounded-lg p-4 mb-6"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <div className="text-sm text-primary font-medium mb-1">Resultado</div>
                      <div className="text-foreground/90">{project.result}</div>
                    </motion.div>

                    <motion.div 
                      className="flex gap-3"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 shadow-md hover:shadow-lg transition-all duration-300 hover:text-white"
                          onClick={() => project.url !== "#" && window.open(project.url, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver projeto
                        </Button>
                      </motion.div>
                    </motion.div>
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

export default ProjectsSection;