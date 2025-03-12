import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#010108] border-t border-[#20115b]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text mb-4">
              LD Informática
            </h3>
            <p className="text-gray-400">
              Soluciones tecnológicas integrales para tu empresa
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Nosotros
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Servicios
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Política de Privacidad
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#20115b]">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} LD Informática. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
