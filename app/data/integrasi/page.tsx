"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { toast } from "sonner"
import {
  Layers,
  Database,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  ArrowRight,
  Settings,
  Activity,
  Zap,
  TrendingUp,
  Plus,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const integrations = [
  {
    id: "1",
    nama: "BPS - Badan Pusat Statistik",
    deskripsi: "Data statistik kependudukan, ekonomi, dan sosial",
    status: "connected",
    lastSync: "5 menit lalu",
    syncProgress: 100,
    dataCount: "2.4 Juta",
    endpoint: "api.bps.go.id",
    uptime: 99.8,
    latency: 45,
  },
  {
    id: "2",
    nama: "Kemendes - Data Desa",
    deskripsi: "Data profil desa dan potensi desa",
    status: "syncing",
    lastSync: "Sedang sinkronisasi",
    syncProgress: 67,
    dataCount: "1.8 Juta",
    endpoint: "api.kemendesa.go.id",
    uptime: 98.5,
    latency: 120,
  },
  {
    id: "3",
    nama: "BMKG - Data Cuaca",
    deskripsi: "Data cuaca, iklim, dan prakiraan",
    status: "connected",
    lastSync: "10 menit lalu",
    syncProgress: 100,
    dataCount: "850 Ribu",
    endpoint: "dataonline.bmkg.go.id",
    uptime: 97.2,
    latency: 180,
  },
  {
    id: "4",
    nama: "BIG - Data Geospasial",
    deskripsi: "Peta dasar dan data geospasial nasional",
    status: "warning",
    lastSync: "2 jam lalu",
    syncProgress: 100,
    dataCount: "156 Layer",
    endpoint: "tanahair.indonesia.go.id",
    uptime: 95.5,
    latency: 320,
  },
  {
    id: "5",
    nama: "Kementan - Data Pertanian",
    deskripsi: "Data produksi pertanian dan komoditas",
    status: "connected",
    lastSync: "30 menit lalu",
    syncProgress: 100,
    dataCount: "1.2 Juta",
    endpoint: "psp.pertanian.go.id",
    uptime: 99.1,
    latency: 85,
  },
  {
    id: "6",
    nama: "KKP - Data Perikanan",
    deskripsi: "Data produksi perikanan dan kelautan",
    status: "disconnected",
    lastSync: "Belum terhubung",
    syncProgress: 0,
    dataCount: "-",
    endpoint: "kkp.go.id/api",
    uptime: 0,
    latency: 0,
  },
  {
    id: "7",
    nama: "IoT Gateway",
    deskripsi: "Agregasi data dari sensor IoT desa",
    status: "connected",
    lastSync: "Real-time",
    syncProgress: 100,
    dataCount: "12,456 Sensor",
    endpoint: "iot.aidesa.id",
    uptime: 99.9,
    latency: 25,
  },
  {
    id: "8",
    nama: "Dukcapil - Data Kependudukan",
    deskripsi: "Data administrasi kependudukan",
    status: "connected",
    lastSync: "1 jam lalu",
    syncProgress: 100,
    dataCount: "45.2 Juta",
    endpoint: "api.dukcapil.kemendagri.go.id",
    uptime: 98.9,
    latency: 95,
  },
]

// Calculate stats
const connectedCount = integrations.filter(i => i.status === "connected").length
const warningCount = integrations.filter(i => i.status === "warning").length
const disconnectedCount = integrations.filter(i => i.status === "disconnected").length
const totalRecords = integrations.reduce((sum, i) => {
  const count = i.dataCount.replace(/[^0-9.]/g, '')
  return sum + (parseFloat(count) || 0)
}, 0)

// Generate sync history data
const syncHistory = Array.from({ length: 24 }, (_, i) => {
  const hour = (new Date().getHours() - (23 - i) + 24) % 24
  return {
    waktu: `${hour.toString().padStart(2, '0')}:00`,
    success: Math.floor(Math.random() * 50) + 150,
    failed: Math.floor(Math.random() * 10),
  }
})

// API performance data
const apiPerformance = integrations.filter(i => i.status !== "disconnected").map(i => ({
  name: i.nama.split(" - ")[0],
  latency: i.latency,
  uptime: i.uptime,
}))

const getStatusIcon = (status: string) => {
  switch (status) {
    case "connected":
      return <CheckCircle className="h-5 w-5 text-success" />
    case "syncing":
      return <RefreshCw className="h-5 w-5 animate-spin text-info" />
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-warning" />
    case "disconnected":
      return <XCircle className="h-5 w-5 text-destructive" />
    default:
      return <Clock className="h-5 w-5 text-muted-foreground" />
  }
}

const getStatusBadge = (status: string) => {
  const styles: Record<string, string> = {
    connected: "bg-success/20 text-success",
    syncing: "bg-info/20 text-info",
    warning: "bg-warning/20 text-warning",
    disconnected: "bg-destructive/20 text-destructive",
  }
  const labels: Record<string, string> = {
    connected: "Terhubung",
    syncing: "Sinkronisasi",
    warning: "Perlu Perhatian",
    disconnected: "Terputus",
  }
  return (
    <Badge variant="secondary" className={styles[status]}>
      {labels[status]}
    </Badge>
  )
}

export default function IntegrasiPage() {
  const handleSyncAll = () => {
    toast.success("Memulai sinkronisasi semua integrasi...")
  }

  const handleAddIntegration = () => {
    toast.info("Fitur tambah integrasi akan segera tersedia")
  }

  return (
    <DashboardLayout
      title="Integrasi Sumber Data"
      description="Pengelolaan koneksi dan sinkronisasi dengan berbagai sumber data eksternal"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Data Layer" },
        { label: "Integrasi Sumber" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Integrasi"
          value={integrations.length.toString()}
          change={2}
          changeLabel="baru ditambahkan"
          icon={<Layers className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Terhubung"
          value={connectedCount.toString()}
          change={0}
          changeLabel="stabil"
          icon={<CheckCircle className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Perlu Perhatian"
          value={(warningCount + disconnectedCount).toString()}
          change={-1}
          changeLabel="dari kemarin"
          icon={<AlertTriangle className="h-5 w-5 text-warning" />}
        />
        <StatsCard
          title="Total Data"
          value={totalRecords.toFixed(1) + " Juta"}
          change={5.2}
          changeLabel="records baru"
          icon={<Database className="h-5 w-5 text-info" />}
        />
      </div>

      {/* Sync Performance Dashboard */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        {/* Sync History Chart */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Riwayat Sinkronisasi (24 Jam)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={syncHistory}>
                <XAxis
                  dataKey="waktu"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 11 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 11 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="success" fill="#10b981" radius={[4, 4, 0, 0]} name="Success" />
                <Bar dataKey="failed" fill="#ef4444" radius={[4, 4, 0, 0]} name="Failed" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-success" />
                <span className="text-sm text-muted-foreground">Success</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-destructive" />
                <span className="text-sm text-muted-foreground">Failed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Performance */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Performa API</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {apiPerformance.map((api) => (
                <div key={api.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{api.name}</span>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-semibold ${
                        api.latency < 100 ? "text-success" : 
                        api.latency < 200 ? "text-warning" : "text-destructive"
                      }`}>
                        {api.latency}ms
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {api.uptime}% uptime
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Progress value={api.uptime} className="h-1.5 flex-1 [&>div]:bg-success" />
                    <Progress 
                      value={100 - (api.latency / 500 * 100)} 
                      className={`h-1.5 w-20 ${
                        api.latency < 100 ? "[&>div]:bg-success" : 
                        api.latency < 200 ? "[&>div]:bg-warning" : "[&>div]:bg-destructive"
                      }`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Flow Diagram */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Alur Integrasi Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between overflow-x-auto py-4">
            <div className="flex flex-col items-center">
              <div className="rounded-lg bg-secondary p-4">
                <Database className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="mt-2 text-sm font-medium text-card-foreground">Sumber Data</p>
              <p className="text-xs text-muted-foreground">{integrations.length} Integrasi</p>
              <Badge variant="outline" className="mt-1 border-success text-success text-[10px]">
                {connectedCount} Active
              </Badge>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground" />
            <div className="flex flex-col items-center">
              <div className="rounded-lg bg-primary/20 p-4">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <p className="mt-2 text-sm font-medium text-card-foreground">ETL Pipeline</p>
              <p className="text-xs text-muted-foreground">Transform & Load</p>
              <Badge variant="outline" className="mt-1 border-info text-info text-[10px]">
                Real-time
              </Badge>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground" />
            <div className="flex flex-col items-center">
              <div className="rounded-lg bg-success/20 p-4">
                <Layers className="h-8 w-8 text-success" />
              </div>
              <p className="mt-2 text-sm font-medium text-card-foreground">Data Lake</p>
              <p className="text-xs text-muted-foreground">{totalRecords.toFixed(1)} Juta Records</p>
              <Badge variant="outline" className="mt-1 border-success text-success text-[10px]">
                98.5% Quality
              </Badge>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground" />
            <div className="flex flex-col items-center">
              <div className="rounded-lg bg-info/20 p-4">
                <Database className="h-8 w-8 text-info" />
              </div>
              <p className="mt-2 text-sm font-medium text-card-foreground">Data Warehouse</p>
              <p className="text-xs text-muted-foreground">Terstruktur</p>
              <Badge variant="outline" className="mt-1 border-primary text-primary text-[10px]">
                AI-Ready
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration Health Summary */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-success/20 p-3">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-success">{connectedCount}</p>
                <p className="text-sm text-muted-foreground">Terhubung</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-info/20 p-3">
                <RefreshCw className="h-6 w-6 text-info" />
              </div>
              <div>
                <p className="text-2xl font-bold text-info">1</p>
                <p className="text-sm text-muted-foreground">Sinkronisasi</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-warning/20 p-3">
                <AlertTriangle className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-warning">{warningCount}</p>
                <p className="text-sm text-muted-foreground">Warning</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-destructive/20 p-3">
                <XCircle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold text-destructive">{disconnectedCount}</p>
                <p className="text-sm text-muted-foreground">Terputus</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Integration List */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Daftar Integrasi</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2" onClick={handleSyncAll}>
            <RefreshCw className="h-4 w-4" />
            Sync All
          </Button>
          <Button className="gap-2" onClick={handleAddIntegration}>
            <Plus className="h-4 w-4" />
            Tambah Integrasi
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {integrations.map((integration) => (
          <Card key={integration.id} className="border-border bg-card">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(integration.status)}
                  <div>
                    <p className="font-semibold text-card-foreground">{integration.nama}</p>
                    <p className="text-sm text-muted-foreground">{integration.deskripsi}</p>
                  </div>
                </div>
                {getStatusBadge(integration.status)}
              </div>

              <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Endpoint</p>
                  <p className="font-mono text-xs text-card-foreground truncate">{integration.endpoint}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Total Data</p>
                  <p className="font-semibold text-card-foreground">{integration.dataCount}</p>
                </div>
              </div>

              {/* Performance Metrics */}
              {integration.status !== "disconnected" && (
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-secondary p-3">
                    <p className="text-xs text-muted-foreground mb-1">Uptime</p>
                    <p className={`text-lg font-bold ${
                      integration.uptime > 99 ? "text-success" : 
                      integration.uptime > 95 ? "text-warning" : "text-destructive"
                    }`}>
                      {integration.uptime}%
                    </p>
                  </div>
                  <div className="rounded-lg bg-secondary p-3">
                    <p className="text-xs text-muted-foreground mb-1">Latency</p>
                    <p className={`text-lg font-bold ${
                      integration.latency < 100 ? "text-success" : 
                      integration.latency < 200 ? "text-warning" : "text-destructive"
                    }`}>
                      {integration.latency}ms
                    </p>
                  </div>
                </div>
              )}

              {integration.status === "syncing" && (
                <div className="mb-4">
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress Sinkronisasi</span>
                    <span className="text-card-foreground">{integration.syncProgress}%</span>
                  </div>
                  <Progress value={integration.syncProgress} className="h-2" />
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Sync: {integration.lastSync}
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <RefreshCw className="h-3 w-3" />
                    Sync
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Settings className="h-3 w-3" />
                    Config
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
