

import FinalCtaSection from "@/components/CTA/FinalCtaSection";
import { HeroSection } from "@/components/Hero/HeroSection";
import OfferSection from "@/components/Offer/OfferSection";
import StatsSection from "@/components/Stats/StatsSection";
import TeamSection from "@/components/Team/TeamSection";
import ValuesSection from "@/components/Values/ValueSection";

const About = () => {
  return (
    <>
    
    <HeroSection tittle={
         <div>
      Somos{" "}
      <span className="text-bonga-yellow">Bonga Digital</span>,{" "}
      transformando ideas en productos digitales
    </div>
    } spanTittle=" " content="Diseñamos, desarrollamos y acompañamos el crecimiento tecnológico con soluciones confiables, escalables y centradas en el usuario." />

    <OfferSection />
    <ValuesSection />
    <TeamSection />
    <StatsSection />
    <FinalCtaSection />
    
    </>
    
  );
}

export default About;
