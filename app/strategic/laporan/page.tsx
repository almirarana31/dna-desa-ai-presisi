"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Calendar,
  BarChart3,
  PieChart,
  TrendingUp,
  Clock,
  CheckCircle,
  Plus,
  Filter,
  Eye,
  Share2,
  Printer,
  Sparkles,
} from "lucide-react"
import { AIInsights, generateInsights } from "@/components/ai/ai-insights"

const reports = [
  {
    id: "1",
    title: "Laporan Tahunan DNA Desa 2024",
    description: "Analisis komprehensif profil dan performa desa se-Indonesia tahun 2024",
    type: "Tahunan",
    category: "DNA Desa",
    date: "1 Januari 2025",
    status: "published",
    pages: 156,
    downloads: 2450,
  },
  {
    id: "2",
    title: "Laporan Bulanan Monitoring - Februari 2026",
    description: "Progress implementasi program dan capaian KPI bulanan",
    type: "Bulanan",
    category: "Monitoring",
    date: "5 Maret 2026",
    status: "published",
    pages: 45,
    downloads: 892,
  },
  {
    id: "3",
    title: "Analisis Potensi Pertanian Q1 2026",
    description: "Identifikasi potensi dan rekomendasi sektor pertanian kuartal pertama",
    type: "Kuartalan",
    category: "Pertanian",
    date: "15 April 2026",
    status: "draft",
    pages: 78,
    downloads: 0,
  },
  {
    id: "4",
    title: "Laporan Khusus: Dampak El Nino",
    description: "Analisis dampak fenomena El Nino terhadap produktivitas desa pertanian",
    type: "Khusus",
    category: "Mitigasi",
    date: "20 Februari 2026",
    status: "published",
    pages: 62,
    downloads: 1823,
  },
  {
    id: "5",
    title: "Evaluasi Program Irigasi 2025",
    description: "Evaluasi komprehensif program pembangunan irigasi di 180 desa",
    type: "Evaluasi",
    category: "Infrastruktur",
    date: "10 Januari 2026",
    status: "published",
    pages: 94,
    downloads: 567,
  },
]

const insights = [
  {
    title: "Peningkatan IPD Signifikan",
    description: "Indeks Pembangunan Desa naik 2.5% YoY, tertinggi di Pulau Jawa",
    impact: "positif",
    value: "+2.5%",
  },
  {
    title: "Gap Infrastruktur Digital",
    description: "18,000 desa masih memiliki koneksi internet di bawah standar",
    impact: "negatif",
    value: "21.5%",
  },
  {
    title: "Rekor Produksi Padi",
    description: "Produksi padi nasional mencapai rekor tertinggi 54.2 juta ton",
    impact: "positif",
    value: "+12.5%",
  },
  {
    title: "Adopsi Teknologi Pertanian",
    description: "35% desa pertanian sudah mengadopsi teknologi smart farming",
    impact: "positif",
    value: "35%",
  },
]

const reportTemplates = [
  { name: "Laporan Tahunan", icon: Calendar },
  { name: "Laporan Bulanan", icon: Clock },
  { name: "Analisis Potensi", icon: TrendingUp },
  { name: "Evaluasi Program", icon: CheckCircle },
  { name: "Dashboard Executive", icon: BarChart3 },
  { name: "Infografis", icon: PieChart },
]

export default function LaporanPage() {
  const aiInsights = generateInsights({}, "laporan")
  
  return (
    <DashboardLayout
      title="Laporan & Insight"
      description="Akses laporan analitik, insight strategis, dan dokumentasi pembangunan desa"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Strategic Layer" },
        { label: "Laporan & Insight" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Laporan"
          value="156"
          change={12}
          changeLabel="baru bulan ini"
          icon={<FileText className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Downloads"
          value="24,567"
          change={18.5}
          changeLabel="dari bulan lalu"
          icon={<Download className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Insight Aktif"
          value="48"
          change={8}
          changeLabel="baru"
          icon={<TrendingUp className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Scheduled"
          value="12"
          change={0}
          changeLabel="laporan terjadwal"
          icon={<Calendar className="h-5 w-5 text-warning" />}
        />
      </div>

      {/* Key Insights */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Key Insights Terkini</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {insights.map((insight) => (
              <div
                key={insight.title}
                className={`rounded-lg border p-4 ${
                  insight.impact === "positif"
                    ? "border-success/30 bg-success/10"
                    : "border-warning/30 bg-warning/10"
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className={
                      insight.impact === "positif"
                        ? "bg-success/20 text-success"
                        : "bg-warning/20 text-warning"
                    }
                  >
                    {insight.value}
                  </Badge>
                  <TrendingUp
                    className={`h-4 w-4 ${
                      insight.impact === "positif" ? "text-success" : "text-warning"
                    }`}
                  />
                </div>
                <h4 className="mb-1 font-semibold text-card-foreground">{insight.title}</h4>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI-Generated Strategic Insights */}
      <div className="mb-8">
        <AIInsights insights={aiInsights} title="AI-Generated Strategic Insights" />
      </div>

      {/* Report Templates */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-card-foreground">Buat Laporan Baru</CardTitle>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Custom Report
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {reportTemplates.map((template) => (
              <button
                key={template.name}
                className="flex flex-col items-center gap-3 rounded-lg border border-border bg-secondary p-4 transition-colors hover:bg-secondary/80"
              >
                <div className="rounded-lg bg-primary/20 p-3">
                  <template.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-card-foreground">{template.name}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="bg-secondary">
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="published">Dipublikasi</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="scheduled">Terjadwal</TabsTrigger>
          </TabsList>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <TabsContent value="all" className="space-y-4">
          {reports.map((report) => (
            <Card key={report.id} className="border-border bg-card">
              <CardContent className="py-4">
                <div className="flex items-center gap-6">
                  <div className="rounded-lg bg-primary/20 p-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="font-semibold text-card-foreground">{report.title}</h3>
                      <Badge
                        variant="secondary"
                        className={
                          report.status === "published"
                            ? "bg-success/20 text-success"
                            : "bg-warning/20 text-warning"
                        }
                      >
                        {report.status === "published" ? "Dipublikasi" : "Draft"}
                      </Badge>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">{report.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {report.date}
                      </span>
                      <Badge variant="outline" className="border-border">
                        {report.type}
                      </Badge>
                      <Badge variant="outline" className="border-border">
                        {report.category}
                      </Badge>
                      <span>{report.pages} halaman</span>
                      {report.status === "published" && (
                        <span className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {report.downloads.toLocaleString("id-ID")} downloads
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Eye className="h-4 w-4" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Printer className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="published">
          <Card className="border-border bg-card p-8 text-center">
            <CheckCircle className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Laporan yang sudah dipublikasi</p>
          </Card>
        </TabsContent>

        <TabsContent value="draft">
          <Card className="border-border bg-card p-8 text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Laporan draft</p>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled">
          <Card className="border-border bg-card p-8 text-center">
            <Calendar className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Laporan terjadwal</p>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
