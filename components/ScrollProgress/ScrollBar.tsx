'use client';

import { motion, useScroll } from 'framer-motion';

// Componente ScrollBar que muestra una barra de progreso en la parte superior  
// - Usa Motion para animar la barra según el scroll
// - Se posiciona de forma fija en la parte superior y ocupa todo el ancho
export const ScrollBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 8,
                    originX: 0,
                    backgroundColor: "#fbbf24", // amarillo-400
                    zIndex: 9999,
                    pointerEvents: "none", // no interfiere con clicks
                }}
            />
            
        </>
    )
}
