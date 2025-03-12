
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
};

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Diseño Web E-commerce",
    description: "Tienda online para empresa de productos tecnológicos",
    category: "web",
    image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    title: "Servicio Técnico PC Gamer",
    description: "Actualización de hardware y optimización de rendimiento",
    category: "servicio",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBjJTIwZ2FtZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    title: "Instalación Red Corporativa",
    description: "Implementación de red y servicios para empresa de 30 empleados",
    category: "infraestructura",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "Aplicación Móvil de Pedidos",
    description: "App para gestión de pedidos de restaurante",
    category: "app",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    title: "Migración a la Nube",
    description: "Implementación de servicios en la nube para empresa de logística",
    category: "infraestructura",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww"
  },
  {
    id: 6,
    title: "Sitio Web Corporativo",
    description: "Diseño y desarrollo de sitio institucional",
    category: "web",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvcnBvcmF0ZSUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
  },
];

const categories = ["todos", "web", "app", "servicio", "infraestructura"];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === "todos" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text">
              Nuestros Trabajos
            </span>
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <p className="text-lg text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Explora algunos de nuestros proyectos más destacados y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
          </p>
        </ScrollAnimation>

        {/* Filter categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <ScrollAnimation key={item.id} delay={0.1 * index} direction={index % 2 === 0 ? "up" : "down"}>
              <motion.div
                className="rounded-xl overflow-hidden bg-gray-900 cursor-pointer group"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(123, 50, 242, 0.4)" }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 rounded-full bg-purple-600 text-xs text-white mb-2">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
        
        {/* Modal for selected item */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-[40vh] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-600 text-xs text-white mb-4">
                    {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                  </div>
                  <p className="text-gray-300 mb-6">{selectedItem.description}</p>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
