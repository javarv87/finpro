import Image from "next/image"

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-gradient-to-b from-white via-neutral-100 to-white dark:from-transparent dark:via-zinc-800 dark:to-transparent"
    >
      <div className="max-w-7xl w-full mx-auto px-8 py-12 lg:pt-18">
        <div className="heading-section text-center max-w-3xl m-auto">
          <h2 className="tracking-tight text-5xl leading-tight font-exo mb-2 font-medium text-transparent bg-clip-text bg-[linear-gradient(270deg,_#d0a786,_theme('colors.zinc.600'))] dark:bg-[linear-gradient(270deg,_theme('colors.orange.50'_/_60%)_45%,_theme('colors.gray.500'))]">
            Soluciones Financieras para Cada Etapa de Tu Vida
          </h2>
          <h3 className="tracking-tight text-muted-foreground text-lg md:text-xl md:leading-snug">
            Descubre cómo nuestros productos financieros pueden ayudarte a crecer
          </h3>
        </div>
        {/* Bento */}
        <div className="mt-10 grid gap-4 sm:mt-16 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-orange-50/30 dark:bg-background/25 md:rounded-tr-[2rem] lg:rounded-l-[2rem] lg:rounded-r-none"></div>
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <h4 className="mt-2 text-2xl font-medium tracking-tight text-foreground max-lg:text-center">
                  Préstamos Personales
                </h4>
                <p className="mt-2 mb-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center m-auto">
                  Nuestros préstamos personales están diseñados para darte el
                  apoyo financiero que necesitas en el momento justo. Con tasas
                  competitivas y plazos flexibles, puedes usar nuestros préstamos
                  para cualquier propósito, desde consolidar deudas hasta
                  financiar un proyecto importante.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <Image
                  className="size-full object-scale-down grayscale"
                  src="/images/prestamos.png"
                  alt="Prestamos personales"
                  width={702}
                  height={699}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-orange-50/30 dark:bg-background/25 max-lg:rounded-t-[2rem] md:rounded-r-none"></div>
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h4 className="mt-2 text-2xl font-medium tracking-tight text-foreground max-lg:text-center">
                  Tarjetas de Crédito
                </h4>
                <p className="mt-2 mb-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center m-auto">
                  Nuestras tarjetas de crédito te permiten controlar tus finanzas
                  diarias mientras acumulas beneficios exclusivos. Perfectas para
                  quienes buscan manejar sus gastos con facilidad y obtener
                  recompensas por cada compra.
                </p>
              </div>
              <div className="relative flex justify-center p-8 min-h-48 max-w-96 m-auto">
                <Image
                  className="size-full object-contain object-center grayscale"
                  src="/images/card.png"
                  alt="Inversion Inteligente"
                  width={324}
                  height={196}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative md:row-span-1 max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-orange-50/30 dark:bg-background/25 md:rounded-bl-[2rem] lg:rounded-none"></div>
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h4 className="mt-2 text-2xl font-medium tracking-tight text-foreground max-lg:text-center">
                  Inversión Inteligente
                </h4>
                <p className="mt-2 mb-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center m-auto">
                  Si buscas hacer crecer tu capital de manera más agresiva,
                  ofrecemos opciones de inversión seguras y diversificadas. Desde
                  fondos gestionados hasta opciones de bajo riesgo, ponemos a tu
                  disposición herramientas para que tu dinero genere rendimientos
                  a largo plazo.
                </p>
              </div>
              <div className="relative flex justify-center p-8 min-h-48">
                <Image
                  className="size-full object-contain object-center grayscale"
                  src="/images/inversion.png"
                  alt="Inversion Inteligente"
                  width={2016}
                  height={456}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-orange-50/30 dark:bg-background/25 max-md:rounded-b-[2rem] lg:rounded-r-[2rem] md:rounded-br-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <h4 className="mt-2 text-2xl font-medium tracking-tight text-foreground max-lg:text-center">
                  Cuentas de Ahorro
                </h4>
                <p className="mt-2 mb-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center m-auto">
                  Protege tu futuro con nuestras cuentas de ahorro, diseñadas para
                  maximizar el rendimiento de tus depósitos. Con tasas de interés
                  atractivas y total seguridad, ahorrar nunca fue tan fácil.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] shadow-2xl">
                  <Image
                    className="size-full object-cover object-left grayscale"
                    src="/images/dashboard.png"
                    alt="Cuentas de Ahorro"
                    width={1336}
                    height={800}
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
