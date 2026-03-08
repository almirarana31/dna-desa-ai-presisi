"use client"

import dynamic from "next/dynamic"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"
import {
  Map,
  Layers,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Filter,
  Download,
  MapPin,
  Users,
  TrendingUp,
  Building2,
} from "lucide-react"
import { villages } from "@/lib/mock-data"

// Dynamically import the map to avoid SSR issues
const InteractiveMap = dynamic(
  () => import("@/components/ui/interactive-map").then(mod => mod.InteractiveMap),
  { ssr: false, loading: () => <div className="h-[500px] w-full animate-pulse rounded-lg bg-secondary flex items-center justify-center"><p className="text-muted-foreground">Memuat peta...</p></div> }
)

const provinsiData = [
  { nama: "Jawa Barat", desa: 5962, score: 78, tipe: "Pertanian" },
  { nama: "Jawa Tengah", desa: 8562, score: 75, tipe: "Pertanian" },
  { nama: "Jawa Timur", desa: 8501, score: 77, tipe: "Pertanian" },
  { nama: "Sumatera Utara", desa: 6132, score: 72, tipe: "Perkebunan" },
  { nama: "Sulawesi Selatan", desa: 3035, score: 74, tipe: "Perikanan" },
  { nama: "Kalimantan Timur", desa: 1032, score: 71, tipe: "Kehutanan" },
]

const filterOptions = {
  tipe: ["Semua", "Pertanian", "Perikanan", "Wisata", "Logistik"],
  score: ["Semua", "> 80", "70-80", "60-70", "< 60"],
  status: ["Semua", "Prioritas", "Berkembang", "Mandiri"],
}

export default function PetaDNAPage() {
  return (
    <DashboardLayout
      title="Peta DNA Desa"
      description="Visualisasi geospasial DNA Desa seluruh Indonesia dengan layer tematik"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Strategic Layer" },
        { label: "Peta DNA Desa" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Desa Terpetakan"
          value="83,721"
          change={100}
          changeLabel="coverage"
          icon={<MapPin className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Provinsi"
          value="38"
          change={0}
          changeLabel="lengkap"
          icon={<Building2 className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Skor Rata-rata"
          value="75.8"
          change={2.5}
          changeLabel="improvement"
          icon={<TrendingUp className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Desa Prioritas"
          value="8,452"
          change={-12}
          changeLabel="dari tahun lalu"
          icon={<Users className="h-5 w-5 text-warning" />}
        />
      </div>

      {/* Map Section */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-card-foreground">Peta DNA Desa Indonesia</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6">
            {/* Filters Sidebar */}
            <div className="w-64 space-y-4">
              <Card className="border-border bg-secondary">
                <CardContent className="p-4">
                  <p className="mb-3 text-sm font-semibold text-card-foreground">Filter Peta</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-xs text-muted-foreground">Tipe Desa</label>
                      <select className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-card-foreground">
                        {filterOptions.tipe.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs text-muted-foreground">Skor DNA</label>
                      <select className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-card-foreground">
                        {filterOptions.score.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs text-muted-foreground">Status</label>
                      <select className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-card-foreground">
                        {filterOptions.status.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <Button className="w-full gap-2">
                      <Filter className="h-4 w-4" />
                      Terapkan Filter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Layer Controls */}
              <Card className="border-border bg-secondary">
                <CardContent className="p-4">
                  <p className="mb-3 text-sm font-semibold text-card-foreground">Layer Tematik</p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-card-foreground">
                      <input type="checkbox" defaultChecked className="rounded" />
                      DNA Score Heatmap
                    </label>
                    <label className="flex items-center gap-2 text-sm text-card-foreground">
                      <input type="checkbox" defaultChecked className="rounded" />
                      Cluster Tipe Desa
                    </label>
                    <label className="flex items-center gap-2 text-sm text-card-foreground">
                      <input type="checkbox" className="rounded" />
                      Infrastruktur
                    </label>
                    <label className="flex items-center gap-2 text-sm text-card-foreground">
                      <input type="checkbox" className="rounded" />
                      Jaringan Logistik
                    </label>
                    <label className="flex items-center gap-2 text-sm text-card-foreground">
                      <input type="checkbox" className="rounded" />
                      Risiko Bencana
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Legend */}
              <Card className="border-border bg-secondary">
                <CardContent className="p-4">
                  <p className="mb-3 text-sm font-semibold text-card-foreground">Legenda Skor</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-success" />
                      <span className="text-xs text-card-foreground">80-100 (Mandiri)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-info" />
                      <span className="text-xs text-card-foreground">70-79 (Berkembang)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-warning" />
                      <span className="text-xs text-card-foreground">60-69 (Tertinggal)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-destructive" />
                      <span className="text-xs text-card-foreground">&lt; 60 (Prioritas)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Display */}
            <div className="flex-1">
              <div className="relative">
                <InteractiveMap
                  villages={villages}
                  height="500px"
                  onViewVillage={(village) => toast.info(`Melihat detail ${village.name}`)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Province Summary */}
      <Tabs defaultValue="provinsi" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="provinsi">Per Provinsi</TabsTrigger>
          <TabsTrigger value="cluster">Per Cluster</TabsTrigger>
          <TabsTrigger value="ranking">Ranking Desa</TabsTrigger>
        </TabsList>

        <TabsContent value="provinsi">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {provinsiData.map((prov) => (
              <Card key={prov.nama} className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-card-foreground">{prov.nama}</h3>
                      <p className="text-sm text-muted-foreground">{prov.desa.toLocaleString("id-ID")} desa</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        prov.tipe === "Pertanian"
                          ? "bg-success/20 text-success"
                          : prov.tipe === "Perikanan"
                            ? "bg-info/20 text-info"
                            : prov.tipe === "Perkebunan"
                              ? "bg-warning/20 text-warning"
                              : "bg-chart-2/20 text-chart-2"
                      }
                    >
                      {prov.tipe}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Skor Rata-rata</span>
                    <span
                      className={`text-2xl font-bold ${
                        prov.score >= 75
                          ? "text-success"
                          : prov.score >= 70
                            ? "text-info"
                            : "text-warning"
                      }`}
                    >
                      {prov.score}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cluster">
          <Card className="border-border bg-card p-8 text-center">
            <Layers className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Analisis per cluster akan ditampilkan di sini</p>
          </Card>
        </TabsContent>

        <TabsContent value="ranking">
          <Card className="border-border bg-card p-8 text-center">
            <TrendingUp className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Ranking desa akan ditampilkan di sini</p>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
