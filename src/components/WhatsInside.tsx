import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Share2, Mail, Building2, ShoppingCart, BarChart3, Zap } from "lucide-react";

export const WhatsInside = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content Engine",
      items: [
        "Multi-model AI integration (GPT-4, Claude, Gemini)",
        "Automated content pipeline management",
        "Brand voice consistency enforcement",
        "Dynamic content personalization",
        "SEO optimization workflows",
        "Visual content generation"
      ]
    },
    {
      icon: Share2,
      title: "Omnichannel Distribution",
      items: [
        "Unified multi-platform publishing",
        "Intelligent content adaptation",
        "Engagement optimization algorithms",
        "Community management automation",
        "Performance analytics dashboards",
        "Influencer relationship workflows"
      ]
    },
    {
      icon: Mail,
      title: "Marketing Automation Suite",
      items: [
        "Behavioral email sequencing",
        "Lifecycle marketing campaigns",
        "Dynamic content personalization",
        "Multi-touch attribution",
        "Automated A/B testing",
        "Conversion optimization"
      ]
    },
    {
      icon: Building2,
      title: "Sales & CRM Intelligence",
      items: [
        "Intelligent lead scoring",
        "Automated qualification workflows",
        "Pipeline management automation",
        "Revenue forecasting",
        "Customer success triggers",
        "Account-based marketing"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Operations",
      items: [
        "Order fulfillment automation",
        "Dynamic inventory optimization",
        "Payment processing workflows",
        "Customer service automation",
        "Retention campaign triggers",
        "Review generation systems"
      ]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      items: [
        "Real-time reporting dashboards",
        "Automated data aggregation",
        "Cross-platform analytics",
        "Predictive insights engine",
        "Alert & notification systems",
        "KPI tracking automation"
      ]
    }
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
          <Badge className="mb-6">ENTERPRISE AUTOMATION LIBRARY</Badge>
          <h2 className="text-5xl font-semibold mb-6 tracking-tight">
            what's inside
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            7,000+ production-grade workflows spanning every business function. Battle-tested by companies processing millions in revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
        >
          <Card className="bg-accent text-accent-foreground hover:shadow-xl transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">9 Additional Categories</h3>
              <p className="text-accent-foreground/90">
                Comprehensive coverage across AI Assistants, Project Management, HR Systems, Security & Compliance, Research Tools, Scheduling, Document Processing, Financial Operations, and 500+ platform integrations.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
