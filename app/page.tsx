import { ServicesSection } from "@/components/Services/ServicesSection";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ProductsSection } from "@/components/Products/ProductSection";
import ContactSection from "@/components/Contact/ContactSection";
import StatsSection from "@/components/Stats/StatsSection";
import { Carousel } from "@/components/Slider";
import type { SlideItem } from "@/components/Slider";
import { CarouselWrapper } from "@/components/Slider";







export default function Home() {
  return (
    <>
      <HeroSection
        tittle=" Transformamos tus Ideas en "
        spanTittle="Soluciones Digitales"
        content="En Bonga Digital creamos software innovador que impulsa tu crecimiento"
      />
      <ServicesSection />
      <StatsSection />
      <CarouselWrapper />
      <ProductsSection />
      <ContactSection />
    </>
  );
}
