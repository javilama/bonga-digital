
'use client';

import React from 'react';

//  Definimos los tipos de filtro que puede tener la sección de productos
type FilterType = 'all' | 'webs' | 'tools' | 'platforms';

//  Props que recibirá el componente ProductFilters
type ProductFiltersProps = {
  activeFilter: FilterType;                 // Filtro actualmente seleccionado
  onFilterChange: (filter: FilterType) => void; // Función para cambiar el filtro
};

//  Componente que muestra los botones de filtros (Todos, SaaS, Herramientas, Plataformas)
const ProductFilters: React.FC<ProductFiltersProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  //  Array con la configuración de cada botón de filtro
  // Esto hace más fácil añadir/quitar filtros en el futuro
  const filters: { label: string; value: FilterType; testId: string }[] = [
    { label: 'Todos', value: 'all', testId: 'filter-all' },
    { label: 'Webs', value: 'webs', testId: 'filter-webs' },
    { label: 'Herramientas', value: 'tools', testId: 'filter-tools' },
    { label: 'Plataformas', value: 'platforms', testId: 'filter-platforms' },
  ];

  return (
    <div
      className="flex justify-center mb-8"
      data-testid="product-filters"
    >
      {/*  Recorremos el arreglo de filtros y renderizamos un botón por cada uno */}
      {filters.map((filter, index) => {
        // Clases base compartidas por todos los botones
        const baseClasses =
          'filter-btn px-4 md:px-6 py-2 border border-bonga-blue transition-colors w-[30%] md: w-auto text-center text-sm font-medium sm:text-base';

        // Estilos condicionales según si el filtro está activo o no
        const activeClasses =
          activeFilter === filter.value
            ? 'bg-bonga-blue text-white'
            : 'bg-white text-bonga-blue';

        //  Bordes redondeados (solo en los extremos izquierdo y derecho)
        const roundedClasses =
          index === 0
            ? 'rounded-l-lg'
            : index === filters.length - 1
            ? 'rounded-r-lg'
            : '';

        return (
          <button
            key={filter.value}                  // clave única para React
            data-testid={filter.testId}         // usado para pruebas automatizadas
            onClick={() => onFilterChange(filter.value)} // cambiamos el filtro al hacer click
            className={`${baseClasses} ${activeClasses} ${roundedClasses}`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default ProductFilters;
