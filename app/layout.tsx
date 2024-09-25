import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { geistMono, geistSans, exo } from "./fonts"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
