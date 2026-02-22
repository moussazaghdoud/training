'use client'

import React, { useState } from 'react'

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

interface QuizPlayerProps {
  questions: QuizQuestion[]
  title: string
  passingScore: number
  onComplete?: (score: number, passed: boolean) => void
}

export function QuizPlayer({ questions, title, passingScore, onComplete }: QuizPlayerProps) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResult, setShowResult] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const current = questions[currentIdx]
  const isLastQuestion = currentIdx === questions.length - 1
  const isAnswered = answers[current?.id] !== undefined

  const handleSelect = (value: string) => {
    if (showExplanation) return
    setAnswers((prev) => ({ ...prev, [current.id]: value }))
  }

  const handleCheck = () => {
    setShowExplanation(true)
  }

  const handleNext = () => {
    setShowExplanation(false)
    if (isLastQuestion) {
      setShowResult(true)
      const score = calculateScore()
      onComplete?.(score, score >= passingScore)
    } else {
      setCurrentIdx((prev) => prev + 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    for (const q of questions) {
      const userAnswer = answers[q.id]
      if (typeof q.correctAnswer === 'string' && userAnswer === q.correctAnswer) correct++
      else if (Array.isArray(q.correctAnswer) && q.correctAnswer.includes(userAnswer)) correct++
    }
    return Math.round((correct / questions.length) * 100)
  }

  const isCorrect = () => {
    const userAnswer = answers[current.id]
    if (typeof current.correctAnswer === 'string') return userAnswer === current.correctAnswer
    return Array.isArray(current.correctAnswer) && current.correctAnswer.includes(userAnswer)
  }

  if (showResult) {
    const score = calculateScore()
    const passed = score >= passingScore
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
        <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${passed ? 'bg-green-100' : 'bg-red-100'}`}>
          {passed ? (
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
        <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">
          {passed ? 'Congratulations!' : 'Keep Learning'}
        </h2>
        <p className="text-4xl font-display font-extrabold mb-2" style={{ color: passed ? '#22c55e' : '#ef4444' }}>
          {score}%
        </p>
        <p className="text-sm text-slate-500 mb-6">
          {passed
            ? `You passed with ${score}% (required: ${passingScore}%)`
            : `You scored ${score}% (required: ${passingScore}%). Review the material and try again.`}
        </p>
        <button
          onClick={() => {
            setCurrentIdx(0)
            setAnswers({})
            setShowResult(false)
            setShowExplanation(false)
          }}
          className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
        >
          {passed ? 'Review Questions' : 'Try Again'}
        </button>
      </div>
    )
  }

  if (!current) return null

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">
            Question {currentIdx + 1} of {questions.length}
          </span>
          <div className="flex gap-1">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIdx
                    ? 'bg-indigo-500'
                    : answers[questions[i].id] !== undefined
                    ? 'bg-green-400'
                    : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="p-6">
        <div className="flex items-start gap-3 mb-6">
          <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-semibold rounded-lg shrink-0">
            Q{currentIdx + 1}
          </span>
          <div>
            <p className="text-base font-medium text-slate-800 leading-relaxed">{current.question}</p>
            <div className="flex gap-2 mt-2">
              <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                current.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                current.difficulty === 'hard' ? 'bg-red-100 text-red-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {current.difficulty}
              </span>
              {current.domain && (
                <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-100 text-slate-600">
                  {current.domain}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-2 mb-6" role="radiogroup" aria-label={`Options for question ${currentIdx + 1}`}>
          {current.options.map((opt) => {
            const selected = answers[current.id] === opt.value
            const isCorrectOpt = showExplanation && (
              typeof current.correctAnswer === 'string'
                ? current.correctAnswer === opt.value
                : current.correctAnswer.includes(opt.value)
            )
            const isWrong = showExplanation && selected && !isCorrectOpt

            return (
              <button
                key={opt.value}
                role="radio"
                aria-checked={selected}
                onClick={() => handleSelect(opt.value)}
                className={`w-full text-left p-3.5 rounded-xl border-2 transition-all text-sm ${
                  isCorrectOpt
                    ? 'border-green-400 bg-green-50 text-green-800'
                    : isWrong
                    ? 'border-red-400 bg-red-50 text-red-800'
                    : selected
                    ? 'border-indigo-400 bg-indigo-50 text-indigo-800'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
                disabled={showExplanation}
              >
                <span className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                    isCorrectOpt
                      ? 'bg-green-200 text-green-800'
                      : isWrong
                      ? 'bg-red-200 text-red-800'
                      : selected
                      ? 'bg-indigo-200 text-indigo-800'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {opt.value}
                  </span>
                  {opt.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        <div aria-live="polite">
          {showExplanation && (
            <div className={`p-4 rounded-xl mb-4 ${isCorrect() ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
              <p className="text-sm font-semibold mb-1" style={{ color: isCorrect() ? '#16a34a' : '#d97706' }}>
                {isCorrect() ? 'Correct!' : 'Not quite right'}
              </p>
              <p className="text-xs text-slate-600">{current.explanation}</p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          {!showExplanation ? (
            <button
              onClick={handleCheck}
              disabled={!isAnswered}
              className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              {isLastQuestion ? 'See Results' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
