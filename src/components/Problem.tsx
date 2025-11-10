import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, TrendingDown, AlertCircle } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Operational Inefficiency",
      description: "Your team spends 40% of their time on tasks that could be automated. Manual data entry, status updates, and routine communications drain resources."
    },
    {
      icon: TrendingDown,
      title: "Competitive Disadvantage",
      description: "While competitors scale with automation, you're stuck hiring more people to handle growing workloads. This limits profitability and market agility."
    },
    {
      icon: AlertCircle,
      title: "Technical Barriers",
      description: "Existing automation solutions require developers, lengthy implementations, and ongoing maintenance. The learning curve prevents adoption."
    }
  ];

  return (
    <section id="problem" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-16 tracking-tight"
        >
          the problem
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold">{problem.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-2xl font-semibold">
            Reclaim 1,000+ Hours Annually
          </p>
          <p className="text-xl text-muted-foreground">
            The average business loses $156,000 per year to manual processes. Our customers eliminate this waste entirely.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
