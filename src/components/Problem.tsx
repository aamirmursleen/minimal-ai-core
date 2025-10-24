import { motion } from "framer-motion";

export const Problem = () => {
  const problems = [
    "You're drowning in repetitive work",
    "You can't afford expensive developers",
    "AI tools are complicated"
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
          the problem
        </motion.h2>
        
        <div className="space-y-12">
          {problems.map((problem, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-3xl text-muted-foreground"
            >
              {problem}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};
