import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "West Peak Developers - Rising Above | Curated Homes in Hyderabad",
  description:
    "Premium residential apartments, gated communities and luxury villas across Hyderabad. Quality construction, modern design, transparent pricing.",
  keywords: "real estate, Hyderabad, apartments, villas, gated communities, West Peak Developers",
  authors: [{ name: "West Peak Developers" }],
  creator: "West Peak Developers",
  publisher: "West Peak Developers",
  openGraph: {
    title: "West Peak Developers - Rising Above",
    description: "Premium residential properties in Hyderabad",
    url: "https://westpeak.in",
    siteName: "West Peak Developers",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "West Peak Developers - Rising Above",
    description: "Premium residential properties in Hyderabad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "West Peak Developers",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
