// components/Header/Header.tsx
'use client';

import { useState } from 'react';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { IconHamburguer } from '../Services/icons';
import Link from 'next/link';

// Definimos los elementos de navegación en un arreglo.
// Así, si queremos añadir un nuevo item, solo modificamos este arreglo
const navItems = [
  { name: 'Inicio', href: '/', testId: 'nav-inicio' },
  { name: 'Servicios', href: '/services', testId: 'nav-servicios' },
  { name: 'Productos', href: '/products', testId: 'nav-productos' },
  { name: 'Contacto', href: '/contact', testId: 'nav-contacto' },
  { name: 'Nosotros', href: '/about', testId: 'nav-nosotros' },
];

export const Header: React.FC = () => {
  // Estado que controla si el menú móvil está abierto o cerrado
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-bonga-blue text-white shadow-lg" data-testid="main-header">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href={'/'}>
           {/* LOGO: Parte izquierda del header con el nombre de la empresa */}
          <div className="flex items-center space-x-2" data-testid="logo">
            <div className="w-10 h-10 bg-bonga-yellow rounded-full flex items-center justify-center">
              <span className="font-bold text-bonga-blue text-xl">BD</span>
            </div>
            <span className="text-xl font-bold">Bonga Digital</span>
          </div>
          </Link>
          {/* MENÚ EN DESKTOP: visible solo en pantallas medianas (md) o más grandes */}
          <ul className="hidden md:flex space-x-6" data-testid="nav-menu">
            {navItems.map((item) => (
              <li key={item.href}>
                {/* NavLink: componente que usa Next.js <Link> para navegación interna */}
                <NavLink href={item.href} testId={item.testId}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* BOTÓN MENÚ MÓVIL: aparece en pantallas pequeñas y abre/cierra el menú */}
          <button
            id="mobile-menu-btn"
            className="md:hidden"
            data-testid="mobile-menu-button"
            aria-expanded={open} // Atributo de accesibilidad (true/false si el menú está abierto)
            aria-controls="mobile-menu"
            onClick={() => setOpen((s) => !s)} // Alterna el estado entre abierto/cerrado
          >
            {/* Icono tipo “hamburguesa” */}
            <IconHamburguer />
          </button>
        </div>

        {/* MENÚ MÓVIL: se renderiza solo si `open` es true */}
        <MobileMenu open={open} items={navItems} />
      </nav>
    </header>
  );
};

export default Header;
