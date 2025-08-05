import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

interface AnimatedBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  showParticles?: boolean;
}

export const AnimatedBackground = ({ className = "", children, showParticles = true }: AnimatedBackgroundProps) => {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      {/* Particle Background */}
      {showParticles && <ParticleBackground />}
      
      {/* Animated blobs */}
      <motion.div 
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      {children}
    </div>
  );
}; 