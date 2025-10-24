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
      question: "How quickly can I set this up?",
      answer: "Most users are up and running in under 5 minutes. Just choose a workflow, connect your tools, and you're done."
    },
    {
      question: "Do I need coding skills?",
      answer: "Not at all. Everything is visual and intuitive. If you can use a smartphone, you can use our platform."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, absolutely. No contracts, no commitments. Cancel with one click whenever you want."
    },
    {
      question: "What integrations do you support?",
      answer: "We integrate with 500+ tools including Gmail, Slack, Notion, Airtable, and all major platforms."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We use bank-level encryption and never store your credentials. All connections are secure and private."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee, no questions asked."
    },
    {
      question: "Can I upgrade or downgrade?",
      answer: "Yes, switch plans anytime. Changes take effect immediately."
    },
    {
      question: "Do you offer support?",
      answer: "Yes, we offer email support for all users and priority support for Pro and Business plans."
    }
  ];
  
  return (
    <section className="section-padding px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-16 tracking-tight text-center"
        >
          faq
        </motion.h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
