
import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2
} from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulación de envío (reemplazar con API real)
    setTimeout(() => {
      // 90% probabilidad de éxito
      if (Math.random() > 0.1) {
        setStatus("success");
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-[#0f0f1a]">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#f6b3e5] via-[#c876ff] to-[#7232f2] text-transparent bg-clip-text">
              Contacto
            </span>
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Contáctanos y hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollAnimation direction="right">
            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-900/30 border border-green-800 rounded-xl p-6 text-center"
                >
                  <CheckCircle className="mx-auto mb-4 text-green-400" size={50} />
                  <h4 className="text-xl font-semibold text-white mb-2">¡Mensaje enviado!</h4>
                  <p className="text-gray-300">
                    Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
                  </p>
                  <Button 
                    onClick={() => setStatus("idle")}
                    className="mt-6 bg-green-600 hover:bg-green-700"
                  >
                    Enviar otro mensaje
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Nombre completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-300">Teléfono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+54 11 1234-5678"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-gray-300">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tu proyecto..."
                        rows={5}
                        required
                        className="bg-gray-800 border-gray-700 text-white resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                    
                    {status === "error" && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-400 text-sm flex items-center mt-2"
                      >
                        <AlertCircle className="h-4 w-4 mr-1" />
                        Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                      </motion.div>
                    )}
                  </div>
                </form>
              )}
            </div>
          </ScrollAnimation>
          
          {/* Contact Info */}
          <ScrollAnimation direction="left">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
                <p className="text-gray-400 mb-8">
                  No dudes en contactarnos por cualquiera de los siguientes medios o complete el formulario y nos pondremos en contacto contigo a la brevedad.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <a href="mailto:info@ldinformatica.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                        info@ldinformatica.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Teléfono</h4>
                      <a href="tel:+5491137962718" className="text-gray-400 hover:text-purple-400 transition-colors">
                        +54 9 11 3796-2718
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Ubicación</h4>
                      <p className="text-gray-400">
                        Buenos Aires, Argentina
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl border border-purple-800/30">
                <h4 className="text-xl font-bold text-white mb-3">Horario de atención</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
