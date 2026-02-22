'use client'

import React, { useState } from 'react'
import { MarkdownRenderer } from './MarkdownRenderer'
import { useProgress } from './ProgressProvider'

interface ModuleContentProps {
  moduleId: string
  content: string
  trackColor: string
}

export function ModuleContent({ moduleId, content, trackColor }: ModuleContentProps) {
  const { completeModule, isModuleCompleted } = useProgress()
  const [showContent, setShowContent] = useState(false)
  const completed = isModuleCompleted(moduleId)

  if (!showContent) {
    return (
      <div className="text-center py-8">
        <button
          onClick={() => setShowContent(true)}
          className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          style={{ backgroundColor: trackColor }}
        >
          {completed ? 'Review Module Content' : 'Start Learning'}
        </button>
        {completed && (
          <p className="mt-3 text-sm text-green-600 font-medium flex items-center justify-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Module completed
          </p>
        )}
      </div>
    )
  }

  return (
    <div>
      <MarkdownRenderer content={content} />

      {/* Completion Section */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        {completed ? (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
            <svg className="w-6 h-6 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-green-800">Module Completed</p>
              <p className="text-xs text-green-600">You have already completed this module. Great work!</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">Finished reading? Mark this module as complete.</p>
            <button
              onClick={() => completeModule(moduleId)}
              className="px-6 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: trackColor }}
            >
              Mark as Complete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
