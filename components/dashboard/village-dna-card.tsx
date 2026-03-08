"use client"

import { cn } from "@/lib/utils"
import { MapPin, Droplets, Thermometer, Users, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface VillageDNA {
  id: string
  name: string
  province: string
  type: "pertanian" | "perikanan" | "wisata" | "logistik"
  score: number
  population: number
  mainCommodity: string
  climate: {
    rainfall: number
    temperature: number
  }
  strengths: string[]
  challenges: string[]
}

const typeConfig = {
  pertanian: { label: "Pertanian", color: "bg-success/20 text-success border-success/30" },
  perikanan: { label: "Perikanan", color: "bg-info/20 text-info border-info/30" },
  wisata: { label: "Wisata", color: "bg-chart-2/20 text-chart-2 border-chart-2/30" },
  logistik: { label: "Logistik", color: "bg-warning/20 text-warning border-warning/30" },
}

export function VillageDNACard({ village }: { village: VillageDNA }) {
  const config = typeConfig[village.type]

  return (
    <div className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-card-foreground group-hover:text-primary">
            {village.name}
          </h3>
          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{village.province}</span>
          </div>
        </div>
        <Badge variant="outline" className={cn("border", config.color)}>
          {config.label}
        </Badge>
      </div>

      {/* Score */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Skor Potensi</span>
          <span className="font-semibold text-primary">{village.score}/100</span>
        </div>
        <Progress value={village.score} className="mt-2 h-2" />
      </div>

      {/* Key Metrics */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-secondary/50 p-2 text-center">
          <Users className="mx-auto h-4 w-4 text-muted-foreground" />
          <p className="mt-1 text-xs text-muted-foreground">Penduduk</p>
          <p className="text-sm font-medium text-card-foreground">
            {village.population.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="rounded-lg bg-secondary/50 p-2 text-center">
          <Droplets className="mx-auto h-4 w-4 text-muted-foreground" />
          <p className="mt-1 text-xs text-muted-foreground">Curah Hujan</p>
          <p className="text-sm font-medium text-card-foreground">{village.climate.rainfall} mm</p>
        </div>
        <div className="rounded-lg bg-secondary/50 p-2 text-center">
          <Thermometer className="mx-auto h-4 w-4 text-muted-foreground" />
          <p className="mt-1 text-xs text-muted-foreground">Suhu</p>
          <p className="text-sm font-medium text-card-foreground">{village.climate.temperature}°C</p>
        </div>
      </div>

      {/* Main Commodity */}
      <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2">
        <TrendingUp className="h-4 w-4 text-primary" />
        <span className="text-sm text-card-foreground">
          Komoditas Utama: <strong>{village.mainCommodity}</strong>
        </span>
      </div>

      {/* Strengths & Challenges */}
      <div className="mt-4 space-y-2">
        <div>
          <p className="text-xs font-medium text-success">Kekuatan:</p>
          <div className="mt-1 flex flex-wrap gap-1">
            {village.strengths.slice(0, 2).map((strength) => (
              <span
                key={strength}
                className="rounded-full bg-success/10 px-2 py-0.5 text-xs text-success"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-warning">Tantangan:</p>
          <div className="mt-1 flex flex-wrap gap-1">
            {village.challenges.slice(0, 2).map((challenge) => (
              <span
                key={challenge}
                className="rounded-full bg-warning/10 px-2 py-0.5 text-xs text-warning"
              >
                {challenge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data export for use in the main page
export const sampleVillages: VillageDNA[] = [
  {
    id: "1",
    name: "Desa Sukamaju",
    province: "Jawa Barat",
    type: "pertanian",
    score: 85,
    population: 4520,
    mainCommodity: "Padi & Cabai",
    climate: { rainfall: 2500, temperature: 26 },
    strengths: ["Lahan Subur", "Irigasi Baik"],
    challenges: ["Cold Storage", "Akses Pasar"],
  },
  {
    id: "2",
    name: "Desa Pantai Indah",
    province: "Sulawesi Selatan",
    type: "perikanan",
    score: 78,
    population: 3200,
    mainCommodity: "Udang & Ikan",
    climate: { rainfall: 1800, temperature: 28 },
    strengths: ["Akses Laut", "SDM Terampil"],
    challenges: ["Modal Kerja", "Teknologi"],
  },
  {
    id: "3",
    name: "Desa Wisata Hijau",
    province: "Bali",
    type: "wisata",
    score: 92,
    population: 2100,
    mainCommodity: "Pariwisata",
    climate: { rainfall: 2000, temperature: 27 },
    strengths: ["Destinasi Populer", "Budaya Kuat"],
    challenges: ["Over Tourism", "Sampah"],
  },
  {
    id: "4",
    name: "Desa Simpang Tiga",
    province: "Sumatera Utara",
    type: "logistik",
    score: 70,
    population: 5800,
    mainCommodity: "Distribusi",
    climate: { rainfall: 2200, temperature: 29 },
    strengths: ["Lokasi Strategis", "Infrastruktur"],
    challenges: ["Kepadatan", "Polusi"],
  },
]
