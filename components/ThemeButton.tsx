'use client'

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div className="">
      {
        currentTheme === "dark" ? (
          <SunIcon
            className="h-8 w-8 cursor-pointer text-yellow-500"
            role="button"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MoonIcon
            className="h-8 w-8 cursor-pointer text-blue-950"
            role="button"
            onClick={() => setTheme("dark")}
          />
        )
      }
    </div>
  )
}

export default DarkModeButton