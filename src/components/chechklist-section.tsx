import type { Checklist } from "@/types/product"
import { CheckCircle } from "lucide-react"

interface ChecklistSectionProps {
  checklist: Checklist[]
  title?: string
}

export function ChecklistSection({ checklist, title = "What's Included" }: ChecklistSectionProps) {
  if (!checklist.length) return null

  return (
    <div className="bg-green-50 rounded-lg lg:p-6 p-3 border border-green-200">
      <h2 className="md:text-2xl text-xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {checklist.map((item) => (
          <div key={item.id} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">{item.title}</h3>
              {item.description && <p className="text-gray-600 text-sm mt-1">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
