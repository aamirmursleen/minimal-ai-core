import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Your Workflow",
      description: "Browse 7,000+ ready-made automation workflows organized by category"
    },
    {
      number: "2",
      title: "Import & Customize",
      description: "Download and import into n8n or Make.com with one click"
    },
    {
      number: "3",
      title: "Connect Your Tools",
      description: "Add your API keys and connect your favorite apps"
    },
    {
      number: "4",
      title: "Activate & Automate",
      description: "Turn it on and watch your tasks run automatically"
    }
  ];

  return (
    <section className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-16 tracking-tight text-center"
        >
          see it work
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
