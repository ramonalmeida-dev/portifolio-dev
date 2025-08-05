import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { CTA_OPTIONS } from "@/constants/data";
import { SectionTitle, AnimatedBackground, AsteroidBackground } from "@/shared/components";
import { containerVariants, itemVariants } from "@/utils/animations";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#030014' }}>
      <AnimatedBackground className="bg-gradient-to-br from-primary/10 via-background to-accent/10" showParticles={false} />
      
      {/* Asteroid background effect */}
      <AsteroidBackground intensity="subtle" asteroidCount={6} dustCount={4} />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Vamos trabalhar juntos"
          subtitle="Escolha a melhor forma de entrarmos em contato e vamos transformar sua ideia em realidade."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CTA_OPTIONS.map((option, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className={`glass-enhanced card-hover card-shimmer h-full overflow-hidden ${
                option.primary ? 'border-primary/30 bg-primary/5' : ''
              }`}>
                <CardContent className="p-8 relative">
                  <div className="relative z-10 text-center">
                    <motion.div 
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <option.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {option.description}
                    </p>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="lg"
                        className={`w-full transition-all duration-300 ${
                          option.primary 
                            ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl' 
                            : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 shadow-md hover:shadow-lg'
                        }`}
                        onClick={() => {
                          if (option.title === "WhatsApp") {
                            window.open('https://wa.me/5587991698350', '_blank');
                          } else if (option.title === "Email direto") {
                            window.open('mailto:ramonalmeidarocha@gmail.com', '_blank');
                          }
                          // Para "Agendar reunião" pode adicionar um modal ou link do calendly
                        }}
                      >
                        {option.action}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
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

export default CTASection;