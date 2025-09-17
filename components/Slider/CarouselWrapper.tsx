

'use client';

import Carousel from './Carousel';
import { slidesData } from '../../app/data/slidesData';

/**
 * CarouselWrapper
 * - Este componente sirve para centralizar la data de los slides.
 * - No necesitas pasarle props, carga automáticamente los slides desde slidesData.ts.
 * - Mantiene el código limpio y separar la data de la lógica del Carousel.
 */
const CarouselWrapper: React.FC = () => {
  return (
    <div>
      <Carousel
        slides={slidesData}    // se pasan los slides importados
        interval={5000}        // tiempo de autoplay en milisegundos
        showIndicators={true}  // mostrar puntos
        showNav={true}         // mostrar flechas
      />
    </div>
  );
};

export default CarouselWrapper;
