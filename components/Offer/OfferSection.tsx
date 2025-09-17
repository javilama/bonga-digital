'use client';

import OfferCard from "./OfferCard";
import { IconCode, IconQA, IconConsulting, IconBug,IconItConsulting, IconPrinter } from "../../components/Services/icons";
import { IconSupport } from '../Services/icons';

//  Tipo para los items que mostraremos
type OfferItem = {
  id: string;
  title: string;
  description: string;
  // icon puede ser un componente React (SVG) o un emoji
  icon: React.ReactNode;
  testId?: string;
};

//  Array con las ofertas. Si quieres añadir una nueva oferta, solo agrega un objeto aquí.
const OFFERS: OfferItem[] = [
  {
    id: "custom-dev",
    title: "Desarrollo a medida",
    description: "Web apps, APIs y arquitecturas modulares para tu negocio.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-bonga-yellow text-white flex items-center justify-center">
        <IconCode />
      </div>
    ),
    testId: "offer-dev",
  },
  {
    id: "qa",
    title: "Quality Assurance",
    description: "Pruebas manuales y automáticas para mantener la calidad.",
    // usamos un SVG importado como icono (previamente definido en components/icons.tsx)
    icon: (
      <div className="w-12 h-12 rounded-full bg-bonga-yellow text-bonga-blue flex items-center justify-center">
        <IconBug />
      </div>
    ),
    testId: "offer-qa",
  },
  {
    id: "consulting",
    title: "Consultoría tecnológica",
    description: "Estrategia y arquitectura que reduce riesgos y costos.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-bonga-blue text-bonga-yellow flex items-center justify-center">
        <IconItConsulting />
      </div>
    ),
    testId: "offer-consulting",
  },
  {
    id: "printer-service",
    title: "Servicio técnico de impresoras",
    description: "Reparación y mantenimiento de impresoras de todas las marcas.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-bonga-yellow text-bonga-blue flex items-center justify-center">
        <IconPrinter />
      </div>
    ),
    testId: "offer-consulting",
  },
  {
    id: "tecnical-support",
    title: "Soporte técnico",
    description: "Soporte remoto y en sitio para resolver tus problemas IT.",
    icon: (
      <div className="w-12 h-12 rounded-full bg-bonga-blue text-bonga-blue flex items-center justify-center">
        <IconSupport />
      </div>
    ),
    testId: "offer-consulting",
  },
];

//  Componente que renderiza la sección "Qué ofrecemos" con un grid responsivo
// - Mantiene comentarios para un dev junior
export const OfferSection: React.FC = () => {
  return (
    <section
      id="what-we-offer"
      className="py-16 bg-gray-50"
      data-testid="offers-section"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Título de la sección */}
        <h3 className="text-2xl font-bold text-bonga-dark mb-8">
          Qué ofrecemos
        </h3>

        {/* Grid que recorre el arreglo OFFERS y renderiza una OfferCard por item */}
        <div className="grid md:grid-cols-3 gap-6">
          {OFFERS.map((o) => (
            <OfferCard
              key={o.id}
              icon={o.icon}
              title={o.title}
              description={o.description}
              testId={o.testId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
