import Customers from "@/components/customers";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col">
        <Hero />
        <Customers />
      </main>
      <Footer />
    </>
  )
}
