"use client"

import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Download,
  RefreshCw,
  Bell,
  Search,
  ArrowRight,
  ShieldAlert,
  Zap,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Bar,
  BarChart,
  Cell,
  Legend,
} from "recharts"
import { villages, diagnosticIssues, sensorData } from "@/lib/mock-data"
import { AIInsights, generateInsights } from "@/components/ai/ai-insights"
import { AIAssistant } from "@/components/ai/ai-assistant"
import { useState } from "react"

// Calculate real-time stats from mock data
const totalVillages = villages.length
const highPriorityVillages = villages.filter(v => v.priority === "tinggi").length
const criticalIssues = diagnosticIssues.filter(i => i.severity === "critical").length
const activeSensors = sensorData.filter(s => s.lastReading.status !== "critical").length

const performanceTrend = [
  { bulan: "Jan", target: 75, actual: 72, baseline: 65 },
  { bulan: "Feb", target: 77, actual: 74, baseline: 65 },
  { bulan: "Mar", target: 79, actual: 78, baseline: 65 },
  { bulan: "Apr", target: 81, actual: 80, baseline: 65 },
  { bulan: "Mei", target: 83, actual: 82, baseline: 65 },
  { bulan: "Jun", target: 85, actual: 84, baseline: 65 },
]

const kpiIndicators = [
  {
    name: "Indeks Pembangunan Desa (IPD)",
    target: 85,
    current: 78.5,
    change: 2.3,
    trend: "up",
    status: "on-track",
  },
  {
    name: "Produktivitas Pertanian",
    target: 5.2,
    current: 4.8,
    unit: "Ton/Ha",
    change: 5.1,
    trend: "up",
    status: "on-track",
  },
  {
    name: "Akses Internet Desa",
    target: 90,
    current: 82,
    unit: "%",
    change: 8.5,
    trend: "up",
    status: "on-track",
  },
  {
    name: "Angka Kemiskinan Desa",
    target: 8,
    current: 9.2,
    unit: "%",
    change: -1.5,
    trend: "down",
    status: "delayed",
  },
  {
    name: "Partisipasi BUMDes",
    target: 75,
    current: 68,
    unit: "%",
    change: 4.2,
    trend: "up",
    status: "on-track",
  },
  {
    name: "Realisasi Dana Desa",
    target: 95,
    current: 87,
    unit: "%",
    change: 3.1,
    trend: "up",
    status: "warning",
  },
]

const programProgress = [
  {
    id: "1",
    program: "Pembangunan Infrastruktur Jalan",
    target: 1000,
    realisasi: 856,
    unit: "km",
    progress: 85.6,
    status: "on-track",
  },
  {
    id: "2",
    program: "Irigasi Pertanian",
    target: 500,
    realisasi: 423,
    unit: "Ha",
    progress: 84.6,
    status: "on-track",
  },
  {
    id: "3",
    program: "Pelatihan Petani",
    target: 50000,
    realisasi: 42500,
    unit: "orang",
    progress: 85.0,
    status: "on-track",
  },
  {
    id: "4",
    program: "Digitalisasi BUMDes",
    target: 2000,
    realisasi: 1450,
    unit: "BUMDes",
    progress: 72.5,
    status: "warning",
  },
  {
    id: "5",
    program: "Pembangunan Gudang Komoditas",
    target: 200,
    realisasi: 145,
    unit: "unit",
    progress: 72.5,
    status: "warning",
  },
]

const alerts = [
  {
    id: "AL-001",
    village: "Sukamaju",
    type: "sensor",
    severity: "critical",
    title: "pH Tanah Ekstrim",
    description: "Sensor S001 mendeteksi pH tanah 4.2 (di bawah ambang batas 5.5) di area blok A.",
    timestamp: "10 menit yang lalu",
    action: "Rekomendasi pemupukan kapur (dolomit)",
  },
  {
    id: "AL-002",
    village: "Cikondang",
    type: "economy",
    severity: "high",
    title: "Penurunan Harga Cabai",
    description: "Harga cabai di pasar lokal turun 25% dalam 3 hari terakhir (Rp 15.000/kg).",
    timestamp: "1 jam yang lalu",
    action: "Aktifkan skema resi gudang",
  },
  {
    id: "AL-003",
    village: "Pantai Indah",
    type: "infrastructure",
    severity: "medium",
    title: "Gangguan Irigasi",
    description: "Debit air pada pintu irigasi sekunder menurun signifikan akibat sedimen.",
    timestamp: "3 jam yang lalu",
    action: "Jadwalkan pembersihan sedimen",
  },
  {
    id: "AL-004",
    village: "Desa Jayamaju",
    type: "production",
    severity: "low",
    title: "Estimasi Panen Berubah",
    description: "AI memprediksi keterlambatan panen padi 5-7 hari akibat curah hujan.",
    timestamp: "5 jam yang lalu",
    action: "Update jadwal logistik",
  },
]

