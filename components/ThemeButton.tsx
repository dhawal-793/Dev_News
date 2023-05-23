
'use client'

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme

  const changeTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }
  return (
    <div className="relative h-8 w-8 cursor-pointer" role="button" onClick={changeTheme}>
      <SunIcon
        className={`text-yellow-500 absolute inset-0 transition-all duration-200 ease-linear ${currentTheme === "light" && "rotate-90 opacity-0"}`}
      />
      <MoonIcon
        className={`text-blue-950 absolute inset-0 transition-all duration-200 ease-linear ${currentTheme === "dark" && "rotate-180 opacity-0"}`}
      />
    </div>
  )
}

export default ThemeButton