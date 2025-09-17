import TeamCard, { TeamMember } from './TeamCard';

/**
 * Arreglo de ejemplo con los miembros del equipo.
 * - Para añadir o quitar miembros solo edita este arreglo.
 * - Si necesitas contenido dinámico, pasa este arreglo desde la página principal por props.
 */
const TEAM: TeamMember[] = [
  {
    id: 'mary',
    name: 'Maria José Sierra',
    role: 'Lead Qa',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=60&auto=format&fit=crop',
    testId: 'team-ana',
  },
  {
    id: 'jairo',
    name: 'Jairo Avila',
    role: 'Lead Dev',
    imageUrl:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=60&auto=format&fit=crop',
    testId: 'team-carlos',
  },
  {
    id: 'maria',
    name: 'María Gómez',
    role: 'QA Engineer',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=60&auto=format&fit=crop',
    testId: 'team-maria',
  },
  {
    id: 'javier',
    name: 'Gabriel Royert',
    role: 'Design Lead',
    imageUrl:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=60&auto=format&fit=cro',
    testId: 'team-javier',
  },
];

/**
 * TeamSection
 * - Renderiza la sección completa "Nuestro equipo" y mapea el arreglo TEAM para crear TeamCard.
    * - Stateless: no usa hooks ni efectos, por lo que es seguro renderizar en servidor.
 */
export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-gray-50" data-testid="team-section">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <h3 className="text-2xl font-bold text-bonga-dark text-center mb-8">
          Nuestro equipo
        </h3>

        {/* Grid responsive: sm=2 cols, md=4 cols */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
