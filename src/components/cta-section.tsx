"use client"

import type { CtaText } from "@/types/product"
import { ShoppingCart, Play } from "lucide-react"

interface CtaSectionProps {
  ctaText: CtaText
  price?: number
}

export function CtaSection({ ctaText, price = 1000 }: CtaSectionProps) {
  const handleEnroll = () => {
    // Handle enrollment logic
    console.log("Enrolling in course...")
    // You can add more enrollment logic here like:
    // - Redirect to payment page
    // - Open enrollment modal
    // - Track analytics event
  }

  return (
    <div className="bg-black p-8 text-white">
      <div className="text-center container mx-auto">
        <div className="mb-6">
          <span className="text-3xl font-bold">৳{price.toLocaleString()}</span>
          <span className="text-blue-200 ml-2 line-through">৳{(price * 1.5).toLocaleString()}</span>
        </div>

        <button
          onClick={handleEnroll}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-300 inline-flex items-center space-x-2 mb-4 cursor-pointer"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>{ctaText.primary}</span>
        </button>

        {ctaText.secondary && <p className="text-blue-200 text-sm">{ctaText.secondary}</p>}

        <div className="mt-6 flex items-center justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <Play className="w-4 h-4" />
            <span>Lifetime Access</span>
          </div>
          <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
          <span>Certificate Included</span>
          <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
          <span>Mobile & Desktop</span>
        </div>
      </div>
    </div>
  )
}
