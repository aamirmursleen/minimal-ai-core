import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Problem } from "@/components/Problem";
import { Products } from "@/components/Products";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Courses } from "@/components/Courses";
import { UseCases } from "@/components/UseCases";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Logos />
      <Problem />
      <Products />
      <HowItWorks />
      <Stats />
      <Courses />
      <UseCases />
      <Video />
      <Testimonials />
      <Comparison />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
