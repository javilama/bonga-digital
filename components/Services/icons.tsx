export const IconWeb = () => (
  <svg
    className="w-8 h-8 text-bonga-blue"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden
  >
    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
  </svg>
);

export const IconMobile = () => (
  <svg
    className="w-8 h-8 text-bonga-blue"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden
  >
    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V7zM9 11a1 1 0 000 2h2a1 1 0 100-2H9z" />
  </svg>
);

export const IconConsulting = () => (
  <svg
    className="w-8 h-8 text-bonga-blue"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Icono de "menú" o "líneas horizontales"
// Usamos stroke="currentColor" porque el diseño es de contorno
export const IconMenu = () => (
  <svg
    className="w-8 h-8 text-bonga-blue"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h8m-8 6h16"
    />
  </svg>
);

// Icono de "aplicaciones móviles" (MobileApp)
// Se dibuja con contorno (stroke)
export const IconMobileApp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4.354a4 4 0 010 7.292M8 10H4m16 0h-4m-6 4h4m-4 4h4"
    />
  </svg>
);

// Ícono para "Servicios de QA"
export const IconQA = () => (
  <svg
    className="w-8 h-8 text-bonga-blue"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    {/* Rectángulo principal simulando un portapapeles */}
    <path d="M9 2h6a2 2 0 012 2v1h1a2 2 0 012 2v13a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h1V4a2 2 0 012-2z" />

    {/* Clip superior */}
    <path d="M9 4h6v2H9z" />

    {/* Checklist */}
    <path d="M9 10l2 2 4-4" />
    <path d="M9 16h6" />
  </svg>
);

// 🐞 Icono de Quality Assurance (QA) - Mariquita
export const IconBug = () => (
  <svg
    className="w-8 h-8 text-bonga-blue"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    {/* Cuerpo principal */}
    <circle
      cx="12"
      cy="12"
      r="8"
      className="text-bonga-blue"
      fill="currentColor"
    />

    {/* Línea divisoria al medio (alas) */}
    <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="2" />

    {/* Cabeza */}
    <circle cx="12" cy="5" r="2" fill="black" />

    {/* Puntos en las alas */}
    <circle cx="9" cy="10" r="1.2" fill="black" />
    <circle cx="15" cy="10" r="1.2" fill="black" />
    <circle cx="9" cy="14" r="1.2" fill="black" />
    <circle cx="15" cy="14" r="1.2" fill="black" />
  </svg>
);

export const IconItConsulting = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 17v-2h6v2m-7 4h8a2 2 0 002-2v-6H5v6a2 2 0 002 2zM15 9V7a3 3 0 00-6 0v2"
    />
  </svg>
);
// Icono de Código </>
export const IconCode = () => (
  <svg
    className="w-8 h-8 text-bonga-blue"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    {/* Flecha izquierda (<) */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6L4 12l6 6"
    />
    {/* Flecha derecha (>) */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 6l6 6-6 6"
    />
  </svg>
);
// de impresora
export const IconPrinter = () => (
  <svg
    className="w-8 h-8 text-bonga-blue"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    {/* Parte superior (papel) */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 9V2h12v7"
    />
    {/* Cuerpo de la impresora */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18h12v4H6zM4 9h16v8H4z"
    />
  </svg>
);

// Soporte tecnico
export const IconSupport = () => (
  <svg
    className="w-8 h-8 text-bonga-yellow"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    {/* Audífonos de soporte */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12a8 8 0 0116 0v4a2 2 0 01-2 2h-2v-4h4M8 18H6a2 2 0 01-2-2v-4"
    />
    {/* Micrófono */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 22a4 4 0 004-4H8a4 4 0 004 4z"
    />
  </svg>
);
// web www
export const IconWorld = () => (
  <svg
    className="w-8 h-8 text-bonga-dark"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    {/* Círculo principal */}
    <circle cx="12" cy="12" r="9" strokeWidth={2} stroke="currentColor" />
    {/* Meridianos */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.5 9h19M2.5 15h19"
    />
    {/* Paralelos */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18"
    />
  </svg>
);

export const IconHamburguer = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
