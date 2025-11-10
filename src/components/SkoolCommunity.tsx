import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SkoolCommunity = () => {
  const benefits = [
    {
      title: "Weekly Live Webinars",
      description: "Join expert-led sessions every Thursday. Q&A, workflow breakdowns, automation deep-dives, and exclusive strategies."
    },
    {
      title: "Instant Expert Support",
      description: "Get answers from real automation pros, not bots. Average response time: under 2 hours. Available 24/7."
    },
    {
      title: "Premium Resources Library",
      description: "Exclusive courses, advanced templates, automation blueprints, and member-only content worth $1,000s."
    },
    {
      title: "VIP Early Access",
      description: "Be first to get new workflows, beta features, and exclusive content before anyone else. Members-only perks."
    }
  ];

  const stats = [
    { value: "847+", label: "Active Members", subtitle: "Building automation empires" },
    { value: "52+", label: "Webinars Hosted", subtitle: "Every Thursday @ 2PM ET" },
    { value: "$497", label: "Annual Value", subtitle: "Yours FREE Forever" }
  ];

  const communityImages = [
    { label: "Community Dashboard", live: false },
    { label: "LIVE", live: true },
    { label: "247+ Active", live: false },
    { label: "Success Stories", live: false },
    { label: "Resources", live: false },
    { label: "VIP Perks", live: false }
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
          <Badge className="mb-6 bg-accent text-accent-foreground">
            BONUS #3 - PRIVATE COMMUNITY ACCESS
          </Badge>
          <h2 className="text-5xl font-semibold mb-6 tracking-tight">
            community
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
            Connect with 800+ automation experts, get live training every week, and access exclusive resources you won't find anywhere else.
          </p>
          <Badge className="text-lg px-6 py-2" variant="secondary">
            INCLUDED FREE - Worth $497/Year
          </Badge>
        </motion.div>

        {/* Community Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
        >
          {communityImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center relative">
                  {image.live && (
                    <Badge className="absolute top-2 right-2 bg-red-500 animate-pulse">
                      LIVE
                    </Badge>
                  )}
                  <span className="text-muted-foreground font-medium">{image.label}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-semibold mb-8 text-center">
            What You Get Inside the Academy
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <Button variant="outline" size="lg">
            PREVIEW THE ACADEMY NOW →
          </Button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="font-semibold mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Value Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-semibold mb-4">The Math:</h4>
              <p className="text-lg text-muted-foreground mb-4">
                Other communities charge $49-$99/month = $588-$1,188/year. You get lifetime access for $37.
              </p>
              <p className="text-xl font-bold text-accent">
                That's literally 16-32 years of membership for the price of a pizza. Insane.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
