import Link from "next/link"
import Image from "next/image"
import { Camera, Check, CheckCircle2, ChevronRight, Star, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Camera className="h-6 w-6 text-white" />
              <span className="ml-2 text-xl font-bold text-white">FullFoto</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#beneficios" className="text-white/90 hover:text-white transition-colors">
                Beneficios
              </Link>
              <Link href="/#caracteristicas" className="text-white/90 hover:text-white transition-colors">
                Características
              </Link>
              <Link href="/precios" className="text-white/90 hover:text-white transition-colors">
                Precios
              </Link>
              <Link href="/#contacto" className="text-white/90 hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md" asChild>
              <Link href="/agendar-demo">Demo gratuita</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="/pricing-bg.png" alt="Paisaje montañoso con lago" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Planes adaptados a tus necesidades</h1>
            <p className="text-xl text-blue-100 mb-8">
              Elige el plan que mejor se adapte a tu negocio fotográfico y comienza a vender más
            </p>
            <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full p-1 mb-8">
              <span className="px-4 py-2 text-sm font-medium text-white">Pago por uso</span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Sin cuotas mensuales
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1: Fotógrafo independiente */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02]">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fotógrafo Independiente</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-bold text-gray-900">5%</span>
                  <span className="text-gray-600 mb-1">sobre ventas</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Ideal para fotógrafos que trabajan por su cuenta y quieren una solución completa.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-6" asChild>
                  <Link href="/agendar-demo">
                    Comenzar ahora
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="border-t border-gray-200 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Almacenamiento ilimitado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Álbums ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Página personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Logo y branding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dominio personalizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pagos online integrados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Entrega automática de fotos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Creación de cupones de descuento</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plan 2: Empresa 100% digital */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-200 relative transform hover:scale-[1.03] z-10">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                Más popular
              </div>
              <div className="p-8 bg-gradient-to-b from-blue-50 to-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Empresa 100% Digital</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-bold text-gray-900">3%</span>
                  <span className="text-gray-600 mb-1">sobre ventas</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfecto para empresas con múltiples fotógrafos que operan principalmente online.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-6" asChild>
                  <Link href="/agendar-demo">
                    Comenzar ahora
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="border-t border-gray-200 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Almacenamiento ilimitado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Álbums ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Página personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Logo y branding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dominio personalizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pagos online integrados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Entrega automática de fotos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Creación de cupones de descuento</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Roles para fotógrafos</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Dashboards y métricas grupales y por fotógrafo</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Permisos personalizados</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plan 3: Empresa con local */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02]">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Empresa con Local</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-bold text-gray-900">3%</span>
                  <span className="text-gray-600 mb-1">sobre ventas</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Solución completa para empresas con locales físicos y múltiples puntos de venta.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-6" asChild>
                  <Link href="/agendar-demo">
                    Comenzar ahora
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="border-t border-gray-200 p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Almacenamiento ilimitado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Álbums ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Página personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Logo y branding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dominio personalizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pagos online integrados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Entrega automática de fotos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Creación de cupones de descuento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Roles para fotógrafos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dashboards y métricas grupales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Permisos personalizados</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Servidor en local para carga de fotos instantánea</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Conexión LAN y sincronización paralela</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Conexión con múltiples locales</span>
                  </li>
                </ul>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium flex items-center gap-2">
                    <Star className="h-5 w-5 text-blue-500" />
                    Implementación bonificada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Preguntas frecuentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resolvemos tus dudas sobre nuestros planes y servicios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Hay algún costo inicial?</h3>
              <p className="text-gray-700">
                No, FullFoto no tiene costos iniciales ni cuotas mensuales. Solo pagas un porcentaje sobre las ventas
                realizadas a través de la plataforma.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Puedo cambiar de plan en el futuro?</h3>
              <p className="text-gray-700">
                Sí, puedes actualizar o cambiar tu plan en cualquier momento según las necesidades de tu negocio sin
                penalizaciones.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Qué métodos de pago aceptan?</h3>
              <p className="text-gray-700">
                Integramos múltiples pasarelas de pago como MercadoPago, PayPal, Pix y tarjetas de crédito/débito para
                facilitar las ventas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Cómo funciona la implementación?</h3>
              <p className="text-gray-700">
                Nuestro equipo te guiará en todo el proceso de implementación, desde la configuración inicial hasta la
                capacitación de tu equipo.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Ofrecen soporte técnico?</h3>
              <p className="text-gray-700">
                Sí, todos los planes incluyen soporte técnico personalizado para resolver cualquier duda o incidencia
                que pueda surgir.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Qué significa "almacenamiento ilimitado"?</h3>
              <p className="text-gray-700">
                Puedes subir todas las fotos que necesites sin preocuparte por límites de espacio o costos adicionales
                por almacenamiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                ¿Listo para potenciar tus ventas de fotos?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Comienza hoy mismo y descubre cómo FullFoto puede transformar tu negocio fotográfico
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg"
                  asChild
                >
                  <Link href="/agendar-demo">
                    Agendar demo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg bg-transparent"
                  asChild
                >
                  <Link href="/#contacto">Contactar ventas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center">
              <Camera className="h-5 w-5 text-white" />
              <span className="ml-2 text-lg font-bold text-white">FullFoto</span>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white transition-colors">
                Términos
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@fullfoto.com" className="hover:text-white transition-colors">
                  info@fullfoto.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+5493888538161" className="hover:text-white transition-colors">
                  +54 9 3888 538161
                </a>
              </div>
            </div>
            <p>© {new Date().getFullYear()} FullFoto. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
