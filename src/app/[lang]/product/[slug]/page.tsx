import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { fetchProductData } from "@/lib/api"
import { YouTubePlayer } from "@/components/youtube-player"
import { InstructorCard } from "@/components/instructor-card"
import { FeatureSection } from "@/components/feature-section"
import { CtaSection } from "@/components/cta-section"
import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"
import Banner from "@/components/banner"
import { getTranslation, type Language } from "@/lib/localization"
import { SafeHTML } from "@/lib/html-utlis"
import { ChecklistSection } from "@/components/chechklist-section"
import ScrollSmootherWrapper from "@/components/scrollsmoother/ScrollSmootherWrapper"

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const response = await fetchProductData(slug, lang)

  if (!response.success) {
    return { title: "Course Not Found" }
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
    { lang: "en", slug: "spoken-english" },
    { lang: "bn", slug: "spoken-english" },
  ]
}

export default async function ProductPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const response = await fetchProductData(slug, lang)

  if (!response.success) {
    notFound()
  }

  const { data } = response
  const t = getTranslation(lang as Language)

  const instructorSections = data.sections.filter((s) => s.type === "instructor")
  const featureSections = data.sections.filter((s) => s.type === "features")
  const pointerSections = data.sections.filter((s) => s.type === "pointers")
  const aboutSections = data.sections.filter((s: any) => s.type === "about")
  const trailerVideo = data.media.find((m) => m.type === "video" || m.url.includes("youtube"))

  return (
    <section className="">
      <Header currentLang={lang} />
      <ScrollSmootherWrapper>
        <main className="mt-[75px]">
          <Banner currentLang={lang as Language} />
          <div className="container mx-auto xl:px-0 px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                  <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">{data.title}</h1>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                  <SafeHTML
                    content={data.description}
                    className="prose prose-lg max-w-none text-gray-600"
                    fallback={<p className="text-gray-600">{t.courseDetails.noDescription}</p>}
                  />
                </div>

                {instructorSections.length > 0 && (
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Instructors</h2>
                    <div className="space-y-6">
                      {instructorSections.map((section) => (
                        <InstructorCard key={section.id} section={section} />
                      ))}
                    </div>
                  </div>
                )}

                {pointerSections.length > 0 && (
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">How the course is laid out</h2>
                    {pointerSections.map((section) => (
                      <div key={section.id} className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.title}</h3>
                        {section.content.items && (
                          <ul className="space-y-3">
                            {section.content.items.map((item: string, index: number) => (
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

                {aboutSections.length > 0 && (
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">What you will learn by doing the course</h2>
                    {aboutSections.map((section) => (
                      <div key={section.id} className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.title}</h3>
                        <SafeHTML
                          content={section.content.description}
                          className="prose max-w-none text-gray-600"
                          fallback={<p className="text-gray-500 italic">{t.courseDetails.noDetails}</p>}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {featureSections.length > 0 && (
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Course Exclusive Feature</h2>
                    {featureSections.map((section) => (
                      <div key={section.id} className="mb-6">
                        <FeatureSection section={section} />
                      </div>
                    ))}
                  </div>
                )}

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Course details</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.courseDetails.duration}:</span>
                      <span className="font-medium">{t.courseDetails.selfPaced}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.courseDetails.level}:</span>
                      <span className="font-medium">{t.courseDetails.beginnerToAdvanced}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.courseDetails.language}:</span>
                      <span className="font-medium">{lang === "bn" ? "বাংলা" : "English"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.courseDetails.certificate}:</span>
                      <span className="font-medium">{t.courseDetails.yes}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-8">
                {trailerVideo && (
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Trailer</h2>
                    <YouTubePlayer
                      videoUrl={trailerVideo.url}
                      thumbnail={trailerVideo.thumbnail}
                      title={trailerVideo.title || t.courseDetails.courseTrailer}
                    />
                  </div>
                )}

                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">CTA</h2>
                  <CtaSection ctaText={data.cta_text} price={1000} />
                </div>

                {data.checklist.length > 0 && (
                  <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Check Lists</h2>
                    <ChecklistSection checklist={data.checklist} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <div className="py-10">
          <Footer currentLang={lang as Language} />
        </div>
      </ScrollSmootherWrapper>
    </section>
  )
}
