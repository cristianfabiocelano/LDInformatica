import { motion, useScroll, useTransform } from "framer-motion";
import { NeonCard } from "../ui/neon-card";

export default function AboutSection() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="about" className="py-20 bg-[#010108] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text">
            Nosotros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ y: y1 }}
          >
            <NeonCard glowColor="#c876ff" className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Nuestra Misión
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Somos una empresa joven y dinámica que se especializa en ofrecer soluciones integrales en el ámbito de la consultoría y la tecnología. Desde nuestros inicios, nos hemos comprometido a proporcionar un servicio de calidad, enfocado en satisfacer las necesidades de nuestros clientes y resolver sus problemas con eficacia.
                </p>
              </div>
            </NeonCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: y2 }}
          >
            <NeonCard glowColor="#f6b3e5" className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Nuestro Compromiso
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  En LD Informática, nos apasiona la tecnología y nos comprometemos a mantenernos actualizados con las últimas tendencias y herramientas del sector. Esto nos permite ofrecer a nuestros clientes las soluciones más innovadoras y eficientes, garantizando así su éxito en un mundo cada vez más digitalizado y competitivo.
                </p>
              </div>
            </NeonCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}