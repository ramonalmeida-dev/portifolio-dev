import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Rocket, Target } from "lucide-react";
import { SKILLS } from "@/constants/data";
import { SectionTitle, AnimatedBackground, AsteroidBackground } from "@/shared/components";
import { containerVariants, itemVariants } from "@/utils/animations";

const AboutSection = () => {
  return (
    <section id="about" className="relative" style={{ backgroundColor: '#030014' }}>
      {/* Background with smooth gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/20 via-[#030014]/40 to-[#030014] z-10" />
      
      {/* Asteroid background effect */}
      <AsteroidBackground intensity="medium" asteroidCount={15} dustCount={10} />
      
      {/* Content with proper z-index */}
      <div className="relative z-20 pt-32 pb-24">
        <AnimatedBackground className="bg-gradient-to-b from-[#030014]/50 to-[#030014]" showParticles={false} />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Sobre mim"
            subtitle="Especialista em transformar ideias em produtos digitais que funcionam, escalam e vendem. 10 anos criando soluções que impactaram milhares de usuários."
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SKILLS.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="glass-enhanced card-hover card-shimmer h-full overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <skill.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;