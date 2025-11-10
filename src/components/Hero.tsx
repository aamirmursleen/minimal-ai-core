import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const Hero = () => {
  const benefits = [
    "7,000+ Ready-to-Use Workflows",
    "$349 n8n Course Included FREE",
    "3 Months Email Support",
    "No Coding Required",
    "Lifetime Updates Included",
    "Instant Digital Download"
  ];

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <Badge className="bg-accent text-accent-foreground text-sm px-4 py-1.5 animate-pulse">
              LIMITED TIME: 96% OFF FLASH SALE
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-balance"
          >
            Transform Your Business Operations in Under 5 Minutes
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance max-w-4xl mx-auto"
          >
            Access the world's largest automation library with 7,000+ battle-tested workflows. Deploy enterprise-grade automation without writing a single line of code.
          </motion.p>

          {/* Benefit Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-left">{benefit}</span>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Pre-configured. Production-ready. Zero technical complexity. Start automating in minutes, not months.
          </motion.p>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 rounded-lg border bg-secondary/50 p-8 max-w-4xl mx-auto"
          >
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Product Dashboard Screenshot</span>
            </div>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center gap-4 mb-8"
          >
            <p className="text-sm text-muted-foreground">Trusted by 10,000+ professionals</p>
            <div className="flex -space-x-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-secondary border-2 border-background"
                />
              ))}
            </div>
            <div className="flex items-center gap-1 text-lg">
              <span className="text-accent">★★★★★</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              4.9 from 2,400 reviews
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 !text-white text-base md:text-lg !font-bold h-14 md:h-16 px-8 md:px-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              onClick={scrollToPricing}
            >
              GET LIFETIME ACCESS NOW
            </Button>
            <p className="text-sm text-muted-foreground">
              Instant Digital Download • No Monthly Fees • Lifetime Updates
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
