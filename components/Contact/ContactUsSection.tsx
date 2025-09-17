import ContactCTA from "./ContactCTA";

//  Componente que renderiza la sección de contacto completa
// - Contiene título, subtítulo y el CTA (ContactCTA)
// - Está documentado con comentarios para que un dev junior entienda cada parte
export const ContactUs: React.FC = () => {
  return (
    <section
      id="contacto"
      className="py-20 bg-white"
      data-testid="contact-section"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Título principal de la sección */}
        <h2 className="text-4xl font-bold text-bonga-dark mb-6">
          ¿Listo para empezar?
        </h2>

        {/* Descripción breve que invita al usuario a actuar */}
        <p className="text-gray-600 mb-8">
          Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad.
        </p>

        {/* Botón/CTA: reutiliza el componente ContactCTA
- Por defecto hace mailto:contacto@bonga.com
- Si necesitas cambiar la URL, pásala como prop */}
        <ContactCTA testId="contact-cta" />
      </div>
    </section>
  );
};

export default ContactUs;
