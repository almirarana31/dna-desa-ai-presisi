"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DetailDialog } from "@/components/ui/crud-dialogs"
import { toast } from "sonner"
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Target,
  Zap,
  ShieldAlert,
  ArrowRight,
  FileSearch,
  Users,
  DollarSign,
  Layers,
  AlertCircle,
} from "lucide-react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts"
import { diagnosticIssues, villages } from "@/lib/mock-data"

// Calculate diagnostic statistics
const criticalIssues = diagnosticIssues.filter(i => i.severity === "critical")
const highIssues = diagnosticIssues.filter(i => i.severity === "high")
const openIssues = diagnosticIssues.filter(i => i.status === "open")
const totalAffectedPopulation = diagnosticIssues.reduce((sum, i) => sum + i.affectedPopulation, 0)
const totalEstimatedLoss = diagnosticIssues.reduce((sum, i) => sum + i.estimatedLoss, 0)

// Group issues by category
const issuesByCategory = diagnosticIssues.reduce((acc, issue) => {
  if (!acc[issue.category]) {
    acc[issue.category] = []
  }
  acc[issue.category].push(issue)
  return acc
}, {} as Record<string, typeof diagnosticIssues>)

const categoryStats = Object.entries(issuesByCategory).map(([category, issues]) => ({
  category,
  count: issues.length,
  critical: issues.filter(i => i.severity === "critical").length,
  high: issues.filter(i => i.severity === "high").length,
  affected: issues.reduce((sum, i) => sum + i.affectedPopulation, 0),
  loss: issues.reduce((sum, i) => sum + i.estimatedLoss, 0)
}))

// Severity distribution
const severityDistribution = [
  { name: "Critical", value: diagnosticIssues.filter(i => i.severity === "critical").length, color: "var(--color-destructive)" },
  { name: "High", value: diagnosticIssues.filter(i => i.severity === "high").length, color: "var(--color-warning)" },
  { name: "Medium", value: diagnosticIssues.filter(i => i.severity === "medium").length, color: "var(--color-info)" },
  { name: "Low", value: diagnosticIssues.filter(i => i.severity === "low").length, color: "var(--color-success)" },
]

// Status distribution
const statusDistribution = [
  { name: "Open", value: diagnosticIssues.filter(i => i.status === "open").length, color: "var(--color-destructive)" },
  { name: "In Progress", value: diagnosticIssues.filter(i => i.status === "in_progress").length, color: "var(--color-warning)" },
  { name: "Resolved", value: diagnosticIssues.filter(i => i.status === "resolved").length, color: "var(--color-success)" },
]

