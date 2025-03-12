
import { NeonCard } from "@/components/ui/neon-card";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-purple-500">
          Nosotros
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="h-full">
            <NeonCard className="h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Nuestra Misión
              </h3>
              <p className="text-gray-300">
                Somos una empresa joven y dinámica que se especializa en
                ofrecer soluciones integrales en el ámbito de la consultoría y la
                tecnología. Desde nuestros inicios, nos hemos comprometido
                a proporcionar un servicio de calidad, enfocado en satisfacer
                las necesidades de nuestros clientes y resolver sus problemas
                con eficacia.
              </p>
            </NeonCard>
          </div>
          
          <div className="h-full">
            <NeonCard className="h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Nuestro Compromiso
              </h3>
              <p className="text-gray-300">
                En LD Informática, nos apasiona la tecnología y nos
                comprometemos a mantenernos actualizados con las últimas
                tendencias y herramientas del sector. Esto nos permite ofrecer
                a nuestros clientes las soluciones más innovadoras y eficientes,
                garantizando así su éxito en un mundo cada vez más
                digitalizado y competitivo.
              </p>
            </NeonCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
