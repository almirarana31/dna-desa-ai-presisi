"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Lightbulb,
  Sprout,
  DollarSign,
  Building2,
  ShoppingCart,
  FileText,
  TrendingUp,
  Target,
  CheckCircle2,
  Brain,
  Zap,
  ArrowRight,
} from "lucide-react"
import { recommendations } from "@/lib/mock-data"

// Filter recommendations by category - PowerPoint Slide 10
const komoditasRecs = recommendations.filter(r => r.category === "komoditas")
const investasiRecs = recommendations.filter(r => r.category === "investasi")
const kelembagaanRecs = recommendations.filter(r => r.category === "kelembagaan")
const pasarRecs = recommendations.filter(r => r.category === "pasar")
const programRecs = recommendations.filter(r => r.category === "program")

// Calculate statistics
const totalRecs = recommendations.length
const highPriorityRecs = recommendations.filter(r => r.priority === "tinggi").length
const avgROI = recommendations.reduce((sum, r) => sum + r.roi, 0) / recommendations.length
const avgConfidence = recommendations.reduce((sum, r) => sum + r.aiConfidence, 0) / recommendations.length

// Category configuration
const categoryConfig = {
  komoditas: {
    icon: Sprout,
    color: "success",
    title: "Komoditas",
    description: "Rekomendasi pengembangan komoditas unggulan",
    count: komoditasRecs.length
  },
  investasi: {
    icon: DollarSign,
    color: "info",
    title: "Investasi",
    description: "Peluang investasi infrastruktur dan teknologi",
    count: investasiRecs.length
  },
  kelembagaan: {
    icon: Building2,
    color: "warning",
    title: "Kelembagaan",
    description: "Penguatan kelembagaan dan koperasi",
    count: kelembagaanRecs.length
  },
  pasar: {
    icon: ShoppingCart,
    color: "chart-2",
    title: "Pasar",
    description: "Akses pasar dan ekspansi penjualan",
    count: pasarRecs.length
  },
  program: {
    icon: FileText,
    color: "primary",
    title: "Program",
    description: "Program pemberdayaan dan pelatihan",
    count: programRecs.length
  }
}

