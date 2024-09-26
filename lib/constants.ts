export const defaultUrl =
  process.env.VERCEL_ENV === "production"
    ? `https://finpro-eight.vercel.app`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:3000`


export const menuItems = [
  {
    id: 1,
    label: "Inicio",
    href: "#inicio",
  },
  {
    id: 2,
    label: "Servicios",
    href: "#servicios",
  },
  {
    id: 3,
    label: "Testimonios",
    href: "#testimonios",
  },
  {
    id: 4,
    label: "Contacto",
    href: "#contacto",
  },
]
