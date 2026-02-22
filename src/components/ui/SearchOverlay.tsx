'use client'

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { tracksData } from '@/lib/tracks-data'

interface SearchResult {
  type: 'track' | 'module'
  title: string
  subtitle: string
  href: string
}

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = []

  for (const track of tracksData) {
    results.push({
      type: 'track',
      title: track.name,
      subtitle: `${track.moduleCount} modules · ${track.totalDuration}h`,
      href: `/tracks/${track.slug}`,
    })

    for (const level of track.levels) {
      for (const mod of level.modules) {
        results.push({
          type: 'module',
          title: mod.title,
          subtitle: `${mod.id} · ${track.name} · ${level.name}`,
          href: `/tracks/${track.slug}/${level.slug}?module=${mod.id}`,
        })
      }
    }
  }

  return results
}

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const index = useMemo(() => buildSearchIndex(), [])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const tokens = query.toLowerCase().split(/\s+/).filter(Boolean)
    return index.filter((item) => {
      const text = `${item.title} ${item.subtitle}`.toLowerCase()
      return tokens.every((t) => text.includes(t))
    }).slice(0, 12)
  }, [query, index])

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  // / hotkey to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault()
        // Can't open from here — parent controls isOpen
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Global / hotkey — dispatch a custom event the Header can listen to
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '/' && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('open-search'))
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const navigate = useCallback((href: string) => {
    onClose()
    router.push(href)
  }, [onClose, router])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && results[activeIndex]) {
      navigate(results[activeIndex].href)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const active = listRef.current.querySelector('[data-active="true"]')
      active?.scrollIntoView({ block: 'nearest' })
    }
  }, [activeIndex])

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(0)
  }, [results])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh]" role="dialog" aria-modal="true" aria-label="Search">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      {/* Panel */}
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Input */}
        <div className="flex items-center gap-3 px-4 border-b border-slate-200">
          <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search modules, tracks..."
            className="flex-1 py-4 text-sm text-slate-800 placeholder-slate-400 outline-none bg-transparent"
            aria-label="Search query"
            aria-activedescendant={results[activeIndex] ? `search-result-${activeIndex}` : undefined}
          />
          <button
            onClick={onClose}
            className="px-2 py-1 text-[10px] font-mono bg-slate-100 rounded border border-slate-200 text-slate-400 hover:text-slate-600"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-80 overflow-y-auto" role="listbox">
          {query.trim() && results.length === 0 && (
            <div className="p-6 text-center text-sm text-slate-400">
              No results for &ldquo;{query}&rdquo;
            </div>
          )}
          {results.map((result, i) => (
            <button
              key={`${result.href}-${i}`}
              id={`search-result-${i}`}
              role="option"
              aria-selected={i === activeIndex}
              data-active={i === activeIndex}
              onClick={() => navigate(result.href)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                i === activeIndex ? 'bg-indigo-50' : 'hover:bg-slate-50'
              }`}
            >
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                result.type === 'track'
                  ? 'bg-purple-100 text-purple-600'
                  : 'bg-indigo-100 text-indigo-600'
              }`}>
                {result.type === 'track' ? 'T' : 'M'}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 truncate">{result.title}</p>
                <p className="text-xs text-slate-400 truncate">{result.subtitle}</p>
              </div>
              {i === activeIndex && (
                <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Footer hint */}
        {!query.trim() && (
          <div className="p-4 text-center text-xs text-slate-400">
            Type to search across {index.length} modules and tracks
          </div>
        )}
      </div>
    </div>
  )
}
