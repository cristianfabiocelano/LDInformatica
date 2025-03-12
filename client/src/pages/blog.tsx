
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

// Datos simulados para el blog
const blogPosts = [
  {
    id: 1,
    title: "Cómo mejorar la seguridad informática de tu empresa",
    slug: "como-mejorar-seguridad-informatica-empresa",
    excerpt: "Descubre las mejores prácticas y herramientas para proteger los datos de tu negocio contra las amenazas cibernéticas actuales.",
    content: `
      <p>La seguridad informática es una preocupación creciente para empresas de todos los tamaños. Con el aumento de los ataques cibernéticos, proteger los datos sensibles de tu empresa se ha vuelto más crucial que nunca.</p>
      <h3>1. Implementa una política de contraseñas robusta</h3>
      <p>Asegúrate de que todos los empleados utilicen contraseñas fuertes y únicas para cada servicio. Considera implementar un gestor de contraseñas empresarial para facilitar este proceso.</p>
      <h3>2. Mantén el software actualizado</h3>
      <p>Las actualizaciones de software a menudo incluyen parches de seguridad críticos. Establece un cronograma regular para actualizar todos los sistemas y aplicaciones.</p>
      <h3>3. Utiliza autenticación de dos factores (2FA)</h3>
      <p>Implementa 2FA en todos los servicios que lo permitan, especialmente para acceder a información sensible o crítica para el negocio.</p>
      <h3>4. Realiza copias de seguridad regulares</h3>
      <p>Establece un sistema de respaldo automático y verifica regularmente que las copias de seguridad se están realizando correctamente y se pueden restaurar.</p>
      <h3>5. Capacita a tus empleados</h3>
      <p>El eslabón más débil en la seguridad suele ser el factor humano. Realiza capacitaciones regulares sobre phishing, ingeniería social y otras amenazas comunes.</p>
      <p>Implementar estas medidas básicas puede marcar una gran diferencia en la postura de seguridad de tu empresa. En LD Informática podemos ayudarte a desarrollar una estrategia de seguridad integral adaptada a las necesidades específicas de tu negocio.</p>
    `,
    author: "Carlos Méndez",
    category: "Seguridad Informática",
    date: "2023-10-15",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    title: "Tendencias en desarrollo web para 2024",
    slug: "tendencias-desarrollo-web-2024",
    excerpt: "Conoce las nuevas tecnologías y enfoques que marcarán el rumbo del desarrollo web este año y cómo pueden beneficiar a tu negocio.",
    content: `
      <p>El mundo del desarrollo web evoluciona constantemente. Mantenerse al día con las últimas tendencias es crucial para ofrecer experiencias digitales modernas y efectivas.</p>
      <h3>1. Diseño minimalista y con propósito</h3>
      <p>El minimalismo sigue dominando, pero con un enfoque en la usabilidad y la experiencia del usuario. Menos elementos decorativos, más funcionalidad intuitiva.</p>
      <h3>2. Diseño móvil primero (Mobile-first)</h3>
      <p>Con más del 60% del tráfico web proviniendo de dispositivos móviles, diseñar pensando primero en estos dispositivos ya no es opcional.</p>
      <h3>3. Aplicaciones web progresivas (PWA)</h3>
      <p>Las PWAs continúan ganando terreno, ofreciendo experiencias similares a las aplicaciones nativas directamente desde el navegador.</p>
      <h3>4. Microinteracciones</h3>
      <p>Pequeñas animaciones y respuestas visuales que mejoran la experiencia del usuario y proporcionan retroalimentación sobre sus acciones.</p>
      <h3>5. IA y personalización</h3>
      <p>La inteligencia artificial está permitiendo niveles de personalización nunca antes vistos, adaptando el contenido a cada usuario de forma dinámica.</p>
      <p>En LD Informática nos mantenemos a la vanguardia de estas tendencias para ofrecer soluciones web modernas y efectivas para nuestros clientes.</p>
    `,
    author: "Laura Gómez",
    category: "Desarrollo Web",
    date: "2023-11-28",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    title: "Beneficios de migrar tu infraestructura a la nube",
    slug: "beneficios-migracion-nube",
    excerpt: "Explora las ventajas de trasladar la infraestructura de tu empresa a servicios en la nube y cómo planificar una migración exitosa.",
    content: `
      <p>La migración a la nube ofrece numerosas ventajas para las empresas modernas. Desde la reducción de costos hasta una mayor flexibilidad operativa.</p>
      <h3>1. Reducción de costos de infraestructura</h3>
      <p>Evita grandes inversiones en hardware y mantenimiento, pagando solo por los recursos que realmente utilizas.</p>
      <h3>2. Escalabilidad y flexibilidad</h3>
      <p>Escala tus recursos según la demanda, aumentando o disminuyendo capacidad sin interrupciones ni grandes inversiones.</p>
      <h3>3. Continuidad del negocio</h3>
      <p>Los servicios en la nube suelen ofrecer alta disponibilidad y recuperación ante desastres incorporada en su arquitectura.</p>
      <h3>4. Acceso remoto y colaboración</h3>
      <p>Facilita el trabajo remoto y la colaboración entre equipos distribuidos geográficamente.</p>
      <h3>5. Seguridad avanzada</h3>
      <p>Los principales proveedores de servicios en la nube invierten enormes recursos en seguridad, ofreciendo protecciones que muchas empresas no podrían implementar por su cuenta.</p>
      <p>En LD Informática podemos guiarte en el proceso de migración a la nube, desde la evaluación inicial hasta la implementación completa, minimizando riesgos y maximizando beneficios.</p>
    `,
    author: "Miguel Sánchez",
    category: "Cloud Computing",
    date: "2023-12-10",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "Cómo optimizar el rendimiento de tu computadora",
    slug: "optimizar-rendimiento-computadora",
    excerpt: "Consejos prácticos para mantener tu equipo funcionando a su máxima capacidad y extender su vida útil.",
    content: `
      <p>Con el paso del tiempo, es normal que las computadoras comiencen a mostrar signos de ralentización. Sin embargo, existen varias acciones que puedes tomar para mejorar su rendimiento.</p>
      <h3>1. Limpieza de disco</h3>
      <p>Elimina archivos temporales, programas no utilizados y vacía la papelera de reciclaje regularmente.</p>
      <h3>2. Desfragmentación (para discos HDD)</h3>
      <p>Si aún utilizas discos duros tradicionales, desfragmentar periódicamente puede mejorar significativamente el rendimiento.</p>
      <h3>3. Actualiza tu sistema operativo y drivers</h3>
      <p>Mantén tu sistema y controladores actualizados para beneficiarte de mejoras de rendimiento y seguridad.</p>
      <h3>4. Gestiona los programas de inicio</h3>
      <p>Limita la cantidad de aplicaciones que se inician automáticamente con el sistema para acelerar el arranque.</p>
      <h3>5. Considera actualizaciones de hardware</h3>
      <p>Aumentar la RAM o cambiar a un SSD son actualizaciones relativamente económicas que pueden transformar el rendimiento de un equipo antiguo.</p>
      <p>En LD Informática ofrecemos servicios de mantenimiento y optimización para mantener tus equipos funcionando a su máxima capacidad.</p>
    `,
    author: "Ana Rodríguez",
    category: "Soporte Técnico",
    date: "2024-01-05",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBwZXJmb3JtYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
  },
];

