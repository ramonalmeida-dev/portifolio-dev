// Project Types
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  result: string;
  url: string;
}

// Tech Stack Types
export interface TechCategory {
  category: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

// Testimonial Types
export interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

// CTA Types
export interface CTAOption {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action: string;
  primary: boolean;
}

// Navigation Types
export interface MenuItem {
  id: string;
  label: string;
  href: string;
}

// Skill Types
export interface Skill {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Animation Variants - Compatible with Framer Motion
export interface AnimationVariants {
  [key: string]: any;
} 