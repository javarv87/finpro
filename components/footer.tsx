import ThemeSwitcher from "@/components/ui/theme-switcher"
import FinProLogo from "@/components/ui/finpro-logo"
import Link from "next/link"
import { menuItems } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="px-8 pb-8 m-auto overflow-hidden">
      <nav
        className="container m-auto flex flex-nowrap justify-between flex-col"
        aria-label="Directorio FinPro"
      >
        <div className="flex justify-between group/row relative isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
          >
            <div className="absolute inset-x-0 top-0 border-t border-black/5 dark:border-white/5"></div>
            <div className="absolute inset-x-0 top-2 border-t border-black/5 dark:border-white/5"></div>
            <div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 dark:border-white/5 group-last/row:block"></div>
            <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 dark:border-white/5 group-last/row:block"></div>
          </div>
          <div>
            <div className="py-3 group/item relative">
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-first/item:block absolute size-[15px] fill-black/10 dark:fill-white/10 -top-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute size-[15px] fill-black/10 dark:fill-white/10 -top-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-last/row:group-first/item:block absolute size-[15px] fill-black/10 dark:fill-white/10 -bottom-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-last/row:block absolute size-[15px] fill-black/10 dark:fill-white/10 -bottom-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center gap-8 py-3 group/item relative">
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-first/item:block absolute size-[15px] fill-black/10 dark:fill-white/10 -top-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute size-[15px] fill-black/10 dark:fill-white/10 -top-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-last/row:group-first/item:block absolute size-[15px] fill-black/10 dark:fill-white/10 -bottom-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-last/row:block absolute size-[15px] fill-black/10 dark:fill-white/10 -bottom-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-footer gap-8 md:gap-4 w-full">
          <div className="text-sm">
            <h2 className="font-bold my-2">Nosotros</h2>
            <ul className="text-muted-foreground">
              {menuItems.map((item) => (
                <li className="py-2" key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium hover:underline underline-offset-4"
                    key={item.id}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-bold my-2">Conecta</h2>
            <ul className="text-muted-foreground">
              <li className="py-2">
                <a
                  className="hover:underline"
                  target="_blank"
                  aria-label="Visitanos en Facebook"
                  href="https://facebook.com"
                >
                  Facebook
                </a>
              </li>
              <li className="py-2">
                <a
                  className="hover:underline"
                  target="_blank"
                  aria-label="Visitanos en X"
                  href="https://x.com"
                >
                  Twitter
                </a>
              </li>
              <li className="py-2">
                <a
                  className="hover:underline"
                  target="_blank"
                  aria-label="Visitanos en Linkedin"
                  href="https://linkedin.com"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-bold my-2">Legal</h2>
            <ul className="text-muted-foreground">
              <li className="py-2">
                <a className="hover:underline" href="#">
                  Política de Privacidad
                </a>
              </li>
              <li className="py-2">
                <a className="hover:underline" href="#">
                  Términos de Servicio
                </a>
              </li>
              <li className="py-2">
                <a className="hover:underline" href="#">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-bold my-2">Oficinas</h2>
            <ul className="text-muted-foreground">
              <li className="py-2">
                <address className="not-italic">
                  <strong className="text-foreground">México</strong>
                  <br />
                  Manuel Ma. Contreras No. 197, México 2da Secc, 57620,
                  Nezahualcóyotl, CDMX
                </address>
                <br />
                <a className="block hover:underline mb-2" href="tel:+52 55 57 93 62 52">
                  +52 555 793 6252
                </a>
                <a
                  className="block hover:underline"
                  href="mailto:java.rv87@gmail.com"
                >
                  info@finpro.com
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-start lg:justify-end">
            <ThemeSwitcher />
          </div>
        </div>

        <FinProLogo className="mt-16 h-16 md:h-32 w-full m-auto text-black/5 dark:text-white/5" />

        <div className="flex justify-between group/row relative isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
          >
            <div className="absolute inset-x-0 top-0 border-t border-black/5 dark:border-white/5"></div>
            <div className="absolute inset-x-0 top-2 border-t border-black/5 dark:border-white/5"></div>
            <div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 dark:border-white/5 group-last/row:block"></div>
            <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 dark:border-white/5 group-last/row:block"></div>
          </div>
          <div>
            <div className="py-3 group/item relative">
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-first/item:block absolute size-[15px] fill-black/10 dark:fill-white/10 -top-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute size-[15px] fill-black/10 dark:fill-white/10 -top-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-last/row:group-first/item:block absolute size-[15px] fill-black/10 dark:fill-white/10 -bottom-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-last/row:block absolute size-[15px] fill-black/10 dark:fill-white/10 -bottom-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <p className="text-left text-xs leading-loose text-muted-foreground md:text-left">
                © 2024 FinPro. Todos los derechos reservados.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center gap-8 py-3 group/item relative">
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-first/item:block absolute size-[15px] fill-black/10 dark:fill-white/10 -top-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute size-[15px] fill-black/10 dark:fill-white/10 -top-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-last/row:group-first/item:block absolute size-[15px] fill-black/10 dark:fill-white/10 -bottom-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-last/row:block absolute size-[15px] fill-black/10 dark:fill-white/10 -bottom-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <a
                target="_blank"
                aria-label="Visitanos en Facebook"
                className="text-muted-foreground hover:text-zinc-800 dark:hover:text-zinc-200"
                href="https://facebook.com"
              >
                <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                aria-label="Visitanos en X"
                className="text-muted-foreground hover:text-zinc-800 dark:hover:text-zinc-200"
                href="https://x.com"
              >
                <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                aria-label="Visitanos en LinkedIn"
                className="text-muted-foreground hover:text-zinc-800 dark:hover:text-zinc-200"
                href="https://linkedin.com"
              >
                <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  )
}
