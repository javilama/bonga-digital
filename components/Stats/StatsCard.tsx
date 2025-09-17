'use client';

import { useEffect, useRef, useState } from 'react';

export type StatsCardProps = {
  // target: número al que queremos llegar (ej: 120, 85, 10)
  target: number;
  // sufijo opcional para mostrar después del número (ej: '+', '%')
  suffix?: string;
  // etiqueta descriptiva debajo del número
  label: string;
  // duración de la animación en milisegundos (por defecto 1400ms)
  duration?: number;
  testId?: string;
};

/**
 * StatsCard (with count-up)
 *
 * - Componente que muestra un número animado (contando desde 0 hasta `target`)
 * - Usa requestAnimationFrame para una animación suave y precisa.
 * - `suffix` permite mostrar '%' o '+' sin afectar la animación numérica.
 */
export const StatsCard: React.FC<StatsCardProps> = ({
  target,
  suffix = '',
  label,
  duration = 1400,
  testId,
}) => {
  // estado para mostrar el número animado en pantalla
  const [displayValue, setDisplayValue] = useState<number>(0);

  // ref para mantener el id de requestAnimationFrame y poder limpiarlo
  const rafRef = useRef<number | null>(null);

  // ref para almacenar el timestamp de inicio
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    // Reiniciamos valores al iniciar una nueva animación
    setDisplayValue(0);
    startRef.current = null;

    // easing: easeOutQuad para que la animación frene suavemente al final
    const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

    // función que realiza el step de la animación
    const step = (timestamp: number) => {
      // guardamos el timestamp inicial
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;

      // progreso entre 0 y 1
      const rawProgress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(rawProgress);

      // calculamos el valor actual según el eased progress
      const current = Math.round(target * eased);

      // actualizamos el estado que se muestra en pantalla
      setDisplayValue(current);

      // si no llegamos al final, solicitamos el siguiente frame
      if (rawProgress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // aseguramos que el valor final sea exactamente el target
        setDisplayValue(target);
        rafRef.current = null;
      }
    };

    // arrancamos la animación
    rafRef.current = requestAnimationFrame(step);

    // cleanup: cuando el componente se desmonta cancelamos el rAF
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    // dependencias importantes: si `target` o `duration` cambian, reiniciamos animación
  }, [target, duration]);

  return (
    <div className="p-8 rounded-lg" data-testid={testId}>
      {/* Valor grande animado */}
      <div className="text-3xl font-bold text-bonga-dark">
        {/* mostramos el número y el sufijo (si existe) */}
        {displayValue}
        {suffix}
      </div>

      {/* Etiqueta descriptiva */}
      <p className="text-bonga-dark mt-2">{label}</p>
    </div>
  );
};

export default StatsCard;
