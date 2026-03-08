"use client"

import { cn } from "@/lib/utils"
import {
  Lightbulb,
  TrendingUp,
  Building2,
  MapPin,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Recommendation {
  id: string
  type: "komoditas" | "investasi" | "kelembagaan" | "pasar"
  title: string
  description: string
  village: string
  priority: "high" | "medium" | "low"
  impact: string
  status: "new" | "in_progress" | "completed"
}

const recommendations: Recommendation[] = [
  {
    id: "1",
    type: "komoditas",
    title: "Diversifikasi ke Cabai Merah",
    description: "Kondisi agroklimat sangat mendukung untuk budidaya cabai merah dengan potensi hasil 8-10 ton/ha",
    village: "Desa Sukamaju",
    priority: "high",
    impact: "Peningkatan pendapatan petani hingga 40%",
    status: "new",
  },
  {
    id: "2",
    type: "investasi",
    title: "Pembangunan Cold Storage",
    description: "Diperlukan fasilitas penyimpanan berpendingin untuk mengurangi loss pascapanen yang mencapai 25%",
    village: "Desa Pantai Indah",
    priority: "high",
    impact: "Pengurangan loss pascapanen hingga 15%",
    status: "in_progress",
  },
  {
    id: "3",
    type: "kelembagaan",
    title: "Penguatan Koperasi Tani",
    description: "Integrasi koperasi dengan marketplace digital untuk akses pasar yang lebih luas",
    village: "Desa Simpang Tiga",
    priority: "medium",
    impact: "Peningkatan volume transaksi 60%",
    status: "new",
  },
  {
    id: "4",
    type: "pasar",
    title: "Akses Pasar Ekspor",
    description: "Produk memenuhi standar ekspor ke Singapura dan Malaysia",
    village: "Desa Wisata Hijau",
    priority: "medium",
    impact: "Nilai jual produk naik 2x lipat",
    status: "completed",
  },
]

const typeConfig = {
  komoditas: { icon: TrendingUp, label: "Komoditas", color: "text-success" },
  investasi: { icon: Building2, label: "Investasi", color: "text-info" },
  kelembagaan: { icon: Building2, label: "Kelembagaan", color: "text-chart-2" },
  pasar: { icon: MapPin, label: "Pasar", color: "text-warning" },
}

const priorityConfig = {
  high: { label: "Prioritas Tinggi", color: "bg-destructive/20 text-destructive border-destructive/30" },
  medium: { label: "Prioritas Sedang", color: "bg-warning/20 text-warning border-warning/30" },
  low: { label: "Prioritas Rendah", color: "bg-muted text-muted-foreground border-muted" },
}

const statusConfig = {
  new: { icon: Lightbulb, label: "Baru", color: "text-info" },
  in_progress: { icon: Clock, label: "Dalam Proses", color: "text-warning" },
  completed: { icon: CheckCircle, label: "Selesai", color: "text-success" },
}

export function RecommendationPanel() {
  return (
    <div className="rounded-xl border border-border bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/20 p-2">
            <Lightbulb className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">Rekomendasi AI</h3>
            <p className="text-sm text-muted-foreground">
              Saran berdasarkan analisis data terkini
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm">
          Lihat Semua
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      {/* Recommendation List */}
      <div className="divide-y divide-border">
        {recommendations.map((rec) => {
          const TypeIcon = typeConfig[rec.type].icon
          const StatusIcon = statusConfig[rec.status].icon

          return (
            <div
              key={rec.id}
              className="group p-5 transition-colors hover:bg-secondary/50"
            >
              <div className="flex items-start gap-4">
                <div className={cn("rounded-lg bg-secondary p-2", typeConfig[rec.type].color)}>
                  <TypeIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-card-foreground group-hover:text-primary">
                        {rec.title}
                      </h4>
                      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {rec.village}
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={cn("border", priorityConfig[rec.priority].color)}
                    >
                      {priorityConfig[rec.priority].label}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{rec.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5">
                      <TrendingUp className="h-3 w-3 text-primary" />
                      <span className="text-xs text-primary">{rec.impact}</span>
                    </div>
                    <div className={cn("flex items-center gap-1 text-xs", statusConfig[rec.status].color)}>
                      <StatusIcon className="h-3 w-3" />
                      {statusConfig[rec.status].label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function AlertsPanel() {
  const alerts = [
    {
      id: "1",
      type: "warning",
      title: "Risiko Gagal Panen Terdeteksi",
      message: "5 desa di Kabupaten Bandung mengalami kekurangan air untuk lahan padi",
      time: "2 jam lalu",
    },
    {
      id: "2",
      type: "info",
      title: "Harga Cabai Turun 15%",
      message: "Over supply di pasar regional Jawa Barat",
      time: "4 jam lalu",
    },
    {
      id: "3",
      type: "success",
      title: "Target Produksi Tercapai",
      message: "Klaster desa hortikultura Magelang mencapai 120% target",
      time: "1 hari lalu",
    },
  ]

  const alertConfig = {
    warning: { icon: AlertTriangle, color: "text-warning bg-warning/10" },
    info: { icon: Lightbulb, color: "text-info bg-info/10" },
    success: { icon: CheckCircle, color: "text-success bg-success/10" },
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-lg bg-warning/20 p-2">
          <AlertTriangle className="h-5 w-5 text-warning" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">Alert Terkini</h3>
          <p className="text-sm text-muted-foreground">Peringatan dan notifikasi penting</p>
        </div>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => {
          const config = alertConfig[alert.type as keyof typeof alertConfig]
          const Icon = config.icon

          return (
            <div
              key={alert.id}
              className="flex gap-3 rounded-lg border border-border bg-secondary/30 p-4 transition-colors hover:bg-secondary/50"
            >
              <div className={cn("rounded-lg p-2", config.color)}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-card-foreground">{alert.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{alert.message}</p>
                <p className="mt-2 text-xs text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
