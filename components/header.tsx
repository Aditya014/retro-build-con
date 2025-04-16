"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { PricingCalculator } from '@/components/pricing-calculator'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="relative h-14 w-32">
              <Image
                src="https://res.cloudinary.com/deibtmhm1/image/upload/v1744644086/WhatsApp_Image_2025-03-14_at_11.44.00_AM-removebg-preview_zvha4g.png"
                alt="RBC Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white bg-primary/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "nav-link text-sm font-medium transition-colors",
                !scrolled && "text-white hover:text-white/90",
                scrolled && "text-muted-foreground hover:text-primary",
                pathname === item.href && "active"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <PricingCalculator />
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 flex">
            <div className="relative flex w-full flex-col overflow-y-auto bg-white pt-5 pb-4">
              <div className="flex items-center justify-between px-6">
                <Link href="/" className="-m-1.5 p-1.5">
                  <div className="relative h-14 w-32">
                    <Image
                      src="https://res.cloudinary.com/deibtmhm1/image/upload/v1744644086/WhatsApp_Image_2025-03-14_at_11.44.00_AM-removebg-preview_zvha4g.png"
                      alt="RBC Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6 px-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "nav-link block py-3 px-4 text-base font-medium transition-colors rounded-md",
                        pathname === item.href 
                          ? "bg-primary/10 text-primary font-semibold" 
                          : "text-muted-foreground hover:bg-muted hover:text-primary"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 px-6">
                  <PricingCalculator />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}