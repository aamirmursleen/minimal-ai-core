import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsInside } from "@/components/WhatsInside";
import { WhatYouReceive } from "@/components/WhatYouReceive";
import { Bonuses } from "@/components/Bonuses";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { SkoolCommunity } from "@/components/SkoolCommunity";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <HowItWorks />
      <WhatsInside />
      <WhatYouReceive />
      <Bonuses />
      <WhoIsThisFor />
      <Comparison />
      <Pricing />
      <SkoolCommunity />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
