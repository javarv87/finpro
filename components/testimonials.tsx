import { cn } from "@/lib/utils"
import Marquee from "@/components/ui/marquee"
import Image from "next/image"

interface Review {
  id: number
  name: string
  username: string
  body: string
  img: string
}

const testimonialList: Review[] = [
  {
    id: 1,
    name: "Carlos T.",
    username:"Carlos T.",
    body: "Gracias a FinPro, pude obtener el préstamo que necesitaba para mi negocio en tiempo récord. ¡Authoramente recomendados!",
    img: "https://avatar.vercel.sh/carlos"
  },
  {
    id: 2,
    name: "Lucía P.",
    username:"Lucía P.",
    body: "Las tarjetas de crédito de FinPro me han ayudado a mejorar mi historial crediticio y acceder a más oportunidades.",
    img: "https://avatar.vercel.sh/Lucia"
  },
  {
    id: 3,
    name: "Ana L.",
    username:"Ana L.",
    body: "Gracias a FinPro, pude consolidar todas mis deudas en un solo préstamo con una tasa mucho más baja. ¡Me ayudaron a ahorrar y manejar mis finanzas de forma eficiente!",
    img: "https://avatar.vercel.sh/ana"
  },
  {
    id: 4,
    name: "Jorge R.",
    username:"Jorge R.",
    body: "Obtener una tarjeta de crédito con FinPro fue súper rápido y sencillo. El proceso de solicitud fue transparente, y me encanta que ofrezcan recompensas por cada compra.",
    img: "https://avatar.vercel.sh/jorge"
  },
  {
    id: 5,
    name: "María G.",
    username:"María G.",
    body: "Abrí mi cuenta de ahorro con FinPro hace seis meses, y estoy impresionado con la facilidad de gestión y las tasas de interés. Es un servicio que realmente se preocupa por hacer crecer tu dinero.",
    img: "https://avatar.vercel.sh/maria"
  },
  {
    id: 6,
    name: "Pedro M.",
    username:"Pedro M.",
    body: "Estaba buscando un préstamo rápido y confiable, y FinPro superó mis expectativas. El proceso fue sencillo, y tuve el dinero en mi cuenta en poco tiempo. ¡Totalmente recomendado!",
    img: "https://avatar.vercel.sh/pedro"
  },
  {
    id: 7,
    name: "Roberto S.",
    username:"Roberto S.",
    body: "FinPro me ayudó a entender mejor mis opciones financieras y encontrar el préstamo perfecto para remodelar mi hogar. El equipo fue increíblemente servicial y me dio total confianza.",
    img: "https://avatar.vercel.sh/roberto"
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="max-w-7xl w-full mx-auto px-8 py-12"
    >
      <div className="heading-section text-center">
        <h2 className="tracking-tight text-5xl leading-tight font-exo mb-2 font-medium text-transparent bg-clip-text bg-[linear-gradient(270deg,_#d0a786,_theme('colors.zinc.600'))] dark:bg-[linear-gradient(270deg,_theme('colors.orange.50'_/_60%)_45%,_theme('colors.gray.500'))]">
          Lo que Nuestros Clientes Dicen de FinPro
        </h2>
        <h3 className="tracking-tight text-muted-foreground text-lg md:text-xl md:leading-snug">
          Historias reales de personas que han transformado su vida financiera
          con nuestra ayuda.
        </h3>
      </div>
      <div className="relative mt-20">
        <div className="flex h-[48rem] flex-row items-center justify-center overflow-hidden">
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:20s] hidden sm:flex"
          >
            {testimonialList.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:30s] hidden md:flex"
          >
            {testimonialList.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:25s]">
            {testimonialList.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
          <div className="dark:from-background pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white"></div>
          <div className="dark:from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white"></div>
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ img, name, username, body }: Review) {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl p-4",
        // light styles
        "bg-orange-50/50 hover:bg-orange-100/40",
        // dark styles
        "dark:bg-zinc-900/40 dark:hover:bg-zinc-900"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt={username}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground">@{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}