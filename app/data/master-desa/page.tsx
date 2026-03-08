"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DataTable } from "@/components/dashboard/data-table"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Building2, Users, TrendingUp, Plus, Upload, Download, Database, CheckCircle2, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { villages, getVillageStats } from "@/lib/mock-data"
import { TambahDesaDialog, ImportDialog, ExportDialog, FilterDialog } from "@/components/ui/crud-dialogs"
import { toast } from "sonner"

// Get real stats from mock data
const stats = getVillageStats()

// Map villages to table format
const villageData = villages.slice(0, 20).map(v => ({
  id: v.id,
  kode: v.code,
  nama: v.name,
  kecamatan: v.kecamatan,
  kabupaten: v.kabupaten,
  provinsi: v.province,
  tipe: v.type,
  populasi: v.population,
  luas: `${v.area} km²`,
  score: v.score,
  status: v.score > 80 ? "aktif" : "pending",
}))

const columns = [
  { key: "kode", label: "Kode Desa" },
  { key: "nama", label: "Nama Desa" },
  { key: "kecamatan", label: "Kecamatan" },
  { key: "kabupaten", label: "Kabupaten" },
  { key: "provinsi", label: "Provinsi" },
  {
    key: "tipe",
    label: "Tipe",
    render: (item: typeof villageData[0]) => {
      const colors: Record<string, string> = {
        pertanian: "bg-success/20 text-success",
        perikanan: "bg-info/20 text-info",
        wisata: "bg-warning/20 text-warning",
        logistik: "bg-chart-2/20 text-chart-2",
        industri: "bg-destructive/20 text-destructive",
      }
      return (
        <Badge variant="secondary" className={colors[item.tipe]}>
          {item.tipe.charAt(0).toUpperCase() + item.tipe.slice(1)}
        </Badge>
      )
    },
  },
  {
    key: "populasi",
    label: "Populasi",
    render: (item: typeof villageData[0]) => item.populasi.toLocaleString("id-ID"),
  },
  { key: "luas", label: "Luas" },
  {
    key: "score",
    label: "DNA Score",
    render: (item: typeof villageData[0]) => (
      <div className="flex items-center gap-2">
        <span className={`font-semibold ${item.score > 85 ? "text-success" : item.score > 75 ? "text-warning" : "text-destructive"}`}>
          {item.score}
        </span>
        <Progress value={item.score} className="h-1.5 w-16" />
      </div>
    ),
  },
  {
    key: "status",
    label: "Status",
    render: (item: typeof villageData[0]) => (
      <Badge
        variant="secondary"
        className={
          item.status === "aktif"
            ? "bg-success/20 text-success"
            : "bg-warning/20 text-warning"
        }
      >
        {item.status === "aktif" ? "Aktif" : "Pending"}
      </Badge>
    ),
  },
]

