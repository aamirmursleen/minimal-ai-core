import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export const Comparison = () => {
  const comparisons = [
    { feature: "No-code setup", us: true, them: false },
    { feature: "5-minute onboarding", us: true, them: false },
    { feature: "Pre-built workflows", us: true, them: false },
    { feature: "Affordable pricing", us: true, them: false },
    { feature: "24/7 support", us: true, them: true },
    { feature: "Regular updates", us: true, them: false }
  ];
  
  return (
    <section className="section-padding px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-16 tracking-tight text-center"
        >
          why choose us
        </motion.h2>
        
        <div className="space-y-1 border border-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-secondary p-4 font-semibold">
            <div className="col-span-1"></div>
            <div className="text-center">Other solutions</div>
            <div className="text-center">We Sell AI</div>
          </div>
          
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-3 p-4 border-t border-border"
            >
              <div>{item.feature}</div>
              <div className="flex justify-center">
                {item.them ? (
                  <Check className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex justify-center">
                {item.us ? (
                  <Check className="w-5 h-5 text-accent" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
