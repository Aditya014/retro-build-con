"use client"

import { useState, useEffect, useRef } from 'react'
import { Award, CheckCircle, Clock, Users } from 'lucide-react'

interface CounterProps {
  end: number
  duration: number
  label: string
  icon: React.ElementType
}

function Counter({ end, duration, label, icon: Icon }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  useEffect(() => {
    if (!isVisible) return
    
    let startTime: number | null = null
    let animationFrame: number
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }
    
    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-playfair font-medium text-primary mb-2">
        {count}
      </div>
      <h3 className="text-lg font-medium mb-1">{label}</h3>
      <div className="flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary mr-2" />
        <p className="text-sm text-muted-foreground">{label.toLowerCase().includes('project') ? 'Completed to date' : 'And counting'}</p>
      </div>
    </div>
  )
}

export default function ProjectCounter() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 mb-4">
            <span className="text-primary text-sm font-medium px-3">WHO WE ARE</span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-6">
            A Journey Of Excellence, Since 17 Years
          </h2>
          <p className="text-muted-foreground">
            With nearly two decades of experience, we've built a reputation for excellence in interior design and construction, transforming spaces into extraordinary experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter 
            end={61} 
            duration={2000} 
            label="Completed Projects" 
            icon={CheckCircle} 
          />
          <Counter 
            end={5} 
            duration={2000} 
            label="Upcoming Projects" 
            icon={Clock} 
          />
          <Counter 
            end={9} 
            duration={2000} 
            label="Years Of Experience" 
            icon={Clock} 
          />
          <Counter 
            end={3} 
            duration={2000} 
            label="Awards & Accolades" 
            icon={Award} 
          />
        </div>
      </div>
    </section>
  )
}