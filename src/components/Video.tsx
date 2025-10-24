import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const Video = () => {
  return (
    <section className="section-padding px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-12 tracking-tight text-center"
        >
          see it work
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video bg-secondary rounded-3xl overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 ml-1" />
            </div>
          </div>
        </motion.div>
        
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Sarah automated her workflow in 10 minutes
          </p>
          <p className="text-xs text-muted-foreground">
            3:42 • 45K views
          </p>
        </div>
      </div>
    </section>
  );
};
