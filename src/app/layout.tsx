"use client"
import { QueryClientProvider } from '@tanstack/react-query'
import './globals.css'
import { Inter } from 'next/font/google'
import { queryClient } from '@/services/queryClient'
import { ThemeProvider } from "@material-tailwind/react"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <body className={`${inter.className}`}>
            {children}
          </body>
        </ThemeProvider>
      </QueryClientProvider>
    </html>
  )
}
