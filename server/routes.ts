
import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "El teléfono es requerido"),
  message: z.string().min(1, "El mensaje es requerido")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure email transport
  const emailTransport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "c2680627.ferozo.com",
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER || "info@ldi.com.ar",
      pass: process.env.SMTP_PASS || "A@cfLwK5sI"
    }
  });

  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body
      const data = contactSchema.parse(req.body);
      
      // Prepare email content
      const emailContent = `
        Nuevo contacto desde el sitio web
        ==============================
        
        Datos del contacto:
        - Nombre: ${data.name}
        - Email: ${data.email}
        - Teléfono: ${data.phone}
        
        Mensaje:
        ${data.message}
        
        ==============================
        Enviado desde el formulario de contacto de LD Informática
      `;

      // Send email
      await emailTransport.sendMail({
        from: process.env.SMTP_FROM || 'info@ldi.com.ar',
        to: process.env.CONTACT_EMAIL || 'info@ldinformatica.com.ar',
        subject: 'Nuevo contacto desde el sitio web - LD Informática',
        text: emailContent,
        replyTo: data.email
      });

      res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
      console.error('Error al enviar el email:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: 'Error de validación',
          errors: error.errors
        });
      }

      res.status(500).json({
        message: 'Error al enviar el mensaje. Por favor, intente nuevamente.'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
