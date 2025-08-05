import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/constants/data";
import { SectionTitle, AnimatedBackground, AsteroidBackground } from "@/shared/components";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [TESTIMONIALS.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#030014' }}>
      <AnimatedBackground className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5" showParticles={false} />
      
      {/* Asteroid background effect */}
      <AsteroidBackground intensity="subtle" asteroidCount={8} dustCount={5} />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="O que dizem sobre mim"
          subtitle="Depoimentos de clientes que confiaram em meu trabalho e obtiveram resultados excepcionais."
        />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="glass-enhanced card-hover card-shimmer">
                <CardContent className="p-8">
                  <div className="text-center">
                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial content */}
                    <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed italic">
                      "{TESTIMONIALS[currentIndex].content}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex items-center justify-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {TESTIMONIALS[currentIndex].avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">
                          {TESTIMONIALS[currentIndex].name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {TESTIMONIALS[currentIndex].position} • {TESTIMONIALS[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/20'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;