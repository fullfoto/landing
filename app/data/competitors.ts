export interface Competitor {
  slug: string
  name: string
  country: string
  tagline: string
  /** 1-2 líneas para la card del hub /comparativas */
  summary: string
  /** Fortalezas reales del competidor, reconocidas con honestidad */
  strengths: string[]
  fullfotoAdvantages: { title: string; description: string }[]
  comparisonRows: { feature: string; fullfoto: string; competitor: string }[]
  faqs: { question: string; answer: string }[]
}

export const competitors: Record<string, Competitor> = {
  runtag: {
    slug: "runtag",
    name: "Runtag",
    country: "España",
    tagline: "Plataforma española de reconocimiento facial y de dorsal para eventos deportivos",
    summary:
      "Runtag es la tecnología detrás de varias fotografías de eventos deportivos en Argentina, incluyendo Fotorun. Es española, no publica comisión pública y está enfocada solo en running y eventos masivos.",
    strengths: [
      "Integra múltiples pasarelas de pago internacionales: Stripe, PayPal, Apple Pay y Google Pay, además de MercadoPago.",
      "Trayectoria comprobada en eventos deportivos masivos a nivel internacional.",
      "Doble reconocimiento (facial y numérico de dorsal) ya validado a gran escala.",
    ],
    fullfotoAdvantages: [
      {
        title: "Comisión transparente y pública",
        description:
          "El plan Pro cobra 7% de comisión y está publicado en fullfoto.com/precios. No hace falta pedir una cotización para saber cuánto vas a pagar por venta.",
      },
      {
        title: "Empresa argentina, soporte en tu huso horario",
        description:
          "FullFoto opera desde Argentina, sin intermediarios en otro país ni demoras de zona horaria o idioma para resolver un problema en plena temporada.",
      },
      {
        title: "Pensada también para conectividad limitada",
        description:
          "El plan Enterprise incluye servidor LAN para carga instantánea de fotos sin depender de internet — clave en centros de esquí y parques acuáticos, algo que no surge en plataformas enfocadas solo en carreras urbanas bien conectadas.",
      },
      {
        title: "No se limita al running",
        description:
          "La misma plataforma cubre parques acuáticos, centros de esquí, parques temáticos y estadios, no solo carreras y maratones.",
      },
      {
        title: "Facturación automática vía AFIP",
        description:
          "Para operaciones en Argentina (plan Enterprise), sin trabajo administrativo manual de facturación.",
      },
    ],
    comparisonRows: [
      {
        feature: "País de la empresa",
        fullfoto: "Argentina",
        competitor: "España",
      },
      {
        feature: "Comisión publicada públicamente",
        fullfoto: "Sí — 7% en el plan Pro",
        competitor: "No — hay que solicitar cotización",
      },
      {
        feature: "Reconocimiento facial + número de dorsal",
        fullfoto: "Sí",
        competitor: "Sí",
      },
      {
        feature: "Pasarelas de pago",
        fullfoto: "MercadoPago, PayPal, Pix",
        competitor: "Stripe, PayPal, MercadoPago, Apple Pay, Google Pay",
      },
      {
        feature: "Servidor LAN para conectividad limitada",
        fullfoto: "Sí (plan Enterprise)",
        competitor: "No especificado en su sitio",
      },
      {
        feature: "Facturación automática AFIP (Argentina)",
        fullfoto: "Sí (plan Enterprise)",
        competitor: "No especificado en su sitio",
      },
      {
        feature: "Verticales fuera de running (parques, ski, estadios)",
        fullfoto: "Sí",
        competitor: "Enfocada en eventos deportivos masivos",
      },
      {
        feature: "Plan gratuito sin límite de tiempo",
        fullfoto: "Sí",
        competitor: "No especificado en su sitio",
      },
    ],
    faqs: [
      {
        question: "¿Runtag y FullFoto son lo mismo?",
        answer:
          "No. Las dos son plataformas con reconocimiento facial y de dorsal para vender fotos de eventos deportivos, pero Runtag es una empresa española enfocada en running y eventos masivos, mientras que FullFoto es argentina y además cubre verticales como parques acuáticos, centros de esquí y parques temáticos.",
      },
      {
        question: "¿Puedo migrar de Runtag a FullFoto?",
        answer:
          "Sí. Agendá una demo y te ayudamos a evaluar la migración: qué se traslada, qué hay que reconfigurar y los tiempos de implementación según tu operación.",
      },
      {
        question: "¿FullFoto cobra menos comisión que Runtag?",
        answer:
          "FullFoto publica su comisión de forma pública: 7% en el plan Pro. Runtag no publica la suya en su sitio, así que la única forma de comparar con precisión es pedirles una cotización directa y compararla con la nuestra.",
      },
      {
        question: "¿Runtag tiene mejores pasarelas de pago que FullFoto?",
        answer:
          "Runtag integra más pasarelas internacionales (Stripe, Apple Pay, Google Pay) además de PayPal y MercadoPago. Para una operación 100% argentina o latinoamericana, MercadoPago, PayPal y Pix suelen cubrir la enorme mayoría de los pagos, así que en la práctica no suele ser una limitación.",
      },
    ],
  },
}
