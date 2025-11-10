import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const WhatYouReceive = () => {
  const features = [
    {
      title: "7,000+ Ready-to-Deploy Workflows",
      description: "Every workflow is tested, documented, and ready to import. Just download, customize with your API keys, and launch."
    },
    {
      title: "Organized by Category & Use-Case",
      description: "No more hunting through messy folders. Everything is neatly organized so you can find exactly what you need in seconds."
    },
    {
      title: "Complete Setup & Import Guides",
      description: "Step-by-step PDF tutorials with screenshots showing you exactly how to import and configure each workflow type."
    },
    {
      title: "Lifetime Updates & New Workflows",
      description: "Get free lifetime updates as we add new workflows every month. Your one-time payment = forever access."
    }
  ];

  return (
    <section className="section-padding px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-semibold mb-6 tracking-tight">
            what you receive
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            This isn't just a collection of files, it's a complete automation system ready to transform your business
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground rounded-full p-2 flex-shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg border bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-muted-foreground mb-4">Workflows Preview Screenshot</p>
                <img
                  src="https://cdn.shopify.com/s/files/1/0990/5550/1653/files/Workflows.jpg?v=1762517889"
                  alt="Workflows Preview"
                  className="rounded-lg shadow-lg w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
