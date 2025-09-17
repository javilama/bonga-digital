
'use client';

import { useState, useMemo } from 'react';
import { ProductCard, Product } from './ProductCard';
import ProductFilters from './ProductFilter';

//  Arreglo estático con los productos disponibles.
// Cada objeto sigue la estructura definida en el tipo Product (id, title, description, category, testId).
const products: Product[] = [
  {
    id: 'crm',
    title: 'Bonga Digital CRM',
    description: 'Sistema completo de gestión de clientes',
    category: 'webs',
    testId: 'product-crm',
  },
  {
    id: 'webapp',
    title: 'PWA Builder',
    description: 'Sistemaa para crear aplicaciones web progresivas',
    category: 'webs',
    testId: 'product-crm',
  },
  {
    id: 'analytics',
    title: 'Analytics Pro',
    description: 'Herramienta avanzada de análisis de datos',
    category: 'tools',
    testId: 'product-analytics',
  },
  {
    id: 'ecommerce',
    title: 'BongaStore',
    description: 'Plataforma de comercio electrónico',
    category: 'platforms',
    testId: 'product-ecommerce',
  },
];

//  Componente principal que renderiza la sección de productos.
export const ProductsSection: React.FC = () => {
  // Estado que guarda qué filtro está seleccionado (por defecto "all" = todos los productos).
  const [filter, setFilter] = useState<'all' | 'webs' | 'tools' | 'platforms'>(
    'all'
  );

  //  useMemo se usa para recalcular la lista de productos filtrados
  // solo cuando cambie el filtro seleccionado. Evita cálculos innecesarios.
  const filteredProducts = useMemo(() => {
    if (filter === 'all') return products; // si el filtro es "all", mostramos todos
    return products.filter((p) => p.category === filter); // filtramos por categoría
  }, [filter]);

  return (
    <section
      id="productos"
      className="py-20 bg-gray-100 "
      data-testid="products-section"
    >
      <div className="container mx-auto px-4 ">
        {/* Título principal de la sección */}
        <h2
          className="text-4xl font-bold text-center text-bonga-dark mb-12"
          data-testid="products-title"
        >
          Nuestros Productos
        </h2>

        {/*  Componente de filtros. 
            Se le pasa el filtro activo y la función para cambiar el estado.
            Esto permite cambiar entre "Todos", "SaaS", "Herramientas", "Plataformas". */}
        <ProductFilters activeFilter={filter} onFilterChange={setFilter} />

        {/*  Grid de productos. 
            Se recorre la lista de productos filtrados y se renderiza un ProductCard por cada uno. */}
        <div
          id="products-grid"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-testid="products-grid"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
