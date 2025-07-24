export interface ApiMedia {
  name: string
  resource_type: string
  resource_value: string
  thumbnail_url?: string
}

export interface ApiChecklist {
  color: string
  icon: string
  id: string
  list_page_visibility: boolean
  text: string
}

export interface ApiInstructor {
  description: string
  has_instructor_page: boolean
  image: string
  name: string
  short_description: string
  slug: string
}

export interface ApiFeature {
  icon: string
  id: string
  subtitle: string
  title: string
}

export interface ApiPointer {
  color: string
  icon: string
  id: string
  text: string
}

export interface ApiAbout {
  description: string
  icon: string
  id: string
  title: string
}

export interface ApiSection {
  type: string
  name: string
  description: string
  bg_color: string
  order_idx: number
  values: any[]
}

export interface ApiProductData {
  slug: string
  id: number
  title: string
  description: string
  platform: string
  type: string
  modality: string
  media: ApiMedia[]
  checklist: ApiChecklist[]
  seo: any[]
  cta_text: {
    name: string
    value: string
  }
  sections: ApiSection[]
}

export interface ApiResponse {
  code: number
  data: ApiProductData
  error: any[]
  message: string
  payload: any[]
  status_code: number
}

// Transformed interfaces for the UI
export interface Medium {
  id: number
  type: string
  url: string
  thumbnail?: string
  title?: string
}

export interface Checklist {
  id: number
  title: string
  description?: string
  icon?: string
}

export interface Seo {
  title: string
  description: string
  keywords?: string
  og_image?: string
  canonical_url?: string
}

export interface CtaText {
  primary: string
  secondary?: string
}

export interface InstructorContent {
  name: string
  designation: string
  image: string
  bio?: string
}

export interface FeatureContent {
  title: string
  description: string
  icon?: string
}

export interface SectionContent {
  title?: string
  description?: string
  items?: string[]
  instructor?: InstructorContent
  features?: FeatureContent[]
}

export interface Section {
  id: number
  type: "instructor" | "features" | "pointers" | "about"
  title: string
  content: SectionContent
  order: number
}

export interface ProductData {
  slug: string
  id: number
  title: string
  description: string
  media: Medium[]
  checklist: Checklist[]
  seo: Seo
  cta_text: CtaText
  sections: Section[]
}

export interface TransformedApiResponse {
  success: boolean
  data: ProductData
  message?: string
}
