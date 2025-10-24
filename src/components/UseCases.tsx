import { motion } from "framer-motion";
import { useState } from "react";

export const UseCases = () => {
  const [activeTab, setActiveTab] = useState("Creators");
  
  const tabs = {
    Creators: {
      points: [
        "Schedule content across platforms",
        "Auto-respond to comments",
        "Generate video scripts"
      ],
      testimonial: "Saved 15 hours per week on content management"
    },
    Freelancers: {
      points: [
        "Invoice clients automatically",
        "Track project hours",
        "Generate proposals"
      ],
      testimonial: "Automated 80% of my admin work"
    },
    Business: {
      points: [
        "Sync team calendars",
        "Auto-categorize emails",
        "Generate reports"
      ],
      testimonial: "Increased team productivity by 40%"
    }
  };
  
  return (
    <section className="section-padding px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-12 tracking-tight"
        >
          for everyone
        </motion.h2>
        
        <div className="flex gap-6 mb-8 border-b border-border">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 transition-colors ${
                activeTab === tab
                  ? "text-foreground border-b-2 border-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <ul className="space-y-3">
            {tabs[activeTab as keyof typeof tabs].points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          
          <blockquote className="border-l-2 border-accent pl-6 italic text-muted-foreground">
            "{tabs[activeTab as keyof typeof tabs].testimonial}"
          </blockquote>
          
          <a href="#" className="inline-block text-sm hover:text-muted-foreground transition-colors">
            Get started →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
