import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  BarChart3,
  Users,
  Brain,
  CreditCard,
  Globe,
  Filter,
  Smartphone,
  Server,
  Clock,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import ContactForm from "@/app/components/contact-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-image.jpg"
            alt="Fotógrafo capturando a un snowboarder en acción"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Potenciá tus <br />
            <span className="text-blue-400">ventas de fotos</span>
            <br />
            sin complicaciones
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl">
            Plataforma inteligente que mejora y automatiza la venta de fotos en parques, centros de esquí, eventos
            deportivos o cualquier experiencia que merezca ser recordada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 font-inter text-[14px] rounded-md"
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
              className="text-white border-white hover:bg-white/10 px-8 py-6 font-inter text-[14px] rounded-md bg-transparent"
            >
              Conocer más
            </Button>
          </div>

          <div className="mt-auto">
            <p className="text-white/80 mb-4">Plataforma utilizada por:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="rounded-full px-4 py-2 text-white/70 backdrop-blur-sm bg-white/10">Parques de nieve</div>
              <div className="rounded-full px-4 py-2 text-white/70 backdrop-blur-sm bg-white/10">
                Eventos deportivos
              </div>
              <div className="rounded-full px-4 py-2 text-white/70 backdrop-blur-sm bg-white/10">Parques temáticos</div>
              <div className="rounded-full px-4 py-2 text-white/70 backdrop-blur-sm bg-white/10">
                Fotógrafos independientes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Clave */}
      <section id="beneficios" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Beneficios Clave</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FullFoto simplifica y potencia la manera en que vendes tus fotografías
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] border border-gray-100">
              <div className="flex items-center gap-5 mb-6">
                <div className="bg-blue-100 rounded-xl p-4 flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Aumento de Ingresos</h3>
                </div>
              </div>
              <p className="text-gray-600">
                Monetizá más momentos. Tus fotos llegan a más clientes, en más lugares, sin perder oportunidades de
                venta.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] border border-gray-100">
              <div className="flex items-center gap-5 mb-6">
                <div className="bg-blue-100 rounded-xl p-4 flex-shrink-0">
                  <Server className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Gestión Eficiente</h3>
                </div>
              </div>
              <p className="text-gray-600">
                Centralizá todo en una sola plataforma. Olvidate del caos de carpetas, pen drives o correos perdidos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] border border-gray-100">
              <div className="flex items-center gap-5 mb-6">
                <div className="bg-blue-100 rounded-xl p-4 flex-shrink-0">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Análisis en Tiempo Real</h3>
                </div>
              </div>
              <p className="text-gray-600">
                Medí qué vende, cuándo y quién. Mejorá tu operación cada día con métricas clave.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] border border-gray-100">
              <div className="flex items-center gap-5 mb-6">
                <div className="bg-blue-100 rounded-xl p-4 flex-shrink-0">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Adaptabilidad</h3>
                </div>
              </div>
              <p className="text-gray-600">
                Trabajás solo o con un equipo grande, FullFoto se adapta. Incluso con múltiples puntos de venta físicos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] border border-gray-100">
              <div className="flex items-center gap-5 mb-6">
                <div className="bg-blue-100 rounded-xl p-4 flex-shrink-0">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Innovación Tecnológica</h3>
                </div>
              </div>
              <p className="text-gray-600">
                Filtros inteligentes por rostro, número o color de ropa. La IA hace el trabajo pesado por vos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] border border-gray-100">
              <div className="flex items-center gap-5 mb-6">
                <div className="bg-blue-100 rounded-xl p-4 flex-shrink-0">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Conectividad</h3>
                </div>
              </div>
              <p className="text-gray-600">
                Integración total. Cuando un PH toma sus fotos, automáticamente están disponibles en todos los locales y
                en la web para compra desde casa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Características Destacadas */}
      <section id="caracteristicas" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Características Destacadas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una plataforma completa, diseñada para maximizar tu eficiencia y tus ventas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid gap-8">
                <div className="flex gap-4 items-start">
                  <div className="rounded-lg bg-blue-100 p-3 flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multidispositivo</h3>
                    <p className="text-gray-600">
                      Compatible con móvil y desktop para gestionar tus ventas desde cualquier lugar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="rounded-lg bg-blue-100 p-3 flex-shrink-0">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reconocimiento IA</h3>
                    <p className="text-gray-600">
                      Detección facial y de números para facilitar la búsqueda de fotos a tus clientes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="rounded-lg bg-blue-100 p-3 flex-shrink-0">
                    <Filter className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Filtros Inteligentes</h3>
                    <p className="text-gray-600">
                      Galerías organizadas por fecha, rostro, número o lugar para una experiencia de usuario óptima.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="rounded-lg bg-blue-100 p-3 flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Múltiples Pagos</h3>
                    <p className="text-gray-600">
                      Integración con MercadoPago, PayPal, Pix y más métodos para facilitar la compra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/fullfoto-dispositivos.png"
                  alt="FullFoto en múltiples dispositivos - móvil, tablet y desktop"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-100 rounded-full -z-10"></div>
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gray-200 rounded-full -z-10"></div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Más funcionalidades que te encantarán</h3>
              <ul className="grid gap-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <span>Entrega de fotos automática y segura</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <span>Estadísticas exportables en CSV</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <span>Dominio propio personalizable</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <span>Soporte en múltiples idiomas y monedas</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Modelo de negocio transparente</h3>
              <p className="text-gray-600 mb-4">
                Sin gastos ocultos, sin sorpresas. Facturación automática incluida (compatible con AFIP Argentina).
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full" asChild>
                <Link href="/precios">Ver planes de precios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+12M</div>
              <p className="text-blue-200">Fotos subidas</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+65k</div>
              <p className="text-blue-200">Usuarios registrados</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+700</div>
              <p className="text-blue-200">PHs activos</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">+35k</div>
              <p className="text-blue-200">Ventas cerradas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Confían en nosotros */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Confían en nosotros</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              +50 empresas y fotógrafos de primer nivel, entre ellos:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="flex justify-center items-center p-3 h-24 lg:h-20">
              <Image src="/clients/aquafoto.png" alt="Aquafoto" width={160} height={80} className="object-contain" />
            </div>
            <div className="flex justify-center items-center p-3 h-24 lg:h-20">
              <Image src="/clients/b-side.png" alt="B-Side" width={160} height={80} className="object-contain" />
            </div>
            <div className="flex justify-center items-center p-3 h-24 lg:h-20">
              <Image
                src="/clients/patagonia-splash.png"
                alt="Patagonia Splash"
                width={180}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center p-3 h-24 lg:h-20">
              <Image
                src="/clients/fotosoldeu.png"
                alt="Foto Soldeu"
                width={140}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center p-3 h-24 lg:h-20">
              <Image
                src="/clients/termas-marinas.png"
                alt="Termas Marinas Park"
                width={180}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center p-3 h-24 lg:h-20">
              <Image
                src="/clients/interleague.png"
                alt="Interleague"
                width={140}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="text-left lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    ¿Querés llevar tus ventas de fotos al siguiente nivel?
                  </h2>
                  <p className="text-xl text-blue-100 mb-10">
                    Contáctanos para una demo o más información sobre cómo FullFoto puede transformar tu negocio
                    fotográfico.
                  </p>
                  <div className="hidden lg:block">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-white/10 p-3 rounded-full">
                        <CheckCircle2 className="h-6 w-6 text-blue-300" />
                      </div>
                      <p className="text-white">Soporte técnico personalizado</p>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-white/10 p-3 rounded-full">
                        <CheckCircle2 className="h-6 w-6 text-blue-300" />
                      </div>
                      <p className="text-white">Implementación en menos de 24 horas</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-3 rounded-full">
                        <CheckCircle2 className="h-6 w-6 text-blue-300" />
                      </div>
                      <p className="text-white">Capacitación gratuita para tu equipo</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Contactanos</h3>
                  <ContactForm />
                </div>
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