export default function RecommendationEnginePage() {
  return (
    <DashboardLayout
      title="Recommendation Engine"
      description="Rekomendasi berbasis AI untuk pengembangan desa dalam 5 kategori utama"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Analytics Layer" },
        { label: "Recommendation Engine" },
      ]}
    >
      {/* Stats Overview */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Rekomendasi"
          value={totalRecs.toString()}
          change={18}
          changeLabel="dari bulan lalu"
          icon={<Lightbulb className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Prioritas Tinggi"
          value={highPriorityRecs.toString()}
          change={12}
          changeLabel="rekomendasi urgent"
          icon={<Zap className="h-5 w-5 text-warning" />}
        />
        <StatsCard
          title="Rata-rata ROI"
          value={`${avgROI.toFixed(0)}%`}
          change={25}
          changeLabel="return on investment"
          icon={<TrendingUp className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="AI Confidence"
          value={`${avgConfidence.toFixed(0)}%`}
          change={5}
          changeLabel="akurasi prediksi"
          icon={<Brain className="h-5 w-5 text-info" />}
        />
      </div>

      {/* 5 Categories Overview - PowerPoint Slide 10 */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {Object.entries(categoryConfig).map(([key, config]) => {
          const Icon = config.icon
          return (
            <Card key={key} className={`border-${config.color}/30 bg-card`}>
              <CardContent className="py-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`rounded-lg bg-${config.color}/20 p-3`}>
                    <Icon className={`h-8 w-8 text-${config.color}`} />
                  </div>
                  <h3 className="mt-3 font-semibold text-card-foreground">{config.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{config.description}</p>
                  <Badge variant="outline" className={`mt-3 border-${config.color} text-${config.color}`}>
                    {config.count} Rekomendasi
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recommendation Tabs by Category */}
      <Tabs defaultValue="komoditas" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="komoditas" className="gap-2">
            <Sprout className="h-4 w-4" />
            Komoditas ({komoditasRecs.length})
          </TabsTrigger>
          <TabsTrigger value="investasi" className="gap-2">
            <DollarSign className="h-4 w-4" />
            Investasi ({investasiRecs.length})
          </TabsTrigger>
          <TabsTrigger value="kelembagaan" className="gap-2">
            <Building2 className="h-4 w-4" />
            Kelembagaan ({kelembagaanRecs.length})
          </TabsTrigger>
          <TabsTrigger value="pasar" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Pasar ({pasarRecs.length})
          </TabsTrigger>
          <TabsTrigger value="program" className="gap-2">
            <FileText className="h-4 w-4" />
            Program ({programRecs.length})
          </TabsTrigger>
        </TabsList>

        {/* Komoditas Tab */}
        <TabsContent value="komoditas" className="space-y-4">
          {komoditasRecs.slice(0, 8).map((rec) => (
            <Card key={rec.id} className="border-border bg-card">
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-success/20 p-3">
                    <Sprout className="h-6 w-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-card-foreground">{rec.title}</h3>
                          <Badge
                            variant="outline"
                            className={
                              rec.priority === "tinggi"
                                ? "border-destructive text-destructive"
                                : rec.priority === "sedang"
                                  ? "border-warning text-warning"
                                  : "border-info text-info"
                            }
                          >
                            {rec.priority === "tinggi" ? "Prioritas Tinggi" : rec.priority === "sedang" ? "Sedang" : "Rendah"}
                          </Badge>
                          <Badge variant="outline" className="border-primary text-primary capitalize">
                            {rec.timeframe}
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{rec.villageName}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">ROI</p>
                        <p className="text-2xl font-bold text-success">{rec.roi}%</p>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-card-foreground">{rec.description}</p>

                    <div className="mt-4 rounded-lg bg-secondary/50 p-3">
                      <p className="text-xs font-medium text-muted-foreground">Rationale:</p>
                      <p className="mt-1 text-sm text-card-foreground">{rec.rationale}</p>
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="rounded-lg bg-background/50 p-3">
                        <p className="text-xs text-muted-foreground">Investasi</p>
                        <p className="mt-1 text-sm font-semibold text-card-foreground">
                          Rp {rec.estimatedCost.toLocaleString("id-ID")} juta
                        </p>
                      </div>
                      <div className="rounded-lg bg-background/50 p-3">
                        <p className="text-xs text-muted-foreground">Revenue</p>
                        <p className="mt-1 text-sm font-semibold text-card-foreground">
                          Rp {rec.estimatedRevenue.toLocaleString("id-ID")} juta
                        </p>
                      </div>
                      <div className="rounded-lg bg-background/50 p-3">
                        <p className="text-xs text-muted-foreground">Kelayakan</p>
                        <div className="mt-1 flex items-center gap-2">
                          <Progress value={rec.feasibility} className="h-2 flex-1" />
                          <span className="text-xs font-medium text-card-foreground">{rec.feasibility}%</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-background/50 p-3">
                        <p className="text-xs text-muted-foreground">AI Confidence</p>
                        <div className="mt-1 flex items-center gap-2">
                          <Progress value={rec.aiConfidence} className="h-2 flex-1" />
                          <span className="text-xs font-medium text-card-foreground">{rec.aiConfidence}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs font-medium text-muted-foreground">Expected Impact:</p>
                      <p className="mt-1 text-sm font-medium text-success">{rec.expectedImpact}</p>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs font-medium text-muted-foreground">Sumber Daya Dibutuhkan:</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {rec.requiredResources.map((resource, index) => (
                          <Badge key={index} variant="secondary">
                            {resource}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="default">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Setujui Rekomendasi
                      </Button>
                      <Button size="sm" variant="outline">
                        <Target className="mr-2 h-4 w-4" />
                        Buat Rencana Aksi
                      </Button>
                      <Button size="sm" variant="outline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Detail Lengkap
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Investasi Tab */}
        <TabsContent value="investasi" className="space-y-4">
          {investasiRecs.slice(0, 8).map((rec) => (
            <Card key={rec.id} className="border-border bg-card">
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-info/20 p-3">
                    <DollarSign className="h-6 w-6 text-info" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground">{rec.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{rec.villageName}</p>
                    <p className="mt-2 text-sm text-card-foreground">{rec.description}</p>
                    
                    <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Investasi: </span>
                        <span className="font-semibold">Rp {rec.estimatedCost} juta</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Revenue: </span>
                        <span className="font-semibold">Rp {rec.estimatedRevenue} juta</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">ROI: </span>
                        <span className="font-semibold text-success">{rec.roi}%</span>
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <Button size="sm">Setujui</Button>
                      <Button size="sm" variant="outline">Detail</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Kelembagaan Tab */}
        <TabsContent value="kelembagaan" className="space-y-4">
          {kelembagaanRecs.slice(0, 8).map((rec) => (
            <Card key={rec.id} className="border-border bg-card">
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-warning/20 p-3">
                    <Building2 className="h-6 w-6 text-warning" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground">{rec.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{rec.villageName}</p>
                    <p className="mt-2 text-sm text-card-foreground">{rec.description}</p>
                    
                    <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Investasi: </span>
                        <span className="font-semibold">Rp {rec.estimatedCost} juta</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Revenue: </span>
                        <span className="font-semibold">Rp {rec.estimatedRevenue} juta</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">ROI: </span>
                        <span className="font-semibold text-success">{rec.roi}%</span>
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <Button size="sm">Setujui</Button>
                      <Button size="sm" variant="outline">Detail</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Pasar Tab */}
        <TabsContent value="pasar" className="space-y-4">
          {pasarRecs.slice(0, 8).map((rec) => (
            <Card key={rec.id} className="border-border bg-card">
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-chart-2/20 p-3">
                    <ShoppingCart className="h-6 w-6 text-chart-2" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground">{rec.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{rec.villageName}</p>
                    <p className="mt-2 text-sm text-card-foreground">{rec.description}</p>
                    
                    <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Investasi: </span>
                        <span className="font-semibold">Rp {rec.estimatedCost} juta</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Revenue: </span>
                        <span className="font-semibold">Rp {rec.estimatedRevenue} juta</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">ROI: </span>
                        <span className="font-semibold text-success">{rec.roi}%</span>
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <Button size="sm">Setujui</Button>
                      <Button size="sm" variant="outline">Detail</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Program Tab */}
        <TabsContent value="program" className="space-y-4">
          {programRecs.slice(0, 8).map((rec) => (
            <Card key={rec.id} className="border-border bg-card">
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/20 p-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground">{rec.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{rec.villageName}</p>
                    <p className="mt-2 text-sm text-card-foreground">{rec.description}</p>
                    
                    <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Investasi: </span>
                        <span className="font-semibold">Rp {rec.estimatedCost} juta</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Revenue: </span>
                        <span className="font-semibold">Rp {rec.estimatedRevenue} juta</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">ROI: </span>
                        <span className="font-semibold text-success">{rec.roi}%</span>
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <Button size="sm">Setujui</Button>
                      <Button size="sm" variant="outline">Detail</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
