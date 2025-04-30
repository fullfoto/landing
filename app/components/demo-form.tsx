"use client"

import { useState } from "react"
import { Calendar, Clock, Building, User, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Notification from "./notification"
import { sendDemoEmail } from "../actions/email"

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedHora, setSelectedHora] = useState<string>("")
  const [notification, setNotification] = useState<{
    show: boolean
    type: "success" | "error"
    message: string
  }>({
    show: false,
    type: "success",
    message: "",
  })

  async function handleSubmit(formData: FormData) {
    // Añadir la hora seleccionada al FormData
    if (selectedHora) {
      formData.set("hora", selectedHora)
    }

    setIsSubmitting(true)
    try {
      const result = await sendDemoEmail(formData)
      if (result.success) {
        setNotification({
          show: true,
          type: "success",
          message: result.message,
        })
        // Limpiar el formulario
        const form = document.getElementById("demoForm") as HTMLFormElement
        form.reset()
        setSelectedHora("")
      } else {
        setNotification({
          show: true,
          type: "error",
          message: result.message,
        })
      }
    } catch (error) {
      setNotification({
        show: true,
        type: "error",
        message: "Error al enviar la solicitud. Por favor, intenta nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form id="demoForm" action={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-gray-700">
              Nombre completo <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="nombre" name="nombre" placeholder="Tu nombre" className="pl-10" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="email" name="email" type="email" placeholder="tu@email.com" className="pl-10" required />
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
              <Input id="telefono" name="telefono" placeholder="+54 9 XXX XXXXXXX" className="pl-10" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="empresa" className="text-gray-700">
              Empresa
            </Label>
            <div className="relative">
              <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="empresa" name="empresa" placeholder="Nombre de tu empresa" className="pl-10" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-gray-700">
            Tipo de negocio <span className="text-red-500">*</span>
          </Label>
          <RadioGroup name="tipoNegocio" defaultValue="fotografo" className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <Input id="fecha" name="fecha" type="date" className="pl-10" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hora" className="text-gray-700">
              Hora preferida <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Select name="hora" value={selectedHora} onValueChange={setSelectedHora} required>
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
            name="mensaje"
            placeholder="Cuéntanos más sobre tu negocio o cualquier consulta específica que tengas"
            className="min-h-[100px]"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando solicitud..." : "Solicitar demo"}
        </Button>

        <p className="text-sm text-gray-500 text-center">
          Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
        </p>
      </form>

      {notification.show && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification({ ...notification, show: false })}
        />
      )}
    </>
  )
}
