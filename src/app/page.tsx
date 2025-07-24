import { redirect } from "next/navigation"

export default function HomePage() {
  // Redirect to default language and product
  redirect("/en/product/ielts-course")
}
