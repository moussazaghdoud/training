'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useProgress } from '@/components/ui/ProgressProvider'
import { useSidebar } from './ClientProviders'

const navigation = [
  {
    label: 'Dashboard',
    href: '/',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]

const tracks = [
  { label: 'Support', href: '/tracks/support', color: 'bg-blue-500', moduleIds: ['SUP-101','SUP-102','SUP-103','SUP-104','SUP-105','SUP-201','SUP-202','SUP-203','SUP-204','SUP-205','SUP-206','SUP-301','SUP-302','SUP-303','SUP-304','SUP-305','SUP-401','SUP-402','SUP-403','SUP-404'] },
  { label: 'Customer Success', href: '/tracks/customer-success', color: 'bg-green-500', moduleIds: ['CS-101','CS-102','CS-103','CS-104','CS-201','CS-202','CS-203','CS-204','CS-205','CS-301','CS-302','CS-303','CS-304','CS-305','CS-401','CS-402','CS-403','CS-404','CS-405'] },
  { label: 'Executives', href: '/tracks/executives', color: 'bg-purple-500', moduleIds: ['EXEC-101','EXEC-102','EXEC-103','EXEC-104','EXEC-201','EXEC-202','EXEC-203','EXEC-204','EXEC-301','EXEC-302','EXEC-303','EXEC-401','EXEC-402','EXEC-403'] },
  { label: 'Partners', href: '/tracks/partners', color: 'bg-orange-500', moduleIds: ['PTR-101','PTR-102','PTR-103','PTR-104','PTR-201','PTR-202','PTR-203','PTR-204','PTR-205','PTR-301','PTR-302','PTR-303','PTR-304','PTR-305','PTR-401','PTR-402','PTR-403','PTR-404','PTR-405'] },
  { label: 'Developers', href: '/tracks/developers', color: 'bg-gray-500', moduleIds: ['DEV-101','DEV-102','DEV-103','DEV-104','DEV-201','DEV-202','DEV-203','DEV-204','DEV-205','DEV-301','DEV-302','DEV-303','DEV-304','DEV-401','DEV-402','DEV-403','DEV-404','DEV-405','DEV-406','DEV-407'] },
]

const secondaryNav = [
  {
    label: 'My Progress',
    href: '/progress',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: 'Certifications',
    href: '/certifications',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
]

const TOTAL_MODULES = 93

export function Sidebar() {
  const { totalCompleted, getTrackProgress, progress } = useProgress()
  const { isOpen, close } = useSidebar()
  const pathname = usePathname()
  const overallPercent = Math.round((totalCompleted / TOTAL_MODULES) * 100)

  // Close sidebar on route change (mobile)
  useEffect(() => {
    close()
  }, [pathname, close])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Backdrop (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-slate-200 overflow-y-auto z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
        aria-label="Main navigation"
      >
        <nav className="p-4 space-y-6">
          {/* Main Navigation */}
          <div>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                  isActive(item.href)
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                <span className={isActive(item.href) ? 'text-indigo-500' : 'text-slate-400'}>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Learning Tracks */}
          <div>
            <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Learning Tracks
            </h3>
            <div className="space-y-0.5">
              {tracks.map((track) => {
                const trackProgress = getTrackProgress(track.moduleIds)
                const active = isActive(track.href)
                return (
                  <Link
                    key={track.href}
                    href={track.href}
                    className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-colors group ${
                      active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${track.color} ring-2 ring-white shadow-sm`} />
                    <span className="flex-1">{track.label}</span>
                    {trackProgress > 0 && (
                      <span className="text-[10px] font-semibold text-slate-400">{trackProgress}%</span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Secondary */}
          <div>
            <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Progress
            </h3>
            {secondaryNav.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className={active ? 'text-indigo-500' : 'text-slate-400'}>{item.icon}</span>
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Progress Summary */}
          <div className="mx-3 p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">Your Progress</p>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>Overall</span>
                  <span className="font-semibold">{overallPercent}%</span>
                </div>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={overallPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Overall course progress"
                >
                  <div className="progress-fill bg-indigo-500" style={{ width: `${overallPercent}%` }} />
                </div>
              </div>
              <p className="text-xs text-slate-500">{totalCompleted} of {TOTAL_MODULES} modules completed</p>
              {progress.streak > 0 && (
                <p className="text-xs text-indigo-600 font-medium flex items-center gap-1">
                  <span>&#128293;</span> {progress.streak} day streak
                </p>
              )}
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}
