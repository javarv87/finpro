import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Cta() {
  return (
    <section id="cta" className="max-w-7xl w-full mx-auto px-8 py-12 lg:pt-18 bg-gradient-to-b from-white via-orange-50 to-white dark:from-transparent dark:via-zinc-900 dark:to-transparent">
      <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
        <h2 className="text-center tracking-tight text-5xl leading-tight font-exo mb-2 font-bold text-transparent bg-clip-text bg-[linear-gradient(270deg,_#d0a786,_theme('colors.zinc.600'))] dark:bg-[linear-gradient(270deg,_theme('colors.orange.50'_/_60%)_45%,_theme('colors.gray.500'))]">
          ¿Listo para comenzar?
        </h2>
        <p className="mt-4 max-w-[26rem] text-center mx-auto  text-base/6 text-muted-foreground">
            Empieza Tu Solicitud, ponte en contacto con nosotros
        </p>
        <div className="relative z-10 mx-auto flex justify-center mt-6">
          <Button size="cta-lg" variant="primary">
            <div className="size-[36rem] group-hover:rotate-90 duration-500 absolute -right-28 -z-10 bg-[conic-gradient(from_0.789rad,_var(--tw-gradient-stops))] from-orange-400 to-orange-500/90"></div>
            ¡Únete!
            <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
