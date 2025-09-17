'use client';

import Link from 'next/link';


//  Props del botón/CTA
// - href: URL a la que apunta (por defecto un mailto)
// - label: texto del botón
// - testId: opcional, útil para pruebas automatizadas
type ContactCTAProps = {
  href?: string;
  label?: string;
  testId?: string;
};

//  Componente Button/CTA que redirige a una URL (por ejemplo mailto)
// - Está pensado para ser simple y reutilizable en varias páginas
// - Usa <a> en lugar de <Link> porque puede apuntar a mailto o recursos externos
export const ContactCTA: React.FC<ContactCTAProps> = ({
  href = "/contact",
  label = "Contáctanos",
  testId,
}) => {
  return (
    <Link
      href={href}
      className="bg-bonga-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
      data-testid={testId}
      // target y rel permiten abrir en nueva pestaña de forma segura
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {label}
    </Link>
  );
};

export default ContactCTA;
