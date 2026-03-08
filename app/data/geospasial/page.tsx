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
  Mountain,
  TreePine,
  Droplets,
  Building2,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  MapPin,
  Navigation,
} from "lucide-react"
import { villages } from "@/lib/mock-data"

// Dynamically import the map to avoid SSR issues
const InteractiveMap = dynamic(
  () => import("@/components/ui/interactive-map").then(mod => mod.InteractiveMap),
  { ssr: false, loading: () => <div className="h-[500px] w-full animate-pulse rounded-lg bg-secondary flex items-center justify-center"><p className="text-muted-foreground">Memuat peta...</p></div> }
)

const layerData = [
  {
    id: "1",
    nama: "Batas Administratif Desa",
    kategori: "Administratif",
    format: "GeoJSON",
    ukuran: "2.4 GB",
    lastUpdate: "2024-03-01",
    status: "aktif",
    coverage: 100,
  },
  {
    id: "2",
    nama: "Peta Penggunaan Lahan",
    kategori: "Tematik",
    format: "Shapefile",
    ukuran: "1.8 GB",
    lastUpdate: "2024-02-28",
    status: "aktif",
    coverage: 98,
  },
  {
    id: "3",
    nama: "Digital Elevation Model (DEM)",
    kategori: "Topografi",
    format: "GeoTIFF",
    ukuran: "5.2 GB",
    lastUpdate: "2024-02-15",
    status: "aktif",
    coverage: 95,
  },
  {
    id: "4",
    nama: "Jaringan Sungai",
    kategori: "Hidrologi",
    format: "GeoJSON",
    ukuran: "890 MB",
    lastUpdate: "2024-02-20",
    status: "aktif",
    coverage: 92,
  },
  {
    id: "5",
    nama: "Peta Kawasan Hutan",
    kategori: "Kehutanan",
    format: "Shapefile",
    ukuran: "1.2 GB",
    lastUpdate: "2024-01-30",
    status: "proses",
    coverage: 85,
  },
  {
    id: "6",
    nama: "Infrastruktur Jalan",
    kategori: "Infrastruktur",
    format: "GeoJSON",
    ukuran: "650 MB",
    lastUpdate: "2024-03-05",
    status: "aktif",
    coverage: 97,
  },
]

// Calculate stats
const totalLayers = layerData.length
const activeLayers = layerData.filter(l => l.status === "aktif").length
const totalStorage = layerData.reduce((sum, l) => {
  const size = parseFloat(l.ukuran)
  const unit = l.ukuran.includes("GB") ? 1024 : 1
  return sum + (size * unit)
}, 0)

