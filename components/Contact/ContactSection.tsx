'use client';

import ContactForm from './ContactForm';

//  Componente wrapper que contiene la sección completa de contacto
//    - Contiene título, descripción, el formulario y los contenedores de estado
export const ContactSection: React.FC = () => {
  // Podemos pasar un callback al ContactForm si queremos reaccionar al envío exitoso
  const handleSuccess = (data: any) => {
    // Aquí podrías, por ejemplo, abrir un modal, enviar eventos a analytics, etc.
    console.log('Contacto enviado:', data);
  };

  return (
    <section id="contacto" className="py-20 bg-white" data-testid="contact-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-bonga-dark mb-4" data-testid="contact-title">
          Contáctanos
        </h2>
        <p className="text-center text-gray-600 mb-12">¿Listo para transformar tu idea en realidad?</p>

        <div className="max-w-2xl mx-auto">
          {/* ContactForm incluye validaciones, mensajes y manejo de envío */}
          <ContactForm onSuccess={handleSuccess} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;