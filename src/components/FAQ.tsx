import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How Fast Can I Access the Workflows After Purchasing?",
      answer: "Instantly! The moment your payment is confirmed, you'll receive immediate access to your downloads page with all 7,000+ workflows, bonuses, and community access. No waiting, no delays. Start automating within the next 5 minutes. Plus, you'll get an email with your download links and community invitation."
    },
    {
      question: "Do I Need Any Technical Skills or Coding Experience?",
      answer: "Zero technical skills required. If you can copy and paste, you can use these workflows. Every workflow includes visual step-by-step guides, video tutorials, and screenshots. Our community has helped complete beginners automate their entire businesses in less than 24 hours. You'll be guided every step of the way."
    },
    {
      question: "Can I Use These Workflows for Client Projects?",
      answer: "Absolutely! Your purchase includes an Extended Commercial License worth $497. Use these workflows for unlimited client projects, sell automation services, or build entire automation agencies. Many of our members are charging $2,000-$5,000 per automation setup using these exact workflows. The ROI potential is massive."
    },
    {
      question: "What If I'm a Complete Beginner to Automation?",
      answer: "Perfect! You're exactly who this is for. 78% of our customers had zero automation experience before purchasing. The bundle includes beginner-friendly installation guides, the $349 n8n course, and access to our Skool community where you can ask questions 24/7. You'll also get weekly live webinars where we walk through everything step-by-step. You're never alone in this journey."
    },
    {
      question: "Is This Really a One-Time Payment? No Hidden Fees?",
      answer: "Yes - 100% one-time payment. Pay $37 once and you're done. Forever. You get lifetime access to all 7,000+ workflows, all bonuses, lifetime updates, community membership, and everything else. No subscriptions. No renewal fees. No hidden costs. Ever. While other automation tools charge $29-$99/month ($348-$1,188/year), you pay once and own it forever."
    },
    {
      question: "What If the Workflows Don't Work for My Business?",
      answer: "30-Day Money-Back Guarantee. No Questions Asked. If you don't save at least 10 hours in your first week, or if you're not completely satisfied for ANY reason, just email us within 30 days and we'll refund every penny. You have literally NOTHING to lose and 20+ hours per week to gain. The risk is entirely on us."
    },
    {
      question: "Why Is the Price So Low Compared to the Value?",
      answer: "This is a limited-time flash sale to build our community. Normal price is $999. We're offering 96% OFF ($37) ONLY to the next 2 customers to rapidly grow our Skool community and get more success stories. Once these 2 spots are gone, the price jumps back to $497 (and eventually $999). This is a one-time opportunity - grab it before it's gone forever."
    },
    {
      question: "How Long Will I Have Access to Updates and Support?",
      answer: "Lifetime access. Forever. Every new workflow we create, every update, every new automation - you get it ALL for free. Forever. We add 50-100 new workflows every month. Your one-time $37 investment today gives you everything we ever create in the future. Plus, lifetime access to our Skool community and all future webinars. This is insane value."
    }
  ];

  return (
    <section className="section-padding px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-6 tracking-tight text-center"
        >
          faq
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground mb-12 text-center"
        >
          Everything you need to know about deploying enterprise automation at scale
        </motion.p>

        <Accordion type="single" collapsible className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border bg-background rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground"
        >
          Still have questions? Email us:{" "}
          <a href="mailto:info@automatelion.com" className="text-accent hover:underline">
            info@automatelion.com
          </a>
        </motion.p>
      </div>
    </section>
  );
};
