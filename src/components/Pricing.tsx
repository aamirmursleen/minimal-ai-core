import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      period: "Free forever",
      features: [
        "3 workflows",
        "Basic automation",
        "Email support",
        "Community access",
        "Monthly updates"
      ]
    },
    {
      name: "Pro",
      price: "29",
      period: "/month",
      popular: true,
      features: [
        "Unlimited workflows",
        "Advanced automation",
        "Priority support",
        "API access",
        "Custom integrations"
      ]
    },
    {
      name: "Business",
      price: "99",
      period: "/month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Dedicated support",
        "Custom workflows",
        "SLA guarantee"
      ]
    }
  ];
  
  return (
    <section id="pricing" className="section-padding px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-16 tracking-tight text-center"
        >
          pricing
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-background rounded-2xl p-8 space-y-6 ${
                plan.popular ? "border-2 border-accent" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="bg-accent">Popular</Badge>
              )}
              <div>
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold">${plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular ? "bg-accent hover:bg-accent/90" : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get started
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
            See full pricing →
          </a>
        </div>
      </div>
    </section>
  );
};
