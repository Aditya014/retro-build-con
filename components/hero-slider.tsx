"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    alt: "Modern interior design"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop",
    alt: "Elegant living room design"
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    alt: "Contemporary home interior"
  }
]

const officeHours = {
  weekdays: "9:00 AM - 6:00 PM",
  saturday: "11:00 AM - 5:00 PM",
  sunday: "Closed"
}

export default function HeroSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('cta-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <section className="relative h-screen flex items-center">
      {/* Fixed contact buttons */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <button className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all contact-button">
              <Phone className="h-6 w-6" />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <div className="p-6 text-center">
              <Phone className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Call Us</h3>
              <p className="text-2xl font-bold text-primary mb-4">+91 98618 19569</p>
              <div className="text-muted-foreground text-sm">
                <p className="font-medium mb-2">Working Hours:</p>
                <p>Monday - Friday: {officeHours.weekdays}</p>
                <p>Saturday: {officeHours.saturday}</p>
                <p>Sunday: {officeHours.sunday}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <button 
          onClick={scrollToContact}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all contact-button"
        >
          <Mail className="h-6 w-6" />
        </button>
      </div>
      
      {/* Background images */}
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            currentImageIndex === index 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
      
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
            Crafting Spaces That Inspire
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            We design and build exquisite spaces that harmonize innovation, craftsmanship, and timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
              <Link href="/projects">
                Explore Our Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 shadow-lg">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Slider indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentImageIndex === index 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}