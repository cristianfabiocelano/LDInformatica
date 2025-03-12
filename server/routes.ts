import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "El teléfono es requerido"),
  company: z.string().optional(),
  message: z.string().optional()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure email transport
  const emailTransport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body
      const data = contactSchema.parse(req.body);
      
      // Prepare email content
      const emailContent = `
        Nuevo contacto desde el sitio web:
        
        Nombre: ${data.name}
        Email: ${data.email}
        Teléfono: ${data.phone}
        ${data.company ? `Empresa: ${data.company}\n` : ''}
        ${data.message ? `Mensaje: ${data.message}` : ''}
      `;

      // Send email
      await emailTransport.sendMail({
        from: process.env.SMTP_FROM || 'noreply@ldinformatica.com',
        to: process.env.CONTACT_EMAIL || 'contacto@ldinformatica.com',
        subject: 'Nuevo contacto desde el sitio web',
        text: emailContent
      });

      res.status(200).json({ message: 'Formulario enviado correctamente' });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: 'Error de validación',
          errors: error.errors
        });
      }

      // Log the error for debugging
      console.error('Error al procesar el formulario de contacto:', error);

      // Return generic error to client
      res.status(500).json({
        message: 'Error al procesar el formulario. Por favor, intente nuevamente.'
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  const httpServer = createServer(app);
  return httpServer;
}
