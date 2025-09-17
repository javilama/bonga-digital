

export type ValueCardProps = {
  title: string;         // Título del valor (ej: "Transparencia")
  description: string;   // Descripción corta del valor
  testId?: string;       // Opcional: para pruebas con React Testing Library
};

/**
 * ValueCard
 * - Componente puro (stateless) que representa una tarjeta con un valor de la empresa.
 * - Recibe props para que sea reutilizable en otras secciones o pages.
 * - Comentarios explicativos para que un dev junior entienda su estructura.
 */
export const ValueCard: React.FC<ValueCardProps> = ({ title, description, testId }) => {
  return (
    <article
      className="bg-white p-6 rounded-lg shadow-sm"
      data-testid={testId} // atributo útil para testing
    >
      {/* Título de la tarjeta */}
      <h4 className="font-semibold mb-2">{title}</h4>

      {/* Descripción / cuerpo de la tarjeta */}
      <p className="text-gray-600">{description}</p>
    </article>
  );
};

export default ValueCard;
