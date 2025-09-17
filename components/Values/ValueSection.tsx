import ValueCard from './ValueCard';

/**
 * Tipo interno para definir los valores que se renderizarán.
 * - id: clave única usada como key en el map
 * - title / description: contenido de la tarjeta
 * - testId: opcional, para pruebas
 */
type ValueItem = {
  id: string;
  title: string;
  description: string;
  testId?: string;
};

/**
 * Arreglo con los valores a mostrar.
 * - Si quieres agregar un valor nuevo, solo añade un objeto aquí.
 * - Alternativamente puedes mover este arreglo a la página y pasarlo por props
 *   si necesitas internacionalización (i18n) o contenido dinámico.
 */
const VALUES: ValueItem[] = [
  {
    id: 'transparency',
    title: 'Transparencia',
    description: 'Comunicación clara y reportes constantes en cada entrega.',
    testId: 'value-transparency',
  },
  {
    id: 'quality',
    title: 'Calidad',
    description: 'Automatización de pruebas y revisión continua del código.',
    testId: 'value-quality',
  },
  {
    id: 'collaboration',
    title: 'Colaboración',
    description: 'Trabajamos junto a tus equipos para transferir conocimiento.',
    testId: 'value-collaboration',
  },
];

/**
 * ValuesSection
 * - Componente que renderiza la sección completa "Nuestros valores".
 * - No necesita estado local, por eso puede ser un Server Component en Next.js App Router.
 * - Mantiene data-testid en la sección y en cada tarjeta para facilitar pruebas automatizadas.
 */
export const ValuesSection: React.FC = () => {
  return (
    <section id="values" className="py-16" data-testid="values-section">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <h3 className="text-2xl font-bold text-bonga-dark text-center mb-8">
          Nuestros valores
        </h3>

        {/* Grid responsivo: mapea el arreglo VALUES para renderizar ValueCard por cada item */}
        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <ValueCard
              key={v.id}
              title={v.title}
              description={v.description}
              testId={v.testId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
