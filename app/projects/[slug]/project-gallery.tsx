"use client"

import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

interface ProjectGalleryProps {
  project: {
    title: string
    images: string[]
  }
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {project.images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div 
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index < 9}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">View Full Size</span>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}