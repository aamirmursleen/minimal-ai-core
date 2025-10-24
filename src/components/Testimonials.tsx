import { motion } from "framer-motion";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "This changed how I work. I can't imagine going back to manual processes.",
      name: "Alex Chen",
      role: "Product Designer"
    },
    {
      quote: "The ROI was immediate. We saved 30 hours in the first week alone.",
      name: "Sarah Williams",
      role: "Startup Founder"
    },
    {
      quote: "Simple, powerful, and actually works as advertised. Rare combo.",
      name: "Michael Brown",
      role: "Marketing Director"
    }
  ];
  
  return (
    <section className="section-padding px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-16 tracking-tight text-center"
        >
          what people say
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 space-y-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="text-lg">{testimonial.quote}</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
