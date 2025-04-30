"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, XCircle, X } from "lucide-react"

interface NotificationProps {
  type: "success" | "error"
  message: string
  onClose: () => void
}

export default function Notification({ type, message, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300) // Esperar a que termine la animación
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex items-center p-4 rounded-lg shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
    >
      {type === "success" ? (
        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
      ) : (
        <XCircle className="h-5 w-5 text-red-500 mr-2" />
      )}
      <span className="mr-2">{message}</span>
      <button
        onClick={() => {
          setIsVisible(false)
          setTimeout(onClose, 300)
        }}
        className="ml-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