export default function DiagnosticEnginePage() {
  const [detailOpen, setDetailOpen] = useState(false)
  const [selectedIssue, setSelectedIssue] = useState<typeof diagnosticIssues[0] | null>(null)

  const handleDetailAnalisis = (issue: typeof diagnosticIssues[0]) => {
    setSelectedIssue(issue)
    setDetailOpen(true)
  }

  const handleBuatRencanaAksi = (issue: typeof diagnosticIssues[0]) => {
    toast.success(`Membuat rencana aksi untuk "${issue.title}"`)
  }

  const handleTanganiSegera = (issue: typeof diagnosticIssues[0]) => {
    toast.info(`Memulai penanganan segera untuk "${issue.title}"`)
  }

  return (
    <DashboardLayout
      title="Diagnostic Engine"
      description="Identifikasi masalah, analisis akar penyebab, dan rekomendasi solusi berbasis AI"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Analytics Layer" },
        { label: "Diagnostic Engine" },
      ]}
    >
      {/* Stats Overview */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Masalah Teridentifikasi"
          value={diagnosticIssues.length.toString()}
          change={12}
          changeLabel="dari bulan lalu"
          icon={<AlertTriangle className="h-5 w-5 text-warning" />}
        />
        <StatsCard
          title="Masalah Kritis"
          value={criticalIssues.length.toString()}
          change={-15}
          changeLabel="penurunan"
          icon={<ShieldAlert className="h-5 w-5 text-destructive" />}
        />
        <StatsCard
          title="Penduduk Terdampak"
          value={`${(totalAffectedPopulation / 1000).toFixed(1)}K`}
          change={-8}
          changeLabel="penurunan"
          icon={<Users className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Estimasi Kerugian"
          value={`Rp ${(totalEstimatedLoss / 1000).toFixed(1)}M`}
          change={-12}
          changeLabel="penurunan"
          icon={<DollarSign className="h-5 w-5 text-destructive" />}
        />
      </div>

      {/* Charts Row */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        {/* Severity Distribution */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Distribusi Tingkat Keparahan</CardTitle>
            <CardDescription>Klasifikasi masalah berdasarkan severity</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={severityDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {severityDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Status Distribution */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Status Penanganan</CardTitle>
            <CardDescription>Progress penyelesaian masalah</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={statusDistribution}>
                <XAxis dataKey="name" tick={{ fill: "var(--color-muted-foreground)" }} />
                <YAxis tick={{ fill: "var(--color-muted-foreground)" }} />
                <Tooltip />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Category Analysis */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Analisis per Kategori</CardTitle>
          <CardDescription>Breakdown masalah berdasarkan kategori</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryStats.map((cat) => (
              <div key={cat.category} className="rounded-lg border border-border bg-secondary/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Layers className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold capitalize text-card-foreground">{cat.category}</h3>
                      <Badge variant="outline" className="border-warning text-warning">
                        {cat.count} masalah
                      </Badge>
                      {cat.critical > 0 && (
                        <Badge variant="outline" className="border-destructive text-destructive">
                          {cat.critical} kritis
                        </Badge>
                      )}
                    </div>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Penduduk Terdampak</p>
                        <p className="font-semibold text-card-foreground">
                          {cat.affected.toLocaleString("id-ID")} jiwa
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Estimasi Kerugian</p>
                        <p className="font-semibold text-card-foreground">
                          Rp {cat.loss.toLocaleString("id-ID")} juta
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Tingkat Keparahan</p>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={(cat.critical / cat.count) * 100}
                            className="h-2 flex-1"
                          />
                          <span className="text-xs font-medium text-card-foreground">
                            {Math.round((cat.critical / cat.count) * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Issues List */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="all">Semua ({diagnosticIssues.length})</TabsTrigger>
          <TabsTrigger value="critical">Kritis ({criticalIssues.length})</TabsTrigger>
          <TabsTrigger value="high">Tinggi ({highIssues.length})</TabsTrigger>
          <TabsTrigger value="open">Belum Ditangani ({openIssues.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {diagnosticIssues.slice(0, 10).map((issue) => (
            <Card key={issue.id} className="border-border bg-card">
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`rounded-lg p-3 ${
                      issue.severity === "critical"
                        ? "bg-destructive/20"
                        : issue.severity === "high"
                          ? "bg-warning/20"
                          : "bg-info/20"
                    }`}
                  >
                    <AlertCircle
                      className={`h-6 w-6 ${
                        issue.severity === "critical"
                          ? "text-destructive"
                          : issue.severity === "high"
                            ? "text-warning"
                            : "text-info"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-card-foreground">{issue.title}</h3>
                          <Badge
                            variant="outline"
                            className={
                              issue.severity === "critical"
                                ? "border-destructive text-destructive"
                                : issue.severity === "high"
                                  ? "border-warning text-warning"
                                  : "border-info text-info"
                            }
                          >
                            {issue.severity.toUpperCase()}
                          </Badge>
                          <Badge variant="outline" className="border-border capitalize">
                            {issue.category}
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {issue.villageName} • {issue.detectedDate}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          issue.status === "resolved"
                            ? "border-success text-success"
                            : issue.status === "in_progress"
                              ? "border-warning text-warning"
                              : "border-destructive text-destructive"
                        }
                      >
                        {issue.status === "resolved"
                          ? "Selesai"
                          : issue.status === "in_progress"
                            ? "Proses"
                            : "Belum Ditangani"}
                      </Badge>
                    </div>

                    <p className="mt-3 text-sm text-card-foreground">{issue.description}</p>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-lg bg-secondary/50 p-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Dampak</p>
                        <p className="mt-1 text-sm font-medium text-card-foreground">{issue.impact}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Terdampak</p>
                        <p className="mt-1 text-sm font-medium text-card-foreground">
                          {issue.affectedPopulation.toLocaleString("id-ID")} jiwa
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Kerugian/Tahun</p>
                        <p className="mt-1 text-sm font-medium text-card-foreground">
                          Rp {issue.estimatedLoss.toLocaleString("id-ID")} juta
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs font-medium text-muted-foreground">Akar Penyebab:</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {issue.rootCause.map((cause, index) => (
                          <Badge key={index} variant="secondary" className="bg-secondary">
                            {cause}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs font-medium text-muted-foreground">Rekomendasi:</p>
                      <ul className="mt-2 space-y-1">
                        {issue.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-card-foreground">
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="default" onClick={() => handleDetailAnalisis(issue)}>
                        <FileSearch className="mr-2 h-4 w-4" />
                        Detail Analisis
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleBuatRencanaAksi(issue)}>
                        <Target className="mr-2 h-4 w-4" />
                        Buat Rencana Aksi
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="critical">
          <div className="space-y-4">
            {criticalIssues.slice(0, 5).map((issue) => (
              <Card key={issue.id} className="border-destructive/30 bg-card">
                <CardContent className="py-4">
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="h-6 w-6 text-destructive" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground">{issue.title}</h3>
                      <p className="text-sm text-muted-foreground">{issue.villageName}</p>
                    </div>
                    <Button size="sm" variant="destructive" onClick={() => handleTanganiSegera(issue)}>
                      Tangani Segera
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="high">
          <div className="space-y-4">
            {highIssues.slice(0, 5).map((issue) => (
              <Card key={issue.id} className="border-warning/30 bg-card">
                <CardContent className="py-4">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-6 w-6 text-warning" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground">{issue.title}</h3>
                      <p className="text-sm text-muted-foreground">{issue.villageName}</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => handleDetailAnalisis(issue)}>
                      Lihat Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="open">
          <div className="space-y-4">
            {openIssues.slice(0, 5).map((issue) => (
              <Card key={issue.id} className="border-border bg-card">
                <CardContent className="py-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-6 w-6 text-muted-foreground" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground">{issue.title}</h3>
                      <p className="text-sm text-muted-foreground">{issue.villageName}</p>
                    </div>
                    <Button size="sm" onClick={() => handleTanganiSegera(issue)}>Mulai Penanganan</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Detail Dialog */}
      <DetailDialog
        open={detailOpen}
        onOpenChange={setDetailOpen}
        title={selectedIssue?.title || "Detail Masalah"}
      >
        {selectedIssue && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Badge
                variant="outline"
                className={
                  selectedIssue.severity === "critical"
                    ? "border-destructive text-destructive"
                    : selectedIssue.severity === "high"
                      ? "border-warning text-warning"
                      : "border-info text-info"
                }
              >
                {selectedIssue.severity.toUpperCase()}
              </Badge>
              <Badge variant="outline" className="capitalize">{selectedIssue.category}</Badge>
              <Badge
                variant="outline"
                className={
                  selectedIssue.status === "resolved"
                    ? "border-success text-success"
                    : selectedIssue.status === "in_progress"
                      ? "border-warning text-warning"
                      : "border-destructive text-destructive"
                }
              >
                {selectedIssue.status === "resolved" ? "Selesai" : 
                 selectedIssue.status === "in_progress" ? "Proses" : "Belum Ditangani"}
              </Badge>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Desa</h4>
              <p className="text-muted-foreground">{selectedIssue.villageName}</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Deskripsi</h4>
              <p className="text-muted-foreground">{selectedIssue.description}</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Dampak</h4>
              <p className="text-muted-foreground">{selectedIssue.impact}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-foreground">Penduduk Terdampak</h4>
                <p className="text-xl font-bold text-primary">{selectedIssue.affectedPopulation.toLocaleString("id-ID")} jiwa</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Estimasi Kerugian</h4>
                <p className="text-xl font-bold text-destructive">Rp {selectedIssue.estimatedLoss.toLocaleString("id-ID")} juta/tahun</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Akar Penyebab</h4>
              <div className="flex flex-wrap gap-2">
                {selectedIssue.rootCause.map((cause, index) => (
                  <Badge key={index} variant="secondary">{cause}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Rekomendasi</h4>
              <ul className="space-y-2">
                {selectedIssue.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 flex gap-2">
              <Button className="flex-1" onClick={() => { handleBuatRencanaAksi(selectedIssue); setDetailOpen(false); }}>
                <Target className="mr-2 h-4 w-4" />
                Buat Rencana Aksi
              </Button>
            </div>
          </div>
        )}
      </DetailDialog>
    </DashboardLayout>
  )
}
