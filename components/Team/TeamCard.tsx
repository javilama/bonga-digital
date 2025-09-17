
import Image from "next/image";

export type TeamMember = {
  id: string;        // clave única
  name: string;      // nombre completo
  role: string;      // cargo/rol (ej: Lead Dev)
  imageUrl: string;  // url de la foto (puede ser local en /public o externa)
  alt?: string;      // texto alternativo para la imagen (accesibilidad)
  testId?: string;   // opcional, útil para pruebas automatizadas
};

/**
 * TeamCard
 * - Componente puro y presentacional que muestra la foto, nombre y rol de un miembro del equipo.
 * - Stateless: no usa hooks ni efectos, por lo que es seguro renderizar en servidor.
 * - Props:
 *    - member: objeto con la información del miembro (ver TeamMember)
 */
export const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <article
      className="bg-white p-6 rounded-lg shadow-sm text-center"
      data-testid={member.testId}
    >
      {/* Imagen redonda del miembro */}
      <Image
        src={member.imageUrl}
        alt={member.alt ?? `${member.name} - foto`}
        className="w-24 h-24 rounded-full mx-auto object-cover"
        width={96}
        height={96}
        loading="lazy" // mejora performance al cargar imágenes
      />

      {/* Nombre */}
      <h5 className="mt-4 font-semibold">{member.name}</h5>

      {/* Rol o cargo */}
      <p className="text-sm text-gray-500">{member.role}</p>
    </article>
  );
};

export default TeamCard;
