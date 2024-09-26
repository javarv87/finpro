import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Services from "@/components/services";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Separator from "@/components/ui/separator";
import Faq from "@/components/faq";
import ContactForm from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Separator />
      <Services />
      <Features />
      <Separator />
      <Testimonials />
      <Cta />
      <Separator />
      <Faq />
      <ContactForm />
    </>
  )
}
