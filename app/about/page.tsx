import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Building, Clock, Star, Target, Shield } from 'lucide-react'
import RotatingImage from '@/components/rotating-image'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
            alt="Modern architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 mb-6">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">About Us</span>
            </div>
            <h1 className="font-teko text-5xl md:text-7xl font-medium mb-6 leading-[1.1]">
              Crafting Spaces That
              <span className="block text-primary">Define Excellence</span>
            </h1>
            <p className="font-nunito text-xl text-muted-foreground mb-8 max-w-2xl">
              At Retro Build Con, we transform architectural visions into reality through innovative design and unparalleled craftsmanship.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="#vision" className="flex items-center gap-2">
                Discover Our Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section id="vision" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center p-2 rounded-lg bg-primary/10 mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-teko text-4xl md:text-5xl font-medium mb-6">Our Vision</h2>
                <p className="font-nunito text-lg text-muted-foreground">
                  To revolutionize architectural spaces through innovative design and sustainable practices, creating environments that inspire, endure, and exceed expectations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Innovation',
                    description: 'Pushing boundaries with cutting-edge design solutions',
                    icon: Star
                  },
                  {
                    title: 'Excellence',
                    description: 'Maintaining the highest standards in every project',
                    icon: Shield
                  }
                ].map((value, index) => (
                  <div key={index} className="p-6 bg-muted rounded-xl">
                    <value.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-teko text-xl font-medium mb-2">{value.title}</h3>
                    <p className="font-nunito text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern interior design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-teko text-3xl font-medium mb-2">9+ Years</p>
                <p className="font-nunito text-sm text-muted-foreground">
                  Of excellence in architectural design and construction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                number: '200+',
                label: 'Projects Completed',
                description: 'Across residential and interior decoration',
                icon: Building
              },
              {
                number: '28+',
                label: 'Expert Team Members',
                description: 'Dedicated professionals at your service',
                icon: Users
              },
              {
                number: '9+',
                label: 'Years Experience',
                description: 'Of industry excellence and innovation',
                icon: Clock
              }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary-foreground/10 mb-6 group-hover:bg-primary-foreground/20 transition-colors">
                  <stat.icon className="h-8 w-8" />
                </div>
                <h3 className="font-teko text-5xl font-medium mb-2">{stat.number}</h3>
                <p className="font-nunito text-xl mb-2">{stat.label}</p>
                <p className="font-nunito text-sm text-primary-foreground/80">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 mb-6">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Leadership</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-6">Visionary Leadership</h2>
            <p className="font-nunito text-lg text-muted-foreground">
              Meet the driving force behind our architectural excellence
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative aspect-square lg:aspect-auto">
                  <RotatingImage
                    images={[
                      'https://res.cloudinary.com/deibtmhm1/image/upload/v1744632084/WhatsApp_Image_2025-04-11_at_5.28.20_PM_eayf92.jpg',
                      'https://res.cloudinary.com/deibtmhm1/image/upload/v1744632083/WhatsApp_Image_2025-04-11_at_5.28.19_PM_r8djip.jpg',
                      'https://res.cloudinary.com/deibtmhm1/image/upload/v1744632056/WhatsApp_Image_2025-04-11_at_5.28.21_PM_cyjwke.jpg'
                    ]}
                    alt="Mr. Divyajit Das"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r" />
                  
                  {/* Overlay Content for Mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:hidden">
                    <h3 className="font-playfair text-3xl font-medium text-white mb-2">Mr. Divyajit Das</h3>
                    <p className="text-primary-foreground/90 font-medium">Founder & CEO</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Desktop Header - Hidden on Mobile */}
                  <div className="hidden lg:block mb-8">
                    <h3 className="font-playfair text-3xl font-medium mb-2">Mr. Divyajit Das</h3>
                    <p className="text-primary font-medium">Founder & CEO</p>
                  </div>

                  {/* Qualifications */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">B.Tech Civil Engineering</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">M.Tech Structural Engineering</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-3 py-1 rounded-full bg-primary/5 text-primary/80">PhD Scholar</span>
                      <span className="px-3 py-1 rounded-full bg-primary/5 text-primary/80">Institute of Engineers Member</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    At the helm of RBC stands our Founder Mr. Divyajit Das— a visionary with B.Tech in Civil Engineering and M.Tech in Structural Engineering, currently pursuing a PhD. With 9 years of expertise, they've designed over 260 structures, completed 11 residential projects, and transformed 50+ interiors. As a distinguished member of the Institute of Engineers, he ensures every RBC creation balances technical precision with modern sophistication.
                  </p>

                  {/* Achievement Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 rounded-xl bg-muted/50">
                      <p className="text-3xl font-playfair text-primary mb-1">260+</p>
                      <p className="text-sm text-muted-foreground">Structures Designed</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50">
                      <p className="text-3xl font-playfair text-primary mb-1">11</p>
                      <p className="text-sm text-muted-foreground">Residential Projects</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50">
                      <p className="text-3xl font-playfair text-primary mb-1">50+</p>
                      <p className="text-sm text-muted-foreground">Interiors Transformed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?q=80&w=2000&auto=format&fit=crop"
            alt="Modern interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-teko text-4xl md:text-6xl font-medium mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="font-nunito text-xl mb-8 text-primary-foreground/90">
              Let's collaborate to bring your architectural vision to life.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="font-nunito bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}