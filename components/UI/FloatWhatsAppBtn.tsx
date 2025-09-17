"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const FloatWhatsAppBtn = () => {
  return (
    <>
      <motion.a
        href="https://wa.me/3046421791?text=Hola Bonga,%20quiero%20más%20información"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 40, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          // pulso: escala entre 1 -> 1.06 -> 1 (repetido)
          scale: [1, 1.06, 1],
        }}
        transition={{
          // entrada
          y: { type: "spring", stiffness: 80, damping: 12, delay: 0.2 },
          opacity: { duration: 0.35, delay: 0.2 },
          // pulso: repetir infinitamente con pausa
          scale: {
            duration: 1.1,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 md:botton-10 right-5 md:right-10 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </>
  );
};

export default FloatWhatsAppBtn;
