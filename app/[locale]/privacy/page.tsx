import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/sections/Footer';
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600">
            Última actualización: Noviembre 2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div className="prose prose-lg max-w-none">

          {/* Introducción */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              En Kaia, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política de privacidad
              explica qué datos recopilamos, cómo los utilizamos y qué derechos tienes sobre tu información personal.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Al usar Kaia, aceptas las prácticas descritas en esta política. Si no estás de acuerdo con algún
              aspecto de esta política, por favor no uses nuestra aplicación.
            </p>
          </section>

          {/* Compromiso con la Privacidad */}
          <section className="mb-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Compromiso</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Privacidad Primero</h3>
                  <p className="text-gray-700">Tu información personal nunca será vendida a terceros.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Encriptación End-to-End</h3>
                  <p className="text-gray-700">Tus datos están protegidos con encriptación de grado militar.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Control Total</h3>
                  <p className="text-gray-700">Puedes exportar o eliminar tus datos en cualquier momento.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Datos que Recopilamos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Datos que Recopilamos</h2>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">1. Información de Cuenta</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Nombre y apellido</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono (opcional)</li>
              <li>Contraseña (encriptada)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">2. Datos de Uso</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Eventos y recordatorios que creas</li>
              <li>Alarmas configuradas</li>
              <li>Comandos de voz (procesados localmente)</li>
              <li>Preferencias de notificaciones</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">3. Información de Ubicación</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Ubicaciones frecuentes (guardadas localmente)</li>
              <li>Geolocalización para alarmas contextuales (opcional)</li>
              <li>Dirección para eventos (si la proporcionas)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">4. Información Técnica</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Tipo de dispositivo y sistema operativo</li>
              <li>Dirección IP (para seguridad)</li>
              <li>Registros de errores (para mejorar la app)</li>
            </ul>
          </section>

          {/* Cómo Usamos tus Datos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cómo Usamos tus Datos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos tu información exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Proporcionar y mejorar los servicios de Kaia</li>
              <li>Enviarte notificaciones y recordatorios que has solicitado</li>
              <li>Personalizar tu experiencia con IA</li>
              <li>Garantizar la seguridad de tu cuenta</li>
              <li>Cumplir con requisitos legales</li>
              <li>Analizar el uso de la app para mejoras (datos anonimizados)</li>
            </ul>
          </section>

          {/* Compartir Datos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compartir tus Datos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>NO vendemos tu información personal.</strong> Solo compartimos datos en casos limitados:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Proveedores de Servicios:</strong> Twilio (SMS), SendGrid (Email), Google Maps (ubicación)</li>
              <li><strong>Cumplimiento Legal:</strong> Si es requerido por ley</li>
              <li><strong>Protección de Derechos:</strong> Para prevenir fraude o abuso</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Todos los proveedores están obligados contractualmente a proteger tu información.
            </p>
          </section>

          {/* Seguridad */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seguridad de tus Datos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos múltiples capas de seguridad:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Encriptación SSL/TLS para todas las comunicaciones</li>
              <li>Contraseñas hasheadas con bcrypt</li>
              <li>Autenticación JWT con tokens de refresco</li>
              <li>Rate limiting para prevenir ataques</li>
              <li>Auditorías de seguridad regulares</li>
              <li>Backups encriptados diarios</li>
            </ul>
          </section>

          {/* Tus Derechos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tus Derechos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Acceder:</strong> Solicitar una copia de tus datos</li>
              <li><strong>Rectificar:</strong> Corregir información incorrecta</li>
              <li><strong>Eliminar:</strong> Borrar tu cuenta y todos tus datos</li>
              <li><strong>Exportar:</strong> Descargar tus datos en formato JSON</li>
              <li><strong>Oponerte:</strong> Rechazar ciertos usos de tus datos</li>
              <li><strong>Limitar:</strong> Restringir el procesamiento de tus datos</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Para ejercer estos derechos, contacta a: <a href="mailto:privacy@kaia.app" className="text-primary hover:underline">privacy@kaia.app</a>
            </p>
          </section>

          {/* Retención de Datos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Retención de Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              Mantenemos tus datos mientras tu cuenta esté activa. Si eliminas tu cuenta:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Datos personales: Eliminados en 30 días</li>
              <li>Backups: Eliminados en 90 días</li>
              <li>Logs del sistema: Anonimizados después de 180 días</li>
            </ul>
          </section>

          {/* Menores de Edad */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Menores de Edad</h2>
            <p className="text-gray-700 leading-relaxed">
              Kaia está destinado a usuarios mayores de 13 años. No recopilamos intencionalmente información
              de menores de 13 años. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.
            </p>
          </section>

          {/* Cambios */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cambios a esta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta política ocasionalmente. Te notificaremos de cambios significativos por
              email o mediante una notificación en la app. La versión actualizada siempre estará disponible
              en esta página con la fecha de última actualización.
            </p>
          </section>

          {/* Contacto */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tus datos:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:privacy@kaia.app" className="text-primary hover:underline">privacy@kaia.app</a>
              </p>
              <p className="text-gray-700">
                <strong>Soporte:</strong> <a href="mailto:support@kaia.app" className="text-primary hover:underline">support@kaia.app</a>
              </p>
              <p className="text-gray-700">
                <strong>GitHub:</strong> <a href="https://github.com/adrianpuche12/Kaia" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/adrianpuche12/Kaia</a>
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
