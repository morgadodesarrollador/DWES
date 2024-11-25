"use client"

import { useTheme } from '../contexts/ThemeContext'

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className={`${theme.background} border-t`}>
      <div className={`container mx-auto px-4 py-6 text-center ${theme.text}`}>
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  )
}

