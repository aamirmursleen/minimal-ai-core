import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const Solution = () => {
  const integrations = [
    "Gmail, Outlook & Email Marketing Tools",
    "Google Calendar, Notion & Productivity Apps",
    "WhatsApp, Slack, Discord & Messaging",
    "Stripe, PayPal & Payment Platforms",
    "Airtable, Google Sheets & Databases",
    "And 500+ More Integrations..."
  ];

  return (
    <section id="solution" className="section-padding px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-semibold mb-6 tracking-tight">
            the solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            7,000+ production-ready workflows deployed across 500+ platforms. Zero development time. Instant implementation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Works With ALL Your Favorite Tools
          </h3>

          {/* Integration logos placeholder */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {['Gmail', 'Slack', 'Notion', 'Stripe', 'Google', 'Airtable', 'Zapier', 'Make'].map((tool, index) => (
              <Badge key={index} variant="secondary" className="text-base px-6 py-3">
                {tool}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {integrations.map((integration, index) => (
            <div key={index} className="flex items-start gap-3 bg-background rounded-lg p-4">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <span className="font-medium">{integration}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
