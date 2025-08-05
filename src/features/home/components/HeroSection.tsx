import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, Users, Target } from "lucide-react";


const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Enhanced asteroid particle system
  const asteroids = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    duration: 12 + Math.random() * 8,
    delay: Math.random() * 6,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 2 + 1,
  }));



  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" style={{ backgroundColor: '#030014' }}>
      {/* Asteroid background effect */}
      {asteroids.map((asteroid) => (
        <motion.div
          key={asteroid.id}
          className="absolute bg-white/40 rounded-full z-5 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
          style={{
            left: `${asteroid.x}%`,
            top: `${asteroid.y}%`,
            width: `${asteroid.size}px`,
            height: `${asteroid.size}px`,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.5],
            x: [0, Math.random() * 200 - 100],
            rotate: [0, 360],
            scale: [1, 0.8, 0.6],
            opacity: [0, 1, 0.9, 0.6, 0],
          }}
          transition={{
            duration: asteroid.duration,
            repeat: Infinity,
            delay: asteroid.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Subtle cosmic dust */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute w-1 h-1 bg-white/20 rounded-full z-5 shadow-[0_0_4px_rgba(255,255,255,0.4)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -150, -300],
            x: [0, Math.random() * 60 - 30, Math.random() * 60 - 30],
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Distributed blur effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 z-5">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/8 via-purple-400/4 to-transparent rounded-full blur-xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/6 via-purple-300/3 to-transparent rounded-full blur-lg" />
      </div>

      <div className="absolute top-3/4 right-1/4 w-48 h-48 z-5">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/8 via-blue-400/4 to-transparent rounded-full blur-xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/6 via-blue-300/3 to-transparent rounded-full blur-lg" />
      </div>

      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 z-5">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/6 via-purple-400/3 to-transparent rounded-full blur-xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/4 via-purple-300/2 to-transparent rounded-full blur-lg" />
      </div>

      <div className="absolute top-1/2 right-1/3 w-40 h-40 z-5">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/6 via-blue-400/3 to-transparent rounded-full blur-xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/4 via-blue-300/2 to-transparent rounded-full blur-lg" />
      </div>



      {/* Main content */}
      <motion.div 
        className="relative z-30 max-w-7xl mx-auto px-6 text-center flex-1 flex items-center justify-center"
        style={{ y, opacity }}
      >
        <div className="space-y-12">
          {/* Title section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold font-aeonik leading-tight text-white"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Ramon Almeida
              </span>
            </motion.h1>

            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-white/90"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Tech Strategist & Product Developer
            </motion.h2>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            className="text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            Transformo ideias em produtos rentáveis em até{" "}
            <span className="text-purple-300 font-bold">3 semanas</span>
            <Target className="inline-block ml-2 text-blue-300" />
          </motion.p>

          {/* Achievement cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            {[
              { icon: "💡", text: "+100 mil usuários impactados", color: "purple" },
              { icon: "🚀", text: "R$ 50 mil+ em receita com MVPs", color: "blue" },
              { icon: "📦", text: "MVP validado em 3 semanas", color: "cyan" },
              { icon: "📈", text: "Micro-SaaS com R$ 30 mil+ faturamento anualmente", color: "pink" },
            ].map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="glass-enhanced card-hover card-shimmer h-full overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">
                        {card.icon}
                      </div>
                      <div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                        {card.text}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ 
                y: -4,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Button 
                size="lg" 
                className="glass-enhanced card-hover card-shimmer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-10 py-4 text-xl font-bold rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://wa.me/5587991698350', '_blank')}
              >
                <span className="mr-3 text-2xl">📱</span>
                Vamos conversar
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                y: -4,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="glass-enhanced card-hover card-shimmer border-2 border-white/10 bg-white/2 backdrop-blur-sm hover:bg-white/5 hover:border-white/20 px-10 py-4 text-xl font-bold rounded-2xl text-white hover:text-white transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                    });
                  }
                }}
              >
                <Briefcase className="mr-3 h-6 w-6" />
                Ver projetos
              </Button>
            </motion.div>
          </motion.div>

          {/* Status indicators */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 text-sm"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ 
                y: -2,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="flex items-center gap-3 glass-enhanced card-hover card-shimmer px-4 py-2 rounded-full border border-green-400/10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-medium">Disponível para novos projetos</span>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                y: -2,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="flex items-center gap-3 glass-enhanced card-hover card-shimmer px-4 py-2 rounded-full border border-blue-400/10">
                <Users className="h-4 w-4 text-blue-300" />
                <span className="text-blue-300 font-medium">+20 clientes atendidos</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>


    </section>
  );
};

export default HeroSection;