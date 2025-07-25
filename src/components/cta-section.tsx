"use client"

import type { CtaText } from "@/types/product"
import { ShoppingCart, Play, CheckCircle, MonitorSmartphone } from "lucide-react"

interface CtaSectionProps {
  ctaText: CtaText
  price?: number
}

export function CtaSection({ ctaText, price = 1000 }: CtaSectionProps) {
  const handleEnroll = () => {
    console.log("Enrolling in course...")
  }

  return (
    <div className="bg-black px-4 py-8 sm:px-6 md:px-8 text-white">
      <div className="container mx-auto text-center">
        {/* Price */}
        <div className="mb-6 text-2xl sm:text-3xl font-bold">
          <span>৳{price.toLocaleString()}</span>
          <span className="text-blue-200 ml-2 line-through text-base sm:text-lg font-medium">
            ৳{(price * 1.5).toLocaleString()}
          </span>
        </div>

        {/* Enroll Button */}
        <button
          onClick={handleEnroll}
          className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition inline-flex justify-center items-center space-x-2 mb-4"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>{ctaText.primary}</span>
        </button>

        {/* Subtext */}
        {ctaText.secondary && (
          <p className="text-blue-200 text-sm sm:text-base">{ctaText.secondary}</p>
        )}

        {/* Features */}
        <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 text-sm sm:text-base text-blue-100">
          <div className="flex items-center space-x-1">
            <Play className="w-4 h-4" />
            <span>Lifetime Access</span>
          </div>
          <div className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4" />
            <span>Certificate Included</span>
          </div>
          <div className="flex items-center space-x-1">
            <MonitorSmartphone className="w-4 h-4" />
            <span>Mobile & Desktop</span>
          </div>
        </div>
      </div>
    </div>
  )
}
