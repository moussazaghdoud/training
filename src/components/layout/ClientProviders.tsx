'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { ProgressProvider } from '@/components/ui/ProgressProvider'

interface SidebarContextType {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  toggle: () => {},
  close: () => {},
})

export function useSidebar() {
  return useContext(SidebarContext)
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, close }}>
      <ProgressProvider>{children}</ProgressProvider>
    </SidebarContext.Provider>
  )
}
