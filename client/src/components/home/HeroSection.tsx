import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010108] via-[#20115b] to-[#010108]">
        {/* Animated grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(114,50,242,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(114,50,242,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Glowing orbs */}
        <motion.div
          className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-[#7232f2] filter blur-[80px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-[#c876ff] filter blur-[80px] opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text">
              Soluciones Tecnológicas
            </span>
            <br />
            <span className="text-white">
              para tu Empresa
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Especialistas en consultoría y tecnología, ofreciendo soluciones integrales para impulsar tu negocio hacia el futuro digital.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#7232f2] via-[#c876ff] to-[#f6b3e5] blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-[#7232f2] to-[#c876ff] hover:opacity-90 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contáctanos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}