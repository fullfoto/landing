import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Mail, Phone, Sparkles, ArrowRight, Scale, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import { BreadcrumbJsonLd } from "@/app/components/json-ld"
import { competitors } from "@/app/data/competitors"

export const metadata: Metadata = {
  title: "Comparativas: FullFoto vs otras plataformas",
  description:
    "Comparamos FullFoto con otras plataformas de venta de fotos de eventos deportivos: comisiones, funcionalidades y para quién es cada una.",
  alternates: { canonical: "/comparativas" },
}

/** Gradientes rotativos para los badges de las cards, en la línea del resto del sitio. */
const CARD_GRADIENTS = [
  "from-blue-500 to-blue-600 shadow-blue-200/50",
  "from-violet-500 to-purple-600 shadow-violet-200/50",
  "from-emerald-500 to-teal-600 shadow-emerald-200/50",
  "from-sky-500 to-cyan-600 shadow-sky-200/50",
]

export default function ComparativasPage() {
  const list = Object.values(competitors)

  return (
    <main className="flex min-h-screen flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "/" },
          { name: "Comparativas", url: "/comparativas" },
        ]}
      />

      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              Comparativas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
              FullFoto frente a otras{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                plataformas
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
              Comisión, funcionalidades y para quién está pensada cada una. Escritas para que decidas bien, no
              para que nos elijas a nosotros.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON CARDS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Scale className="h-4 w-4" />
              {list.length} comparativas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
              Elegí con quién compararnos.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              En cada una vas a encontrar la tabla punto por punto, dónde gana la otra plataforma y dónde
              ganamos nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {list.map((c, i) => (
              <Link
                key={c.slug}
                href={`/comparativas/fullfoto-vs-${c.slug}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`bg-gradient-to-br ${
                      CARD_GRADIENTS[i % CARD_GRADIENTS.length]
                    } rounded-2xl p-3.5 shadow-lg`}
                  >
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <span className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-xs font-medium">
                    {c.country}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight">
                  FullFoto vs {c.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">{c.summary}</p>

                <div className="flex items-center justify-between gap-4 pt-5 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {c.comparisonRows.length} criterios · {c.lastVerified}
                  </span>
                  <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all flex-shrink-0">
                    Ver comparativa
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                ¿No encontrás la plataforma que buscabas comparar?
              </h2>
              <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                Agendá una demo y te ayudamos a evaluar si FullFoto es una mejor opción para tu operación.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-7 text-base rounded-xl shadow-xl shadow-black/10 transition-all hover:-translate-y-0.5"
                asChild
              >
                <Link href="/agendar-demo">
                  Agendar demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/">
                <Image src="/logo-nuevo-blanco.png" alt="FullFoto" width={120} height={40} className="h-12 w-auto" />
              </Link>
            </div>
            <div className="flex gap-8">
              <Link href="/casos-de-exito" className="hover:text-white transition-colors text-sm">Casos</Link>
              <Link href="/terminos" className="hover:text-white transition-colors text-sm">Términos</Link>
              <Link href="/privacidad" className="hover:text-white transition-colors text-sm">Privacidad</Link>
              <Link href="/#contacto" className="hover:text-white transition-colors text-sm">Contacto</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
              <a href="mailto:info@fullfoto.com" className="flex items-center gap-2 hover:text-white transition-colors text-sm">
                <Mail className="h-4 w-4" />
                info@fullfoto.com
              </a>
              <a href="tel:+5491178279790" className="flex items-center gap-2 hover:text-white transition-colors text-sm">
                <Phone className="h-4 w-4" />
                +54 9 11 7827-9790
              </a>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} FullFoto. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
