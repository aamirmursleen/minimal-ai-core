import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, GraduationCap, HeadphonesIcon } from "lucide-react";

export const Bonuses = () => {
  const courseFeatures = [
    "Comprehensive curriculum (Beginner to Expert)",
    "50+ hands-on video modules",
    "Production-ready project templates",
    "Advanced API integration patterns",
    "Performance optimization strategies",
    "Enterprise-level troubleshooting"
  ];

  const supportFeatures = [
    "Implementation troubleshooting",
    "Complex integration assistance",
    "Architecture design consultation",
    "Best practices & optimization",
    "Scalability recommendations",
    "Priority 24-hour response SLA"
  ];

  return (
    <section className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-accent text-accent-foreground">EXCLUSIVE ACCELERATOR PACKAGE</Badge>
          <h2 className="text-5xl font-semibold mb-6 tracking-tight">
            bonuses
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Premium training and expert support ($349 value) included at no additional cost
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Bonus #1 - n8n Course */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all border-2 border-accent">
              <CardHeader className="bg-accent/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <Badge variant="default" className="w-fit">ACCELERATOR #1 - $349 VALUE</Badge>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl mb-3">n8n Implementation Mastery</CardTitle>
                    <p className="text-muted-foreground text-lg">
                      Complete certification program covering workflow architecture, advanced integrations, and enterprise deployment strategies
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {courseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-secondary/50 rounded-lg p-6 border border-accent/20">
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong className="text-foreground">FLASH SALE EXCLUSIVE</strong> - This certification program typically requires $349 enrollment. During this promotion, it's included at no additional cost with your bundle purchase.
                  </p>
                  <p className="text-2xl font-bold text-accent">$349 VALUE - INCLUDED FREE</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Accelerator #2 - Expert Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all border-2 border-accent">
              <CardHeader className="bg-accent/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <Badge variant="default" className="w-fit">ACCELERATOR #2 - PRICELESS</Badge>
                </div>
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <HeadphonesIcon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl mb-3">90-Day Expert Support Access</CardTitle>
                    <p className="text-muted-foreground text-lg">
                      Direct access to automation specialists who understand enterprise implementation challenges
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4 cursor-pointer hover:opacity-90 transition-opacity">
                    <p className="text-muted-foreground">Email Support Example Screenshot (Click to zoom)</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic text-center">
                    Real example of our expert support helping customers solve complex automation challenges
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {supportFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Total Value Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-accent text-accent-foreground text-center">
              <CardContent className="p-8">
                <p className="text-3xl font-bold mb-2">Accelerator Package Value: $349+</p>
                <p className="text-xl opacity-90">
                  Included at no additional cost with your AutomateLion purchase
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
