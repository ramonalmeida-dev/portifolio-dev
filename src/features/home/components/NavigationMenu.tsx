import { motion } from "framer-motion";
import { MENU_ITEMS } from '@/constants/data';
import { useScrollToSection } from '@/shared/hooks/useScrollToSection';
import { useActiveSection } from '@/shared/hooks/useActiveSection';

const NavigationMenu = () => {
  const { scrollToSection } = useScrollToSection();
  const { activeSection } = useActiveSection(MENU_ITEMS);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4"
    >
      <div className="glass-enhanced rounded-full px-6 py-3 backdrop-blur-md border border-foreground/10 max-w-2xl w-full">
        <ul className="flex items-center justify-center space-x-1">
          {MENU_ITEMS.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <button
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.label}
              </button>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavigationMenu; 