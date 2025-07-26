import React from "react"

/**

 * @param htmlContent 
 * @returns
 */
export function createSafeHTML(htmlContent: string | undefined | null): { __html: string } | null {
  if (!htmlContent || typeof htmlContent !== "string") {
    return null
  }

  const sanitized = htmlContent
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")

  return { __html: sanitized }
}


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
