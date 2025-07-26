import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchProductData } from "@/lib/api";
import { YouTubePlayer } from "@/components/youtube-player";
import { InstructorCard } from "@/components/instructor-card";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Banner from "@/components/banner";
import { getTranslation, type Language } from "@/lib/localization";
import { SafeHTML } from "@/lib/html-utlis";
import { ChecklistSection } from "@/components/chechklist-section";
import AOSWrapper from "@/components/Aos/AOSWrapper";


interface PageProps {
  params: {
    lang: string;
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = params;
  const response = await fetchProductData(slug, lang);

  if (!response.success) {
    return {
      title: "Course Not Found",
    };
  }

  const { data } = response;
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
  };
}

export async function generateStaticParams() {
  return [
    { lang: "en", slug: "ielts-course" },
    { lang: "bn", slug: "ielts-course" },
    { lang: "en", slug: "spoken-english" },
    { lang: "bn", slug: "spoken-english" },
  ];
}

export default async function ProductPage({ params }: PageProps) {
  const { lang, slug } = params;
  const response = await fetchProductData(slug, lang);

  if (!response.success) {
    notFound();
  }

  const { data } = response;
  const t = getTranslation(lang as Language);

  const instructorSections = data.sections.filter(
    (s) => s.type === "instructor"
  );
  const featureSections = data.sections.filter(
    (s) => s.type === "features"
  );
  const pointerSections = data.sections.filter(
    (s) => s.type === "pointers"
  );
  const aboutSections = data.sections.filter((s: any) => s.type === "about");

  const trailerVideo = data.media.find(
    (m) => m.type === "video" || m.url.includes("youtube")
  );

  return (
    <AOSWrapper>
      <section className="">
        <Header currentLang={lang} />
        <main className="mt-[75px]">
          <Banner currentLang={lang as Language} />
          <div
            className="container mx-auto text-center max-w-[700px] w-full lg:py-20 py-8 xl:px-0 px-4"
            data-aos="fade-up"
          >
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
              {data.title}
            </h1>
            <SafeHTML
              content={data.description}
              className="prose prose-lg max-w-none text-gray-600"
              fallback={
                <p className="text-gray-600">{t.courseDetails.noDescription}</p>
              }
            />
          </div>

          {trailerVideo && (
            <div className="bg-white" data-aos="fade-up" data-aos-delay="100">
              <div className="container mx-auto xl:px-0 px-4">
                <h2 className="md:text-2xl text-xl font-bold text-gray-900 my-5 text-center">
                  {t.courseDetails.coursePreview}
                </h2>
                <YouTubePlayer
                  videoUrl={trailerVideo.url}
                  thumbnail={trailerVideo.thumbnail}
                  title={trailerVideo.title || t.courseDetails.courseTrailer}
                />
              </div>
            </div>
          )}

          {instructorSections.length > 0 && (
            <div
              className="container mx-auto text-center lg:py-10 py-5 lx:px-0 px-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="md:text-2xl text-xl font-bold text-gray-900 mb-6">
                {t.courseDetails.meetInstructors}
              </h2>
              <div className="space-y-6">
                {instructorSections.map(section => (
                  <InstructorCard key={section.id} section={section} />
                ))}
              </div>
            </div>
          )}

          {pointerSections.length > 0 && (
            <div
              className="container mx-auto lg:py-10 py-5 xl:px-0 px-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {pointerSections.map(section => (
                <div
                  key={section.id}
                  className="bg-white rounded-lg lg:p-6 p-3 shadow-md border border-gray-200 mb-6"
                >
                  <h2 className="md:text-2xl text-xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  {section.content.items && (
                    <ul className="space-y-3">
                      {section.content.items.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {featureSections.length > 0 && (
            <div
              className="container mx-auto space-y-8 xl:px-0 px-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {featureSections.map(section => (
                <div
                  key={section.id}
                  className="bg-white rounded-lg lg:p-6 p-3 shadow-md border border-gray-200"
                >
                  <FeatureSection section={section} />
                </div>
              ))}
            </div>
          )}

          {aboutSections.length > 0 && (
            <div
              className="container mx-auto lg:py-10 py-5 xl:px-0 px-4 space-y-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {aboutSections.map(section => (
                <div
                  key={section.id}
                  className="bg-white rounded-lg lg:p-6 p-3 shadow-md border border-gray-200"
                >
                  <h2 className="md:text-2xl text-xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <SafeHTML
                    content={section.content.description}
                    className="prose max-w-none text-gray-600"
                    fallback={
                      <p className="text-gray-500 italic">
                        {t.courseDetails.noDetails}
                      </p>
                    }
                  />
                </div>
              ))}
            </div>
          )}

          {data.checklist.length > 0 && (
            <div
              className="container mx-auto lg:my-10 mb-5 xl:px-0 px-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <ChecklistSection checklist={data.checklist} />
            </div>
          )}
        </main>

        <CtaSection ctaText={data.cta_text} price={1000} />

        <div
          className="container mx-auto lg:py-10 py-5 xl:px-0 px-4 "
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">
              {t.courseDetails.courseInformation}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  {t.courseDetails.duration}:
                </span>
                <span className="font-medium">{t.courseDetails.selfPaced}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t.courseDetails.level}:</span>
                <span className="font-medium">
                  {t.courseDetails.beginnerToAdvanced}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">
                  {t.courseDetails.language}:
                </span>
                <span className="font-medium">
                  {lang === "bn" ? "বাংলা" : "English"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">
                  {t.courseDetails.certificate}:
                </span>
                <span className="font-medium">{t.courseDetails.yes}</span>
              </div>
            </div>
          </div>
        </div>

        <Footer currentLang={lang as Language} />
      </section>
    </AOSWrapper>
  );
}
