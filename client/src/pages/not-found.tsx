
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function NotFound() {
  const [_, setLocation] = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [particlesArray, setParticlesArray] = useState<{ x: number; y: number; size: number; color: string }[]>([]);

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

  const getRandomColor = (opacity: number) => {
    const colors = [
      `rgba(114, 50, 242, ${opacity})`,
      `rgba(200, 118, 255, ${opacity + 0.1})`,
      `rgba(246, 179, 229, ${opacity + 0.2})`,
      `rgba(163, 83, 255, ${opacity + 0.1})`,
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Gradiente que sigue al cursor */}
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

      <ScrollAnimation>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 relative z-20">
          ERROR{" "}
          <span className="bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text">
            404
          </span>
        </h1>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <p className="text-xl text-gray-400 text-center mb-8 max-w-2xl relative z-20">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <Button
          onClick={() => setLocation("/")}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 relative z-20"
        >
          Volver al inicio
        </Button>
      </ScrollAnimation>
    </section>
  );
}
