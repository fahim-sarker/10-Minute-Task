import React from "react"

/**
 * Safely creates HTML content for dangerouslySetInnerHTML
 * @param htmlContent - The HTML string content
 * @returns Object with __html property or null if content is invalid
 */
export function createSafeHTML(htmlContent: string | undefined | null): { __html: string } | null {
  if (!htmlContent || typeof htmlContent !== "string") {
    return null
  }

  // Basic sanitization - remove script tags and other potentially dangerous content
  const sanitized = htmlContent
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")

  return { __html: sanitized }
}

/**
 * Component for safely rendering HTML content
 */
interface SafeHTMLProps {
  content: string | undefined | null
  className?: string
  fallback?: React.ReactNode
}

export function SafeHTML({ content, className = "", fallback = null }: SafeHTMLProps) {
  const safeHTML = createSafeHTML(content)

  if (!safeHTML) {
    return React.createElement("div", { className }, fallback)
  }

  return React.createElement("div", {
    className,
    dangerouslySetInnerHTML: safeHTML,
  })
}
