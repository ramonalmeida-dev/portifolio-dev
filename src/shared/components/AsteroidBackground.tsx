import { motion } from "framer-motion";

interface AsteroidBackgroundProps {
  asteroidCount?: number;
  dustCount?: number;
  intensity?: 'subtle' | 'medium' | 'strong';
}

const AsteroidBackground = ({ 
  asteroidCount = 12, 
  dustCount = 8, 
  intensity = 'subtle' 
}: AsteroidBackgroundProps) => {
  // Configurações baseadas na intensidade
  const config = {
    subtle: {
      asteroidOpacity: 0.15,
      dustOpacity: 0.1,
      asteroidShadow: '0_0_4px_rgba(255,255,255,0.25)',
      dustShadow: '0_0_2px_rgba(255,255,255,0.15)',
      asteroidSize: { min: 2, max: 4 },
      dustSize: { min: 1, max: 2 },
      asteroidDuration: { min: 15, max: 25 },
      dustDuration: { min: 12, max: 20 }
    },
    medium: {
      asteroidOpacity: 0.25,
      dustOpacity: 0.15,
      asteroidShadow: '0_0_6px_rgba(255,255,255,0.4)',
      dustShadow: '0_0_3px_rgba(255,255,255,0.25)',
      asteroidSize: { min: 3, max: 5 },
      dustSize: { min: 1.5, max: 2.5 },
      asteroidDuration: { min: 12, max: 20 },
      dustDuration: { min: 10, max: 16 }
    },
    strong: {
      asteroidOpacity: 0.35,
      dustOpacity: 0.2,
      asteroidShadow: '0_0_8px_rgba(255,255,255,0.6)',
      dustShadow: '0_0_4px_rgba(255,255,255,0.4)',
      asteroidSize: { min: 4, max: 6 },
      dustSize: { min: 2, max: 3 },
      asteroidDuration: { min: 10, max: 16 },
      dustDuration: { min: 8, max: 14 }
    }
  };

  const currentConfig = config[intensity];

  // Asteroid particle system
  const asteroids = Array.from({ length: asteroidCount }, (_, i) => ({
    id: i,
    size: Math.random() * (currentConfig.asteroidSize.max - currentConfig.asteroidSize.min) + currentConfig.asteroidSize.min,
    duration: currentConfig.asteroidDuration.min + Math.random() * (currentConfig.asteroidDuration.max - currentConfig.asteroidDuration.min),
    delay: Math.random() * 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 1.5 + 0.5,
  }));

  // Cosmic dust
  const cosmicDust = Array.from({ length: dustCount }, (_, i) => ({
    id: i,
    size: Math.random() * (currentConfig.dustSize.max - currentConfig.dustSize.min) + currentConfig.dustSize.min,
    duration: currentConfig.dustDuration.min + Math.random() * (currentConfig.dustDuration.max - currentConfig.dustDuration.min),
    delay: Math.random() * 8,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <>
      {/* Asteroid background effect */}
      {asteroids.map((asteroid) => (
        <motion.div
          key={asteroid.id}
          className="absolute bg-white rounded-full z-5"
          style={{
            left: `${asteroid.x}%`,
            top: `${asteroid.y}%`,
            width: `${asteroid.size}px`,
            height: `${asteroid.size}px`,
            opacity: currentConfig.asteroidOpacity,
            boxShadow: currentConfig.asteroidShadow,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.3],
            x: [0, Math.random() * 120 - 60],
            rotate: [0, 360],
            scale: [1, 0.8, 0.6],
            opacity: [0, currentConfig.asteroidOpacity, currentConfig.asteroidOpacity * 0.7, currentConfig.asteroidOpacity * 0.3, 0],
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
      {cosmicDust.map((dust) => (
        <motion.div
          key={`dust-${dust.id}`}
          className="absolute bg-white rounded-full z-5"
          style={{
            left: `${dust.x}%`,
            top: `${dust.y}%`,
            width: `${dust.size}px`,
            height: `${dust.size}px`,
            opacity: currentConfig.dustOpacity,
            boxShadow: currentConfig.dustShadow,
          }}
          animate={{
            y: [0, -80, -160],
            x: [0, Math.random() * 30 - 15, Math.random() * 30 - 15],
            scale: [0, 1, 0],
            opacity: [0, currentConfig.dustOpacity, 0],
          }}
          transition={{
            duration: dust.duration,
            repeat: Infinity,
            delay: dust.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default AsteroidBackground; 