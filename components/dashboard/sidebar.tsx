"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Database,
  Brain,
  Target,
  Map,
  Activity,
  BarChart3,
  Lightbulb,
  Settings,
  HelpCircle,
  ChevronDown,
  Home,
  Layers,
  FileText,
  Bell,
} from "lucide-react"
import { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface NavItem {
  label: string
  icon: React.ElementType
  href?: string
  badge?: string
  tooltip?: string
  children?: { label: string; href: string; tooltip?: string }[]
}

const navigation: { section: string; items: NavItem[] }[] = [
  {
    section: "Overview",
    items: [
      { label: "Dashboard", icon: Home, href: "/dashboard" },
      { label: "Notifikasi", icon: Bell, href: "/notifications", badge: "3" },
    ],
  },
  {
    section: "Data Layer",
    items: [
      {
        label: "Village Data Hub",
        icon: Database,
        children: [
          { label: "Master Desa", href: "/data/master-desa" },
          { label: "Master Penduduk", href: "/data/master-penduduk" },
          { label: "Master Komoditas", href: "/data/master-komoditas" },
          { label: "Data Sensor IoT", href: "/data/sensor-iot" },
          { label: "Data Geospasial", href: "/data/geospasial" },
        ],
      },
      { label: "Integrasi Sumber", icon: Layers, href: "/data/integrasi" },
    ],
  },
  {
    section: "Analytics Layer",
    items: [
      { 
        label: "DNA Desa Engine", 
        icon: Brain, 
        href: "/analytics/dna-desa",
        tooltip: "Klasifikasi dan profiling desa berdasarkan potensi, risiko, dan karakteristik unik"
      },
      { 
        label: "Diagnostic Engine", 
        icon: Activity, 
        href: "/analytics/diagnostic",
        tooltip: "Analisis mendalam untuk mengidentifikasi masalah dan peluang pembangunan desa"
      },
      { 
        label: "Planning Engine", 
        icon: Target, 
        href: "/analytics/planning",
        tooltip: "Perencanaan pembangunan presisi berbasis data dan AI"
      },
      { 
        label: "Recommendation Engine", 
        icon: Lightbulb, 
        href: "/analytics/recommendation",
        tooltip: "Rekomendasi program dan intervensi yang tepat sasaran untuk setiap desa"
      },
      { 
        label: "Monitoring Engine", 
        icon: BarChart3, 
        href: "/analytics/monitoring",
        tooltip: "Monitoring dan evaluasi real-time terhadap program pembangunan desa"
      },
    ],
  },
  {
    section: "Strategic Layer",
    items: [
      { label: "Peta DNA Desa", icon: Map, href: "/strategic/peta-dna" },
      { label: "Laporan & Insight", icon: FileText, href: "/strategic/laporan" },
    ],
  },
]

const bottomNav: NavItem[] = [
  { label: "Pengaturan", icon: Settings, href: "/settings" },
  { label: "Bantuan", icon: HelpCircle, href: "/help" },
]

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Village Data Hub"])
  const pathname = usePathname()

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    )
  }

  const isActive = (href?: string) => {
    if (!href) return false
    return pathname === href
  }

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <Brain className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-sidebar-foreground">AI Desa</h1>
          <p className="text-xs text-sidebar-foreground/60">Framework v1.0</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navigation.map((group) => (
          <div key={group.section} className="mb-6">
            <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/50">
              {group.section}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpand(item.label)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                          "text-sidebar-foreground hover:bg-sidebar-accent"
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <item.icon className="h-4 w-4 text-sidebar-foreground/70" />
                          {item.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-sidebar-foreground/70 transition-transform",
                            expandedItems.includes(item.label) && "rotate-180"
                          )}
                        />
                      </button>
                      {expandedItems.includes(item.label) && (
                        <ul className="ml-6 mt-1 space-y-1 border-l border-sidebar-border pl-3">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className={cn(
                                  "block w-full rounded-lg px-3 py-1.5 text-left text-sm transition-colors",
                                  isActive(child.href)
                                    ? "bg-sidebar-accent text-sidebar-primary"
                                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : item.tooltip ? (
                    <TooltipProvider delayDuration={200}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.href || "#"}
                            className={cn(
                              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                              isActive(item.href)
                                ? "bg-sidebar-accent text-sidebar-primary"
                                : "text-sidebar-foreground hover:bg-sidebar-accent"
                            )}
                          >
                            <item.icon
                              className={cn(
                                "h-4 w-4",
                                isActive(item.href) ? "text-sidebar-primary" : "text-sidebar-foreground/70"
                              )}
                            />
                            {item.label}
                            {item.badge && (
                              <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="max-w-xs">
                          <p className="text-sm">{item.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        isActive(item.href)
                          ? "bg-sidebar-accent text-sidebar-primary"
                          : "text-sidebar-foreground hover:bg-sidebar-accent"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "h-4 w-4",
                          isActive(item.href) ? "text-sidebar-primary" : "text-sidebar-foreground/70"
                        )}
                      />
                      {item.label}
                      {item.badge && (
                        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-sidebar-border px-3 py-4">
        <ul className="space-y-1">
          {bottomNav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href || "#"}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  "text-sidebar-foreground hover:bg-sidebar-accent"
                )}
              >
                <item.icon className="h-4 w-4 text-sidebar-foreground/70" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
