"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Separator from "./ui/separator"
import { ArrowRight, CheckCircle2, Loader } from "lucide-react"
import confetti from "canvas-confetti"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

const showConfetti = () => {
  const end = Date.now() + 3 * 1000 // 3 seconds
  const colors = ["#ffc386", "#fdbf8b", "#ecac84", "#f8deb1"]

  const frame = () => {
    if (Date.now() > end) return

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    })
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    })

    requestAnimationFrame(frame)
  }

  frame()
}

const formSchema = z.object({
  name: z.string().min(1, "Tu nombre es requerido").min(2, "Mínimo deben ser 2 caracteres"),
  email: z.string().min(1, "Tu correo es requerido").email("La dirección de correo es inváida"),
  message: z.string().min(1, "Tu comentario es importante para nosotros").min(10, "Mínimo deben de ser 10 caracteres"),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log(data)
      showConfetti()
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="max-w-7xl w-full mx-auto px-8 py-12">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
        <div className="heading-section text-left">
          <h2 className="tracking-tight text-5xl leading-tight font-exo mb-2 font-medium text-transparent bg-clip-text bg-[linear-gradient(270deg,_#d0a786,_theme('colors.zinc.600'))] dark:bg-[linear-gradient(270deg,_theme('colors.orange.50'_/_60%)_45%,_theme('colors.gray.500'))]">
            Contáctanos y Empecemos a Construir tu Futuro Financiero
          </h2>
          <h3 className="tracking-tight text-muted-foreground text-lg md:leading-snug">
            Estamos aquí para ayudarte en cada paso del camino. Llena el
            formulario y uno de nuestros expertos financieros te contactará
            pronto para responder todas tus preguntas o comenzar tu solicitud.
          </h3>
          <Separator className="my-8" />
          <div className="grid grid-cols-2 gap-x-8 text-sm text-muted-foreground">
            <address className="not-italic">
              <strong className="text-foreground">México</strong>
              <br />
              Manuel Ma. Contreras No. 197, México 2da Secc, 57620,
              Nezahualcóyotl, CDMX
            </address>
            <div>
              <a
                className="block hover:underline mb-2"
                href="tel:+52 55 57 93 62 52"
              >
                +52 555 793 6252
              </a>
              <a
                className="block hover:underline"
                href="mailto:java.rv87@gmail.com"
              >
                info@finpro.com
              </a>
            </div>
          </div>
        </div>
        {isSubmitted ? (
          <div className="flex flex-col justify-center">
            <Alert className="mb-4">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>¡Gracias por tu comentario!</AlertTitle>
              <AlertDescription>
                Estamos encantados de apoyarte en tus sueños, pronto nos pondremos en contacto.
              </AlertDescription>
            </Alert>
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre:</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo:</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="xxx@xxx.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje:</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Cuéntanos" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                size="cta-lg"
                variant="primary"
                type="submit"
                disabled={isSubmitting}
              >
                <div className="size-[36rem] group-hover:rotate-90 duration-500 absolute -right-14 -z-10 bg-[conic-gradient(from_0.789rad,_var(--tw-gradient-stops))] from-orange-400 to-orange-500/90"></div>
                {isSubmitting ? "Enviando tu mensaje..." : "¡Comencemos!"}
                {isSubmitting ? (
                  <Loader size={16} className="ml-4 animate-spin" />
                ) : (
                  <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                )}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  )
}