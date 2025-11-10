import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhoIsThisFor = () => {
  const personas = [
    {
      title: "Business Owners & Entrepreneurs",
      description: "Automate your operations, save thousands on hiring, and focus on growth instead of repetitive tasks. Perfect for solopreneurs and small teams."
    },
    {
      title: "Freelancers & Agencies",
      description: "Deliver automation services to clients, scale your offerings, and 10x your value without 10x-ing your hours. Great for consultants and service providers."
    },
    {
      title: "Content Creators & Marketers",
      description: "Automate your content distribution, social media posting, and email marketing. Spend less time on busywork and more time creating."
    },
    {
      title: "Growth Hackers & Sales Teams",
      description: "Automate lead generation, nurturing, and follow-ups. Build high-converting funnels that run on autopilot while you focus on closing deals."
    },
    {
      title: "AI Enthusiasts & No-Code Builders",
      description: "Explore the cutting edge of AI automation without writing code. Perfect for those who want to leverage AI tools without technical barriers."
    },
    {
      title: "Anyone Tired of Repetitive Work",
      description: "If you're copying data, sending the same emails, or doing any task more than twice — you need automation. Start reclaiming your time today."
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
            who is this for
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            From startup founders to enterprise operations teams, our automation library scales with your ambitions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{persona.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{persona.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-accent text-accent-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-3">No Technical Skills Required</h3>
              <p className="text-accent-foreground/90 text-lg">
                Our workflows are designed for beginners and experts alike. If you can copy and paste, you can use these automations.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