const ewsMetrics = [
  { name: "Kesehatan Tanaman", score: 85, status: "safe", icon: <Zap className="h-4 w-4" /> },
  { name: "Ketersediaan Air", score: 62, status: "warning", icon: <Activity className="h-4 w-4" /> },
  { name: "Stabilitas Harga", score: 45, status: "danger", icon: <TrendingDown className="h-4 w-4" /> },
  { name: "Ketahanan Pangan", score: 92, status: "safe", icon: <ShieldAlert className="h-4 w-4" /> },
]

export default function MonitoringPage() {
  const [showAIAssistant, setShowAIAssistant] = useState(false)
  const aiInsights = generateInsights({}, "monitoring")
  
  const aiSuggestions = [
    {
      id: "1",
      type: "warning" as const,
      title: "Anomali Siklus Panen Terdeteksi",
      description: "AI mendeteksi pola anomali pada siklus panen di Jawa Barat Tengah. Probabilitas kegagalan panen meningkat 12%.",
      action: "Aktifkan early warning system dan siapkan mitigasi risiko",
    },
    {
      id: "2",
      type: "opportunity" as const,
      title: "Optimasi Distribusi Logistik",
      description: "Potensi penghematan 18% biaya distribusi dengan optimasi jalur pengiriman.",
      action: "Implementasi algoritma routing untuk efisiensi maksimal",
    },
    {
      id: "3",
      type: "recommendation" as const,
      title: "Percepatan Realisasi Dana Desa",
      description: "KPI Realisasi Dana Desa saat ini 87%. Perlu akselerasi untuk mencapai target 95%.",
      action: "Fokus pada program prioritas dan streamline proses administrasi",
    },
  ]
  
  return (
    <DashboardLayout
      title="Monitoring Engine"
      description="Dashboard monitoring real-time dan Early Warning System (EWS)"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Analytics Layer" },
        { label: "Monitoring Engine" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Program Aktif"
          value="156"
          change={12}
          changeLabel="program baru"
          icon={<Activity className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Target Tercapai"
          value="82.5%"
          change={5.2}
          changeLabel="dari target"
          icon={<Target className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="On Track"
          value="128"
          change={82}
          changeLabel="program"
          icon={<CheckCircle className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Perlu Perhatian"
          value="28"
          change={-15}
          changeLabel="dari bulan lalu"
          icon={<AlertTriangle className="h-5 w-5 text-warning" />}
        />
      </div>

      {/* Early Warning System Section */}
      <div className="mb-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Early Warning System (EWS)</h2>
          </div>
          <Badge variant="outline" className="border-primary text-primary px-3 py-1">
            Real-time Monitoring Active
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Active Alerts */}
          <Card className="lg:col-span-2 border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Alert Aktif</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary gap-1" asChild>
                <Link href="/notifications">
                  Lihat Semua <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex gap-4 p-4 rounded-lg border border-border bg-secondary/30 relative overflow-hidden">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                    alert.severity === "critical" ? "bg-destructive" : 
                    alert.severity === "high" ? "bg-warning" : 
                    alert.severity === "medium" ? "bg-info" : "bg-muted"
                  }`} />
                  <div className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center ${
                    alert.severity === "critical" ? "bg-destructive/10 text-destructive" : 
                    alert.severity === "high" ? "bg-warning/10 text-warning" : 
                    "bg-info/10 text-info"
                  }`}>
                    {alert.severity === "critical" ? <ShieldAlert className="h-5 w-5" /> : <AlertTriangle className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                      <h4 className="font-semibold text-foreground break-words">{alert.title} - <span className="text-primary">{alert.village}</span></h4>
                      <span className="text-xs text-muted-foreground shrink-0">{alert.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="text-[10px] uppercase">{alert.type}</Badge>
                        <span className="text-xs font-medium text-success">Action: {alert.action}</span>
                      </div>
                      <Button size="sm" className="h-7 text-xs bg-primary hover:bg-primary/90 shrink-0">Handle</Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Risk Indicators */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Indikator Risiko Nasional</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {ewsMetrics.map((metric) => (
                  <div key={metric.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <div className={`p-1.5 rounded-md ${
                          metric.status === "safe" ? "bg-success/10 text-success" : 
                          metric.status === "warning" ? "bg-warning/10 text-warning" : "bg-destructive/10 text-destructive"
                        }`}>
                          {metric.icon}
                        </div>
                        {metric.name}
                      </div>
                      <span className={`text-sm font-bold ${
                        metric.status === "safe" ? "text-success" : 
                        metric.status === "warning" ? "text-warning" : "text-destructive"
                      }`}>{metric.score}/100</span>
                    </div>
                    <Progress value={metric.score} className={`h-2 ${
                      metric.status === "safe" ? "[&>div]:bg-success" : 
                      metric.status === "warning" ? "[&>div]:bg-warning" : "[&>div]:bg-destructive"
                    }`} />
                  </div>
                ))}

                <div className="pt-4 border-t border-border">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-sm font-bold text-primary">AI Prediction</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      AI mendeteksi anomali pada siklus panen di wilayah Jawa Barat Tengah. Probabilitas kegagalan panen meningkat 12% akibat pola El Nino.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Insights Section */}
      <div className="mb-8">
        <AIInsights insights={aiInsights} title="AI-Generated Insights & Predictions" />
      </div>

      {/* Performance Trend */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-card-foreground">Trend Kinerja Pembangunan</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Calendar className="h-4 w-4" />
              6 Bulan
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceTrend}>
              <defs>
                <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="bulan"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
                domain={[60, 90]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="baseline"
                stroke="#94a3b8"
                strokeWidth={1}
                strokeDasharray="5 5"
                dot={false}
                name="Baseline"
              />
              <Area
                type="monotone"
                dataKey="target"
                stroke="#10b981"
                fill="url(#colorTarget)"
                strokeWidth={2}
                name="Target"
              />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="#10b981"
                fill="url(#colorActual)"
                strokeWidth={2}
                name="Realisasi"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-primary" />
              <span className="text-sm text-muted-foreground">Target</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-success" />
              <span className="text-sm text-muted-foreground">Realisasi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full border-2 border-dashed border-muted-foreground" />
              <span className="text-sm text-muted-foreground">Baseline</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPI Indicators */}
      <div className="mb-8">
        <h2 className="mb-6 text-xl font-semibold text-foreground">Indikator Kinerja Utama (KPI)</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kpiIndicators.map((kpi) => (
            <Card key={kpi.name} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{kpi.name}</p>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-card-foreground">
                        {kpi.current}
                        {kpi.unit && <span className="text-sm font-normal">{kpi.unit}</span>}
                      </span>
                      <span
                        className={`flex items-center text-sm ${
                          kpi.trend === "up" ? "text-success" : "text-destructive"
                        }`}
                      >
                        {kpi.trend === "up" ? (
                          <TrendingUp className="mr-1 h-3 w-3" />
                        ) : (
                          <TrendingDown className="mr-1 h-3 w-3" />
                        )}
                        {kpi.change > 0 ? "+" : ""}
                        {kpi.change}%
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      kpi.status === "on-track"
                        ? "bg-success/20 text-success"
                        : kpi.status === "warning"
                          ? "bg-warning/20 text-warning"
                          : "bg-destructive/20 text-destructive"
                    }
                  >
                    {kpi.status === "on-track"
                      ? "On Track"
                      : kpi.status === "warning"
                        ? "Warning"
                        : "Delayed"}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Target: {kpi.target}{kpi.unit}</span>
                    <span className="text-card-foreground">
                      {((kpi.current / kpi.target) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <Progress value={(kpi.current / kpi.target) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Program Progress */}
      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="bg-secondary">
            <TabsTrigger value="all">Semua Program</TabsTrigger>
            <TabsTrigger value="on-track">On Track</TabsTrigger>
            <TabsTrigger value="warning">Perlu Perhatian</TabsTrigger>
          </TabsList>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Laporan
          </Button>
        </div>

        <TabsContent value="all" className="space-y-4">
          {programProgress.map((program) => (
            <Card key={program.id} className="border-border bg-card">
              <CardContent className="py-4">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-card-foreground">{program.program}</h3>
                      <Badge
                        variant="secondary"
                        className={
                          program.status === "on-track"
                            ? "bg-success/20 text-success"
                            : "bg-warning/20 text-warning"
                        }
                      >
                        {program.status === "on-track" ? "On Track" : "Warning"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Realisasi: {program.realisasi.toLocaleString("id-ID")} / {program.target.toLocaleString("id-ID")} {program.unit}
                    </p>
                  </div>

                  <div className="w-full lg:w-64">
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-card-foreground">{program.progress}%</span>
                    </div>
                    <Progress
                      value={program.progress}
                      className={`h-3 ${
                        program.status === "warning" ? "[&>div]:bg-warning" : ""
                      }`}
                    />
                  </div>

                  <Button variant="ghost" size="sm" className="self-start lg:self-auto">
                    Detail
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="on-track">
          <Card className="border-border bg-card p-8 text-center">
            <CheckCircle className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Program yang berjalan sesuai target</p>
          </Card>
        </TabsContent>

        <TabsContent value="warning">
          <Card className="border-border bg-card p-8 text-center">
            <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Program yang memerlukan perhatian</p>
          </Card>
        </TabsContent>
      </Tabs>

      {/* AI Assistant */}
      {showAIAssistant && (
        <AIAssistant
          context="monitoring"
          suggestions={aiSuggestions}
          onClose={() => setShowAIAssistant(false)}
        />
      )}
      
      {/* AI Assistant Trigger Button */}
      {!showAIAssistant && (
        <Button
          onClick={() => setShowAIAssistant(true)}
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 z-50"
        >
          <Zap className="h-6 w-6" />
        </Button>
      )}
    </DashboardLayout>
  )
}
