'use client'

import React from 'react'
import { useProgress } from './ProgressProvider'

interface TrackProgressClientProps {
  moduleIds: string[]
  trackColor: string
}

export function TrackProgressClient({ moduleIds, trackColor }: TrackProgressClientProps) {
  const { getTrackProgress } = useProgress()
  const progress = getTrackProgress(moduleIds)

  return (
    <div className="mt-5">
      <div className="flex justify-between text-xs text-slate-600 mb-1.5">
        <span>Track Progress</span>
        <span className="font-semibold">{progress}%</span>
      </div>
      <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, backgroundColor: trackColor }}
        />
      </div>
    </div>
  )
}
