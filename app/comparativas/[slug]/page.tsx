import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Check, ChevronLeft, ChevronRight, HelpCircle, Mail, Minus, Phone, ShieldCheck, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/app/components/json-ld"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { competitors } from "@/app/data/competitors"

function competitorFromSlug(slug: string) {
  const key = slug.replace(/^fullfoto-vs-/, "")
  return competitors[key]
}

export function generateStaticParams() {
  return Object.keys(competitors).map((key) => ({ slug: `fullfoto-vs-${key}` }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const competitor = competitorFromSlug(slug)
  if (!competitor) return {}

  return {
    title: `FullFoto vs ${competitor.name}: comparativa 2026`,
    description: `Comparamos FullFoto y ${competitor.name} para venta de fotos de eventos deportivos: comisión, funcionalidades, soporte y para quién es cada plataforma.`,
    alternates: { canonical: `/comparativas/${slug}` },
  }
}

export default async function ComparativaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const competitor = competitorFromSlug(slug)
  if (!competitor) notFound()

  return (
    <main className="flex min-h-screen flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "/" },
          { name: "Comparativas", url: "/comparativas" },
          { name: `FullFoto vs ${competitor.name}`, url: `/comparativas/${slug}` },
        ]}
      />
      <FAQPageJsonLd faqs={competitor.faqs} />

      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/comparativas"
            className="inline-flex items-center gap-1 text-blue-200 hover:text-white transition-colors text-sm mb-8"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver a comparativas
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              Comparativa
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
              FullFoto vs{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                {competitor.name}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl leading-relaxed">
              {competitor.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-2 text-blue-700 font-medium text-sm mb-4">
              <ShieldCheck className="h-4 w-4" />
              Resumen rápido
            </div>
            <p className="text-gray-800 text-lg leading-relaxed">{competitor.tldr}</p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">
              Comparación punto por punto
            </h2>
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-900 text-white text-sm font-medium">
                <div className="p-4">Funcionalidad</div>
                <div className="p-4 text-center">FullFoto</div>
                <div className="p-4 text-center">{competitor.name}</div>
              </div>
              {competitor.comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
                >
                  <div className="p-4 text-gray-700 font-medium">{row.feature}</div>
                  <div className="p-4 text-center text-gray-600 flex items-start justify-center gap-2">
                    <Check className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-left">{row.fullfoto}</span>
                  </div>
                  <div className="p-4 text-center text-gray-500 flex items-start justify-center gap-2">
                    <Minus className="h-4 w-4 text-gray-300 mt-0.5 flex-shrink-0" />
                    <span className="text-left">{row.competitor}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              Datos relevados de fuentes públicas y de nuestro research de mercado — si algo cambió, escribinos a{" "}
              <a href="mailto:info@fullfoto.com" className="underline">info@fullfoto.com</a> y lo corregimos.
            </p>
          </div>
        </div>
      </section>

      {/* COMPETITOR STRENGTHS — honesty */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
              Fortalezas reales de {competitor.name}
            </h2>
            <p className="text-gray-500 mb-8">
              Si vas a comparar, comparemos en serio — esto es lo que {competitor.name} hace bien.
            </p>
            <ul className="space-y-4">
              {competitor.strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <Check className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FULLFOTO ADVANTAGES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Por qué elegir FullFoto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {competitor.fullfotoAdvantages.map((a) => (
                <div key={a.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="bg-blue-50 rounded-xl p-2.5 w-fit mb-4">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Preguntas frecuentes</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes al comparar FullFoto con {competitor.name}
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
            {competitor.faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                ¿Listo para migrar de {competitor.name}?
              </h2>
              <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                Agendá una demo y te ayudamos a evaluar la migración: qué se traslada, qué hay que reconfigurar y
                los tiempos según tu operación.
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
              <Link href="/comparativas" className="hover:text-white transition-colors text-sm">Comparativas</Link>
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
