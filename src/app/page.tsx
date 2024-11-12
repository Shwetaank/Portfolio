import FAQSection from "@/components/section/faq/FAQSection";
import HeroSection from "@/components/section/hero/HeroSection";
import TestimonialSection from "@/components/section/testimonial/TestimonialSection";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="testimonials">
        <TestimonialSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
    </div>
  );
};

export default MainPage;
