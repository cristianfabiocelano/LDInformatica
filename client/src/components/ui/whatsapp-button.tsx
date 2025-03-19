
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    // Mostrar el badge pulsante después de 3 segundos de carga de la página
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1
        }}
        whileHover={{ scale: 1.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative"
      >
        {/* Tooltip que aparece al hover */}
        <motion.div 
          className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-white text-black px-4 py-2 rounded-lg shadow-lg font-medium"
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 10, 
            scale: isHovered ? 1 : 0.8 
          }}
          transition={{ duration: 0.2 }}
        >
          ¡Contáctanos ahora!
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </motion.div>

        {/* Efecto de pulso */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30"
          animate={{
            scale: showBadge ? [1, 1.3, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: showBadge ? Infinity : 0,
            repeatType: "loop"
          }}
        />
        
        {/* Botón principal */}
        <a
          href="https://wa.me/5491137962718?text=Hola!%20Vi%20su%20pagina%20web%20y%20queria%20hacerles%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative z-10"
          aria-label="Contactar por WhatsApp"
        >
          <div className="bg-[#25D366] p-4 rounded-full flex items-center justify-center shadow-xl hover:shadow-[0_8px_16px_rgba(37,211,102,0.5)] transition-all duration-300">
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              fill="white" 
              viewBox="0 0 16 16"
              animate={{ 
                rotate: showBadge ? [0, -5, 5, -5, 5, 0] : 0 
              }}
              transition={{
                duration: 1,
                repeat: showBadge ? 1 : 0,
                repeatDelay: 5
              }}
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </motion.svg>
          </div>
        </a>
      </motion.div>
    </div>
  );
};
