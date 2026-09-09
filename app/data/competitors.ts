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
    tagline:
      "Dos plataformas con reconocimiento facial y de dorsal, dos maneras muy distintas de decirte cuánto cuestan. Comparamos comisión, pasarelas de pago, verticales y soporte con lo que cada una publica.",
    summary:
      "Runtag es la tecnología detrás de varias operaciones de foto deportiva en Argentina, Fotorun incluida. Es española, se enfoca en running y eventos masivos, y no publica su comisión.",
    tldr: "Runtag tiene trayectoria real en eventos deportivos masivos y la lista de pasarelas de pago más larga de esta comparativa. Lo que no tiene es un precio público: para saber cuánto te va a costar, hay que pedir cotización. FullFoto publica 7% en el plan Pro, opera desde Argentina y no se queda en el running — parques acuáticos, centros de esquí y parques temáticos corren sobre la misma plataforma, con servidor LAN para los venues donde internet no alcanza.",
    lastVerified: "septiembre 2026",
    strengths: [
      "Integra la lista de pasarelas más larga de esta comparativa: Stripe, PayPal, Apple Pay y Google Pay, además de MercadoPago.",
      "Trayectoria internacional comprobada en eventos deportivos masivos, con la operación probada el día que más duele: el de la carrera.",
      "Doble reconocimiento —facial y de dorsal— ya validado a gran escala.",
    ],
    fullfotoAdvantages: [
      {
        title: "Comisión transparente y pública",
        description:
          "7% por venta en el plan Pro, publicado en fullfoto.com/precios. No hace falta una llamada comercial para saber cuánto te queda de cada foto que vendés.",
      },
      {
        title: "Empresa argentina, soporte en tu huso horario",
        description:
          "Cuando algo se rompe en plena temporada hablás con gente que trabaja en tu mismo horario y tu mismo idioma. Sin intermediarios en otro país ni un ticket esperando a que amanezca en Europa.",
      },
      {
        title: "Pensada también para conectividad limitada",
        description:
          "El plan Enterprise incluye servidor LAN: las fotos se cargan al instante sin depender de internet. En un centro de esquí o un parque acuático eso decide si hay venta o no — y no es un problema que aparezca en una carrera urbana bien conectada.",
      },
      {
        title: "No se limita al running",
        description:
          "La misma plataforma corre parques acuáticos, centros de esquí, parques temáticos y estadios. Si tu operación no es solo carreras, no necesitás una segunda herramienta.",
      },
      {
        title: "Facturación automática vía AFIP",
        description:
          "Para operaciones argentinas en plan Enterprise: las facturas salen solas, sin nadie cargándolas a mano al cierre del día.",
      },
      {
        title: "Seguridad avanzada contra robo de fotos",
        description:
          "Configuraciones de seguridad con defensa activa contra capturas de pantalla y contra intentos de sacar la marca de agua con herramientas de IA. La única forma de quedarse con la foto en buena calidad es comprándola.",
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
        competitor: "No la publica: hay que pedir cotización",
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
        competitor: "Sin datos públicos",
      },
      {
        feature: "Facturación automática AFIP (Argentina)",
        fullfoto: "Sí (plan Enterprise)",
        competitor: "Sin datos públicos",
      },
      {
        feature: "Verticales fuera del running",
        fullfoto: "Parques acuáticos, ski, parques temáticos, estadios",
        competitor: "Enfocada en eventos deportivos masivos",
      },
      {
        feature: "Plan gratuito sin límite de tiempo",
        fullfoto: "Sí",
        competitor: "Sin datos públicos",
      },
      {
        feature: "Seguridad anti-captura y anti-remoción de marca de agua (IA)",
        fullfoto: "Sí",
        competitor: "Sin datos públicos",
      },
    ],
    faqs: [
      {
        question: "¿Runtag y FullFoto son lo mismo?",
        answer:
          "No. Comparten la tecnología de base —reconocimiento facial y búsqueda por dorsal— pero no el alcance. Runtag es una empresa española que vive del running y los eventos masivos. FullFoto es argentina y, además de carreras, corre parques acuáticos, centros de esquí y parques temáticos sobre la misma plataforma.",
      },
      {
        question: "¿Puedo migrar de Runtag a FullFoto?",
        answer:
          "Sí. En una demo revisamos tu operación y te decimos qué se traslada tal cual, qué hay que reconfigurar y cuánto tarda cada cosa. Si conviene esperar al cierre de temporada para hacer el cambio, también te lo decimos.",
      },
      {
        question: "¿FullFoto cobra menos comisión que Runtag?",
        answer:
          "No podemos afirmarlo y no vamos a inventarlo. Lo nuestro está publicado: 7% en el plan Pro. Runtag no publica la suya en su sitio, así que la única comparación honesta es pedirles una cotización directa y ponerla al lado de la nuestra.",
      },
      {
        question: "¿Runtag tiene mejores pasarelas de pago que FullFoto?",
        answer:
          "Tiene más: Stripe, Apple Pay y Google Pay se suman a PayPal y MercadoPago. Ahora, si tu operación es argentina o latinoamericana, MercadoPago, PayPal y Pix cubren la enorme mayoría de los pagos. Más pasarelas no es lo mismo que más ventas.",
      },
    ],
  },
  picsel: {
    slug: "picsel",
    name: "Picsel",
    country: "Latinoamérica",
    tagline:
      "Las dos venden fotos de eventos deportivos en Latinoamérica con reconocimiento facial. La diferencia está en la escala que aguanta cada una y en dónde puede operar.",
    summary:
      "Picsel llega a running, triatlón, ciclismo, surf y trail en Latinoamérica con reconocimiento facial y una comisión del 10%. FullFoto cubre esos mismos eventos y suma centros de ski de nivel mundial, con comisiones desde 7%.",
    tldr: "Picsel es latinoamericana, cobra 10% de comisión y se mueve bien en running, triatlón, ciclismo, surf y trail. FullFoto compite en esos mismos eventos con 7% en el plan Pro y además sostiene operaciones de otra escala: FotoSoldeu (Grandvalira, Andorra) y Chapelco (Argentina) son centros de ski de primer nivel mundial, con picos de miles de visitantes simultáneos y servidor LAN para cuando la conectividad no acompaña.",
    lastVerified: "septiembre 2026",
    strengths: [
      "Ofrece un plan Pro con 0% de comisión por venta: $16/mes fijos más créditos por foto subida. La letra chica: pagás por subir, no por vender, así que si la foto no se vende el costo ya lo pusiste igual — el riesgo lo asume el fotógrafo, no la plataforma.",
      "Editor de fotos integrado con procesamiento por lotes, para no salir de la plataforma a retocar.",
      "Entrega las fotos directamente por WhatsApp.",
    ],
    fullfotoAdvantages: [
      {
        title: "Infraestructura probada a nivel mundial",
        description:
          "FotoSoldeu (Grandvalira, Andorra) y Chapelco (Argentina) no son eventos de un fin de semana: son temporadas enteras con picos de miles de visitantes simultáneos. La plataforma está dimensionada para ese día, no para el promedio.",
      },
      {
        title: "Comisión más baja en todos los planes",
        description:
          "10% en el plan Free, 7% en el Pro y todavía más baja en Enterprise, frente al 10% de Picsel. Sobre el volumen de una temporada, esos tres puntos son plata real.",
      },
      {
        title: "Medios de pago pensados para Latinoamérica",
        description:
          "MercadoPago, PayPal y Pix integrados de forma nativa. Si una pasarela se cae un sábado a la tarde, seguís cobrando por otra.",
      },
      {
        title: "Servidor LAN para conectividad limitada",
        description:
          "Las fotos se cargan al instante por red local, sin pasar por internet. En la montaña y en el parque acuático eso no es un lujo: es la diferencia entre entregar la foto en el momento o perder la venta.",
      },
      {
        title: "Cubre verticales que Picsel no toca",
        description:
          "Parques acuáticos, centros de esquí, parques temáticos y estadios, además de los eventos deportivos. Picsel juega en running, triatlón, ciclismo, surf y trail.",
      },
      {
        title: "Seguridad avanzada contra robo de fotos",
        description:
          "Configuraciones de seguridad con defensa activa contra capturas de pantalla y contra intentos de sacar la marca de agua con herramientas de IA. La única forma de quedarse con la foto en buena calidad es comprándola.",
      },
    ],
    comparisonRows: [
      {
        feature: "Infraestructura en centros de ski de nivel mundial",
        fullfoto: "Sí — FotoSoldeu (Grandvalira, Andorra) y Chapelco (Argentina)",
        competitor: "Sin evidencia pública de operación en ski o parques",
      },
      {
        feature: "Comisión",
        fullfoto: "10% Free · 7% Pro · más baja en Enterprise",
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
        competitor: "Sin datos públicos",
      },
      {
        feature: "Reconocimiento facial + número de dorsal",
        fullfoto: "Sí",
        competitor: "Sí",
      },
      {
        feature: "Verticales fuera del deporte de resistencia",
        fullfoto: "Parques acuáticos, centros de ski, parques temáticos",
        competitor: "Running, triatlón, ciclismo, surf, trail, MTB",
      },
      {
        feature: "Facturación automática AFIP (Argentina)",
        fullfoto: "Sí (plan Enterprise)",
        competitor: "Sin datos públicos",
      },
      {
        feature: "Seguridad anti-captura y anti-remoción de marca de agua (IA)",
        fullfoto: "Sí",
        competitor: "Sin datos públicos",
      },
    ],
    faqs: [
      {
        question: "¿Picsel y FullFoto son lo mismo?",
        answer:
          "No. Las dos resuelven el reconocimiento facial, pero apuntan a operaciones distintas. Picsel está armada alrededor del deporte de resistencia: running, triatlón, ciclismo, surf y trail. FullFoto cubre eso y además sostiene centros de ski y parques acuáticos, donde la demanda no es un domingo puntual sino una temporada completa.",
      },
      {
        question: "¿FullFoto es más robusto que Picsel para operaciones grandes?",
        answer:
          "FullFoto opera FotoSoldeu (Grandvalira, Andorra) y Chapelco (Argentina), dos centros de ski de primer nivel mundial, con picos de miles de visitantes simultáneos. No encontramos evidencia pública de que Picsel opere venues de ese tipo: su foco declarado son los eventos deportivos puntuales.",
      },
      {
        question: "¿Cuál tiene menor comisión, FullFoto o Picsel?",
        answer:
          "Picsel cobra 10% en su plan Go. En el Pro baja a 0%, pero cambia el riesgo: pagás $16/mes por créditos según fotos subidas, se vendan o no. FullFoto cobra 10% en el plan Free y 7% en el Pro — siempre sobre lo que efectivamente vendiste, nunca por subir. Empatamos en nuestro peor escenario y ganamos en todos los demás.",
      },
      {
        question: "¿Puedo migrar de Picsel a FullFoto?",
        answer:
          "Sí. Lo primero que miramos en la demo es el tamaño de tu operación, porque de ahí sale qué plan te conviene y cuánto trabajo de configuración hay por delante.",
      },
    ],
  },
  lumepic: {
    slug: "lumepic",
    name: "Lumepic",
    country: "Uruguay",
    tagline:
      "Un marketplace compartido y una plataforma propia no son la misma decisión. Acá está la diferencia, medida en comisión y en marca.",
    summary:
      "Lumepic es un marketplace: tus fotos se venden mezcladas con las de otros fotógrafos y la comisión va de 20% a 30%. FullFoto te da una página propia donde cada venta —y cada comprador— es tuyo, con comisiones de 7% a 10%.",
    tldr: "Lumepic trae audiencia: subís la foto y ya está publicada dentro de un marketplace con miles de fotógrafos. Ese es su valor y también su costo — entre 20% y 30% de comisión, y tu marca abajo de la de ellos. FullFoto va por el otro camino: tu página, tu dominio, tu branding, comisiones de 7% a 10% y herramientas para que armes tu propia operación tipo marketplace sin ceder el nombre.",
    lastVerified: "septiembre 2026",
    strengths: [
      "Trae su propia audiencia y hace publicidad del evento: útil cuando el fotógrafo o la empresa todavía no tiene marca conocida.",
      "El marketplace ya está armado y poblado: más de 41.000 usuarios y 3.800 fotógrafos activos en Argentina, Perú, Chile, México, España, Portugal y Uruguay.",
      "Cero configuración. Subís la foto y queda publicada; no hay web propia que montar ni dominio que configurar.",
    ],
    fullfotoAdvantages: [
      {
        title: "Página 100% propia, no un marketplace compartido",
        description:
          "En Lumepic tus fotos compiten por atención con las de todos los demás fotógrafos del mismo evento. En FullFoto el comprador entra a tu página, con tu dominio y tu marca, y adentro no hay nadie más.",
      },
      {
        title: "Comisión sensiblemente más baja",
        description:
          "10% en el plan Free, 7% en el Pro y más baja en Enterprise, contra un piso de 20% en Lumepic que llega a 30% en eventos seleccionados. Sobre una temporada entera, es la diferencia entre reinvertir o apenas cubrir costos.",
      },
      {
        title: "Herramientas para armar tu propio 'mini marketplace'",
        description:
          "Gestión de usuarios, equipos de fotógrafos y herramientas comerciales para que una empresa u operador monte una operación con la misma lógica de un marketplace — pero bajo su propia marca y quedándose con el 100% de sus ventas.",
      },
      {
        title: "Explotá tu marca personal al máximo",
        description:
          "Cada venta desde tu propia web deja algo tuyo: el comprador se lleva la foto y también se acuerda de quién se la vendió. En una plataforma compartida con cientos de fotógrafos, ese recuerdo se lo lleva la plataforma.",
      },
      {
        title: "Medios de pago flexibles",
        description:
          "MercadoPago, PayPal y Pix integrados, sin quedar atado a una sola pasarela.",
      },
      {
        title: "Seguridad avanzada contra robo de fotos",
        description:
          "Configuraciones de seguridad con defensa activa contra capturas de pantalla y contra intentos de sacar la marca de agua con herramientas de IA. La única forma de quedarse con la foto en buena calidad es comprándola.",
      },
    ],
    comparisonRows: [
      {
        feature: "Modelo",
        fullfoto: "Página 100% propia — todas las ventas son tuyas",
        competitor: "Marketplace compartido — competís con los demás fotógrafos del evento",
      },
      {
        feature: "Comisión",
        fullfoto: "10% Free · 7% Pro · más baja en Enterprise",
        competitor: "Desde 20%, hasta 30% en eventos seleccionados",
      },
      {
        feature: "Marca visible en la venta",
        fullfoto: "La tuya — dominio y branding propios",
        competitor: "La de Lumepic",
      },
      {
        feature: "Herramientas para armar tu propio marketplace",
        fullfoto: "Sí — equipos, usuarios y gestión comercial",
        competitor: "No aplica: es la plataforma marketplace en sí",
      },
      {
        feature: "Trae audiencia y publicidad propia al evento",
        fullfoto: "Depende de tu marca y tu cobertura",
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
        competitor: "Sin datos públicos",
      },
      {
        feature: "Seguridad anti-captura y anti-remoción de marca de agua (IA)",
        fullfoto: "Sí",
        competitor: "Sin datos públicos",
      },
    ],
    faqs: [
      {
        question: "¿Lumepic y FullFoto son lo mismo?",
        answer:
          "No, y la diferencia no es de funcionalidades sino de modelo. Lumepic es un marketplace: tus fotos entran a un catálogo compartido con el resto de los fotógrafos. FullFoto es tu plataforma — tu dominio, tu marca, tu lista de compradores.",
      },
      {
        question: "¿Puedo usar Lumepic y FullFoto al mismo tiempo?",
        answer:
          "Sí, y es una combinación bastante común. Lumepic sirve para los eventos donde todavía nadie te conoce y su alcance hace el trabajo de difusión. FullFoto es para la cobertura que ya dominás, donde no tiene sentido regalar 20% ni la marca.",
      },
      {
        question: "¿Cuál cobra menos comisión, FullFoto o Lumepic?",
        answer:
          "FullFoto, por un margen amplio: 10% en el plan Free y 7% en el Pro, todavía más baja en Enterprise. Lumepic arranca en 20% y llega a 30% en eventos seleccionados.",
      },
      {
        question: "¿Puedo migrar de Lumepic a FullFoto?",
        answer:
          "Sí. Lo importante en ese pasaje es no perder la base de compradores que ya te compró, y eso es lo primero que planificamos juntos en la demo.",
      },
    ],
  },
  pixieset: {
    slug: "pixieset",
    name: "Pixieset",
    country: "Canadá",
    tagline:
      "Pixieset entrega galerías a clientes que ya te conocen. FullFoto vende fotos a miles de desconocidos. Son dos productos distintos y conviene saber cuál necesitás.",
    summary:
      "Pixieset es para el fotógrafo que entrega una galería privada a un cliente conocido —una boda, una sesión— y quiere un portfolio propio. No tiene reconocimiento facial ni búsqueda por dorsal, así que no resuelve el problema de un evento masivo.",
    tldr: "Pixieset es canadiense, existe desde 2013 y hace muy bien lo suyo: galerías de cliente y sitios de portfolio para fotógrafos de bodas y retrato. El problema aparece cuando el comprador no es alguien que ya te contrató, sino uno entre miles de desconocidos que pasaron por una carrera, un parque o un centro de ski. Ahí hace falta reconocimiento facial y búsqueda por dorsal: Pixieset no los tiene, y FullFoto está construida alrededor de eso.",
    lastVerified: "septiembre 2026",
    strengths: [
      "Plataforma madura: desde 2013 en el mercado, con foco claro en fotógrafos de bodas y retrato.",
      "Sitios de portfolio muy pulidos, con plantillas de diseño premiadas.",
      "Herramientas de estudio completas en un solo lugar: contratos, cuestionarios, agenda y facturación.",
      "Planes con 0% de comisión disponibles desde $10 USD/mes fijos.",
    ],
    fullfotoAdvantages: [
      {
        title: "Construida para venta masiva, no para entrega a un cliente",
        description:
          "Reconocimiento facial y búsqueda por dorsal para que miles de compradores que no conocés encuentren su foto en minutos. Pixieset resuelve el caso contrario: una galería privada para un cliente que ya te contrató.",
      },
      {
        title: "Pensada para los verticales de FullFoto",
        description:
          "Parques acuáticos, centros de esquí, eventos deportivos y parques temáticos, con servidor LAN para donde la conectividad no llega. No es el terreno para el que Pixieset fue diseñada, ni el volumen que espera.",
      },
      {
        title: "Comisión que no depende de pagar un plan fijo",
        description:
          "10% en el Free y 7% en el Pro, subas las fotos que subas. En Pixieset, bajar a 0% implica pagar la mensualidad desde el primer día, tengas ventas o no — cómodo si vendés todo el año, caro si tu negocio es de temporada.",
      },
      {
        title: "Medios de pago pensados para Latinoamérica",
        description:
          "MercadoPago, PayPal y Pix integrados de forma nativa, sin depender de una pasarela pensada para otro mercado.",
      },
      {
        title: "Seguridad avanzada contra robo de fotos",
        description:
          "Configuraciones de seguridad con defensa activa contra capturas de pantalla y contra intentos de sacar la marca de agua con herramientas de IA — importante en un evento masivo, donde miles de desconocidos ven la preview antes de comprar.",
      },
    ],
    comparisonRows: [
      {
        feature: "Para qué está pensada",
        fullfoto: "Venta masiva de fotos en eventos deportivos, parques y ski",
        competitor: "Galería para un cliente conocido (bodas, retratos) y portfolio del fotógrafo",
      },
      {
        feature: "Reconocimiento facial / búsqueda por dorsal",
        fullfoto: "Sí",
        competitor: "No",
      },
      {
        feature: "Miles de compradores desconocidos por evento",
        fullfoto: "Sí",
        competitor: "No — pensada para pocos compradores por sesión",
      },
      {
        feature: "Comisión",
        fullfoto: "10% Free · 7% Pro · más baja en Enterprise",
        competitor: "15% Free · 0% desde plan pago ($10 USD/mes fijo)",
      },
      {
        feature: "Sitio de portfolio personal para el fotógrafo",
        fullfoto: "No es el foco",
        competitor: "Sí — es su fuerte, con plantillas premiadas",
      },
      {
        feature: "Servidor LAN para conectividad limitada",
        fullfoto: "Sí (plan Enterprise)",
        competitor: "Sin datos públicos",
      },
      {
        feature: "Medios de pago",
        fullfoto: "MercadoPago, PayPal, Pix",
        competitor: "Sin datos públicos",
      },
      {
        feature: "Seguridad anti-captura y anti-remoción de marca de agua (IA)",
        fullfoto: "Sí",
        competitor: "Sin datos públicos",
      },
    ],
    faqs: [
      {
        question: "¿Pixieset y FullFoto compiten por lo mismo?",
        answer:
          "No del todo, y conviene decirlo. Pixieset resuelve la entrega: el fotógrafo termina la boda o la sesión, sube las fotos y su cliente entra a una galería privada. FullFoto resuelve el descubrimiento: miles de personas que nunca hablaron con vos buscan su cara o su dorsal y encuentran sus fotos solas.",
      },
      {
        question: "¿Puedo usar Pixieset para vender fotos de una carrera o un parque acuático?",
        answer:
          "Subir las fotos, sí. Venderlas bien, no. Sin reconocimiento facial ni búsqueda por dorsal, cada comprador tiene que revisar a mano cientos o miles de imágenes para encontrarse. A esa escala, la mayoría abandona antes de llegar al carrito.",
      },
      {
        question: "¿Cuál tiene menor comisión, FullFoto o Pixieset?",
        answer:
          "Depende del volumen y del calendario. Pixieset cobra 15% en su plan Free, o 0% si pagás un plan fijo desde $10 USD/mes. FullFoto cobra 10% en el plan Free —sin mensualidad, así que un mes sin ventas no te cuesta nada— y 7% en el Pro.",
      },
      {
        question: "¿Puedo migrar de Pixieset a FullFoto?",
        answer:
          "Tiene sentido si estás usando Pixieset para eventos masivos y sospechás que la búsqueda manual te está costando ventas. Agendá una demo y lo miramos con tus números.",
      },
    ],
  },
}
