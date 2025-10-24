import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const avatars = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-semibold tracking-tight mb-6 text-balance"
        >
          Automate Everything.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-muted-foreground mb-8 text-balance"
        >
          AI workflows that save 20 hours a week. Zero code required.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-6 mb-8"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">Trusted by 10,000+ professionals</p>
            <div className="flex -space-x-2">
              {avatars.map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-secondary border-2 border-background"
                />
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span>★★★★★</span>
              <span className="text-muted-foreground">4.9 from 2,400 reviews</span>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="inline-block w-2 h-2 rounded-full bg-accent mr-1 animate-pulse" />
              1,247 active now
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Browse Workflows →
            </Button>
            <Button size="lg" variant="ghost">
              Watch demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            No code • 5-minute setup • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};
