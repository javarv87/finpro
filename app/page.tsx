import Hero from "@/components/hero";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <>
      <Hero />
      <div
        className="h-px border-none bg-gradient-to-r from-neutral-400/0
            via-neutral-400/30 to-neutral-400/0 dark:from-neutral-200/0
            dark:via-neutral-200/30 dark:to-neutral-200/0"
      ></div>
      <Partners />
    </>
  )
}
