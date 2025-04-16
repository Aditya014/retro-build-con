import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <div className="relative w-40 h-12">
                <Image
                  src="https://res.cloudinary.com/deibtmhm1/image/upload/v1744644086/WhatsApp_Image_2025-03-14_at_11.44.00_AM-removebg-preview_zvha4g.png"
                  alt="RBC Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Transforming spaces into extraordinary experiences through thoughtful design and expert craftsmanship.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.instagram.com/retrobuildcon/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/1BFc5Y3Tk2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/divyajit-das-44532486?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Plot No. 353, Prasanti Vihar, Patia-751024.
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  +91 98618 19569
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  info@retrobuildcon.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>Designed and developed by Aditya Pradhan</span>
          <span>|</span>
          <span>© 2025</span>
          <span>|</span>
          <a 
            href="https://www.instagram.com/gem_metrics" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-primary hover:underline"
          >
            <Instagram className="h-4 w-4" />
            <span>@gem_metrics</span>
          </a>
        </div>
      </div>
    </footer>
  )
}