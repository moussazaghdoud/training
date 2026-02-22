import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Rainbow Training Academy — Admin',
}

export default function PayloadLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
