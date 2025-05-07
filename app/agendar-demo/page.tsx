import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, CheckCircle2, Mail, Phone } from "lucide-react"

import Navbar from "@/app/components/navbar"
import DemoForm from "@/app/components/demo-form"

export default function AgendarDemoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar demoText="Demo gratuita" />

      {/* Header */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image src="/pricing-bg.jpg" alt="Paisaje montañoso con lago" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Agenda una demo personalizada</h1>
            <p className="text-xl text-blue-100 mb-8">
              Descubre cómo FullFoto puede transformar tu negocio fotográfico con una demostración a medida
            </p>
            <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left Column - Benefits */}
              <div className="md:col-span-2 bg-blue-600 p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">¿Por qué agendar una demo?</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Personalizada</h3>
                      <p className="text-blue-100">Adaptada a las necesidades específicas de tu negocio fotográfico</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Interactiva</h3>
                      <p className="text-blue-100">Podrás hacer preguntas y ver la plataforma en acción</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Sin compromiso</h3>
                      <p className="text-blue-100">Conoce todas las funcionalidades sin ninguna obligación</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Asesoramiento</h3>
                      <p className="text-blue-100">Recibe consejos de expertos para maximizar tus ventas</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:info@fullfoto.com" className="hover:text-blue-100 transition-colors">
                      info@fullfoto.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+5493888538161" className="hover:text-blue-100 transition-colors">
                      +54 9 3888 538161
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="md:col-span-3 p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Completa tus datos</h2>
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Preguntas frecuentes sobre la demo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Resolvemos tus dudas sobre cómo funciona nuestra demostración personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Cuánto dura la demo?</h3>
              <p className="text-gray-700">
                Nuestras demos suelen durar entre 30 y 45 minutos, dependiendo de tus necesidades y preguntas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Necesito preparar algo?</h3>
              <p className="text-gray-700">
                No es necesario, pero si tienes preguntas específicas o casos de uso, es útil tenerlos a mano.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Cómo se realiza la demo?</h3>
              <p className="text-gray-700">
                A través de una videollamada donde compartiremos pantalla para mostrarte la plataforma en
                funcionamiento.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">¿Puedo invitar a mi equipo?</h3>
              <p className="text-gray-700">
                ¡Por supuesto! Recomendamos que participen todas las personas involucradas en la toma de decisiones.
              </p>
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
