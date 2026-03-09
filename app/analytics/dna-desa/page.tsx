"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { DetailDialog } from "@/components/ui/crud-dialogs"
import {
  Brain,
  Dna,
  MapPin,
  TrendingUp,
  TrendingDown,
  Thermometer,
  Droplets,
  Mountain,
  Users,
  Building2,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Target,
} from "lucide-react"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts"

const dnaMetrics = [
  { subject: "Produktivitas", A: 85, fullMark: 100 },
  { subject: "Infrastruktur", A: 72, fullMark: 100 },
  { subject: "SDM", A: 68, fullMark: 100 },
  { subject: "Ekonomi", A: 78, fullMark: 100 },
  { subject: "Sosial", A: 82, fullMark: 100 },
  { subject: "Lingkungan", A: 75, fullMark: 100 },
]

const villageTypes = [
  { type: "Pertanian", count: 37674, color: "var(--color-success)" },
  { type: "Perikanan", count: 20930, color: "var(--color-info)" },
  { type: "Wisata", count: 16744, color: "var(--color-warning)" },
  { type: "Logistik", count: 8373, color: "var(--color-chart-2)" },
]

// Sample village for detailed view
const selectedVillage = {
  id: "V001",
  name: "Sukamaju",
  kabupaten: "Garut",
  province: "Jawa Barat",
  type: "Pertanian",
  score: 92,
  population: 4520,
  strengths: [
    { title: "Lahan Subur", description: "Tanah latosol dengan kesuburan tinggi" },
    { title: "Irigasi Teknis", description: "Sistem irigasi modern 98% coverage" },
    { title: "SDM Terlatih", description: "85% petani tersertifikasi GAP" },
    { title: "Akses Pasar Baik", description: "Jarak ke pasar induk 15 km" }
  ],
  problems: [
    { title: "Cold Storage Terbatas", description: "Kapasitas hanya 30% dari kebutuhan", severity: "high" },
    { title: "Modal Kerja Kurang", description: "60% petani kesulitan modal", severity: "medium" },
    { title: "Fluktuasi Harga", description: "Volatilitas harga cabai 40%", severity: "medium" }
  ],
  opportunities: [
    { title: "Ekspor Cabai", description: "Potensi pasar ekspor ke Singapura", potential: "high" },
    { title: "Agrowisata", description: "Lokasi strategis untuk wisata edukasi", potential: "medium" },
    { title: "Koperasi Digital", description: "Transformasi digital koperasi", potential: "high" },
    { title: "Pengolahan Pasca Panen", description: "Nilai tambah produk olahan", potential: "medium" }
  ]
}

const topVillages = [
  {
    id: "1",
    nama: "Sukamaju",
    kabupaten: "Garut",
    tipe: "Pertanian",
    score: 92,
    trend: "up",
    strengths: ["Irigasi Baik", "SDM Terlatih", "Akses Pasar"],
  },
  {
    id: "2",
    nama: "Cikondang",
    kabupaten: "Garut",
    tipe: "Perikanan",
    score: 88,
    trend: "up",
    strengths: ["Budidaya Modern", "Koperasi Aktif"],
  },
  {
    id: "3",
    nama: "Karanganyar",
    kabupaten: "Ngawi",
    tipe: "Wisata",
    score: 85,
    trend: "stable",
    strengths: ["Objek Wisata", "Infrastruktur"],
  },
  {
    id: "4",
    nama: "Gondanglegi",
    kabupaten: "Malang",
    tipe: "Logistik",
    score: 83,
    trend: "up",
    strengths: ["Lokasi Strategis", "Akses Jalan"],
  },
  {
    id: "5",
    nama: "Mekarjaya",
    kabupaten: "Karawang",
    tipe: "Pertanian",
    score: 81,
    trend: "down",
    strengths: ["Lahan Subur", "Pengairan"],
  },
]

const clusteringDimensions = [
  { dimension: "Topografi", description: "Ketinggian, kemiringan, jenis tanah", weight: 15 },
  { dimension: "Hidrologi", description: "Ketersediaan air, irigasi, curah hujan", weight: 20 },
  { dimension: "Demografi", description: "Populasi, kepadatan, struktur usia", weight: 15 },
  { dimension: "Ekonomi", description: "Pendapatan, mata pencaharian, UMKM", weight: 20 },
  { dimension: "Infrastruktur", description: "Jalan, listrik, internet, fasilitas", weight: 15 },
  { dimension: "Sosial", description: "Pendidikan, kesehatan, kelembagaan", weight: 15 },
]

