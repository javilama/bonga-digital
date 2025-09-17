export type OfferCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  testId?: string;
};

//  Componente puro y presentacional que muestra una tarjeta de oferta.
// - Stateles: no mantiene estado
// - Reutilizable: se puede usar en cualquier sección que muestre features/servicios
export const OfferCard: React.FC<OfferCardProps> = ({
  icon,
  title,
  description,
  testId,
}) => {
  return (
    <article
      className="bg-white rounded-lg p-6 shadow hover:shadow-md transition text-left"
      data-testid={testId}
    >
      {/* Contenedor con icono y título */}
      <div className="flex items-center gap-4">
        {/* Icono: puede ser emoji o componente SVG. Está dentro de un círculo */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          aria-hidden
        >
          {icon}
        </div>

        {/* Título */}
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>

      {/* Descripción */}
      <p className="mt-3 text-gray-600">{description}</p>
    </article>
  );
};

export default OfferCard;
