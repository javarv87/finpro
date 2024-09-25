import Link from "next/link"
import FinProLogo from "./finpro-logo"
import { Button } from "./ui/button"

export default function Header({ ...props }) {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      {...props}
    >
      <div className="px-7 flex h-[4rem] items-center m-auto justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <FinProLogo className="h-7 text-orange-400" />
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#inicio"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Servicios
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Testimonios
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contacto
            </Link>
          </nav>
          <Button size="cta-sm" variant="primary">
            <div className="size-52 group-hover:rotate-90 duration-500 absolute -right-1 -z-10 bg-[conic-gradient(from_0.789rad,_var(--tw-gradient-stops))] from-orange-400 to-orange-500/90"></div>
            ¡Únete!
          </Button>
        </div>
      </div>
      <div
        className="h-px border-none bg-gradient-to-r from-neutral-400/0
            via-neutral-400/30 to-neutral-400/0 dark:from-neutral-200/0
            dark:via-neutral-200/30 dark:to-neutral-200/0"
      ></div>
    </header>
  )
}
