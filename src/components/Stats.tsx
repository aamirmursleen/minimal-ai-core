import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [numericValue]);
  
  return <span>{count}</span>;
};

export const Stats = () => {
  const stats = [
    { value: "7000+", label: "Ready Workflows", emphasized: false },
    { value: "50+", label: "Make.com Scenarios", emphasized: false },
    { value: "847+", label: "Happy Customers", emphasized: false },
    { value: "96%", label: "Discount Today", emphasized: true }
  ];

  return (
    <section className="section-padding px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-semibold mb-2 ${stat.emphasized ? 'text-accent' : ''}`}>
                {stat.value.includes('+') ? (
                  <>
                    <AnimatedNumber value={stat.value} />+
                  </>
                ) : stat.value.includes('%') ? (
                  <>
                    <AnimatedNumber value={stat.value} />%
                  </>
                ) : (
                  stat.value
                )}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
