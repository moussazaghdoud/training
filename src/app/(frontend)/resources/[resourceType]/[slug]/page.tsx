import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadResource, listResources } from '@/lib/content-loader'
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer'

const resourceTypes = ['reference-cards', 'demo-scripts', 'case-studies']

const typeLabels: Record<string, string> = {
  'reference-cards': 'Reference Cards',
  'demo-scripts': 'Demo Scripts',
  'case-studies': 'Case Studies',
}

function formatResourceName(slug: string): string {
  return slug
    .replace(/^(REF|DEMO|CASE)-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function generateStaticParams() {
  const params: { resourceType: string; slug: string }[] = []
  for (const type of resourceTypes) {
    const files = listResources(type)
    for (const file of files) {
      params.push({ resourceType: type, slug: file.replace(/\.md$/, '') })
    }
  }
  return params
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ resourceType: string; slug: string }>
}) {
  const { resourceType, slug } = await params
  const content = loadResource(resourceType, `${slug}.md`)

  if (!content) {
    notFound()
  }

  const title = formatResourceName(slug)
  const typeLabel = typeLabels[resourceType] || resourceType

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Dashboard</Link>
        <span>/</span>
        <Link href="/resources" className="hover:text-indigo-600 transition-colors">Resources</Link>
        <span>/</span>
        <span className="text-slate-400">{typeLabel}</span>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">{title}</span>
      </nav>

      {/* Back link */}
      <Link
        href="/resources"
        className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Resources
      </Link>

      {/* Content Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
        <div className="mb-6">
          <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-indigo-100 text-indigo-700 rounded-full mb-3">
            {typeLabel}
          </span>
          <h1 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900">{title}</h1>
        </div>
        <MarkdownRenderer content={content} />
      </div>
    </div>
  )
}
