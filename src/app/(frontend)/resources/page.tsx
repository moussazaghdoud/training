import React from 'react'
import Link from 'next/link'
import { listResources } from '@/lib/content-loader'

const resourceCategories = [
  {
    type: 'reference-cards',
    label: 'Reference Cards',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'bg-slate-100 text-slate-600',
    description: 'Quick-reference cheat sheets for key concepts and workflows',
  },
  {
    type: 'demo-scripts',
    label: 'Demo Scripts',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-cyan-100 text-cyan-600',
    description: 'Step-by-step demo guides with talking points for customer presentations',
  },
  {
    type: 'case-studies',
    label: 'Case Studies',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    color: 'bg-pink-100 text-pink-600',
    description: 'Real-world business scenarios with analysis prompts and success metrics',
  },
]

function formatResourceName(filename: string): string {
  return filename
    .replace(/\.md$/, '')
    .replace(/^(REF|DEMO|CASE)-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function ResourcesPage() {
  const categories = resourceCategories.map((cat) => ({
    ...cat,
    files: listResources(cat.type),
  }))

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Dashboard</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">Resources</span>
      </nav>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-extrabold text-slate-900">Resources</h1>
        <p className="text-slate-500 mt-2">
          Downloadable reference materials, demo scripts, case studies, and templates to support your learning and daily work.
        </p>
      </div>

      {/* Resource Categories */}
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.type} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center shrink-0`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-display font-bold text-slate-900">{category.label}</h2>
                    <span className="px-2 py-0.5 text-xs font-semibold bg-slate-100 text-slate-500 rounded-full">
                      {category.files.length} items
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{category.description}</p>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.files.map((file) => {
                  const slug = file.replace(/\.md$/, '')
                  return (
                    <Link
                      key={file}
                      href={`/resources/${category.type}/${slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                    >
                      <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-slate-700 group-hover:text-indigo-600 transition-colors flex-1">
                        {formatResourceName(file)}
                      </span>
                      <svg className="w-4 h-4 text-slate-300 group-hover:text-indigo-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )
                })}
              </div>

              {category.files.length === 0 && (
                <p className="text-sm text-slate-400 italic">No resources available yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Glossary Link */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-display font-bold text-slate-900">Rainbow Glossary</h3>
          <p className="text-sm text-slate-600 mt-1">
            Complete terminology reference for Rainbow platform features, technologies, and concepts.
          </p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors shrink-0">
          View Glossary
        </button>
      </div>
    </div>
  )
}
