"use client"

import { Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { memo, useEffect, useState } from "react"
import { Label } from "@/components/ui/label"

interface ThemeOption {
  value: string
  label: string
  icon: JSX.Element
}

const ICON_SIZE = 16

const themeOptions: ThemeOption[] = [
  {
    value: "system",
    label: "System",
    icon: <Laptop size={ICON_SIZE} />,
  },
  {
    value: "light",
    label: "Light",
    icon: <Sun size={ICON_SIZE} />,
  },
  {
    value: "dark",
    label: "Dark",
    icon: <Moon size={ICON_SIZE} />,
  },
]

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <fieldset className="theme-switcher">
      <legend className="sr-only">Selecciona un tema:</legend>
      {themeOptions.map(({ value, label, icon }) => (
        <span key={value}>
          <input
            aria-label={label}
            id={`theme-switch-${value}`}
            type="radio"
            value={value}
            name="theme-switch"
            checked={theme === value}
            onChange={(e) => setTheme(e.target.value)}
          />
          <Label htmlFor={`theme-switch-${value}`}>
            <span className="sr-only">{label}</span>
            {icon}
          </Label>
        </span>
      ))}
    </fieldset>
  )
}

export default memo(ThemeSwitcher)
