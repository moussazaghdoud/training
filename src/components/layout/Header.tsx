'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useSidebar } from './ClientProviders'
import { SearchOverlay } from '@/components/ui/SearchOverlay'

export function Header() {
  const { toggle } = useSidebar()
  const [searchOpen, setSearchOpen] = useState(false)

  const openSearch = useCallback(() => setSearchOpen(true), [])

  // Listen for / hotkey custom event from SearchOverlay
  useEffect(() => {
    window.addEventListener('open-search', openSearch)
    return () => window.removeEventListener('open-search', openSearch)
  }, [openSearch])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="flex items-center justify-between h-full px-4 md:px-6">
          {/* Hamburger (mobile) */}
          <button
            onClick={toggle}
            className="lg:hidden p-2 -ml-1 text-slate-500 hover:text-slate-700 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-display font-bold text-slate-900 leading-tight">
                Rainbow Academy
              </h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider leading-none">
                Training Platform
              </p>
            </div>
          </div>

          {/* Search (desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full flex items-center gap-3 pl-10 pr-4 py-2 text-sm text-slate-400 bg-slate-100 border border-transparent rounded-xl hover:bg-slate-200 transition-all relative text-left"
              aria-label="Search modules and tracks"
            >
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search modules, tracks, resources...
              <kbd className="ml-auto hidden lg:inline-flex px-1.5 py-0.5 text-[10px] font-mono bg-white rounded border border-slate-200 text-slate-400">/</kbd>
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search icon (mobile) */}
            <button
              onClick={() => setSearchOpen(true)}
              className="md:hidden p-2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Notifications */}
            <button
              className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Notifications"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Avatar */}
            <div className="flex items-center gap-3 pl-2 md:pl-4 border-l border-slate-200" aria-label="User menu">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">U</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-slate-700">Learner</p>
                <p className="text-xs text-slate-400">Support Track</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
