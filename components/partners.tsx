import Image from "next/image"
import Marquee from "@/components/ui/marquee"

interface Partner {
  id: number
  alt: string
  image: string
}

const partnersList: Partner[] = [
  {
    id: 1,
    alt: "Google",
    image: "/images/Google.svg",
  },
  {
    id: 2,
    alt: "Microsoft",
    image: "/images/Microsoft.svg",
  },
  {
    id: 3,
    alt: "Github",
    image: "/images/GitHub.svg",
  },
  {
    id: 4,
    alt: "Uber",
    image: "/images/Uber.svg",
  },
  {
    id: 5,
    alt: "Notion",
    image: "/images/Notion.svg",
  },
]

export default function Partners() {
  return (
    <section
      id="clients"
      className="mx-auto max-w-7xl px-6 text-center md:px-8 w-full"
    >
      <div className="py-7">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 container">
          <h2 className="text-center text-sm font-semibold text-muted-foreground">
            NUESTROS ALIADOS A TRAVÉS DEL MUNDO
          </h2>
          <div className="relative mt-6">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <Marquee pauseOnHover className="[--duration:20s]">
                {partnersList.map((partner) => (
                  <div key={partner.id}>
                    <Image
                      alt={partner.alt}
                      src={partner.image}
                      className="h-8 w-28 dark:brightness-0 dark:invert grayscale opacity-30"
                      width={28}
                      height={8}
                    />
                  </div>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
