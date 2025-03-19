import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#010108]/80 backdrop-blur-lg border-b border-[#20115b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="/images/logo.png" 
                alt="LD" 
                className="h-12 hover:opacity-80 transition-opacity filter brightness-0 invert hue-rotate-[260deg] opacity-90"
              />
              <span className="text-2xl font-bold text-white">Informática</span>
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="#about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Nosotros
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Servicios
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contacto
            </a>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#010108]/95">
            <a
              href="#about"
              onClick={() => {
                setIsOpen(false);
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Nosotros
            </a>
            <a
              href="#services"
              onClick={() => {
                setIsOpen(false);
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Servicios
            </a>
            <a
              href="#contact"
              onClick={() => {
                setIsOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contacto
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}