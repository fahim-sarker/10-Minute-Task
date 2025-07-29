import type {
  ApiResponse,
  TransformedApiResponse,
  ProductData,
  Medium,
  Checklist,
  Section,
} from "@/types/product";

const API_BASE_URL = "https://api.10minuteschool.com/discovery-service/api/v1";

function transformApiResponse(
  apiData: ApiResponse,
  lang: string
): TransformedApiResponse {
  const data = apiData.data;

  //  media
  const media: Medium[] = data.media.map((item, index) => ({
    id: index + 1,
    type: item.resource_type === "video" ? "video" : "image",
    url:
      item.resource_type === "video"
        ? `https://www.youtube.com/watch?v=${item.resource_value}`
        : item.resource_value,
    thumbnail: item.thumbnail_url || undefined,
    title: item.name || undefined,
  }));

  //  checklist
  const checklist: Checklist[] = data.checklist.map((item, index) => ({
    id: index + 1,
    title: item.text,
    description: undefined,
    icon: item.icon,
  }));

  //  sections
  const sections: Section[] = [];
  let sectionId = 1;

  data.sections.forEach(section => {
    if (section.type === "instructors" && section.values.length > 0) {
      const instructor = section.values[0];
      sections.push({
        id: sectionId++,
        type: "instructor",
        title: section.name || "Meet Your Instructor",
        content: {
          instructor: {
            name: instructor.name,
            designation: instructor.short_description,
            image: instructor.image,
            bio: instructor.description.replace(/<[^>]*>/g, ""),
          },
        },
        order: section.order_idx,
      });
    }

    if (section.type === "features" && section.values.length > 0) {
      sections.push({
        id: sectionId++,
        type: "features",
        title: section.name || "Course Features",
        content: {
          features: section.values.map((feature: any) => ({
            title: feature.title,
            description: feature.subtitle,
            icon: feature.icon,
          })),
        },
        order: section.order_idx,
      });
    }

    if (section.type === "pointers" && section.values.length > 0) {
      sections.push({
        id: sectionId++,
        type: "pointers",
        title: section.name || "What You Will Learn",
        content: {
          items: section.values.map((pointer: any) => pointer.text),
        },
        order: section.order_idx,
      });
    }

    if (section.type === "about" && section.values.length > 0) {
      sections.push({
        id: sectionId++,
        type: "about",
        title: section.name || "About This Course",
        content: {
          description: section.values
            .map((about: any) => about.description)
            .join("<br><br>"),
        },
        order: section.order_idx,
      });
    }
  });


  sections.sort((a, b) => a.order - b.order);

  const transformedData: ProductData = {
    slug: data.slug,
    id: data.id,
    title: data.title,
    description: data.description,
    media,
    checklist,
    seo: {
      title: data.title,
      description: data.description.replace(/<[^>]*>/g, "").substring(0, 160),
      keywords: "IELTS, English, Test Preparation, Online Course",
    },
    cta_text: {
      primary: data.cta_text.name,
      secondary: "",
    },
    sections,
  };

  return {
    success: true,
    data: transformedData,
  };
}

export async function fetchProductData(
  slug = "ielts-course",
  lang = "en"
): Promise<TransformedApiResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/products/${slug}?lang=${lang}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          accept: "application/json",
        },
        next: {
          revalidate: 3600, 
        },
      }
    );

    if (!response.ok) {
      console.warn(
        `API request failed with status: ${response.status}. Using fallback data.`
      );
      return getFallbackData(slug, lang);
    }

    const apiData: ApiResponse = await response.json();

    if (apiData.code !== 200 || !apiData.data) {
      console.warn("Invalid API response. Using fallback data.");
      return getFallbackData(slug, lang);
    }

    return transformApiResponse(apiData, lang);
  } catch (error) {
    console.error("Error fetching product data:", error);
    console.log("Using fallback data for development...");
    return getFallbackData(slug, lang);
  }
}

// fallback data 
function getFallbackData(slug: string, lang: string): TransformedApiResponse {
  return {
    success: true,
    data: {
      slug: slug,
      id: 1,
      title: "IELTS Course by Munzereen Shahid",
      description: `
        <div>
          <p>Master the IELTS exam with our comprehensive course designed to help you achieve your target score. This course covers all four essential skills: Reading, Writing, Listening, and Speaking.</p>
          <p>Whether you're preparing for academic or general training IELTS, our structured approach will guide you through every aspect of the exam with proven strategies and extensive practice materials.</p>
          <ul>
            <li>✓ Comprehensive coverage of all IELTS sections</li>
            <li>✓ Expert instruction from experienced teachers</li>
            <li>✓ Practice tests and mock exams</li>
            <li>✓ Personalized feedback and guidance</li>
          </ul>
        </div>
      `,
      media: [
        {
          id: 1,
          type: "video",
          url: "https://www.youtube.com/watch?v=zrlYnaZftEQ",
          thumbnail:
            "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
          title: "IELTS Course Preview - Master Your English Skills",
        },
      ],
      checklist: [
        {
          id: 1,
          title: "কোর্সটি করছেন ৩২৯৯৫ জন",
          description: "Join thousands of successful students",
        },
        {
          id: 2,
          title: "৫৪টি ভিডিও",
          description: "Comprehensive video lessons",
        },
        {
          id: 3,
          title: "১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট",
          description: "Practice with mock tests",
        },
        {
          id: 4,
          title: "৩৮টি লেকচার শিট",
          description: "Detailed study materials",
        },
        {
          id: 5,
          title: "কোর্সের মেয়াদ আজীবন",
          description: "Lifetime access to course materials",
        },
      ],
      seo: {
        title: "IELTS Course by Munzereen Shahid - 10 Minute School",
        description:
          "Master the IELTS exam with our comprehensive course. Expert instruction, practice tests, and proven strategies to achieve your target score.",
        keywords:
          "IELTS, English, Test Preparation, Online Course, Munzereen Shahid",
      },
      cta_text: {
        primary: lang === "bn" ? "কোর্সটি কিনুন" : "Enroll Now",
        secondary:
          lang === "bn"
            ? "আজই শুরু করুন আপনার IELTS যাত্রা"
            : "Start your IELTS journey today",
      },
      sections: [],
    },
  };
}
