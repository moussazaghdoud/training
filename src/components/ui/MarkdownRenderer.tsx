'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// --- Helper utilities for callout detection ---

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node) return ''
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (React.isValidElement(node)) {
    return extractText((node.props as { children?: React.ReactNode }).children)
  }
  return ''
}

type CalloutType = 'tip' | 'warning' | 'info' | 'key-concept'

function detectCalloutType(children: React.ReactNode): CalloutType | null {
  const text = extractText(children).trimStart()
  if (text.startsWith('Tip:')) return 'tip'
  if (text.startsWith('Warning:')) return 'warning'
  if (text.startsWith('Info:')) return 'info'
  if (text.startsWith('Key Concept:')) return 'key-concept'
  return null
}

const calloutConfig: Record<
  CalloutType,
  { border: string; bg: string; iconColor: string; icon: React.ReactNode }
> = {
  tip: {
    border: 'border-emerald-400',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  warning: {
    border: 'border-amber-400',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  info: {
    border: 'border-blue-400',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  'key-concept': {
    border: 'border-violet-400',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
}

// --- Component ---

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-display font-extrabold text-slate-900 mt-8 mb-4 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-display font-bold text-slate-800 mt-8 mb-3 pb-2 border-b border-slate-200">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-display font-semibold text-slate-800 mt-6 mb-2">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-semibold text-slate-700 mt-4 mb-2">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-sm text-slate-600 leading-relaxed mb-3">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="text-sm text-slate-600 space-y-1.5 mb-4 ml-4 list-disc">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="text-sm text-slate-600 space-y-1.5 mb-4 ml-4 list-decimal">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-sm text-slate-600 leading-relaxed">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-800">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-slate-500">{children}</em>
          ),

          // --- Callout-aware blockquote ---
          blockquote: ({ children }) => {
            const type = detectCalloutType(children)
            if (type) {
              const cfg = calloutConfig[type]
              return (
                <div className={`border-l-4 ${cfg.border} ${cfg.bg} rounded-r-lg my-4 p-4 flex gap-3`}>
                  <span className={`${cfg.iconColor} mt-0.5 shrink-0`}>{cfg.icon}</span>
                  <div className="min-w-0 [&>p]:mb-1 [&>p:last-child]:mb-0">{children}</div>
                </div>
              )
            }
            // Default blockquote (backward compatible)
            return (
              <blockquote className="border-l-4 border-indigo-300 bg-indigo-50/50 pl-4 py-2 my-4 rounded-r-lg">
                {children}
              </blockquote>
            )
          },

          // --- Image / video / diagram override ---
          img: ({ src, alt }) => {
            const altText = alt ?? ''

            // Video placeholder
            if (altText.startsWith('video:')) {
              const title = altText.replace('video:', '').trim()
              return (
                <span className="block my-6">
                  <span className="block relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 aspect-video max-w-2xl mx-auto">
                    {/* Play button */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                    {/* Title bar */}
                    <span className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/50 to-transparent">
                      <span className="text-white text-sm font-medium">{title}</span>
                    </span>
                    {/* Fake progress bar */}
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <span className="block h-full w-1/3 bg-indigo-500 rounded-r" />
                    </span>
                  </span>
                </span>
              )
            }

            // Diagram placeholder
            if (altText.startsWith('diagram:')) {
              const title = altText.replace('diagram:', '').trim()
              return (
                <span className="block my-6">
                  <span className="block border-2 border-dashed border-slate-300 rounded-xl p-8 text-center max-w-2xl mx-auto bg-slate-50/50">
                    <span className="block text-slate-400 mb-2">
                      <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                      </svg>
                    </span>
                    <span className="block text-sm font-medium text-slate-600">{title}</span>
                    <span className="block text-xs text-slate-400 mt-1">Interactive diagram</span>
                  </span>
                </span>
              )
            }

            // Regular image — styled with caption
            return (
              <span className="block my-6">
                <span className="block rounded-xl overflow-hidden border border-slate-200 max-w-2xl mx-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={altText} className="w-full h-auto" />
                </span>
                {altText && (
                  <span className="block text-center text-xs text-slate-400 mt-2">{altText}</span>
                )}
              </span>
            )
          },

          code: ({ className, children }) => {
            const isBlock = className?.includes('language-')
            if (isBlock) {
              return (
                <code className="block bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono overflow-x-auto my-4">
                  {children}
                </code>
              )
            }
            return (
              <code className="px-1.5 py-0.5 bg-slate-100 text-indigo-600 rounded text-xs font-mono">
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre className="bg-slate-900 rounded-xl overflow-x-auto my-4">{children}</pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
              <table className="w-full text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-50 border-b border-slate-200">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2.5 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2.5 text-sm text-slate-600 border-b border-slate-100">
              {children}
            </td>
          ),
          hr: () => <hr className="my-8 border-slate-200" />,
          a: ({ href, children }) => (
            <a href={href} className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
