import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, MapPin, Calendar, Building, Ruler } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProjectGallery from './project-gallery'

const projects = [
  {
    id: 'luxury-duplex-evos-buildcon',
    title: 'Luxury Duplex - Evos Buildcon',
    category: 'Residential',
    description: 'A stunning modern duplex featuring contemporary design elements and premium finishes, showcasing the perfect blend of luxury and functionality.',
    coverImage: 'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/cover.jpeg',
    images: [
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/001.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/002.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/003.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/004.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/005.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/006.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/007.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/008.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/009.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0010.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0011.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0012.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0013.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0014.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0015.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0016.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0017.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0018.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0019.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0020.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0021.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0022.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0023.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0024.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0025.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0026.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-duplex-evos/0027.jpeg'
    ],
    details: {
      client: 'Evos Buildcon',
      location: 'Bhubaneswar, Odisha',
      area: '2,300 sq ft',
      duration: '4 months',
      completion: 'March 2024'
    },
    features: [
      'Contemporary architectural design',
      'Premium quality finishes',
      'Spacious living areas',
      'Modern kitchen with high-end appliances',
      'Luxurious bathrooms',
      'Custom lighting solutions',
      'Energy-efficient systems',
      'Smart home integration'
    ]
  },
  {
    id: 'opulent-living-room-kvihar',
    title: 'Opulent Living Room - Kanan Vihar',
    category: 'Interior',
    description: 'A luxurious living room transformation in Kanan Vihar, Bhubaneswar, featuring elegant design elements and premium materials to create a sophisticated living space.',
    coverImage: 'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/living-room-kvihar/kanan-1.jpeg',
    images: [
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/living-room-kvihar/kanan-1.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/living-room-kvihar/kanan-2.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/living-room-kvihar/kanan-3.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/living-room-kvihar/kanan-4.jpeg'
    ],
    details: {
      client: 'Private Residence',
      location: 'Kanan Vihar, Bhubaneswar',
      area: '800 sq ft',
      duration: '3 months',
      completion: 'November 2024'
    },
    features: [
      'Custom-designed furniture',
      'Premium lighting fixtures',
      'Elegant wall treatments',
      'High-end flooring materials',
      'Bespoke storage solutions',
      'Ambient lighting design',
      'Premium window treatments',
      'Curated art and accessories'
    ]
  },
  {
    id: 'luxury-apartment-assotech',
    title: 'Luxury Apartment - Assotech Pride',
    category: 'Residential',
    description: 'A sophisticated apartment renovation in Assotech Pride, Bhubaneswar, combining modern aesthetics with functional design to create an elegant living space.',
    coverImage: 'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-flat-assotech/cover.jpeg',
    images: [
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-flat-assotech/assotech1.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-flat-assotech/assotech2.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-flat-assotech/assotech3.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-flat-assotech/assotech4.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-flat-assotech/assotech5.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-flat-assotech/assotech6.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-flat-assotech/assotech7.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-flat-assotech/assotech8.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-flat-assotech/assotech9.jpeg',
      'https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/luxury-flat-assotech/assotech10.jpeg'
    ],
    details: {
      client: 'Private Residence',
      location: 'Assotech Pride, Bhubaneswar',
      area: '1,400 sq ft',
      duration: '6 months',
      completion: 'January 2025'
    },
    features: [
      'Modern open-plan layout',
      'Custom kitchen design',
      'Premium flooring',
      'Designer bathrooms',
      'Smart home automation',
      'Custom wardrobes',
      'Ambient lighting system',
      'High-end finishes throughout'
    ]
  }
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.id === params.slug)
  
  if (!project) {
    notFound()
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded">
                {project.category}
              </span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl font-medium mb-6">
              {project.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              {project.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center">
                <Building className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="font-medium">{project.details.client}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{project.details.location}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Ruler className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Area</p>
                  <p className="font-medium">{project.details.area}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm text-muted-foreground">Completion</p>
                  <p className="font-medium">{project.details.completion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ProjectGallery project={project} />
            </div>
            
            <div>
              <div className="sticky top-24 bg-muted p-6 rounded-lg">
                <h3 className="font-playfair text-lg font-medium mb-4">Project Features</h3>
                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}