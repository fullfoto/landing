import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToSection from "./components/scroll-to-section"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FullFoto - Plataforma de venta de fotografías",
  description: "Potencia tus ventas de fotos sin complicaciones",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollToSection />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
