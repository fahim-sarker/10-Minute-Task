import type { Section } from "@/types/product"
import { CheckCircle, BookOpen, Users, Award } from "lucide-react"

interface FeatureSectionProps {
  section: Section
}

const iconMap = {
  check: CheckCircle,
  book: BookOpen,
  users: Users,
  award: Award,
}

export function FeatureSection({ section }: FeatureSectionProps) {
  const features = section.content.features || []

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || CheckCircle

          return (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <IconComponent className="w-6 h-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
