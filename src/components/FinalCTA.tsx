import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const FinalCTA = () => {
  return (
    <section className="section-padding px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-4 tracking-tight"
        >
          get started
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground mb-8"
        >
          Join 10,000+ professionals
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
        >
          <Input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button className="bg-accent hover:bg-accent/90">
            Get started
          </Button>
        </motion.div>
        
        <p className="text-sm text-muted-foreground">
          No credit card • Free forever
        </p>
      </div>
    </section>
  );
};
