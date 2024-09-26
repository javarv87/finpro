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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [backgroundStyles, setBackgroundStyles] = useState({
    left: 0,
    width: 0,
  })
  const [isHovering, setIsHovering] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (hoveredItem && navRef.current) {
      const navItem = navRef.current.querySelector(
        `[data-name="${hoveredItem}"]`
      )
      if (navItem) {
        const { offsetLeft, offsetWidth } = navItem as HTMLElement
        setBackgroundStyles({
          left: offsetLeft,
          width: offsetWidth,
        })
      }
    }
  }, [hoveredItem])

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
        className="sticky top-0 z-[999] max-w-7xl mx-auto w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        {...props}
      >
        <div className="px-7 flex h-[4rem] items-center m-auto justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <FinProLogo className="h-7 text-orange-400" />
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <div
              className="md:flex items-center gap-8 hidden"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false)
                setHoveredItem(null)
              }}
            >
              <nav className="ml-auto flex gap-4 sm:gap-6" ref={navRef}>
                <motion.div
                  className="absolute h-8 top-4 bg-zinc-100 dark:bg-zinc-200/20 rounded-md z-0"
                  initial={false}
                  animate={{
                    left: backgroundStyles.left,
                    width: backgroundStyles.width,
                    opacity: isHovering ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 30 }}
                />
                {menuItems.map((item) => (
                  <Link
                    href={item.href}
                    className="text-sm font-medium relative z-10 p-4"
                    key={item.id}
                    data-name={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.label}
                  </Link>
                ))}
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
                <>
                  <Link
                    href={item.href}
                    className="group relative isolate px-6 mx-0 py-16"
                    key={item.id}
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
                </>
              ))}
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
