"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"

interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  breadcrumb?: { label: string; href?: string }[]
}

export function DashboardLayout({
  children,
  title,
  description,
  breadcrumb,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4 sm:p-6">
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {breadcrumb.map((item, index) => (
                <span key={item.label} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {item.href ? (
                    <a href={item.href} className="hover:text-foreground">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-foreground">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Page Title */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h1>
            <p className="mt-1 text-sm sm:text-base text-muted-foreground">{description}</p>
          </div>

          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-muted-foreground">
            <p>2026 AI Desa Framework - Kementerian Desa</p>
            <div className="flex items-center gap-4">
              <span>v1.0.0</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
