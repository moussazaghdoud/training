'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-indigo-300 bg-indigo-50/50 pl-4 py-2 my-4 rounded-r-lg">
              {children}
            </blockquote>
          ),
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
