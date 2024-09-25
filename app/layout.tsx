import type { Metadata } from "next"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { geistMono, geistSans, exo } from "./fonts"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { defaultUrl } from "@/lib/constants"

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "FinPro | Transforma tus Finanzas",
  description: `Descubre productos financieros personalizados en FinPro. Préstamos personales, tarjetas de crédito y cuentas de ahorro con tasas competitivas. ¡Empieza hoy!`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${exo.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
