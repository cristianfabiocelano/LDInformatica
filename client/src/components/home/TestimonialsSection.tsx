import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const testimonials = [
  {
    id: 1,
    name: "María López",
    position: "Gerente de Marketing",
    company: "Estilo Digital",
    quote:
      "LD Informática transformó completamente nuestra presencia online. El nuevo sitio web no solo se ve increíble, sino que ha aumentado nuestras conversiones en un 40%. Su equipo fue profesional y atento durante todo el proceso.",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "Director de Operaciones",
    company: "Logística Express",
    quote:
      "La implementación de infraestructura que realizó LD Informática mejoró nuestra eficiencia operativa significativamente. El tiempo de respuesta en nuestros sistemas disminuyó un 60% y ahora podemos manejar el doble de solicitudes sin problemas.",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: 3,
    name: "Ana Martínez",
    position: "Propietaria",
    company: "Café del Parque",
    quote:
      "La aplicación de pedidos que desarrollaron para nuestro café ha sido un éxito rotundo. Nuestros clientes la aman por su facilidad de uso y nosotros por cómo ha optimizado nuestros procesos. El soporte posterior al lanzamiento ha sido excelente.",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    id: 4,
    name: "Javier Méndez",
    position: "CTO",
    company: "Innovatech",
    quote:
      "Contratamos a LD Informática para una migración crítica a la nube y el resultado superó nuestras expectativas. El proceso fue fluido, sin tiempo de inactividad, y ahora nuestros sistemas son mucho más escalables y seguros.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-[#0b0b13]">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 pt-8">
            <span className="bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text">
              Lo que dicen nuestros clientes
            </span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <p className="text-lg text-gray-400 text-center mb-14 max-w-2xl mx-auto">
            Experiencias reales de clientes que confiaron en nosotros para sus soluciones tecnológicas.
          </p>
        </ScrollAnimation>

        <div className="relative mx-auto max-w-4xl mt-12">
          <motion.div
            ref={carousel}
            className="overflow-hidden"
          >
            <motion.div
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ type: "spring", damping: 20 }}
              className="flex"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full"
                >
                  <div className="bg-gray-900 rounded-2xl p-8 md:p-10 shadow-xl mb-10 relative h-full min-h-[320px] flex flex-col justify-between mt-10">
                    <div>
                      <div className="absolute -top-6 left-10 bg-purple-600 p-3 rounded-full">
                        <Quote className="text-white" size={24} />
                      </div>

                      <p className="text-gray-300 italic text-lg leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                      />
                      <div className="ml-4">
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonial.position} - {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors"
            >
              <ChevronLeft className="text-white" size={20} />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors"
            >
              <ChevronRight className="text-white" size={20} />
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index
                    ? "bg-purple-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}