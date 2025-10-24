import { motion } from "framer-motion";

export const Logos = () => {
  const logos = ["TechCrunch", "Forbes", "Wired", "Fast Company", "VentureBeat"];
  
  return (
    <section className="py-16 px-6 border-y border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <p className="text-center text-sm text-muted-foreground mb-8">Featured in</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo) => (
            <div key={logo} className="text-2xl font-semibold text-muted-foreground/50">
              {logo}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