export default function GeospasialPage() {
  return (
    <DashboardLayout
      title="Data Geospasial"
      description="Pengelolaan data spasial termasuk peta, citra satelit, dan layer tematik"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Data Layer" },
        { label: "Data Geospasial" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Layer"
          value={totalLayers.toString()}
          change={8.5}
          changeLabel="layer aktif"
          icon={<Layers className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Citra Satelit"
          value="2,450"
          change={15.2}
          changeLabel="scene baru"
          icon={<Map className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Total Storage"
          value={(totalStorage / 1024).toFixed(1) + " TB"}
          change={12.3}
          changeLabel="dari bulan lalu"
          icon={<Mountain className="h-5 w-5 text-warning" />}
        />
        <StatsCard
          title="Desa Tercakup"
          value={villages.length.toString()}
          change={100}
          changeLabel="coverage"
          icon={<Building2 className="h-5 w-5 text-success" />}
        />
      </div>

      {/* Map Viewer */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-card-foreground">Peta Interaktif - Sebaran Desa</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary text-primary">
              <Navigation className="mr-1 h-3 w-3" />
              {villages.length} Desa Terpetakan
            </Badge>
            <Button variant="outline" size="icon">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <InteractiveMap
              villages={villages}
              height="500px"
              onViewVillage={(village) => toast.info(`Melihat detail ${village.name}`)}
            />

            {/* Map Controls Overlay */}
            <div className="absolute left-4 top-4 z-10 space-y-2">
              <Card className="border-border bg-card/95 backdrop-blur">
                <CardContent className="p-3">
                  <p className="mb-2 text-xs font-medium text-muted-foreground">LAYER AKTIF</p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-card-foreground cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      Batas Desa
                    </label>
                    <label className="flex items-center gap-2 text-sm text-card-foreground cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      Penggunaan Lahan
                    </label>
                    <label className="flex items-center gap-2 text-sm text-card-foreground cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      Topografi
                    </label>
                    <label className="flex items-center gap-2 text-sm text-card-foreground cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      Sungai
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 right-4 z-10">
              <Card className="border-border bg-card/95 backdrop-blur">
                <CardContent className="p-3">
                  <p className="mb-2 text-xs font-medium text-muted-foreground">LEGENDA DNA SCORE</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-success" />
                      <span className="text-xs text-card-foreground">Tinggi (85+)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-warning" />
                      <span className="text-xs text-card-foreground">Sedang (75-85)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-destructive" />
                      <span className="text-xs text-card-foreground">Rendah (&lt;75)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layer Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="bg-secondary">
            <TabsTrigger value="all">Semua Layer ({totalLayers})</TabsTrigger>
            <TabsTrigger value="administratif">Administratif</TabsTrigger>
            <TabsTrigger value="tematik">Tematik</TabsTrigger>
            <TabsTrigger value="topografi">Topografi</TabsTrigger>
          </TabsList>
          <Button className="gap-2">
            <Layers className="h-4 w-4" />
            Upload Layer
          </Button>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {layerData.map((layer) => (
              <Card key={layer.id} className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/20 p-2">
                        {layer.kategori === "Administratif" && (
                          <Building2 className="h-5 w-5 text-primary" />
                        )}
                        {layer.kategori === "Tematik" && (
                          <Layers className="h-5 w-5 text-info" />
                        )}
                        {layer.kategori === "Topografi" && (
                          <Mountain className="h-5 w-5 text-warning" />
                        )}
                        {layer.kategori === "Hidrologi" && (
                          <Droplets className="h-5 w-5 text-info" />
                        )}
                        {layer.kategori === "Kehutanan" && (
                          <TreePine className="h-5 w-5 text-success" />
                        )}
                        {layer.kategori === "Infrastruktur" && (
                          <Map className="h-5 w-5 text-chart-2" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">{layer.nama}</p>
                        <p className="text-sm text-muted-foreground">{layer.kategori}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-border">
                      {layer.format}
                    </Badge>
                    <Badge variant="outline" className="border-border">
                      {layer.ukuran}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className={
                        layer.status === "aktif"
                          ? "bg-success/20 text-success"
                          : "bg-warning/20 text-warning"
                      }
                    >
                      {layer.status === "aktif" ? "Aktif" : "Proses"}
                    </Badge>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Coverage</span>
                      <span className="font-semibold text-foreground">{layer.coverage}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div 
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${layer.coverage}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Update: {layer.lastUpdate}
                    </span>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="administratif">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {layerData.filter(l => l.kategori === "Administratif").map((layer) => (
              <Card key={layer.id} className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{layer.nama}</p>
                      <p className="text-sm text-muted-foreground">{layer.format} • {layer.ukuran}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tematik">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {layerData.filter(l => l.kategori === "Tematik").map((layer) => (
              <Card key={layer.id} className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="h-8 w-8 text-info" />
                    <div>
                      <p className="font-semibold text-foreground">{layer.nama}</p>
                      <p className="text-sm text-muted-foreground">{layer.format} • {layer.ukuran}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="topografi">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {layerData.filter(l => l.kategori === "Topografi").map((layer) => (
              <Card key={layer.id} className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mountain className="h-8 w-8 text-warning" />
                    <div>
                      <p className="font-semibold text-foreground">{layer.nama}</p>
                      <p className="text-sm text-muted-foreground">{layer.format} • {layer.ukuran}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
