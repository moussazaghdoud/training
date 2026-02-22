'use client'

import React from 'react'
import { useProgress } from '@/components/ui/ProgressProvider'
import { tracksData } from '@/lib/tracks-data'

interface CertEarned {
  trackSlug: string
  tier: 'silver' | 'gold' | 'platinum'
  name: string
  score: number
}

const tierThresholds = {
  silver: { levels: [1, 2], minScore: 70 },
  gold: { levels: [1, 2, 3], minScore: 80 },
  platinum: { levels: [1, 2, 3, 4], minScore: 85 },
}

const tierGradients: Record<string, string> = {
  silver: 'from-gray-300 to-gray-400',
  gold: 'from-yellow-300 to-yellow-500',
  platinum: 'from-slate-300 to-slate-500',
}

const tierLabels: Record<string, string> = {
  silver: 'Certified',
  gold: 'Expert',
  platinum: 'Champion',
}

export function CertificationsClient() {
  const { progress, getTrackProgress } = useProgress()

  const earnedCerts: CertEarned[] = []

  for (const track of tracksData) {
    const assessmentKey = `assessment-${track.slug}`
    const bestScore = progress.quizScores[assessmentKey] || 0

    for (const [tier, req] of Object.entries(tierThresholds) as [keyof typeof tierThresholds, typeof tierThresholds[keyof typeof tierThresholds]][]) {
      // Check all required levels are 100% complete
      const requiredModuleIds = track.levels
        .filter((l) => req.levels.includes(l.number))
        .flatMap((l) => l.modules.map((m) => m.id))

      const trackPct = getTrackProgress(requiredModuleIds)
      const levelsComplete = trackPct === 100
      const scorePass = bestScore >= req.minScore

      if (levelsComplete && scorePass) {
        const personaLabel = track.persona === 'support' ? 'Support'
          : track.persona === 'customer-success' ? 'CS'
          : track.persona === 'executive' ? 'Executive'
          : track.persona === 'partner' ? 'Partner'
          : 'Developer'

        earnedCerts.push({
          trackSlug: track.slug,
          tier,
          name: `Rainbow ${personaLabel} ${tierLabels[tier]}`,
          score: bestScore,
        })
      }
    }
  }

  if (earnedCerts.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        <h3 className="text-lg font-display font-bold text-slate-900 mb-1">No Certifications Earned Yet</h3>
        <p className="text-sm text-slate-500">Complete learning track levels and pass assessments to earn certifications.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Your Earned Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {earnedCerts.map((cert) => (
            <div
              key={`${cert.trackSlug}-${cert.tier}`}
              className="relative p-4 rounded-xl border-2 border-green-200 bg-green-50/50"
            >
              <div className="absolute top-3 right-3">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tierGradients[cert.tier]} flex items-center justify-center shadow-lg mb-3`}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-sm font-bold text-slate-900">{cert.name}</p>
              <p className="text-xs text-slate-500 capitalize">{cert.tier} tier</p>
              <p className="text-xs text-green-600 font-medium mt-1">Best score: {cert.score}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
