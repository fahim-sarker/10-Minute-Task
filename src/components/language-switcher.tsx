"use client"

import { useRouter, usePathname } from "next/navigation"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  currentLang: string
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (lang: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${lang}`)
    router.push(newPath)
  }

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <select
        value={currentLang}
        onChange={(e) => switchLanguage(e.target.value)}
        className="bg-transparent border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="en">English</option>
        <option value="bn">বাংলা</option>
      </select>
    </div>
  )
}
