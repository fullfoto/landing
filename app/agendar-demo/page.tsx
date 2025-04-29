import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Building, User, Mail, Phone, ChevronLeft, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AgendarDemoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/logo-nuevo-blanco.png" alt="FullFoto" width={120} height={40} className="h-12 w-auto" />
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
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md">Demo gratuita</Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image src="/pricing-bg.png" alt="Paisaje montañoso con lago" fill className="object-cover" priority />
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

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-gray-700">
                        Nombre completo <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="nombre" placeholder="Tu nombre" className="pl-10" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="email" type="email" placeholder="tu@email.com" className="pl-10" required />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-gray-700">
                        Teléfono <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="telefono" placeholder="+54 9 XXX XXXXXXX" className="pl-10" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa" className="text-gray-700">
                        Empresa
                      </Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="empresa" placeholder="Nombre de tu empresa" className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-gray-700">
                      Tipo de negocio <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup defaultValue="fotografo" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="fotografo" id="fotografo" />
                        <Label htmlFor="fotografo" className="cursor-pointer">
                          Fotógrafo independiente
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="empresa-digital" id="empresa-digital" />
                        <Label htmlFor="empresa-digital" className="cursor-pointer">
                          Empresa 100% digital
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="empresa-local" id="empresa-local" />
                        <Label htmlFor="empresa-local" className="cursor-pointer">
                          Empresa con local
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fecha" className="text-gray-700">
                        Fecha preferida <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="fecha" type="date" className="pl-10" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hora" className="text-gray-700">
                        Hora preferida <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Select required>
                          <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Selecciona una hora" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">09:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="13:00">01:00 PM</SelectItem>
                            <SelectItem value="14:00">02:00 PM</SelectItem>
                            <SelectItem value="15:00">03:00 PM</SelectItem>
                            <SelectItem value="16:00">04:00 PM</SelectItem>
                            <SelectItem value="17:00">05:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="text-gray-700">
                      Mensaje o consulta específica
                    </Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos más sobre tu negocio o cualquier consulta específica que tengas"
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg">
                    Solicitar demo
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
                  </p>
                </form>
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
