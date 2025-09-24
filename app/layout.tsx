import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Cumpleaños de Jared - Paw Patrol",
  description: "Invitación al cumpleaños de Jared Mejia - Temática Paw Patrol",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon-paw-patrol.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/Image/paw1.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: {
      url: "/Image/pawt.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
