import { Button } from "../Button/Button";

//  Props de la sección final (permite reutilizar con distinto contenido)
type FinalCtaSectionProps = {
  title?: string; // H3 principal
  subtitle?: string; // Parrafo descriptivo
  ctaHref?: string; // URL del botón
  ctaLabel?: string; // Texto del botón
};

//  Sección final de llamada a la acción
// - Stateless: recibe contenido por props para ser reutilizable en distintas páginas
// - En caso de no recibir props, usa valores por defecto.
export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  title = "Listos para construir algo increíble juntos?",
  subtitle = "Contáctanos y conversemos sobre los objetivos de tu proyecto.",
  ctaHref = "/contact",
  ctaLabel = "Hablemos",
}) => {
  return (
    <section
      id="final-cta"
      className="py-16 bg-bonga-blue text-white"
      data-testid="final-cta"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Título: H3 por ser sección secundaria en la página */}
        <h3 className="text-2xl font-bold">{title}</h3>

        {/* Subtítulo descriptivo */}
        <p className="mt-3 text-gray-100 max-w-2xl mx-auto">{subtitle}</p>

        {/* Botón CTA: usamos el componente reutilizable CtaButton */}
        <div className="mt-6">
          <Button
            href={ctaHref}
            label={ctaLabel}
            variant="primary"
            testId="final-cta-button"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
