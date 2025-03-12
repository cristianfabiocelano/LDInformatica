import { motion } from "framer-motion";
import { Shield, Headphones, Video } from "lucide-react";
import { NeonCard } from "../ui/neon-card";

const services = [
  {
    icon: Shield,
    title: "Resguardo de Datos con Veeam Backup",
    description: "Protege la información crítica de tu empresa con nuestra solución robusta y confiable de respaldo de datos.",
    glowColor: "#7232f2"
  },
  {
    icon: Headphones,
    title: "Help Desk",
    description: "Soporte técnico especializado para resolver problemas de hardware, software y conectividad.",
    glowColor: "#c876ff"
  },
  {
    icon: Video,
    title: "Soluciones para Reuniones Híbridas",
    description: "Implementación de sistemas de videoconferencia y colaboración en tiempo real para equipos distribuidos.",
    glowColor: "#f6b3e5"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#010108]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text mb-4">
            Nuestros Servicios
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <NeonCard glowColor={service.glowColor} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <service.icon className="h-12 w-12 text-[#c876ff] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">
                    {service.description}
                  </p>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
