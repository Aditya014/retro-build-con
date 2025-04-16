"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import { motion } from 'framer-motion'

const breakpointColumns = {
  default: 3,
  1800: 4,
  1200: 3,
  768: 2,
  640: 1
}

// Define different aspect ratios for variety
const aspectRatios = [
  'aspect-[3/4]',
  'aspect-square',
  'aspect-[4/3]',
  'aspect-[2/3]',
  'aspect-[3/2]',
  'aspect-[16/9]'
]

const images = Array.from({ length: 85 }, (_, i) => 
  `https://cdn.jsdelivr.net/gh/Aditya014/rbc-images/masonry-grid/projectr${i + 1}.jpeg`
)

export function MasonryGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="overflow-hidden">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-auto"
        columnClassName="pl-4 first:pl-0"
      >
        {images.map((image, index) => {
          const aspectRatio = aspectRatios[index % aspectRatios.length]
          const delay = index * 0.1

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay }}
              className="mb-4 px-2"
            >
              <div 
                className={`
                  relative ${aspectRatio} overflow-hidden rounded-xl
                  group cursor-pointer transform transition-all duration-500
                  hover:z-10 hover:shadow-2xl hover:scale-[1.02]
                `}
              >
                <Image
                  src={image}
                  alt={`Interior Design Project ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredIndex === index ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100"
                >
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                      Interior Design
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </Masonry>
    </div>
  )
}