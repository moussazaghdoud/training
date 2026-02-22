import React from 'react'
import Link from 'next/link'
import { ProgressDashboard } from '@/components/ui/ProgressDashboard'

export default function ProgressPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Dashboard</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">My Progress</span>
      </nav>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-extrabold text-slate-900">My Progress</h1>
        <p className="text-slate-500 mt-2">
          Track your learning journey across all tracks, modules, and assessments.
        </p>
      </div>

      <ProgressDashboard />
    </div>
  )
}
