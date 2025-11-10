import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight">
          AutomateLion
        </a>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('problem')} className="text-sm hover:text-foreground/60 transition-colors">
            The Problem
          </button>
          <button onClick={() => scrollToSection('solution')} className="text-sm hover:text-foreground/60 transition-colors">
            The Solution
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-sm hover:text-foreground/60 transition-colors">
            Proof
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-foreground/60 transition-colors">
            Pricing
          </button>
        </div>

        <Button size="sm" className="bg-accent hover:bg-accent/90" onClick={() => scrollToSection('pricing')}>
          Get Lifetime Access
        </Button>
      </div>
    </motion.nav>
  );
};
