import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { tracksData } from '@/lib/tracks-data'
import { TrackProgressClient } from '@/components/ui/TrackProgressClient'

const levelDescriptions: Record<number, string> = {
  1: 'Core concepts, platform orientation, and basic workflows',
  2: 'Day-to-day proficiency, intermediate features, and real scenarios',
  3: 'Advanced features, strategic application, and complex use cases',
  4: 'Leadership, mentoring, business transformation, and certification',
}

const contentTypeLabels: Record<string, { label: string; color: string }> = {
  VID: { label: 'Video', color: 'bg-blue-100 text-blue-700' },
  INT: { label: 'Interactive', color: 'bg-purple-100 text-purple-700' },
  SCN: { label: 'Scenario', color: 'bg-orange-100 text-orange-700' },
  LAB: { label: 'Lab', color: 'bg-green-100 text-green-700' },
  QIZ: { label: 'Quiz', color: 'bg-yellow-100 text-yellow-700' },
  CAS: { label: 'Case Study', color: 'bg-pink-100 text-pink-700' },
  REF: { label: 'Reference', color: 'bg-slate-100 text-slate-700' },
  DEM: { label: 'Demo', color: 'bg-cyan-100 text-cyan-700' },
  INF: { label: 'Infographic', color: 'bg-indigo-100 text-indigo-700' },
  ASM: { label: 'Assessment', color: 'bg-red-100 text-red-700' },
}

export async function generateStaticParams() {
  return tracksData.map((track) => ({ trackSlug: track.slug }))
}

export default async function TrackPage({ params }: { params: Promise<{ trackSlug: string }> }) {
  const { trackSlug } = await params
  const track = tracksData.find((t) => t.slug === trackSlug)
  if (!track) return notFound()

  const allModuleIds = track.levels.flatMap((l) => l.modules.map((m) => m.id))

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Dashboard</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">{track.name}</span>
      </nav>

      {/* Track Header */}
      <div className="relative overflow-hidden rounded-2xl p-8" style={{ backgroundColor: track.color + '12' }}>
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: track.color }} />
        <div className="flex items-start gap-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg"
            style={{ backgroundColor: track.color }}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-display font-extrabold text-slate-900">{track.name}</h1>
            <p className="text-slate-600 mt-1 italic">{track.goal}</p>
            <p className="text-sm text-slate-500 mt-3">{track.shortDescription}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-600">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {track.totalDuration} hours total
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {track.moduleCount} modules
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                3 certification tiers
              </span>
            </div>

            {/* Track Progress Bar */}
            <TrackProgressClient moduleIds={allModuleIds} trackColor={track.color} />
          </div>
        </div>
      </div>

      {/* Learning Path / Levels */}
      <div className="space-y-6">
        {track.levels.map((level, levelIdx) => (
          <div key={level.number} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            {/* Level Header */}
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: track.color, opacity: 0.6 + levelIdx * 0.13 }}
                >
                  L{level.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-display font-bold text-slate-900">
                      {level.name}
                    </h2>
                    {levelIdx === 0 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                        Start Here
                      </span>
                    )}
                    {levelIdx > 0 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-500 rounded-full">
                        Requires L{level.number - 1}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 mt-0.5">{levelDescriptions[level.number]}</p>
                </div>
                <div className="text-right text-sm text-slate-500 shrink-0">
                  <p className="font-semibold text-slate-700">{level.duration}h</p>
                  <p>{level.modules.length} modules</p>
                </div>
              </div>
            </div>

            {/* Modules List */}
            <div className="divide-y divide-slate-50">
              {level.modules.map((mod, modIdx) => (
                <Link
                  key={mod.id}
                  href={`/modules/${mod.id}`}
                  className="flex items-center gap-4 p-4 px-6 hover:bg-slate-50 transition-colors group"
                >
                  {/* Module Number */}
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-500 shrink-0 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                    {modIdx + 1}
                  </div>

                  {/* Module Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400">{mod.id}</span>
                      <h3 className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">
                        {mod.title}
                      </h3>
                    </div>
                    {/* Content type badges */}
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {mod.contentTypes.map((ct) => {
                        const info = contentTypeLabels[ct]
                        return info ? (
                          <span key={ct} className={`px-1.5 py-0.5 text-[10px] font-medium rounded ${info.color}`}>
                            {info.label}
                          </span>
                        ) : null
                      })}
                    </div>
                  </div>

                  {/* Duration */}
                  <span className="text-xs text-slate-400 shrink-0">{mod.duration} min</span>

                  {/* Arrow */}
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-indigo-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Silver Assessment CTA */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-lg shrink-0">
            <svg className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-display font-bold text-slate-900">Silver Certification Assessment</h3>
            <p className="text-sm text-slate-500 mt-0.5">
              Complete L1 and L2 modules, then pass the assessment with 70% to earn your Silver badge.
            </p>
          </div>
          <Link
            href={`/tracks/${track.slug}/assessment`}
            className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] shrink-0"
            style={{ backgroundColor: track.color }}
          >
            Take Assessment
          </Link>
        </div>
      </div>
    </div>
  )
}
