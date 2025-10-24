import { motion } from "framer-motion";

export const HowItWorks = () => {
  const steps = [
    { number: "1", title: "Choose your workflow" },
    { number: "2", title: "Connect your tools" },
    { number: "3", title: "Automate everything" }
  ];
  
  return (
    <section className="section-padding px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-16 tracking-tight"
        >
          three steps
        </motion.h2>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center text-2xl font-semibold">
                {step.number}
              </div>
              <p className="text-2xl">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
