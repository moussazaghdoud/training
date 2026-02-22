'use client'

import React from 'react'
import { QuizPlayer } from './QuizPlayer'
import { useProgress } from './ProgressProvider'

interface QuizQuestion {
  id: number
  question: string
  type: string
  options: { label: string; value: string }[]
  correctAnswer: string | string[]
  explanation: string
  difficulty: string
  domain: string
}

interface AssessmentClientProps {
  questions: QuizQuestion[]
  trackSlug: string
  trackName: string
}

export function AssessmentClient({ questions, trackSlug, trackName }: AssessmentClientProps) {
  const { recordQuizScore } = useProgress()

  const handleComplete = (score: number, passed: boolean) => {
    recordQuizScore(`${trackSlug}-silver`, score)
    if (passed) {
      recordQuizScore(`${trackSlug}-silver-passed`, 1)
    }
  }

  return (
    <QuizPlayer
      questions={questions}
      title={`${trackName} — Silver Assessment`}
      passingScore={70}
      onComplete={handleComplete}
    />
  )
}
