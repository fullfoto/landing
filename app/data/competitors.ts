export interface Competitor {
  slug: string
  name: string
  country: string
  tagline: string
  /** 1-2 líneas para la card del hub /comparativas */
  summary: string
  /** 2-3 frases para el bloque "Resumen rápido" de la página de detalle */
  tldr: string
  /** Mes/año de la última verificación de estos datos, ej. "septiembre 2026" */
  lastVerified: string
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
    tldr: "Runtag es una plataforma española con trayectoria en eventos deportivos masivos y varias pasarelas de pago internacionales, pero no publica su comisión. FullFoto es argentina, publica una comisión del 7% en el plan Pro, y además de running cubre parques acuáticos, centros de esquí y parques temáticos — con servidor LAN para venues sin buena conectividad.",
    lastVerified: "septiembre 2026",
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
  picsel: {
    slug: "picsel",
    name: "Picsel",
    country: "Latinoamérica",
    tagline: "Plataforma de venta de fotos para running, triatlón, ciclismo y trail",
    summary:
      "Picsel cubre running, triatlón, ciclismo, surf y trail en Latinoamérica con reconocimiento facial. FullFoto suma robustez probada en operaciones de mayor escala (centros de ski de nivel mundial) y verticales que Picsel no cubre.",
    tldr: "Picsel es una plataforma latinoamericana enfocada en running, triatlón, ciclismo, surf y trail, con una comisión del 10%. FullFoto cubre esos mismos eventos y además opera centros de ski de primer nivel mundial como FotoSoldeu (Grandvalira, Andorra) y Chapelco (Argentina), con comisiones desde 7% en el plan Pro y servidor LAN para conectividad limitada.",
    lastVerified: "septiembre 2026",
    strengths: [
      "Plan Pro con 0% de comisión para quienes prefieren pagar una suscripción fija ($16/mes + créditos) en vez de comisión por venta.",
      "Editor de fotos integrado con procesamiento por lotes.",
      "Entrega de fotos directamente por WhatsApp.",
    ],
    fullfotoAdvantages: [
      {
        title: "Infraestructura probada a nivel mundial",
        description:
          "FullFoto opera en centros de ski de primer nivel como FotoSoldeu (Grandvalira, Andorra) y Chapelco (Argentina) — infraestructura pensada para picos de demanda de miles de visitantes simultáneos, no solo para eventos puntuales.",
      },
      {
        title: "Comisión más baja en todos los planes",
        description: "10% en el plan Free, 7% en el Pro, y todavía más baja en Enterprise — frente al 10% de Picsel.",
      },
      {
        title: "Medios de pago pensados para Latinoamérica",
        description:
          "MercadoPago, PayPal y Pix integrados nativamente, con la flexibilidad de no depender de una sola pasarela para cobrar.",
      },
      {
        title: "Servidor LAN para conectividad limitada",
        description:
          "Carga instantánea de fotos sin depender de internet — clave en centros de esquí y parques acuáticos con conectividad débil.",
      },
      {
        title: "Cubre verticales que Picsel no toca",
        description:
          "Parques acuáticos, centros de esquí, parques temáticos y estadios, además de eventos deportivos — Picsel está enfocada en running, triatlón, ciclismo, surf y trail.",
      },
    ],
    comparisonRows: [
      {
        feature: "Infraestructura en centros de ski de nivel mundial",
        fullfoto: "Sí — FotoSoldeu (Grandvalira, Andorra), Chapelco (Argentina)",
        competitor: "Sin evidencia pública de operación en ski/parques",
      },
      {
        feature: "Comisión",
        fullfoto: "10% Free, 7% Pro, más baja en Enterprise",
        competitor: "10%",
      },
      {
        feature: "Medios de pago",
        fullfoto: "MercadoPago, PayPal, Pix",
        competitor: "Stripe",
      },
      {
        feature: "Servidor LAN para conectividad limitada",
        fullfoto: "Sí (plan Enterprise)",
        competitor: "No especificado en su sitio",
      },
      {
        feature: "Reconocimiento facial + número de dorsal",
        fullfoto: "Sí",
        competitor: "Sí",
      },
      {
        feature: "Verticales fuera de running/triatlón/ciclismo",
        fullfoto: "Sí — parques acuáticos, centros de ski, parques temáticos",
        competitor: "No — running, triatlón, ciclismo, surf, trail, MTB",
      },
      {
        feature: "Facturación automática AFIP (Argentina)",
        fullfoto: "Sí (plan Enterprise)",
        competitor: "No especificado en su sitio",
      },
    ],
    faqs: [
      {
        question: "¿Picsel y FullFoto son lo mismo?",
        answer:
          "No. Las dos ofrecen reconocimiento facial para vender fotos de eventos deportivos, pero Picsel está enfocada en running, triatlón, ciclismo, surf y trail, mientras que FullFoto además opera en centros de ski y parques acuáticos de gran escala, con infraestructura probada para picos de demanda altos.",
      },
      {
        question: "¿FullFoto es más robusto que Picsel para operaciones grandes?",
        answer:
          "FullFoto opera centros de ski de primer nivel mundial como FotoSoldeu (Grandvalira, Andorra) y Chapelco (Argentina), con picos de miles de visitantes simultáneos. No encontramos evidencia pública de que Picsel opere en ese tipo de venues — está enfocada en eventos deportivos puntuales.",
      },
      {
        question: "¿Cuál tiene menor comisión, FullFoto o Picsel?",
        answer:
          "FullFoto: 10% en el plan Free, 7% en el Pro y todavía más baja en Enterprise. Picsel cobra 10%. FullFoto es igual o más barata en todos los tramos.",
      },
      {
        question: "¿Puedo migrar de Picsel a FullFoto?",
        answer:
          "Sí. Agendá una demo y te ayudamos a evaluar la migración según el tamaño de tu operación.",
      },
    ],
  },
  lumepic: {
    slug: "lumepic",
    name: "Lumepic",
    country: "Uruguay",
    tagline: "Marketplace de fotografía deportiva con reconocimiento facial",
    summary:
      "Lumepic es un marketplace: tus fotos se venden mezcladas con las de otros fotógrafos, con una comisión de 20% a 30%. FullFoto te da una página 100% propia donde todas las ventas son tuyas, con comisiones de 7% a 10%.",
    tldr: "Lumepic es un marketplace donde tus fotos se venden mezcladas con las de otros fotógrafos, con comisión de 20% a 30%. FullFoto te da una página 100% propia — todas las ventas son tuyas — con comisiones de 7% a 10% y herramientas para armar tu propio marketplace bajo tu marca.",
    lastVerified: "septiembre 2026",
    strengths: [
      "Trae su propia audiencia y hace publicidad del evento — útil en carreras donde el fotógrafo o la empresa todavía no tiene marca conocida.",
      "Marketplace ya armado, con más de 41.000 usuarios y 3.800 fotógrafos activos en la región (Argentina, Perú, Chile, México, España, Portugal, Uruguay).",
      "Cero configuración: se sube la foto y ya está publicada, sin necesidad de armar una web propia.",
    ],
    fullfotoAdvantages: [
      {
        title: "Página 100% propia, no un marketplace compartido",
        description:
          "En Lumepic tus fotos compiten mezcladas con las de todos los demás fotógrafos del evento. En FullFoto tenés tu propia página con tu dominio y tu marca — todas las ventas son tuyas, sin competir por visibilidad dentro de la misma plataforma.",
      },
      {
        title: "Comisión sensiblemente más baja",
        description:
          "10% en el plan Free, 7% en el Pro y más baja en Enterprise, frente al 20% que cobra Lumepic como piso — y hasta 30% en eventos seleccionados.",
      },
      {
        title: "Herramientas para armar tu propio 'mini marketplace'",
        description:
          "Gestión completa de usuarios, equipos de fotógrafos y herramientas comerciales para que una empresa u operador arme su propia operación tipo marketplace, pero bajo su propia marca y quedándose con el 100% de sus ventas.",
      },
      {
        title: "Explotá tu marca personal al máximo",
        description:
          "Con tu propia web, cada venta refuerza tu marca — no la de una plataforma compartida con cientos de otros fotógrafos.",
      },
      {
        title: "Medios de pago flexibles",
        description: "MercadoPago, PayPal y Pix integrados, sin depender de una sola pasarela.",
      },
    ],
    comparisonRows: [
      {
        feature: "Modelo",
        fullfoto: "Página 100% propia — todas las ventas son tuyas",
        competitor: "Marketplace compartido — tus fotos compiten mezcladas con las de otros",
      },
      {
        feature: "Comisión",
        fullfoto: "10% Free, 7% Pro, más baja en Enterprise",
        competitor: "Desde 20%, hasta 30% en eventos seleccionados",
      },
      {
        feature: "Marca visible en la venta",
        fullfoto: "La tuya — dominio y branding propios",
        competitor: "La de Lumepic",
      },
      {
        feature: "Herramientas para armar tu propio marketplace (equipos, gestión comercial)",
        fullfoto: "Sí",
        competitor: "No aplica — es la plataforma marketplace en sí",
      },
      {
        feature: "Trae audiencia/publicidad propia al evento",
        fullfoto: "Depende de tu propia cobertura y marca",
        competitor: "Sí — es una fortaleza real de Lumepic",
      },
      {
        feature: "Reconocimiento facial",
        fullfoto: "Sí",
        competitor: "Sí",
      },
      {
        feature: "Medios de pago",
        fullfoto: "MercadoPago, PayPal, Pix",
        competitor: "No especificado en su sitio",
      },
    ],
    faqs: [
      {
        question: "¿Lumepic y FullFoto son lo mismo?",
        answer:
          "No. Lumepic es un marketplace donde tus fotos se venden mezcladas con las de otros fotógrafos. FullFoto te da una página 100% propia, con tu marca y tu dominio, donde todas las ventas son tuyas.",
      },
      {
        question: "¿Puedo usar Lumepic y FullFoto al mismo tiempo?",
        answer:
          "Sí, es una combinación común. Muchos fotógrafos y empresas usan Lumepic en eventos donde todavía no son conocidos, aprovechando su publicidad y alcance, y usan FullFoto para maximizar el margen y la marca propia en la cobertura que ya dominan.",
      },
      {
        question: "¿Cuál cobra menos comisión, FullFoto o Lumepic?",
        answer:
          "FullFoto: 10% en el plan Free y 7% en el Pro, más baja todavía en Enterprise. Lumepic cobra desde 20%, hasta 30% en eventos seleccionados.",
      },
      {
        question: "¿Puedo migrar de Lumepic a FullFoto?",
        answer: "Sí. Agendá una demo y vemos cómo migrar tu operación manteniendo tu base de compradores.",
      },
    ],
  },
  pixieset: {
    slug: "pixieset",
    name: "Pixieset",
    country: "Canadá",
    tagline: "Galerías de cliente y sitios de portfolio para fotógrafos de bodas y retratos",
    summary:
      "Pixieset es para fotógrafos que entregan una galería privada a un cliente conocido (bodas, retratos) y quieren un portfolio propio. No tiene reconocimiento facial ni búsqueda por dorsal — no está pensada para que miles de desconocidos encuentren sus fotos en un evento masivo.",
    tldr: "Pixieset es una plataforma canadiense de galerías de cliente y sitios de portfolio, pensada para que un fotógrafo entregue fotos a un cliente conocido (una boda, una sesión) y venda sus servicios. FullFoto está construida específicamente para la venta masiva de fotos en eventos deportivos, parques y centros de ski, con reconocimiento facial para que miles de compradores desconocidos encuentren las suyas.",
    lastVerified: "septiembre 2026",
    strengths: [
      "Plataforma madura (desde 2013), con foco fuerte en fotógrafos de bodas y retrato.",
      "Sitios de portfolio muy pulidos, con plantillas de diseño premiadas.",
      "Herramientas de estudio completas: contratos, cuestionarios, agenda y facturación en un solo lugar.",
      "Planes con 0% de comisión disponibles desde $10 USD/mes fijo.",
    ],
    fullfotoAdvantages: [
      {
        title: "Construida para venta masiva, no para entrega a un cliente",
        description:
          "FullFoto tiene reconocimiento facial y búsqueda por dorsal para que miles de compradores desconocidos encuentren sus fotos en minutos. Pixieset está pensada para entregar una galería privada a un cliente que ya conocés (una boda, una sesión de retrato).",
      },
      {
        title: "Pensada para los verticales de FullFoto",
        description:
          "Parques acuáticos, centros de esquí, eventos deportivos y parques temáticos — con servidor LAN para conectividad limitada. Pixieset no está diseñada para estos volúmenes ni para compradores anónimos.",
      },
      {
        title: "Comisión que no depende de pagar un plan fijo",
        description:
          "10% en el Free y 7% en el Pro, sin importar cuántas fotos subas. En Pixieset, bajar la comisión a 0% requiere pagar un plan mensual fijo desde el día uno, tengas ventas o no.",
      },
      {
        title: "Medios de pago pensados para Latinoamérica",
        description: "MercadoPago, PayPal y Pix integrados nativamente.",
      },
    ],
    comparisonRows: [
      {
        feature: "Para qué está pensada",
        fullfoto: "Venta masiva de fotos en eventos deportivos, parques y ski",
        competitor: "Entrega de galería a un cliente conocido (bodas, retratos) y portfolio de fotógrafo",
      },
      {
        feature: "Reconocimiento facial / búsqueda por dorsal",
        fullfoto: "Sí",
        competitor: "No",
      },
      {
        feature: "Pensada para miles de compradores desconocidos por evento",
        fullfoto: "Sí",
        competitor: "No — pensada para pocos compradores por sesión",
      },
      {
        feature: "Comisión",
        fullfoto: "10% Free, 7% Pro, más baja en Enterprise",
        competitor: "15% Free, 0% desde plan pago ($10 USD/mes fijo)",
      },
      {
        feature: "Sitio de portfolio personal para el fotógrafo",
        fullfoto: "No es el foco",
        competitor: "Sí — es su fuerte, con plantillas premiadas",
      },
      {
        feature: "Servidor LAN para conectividad limitada",
        fullfoto: "Sí (plan Enterprise)",
        competitor: "No especificado en su sitio",
      },
      {
        feature: "Medios de pago",
        fullfoto: "MercadoPago, PayPal, Pix",
        competitor: "No especificado en su sitio",
      },
    ],
    faqs: [
      {
        question: "¿Pixieset y FullFoto compiten por lo mismo?",
        answer:
          "No del todo. Pixieset está pensada para que un fotógrafo entregue una galería privada a un cliente conocido — una boda, una sesión de retrato — y arme su portfolio. FullFoto está construida para que miles de compradores desconocidos encuentren y compren sus fotos en un evento masivo, con reconocimiento facial y búsqueda por dorsal.",
      },
      {
        question: "¿Puedo usar Pixieset para vender fotos de una carrera o un parque acuático?",
        answer:
          "Técnicamente se pueden subir las fotos, pero Pixieset no tiene reconocimiento facial ni búsqueda por dorsal, así que cada comprador tendría que revisar manualmente cientos o miles de fotos para encontrar las suyas — a esa escala no funciona bien.",
      },
      {
        question: "¿Cuál tiene menor comisión, FullFoto o Pixieset?",
        answer:
          "Depende del volumen: Pixieset cobra 15% en el plan Free, o 0% pagando un plan fijo desde $10 USD/mes. FullFoto cobra 10% en el Free y 7% en el Pro, sin un mínimo mensual fijo.",
      },
      {
        question: "¿Puedo migrar de Pixieset a FullFoto?",
        answer:
          "Sí, tiene sentido si estás usando Pixieset para eventos masivos y la búsqueda manual les está haciendo perder ventas a tus compradores. Agendá una demo y lo vemos.",
      },
    ],
  },
}
