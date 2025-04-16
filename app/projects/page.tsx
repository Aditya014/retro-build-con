"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MasonryGrid } from '@/components/masonry-grid'
import { InstagramEmbed } from '@/components/instagram-embed'

const projects = [
  {
    id: 'luxury-duplex-evos-buildcon',
    title: 'Luxury Duplex - Evos Buildcon',
    category: 'Residential',
    description: 'A stunning modern duplex featuring contemporary design elements and premium finishes.',
    coverImage: '/images/projects/luxury-duplex-evos-buildcon/cover.jpeg',
    details: {
      client: 'Evos Buildcon',
      location: 'Bhubaneswar, Odisha',
      area: '4,500 sq ft',
      duration: '18 months'
    }
  },
  {
    id: 'opulent-living-room-kvihar',
    title: 'Opulent Living Room - Kanan Vihar',
    category: 'Interior Design',
    description: 'A luxurious living room transformation featuring elegant design elements and premium materials.',
    coverImage: '/images/projects/opulent-living-room-kvihar/Kanan-1.jpeg',
    details: {
      client: 'Private Residence',
      location: 'Kanan Vihar, Bhubaneswar',
      area: '800 sq ft',
      duration: '3 months'
    }
  },
  {
    id: 'luxury-apartment-assotech',
    title: 'Luxury Apartment - Assotech Pride',
    category: 'Residential',
    description: 'A sophisticated apartment renovation combining modern aesthetics with functional design.',
    coverImage: '/images/projects/luxury-apartment-assotech/assotech-1.jpeg',
    details: {
      client: 'Private Residence',
      location: 'Assotech Pride, Bhubaneswar',
      area: '2,200 sq ft',
      duration: '6 months'
    }
  }
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const categories = ['all', 'residential', 'commercial', 'interior']
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 mb-6">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Portfolio</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-medium mb-6">
              Featured Projects
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
             Discover our exclusive collection of masterfully crafted sanctuaries where visionary design meets flawless execution. Each space in our portfolio exemplifies our unwavering commitment to architectural excellence and refined luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                    : 'bg-muted hover:bg-primary/10 hover:text-primary hover:scale-105'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative block bg-muted rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-white/90 text-sm font-medium mb-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-1 w-fit">
                      {project.category}
                    </span>
                    <h3 className="font-playfair text-2xl font-medium text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/80 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-white/70">
                      <span>{project.details.area}</span>
                      <span>•</span>
                      <span>{project.details.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Follow Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 group cursor-pointer hover:opacity-80 transition-opacity">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-muted group-hover:bg-muted/80 transition-colors mb-4">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Stories</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium mt-4 mb-6">Behind the Scenes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a closer look at our project journeys through our Instagram, showcasing the transformation process and attention to detail.
            </p>
          </div>

          <h3 className="font-poppins text-sm text-muted-foreground mb-8 text-center">
            Follow us on Instagram{' '}
            <a 
              href="https://www.instagram.com/retrobuildcon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @retrobuildcon
            </a>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=800&auto=format&fit=crop'
            ].map((image, index) => (
              <a
                key={index}
                href="https://www.instagram.com/retrobuildcon"
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square relative overflow-hidden rounded-xl"
              >
                <Image
                  src={image}
                  alt={`Instagram Post ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">View on Instagram</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 mb-6">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Gallery</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-6">
              Inspiring Spaces
            </h2>
            <p className="text-muted-foreground">
              Explore our diverse portfolio of completed projects, each telling a unique story of design excellence and craftsmanship.
            </p>
          </div>
          
          <MasonryGrid />
        </div>
      </section>
    </>
  )
}