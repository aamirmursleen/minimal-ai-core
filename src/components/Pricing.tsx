import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";

export const Pricing = () => {
  const timeLeft = useCountdown();

  const features = [
    { title: "7,000+ Ready-to-Use n8n Workflows", value: "$397" },
    { title: "50+ Make.com Scenario Bundle", value: "$197" },
    { title: "Complete Installation Guides", value: "$97" },
    { title: "Extended Commercial License", value: "$147" },
    { title: "BONUS: Zapier Power Guide", value: "$97" },
    { title: "BONUS: AI Prompt Pack", value: "$64" },
    { title: "BONUS: Lifetime Updates", value: "Priceless" }
  ];

  const paymentMethods = ["Visa", "Mastercard", "Amex", "PayPal"];

  return (
    <section id="pricing" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-6 bg-accent text-accent-foreground animate-pulse">
            FLASH SALE ENDING IN {timeLeft}
          </Badge>
          <h2 className="text-5xl font-semibold mb-4 tracking-tight">
            pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Get 96% OFF - Limited Time Offer!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-lg border bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Bundle Product Image</p>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-accent text-accent-foreground">Limited Time Offer!</Badge>
                <h3 className="text-3xl font-semibold mb-8">
                  The Complete AutomateLion Automation Bundle
                </h3>

                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span className="font-medium">{feature.title}</span>
                      </div>
                      <span className="text-muted-foreground whitespace-nowrap">{feature.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-secondary/50 rounded-lg p-6 mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">$999</span>
                    <Badge variant="destructive">Regular Price</Badge>
                  </div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-bold text-accent">$37</span>
                    <span className="text-xl text-muted-foreground">Today Only</span>
                  </div>
                  <p className="text-lg font-semibold text-accent">
                    You Save: $962 (96% OFF)
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    ⚠️ Price increases in {timeLeft}
                  </p>
                </div>

                <Button className="w-full h-14 md:h-16 text-base md:text-lg !font-bold bg-accent hover:bg-accent/90 !text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] mb-4">
                  YES! GIVE ME 96% OFF NOW
                </Button>

                <p className="text-sm text-muted-foreground text-center mb-4">
                  Instant Access • 100% Secure Checkout • Lifetime Updates
                </p>

                <div className="flex justify-center gap-4 mb-6">
                  {paymentMethods.map((method, index) => (
                    <Badge key={index} variant="secondary">
                      {method}
                    </Badge>
                  ))}
                </div>

                {/* Guarantee */}
                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-accent flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          100% Risk-Free 30-Day Money-Back Guarantee
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Try AutomateLion for 30 days. If you don't save at least 10 hours in your first week, we'll refund every penny. No questions asked. You have nothing to lose and 1,000+ hours per year to gain.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
