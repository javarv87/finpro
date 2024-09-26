import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinProCard, FinProCardNoLogo } from "@/components/ui/finpro-card"
import { FlipWords } from "@/components/ui/flip-words"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full">
      <div className="absolute -z-1 inset-0 h-[600px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,theme('colors.zinc.500')_1px,transparent_1px),linear-gradient(to_bottom,theme('colors.zinc.500')_1px,transparent_1px)] bg-[size:8rem_8rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,theme('colors.zinc.100')_1px,transparent_1px),linear-gradient(to_bottom,theme('colors.zinc.100')_1px,transparent_1px)]"></div>

      <div className="max-w-7xl w-full mx-auto md:items-center md:justify-between flex md:flex-row md:gap-8 px-8 py-12 lg:py-28">
        {/* Left */}
        <div className="space-y-6 w-full md:w-2/3">
          <div className="text-sm dark:text-zinc-400 font-geist mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-zinc-400/5 to-transparent border-[2px] dark:border-white/5 rounded-3xl w-fit">
            <FlipWords
              words={[
                "+ 1M Usuarios",
                "+ 200 Ubicaciones",
                "+ 100 Métodos de pago",
              ]}
            />
          </div>
          <h1 className="font-exo text-5xl sm:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(270deg,_#d0a786,_theme('colors.zinc.600'))] dark:bg-[linear-gradient(270deg,_theme('colors.orange.50'_/_60%)_45%,_theme('colors.gray.500'))]">
            Transforma tus Finanzas Personales
          </h1>
          <p className="font-exo text-lg text-muted-foreground">
            Explora soluciones financieras personalizadas para alcanzar tus
            metas. Desde préstamos flexibles hasta tarjetas de crédito
            convenientes y cuentas de ahorro de alto rendimiento. ¡Empieza hoy
            mismo!
          </p>
          <Link href="#contacto" passHref legacyBehavior>
            <Button size="cta-lg" variant="primary">
              <div className="size-[36rem] group-hover:rotate-90 duration-500 absolute -right-28 -z-10 bg-[conic-gradient(from_0.789rad,_var(--tw-gradient-stops))] from-orange-400 to-orange-500/90"></div>
              ¡Únete!
              <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </Button>
          </Link>
        </div>
        {/* Right */}
        <div className="h-96 relative w-1/3 hidden lg:flex ml-48">
          <FinProCard className="max-w-fit drop-shadow-lg absolute right-36 top-12 rotate-45 dark:text-neutral-100 text-neutral-900" />
          <FinProCardNoLogo className="max-w-fit drop-shadow-lg absolute right-0 top-10 -rotate-45 -z-20 dark:text-neutral-100 text-slate-200" />
          <FinProCardNoLogo className="max-w-fit drop-shadow-lg absolute right-0 bottom-0 -z-10 dark:text-neutral-100 text-slate-200" />
        </div>
      </div>
    </section>
  )
}
