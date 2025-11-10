import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCountdown } from "@/hooks/useCountdown";
import { useState, useEffect } from "react";

export const FinalCTA = () => {
  const timeLeft = useCountdown();
  const [spotsLeft] = useState(2);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-6 tracking-tight"
        >
          get started
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground mb-12"
        >
          Join 847+ businesses that have eliminated operational bottlenecks and accelerated growth.
        </motion.p>

        {/* Countdown Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="bg-accent/10 border-accent">
            <CardContent className="p-8">
              <p className="text-sm font-medium mb-3 text-muted-foreground">
                Your 96% Discount Expires In:
              </p>
              <div className="flex justify-center gap-2 mb-2">
                {timeLeft.split(':').map((unit, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-accent text-accent-foreground text-4xl font-bold px-6 py-4 rounded-lg min-w-[80px]">
                      {unit}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {index === 0 ? 'HOURS' : index === 1 ? 'MINS' : 'SECS'}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 !text-white text-base md:text-lg !font-bold h-14 md:h-16 px-8 md:px-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            onClick={scrollToPricing}
          >
            CLAIM MY 96% DISCOUNT NOW
          </Button>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm text-muted-foreground mb-6"
        >
          Instant Download • 30-Day Money-Back Guarantee • Lifetime Access
        </motion.p>

        {/* Scarcity Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-destructive/10 border-destructive/20">
            <CardContent className="p-4">
              <p className="text-sm font-semibold flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-destructive animate-pulse" />
                Only {spotsLeft} spots left at this price. Don't miss out!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
