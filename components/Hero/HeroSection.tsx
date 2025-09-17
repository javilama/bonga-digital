// Opción: componente cliente
'use client';

import { Button } from "../Button/Button";

interface HeroSectionProps {

  tittle: React.ReactNode;
  spanTittle: string;
  content:string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({

  tittle,
  spanTittle,
  content
}) => {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-r from-bonga-blue to-blue-600 text-white py-20"
      data-testid="hero-section"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6" data-testid="hero-title">
          {tittle}{" "}
          <span className="text-bonga-yellow">{spanTittle}</span>
        </h1>
        <p
          className="text-xl mb-8 max-w-2xl mx-auto"
          data-testid="hero-subtitle"
        >
          {content}
        </p>

        {/* Botones CTA */}
        <div className="space-x-4">
          <Button
            testId="cta-primary"
            label="Conocer Servicios"
            href="/services"
            variant="primary"
          />
          <Button
            testId="cta-secondary"
            label="Ver Portfolio"
            href="/portfolio"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
