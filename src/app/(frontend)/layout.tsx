import type { Metadata } from 'next'
import React from 'react'
import '../globals.css'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { ClientProviders } from '@/components/layout/ClientProviders'

export const metadata: Metadata = {
  title: 'Rainbow Training Academy',
  description: 'Enterprise training platform for ALE Rainbow UCaaS/CPaaS',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <ClientProviders>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
          >
            Skip to main content
          </a>
          <Header />
          <div className="flex">
            <Sidebar />
            <main id="main-content" className="flex-1 ml-0 lg:ml-64 mt-16 p-4 md:p-6 lg:p-8">
              {children}
            </main>
          </div>
        </ClientProviders>
      </body>
    </html>
  )
}
