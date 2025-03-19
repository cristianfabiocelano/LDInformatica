
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [logoVisible, setLogoVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [particlesArray, setParticlesArray] = useState<{ x: number; y: number; size: number; color: string }[]>([]);

  const checkLogoIntersection = (mouseX: number, mouseY: number) => {
    if (logoRef.current) {
      const logoRect = logoRef.current.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow((mouseX - (logoRect.left + logoRect.width/2)), 2) +
        Math.pow((mouseY - (logoRect.top + logoRect.height/2)), 2)
      );
      setLogoVisible(distance < 300);
    }
  };

  // Efecto para generar partículas aleatorias en el fondo
  useEffect(() => {
    if (heroRef.current) {
      const width = heroRef.current.offsetWidth;
      const height = heroRef.current.offsetHeight;
      
      const particles = Array.from({ length: 120 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1.5,
        color: getRandomColor(0.3)
      }));
      
      setParticlesArray(particles);
    }
  }, []);

  // Función para obtener un color aleatorio con opacidad
  const getRandomColor = (opacity: number) => {
    const colors = [
      `rgba(114, 50, 242, ${opacity})`, // Purple
      `rgba(200, 118, 255, ${opacity + 0.1})`, // Light Purple
      `rgba(246, 179, 229, ${opacity + 0.2})`, // Pink
      `rgba(163, 83, 255, ${opacity + 0.1})`, // Lavender
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Manejador para actualizar la posición del mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
      checkLogoIntersection(e.clientX, e.clientY);
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        ref={logoRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none z-0"
        animate={{
          opacity: logoVisible ? 0.08 : 0,
          scale: logoVisible ? 1 : 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
      >
        <img 
          src="images/Logo+bordes blancos.png" 
          alt="LDi Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Partículas de fondo */}
      {particlesArray.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            x: mousePosition.x ? 
              (mousePosition.x - particle.x) * 0.02 : 0,
            y: mousePosition.y ? 
              (mousePosition.y - particle.y) * 0.02 : 0,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2, 
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradiente llamativo que sigue al cursor */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-[80px] z-10"
        animate={{
          x: mousePosition.x - 900,
          y: mousePosition.y - 300,
          scale: [1, 1.05, 1],
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 180,
          scale: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
        style={{
          background: "radial-gradient(circle, rgba(246,179,229,0.8) 0%, rgba(200,118,255,0.6) 40%, rgba(114,50,242,0.4) 70%, rgba(0,0,0,0) 100%)",
        }}
      />
      
      {/* Segundo efecto para más profundidad */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none opacity-40 blur-[50px] z-10"
        animate={{
          x: mousePosition.x - 700,
          y: mousePosition.y - 150,
          rotate: 360
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        style={{
          background: "conic-gradient(from 0deg, rgba(246,179,229,0.9), rgba(200,118,255,0.7), rgba(114,50,242,0.8), rgba(246,179,229,0.9))",
        }}
      />

      <ScrollAnimation>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 max-w-4xl">
          Soluciones tecnológicas para hacer crecer tu{" "}
          <span className="bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text">
            negocio
          </span>
        </h1>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <p className="text-xl text-gray-400 text-center mb-8 max-w-2xl">
          Expertos en desarrollo web, aplicaciones móviles e infraestructura cloud.
          Transformamos tus ideas en soluciones digitales de alto impacto.
        </p>
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >
            Contáctanos
          </Button>
          <Button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800"
          >
            Nuestros servicios
          </Button>
        </div>
      </ScrollAnimation>
    </section>
  );
}
