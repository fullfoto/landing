import Link from "next/link"
import Image from "next/image"
import { Check, CheckCircle2, ChevronRight, Mail, Phone, X } from "lucide-react"
import PricingHeroBackground from "@/app/components/pricing-hero-background"

import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-24">
        <PricingHeroBackground />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Planes adaptados a tus necesidades</h1>
            <p className="text-xl text-blue-100 mb-8">
              Desde fotógrafos independientes hasta empresas con múltiples locales. Encuentra el plan perfecto para tu
              negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan FREE */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02]">
              <div className="p-8">
                <h3 className="font-bold text-gray-900 mb-4 text-center text-3xl mt-5">FREE</h3>
                <div className="flex items-end gap-2 mb-2 justify-center">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-600 mb-1">USD/mes</span>
                </div>
                <div className="text-center bg-gray-100 rounded-lg p-2 mb-6 mt-[18px]">
                  <span className="text-sm text-gray-700">
                    Comisión por venta: <strong>10%</strong>
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Pensado para fotógrafos independientes que están comenzando y quieren crecer su negocio.
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
                    <span className="text-gray-700">Almacenamiento ilimitado (1 año)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hasta 15 álbums</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Página web personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Logo y branding</span>
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
                    <span className="text-gray-700">Reconocimiento facial y de número</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Packs por cantidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cupones de descuento</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Marca de agua FullFoto</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Branding FullFoto</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Costo mínimo de implementación</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plan PRO */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-200 relative transform hover:scale-[1.03] z-10">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                Plan más conveniente del mercado
              </div>
              <div className="p-8 bg-gradient-to-b from-blue-50 to-white">
                <h3 className="font-bold text-gray-900 mb-4 text-center text-3xl mt-5">PRO</h3>
                <div className="flex items-end gap-2 mb-2 justify-center">
                  <span className="text-4xl font-bold text-gray-900">$17</span>
                  <span className="text-gray-600 mb-1">USD/mes</span>
                </div>
                <div className="text-center bg-green-100 rounded-lg p-2 mb-6 mt-[13px]">
                  <span className="text-sm text-green-800">
                    Comisión por venta: <strong>7%</strong>
                  </span>
                  <div className="text-xs text-green-600 mt-1">La más baja del mercado</div>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfecto para fotógrafos con experiencia que quieren desbloquear su potencial y utilizar al 100% la
                  plataforma.
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
                    <span className="text-gray-700">Página web personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Logo y branding</span>
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
                    <span className="text-gray-700">Reconocimiento facial y de número</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Packs por cantidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cupones de descuento</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Marca de agua personalizada</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Equipos de hasta 10 fotógrafos</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Dashboards y métricas grupales</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Selección de fotos de regalo</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Implementación bonificada</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Soporte prioritario</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Plan ENTERPRISE */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02]">
              <div className="p-8">
                <h3 className="font-bold text-gray-900 text-center text-3xl mt-5 mb-4">ENTERPRISE</h3>
                <div className="flex items-end gap-2 mb-6 justify-center">
                  <span className="text-2xl font-bold text-gray-900">Plan Adaptado</span>
                </div>
                <div className="text-center bg-gray-100 rounded-lg p-2 mb-6 mt-[18px]">
                  <span className="text-sm text-gray-700">
                    Comisión por venta: <strong>Personalizada</strong>
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Solución completa para empresas con (o sin) locales físicos y múltiples puntos de venta.
                </p>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-6" asChild>
                  <Link href="/#contacto">
                    Contactar con ventas
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
                    <span className="text-gray-700">Pagos online integrados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Entrega automática de fotos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reconocimiento facial y de número</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Packs por cantidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cupones de descuento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Marca de agua propia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Equipos ilimitados de fotógrafos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dashboards y métricas grupales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Foto de regalo (Marketing)</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">
                      Servidor en local para carga de fotos instantánea (LAN)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Pagos tradicionales permitidos</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Conexión con múltiples locales</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Facturación automática (Solo Argentina)</span>
                  </li>
                  <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Implementación bonificada</span>
                  </li>
                </ul>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Cómo funciona el plan FREE?</h3>
              <p className="text-gray-700">
                El plan FREE no tiene costo mensual, solo comisión por venta. Si un mes no hay ventas no se abona
                absolutamente nada.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Cómo funciona el plan PRO?</h3>
              <p className="text-gray-700">
                El plan PRO tiene una pequeña suscripción mensual que se absorbe con lo que se ahorra en la reducción de
                las comisiones. Rápidamente estarás pagando significativamente menos que en el plan Free.
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Qué incluye la implementación bonificada?</h3>
              <p className="text-gray-700">
                Configuración completa de tu cuenta, alta de usuarios, personalización de branding y soporte.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Cómo se calculan las comisiones?</h3>
              <p className="text-gray-700">
                Las comisiones se aplican únicamente sobre las ventas exitosas realizadas a través de la plataforma. No
                hay comisiones por fotos no vendidas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿El plan FREE tiene limitaciones de tiempo?</h3>
              <p className="text-gray-700">
                El plan FREE no tiene limitaciones de tiempo. Es perfecto para comenzar y probar la plataforma, pero si
                lo deseas, puedes continuar libre de suscripciones de por vida.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Qué significa "la comisión más baja del mercado"?
              </h3>
              <p className="text-gray-700">
                Con el plan PRO pagas solo 7% de comisión por venta, significativamente menor que otras plataformas del
                mercado que cobran entre 15-30%.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Para qué tipo de empresas es ideal el plan ENTERPRISE?
              </h3>
              <p className="text-gray-700">
                Este plan es ideal para centros de ski, parques de diversiones, parques acuáticos, estadios y todo tipo
                de atracciones donde se realicen venta de fotos.
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
                Comienza con nuestro plan FREE o agenda una demo para conocer todas las funcionalidades
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
            <div className="mb-6 md:mb-0">
              <Link href="/">
                <Image src="/logo-nuevo-blanco.png" alt="FullFoto" width={120} height={40} className="h-12 w-auto" />
              </Link>
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
