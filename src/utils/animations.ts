import { AnimationVariants } from '@/types';

// Container animations
export const containerVariants: AnimationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Item animations
export const itemVariants: AnimationVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1 }
};

// Card animations
export const cardVariants: AnimationVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// Tech item animations
export const techVariants: AnimationVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// Fade in animation
export const fadeInVariants: AnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Scale animation
export const scaleVariants: AnimationVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Slide up animation
export const slideUpVariants: AnimationVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Stagger animation for lists
export const staggerVariants: AnimationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}; 