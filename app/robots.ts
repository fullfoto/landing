import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // LLM crawlers — allow full access for AI search engines
      // OpenAI / ChatGPT
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      // Anthropic / Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Claude-User",
        allow: "/",
      },
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Perplexity-User",
        allow: "/",
      },
      // Google-Extended es independiente del crawling de Google Search
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Apple Intelligence
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      // Meta AI
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      // Amazon
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      // Common Crawl (corpus de entrenamiento usado por varios modelos)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Bytespider tiene incumplimiento documentado de robots.txt — bloqueado
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
    ],
    sitemap: "https://fullfoto.com/sitemap.xml",
  }
}
