// Opción: componente cliente
'use client';

//  Definimos el tipo de datos que representa un producto
export type Product = {
  id: string;                  // identificador único del producto
  title: string;               // nombre o título del producto
  description: string;         // breve descripción
  category: 'webs' | 'tools' | 'platforms'; // categoría a la que pertenece
  testId: string;              // atributo usado para pruebas automatizadas (testing)
};

//  Definimos las props que recibirá el componente ProductCard
type ProductCardProps = {
  product: Product; // cada tarjeta recibe un producto completo
};

//  Componente que renderiza una tarjeta de producto
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Mapeamos estilos de colores según la categoría del producto
  const categoryColors = {
    webs: 'bg-blue-100 text-blue-800',
    tools: 'bg-green-100 text-green-800',
    platforms: 'bg-purple-100 text-purple-800',
  };

  return (
    <div
      className="product-card bg-white p-6 rounded-lg shadow-md"
      data-category={product.category}   // útil para testing y filtrado
      data-testid={product.testId}       // útil para pruebas automatizadas
    >
      {/* Título del producto */}
      <h3 className="text-xl font-semibold mb-3 text-bonga-dark">
        {product.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 mb-4">{product.description}</p>

      {/* Etiqueta con la categoría del producto */}
      <span
        className={`${categoryColors[product.category]} px-3 py-1 rounded-full text-sm`}
      >
        {product.category === 'webs'
          ? 'Webs'
          : product.category === 'tools'
          ? 'Herramienta'
          : 'Plataforma'}
      </span>
    </div>
  );
};

export default ProductCard;
