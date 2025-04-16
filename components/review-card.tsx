"use client"

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import type { Review } from '@/lib/reviews'

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
      {/* Google Review Badge */}
      <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-md">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
          alt="Google Review"
          width={20}
          height={20}
        />
      </div>

      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Quote Icon */}
      <Quote className="h-8 w-8 text-primary/10 mb-4" />

      {/* Review Text */}
      <p className="font-nunito text-muted-foreground mb-6 flex-grow">
        "{review.text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center mt-auto">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image
            src={review.authorImage}
            alt={review.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-teko text-lg font-medium">{review.author}</p>
          <p className="font-nunito text-sm text-primary">Verified Customer</p>
        </div>
      </div>
    </div>
  )
}