'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

interface ProgressState {
  completedModules: string[]
  moduleTimeSpent: Record<string, number>
  quizScores: Record<string, number>
  streak: number
  lastActiveDate: string
}

interface ProgressContextType {
  progress: ProgressState
  completeModule: (moduleId: string) => void
  isModuleCompleted: (moduleId: string) => boolean
  getTrackProgress: (moduleIds: string[]) => number
  recordQuizScore: (quizId: string, score: number) => void
  totalCompleted: number
}

const defaultProgress: ProgressState = {
  completedModules: [],
  moduleTimeSpent: {},
  quizScores: {},
  streak: 0,
  lastActiveDate: '',
}

const ProgressContext = createContext<ProgressContextType | null>(null)

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(defaultProgress)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('rainbow-progress')
      if (saved) {
        const parsed = JSON.parse(saved)
        setProgress(parsed)
      }
    } catch {
      // ignore
    }
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    if (progress !== defaultProgress) {
      try {
        localStorage.setItem('rainbow-progress', JSON.stringify(progress))
      } catch {
        // ignore
      }
    }
  }, [progress])

  const completeModule = useCallback((moduleId: string) => {
    setProgress((prev) => {
      if (prev.completedModules.includes(moduleId)) return prev
      const today = new Date().toISOString().slice(0, 10)
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
      const newStreak = prev.lastActiveDate === yesterday ? prev.streak + 1
        : prev.lastActiveDate === today ? prev.streak
        : 1
      return {
        ...prev,
        completedModules: [...prev.completedModules, moduleId],
        streak: newStreak,
        lastActiveDate: today,
      }
    })
  }, [])

  const isModuleCompleted = useCallback((moduleId: string) => {
    return progress.completedModules.includes(moduleId)
  }, [progress.completedModules])

  const getTrackProgress = useCallback((moduleIds: string[]) => {
    if (moduleIds.length === 0) return 0
    const completed = moduleIds.filter((id) => progress.completedModules.includes(id)).length
    return Math.round((completed / moduleIds.length) * 100)
  }, [progress.completedModules])

  const recordQuizScore = useCallback((quizId: string, score: number) => {
    setProgress((prev) => ({
      ...prev,
      quizScores: { ...prev.quizScores, [quizId]: Math.max(prev.quizScores[quizId] || 0, score) },
    }))
  }, [])

  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeModule,
        isModuleCompleted,
        getTrackProgress,
        recordQuizScore,
        totalCompleted: progress.completedModules.length,
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
