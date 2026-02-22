import React from 'react'
import { tracksData } from '@/lib/tracks-data'
import { DashboardClient } from '@/components/ui/DashboardClient'

export default function HomePage() {
  const totalModules = tracksData.reduce((sum, t) => sum + t.moduleCount, 0)
  const totalHours = tracksData.reduce((sum, t) => sum + t.totalDuration, 0)

  // Prepare track data with module IDs for progress tracking
  const tracksWithModuleIds = tracksData.map((track) => ({
    slug: track.slug,
    name: track.name,
    shortDescription: track.shortDescription,
    color: track.color,
    icon: track.icon,
    totalDuration: track.totalDuration,
    moduleCount: track.moduleCount,
    goal: track.goal,
    moduleIds: track.levels.flatMap((l) => l.modules.map((m) => m.id)),
  }))

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 p-8 md:p-12">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZ2LTZoNnptMC0zMHY2aC02VjRoNnpNNiAzNHY2SDB2LTZoNnpNNiA0djZIMFY0aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/30">
              Enterprise Training Platform
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-3">
            Rainbow Training Academy
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mb-6">
            Master Alcatel-Lucent Enterprise Rainbow — from communication fundamentals to
            strategic deployment. Persona-driven learning paths with enterprise-grade certification.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{tracksData.length}</span>
              </div>
              <span>Learning Tracks</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{totalModules}</span>
              </div>
              <span>Modules</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{totalHours}h</span>
              </div>
              <span>Learning Content</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">15</span>
              </div>
              <span>Certifications</span>
            </div>
          </div>
        </div>
      </section>

      {/* Track Selection with progress */}
      <DashboardClient tracks={tracksWithModuleIds} />

      {/* Certification Preview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { tier: 'Silver', label: 'Certified', color: 'from-gray-200 to-gray-300', textColor: 'text-gray-700', req: 'Complete L1 + L2, pass 70%' },
          { tier: 'Gold', label: 'Expert', color: 'from-yellow-200 to-yellow-400', textColor: 'text-yellow-800', req: 'Complete L1-L3, pass 80%' },
          { tier: 'Platinum', label: 'Champion', color: 'from-slate-200 to-slate-400', textColor: 'text-slate-700', req: 'Complete all levels, pass 85% + practical' },
        ].map((badge) => (
          <div key={badge.tier} className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg`}>
              <svg className={`w-8 h-8 ${badge.textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-lg font-display font-bold text-slate-900">{badge.tier}</h3>
            <p className="text-sm font-medium text-indigo-600 mb-2">{badge.label}</p>
            <p className="text-xs text-slate-500">{badge.req}</p>
          </div>
        ))}
      </section>

      {/* Platform Stats */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 className="text-lg font-display font-bold text-slate-900 mb-4">Platform Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Video Lessons', count: '75+', icon: 'Play' },
            { label: 'Hands-On Labs', count: '22', icon: 'Terminal' },
            { label: 'Case Studies', count: '28', icon: 'BookOpen' },
            { label: 'Interactive Scenarios', count: '20', icon: 'Gamepad' },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-slate-50 text-center">
              <p className="text-2xl font-display font-bold text-indigo-600">{stat.count}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
