
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const faqs = [
  {
    question: "¿Qué servicios ofrece LD Informática?",
    answer:
      "Ofrecemos una amplia gama de servicios tecnológicos que incluyen desarrollo web y aplicaciones móviles, diseño UX/UI, soporte técnico, redes y comunicaciones, consultoría IT y soluciones en la nube. Nuestro enfoque está en proporcionar soluciones personalizadas que se adapten perfectamente a las necesidades específicas de cada cliente.",
  },
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web o una aplicación?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web informativo puede estar listo en 2-4 semanas, mientras que proyectos más complejos como e-commerce o aplicaciones con funcionalidades avanzadas pueden tomar entre 2-6 meses. En nuestra primera reunión, te proporcionaremos un cronograma detallado basado en tus requerimientos específicos.",
  },
  {
    question: "¿Cómo es el proceso de trabajo con LD Informática?",
    answer:
      "Nuestro proceso comienza con una consulta inicial para entender tus necesidades. Luego pasamos a la fase de planificación donde desarrollamos la estrategia y alcance del proyecto. Después viene el diseño y desarrollo, seguido de pruebas exhaustivas. Finalmente, implementamos la solución y proporcionamos soporte continuo. Mantenemos una comunicación transparente durante todo el proceso.",
  },
  {
    question: "¿Ofrecen mantenimiento después de finalizar un proyecto?",
    answer:
      "Sí, ofrecemos planes de mantenimiento para todos nuestros proyectos. Estos incluyen actualizaciones de seguridad, corrección de errores, optimizaciones de rendimiento y soporte técnico. Puedes elegir entre planes mensuales o anuales según las necesidades de tu negocio.",
  },
  {
    question: "¿Trabajan con empresas de cualquier tamaño?",
    answer:
      "Absolutamente. Hemos trabajado con startups, pequeñas empresas, medianas empresas y grandes corporaciones. Adaptamos nuestras soluciones y precios para satisfacer las necesidades y presupuestos de organizaciones de todos los tamaños.",
  },
  {
    question: "¿Cuáles son sus métodos de pago?",
    answer:
      "Aceptamos diversas formas de pago que incluyen transferencias bancarias, tarjetas de crédito/débito y pagos electrónicos. Para proyectos grandes, generalmente establecemos un calendario de pagos escalonados vinculado a hitos específicos del proyecto, lo que permite un flujo de trabajo y financiero más manejable.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#010108]">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text">
              Preguntas Frecuentes
            </span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestros servicios tecnológicos.
          </p>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} className="mb-4">
              <div
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                <motion.button
                  className={`w-full flex justify-between items-center p-5 text-left transition-colors ${
                    activeIndex === index
                      ? "bg-gray-800 text-white"
                      : "bg-gray-900 text-gray-200 hover:bg-gray-800"
                  }`}
                  onClick={() => toggleAccordion(index)}
                  whileHover={{ backgroundColor: "rgba(31, 41, 55, 1)" }}
                  whileTap={{ scale: 0.995 }}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="flex-shrink-0" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 bg-gray-900 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
