"use client"

import Link from "next/link"
import FinProLogo from "@/components/ui/finpro-logo"
import { Button } from "@/components/ui/button"
import { menuItems } from "@/lib/constants"
import { Menu, XIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Separator from "@/components/ui/separator"

export default function Header({ ...props }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  useEffect(() => {
    const html = document.querySelector("html")
    if (html) html.classList.toggle("overflow-hidden", menuIsOpen)
  }, [menuIsOpen])

  useEffect(() => {
    const closeHamburgerNavigation = () => setMenuIsOpen(false)
    window.addEventListener("orientationchange", closeHamburgerNavigation)
    window.addEventListener("resize", closeHamburgerNavigation)

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation)
      window.removeEventListener("resize", closeHamburgerNavigation)
    }
  }, [setMenuIsOpen])

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    event.preventDefault()

    const targetElement = document.querySelector(href)

    if (targetElement) {
      const headerOffset = document.querySelector("header")?.clientHeight || 0 // Get header height
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <header
        className="sticky top-0 z-[999] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        {...props}
      >
        <div className="max-w-7xl mx-auto w-full px-7 flex h-[4rem] items-center m-auto justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <FinProLogo className="h-7 text-orange-400" />
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="md:flex items-center gap-8 hidden">
              <nav
                className="relative mx-auto flex w-fit gap-4 sm:gap-6"
                onMouseLeave={() => {
                  setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                  }))
                }}
              >
                {menuItems.map((item) => (
                  <ItemNav key={item.id} setPosition={setPosition}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="px-3 py-2 text-sm font-medium block"
                    >
                      {item.label}
                    </Link>
                  </ItemNav>
                ))}
                <motion.div
                  animate={{
                    ...position,
                  }}
                  className="absolute h-9 bg-zinc-100 dark:bg-zinc-200/20 rounded-md z-0"
                />
              </nav>
              <Link href="#contacto" passHref legacyBehavior>
                <Button size="cta-sm" variant="primary">
                  <div className="size-52 group-hover:rotate-90 duration-500 absolute -right-1 -z-10 bg-[conic-gradient(from_0.789rad,_var(--tw-gradient-stops))] from-orange-400 to-orange-500/90"></div>
                  ¡Únete!
                </Button>
              </Link>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMenuIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              {menuIsOpen ? (
                <XIcon strokeWidth={0.75} />
              ) : (
                <Menu strokeWidth={0.75} />
              )}
            </Button>
          </div>
        </div>
        <Separator />
      </header>
      <MobileMenu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
    </>
  )
}

interface ItemNavProps {
  children: React.ReactNode
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number
      width: number
      opacity: number
    }>
  >
}

const ItemNav = ({ children, setPosition }: ItemNavProps) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return

        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        })
      }}
      className="relative z-10 cursor-pointer"
    >
      {children}
    </div>
  )
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed left-0 top-0 mt-[4rem] z-[999] h-[calc(100vh-4rem)] w-full overflow-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          <motion.nav
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mt-px font-display text-5xl font-medium tracking-tight text-foreground"
          >
            <motion.div className="grid grid-cols-1">
              {menuItems.map((item) => (
                <div className="group relative isolate" key={item.id}>
                  <Link
                    href={item.href}
                    className="block px-6 mx-0 py-16"
                    onClick={onClose}
                  >
                    {item.label}
                    <span className="absolute inset-y-0 -z-10 w-screen bg-foreground/10 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                  </Link>
                  <div
                    className="h-px border-none bg-gradient-to-r from-neutral-400/0
              via-neutral-400/30 to-neutral-400/0 dark:from-neutral-200/0
              dark:via-neutral-200/30 dark:to-neutral-200/0"
                  ></div>
                </div>
              ))}
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
