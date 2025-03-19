import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Facebook, Instagram, 
  ArrowUp
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090914] border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <img 
            src="/images/logo.png" 
            alt="LD" 
            className="h-16 opacity-80 brightness-0 invert hue-rotate-[260deg]"
          />
        </div>
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Column 1: About */}
          <div>
            <div className="mb-6">
              <div 
                className="flex items-center gap-3 cursor-pointer" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <img 
                  src="/images/logo.png" 
                  alt="LD" 
                  className="h-8 hover:opacity-80 transition-opacity filter brightness-0 invert hue-rotate-[260deg] opacity-90"
                />
                <span className="text-2xl font-bold text-white">Informática</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Soluciones tecnológicas personalizadas para impulsar el crecimiento de tu negocio.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.facebook.com/profile.php?id=61567735885555&locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/ldinfoar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#about">
                  <a className="text-gray-400 hover:text-purple-400 transition-colors">
                    Nosotros
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <a className="text-gray-400 hover:text-purple-400 transition-colors">
                    Servicios
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#portfolio">
                  <a className="text-gray-400 hover:text-purple-400 transition-colors">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="text-gray-400 hover:text-purple-400 transition-colors">
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Aplicaciones Móviles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Soporte Técnico
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Redes y Comunicaciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Consultoría IT
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Buenos Aires, Argentina
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                <a href="tel:+5491137962718" className="text-gray-400 hover:text-purple-400 transition-colors">
                  +54 9 11 3796-2718
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@ldinformatica.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  info@ldinformatica.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LD Informática. Todos los derechos reservados.
          </p>
          <div className="flex items-center">
            <div className="flex space-x-4 mr-6">
              <Link href="/privacy">
                <a className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Política de Privacidad
                </a>
              </Link>
              <Link href="/terms">
                <a className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Términos de Servicio
                </a>
              </Link>
            </div>
            <motion.button
              onClick={scrollToTop}
              className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}