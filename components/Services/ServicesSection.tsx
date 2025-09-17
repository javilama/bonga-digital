'use client';
import { ServiceCard } from "./ServiceCard";
import { IconWeb, IconMobile, IconConsulting, IconBug, IconMobileApp,IconMenu,IconItConsulting,IconCode } from "./icons";

export const ServicesSection: React.FC = () => {
  //  Definimos el arreglo de servicios
  const services = [
    {
      testId: "service-web",
      title: "Desarrollo Web",
      description: "Sitios web modernos y responsivos con las últimas tecnologías",
      Icon: IconWeb,
    },
    {
      testId: "service-mobile",
      title: "Aplicaciones Móviles",
      description: "Apps nativas y multiplataforma para Android e iOS",
      Icon: IconMobileApp,
    },
    {
      testId: "service-qa",
      title: "Quality Assurance",
      description: "Pruebas manuales y automatizadas para asegurar la calidad de tu software",
      Icon: IconBug,
    },
    {
      testId: "service-consulting",
      title: "Consultoría IT",
      description: "Asesoramiento estratégico para tu transformación digital",
      Icon: IconItConsulting,
    },
     {
      testId: "ux-ui-design",
      title: "UX/UI Design",
      description: "Diseño centrado en el usuario para experiencias digitales atractivas",
      Icon: IconMenu,
    },
    {
      testId: "maquetado-web-producto",
      title: "Maquetado Web",
      description: "Transforma tus diseños en sitios web funcionales y optimizados",
      Icon: IconCode,
    }
  ];

  return (
    <section
      id="servicios"
      className="py-20 bg-white"
      data-testid="services-section"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center text-bonga-dark mb-4"
          data-testid="services-title"
        >
          Nuestros Servicios
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ofrecemos soluciones completas para todas tus necesidades digitales
        </p>

        {/* CARDS SERVICIOS */}
        <div className="grid md:grid-cols-3 gap-8" data-testid="services-grid">
          {services.map(({ testId, title, description, Icon }) => (
            <ServiceCard
              key={testId}
              testId={testId}
              title={title}
              description={description}
              Icon={Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;