import { motion } from "framer-motion";
import { CartDrawer } from "./CartDrawer";

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight">
          We Sell AI
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm hover:text-foreground/60 transition-colors">
            Products
          </a>
          <a href="#courses" className="text-sm hover:text-foreground/60 transition-colors">
            Courses
          </a>
          <a href="#pricing" className="text-sm hover:text-foreground/60 transition-colors">
            Pricing
          </a>
        </div>
        
        <CartDrawer />
      </div>
    </motion.nav>
  );
};
