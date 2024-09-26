import { cn } from "@/lib/utils"
import {
  HandCoins,
  Handshake,
  Headset,
  ShieldCheck,
} from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: JSX.Element
}

const features: Feature[] = [
  {
    title: "Tasas de Interés Competitivas",
    description:
      "Te ofrecemos tasas de interés que se ajustan a tu perfil y necesidades, asegurando que obtengas las mejores condiciones del mercado, tanto en préstamos como en cuentas de ahorro.",
    icon: <HandCoins size={36} strokeWidth={0.75} />,
  },
  {
    title: "Atención al Cliente de Primera",
    description:
      "Nos preocupamos por ti. Nuestro equipo de expertos está siempre disponible para ayudarte y guiarte en cada paso del proceso, resolviendo cualquier duda que puedas tener.",
    icon: <Headset size={36} strokeWidth={0.75} />,
  },
  {
    title: "Flexibilidad a tu Medida",
    description:
      "Desde préstamos personalizados hasta tarjetas de crédito con beneficios exclusivos, diseñamos soluciones financieras que se adaptan a cada etapa de tu vida.",
    icon: <Handshake size={36} strokeWidth={0.75} />,
  },
  {
    title: "Seguridad y Confianza Garantizadas",
    description:
      "Tu seguridad es nuestra prioridad. En FinPro implementamos las mejores prácticas de protección de datos, para que siempre te sientas seguro al manejar tus finanzas con nosotros.",
    icon: <ShieldCheck size={36} strokeWidth={0.75} />,
  },
]

export default function Features() {
  return (
    <section id="features" className="max-w-7xl w-full mx-auto pt-0 pb-12 px-8">
      <div className="heading-section max-w-3xl text-left">
        <h2 className="tracking-tight text-5xl leading-tight font-exo mb-2 font-medium text-transparent bg-clip-text bg-[linear-gradient(270deg,_#d0a786,_theme('colors.zinc.600'))] dark:bg-[linear-gradient(270deg,_theme('colors.orange.50'_/_60%)_45%,_theme('colors.gray.500'))]">
          Razones por que elegirnos
        </h2>
        <h3 className="tracking-tight text-muted-foreground text-lg md:text-xl md:leading-snug">
          Con FinPro, no hay complicaciones. Nuestro proceso de solicitud es
          simple y ágil, para que puedas obtener lo que necesitas sin demoras ni
          papeleo innecesario.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pt-12 max-w-7xl mx-auto gap-y-4">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
}: Feature) => {
  return (
    <div
      className={cn(
        "flex flex-col border-l py-10 relative group/feature border-black/5 dark:border-white/5"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-orange-50 dark:from-zinc-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-orange-400 dark:text-orange-300">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-zinc-500 dark:text-orange-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}