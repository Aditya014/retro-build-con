"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Sparkles, Building, Award, Users, Wrench, Paintbrush } from 'lucide-react'

const services = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    icon: Sparkles,
    description: 'Our interior design services are tailored to transform your space into a beautiful and functional environment that reflects your personal style and meets your specific needs.',
    features: [
      'Residential interior design',
      'Commercial interior design',
      'Space planning and optimization',
      'Color and material consultation',
      'Furniture selection and placement'
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'architectural-planning',
    title: 'Architectural Planning',
    icon: Building,
    description: 'Our architectural planning services provide a solid foundation for your project, ensuring that the design is not only aesthetically pleasing but also structurally sound and functionally efficient.',
    features: [
      'Conceptual design development',
      'Space planning and layout design',
      '3D visualization and rendering',
      'Construction documentation',
      'Building code compliance'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'construction',
    title: 'Construction',
    icon: Award,
    description: 'Our construction services bring your design vision to life with precision and quality craftsmanship. We handle all aspects of the construction process, from site preparation to final finishing touches.',
    features: [
      'New construction',
      'Renovations and remodeling',
      'Custom millwork and cabinetry',
      'Structural modifications',
      'Electrical and plumbing installations'
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    icon: Users,
    description: 'Our project management services ensure that your project is completed on time, within budget, and to your satisfaction. We coordinate all aspects of the project, from initial planning to final completion.',
    features: [
      'Project planning and scheduling',
      'Budget management',
      'Contractor coordination',
      'Quality control and assurance',
      'Progress reporting and documentation'
    ],
    image: 'https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'custom-furniture',
    title: 'Custom Furniture',
    icon: Wrench,
    description: 'Our custom furniture services allow you to create unique pieces that perfectly complement your space and reflect your personal style. We design and craft furniture that is not only beautiful but also functional and durable.',
    features: [
      'Custom furniture design',
      'Material selection and sourcing',
      'Prototype development',
      'Furniture manufacturing',
      'Installation and placement'
    ],
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'renovation',
    title: 'Renovation',
    icon: Paintbrush,
    description: 'Our renovation services breathe new life into existing spaces, transforming them to meet your current needs and preferences while preserving their unique character and charm.',
    features: [
      'Kitchen renovations',
      'Bathroom renovations',
      'Whole-house renovations',
      'Historic property renovations',
      'Commercial space renovations'
    ],
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function ServicesPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.service-card').forEach((card) => {
      observerRef.current?.observe(card)
    })

    document.querySelectorAll('.process-step').forEach((step) => {
      observerRef.current?.observe(step)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 mb-6">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-medium mb-6 gradient-text">
              Comprehensive Design Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              We offer a complete range of interior design and construction services, crafted to transform your vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card opacity-0 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 service-image-overlay">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-playfair text-2xl font-medium">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4">
                    <service.icon className="h-6 w-6 text-primary service-icon" />
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="feature-item flex items-center p-3 rounded-lg bg-muted/50 hover:bg-primary/5"
                      >
                        <span className="text-primary mr-2">•</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-6 gradient-text">
              Our Process
            </h2>
            <p className="text-muted-foreground">
              We follow a structured approach to ensure excellence in every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Understanding your vision and requirements'
              },
              {
                step: '02',
                title: 'Design Development',
                description: 'Creating comprehensive design solutions'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Bringing designs to life with precision'
              },
              {
                step: '04',
                title: 'Completion',
                description: 'Ensuring perfection in every detail'
              }
            ].map((process, index) => (
              <div 
                key={index} 
                className="process-step opacity-0 bg-background p-8 rounded-xl shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="process-number inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary text-xl font-medium mb-6">
                  {process.step}
                </span>
                <h3 className="font-playfair text-xl font-medium mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}