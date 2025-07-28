import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nguyen Thanh Thien - Security Network Engineer",
  description:
    "CV Online | Nguyen Thanh Thien - Security Network Engineer.",
  keywords: "Computer Network, Operating Systems, Cryptography, VPN, Basic Programming",
  authors: [{ name: "Nguyen Thanh Thien" }],
  openGraph: {
    title: "Nguyen Thanh Thien - Security Network Engineer",
    description: "CV Online | Nguyen Thanh Thien - Security Network Engineer",
    type: "website",
    locale: "vi_VN",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
