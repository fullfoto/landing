import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  Check,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  Quote,
  Scale,
  ShieldCheck,
  Sparkles,
  Trophy,
  X,
} from "lucide-react"

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

/**
 * Deriva el tono de una celda a partir de su propio texto — no de qué columna es.
 * Así el ícono nunca contradice el dato: si una celda de la competencia dice "Sí",
 * muestra un check igual que la nuestra.
 */
function cellTone(value: string): "yes" | "no" | "neutral" {
  const v = value.trim().toLowerCase()
  if (v.startsWith("sí")) return "yes"
  if (v.startsWith("no aplica")) return "neutral"
  if (v === "no" || v.startsWith("no ") || v.startsWith("no—") || v.startsWith("no —")) return "no"
  return "neutral"
}

/** Gradientes rotativos para los badges numerados de las ventajas. */
const ADVANTAGE_GRADIENTS = [
  "from-blue-500 to-blue-600 shadow-blue-200/50",
  "from-violet-500 to-purple-600 shadow-violet-200/50",
  "from-emerald-500 to-teal-600 shadow-emerald-200/50",
  "from-sky-500 to-cyan-600 shadow-sky-200/50",
  "from-indigo-500 to-blue-700 shadow-indigo-200/50",
]

function pad(n: number) {
  return String(n).padStart(2, "0")
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
    title: `FullFoto vs ${competitor.name}: comparativa y alternativa 2026`,
    description: `¿Buscás una alternativa a ${competitor.name}? Comparamos FullFoto y ${competitor.name} en comisión, funcionalidades, soporte y para quién es cada plataforma — con datos verificados en ${competitor.lastVerified}.`,
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

  const rows = competitor.comparisonRows

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

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-24 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/comparativas"
            className="inline-flex items-center gap-1 text-blue-200/80 hover:text-white transition-colors text-sm mb-8"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver a comparativas
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium border border-white/20">
                <Sparkles className="h-3 w-3" />
                Comparativa
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium border border-white/20">
                <MapPin className="h-3 w-3" />
                {competitor.name} · {competitor.country}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium border border-white/20">
                <ShieldCheck className="h-3 w-3" />
                Verificada en {competitor.lastVerified}
              </span>
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

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]"></div>
      </section>

      {/* ═══════════════════════════════════════════════
          TL;DR
      ═══════════════════════════════════════════════ */}
      <section className="pb-16 bg-white relative z-10 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-blue-100 shadow-xl shadow-blue-100/50 p-8 md:p-10">
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3.5 shadow-lg shadow-blue-200/50 flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
                  Resumen rápido
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">{competitor.tldr}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COMPARISON TABLE
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                <Scale className="h-4 w-4" />
                Punto por punto
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                Lado a lado.
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Lo que cada plataforma publica sobre sí misma, en la misma tabla y sin asteriscos.
              </p>
            </div>

            {/* ─── Desktop: grilla con columna destacada ─── */}
            <div className="hidden md:block bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50 p-5 lg:p-7">
              <div
                className="relative grid"
                style={{ gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1.05fr) minmax(0,1fr)" }}
              >
                {/* Bandas alternadas de fila (debajo de todo) */}
                {rows.map((row, i) =>
                  i % 2 === 1 ? (
                    <div
                      key={`band-${row.feature}`}
                      aria-hidden
                      className="pointer-events-none rounded-xl bg-gray-50"
                      style={{ gridColumn: "1 / -1", gridRow: i + 2 }}
                    />
                  ) : null,
                )}

                {/* Panel destacado detrás de la columna FullFoto */}
                <div
                  aria-hidden
                  className="pointer-events-none rounded-2xl bg-gradient-to-b from-blue-50 via-blue-50/80 to-blue-50/40 ring-1 ring-blue-500/25"
                  style={{ gridColumn: 2, gridRow: `1 / ${rows.length + 2}` }}
                />

                {/* Encabezados */}
                <div style={{ gridColumn: 1, gridRow: 1 }} className="relative z-10 px-5 pb-5" />
                <div
                  style={{ gridColumn: 2, gridRow: 1 }}
                  className="relative z-10 px-5 pt-6 pb-5 flex flex-col items-center gap-2"
                >
                  <span className="text-base font-bold text-blue-700 tracking-tight">FullFoto</span>
                  <span className="inline-flex items-center gap-1 bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                    <Trophy className="h-3 w-3" />
                    Nuestra plataforma
                  </span>
                </div>
                <div
                  style={{ gridColumn: 3, gridRow: 1 }}
                  className="relative z-10 px-5 pt-6 pb-5 text-center"
                >
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.14em]">
                    {competitor.name}
                  </span>
                </div>

                {/* Filas */}
                {rows.map((row, i) => {
                  const ffTone = cellTone(row.fullfoto)
                  const coTone = cellTone(row.competitor)
                  return (
                    <div key={row.feature} className="contents">
                      <div
                        style={{ gridColumn: 1, gridRow: i + 2 }}
                        className="relative z-10 px-5 py-5 flex items-start"
                      >
                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.08em] leading-relaxed">
                          {row.feature}
                        </span>
                      </div>

                      <div
                        style={{ gridColumn: 2, gridRow: i + 2 }}
                        className="relative z-10 px-5 py-5 flex items-start gap-2.5"
                      >
                        <span className="w-4 flex-shrink-0 pt-0.5">
                          {ffTone === "yes" && <Check className="h-4 w-4 text-blue-600" />}
                          {ffTone === "no" && <X className="h-4 w-4 text-gray-300" />}
                        </span>
                        <span className="text-sm text-gray-900 font-medium leading-relaxed">
                          {row.fullfoto}
                        </span>
                      </div>

                      <div
                        style={{ gridColumn: 3, gridRow: i + 2 }}
                        className="relative z-10 px-5 py-5 flex items-start gap-2.5"
                      >
                        <span className="w-4 flex-shrink-0 pt-0.5">
                          {coTone === "yes" && <Check className="h-4 w-4 text-gray-400" />}
                          {coTone === "no" && <X className="h-4 w-4 text-gray-300" />}
                        </span>
                        <span className="text-sm text-gray-500 leading-relaxed">{row.competitor}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ─── Mobile: una tarjeta por criterio ─── */}
            <div className="md:hidden space-y-4">
              {rows.map((row) => (
                <div
                  key={row.feature}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5"
                >
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.08em] mb-4">
                    {row.feature}
                  </p>
                  <div className="rounded-xl bg-blue-50 ring-1 ring-blue-500/20 p-4 mb-2.5">
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1.5">
                      FullFoto
                    </p>
                    <p className="text-sm text-gray-900 font-medium leading-relaxed">{row.fullfoto}</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      {competitor.name}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">{row.competitor}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-6 text-center max-w-2xl mx-auto leading-relaxed">
              Última actualización: {competitor.lastVerified}. Datos relevados de fuentes públicas y de nuestro
              research de mercado — si algo cambió, escribinos a{" "}
              <a href="mailto:info@fullfoto.com" className="underline hover:text-gray-600">
                info@fullfoto.com
              </a>{" "}
              y lo corregimos.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FULLFOTO ADVANTAGES
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" />
                Nuestro lado
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                Dónde gana FullFoto.
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Las diferencias que se notan en la operación, no en el folleto.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {competitor.fullfotoAdvantages.map((a, i) => (
                <div
                  key={a.title}
                  className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`bg-gradient-to-br ${
                      ADVANTAGE_GRADIENTS[i % ADVANTAGE_GRADIENTS.length]
                    } rounded-2xl w-12 h-12 flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <span className="text-white font-bold text-sm tabular-nums">{pad(i + 1)}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 leading-snug">{a.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          EL BALANCE HONESTO — dos lados, uno al lado del otro
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                <Scale className="h-4 w-4" />
                Sin vueltas
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                El balance honesto.
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Si vamos a comparar, comparemos en serio. Esto es lo que hace bien cada una.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Competidor */}
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-7">
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-2.5 shadow-lg shadow-amber-200/50">
                    <Scale className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Dónde gana {competitor.name}</h3>
                </div>
                <ul className="space-y-5">
                  {competitor.strengths.map((s, i) => (
                    <li key={s} className="flex gap-4">
                      <span className="text-xs font-bold text-amber-500 tabular-nums pt-1 flex-shrink-0">
                        {pad(i + 1)}
                      </span>
                      <span className="text-gray-600 text-sm leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FullFoto */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-500/30 shadow-xl shadow-blue-100/60 p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-56 h-56 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-2.5 shadow-lg shadow-blue-200/50">
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Dónde gana FullFoto</h3>
                  </div>
                  <ul className="space-y-5">
                    {competitor.fullfotoAdvantages.map((a, i) => (
                      <li key={a.title} className="flex gap-4">
                        <span className="text-xs font-bold text-blue-600 tabular-nums pt-1 flex-shrink-0">
                          {pad(i + 1)}
                        </span>
                        <span className="text-gray-800 text-sm font-medium leading-relaxed">
                          {a.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIAL
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 text-blue-300/40 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-white">
              &ldquo;El equipo de FullFoto más que nuestro proveedor es nuestro partner tecnológico. Nos acompañan
              hace años en todos nuestros proyectos: Cerro Catedral, La Hoya, Lago Hermoso y ahora también
              Chapelco.&rdquo;
            </blockquote>
            <div className="text-blue-200">
              <p className="font-semibold">Diego Ferreyra</p>
              <p className="text-sm text-blue-300/80">Socio de B-Side</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Las dudas que más aparecen al poner FullFoto y {competitor.name} una al lado de la otra
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

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
                ¿Listo para migrar de {competitor.name}?
              </h2>
              <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                Agendá una demo y evaluamos la migración con vos: qué se traslada, qué hay que reconfigurar y
                cuánto tarda según tu operación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 px-10 py-7 text-base rounded-xl bg-transparent backdrop-blur-sm transition-all"
                  asChild
                >
                  <Link href="/precios">Ver precios</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════ */}
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
