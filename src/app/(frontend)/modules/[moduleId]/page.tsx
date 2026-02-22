import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { tracksData } from '@/lib/tracks-data'
import { loadModuleContent } from '@/lib/content-loader'
import { ModuleContent } from '@/components/ui/ModuleContent'

const contentTypeConfig: Record<string, { label: string; color: string; bgColor: string; icon: React.ReactNode }> = {
  VID: {
    label: 'Video Lesson',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 border-blue-200',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  INT: {
    label: 'Interactive Walkthrough',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 border-purple-200',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>,
  },
  SCN: {
    label: 'Scenario Simulation',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 border-orange-200',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  },
  LAB: {
    label: 'Hands-On Lab',
    color: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  },
  QIZ: {
    label: 'Knowledge Check',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 border-yellow-200',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
  },
  CAS: {
    label: 'Case Study',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 border-pink-200',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>,
  },
  REF: {
    label: 'Reference Card',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50 border-slate-200',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  },
  DEM: {
    label: 'Demo Script',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 border-cyan-200',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
  INF: {
    label: 'Infographic',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 border-indigo-200',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
  },
  ASM: {
    label: 'Certification Exam',
    color: 'text-red-600',
    bgColor: 'bg-red-50 border-red-200',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  },
}

// Find module across all tracks
function findModule(moduleId: string) {
  for (const track of tracksData) {
    for (const level of track.levels) {
      const mod = level.modules.find((m) => m.id === moduleId)
      if (mod) return { module: mod, track, level }
    }
  }
  return null
}

// Find next module in the track
function findNextModule(moduleId: string) {
  for (const track of tracksData) {
    const allModules = track.levels.flatMap((l) => l.modules)
    const idx = allModules.findIndex((m) => m.id === moduleId)
    if (idx >= 0 && idx < allModules.length - 1) {
      return allModules[idx + 1]
    }
  }
  return null
}

export async function generateStaticParams() {
  const params: { moduleId: string }[] = []
  for (const track of tracksData) {
    for (const level of track.levels) {
      for (const mod of level.modules) {
        params.push({ moduleId: mod.id })
      }
    }
  }
  return params
}

export default async function ModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params
  const result = findModule(moduleId)
  if (!result) return notFound()

  const { module: mod, track, level } = result
  const content = loadModuleContent(moduleId)
  const nextModule = findNextModule(moduleId)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 flex-wrap" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Dashboard</Link>
        <span>/</span>
        <Link href={`/tracks/${track.slug}`} className="hover:text-indigo-600 transition-colors">{track.name}</Link>
        <span>/</span>
        <span className="text-slate-400">L{level.number} {level.name}</span>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">{mod.id}</span>
      </nav>

      {/* Module Header */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="h-1.5" style={{ backgroundColor: track.color }} />
        <div className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white shrink-0"
              style={{ backgroundColor: track.color }}
            >
              {mod.id}
            </div>
            <div>
              <h1 className="text-2xl font-display font-extrabold text-slate-900">{mod.title}</h1>
              <p className="text-sm text-slate-500 mt-1">
                {track.name} &middot; Level {level.number}: {level.name}
              </p>
            </div>
          </div>

          {/* Module Meta */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {mod.duration} minutes
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {mod.primaryType}
            </div>
            <div className="flex items-center gap-1.5">
              {mod.contentTypes.map((ct) => {
                const config = contentTypeConfig[ct]
                return config ? (
                  <span key={ct} className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${config.bgColor.split(' ')[0]} ${config.color}`}>
                    {config.label}
                  </span>
                ) : null
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h2 className="text-lg font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Learning Objectives
        </h2>
        <ul className="space-y-3">
          {mod.objectives.map((obj, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-indigo-600">{idx + 1}</span>
              </div>
              {obj}
            </li>
          ))}
        </ul>
      </div>

      {/* Module Content (Markdown) */}
      {content ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Module Content
          </h2>
          <ModuleContent moduleId={moduleId} content={content} trackColor={track.color} />
        </div>
      ) : (
        /* Content Type Blocks fallback when no markdown available */
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Module Content
          </h2>
          <div className="space-y-3">
            {mod.contentTypes.map((ct, idx) => {
              const config = contentTypeConfig[ct]
              if (!config) return null
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${config.bgColor} transition-all hover:shadow-sm cursor-pointer`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/80 flex items-center justify-center shadow-sm shrink-0">
                    <span className={config.color}>{config.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-slate-800">{config.label}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {ct === 'VID' && 'Watch the narrated screencast or animated explainer'}
                      {ct === 'INT' && 'Follow the step-by-step guided simulation'}
                      {ct === 'SCN' && 'Complete the role-play scenario with branching decisions'}
                      {ct === 'LAB' && 'Practice in the live sandbox environment'}
                      {ct === 'QIZ' && 'Test your knowledge with a quick quiz'}
                      {ct === 'CAS' && 'Analyze the real-world business scenario'}
                      {ct === 'REF' && 'Download the quick reference card'}
                      {ct === 'DEM' && 'Follow the step-by-step demo guide'}
                      {ct === 'INF' && 'View the visual summary infographic'}
                      {ct === 'ASM' && 'Complete the graded certification exam'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-slate-400">
                      {ct === 'ASM' ? '30-45 min' : ct === 'LAB' ? '20-45 min' : ct === 'SCN' ? '15-30 min' : '5-15 min'}
                    </span>
                    <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link
          href={`/tracks/${track.slug}`}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {track.name}
        </Link>
        {nextModule && (
          <Link
            href={`/modules/${nextModule.id}`}
            className="flex items-center gap-2 text-sm font-medium hover:text-indigo-600 transition-colors"
            style={{ color: track.color }}
          >
            Next: {nextModule.title}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}
