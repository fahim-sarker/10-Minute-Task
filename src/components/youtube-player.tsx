"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface YouTubePlayerProps {
  videoUrl: string
  thumbnail?: string
  title?: string
}

export function YouTubePlayer({ videoUrl, thumbnail, title }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const getVideoId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : ""
  }

  const videoId = getVideoId(videoUrl)
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          title={title || "Course Trailer"}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div
      className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={thumbnailUrl || "/placeholder.svg"}
        alt={title || "Course Trailer"}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
        <div className="bg-black rounded-full md:h-20 md:w-20 h-10 w-10 flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
          <Play className="md:w-8 md:h-8 h-4 w-4 text-white ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  )
}
