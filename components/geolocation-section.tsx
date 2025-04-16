"use client"

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Navigation, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function GeolocationSection() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)
  
  const officeLocation = {
    address: "Plot No. 353(Ground Floor, Prasanti Vihar, Patia, Bhubaneswar, Odisha 751024",
    phone: "+91 98618 19569",
    email: "info@retrobuildcon.com",
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "11:00 AM - 5:00 PM",
      sunday: "Closed"
    }
  }

  const handleMapLoad = () => {
    setMapLoaded(true)
    setMapError(false)
  }

  const handleMapError = () => {
    setMapError(true)
    setMapLoaded(false)
  }

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-6">
            Visit Our Studio
          </h2>
          <p className="text-muted-foreground">
            We're conveniently located in Bhubaneswar. Stop by for a consultation or to see our showroom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative w-full rounded-lg overflow-hidden bg-gray-100" style={{ height: '500px' }}>
              {!mapLoaded && !mapError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse">
                    <MapPin className="h-12 w-12 text-primary/30" />
                  </div>
                </div>
              )}
              
              {mapError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <AlertCircle className="h-12 w-12 text-primary mb-4" />
                  <p className="text-lg font-medium mb-2">Unable to load the map</p>
                  <p className="text-muted-foreground mb-4">Please visit our location on Google Maps directly</p>
                  <Button asChild variant="outline">
                    <a 
                      href="https://maps.app.goo.gl/owpMknu8TNSGWaG36"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              )}
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.471337666266!2d85.81654797473169!3d20.36344718112452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190903d9dfc5f3%3A0x725d30319d163b92!2sRETRO%20BUILDCON%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1741938128684!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RBC Office Location"
                onLoad={handleMapLoad}
                onError={handleMapError}
                className={`${mapLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              />
            </div>
            <div className="mt-4 flex justify-end">
              <a 
                href="https://maps.app.goo.gl/owpMknu8TNSGWaG36"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                <Navigation className="mr-1 h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-muted p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">Our Address</h4>
                  <p className="text-muted-foreground">
                    {officeLocation.address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-muted p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    {officeLocation.phone}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-muted p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    {officeLocation.email}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-muted p-3 rounded-lg mr-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">Working Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: {officeLocation.hours.weekdays}<br />
                    Saturday: {officeLocation.hours.saturday}<br />
                    Sunday: {officeLocation.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button asChild className="w-full">
                <a href="/contact">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}