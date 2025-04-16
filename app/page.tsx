import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users, Building, Sparkles, Star, Target, Shield } from 'lucide-react'
import GeolocationSection from '@/components/geolocation-section'
import HeroSlider from '@/components/hero-slider'
import ProjectCounter from '@/components/project-counter'
import { ReviewCard } from '@/components/review-card'
import { getTopReviews } from '@/lib/reviews'

const featuredProjects = [
  {
    title: 'Luxury Duplex - Evos Buildcon',
    category: 'Residential',
    image: '/images/projects/luxury-duplex-evos-buildcon/cover.jpeg',
    link: '/projects/luxury-duplex-evos-buildcon'
  },
  {
    title: 'Opulent Living Room - Kanan Vihar',
    category: 'Interior',
    image: '/images/projects/opulent-living-room-kvihar/Kanan-1.jpeg',
    link: '/projects/opulent-living-room-kvihar'
  },
  {
    title: 'Luxury Apartment - Assotech Pride',
    category: 'Residential',
    image: '/images/projects/luxury-apartment-assotech/assotech-1.jpeg',
    link: '/projects/luxury-apartment-assotech'
  }
];

export default function Home() {
  const reviews = getTopReviews(3);

  return (
    <>
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Project Counter */}
      <ProjectCounter />

      {/* About Section */}
      <section className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 mb-6">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Legacy</span>
              </div>
              <h2 className="font-teko text-4xl md:text-5xl font-medium mb-6 leading-[1.1]">
                Elevating Spaces with
                <span className="block text-primary">Thoughtful Design</span>
              </h2>
              <p className="font-nunito text-lg text-muted-foreground mb-8">
                At Retro Build Con, we believe that exceptional spaces are born from a perfect blend of aesthetics and functionality. Our team of expert designers and craftsmen work collaboratively to create interiors that reflect your unique style and meet your specific needs.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-muted rounded-xl">
                  <Star className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-teko text-xl font-medium mb-1">Premium Quality</h3>
                  <p className="font-nunito text-sm text-muted-foreground">Uncompromising standards in every detail</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-teko text-xl font-medium mb-1">Guaranteed Results</h3>
                  <p className="font-nunito text-sm text-muted-foreground">Satisfaction in every project</p>
                </div>
              </div>
              <Button asChild size="lg" className="group font-nunito">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
                  alt="Interior design process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-teko text-3xl font-medium mb-2">9+ Years</p>
                <p className="font-nunito text-sm text-muted-foreground">
                  Of excellence in design and construction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 mb-6">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
            </div>
            <h2 className="font-teko text-4xl md:text-5xl font-medium mb-6">
              Comprehensive Design Solutions
            </h2>
            <p className="font-nunito text-lg text-muted-foreground">
              We offer a wide range of services to meet all your interior design and construction needs, from concept development to final execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Interior Design',
                description: 'Transformative design solutions tailored to your lifestyle and preferences.',
                icon: Sparkles,
                link: '/services#interior-design'
              },
              {
                title: 'Architectural Planning',
                description: 'Comprehensive architectural services for new builds and renovations.',
                icon: Building,
                link: '/services#architectural-planning'
              },
              {
                title: 'Construction',
                description: 'Expert construction services with attention to detail and quality craftsmanship.',
                icon: Award,
                link: '/services#construction'
              },
              {
                title: 'Project Management',
                description: 'End-to-end project management ensuring timely and budget-friendly execution.',
                icon: Users,
                link: '/services#project-management'
              },
              {
                title: 'Custom Furniture',
                description: 'Bespoke furniture design and manufacturing to complement your space.',
                icon: Target,
                link: '/services#custom-furniture'
              },
              {
                title: 'Renovation',
                description: 'Revitalize your existing spaces with our expert renovation services.',
                icon: Shield,
                link: '/services#renovation'
              }
            ].map((service, index) => (
              <div key={index} className="group p-8 bg-background rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-teko text-2xl font-medium mb-3">{service.title}</h3>
                <p className="font-nunito text-muted-foreground mb-4">{service.description}</p>
                <Link 
                  href={service.link} 
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:underline font-nunito"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 mb-6">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Featured Work</span>
              </div>
              <h2 className="font-teko text-4xl md:text-5xl font-medium mb-6">
                Our Latest Projects
              </h2>
              <p className="font-nunito text-lg text-muted-foreground max-w-2xl">
                Explore our portfolio of completed projects, showcasing our expertise in creating beautiful and functional spaces.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button asChild variant="outline" size="lg" className="group font-nunito">
                <Link href="/projects" className="flex items-center gap-2">
                  View All Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Link 
                key={index} 
                href={project.link}
                className="group block overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block text-sm font-medium text-white/90 bg-primary/80 px-3 py-1 rounded-full mb-3 font-nunito">
                      {project.category}
                    </span>
                    <h3 className="font-teko text-2xl font-medium text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 mb-6">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Google Reviews</span>
            </div>
            <h2 className="font-teko text-4xl md:text-5xl font-medium mb-6">
              What Our Clients Say
            </h2>
            <p className="font-nunito text-lg text-muted-foreground">
              Read authentic reviews from our satisfied clients on Google
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="bg-background hover:bg-background/90"
            >
              <a 
                href="https://g.co/kgs/DKMzEzD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View All Reviews on Google
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Geolocation Section */}
      <GeolocationSection />

      {/* CTA Section */}
      <section id="cta-section" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?q=80&w=2000&auto=format&fit=crop"
            alt="Modern interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="font-teko text-4xl md:text-6xl font-medium mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="font-nunito text-xl mb-8 text-primary-foreground/90">
              Contact us today to schedule a consultation and take the first step towards creating your dream space.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="font-nunito bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}