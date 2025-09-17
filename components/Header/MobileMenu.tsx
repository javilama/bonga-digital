

// Opción: componente cliente
'use client';

import NavLink from './NavLink';

// Definimos el tipo de cada item del menú
type NavItem = { name: string; href: string; testId?: string };

type MobileMenuProps = {
  open: boolean; // indica si el menú está abierto o cerrado
  items: NavItem[]; // lista de items a mostrar
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ open, items }) => {
  return (
    // Mostramos el menú solo cuando `open` es true. En desktop (md) siempre oculto.
    <div
      id="mobile-menu"
      className={`${open ? 'block' : 'hidden'} md:hidden mt-4`}
      data-testid="mobile-menu"
    >
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            {/* Cada enlace viene del arreglo navItems y se renderiza con NavLink */}
            <NavLink href={item.href} testId={item.testId}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
