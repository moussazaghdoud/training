'use client'

import React from 'react'
import { TrackCard } from '@/components/tracks/TrackCard'
import { useProgress } from './ProgressProvider'

interface TrackWithModuleIds {
  slug: string
  name: string
  shortDescription: string
  color: string
  icon: string
  totalDuration: number
  moduleCount: number
  goal: string
  moduleIds: string[]
}

interface DashboardClientProps {
  tracks: TrackWithModuleIds[]
}

export function DashboardClient({ tracks }: DashboardClientProps) {
  const { getTrackProgress, totalCompleted, progress } = useProgress()

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-display font-bold text-slate-900">Learning Tracks</h2>
          <p className="text-sm text-slate-500 mt-1">Choose your persona to start a tailored learning journey</p>
        </div>
        {totalCompleted > 0 && (
          <div className="flex items-center gap-3 text-sm">
            <span className="text-slate-500">{totalCompleted} modules completed</span>
            {progress.streak > 0 && (
              <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-semibold">
                {progress.streak} day streak
              </span>
            )}
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <TrackCard
            key={track.slug}
            slug={track.slug}
            name={track.name}
            shortDescription={track.shortDescription}
            color={track.color}
            icon={track.icon}
            totalDuration={track.totalDuration}
            moduleCount={track.moduleCount}
            goal={track.goal}
            progress={getTrackProgress(track.moduleIds)}
          />
        ))}
      </div>
    </section>
  )
}
