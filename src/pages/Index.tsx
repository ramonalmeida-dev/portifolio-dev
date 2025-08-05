import { HeroSection, AboutSection, NavigationMenu } from "@/features/home";
import { TechStackSection, ProjectsSection, TestimonialsSection } from "@/features/portfolio";
import { CTASection, FooterSection } from "@/features/contact";
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavigationMenu />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
