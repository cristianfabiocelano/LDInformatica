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
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text">
                LD Informática
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink href="/#about">Nosotros</NavLink>
            <NavLink href="/#services">Servicios</NavLink>
            <NavLink href="/#contact">Contacto</NavLink>
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
            <MobileNavLink href="/#about" onClick={() => setIsOpen(false)}>
              Nosotros
            </MobileNavLink>
            <MobileNavLink href="/#services" onClick={() => setIsOpen(false)}>
              Servicios
            </MobileNavLink>
            <MobileNavLink href="/#contact" onClick={() => setIsOpen(false)}>
              Contacto
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.a
        whileHover={{ scale: 1.05 }}
        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
      >
        {children}
      </motion.a>
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        {children}
      </a>
    </Link>
  );
}