const categories = [
  { name: "Todos", count: blogPosts.length },
  { name: "Seguridad Informática", count: 1 },
  { name: "Desarrollo Web", count: 1 },
  { name: "Cloud Computing", count: 1 },
  { name: "Soporte Técnico", count: 1 },
];

export default function Blog() {
  return (
    <div className="bg-black">
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0f0f1a] to-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text">
                Blog & Recursos
              </span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-8">
              Artículos, guías y recursos para mantenerte al día con las últimas tendencias en tecnología
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <ScrollAnimation key={post.id} delay={index * 0.1}>
                    <Link href={`/blog/${post.slug}`}>
                      <motion.article 
                        className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col"
                        whileHover={{ y: -5 }}
                      >
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                          <div className="flex items-center text-sm text-gray-400 mb-3">
                            <CalendarDays size={16} className="mr-1" />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <Clock size={16} className="mr-1" />
                            <span>{post.readTime} min</span>
                          </div>
                          <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
                          <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                          <div className="flex items-center">
                            <Tag size={16} className="text-purple-400 mr-2" />
                            <span className="text-sm text-purple-400">{post.category}</span>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <ScrollAnimation direction="left">
                <div className="bg-gray-900 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Categorías</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <motion.a 
                          href="#"
                          className="flex justify-between text-gray-300 hover:text-purple-400 transition-colors py-2"
                          whileHover={{ x: 5 }}
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-800 rounded-full px-2 py-1 text-xs">
                            {category.count}
                          </span>
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl p-6 border border-purple-800/30">
                  <h3 className="text-xl font-bold text-white mb-3">¿Necesitas ayuda con un proyecto?</h3>
                  <p className="text-gray-300 mb-4">
                    Nuestro equipo está listo para ayudarte a implementar soluciones tecnológicas para tu negocio.
                  </p>
                  <Button 
                    as="a" 
                    href="/contact"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Contáctanos
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
