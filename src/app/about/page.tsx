import AboutSection from "@/components/section/about/AboutMeSection";
import CertificationSection from "@/components/section/certifications/CertificationSection";
import EducationSection from "@/components/section/education/EducationSection";
import ModernServiceSection from "@/components/section/services/ServiceSection";
import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <section>
        <AboutSection />
      </section>
      <section id="services-skills">
        <ModernServiceSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="certifications">
        <CertificationSection />
      </section>
    </main>
  );
};

export default AboutPage;
