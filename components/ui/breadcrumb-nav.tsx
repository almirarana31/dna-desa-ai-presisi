"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"
import { Fragment } from "react"

interface BreadcrumbItem {
  label: string
  href: string
}

export function BreadcrumbNav() {
  const pathname = usePathname()

  // Generate breadcrumbs from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Dashboard", href: "/" }]

    // Map of path segments to readable labels
    const labelMap: Record<string, string> = {
      notifications: "Notifikasi",
      data: "Data Layer",
      analytics: "Analytics Layer",
      strategic: "Strategic Layer",
      "master-desa": "Master Desa",
      "master-penduduk": "Master Penduduk",
      "master-komoditas": "Master Komoditas",
      "sensor-iot": "Data Sensor IoT",
      geospasial: "Data Geospasial",
      integrasi: "Integrasi Sumber",
      "dna-desa": "DNA Desa Engine",
      diagnostic: "Diagnostic Engine",
      planning: "Planning Engine",
      recommendation: "Recommendation Engine",
      monitoring: "Monitoring Engine",
      "peta-dna": "Peta DNA Desa",
      laporan: "Laporan & Insight",
      settings: "Pengaturan",
      help: "Bantuan",
    }

    let currentPath = ""
    paths.forEach((path) => {
      currentPath += `/${path}`
      breadcrumbs.push({
        label: labelMap[path] || path.charAt(0).toUpperCase() + path.slice(1),
        href: currentPath,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // Don't show breadcrumbs on homepage
  if (pathname === "/") {
    return null
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1
          const isFirst = index === 0

          return (
            <Fragment key={crumb.href}>
              <li className="flex items-center gap-2">
                {isFirst ? (
                  <Link
                    href={crumb.href}
                    className="flex items-center gap-1.5 transition-colors hover:text-foreground"
                  >
                    <Home className="h-4 w-4" />
                    <span className="hidden sm:inline">{crumb.label}</span>
                  </Link>
                ) : isLast ? (
                  <span className="font-medium text-foreground">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
              {!isLast && (
                <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
