import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { tracksData } from '@/lib/tracks-data'
import { loadAssessmentContent, parseQuizQuestions } from '@/lib/content-loader'
import { AssessmentClient } from '@/components/ui/AssessmentClient'

export async function generateStaticParams() {
  return tracksData.map((track) => ({ trackSlug: track.slug }))
}

export default async function AssessmentPage({ params }: { params: Promise<{ trackSlug: string }> }) {
  const { trackSlug } = await params
  const track = tracksData.find((t) => t.slug === trackSlug)
  if (!track) return notFound()

  const assessmentMarkdown = loadAssessmentContent(trackSlug)
  const questions = assessmentMarkdown ? parseQuizQuestions(assessmentMarkdown) : []

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 flex-wrap" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Dashboard</Link>
        <span>/</span>
        <Link href={`/tracks/${track.slug}`} className="hover:text-indigo-600 transition-colors">{track.name}</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium" aria-current="page">Silver Assessment</span>
      </nav>

      {/* Assessment Header */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="h-1.5" style={{ backgroundColor: track.color }} />
        <div className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0"
              style={{ backgroundColor: track.color }}
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-display font-extrabold text-slate-900">
                {track.name} — Silver Certification Assessment
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Complete this assessment to earn your Silver (Certified) badge
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {questions.length} questions
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              30-45 minutes
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Passing score: 70%
            </div>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {questions.length > 0 ? (
        <AssessmentClient
          questions={questions}
          trackSlug={trackSlug}
          trackName={track.name}
        />
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
          <p className="text-slate-500">Assessment questions are being prepared. Check back soon.</p>
        </div>
      )}

      {/* Back Navigation */}
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
      </div>
    </div>
  )
}
