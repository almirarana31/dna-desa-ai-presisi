"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Target,
  Calendar,
  DollarSign,
  Users,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  ArrowRight,
  MapPin,
  Building2,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

const budgetAllocation = [
  { sektor: "Infrastruktur", anggaran: 45.2, realisasi: 38.5 },
  { sektor: "Pertanian", anggaran: 32.8, realisasi: 28.2 },
  { sektor: "Pendidikan", anggaran: 18.5, realisasi: 16.8 },
  { sektor: "Kesehatan", anggaran: 15.2, realisasi: 14.1 },
  { sektor: "Ekonomi", anggaran: 12.8, realisasi: 10.5 },
]

const planningProjects = [
  {
    id: "1",
    nama: "Pembangunan Jalan Desa Terpadu",
    desa: "250 Desa",
    provinsi: "Multi-provinsi",
    anggaran: "Rp 125 Miliar",
    progress: 67,
    status: "on-track",
    target: "Des 2024",
    prioritas: "Tinggi",
  },
  {
    id: "2",
    nama: "Irigasi Pertanian Modern",
    desa: "180 Desa",
    provinsi: "Jawa Barat",
    anggaran: "Rp 85 Miliar",
    progress: 45,
    status: "on-track",
    target: "Mar 2025",
    prioritas: "Tinggi",
  },
  {
    id: "3",
    nama: "Digitalisasi BUMDes",
    desa: "500 Desa",
    provinsi: "Nasional",
    anggaran: "Rp 45 Miliar",
    progress: 82,
    status: "ahead",
    target: "Sep 2024",
    prioritas: "Sedang",
  },
  {
    id: "4",
    nama: "Pelatihan Petani Milenial",
    desa: "1,200 Desa",
    provinsi: "Nasional",
    anggaran: "Rp 28 Miliar",
    progress: 35,
    status: "delayed",
    target: "Jun 2025",
    prioritas: "Sedang",
  },
  {
    id: "5",
    nama: "Gudang Komoditas Bersama",
    desa: "75 Desa",
    provinsi: "Jawa Timur",
    anggaran: "Rp 62 Miliar",
    progress: 55,
    status: "on-track",
    target: "Jan 2025",
    prioritas: "Tinggi",
  },
]

const priorityMatrix = [
  { kategori: "Sangat Prioritas", jumlah: 1250, deskripsi: "Intervensi segera diperlukan" },
  { kategori: "Prioritas", jumlah: 3500, deskripsi: "Perlu perhatian dalam 6 bulan" },
  { kategori: "Sedang", jumlah: 12800, deskripsi: "Pemantauan berkala" },
  { kategori: "Rendah", jumlah: 66171, deskripsi: "Kondisi stabil" },
]

export default function PlanningPage() {
  return (
    <DashboardLayout
      title="Planning Engine"
      description="Perencanaan intervensi berbasis prioritas dan optimasi alokasi sumber daya"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Analytics Layer" },
        { label: "Planning Engine" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Program"
          value="156"
          change={12}
          changeLabel="program baru"
          icon={<Target className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Total Anggaran"
          value="Rp 2.8 T"
          change={15.5}
          changeLabel="dari tahun lalu"
          icon={<DollarSign className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Desa Tercakup"
          value="45,250"
          change={8.2}
          changeLabel="dari tahun lalu"
          icon={<MapPin className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Realisasi"
          value="78.5%"
          change={5.2}
          changeLabel="improvement"
          icon={<CheckCircle className="h-5 w-5 text-warning" />}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Budget Allocation Chart */}
        <Card className="lg:col-span-2 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Alokasi & Realisasi Anggaran per Sektor</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={budgetAllocation} layout="vertical">
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                  tickFormatter={(value) => `Rp ${value} T`}
                />
                <YAxis
                  type="category"
                  dataKey="sektor"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                  width={100}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [`Rp ${value} Triliun`, ""]}
                />
                <Bar dataKey="anggaran" fill="var(--color-primary)" radius={[0, 4, 4, 0]} name="Anggaran" />
                <Bar dataKey="realisasi" fill="var(--color-success)" radius={[0, 4, 4, 0]} name="Realisasi" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-primary" />
                <span className="text-sm text-muted-foreground">Anggaran</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-success" />
                <span className="text-sm text-muted-foreground">Realisasi</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Priority Matrix */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Matriks Prioritas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {priorityMatrix.map((item, index) => {
                const colors = [
                  "bg-destructive/20 text-destructive border-destructive/30",
                  "bg-warning/20 text-warning border-warning/30",
                  "bg-info/20 text-info border-info/30",
                  "bg-success/20 text-success border-success/30",
                ]
                return (
                  <div
                    key={item.kategori}
                    className={`rounded-lg border p-4 ${colors[index]}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{item.kategori}</span>
                      <span className="text-lg font-bold">
                        {item.jumlah.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <p className="mt-1 text-xs opacity-80">{item.deskripsi}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <div className="mt-8">
        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="bg-secondary">
              <TabsTrigger value="all">Semua Program</TabsTrigger>
              <TabsTrigger value="priority">Prioritas Tinggi</TabsTrigger>
              <TabsTrigger value="delayed">Terlambat</TabsTrigger>
            </TabsList>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Tambah Program
            </Button>
          </div>

          <TabsContent value="all" className="space-y-4">
            {planningProjects.map((project) => (
              <Card key={project.id} className="border-border bg-card">
                <CardContent className="py-4">
                  <div className="flex items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-card-foreground">{project.nama}</h3>
                        <Badge
                          variant="secondary"
                          className={
                            project.prioritas === "Tinggi"
                              ? "bg-destructive/20 text-destructive"
                              : "bg-info/20 text-info"
                          }
                        >
                          {project.prioritas}
                        </Badge>
                      </div>
                      <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {project.desa}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {project.provinsi}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          {project.anggaran}
                        </span>
                      </div>
                    </div>

                    <div className="w-48">
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-card-foreground">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className={
                          project.status === "on-track"
                            ? "bg-success/20 text-success"
                            : project.status === "ahead"
                              ? "bg-info/20 text-info"
                              : "bg-destructive/20 text-destructive"
                        }
                      >
                        {project.status === "on-track" ? (
                          <CheckCircle className="mr-1 h-3 w-3" />
                        ) : project.status === "ahead" ? (
                          <Clock className="mr-1 h-3 w-3" />
                        ) : (
                          <AlertCircle className="mr-1 h-3 w-3" />
                        )}
                        {project.status === "on-track"
                          ? "Sesuai Jadwal"
                          : project.status === "ahead"
                            ? "Lebih Cepat"
                            : "Terlambat"}
                      </Badge>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Target</p>
                      <p className="font-semibold text-card-foreground">{project.target}</p>
                    </div>

                    <Button variant="ghost" size="icon">
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="priority">
            <Card className="border-border bg-card p-8 text-center">
              <Target className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-card-foreground">Filter program prioritas tinggi</p>
            </Card>
          </TabsContent>

          <TabsContent value="delayed">
            <Card className="border-border bg-card p-8 text-center">
              <AlertCircle className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-card-foreground">Filter program yang terlambat</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
