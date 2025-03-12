import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#010108] pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Información General</h2>
            <p className="text-gray-400">
              En LD Informática, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas. Al utilizar nuestros servicios, aceptas las prácticas descritas en esta política.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Información que Recopilamos</h2>
            <p className="text-gray-400">
              Datos de Contacto: Recopilamos tu nombre, dirección de correo electrónico y número de teléfono para brindarte nuestros servicios de consultoría y asistencia técnica.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Uso de la Información</h2>
            <p className="text-gray-400">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
              <li>Proporcionar nuestros servicios de consultoría y asistencia técnica.</li>
              <li>Comunicarnos contigo sobre actualizaciones, promociones y novedades relacionadas con LD Informática.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Compartir Información</h2>
            <p className="text-gray-400">
              No compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Seguridad</h2>
            <p className="text-gray-400">
              Tomamos medidas para proteger tu información personal y garantizar su confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Cambios en la Política de Privacidad</h2>
            <p className="text-gray-400">
              Podemos actualizar esta política ocasionalmente. Te recomendamos revisarla periódicamente para estar informado sobre cualquier cambio.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
