"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DataTable } from "@/components/dashboard/data-table"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TambahKomoditasDialog, ImportDialog, ExportDialog, FilterDialog } from "@/components/ui/crud-dialogs"
import { toast } from "sonner"
import {
  Wheat,
  Fish,
  TreePine,
  Factory,
  Plus,
  Upload,
  TrendingUp,
  Download,
  Filter,
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { productionData, villages } from "@/lib/mock-data"

// Get unique commodities from production data
const uniqueCommodities = Array.from(new Set(productionData.map(p => p.commodity)))

// Calculate commodity statistics
const commodityStats = uniqueCommodities.map(commodity => {
  const commodityProduction = productionData.filter(p => p.commodity === commodity)
  const totalProduction = commodityProduction.reduce((sum, p) => sum + p.production, 0)
  const avgPrice = commodityProduction.reduce((sum, p) => sum + p.price, 0) / commodityProduction.length
  const totalRevenue = commodityProduction.reduce((sum, p) => sum + p.revenue, 0)
  
  // Determine category based on commodity name
  let kategori = "Pertanian"
  if (commodity.toLowerCase().includes("udang") || commodity.toLowerCase().includes("bandeng") || 
      commodity.toLowerCase().includes("lele") || commodity.toLowerCase().includes("nila")) {
    kategori = "Perikanan"
  } else if (commodity.toLowerCase().includes("sawit") || commodity.toLowerCase().includes("kopi") || 
             commodity.toLowerCase().includes("kakao")) {
    kategori = "Perkebunan"
  } else if (commodity.toLowerCase().includes("kayu") || commodity.toLowerCase().includes("jati")) {
    kategori = "Kehutanan"
  }
  
  return {
    id: commodity,
    kode: `KOM-${uniqueCommodities.indexOf(commodity) + 1}`.padStart(7, '0'),
    nama: commodity,
    kategori,
    satuan: "Ton",
    hargaRata: avgPrice,
    produksi: totalProduction,
    revenue: totalRevenue,
    trend: Math.random() > 0.3 ? "naik" : Math.random() > 0.5 ? "stabil" : "turun",
  }
}).slice(0, 12)

// Generate production trend for last 6 months
const productionTrend = Array.from({ length: 6 }, (_, i) => {
  const month = new Date()
  month.setMonth(month.getMonth() - (5 - i))
  return {
    bulan: month.toLocaleDateString("id-ID", { month: "short" }),
    padi: 4.2 + Math.random() * 0.8,
    jagung: 1.8 + Math.random() * 0.4,
    sawit: 4.0 + Math.random() * 0.3,
  }
})

const columns = [
  { key: "kode", label: "Kode" },
  { key: "nama", label: "Nama Komoditas" },
  {
    key: "kategori",
    label: "Kategori",
    render: (item: typeof commodityStats[0]) => {
      const colors: Record<string, string> = {
        Pertanian: "bg-success/20 text-success",
        Perikanan: "bg-info/20 text-info",
        Perkebunan: "bg-warning/20 text-warning",
        Kehutanan: "bg-chart-2/20 text-chart-2",
      }
      return (
        <Badge variant="secondary" className={colors[item.kategori]}>
          {item.kategori}
        </Badge>
      )
    },
  },
  { key: "satuan", label: "Satuan" },
  {
    key: "hargaRata",
    label: "Harga Rata-rata/Kg",
    render: (item: typeof commodityStats[0]) =>
      `Rp ${item.hargaRata.toLocaleString("id-ID")}`,
  },
  {
    key: "produksi",
    label: "Total Produksi",
    render: (item: typeof commodityStats[0]) =>
      `${item.produksi.toLocaleString("id-ID")} ${item.satuan}`,
  },
  {
    key: "trend",
    label: "Trend",
    render: (item: typeof commodityStats[0]) => {
      const styles: Record<string, string> = {
        naik: "bg-success/20 text-success",
        turun: "bg-destructive/20 text-destructive",
        stabil: "bg-muted text-muted-foreground",
      }
      return (
        <Badge variant="secondary" className={styles[item.trend]}>
          {item.trend.charAt(0).toUpperCase() + item.trend.slice(1)}
        </Badge>
      )
    },
  },
]

// Calculate category counts
const categoryCount = {
  pertanian: commodityStats.filter(c => c.kategori === "Pertanian").length,
  perikanan: commodityStats.filter(c => c.kategori === "Perikanan").length,
  perkebunan: commodityStats.filter(c => c.kategori === "Perkebunan").length,
  kehutanan: commodityStats.filter(c => c.kategori === "Kehutanan").length,
}

export default function MasterKomoditasPage() {
  const [tambahOpen, setTambahOpen] = useState(false)
  const [importOpen, setImportOpen] = useState(false)
  const [exportOpen, setExportOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <DashboardLayout
      title="Master Data Komoditas"
      description="Pengelolaan data komoditas pertanian, perikanan, perkebunan, dan kehutanan"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Data Layer" },
        { label: "Master Komoditas" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Komoditas Pertanian"
          value={categoryCount.pertanian.toString()}
          change={5.2}
          changeLabel="jenis aktif"
          icon={<Wheat className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Komoditas Perikanan"
          value={categoryCount.perikanan.toString()}
          change={3.8}
          changeLabel="jenis aktif"
          icon={<Fish className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Komoditas Perkebunan"
          value={categoryCount.perkebunan.toString()}
          change={2.1}
          changeLabel="jenis aktif"
          icon={<TreePine className="h-5 w-5 text-warning" />}
        />
        <StatsCard
          title="Total Komoditas"
          value={uniqueCommodities.length.toString()}
          change={8.5}
          changeLabel="jenis terdaftar"
          icon={<Factory className="h-5 w-5 text-chart-2" />}
        />
      </div>

      {/* Production Trend Chart */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-card-foreground">Trend Produksi Komoditas Utama</CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={productionTrend}>
              <defs>
                <linearGradient id="colorPadi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-success)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-success)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorJagung" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-warning)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-warning)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSawit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-info)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-info)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="bulan"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                tickFormatter={(value) => `${value} Jt`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => [`${value.toFixed(1)} Juta Ton`, ""]}
              />
              <Area
                type="monotone"
                dataKey="padi"
                stroke="var(--color-success)"
                fill="url(#colorPadi)"
                strokeWidth={2}
                name="Padi"
              />
              <Area
                type="monotone"
                dataKey="jagung"
                stroke="var(--color-warning)"
                fill="url(#colorJagung)"
                strokeWidth={2}
                name="Jagung"
              />
              <Area
                type="monotone"
                dataKey="sawit"
                stroke="var(--color-info)"
                fill="url(#colorSawit)"
                strokeWidth={2}
                name="Kelapa Sawit"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-success" />
              <span className="text-sm text-muted-foreground">Padi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-warning" />
              <span className="text-sm text-muted-foreground">Jagung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-info" />
              <span className="text-sm text-muted-foreground">Kelapa Sawit</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Commodities */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {commodityStats.slice(0, 4).map((commodity, index) => (
          <Card key={commodity.id} className="border-border bg-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className={`rounded-lg p-3 ${
                  index === 0 ? "bg-success/20" :
                  index === 1 ? "bg-warning/20" :
                  index === 2 ? "bg-info/20" : "bg-chart-2/20"
                }`}>
                  <TrendingUp className={`h-6 w-6 ${
                    index === 0 ? "text-success" :
                    index === 1 ? "text-warning" :
                    index === 2 ? "text-info" : "text-chart-2"
                  }`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{commodity.nama}</p>
                  <p className="text-xl font-bold text-card-foreground">
                    {commodity.produksi.toLocaleString("id-ID")} Ton
                  </p>
                  <p className="text-xs text-success">Rp {(commodity.revenue / 1000).toFixed(0)}M</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Actions */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">
          Daftar Komoditas (Menampilkan {commodityStats.length} dari {uniqueCommodities.length})
        </h2>
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
            Tambah Komoditas
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        data={commodityStats}
        columns={columns}
        searchPlaceholder="Cari nama komoditas atau kode..."
        onView={(item) => toast.info(`Melihat detail komoditas ${item.nama}`)}
        onEdit={(item) => toast.info(`Edit data ${item.nama}`)}
        onDelete={(item) => toast.success(`${item.nama} telah dihapus`)}
      />

      {/* Dialogs */}
      <TambahKomoditasDialog open={tambahOpen} onOpenChange={setTambahOpen} />
      <ImportDialog open={importOpen} onOpenChange={setImportOpen} title="Data Komoditas" />
      <ExportDialog open={exportOpen} onOpenChange={setExportOpen} title="Data Komoditas" />
      <FilterDialog open={filterOpen} onOpenChange={setFilterOpen} />
    </DashboardLayout>
  )
}
