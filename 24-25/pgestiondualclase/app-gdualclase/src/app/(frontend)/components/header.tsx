"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTheme } from '../contexts/ThemeContext'
import { darkTheme } from '../styles/themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Array de elementos del menú
const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/frontend/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/frontend/empresas', label: 'Empresas' },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className={`${theme.background} border-b`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            <span className={`text-2xl font-bold ${theme.text}`}>My App</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`hover:underline ${theme.text}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button onClick={toggleTheme} variant="outline" size="icon" aria-label="Toggle theme">
              {theme === darkTheme ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
            <Button className={`${theme.primary} hidden md:inline-flex`}>Sign In</Button>
            
            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className={`${theme.background} ${theme.text}`}>
                <nav className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg ${theme.text} hover:underline`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className={theme.primary}>Sign In</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

