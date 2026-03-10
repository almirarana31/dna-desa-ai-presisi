"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DataTable } from "@/components/dashboard/data-table"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TambahPendudukDialog, ImportDialog, ExportDialog, FilterDialog } from "@/components/ui/crud-dialogs"
import { toast } from "sonner"
import {
  Users,
  UserCheck,
  UserX,
  Baby,
  Plus,
  Upload,
  TrendingUp,
  TrendingDown,
  Download,
  GraduationCap,
  Filter,
} from "lucide-react"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"
import { villages, getVillageStats } from "@/lib/mock-data"

// Calculate population statistics from villages
const stats = getVillageStats()
const totalPopulation = villages.reduce((sum, v) => sum + v.population, 0)
const avgLiteracyRate = villages.reduce((sum, v) => sum + v.social.literacyRate, 0) / villages.length

// Generate sample population data from villages
const populationData = villages.slice(0, 15).map((v, index) => ({
  id: `POP-${index + 1}`,
  nik: `${Math.floor(Math.random() * 9000000000000000) + 1000000000000000}`,
  nama: `Penduduk ${v.name} ${index + 1}`,
  desa: v.name,
  usia: Math.floor(Math.random() * 60) + 18,
  jenisKelamin: Math.random() > 0.5 ? "L" : "P",
  pekerjaan: v.type === "pertanian" ? "Petani" : 
             v.type === "perikanan" ? "Nelayan" :
             v.type === "wisata" ? "Pelaku Wisata" :
             v.type === "logistik" ? "Pedagang" : "Wirausaha",
  pendidikan: Math.random() > 0.7 ? "S1" : Math.random() > 0.5 ? "SMA" : Math.random() > 0.3 ? "SMP" : "SD",
  status: Math.random() > 0.9 ? "pindah" : "aktif",
}))

const genderData = [
  { name: "Laki-laki", value: 49.2, color: "var(--color-chart-4)" },
  { name: "Perempuan", value: 50.8, color: "var(--color-chart-5)" },
]

const ageData = [
  { range: "0-14", jumlah: totalPopulation * 0.25 },
  { range: "15-24", jumlah: totalPopulation * 0.18 },
  { range: "25-44", jumlah: totalPopulation * 0.32 },
  { range: "45-64", jumlah: totalPopulation * 0.18 },
  { range: "65+", jumlah: totalPopulation * 0.07 },
]

const columns = [
  { key: "nik", label: "NIK" },
  { key: "nama", label: "Nama Lengkap" },
  { key: "desa", label: "Desa" },
  { key: "usia", label: "Usia" },
  {
    key: "jenisKelamin",
    label: "Jenis Kelamin",
    render: (item: typeof populationData[0]) => (
      <Badge
        variant="secondary"
        className={
          item.jenisKelamin === "L"
            ? "bg-chart-4/20 text-chart-4"
            : "bg-chart-5/20 text-chart-5"
        }
      >
        {item.jenisKelamin === "L" ? "Laki-laki" : "Perempuan"}
      </Badge>
    ),
  },
  { key: "pekerjaan", label: "Pekerjaan" },
  { key: "pendidikan", label: "Pendidikan" },
  {
    key: "status",
    label: "Status",
    render: (item: typeof populationData[0]) => (
      <Badge
        variant="secondary"
        className={
          item.status === "aktif"
            ? "bg-success/20 text-success"
            : "bg-warning/20 text-warning"
        }
      >
        {item.status === "aktif" ? "Aktif" : "Pindah"}
      </Badge>
    ),
  },
]

export default function MasterPendudukPage() {
  const [tambahOpen, setTambahOpen] = useState(false)
  const [importOpen, setImportOpen] = useState(false)
  const [exportOpen, setExportOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <DashboardLayout
      title="Master Data Penduduk"
      description="Pengelolaan data kependudukan termasuk demografi, pekerjaan, dan status sosial ekonomi"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Data Layer" },
        { label: "Master Penduduk" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Penduduk"
          value={(totalPopulation / 1000).toFixed(1) + "K"}
          change={1.2}
          changeLabel="dari tahun lalu"
          icon={<Users className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Penduduk Aktif"
          value={(totalPopulation * 0.95 / 1000).toFixed(1) + "K"}
          change={1.5}
          changeLabel="dari tahun lalu"
          icon={<UserCheck className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Migrasi Keluar"
          value={(totalPopulation * 0.05).toFixed(0)}
          change={-2.3}
          changeLabel="dari tahun lalu"
          icon={<UserX className="h-5 w-5 text-destructive" />}
        />
        <StatsCard
          title="Kelahiran/Tahun"
          value={(totalPopulation * 0.015).toFixed(0)}
          change={0.8}
          changeLabel="per tahun"
          icon={<Baby className="h-5 w-5 text-info" />}
        />
      </div>

      {/* Demographics Charts */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Distribusi Jenis Kelamin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <ResponsiveContainer width={180} height={180}>
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-4">
                {genderData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-card-foreground">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-card-foreground">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Distribusi Usia</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={ageData}>
                <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [
                    `${value.toLocaleString("id-ID")} orang`,
                    "Penduduk",
                  ]}
                />
                <Bar dataKey="jumlah" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Insights */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-success/20 p-3">
                <GraduationCap className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Angka Melek Huruf</p>
                <p className="text-2xl font-bold text-card-foreground">{avgLiteracyRate.toFixed(1)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-info/20 p-3">
                <Users className="h-6 w-6 text-info" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rata-rata Usia</p>
                <p className="text-2xl font-bold text-card-foreground">32.5 Tahun</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-warning/20 p-3">
                <TrendingDown className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Angka Pengangguran</p>
                <p className="text-2xl font-bold text-card-foreground">5.4%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-chart-2/20 p-3">
                <TrendingUp className="h-6 w-6 text-chart-2" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Kepadatan</p>
                <p className="text-2xl font-bold text-card-foreground">
                  {(totalPopulation / villages.reduce((sum, v) => sum + v.area, 0)).toFixed(0)}/km²
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">
          Daftar Penduduk (Menampilkan {populationData.length} dari {totalPopulation.toLocaleString("id-ID")})
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
            Tambah Penduduk
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        data={populationData}
        columns={columns}
        searchPlaceholder="Cari nama, NIK, atau desa..."
        onView={(item) => toast.info(`Melihat detail ${item.nama}`)}
        onEdit={(item) => toast.info(`Edit data ${item.nama}`)}
        onDelete={(item) => toast.success(`${item.nama} telah dihapus`)}
      />

      {/* Dialogs */}
      <TambahPendudukDialog open={tambahOpen} onOpenChange={setTambahOpen} />
      <ImportDialog open={importOpen} onOpenChange={setImportOpen} title="Data Penduduk" />
      <ExportDialog open={exportOpen} onOpenChange={setExportOpen} title="Data Penduduk" />
      <FilterDialog open={filterOpen} onOpenChange={setFilterOpen} />
    </DashboardLayout>
  )
}
