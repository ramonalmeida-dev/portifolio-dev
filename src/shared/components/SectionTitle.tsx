import { motion } from "framer-motion";
import { fadeInVariants, scaleVariants } from '@/utils/animations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`text-center mb-16 ${className}`}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold font-aeonik mb-6"
        variants={scaleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}; 