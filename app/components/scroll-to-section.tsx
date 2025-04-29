"use client"

import { useEffect } from "react"

export default function ScrollToSection() {
  useEffect(() => {
    // Función para manejar el scroll suave cuando se carga la página con un hash
    const handleInitialScroll = () => {
      const hash = window.location.hash
      if (hash) {
        // Pequeño retraso para asegurar que la página esté completamente cargada
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    }

    // Ejecutar cuando el componente se monta
    handleInitialScroll()

    // Opcional: también manejar cambios en el hash durante la navegación
    window.addEventListener("hashchange", handleInitialScroll)
    return () => {
      window.removeEventListener("hashchange", handleInitialScroll)
    }
  }, [])

  return null
}
