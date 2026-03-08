"use client"

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
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="ml-64 flex-1">
        <Header />
        <main className="p-6">
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">{title}</h1>
            <p className="mt-1 text-muted-foreground">{description}</p>
          </div>

          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border px-6 py-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>2024 AI Desa Framework - Kementerian Desa, PDT, dan Transmigrasi</p>
            <div className="flex items-center gap-4">
              <span>Versi 1.0.0</span>
              <span>|</span>
              <span>Data terakhir diperbarui: 7 Maret 2026</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
