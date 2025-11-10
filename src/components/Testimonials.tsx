import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "The automation workflows exceeded our expectations. We went from invisible to dominating search results in our industry. Our organic traffic increased by 680% in just 8 months.",
    name: "Sarah Chen",
    role: "CEO",
    company: "Seattle Tech Solutions",
    result: "+680% Organic Traffic Growth",
    badge: "Complete Automation Package"
  },
  {
    quote: "AutomateLion transformed our entire operations. The ready-to-use workflows saved us thousands in development costs. We automated 47 processes in the first month alone.",
    name: "Michael Rodriguez",
    role: "COO",
    company: "Digital Growth Agency",
    result: "47 Processes Automated",
    badge: "Enterprise Solution"
  },
  {
    quote: "I'm not technical, but the step-by-step guides made everything easy. We cut our manual work by 80% and our team can now focus on high-value tasks. Best investment we made.",
    name: "Jennifer Park",
    role: "Founder",
    company: "E-commerce Plus",
    result: "80% Time Savings",
    badge: "Small Business Package"
  },
  {
    quote: "The community support and weekly webinars are invaluable. I've learned more in 2 months than in years of trying other platforms. Our productivity tripled overnight.",
    name: "David Thompson",
    role: "Operations Director",
    company: "Marketing Innovators",
    result: "3x Productivity Increase",
    badge: "Full Access Member"
  },
  {
    quote: "From lead generation to client onboarding, everything is automated now. We handle 5x more clients with the same team size. The ROI was evident in just 2 weeks.",
    name: "Lisa Anderson",
    role: "Managing Director",
    company: "Consulting Pro",
    result: "5x Client Capacity",
    badge: "Premium Package"
  },
  {
    quote: "The Make.com and n8n workflows are production-ready. No debugging needed. We deployed 15 automations in our first week and saved $12K/month in operational costs.",
    name: "Robert Kim",
    role: "CTO",
    company: "SaaS Ventures",
    result: "$12K/Month Savings",
    badge: "Tech Startup Bundle"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-72"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            what our clients say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-xl">
              {/* Stars and Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex gap-1 text-yellow-500 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm font-medium px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20">
                  {currentTestimonial.badge}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Result */}
              <div className="mb-8 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                <p className="text-lg md:text-xl font-bold text-accent">
                  {currentTestimonial.result}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">{currentTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{currentTestimonial.role} at {currentTestimonial.company}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            {/* Previous */}
            <button
              onClick={goToPrevious}
              className="group w-14 h-14 rounded-full bg-accent text-white hover:bg-accent/90 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'bg-accent w-12 h-4'
                      : 'bg-muted-foreground/30 w-4 h-4 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={goToNext}
              className="group w-14 h-14 rounded-full bg-accent text-white hover:bg-accent/90 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              {currentIndex + 1} / {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
