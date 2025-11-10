import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export const Comparison = () => {
  const comparisons = [
    { feature: "7,000+ Production-Ready Automation Workflows", us: true, them: false },
    { feature: "50+ Make.com Scenario Templates", us: true, them: false },
    { feature: "Complete n8n Mastery Course ($349 Value)", us: true, them: false },
    { feature: "One-Time Payment (No Subscriptions)", us: true, them: false },
    { feature: "Lifetime Access & Future Updates", us: true, them: false },
    { feature: "Extended Commercial License", us: true, them: false },
    { feature: "Private Community & Weekly Live Training", us: true, them: false },
    { feature: "Priority Email Support (3 Months)", us: true, them: false },
    { feature: "AI Prompt Library & Zapier Power Guide", us: true, them: false },
    { feature: "Complete Setup Documentation", us: true, them: false },
    { feature: "30-Day Money-Back Guarantee", us: true, them: true }
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
            <div className="text-center">AutomateLion</div>
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
