
import StatsCard from './StatsCard';

/**
 * Tipo para cada estadística en el grid.
 * - id: clave única
 * - target: valor numérico objetivo para el count-up
 * - suffix: sufijo que aparecerá después del número (ej: '+', '%')
 * - label: texto descriptivo que aparece debajo del número
 */
type StatItem = {
  id: string;
  target: number;
  suffix?: string;
  label: string;
  testId?: string;
};

/**
 * Datos de ejemplo.
 * - Añadir una nueva estadística = agregar un nuevo objeto al arreglo.
 * - Para i18n o datos dinámicos, pasa este arreglo desde la página como prop.
 */
const STATS: StatItem[] = [
  { id: 'projects', target: 120, suffix: '+', label: 'Proyectos entregados', testId: 'stat-projects' },
  { id: 'retention', target: 85, suffix: '%', label: 'Retención de clientes', testId: 'stat-retention' },
  { id: 'years', target: 10, suffix: '+', label: 'Años de experiencia', testId: 'stat-years' },
];

/**
 * StatsSection
 * - Sección que renderiza un grid de StatsCard.
 * - No maneja estado propio; cada StatsCard es el que anima su número.
 */
export const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-16" data-testid="stats-section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {STATS.map((s) => (
            <StatsCard
              key={s.id}
              target={s.target}
              suffix={s.suffix}
              label={s.label}
              duration={1400} // duracion de la animación (puedes modificar por item si quieres)
              testId={s.testId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