export default function MasterDesaPage() {
  const [tambahOpen, setTambahOpen] = useState(false)
  const [importOpen, setImportOpen] = useState(false)
  const [exportOpen, setExportOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <DashboardLayout
      title="Master Data Desa"
      description="Pengelolaan data dasar desa termasuk informasi geografis, administratif, dan demografis"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Data Layer" },
        { label: "Master Desa" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Desa"
          value={stats.total.toLocaleString("id-ID")}
          change={12.5}
          changeLabel="dari tahun lalu"
          icon={<MapPin className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="DNA Score Rata-rata"
          value={stats.averageScore.toString()}
          change={3.2}
          changeLabel="dari tahun lalu"
          icon={<TrendingUp className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Total Populasi"
          value={(stats.totalPopulation / 1000000).toFixed(1) + "M"}
          change={1.8}
          changeLabel="pertumbuhan"
          icon={<Users className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Prioritas Tinggi"
          value={stats.byPriority.tinggi.toString()}
          change={-5.2}
          changeLabel="dari bulan lalu"
          icon={<Building2 className="h-5 w-5 text-warning" />}
        />
      </div>

      {/* Data Quality Monitoring */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-card-foreground">Kualitas Data & Integrasi</CardTitle>
            <Badge variant="outline" className="border-success text-success">
              <CheckCircle2 className="mr-1 h-3 w-3" />
              Sync Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Data Completeness */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Kelengkapan Data</span>
                <span className="text-sm font-bold text-success">98.5%</span>
              </div>
              <Progress value={98.5} className="h-2 [&>div]:bg-success" />
              <p className="text-xs text-muted-foreground">
                {stats.total} desa dengan data lengkap
              </p>
            </div>

            {/* Data Freshness */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Kesegaran Data</span>
                <span className="text-sm font-bold text-success">95.2%</span>
              </div>
              <Progress value={95.2} className="h-2 [&>div]:bg-info" />
              <p className="text-xs text-muted-foreground">
                Update terakhir: 2 jam yang lalu
              </p>
            </div>

            {/* Data Accuracy */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Akurasi Data</span>
                <span className="text-sm font-bold text-warning">92.8%</span>
              </div>
              <Progress value={92.8} className="h-2 [&>div]:bg-warning" />
              <p className="text-xs text-muted-foreground">
                Validasi AI: 7.2% perlu review
              </p>
            </div>
          </div>

          {/* Data Sources */}
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-sm font-semibold text-foreground mb-4">Sumber Data Terintegrasi</h4>
            <div className="grid gap-3 md:grid-cols-6">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary">
                <Database className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-medium text-foreground">Kemendagri</p>
                  <p className="text-[10px] text-success">Sync</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary">
                <Database className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-medium text-foreground">BPS</p>
                  <p className="text-[10px] text-success">Sync</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary">
                <Database className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-medium text-foreground">Kemendes</p>
                  <p className="text-[10px] text-success">Sync</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary">
                <Database className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-medium text-foreground">Kementan</p>
                  <p className="text-[10px] text-success">Sync</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary">
                <Database className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-medium text-foreground">BMKG</p>
                  <p className="text-[10px] text-warning">Delay 2h</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary">
                <Database className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-medium text-foreground">IoT Sensors</p>
                  <p className="text-[10px] text-success">Real-time</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats by Type */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Distribusi Tipe Desa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <div className="rounded-lg bg-success/20 p-3">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{stats.byType.pertanian}</p>
                <p className="text-sm text-muted-foreground">Pertanian ({((stats.byType.pertanian / stats.total) * 100).toFixed(0)}%)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <div className="rounded-lg bg-info/20 p-3">
                <Users className="h-6 w-6 text-info" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{stats.byType.perikanan}</p>
                <p className="text-sm text-muted-foreground">Perikanan ({((stats.byType.perikanan / stats.total) * 100).toFixed(0)}%)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <div className="rounded-lg bg-warning/20 p-3">
                <MapPin className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{stats.byType.wisata}</p>
                <p className="text-sm text-muted-foreground">Wisata ({((stats.byType.wisata / stats.total) * 100).toFixed(0)}%)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <div className="rounded-lg bg-chart-2/20 p-3">
                <Building2 className="h-6 w-6 text-chart-2" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{stats.byType.logistik}</p>
                <p className="text-sm text-muted-foreground">Logistik ({((stats.byType.logistik / stats.total) * 100).toFixed(0)}%)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <div className="rounded-lg bg-destructive/20 p-3">
                <Building2 className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{stats.byType.industri}</p>
                <p className="text-sm text-muted-foreground">Industri ({((stats.byType.industri / stats.total) * 100).toFixed(0)}%)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Daftar Desa (Menampilkan 20 dari {stats.total})</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2" onClick={() => setFilterOpen(true)}>
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2" onClick={() => setExportOpen(true)}>
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" className="gap-2" onClick={() => setImportOpen(true)}>
            <Upload className="h-4 w-4" />
            Import Data
          </Button>
          <Button className="gap-2" onClick={() => setTambahOpen(true)}>
            <Plus className="h-4 w-4" />
            Tambah Desa
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        data={villageData}
        columns={columns}
        searchPlaceholder="Cari nama desa, kode, atau wilayah..."
        onView={(item) => toast.info(`Melihat detail ${item.nama}`)}
        onEdit={(item) => toast.info(`Edit data ${item.nama}`)}
        onDelete={(item) => toast.success(`${item.nama} telah dihapus`)}
      />

      {/* Dialogs */}
      <TambahDesaDialog open={tambahOpen} onOpenChange={setTambahOpen} />
      <ImportDialog open={importOpen} onOpenChange={setImportOpen} title="Data Desa" />
      <ExportDialog open={exportOpen} onOpenChange={setExportOpen} title="Data Desa" />
      <FilterDialog open={filterOpen} onOpenChange={setFilterOpen} />
    </DashboardLayout>
  )
}
