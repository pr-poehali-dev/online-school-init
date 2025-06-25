import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Courses />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;
