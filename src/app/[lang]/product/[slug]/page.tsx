import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { fetchProductData } from "@/lib/api"
import { YouTubePlayer } from "@/components/youtube-player"
import { InstructorCard } from "@/components/instructor-card"
import { FeatureSection } from "@/components/feature-section"
import { CtaSection } from "@/components/cta-section"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SafeHTML } from "@/lib/html-utlis"
import { ChecklistSection } from "@/components/chechklist-section"


interface PageProps {
  params: Promise<{
    lang: string
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params
  const response = await fetchProductData(slug, lang)

  if (!response.success) {
    return {
      title: "Course Not Found",
    }
  }

  const { data } = response

  return {
    title: data.seo.title || data.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.title || data.title,
      description: data.seo.description,
      images: data.seo.og_image ? [data.seo.og_image] : [],
    },
    alternates: {
      canonical: data.seo.canonical_url,
    },
  }
}

export async function generateStaticParams() {
  return [
    { lang: "en", slug: "ielts-course" },
    { lang: "bn", slug: "ielts-course" },
  ]
}

export default async function ProductPage({ params }: PageProps) {
  const { lang, slug } = await params
  const response = await fetchProductData(slug, lang)

  if (!response.success) {
    notFound()
  }

  const { data } = response

  // Separate sections by type
  const instructorSections = data.sections.filter((s) => s.type === "instructor")
  const featureSections = data.sections.filter((s) => s.type === "features")
  const pointerSections = data.sections.filter((s) => s.type === "pointers")
  const aboutSections = data.sections.filter((s) => s.type === "about")

  // Find video trailer
  const trailerVideo = data.media.find((m) => m.type === "video" || m.url.includes("youtube"))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">10 Minute School</h1>
            </div>
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Description */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
              <SafeHTML
                content={data.description}
                className="prose prose-lg max-w-none text-gray-600"
                fallback={<p className="text-gray-600">No description available.</p>}
              />
            </div>

            {/* Video Trailer */}
            {trailerVideo && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Preview</h2>
                <YouTubePlayer
                  videoUrl={trailerVideo.url}
                  thumbnail={trailerVideo.thumbnail}
                  title={trailerVideo.title || "Course Trailer"}
                />
              </div>
            )}

            {/* Course Instructors */}
            {instructorSections.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Instructors</h2>
                <div className="space-y-6">
                  {instructorSections.map((section) => (
                    <InstructorCard key={section.id} section={section} />
                  ))}
                </div>
              </div>
            )}

            {/* What You Will Learn */}
            {pointerSections.length > 0 && (
              <div>
                {pointerSections.map((section) => (
                  <div key={section.id} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                    {section.content.items && (
                      <ul className="space-y-3">
                        {section.content.items.map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Course Features */}
            {featureSections.length > 0 && (
              <div className="space-y-8">
                {featureSections.map((section) => (
                  <div key={section.id} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <FeatureSection section={section} />
                  </div>
                ))}
              </div>
            )}

            {/* Course Details */}
            {aboutSections.length > 0 && (
              <div className="space-y-8">
                {aboutSections.map((section) => (
                  <div key={section.id} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <SafeHTML
                      content={section.content.description}
                      className="prose max-w-none text-gray-600"
                      fallback={<p className="text-gray-500 italic">No details available.</p>}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Checklist */}
            {data.checklist.length > 0 && <ChecklistSection  checklist={data.checklist} />}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <CtaSection ctaText={data.cta_text} price={1000} />

              {/* Course Stats */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Course Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">Self-paced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">Beginner to Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium">{lang === "bn" ? "বাংলা" : "English"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate:</span>
                    <span className="font-medium">Yes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">10 Minute School</h3>
            <p className="text-gray-400  mx-auto">
              Empowering millions of students across Bangladesh with quality education and skill development courses.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