export default function DNADesaPage() {
  const [detailOpen, setDetailOpen] = useState(false)
  const [selectedVillageItem, setSelectedVillageItem] = useState<typeof topVillages[0] | null>(null)
  
  const handleViewVillage = (village: typeof topVillages[0]) => {
    setSelectedVillageItem(village)
    setDetailOpen(true)
  }
  
  return (
    <DashboardLayout
      title="DNA Desa Engine"
      description="Profiling dan clustering desa berdasarkan karakteristik multidimensional"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Analytics Layer" },
        { label: "DNA Desa Engine" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Desa Terprofilkan"
          value="83,721"
          change={100}
          changeLabel="coverage"
          icon={<Dna className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Cluster Terbentuk"
          value="4"
          change={0}
          changeLabel="tipe utama"
          icon={<Brain className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Dimensi Analisis"
          value="6"
          change={2}
          changeLabel="ditambahkan"
          icon={<Mountain className="h-5 w-5 text-warning" />}
        />
        <StatsCard
          title="Akurasi Model"
          value="94.2%"
          change={2.5}
          changeLabel="improvement"
          icon={<TrendingUp className="h-5 w-5 text-success" />}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* DNA Radar Chart */}
        <Card className="lg:col-span-2 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Profil DNA Agregat Nasional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <ResponsiveContainer width="60%" height={300}>
                <RadarChart data={dnaMetrics}>
                  <PolarGrid stroke="var(--color-border)" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 10 }}
                  />
                  <Radar
                    name="Score"
                    dataKey="A"
                    stroke="var(--color-primary)"
                    fill="var(--color-primary)"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-3">
                {dnaMetrics.map((metric) => (
                  <div key={metric.subject}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-card-foreground">{metric.subject}</span>
                      <span className="font-semibold text-card-foreground">{metric.A}%</span>
                    </div>
                    <Progress value={metric.A} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Village Type Distribution */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Distribusi Tipe Desa</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={villageTypes} layout="vertical">
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="type"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  width={80}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                  {villageTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {villageTypes.map((item) => (
                <div key={item.type} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded" style={{ backgroundColor: item.color }} />
                    <span className="text-card-foreground">{item.type}</span>
                  </div>
                  <span className="text-muted-foreground">
                    {item.count.toLocaleString("id-ID")} desa
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Strengths, Problems, Opportunities - PowerPoint Slide 8 */}
      <div className="my-8 grid gap-6 lg:grid-cols-3">
        {/* Strengths */}
        <Card className="border-success/30 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-success">
              <CheckCircle2 className="h-5 w-5" />
              Kekuatan (Strengths)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {selectedVillage.strengths.map((strength, index) => (
              <div key={index} className="rounded-lg bg-success/10 p-3">
                <h4 className="font-semibold text-card-foreground">{strength.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{strength.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Problems */}
        <Card className="border-warning/30 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertTriangle className="h-5 w-5" />
              Masalah (Problems)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {selectedVillage.problems.map((problem, index) => (
              <div key={index} className="rounded-lg bg-warning/10 p-3">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-card-foreground">{problem.title}</h4>
                  <Badge
                    variant="outline"
                    className={
                      problem.severity === "high"
                        ? "border-destructive text-destructive"
                        : "border-warning text-warning"
                    }
                  >
                    {problem.severity === "high" ? "Tinggi" : "Sedang"}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Opportunities */}
        <Card className="border-info/30 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-info">
              <Lightbulb className="h-5 w-5" />
              Peluang (Opportunities)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {selectedVillage.opportunities.map((opportunity, index) => (
              <div key={index} className="rounded-lg bg-info/10 p-3">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-card-foreground">{opportunity.title}</h4>
                  <Badge
                    variant="outline"
                    className={
                      opportunity.potential === "high"
                        ? "border-success text-success"
                        : "border-info text-info"
                    }
                  >
                    {opportunity.potential === "high" ? "Tinggi" : "Sedang"}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{opportunity.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Clustering Dimensions */}
      <Card className="my-8 border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Dimensi Clustering</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clusteringDimensions.map((dim) => (
              <div key={dim.dimension} className="rounded-lg bg-secondary p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-card-foreground">{dim.dimension}</span>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {dim.weight}%
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{dim.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Villages */}
      <Tabs defaultValue="top" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="top">Top Performer</TabsTrigger>
          <TabsTrigger value="priority">Prioritas</TabsTrigger>
          <TabsTrigger value="potential">Potensi Tinggi</TabsTrigger>
        </TabsList>

        <TabsContent value="top" className="space-y-4">
          {topVillages.map((village, index) => (
            <Card key={village.id} className="border-border bg-card">
              <CardContent className="py-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-lg font-bold text-primary shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-card-foreground">{village.nama}</h3>
                        <Badge
                          variant="secondary"
                          className={
                            village.tipe === "Pertanian"
                              ? "bg-success/20 text-success"
                              : village.tipe === "Perikanan"
                                ? "bg-info/20 text-info"
                                : village.tipe === "Wisata"
                                  ? "bg-warning/20 text-warning"
                                  : "bg-chart-2/20 text-chart-2"
                          }
                        >
                          {village.tipe}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Kabupaten {village.kabupaten}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {village.strengths.map((strength) => (
                          <Badge key={strength} variant="outline" className="border-border text-xs">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-card-foreground">{village.score}</p>
                        <div className="flex items-center gap-1 text-xs">
                          {village.trend === "up" ? (
                            <TrendingUp className="h-3 w-3 text-success" />
                          ) : village.trend === "down" ? (
                            <TrendingDown className="h-3 w-3 text-destructive" />
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                          <span
                            className={
                              village.trend === "up"
                                ? "text-success"
                                : village.trend === "down"
                                  ? "text-destructive"
                                  : "text-muted-foreground"
                            }
                          >
                            {village.trend === "up"
                              ? "Naik"
                              : village.trend === "down"
                                ? "Turun"
                                : "Stabil"}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleViewVillage(village)}>
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="priority">
          <Card className="border-border bg-card p-8 text-center">
            <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Daftar desa prioritas akan ditampilkan di sini</p>
          </Card>
        </TabsContent>

        <TabsContent value="potential">
          <Card className="border-border bg-card p-8 text-center">
            <TrendingUp className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Daftar desa potensi tinggi akan ditampilkan di sini</p>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Village Detail Dialog */}
      <DetailDialog
        open={detailOpen}
        onOpenChange={setDetailOpen}
        title={selectedVillageItem?.nama || "Detail Desa"}
      >
        {selectedVillageItem && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Badge variant="outline" className="capitalize">{selectedVillageItem.tipe}</Badge>
              <Badge
                variant="outline"
                className={
                  selectedVillageItem.score >= 85
                    ? "border-success text-success"
                    : selectedVillageItem.score >= 70
                      ? "border-warning text-warning"
                      : "border-destructive text-destructive"
                }
              >
                Skor: {selectedVillageItem.score}/100
              </Badge>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Lokasi</h4>
              <p className="text-muted-foreground">{selectedVillageItem.kabupaten}</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Trend</h4>
              <p className={
                selectedVillageItem.trend === "up"
                  ? "text-success"
                  : selectedVillageItem.trend === "down"
                    ? "text-destructive"
                    : "text-muted-foreground"
              }>
                {selectedVillageItem.trend === "up" ? "📈 Naik" : selectedVillageItem.trend === "down" ? "📉 Turun" : "↔ Stabil"}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Kekuatan</h4>
              <div className="flex flex-wrap gap-2">
                {selectedVillageItem.strengths.map((strength, index) => (
                  <Badge key={index} variant="secondary" className="bg-success/10 text-success">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    {strength}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <Button className="w-full" onClick={() => setDetailOpen(false)}>
                <Target className="mr-2 h-4 w-4" />
                Lihat Profil Lengkap
              </Button>
            </div>
          </div>
        )}
      </DetailDialog>
    </DashboardLayout>
  )
}
ashboardLayout>
  )
}
