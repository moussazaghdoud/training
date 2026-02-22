'use client'

import React from 'react'
import Link from 'next/link'
import { useProgress } from '@/components/ui/ProgressProvider'
import { tracksData } from '@/lib/tracks-data'

const TOTAL_MODULES = 93

export function ProgressDashboard() {
  const { progress, totalCompleted, getTrackProgress } = useProgress()
  const overallPercent = Math.round((totalCompleted / TOTAL_MODULES) * 100)

  // Build track progress data
  const trackStats = tracksData.map((track) => {
    const allModuleIds = track.levels.flatMap((l) => l.modules.map((m) => m.id))
    const pct = getTrackProgress(allModuleIds)
    const completed = allModuleIds.filter((id) => progress.completedModules.includes(id)).length
    return {
      slug: track.slug,
      name: track.name,
      color: track.color,
      total: allModuleIds.length,
      completed,
      percent: pct,
      levels: track.levels.map((level) => {
        const levelIds = level.modules.map((m) => m.id)
        const levelCompleted = levelIds.filter((id) => progress.completedModules.includes(id)).length
        return {
          name: level.name,
          total: levelIds.length,
          completed: levelCompleted,
        }
      }),
    }
  })

  // Recently completed (last 10)
  const recentlyCompleted = [...progress.completedModules].reverse().slice(0, 10).map((moduleId) => {
    for (const track of tracksData) {
      for (const level of track.levels) {
        const mod = level.modules.find((m) => m.id === moduleId)
        if (mod) {
          return { id: mod.id, title: mod.title, track: track.name, level: level.name, trackSlug: track.slug, levelSlug: level.slug }
        }
      }
    }
    return { id: moduleId, title: moduleId, track: 'Unknown', level: '', trackSlug: '', levelSlug: '' }
  })

  // Quiz scores
  const quizEntries = Object.entries(progress.quizScores)

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Completion</p>
          <p className="text-3xl font-display font-extrabold text-indigo-600">{overallPercent}%</p>
          <p className="text-xs text-slate-500 mt-1">{totalCompleted} of {TOTAL_MODULES} modules</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Streak</p>
          <p className="text-3xl font-display font-extrabold text-orange-500">{progress.streak}</p>
          <p className="text-xs text-slate-500 mt-1">{progress.streak === 1 ? 'day' : 'days'} in a row</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Completed</p>
          <p className="text-3xl font-display font-extrabold text-green-600">{totalCompleted}</p>
          <p className="text-xs text-slate-500 mt-1">total modules</p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Quizzes</p>
          <p className="text-3xl font-display font-extrabold text-purple-600">{quizEntries.length}</p>
          <p className="text-xs text-slate-500 mt-1">assessments taken</p>
        </div>
      </div>

      {/* Track-by-Track Progress */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-display font-bold text-slate-900">Progress by Track</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {trackStats.map((track) => (
            <div key={track.slug} className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Link
                  href={`/tracks/${track.slug}`}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors"
                >
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: track.color }} />
                  {track.name}
                </Link>
                <span className="text-sm font-bold text-slate-600">{track.percent}%</span>
              </div>
              <div
                className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-3"
                role="progressbar"
                aria-valuenow={track.percent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${track.name} progress`}
              >
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${track.percent}%`, backgroundColor: track.color }}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {track.levels.map((level) => (
                  <div key={level.name} className="text-xs text-slate-500">
                    <span className="font-medium text-slate-700">{level.name}:</span>{' '}
                    {level.completed}/{level.total}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Completed */}
      {recentlyCompleted.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-display font-bold text-slate-900">Recently Completed</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {recentlyCompleted.map((mod) => (
              <div key={mod.id} className="flex items-center gap-4 px-6 py-3">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">{mod.title}</p>
                  <p className="text-xs text-slate-400">{mod.id} · {mod.track} · {mod.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quiz Scores */}
      {quizEntries.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-display font-bold text-slate-900">Quiz & Assessment Scores</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Assessment</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Best Score</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {quizEntries.map(([quizId, score]) => {
                  const passed = score >= 70
                  return (
                    <tr key={quizId}>
                      <td className="px-6 py-3 text-slate-800 font-medium">{quizId}</td>
                      <td className="px-6 py-3 text-right font-bold" style={{ color: passed ? '#16a34a' : '#ef4444' }}>
                        {score}%
                      </td>
                      <td className="px-6 py-3 text-right">
                        <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${
                          passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {passed ? 'Passed' : 'Retry'}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty state */}
      {totalCompleted === 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-display font-bold text-slate-900 mb-1">Start Your Learning Journey</h3>
          <p className="text-sm text-slate-500 mb-4">Complete modules across any track to see your progress here.</p>
          <Link
            href="/"
            className="inline-flex px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Browse Tracks
          </Link>
        </div>
      )}
    </div>
  )
}
