"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const diagnosticTrend = [
  { bulan: "Jan", potensi: 72, risiko: 28, gap: 35 },
  { bulan: "Feb", potensi: 74, risiko: 26, gap: 33 },
  { bulan: "Mar", potensi: 76, risiko: 25, gap: 31 },
  { bulan: "Apr", potensi: 78, risiko: 23, gap: 29 },
  { bulan: "Mei", potensi: 80, risiko: 22, gap: 27 },
  { bulan: "Jun", potensi: 82, risiko: 20, gap: 25 },
]

const diagnosticAreas = [
  {
    area: "Ekonomi & Produktivitas",
    potensi: 85,
    realisasi: 68,
    gap: 17,
    status: "warning",
    issues: [
      "Akses pasar terbatas di 12,500 desa",
      "Produktivitas di bawah rata-rata regional",
      "Modal usaha mikro kurang",
    ],
    opportunities: [
      "Digitalisasi pemasaran",
      "Koperasi produksi bersama",
      "Program KUR Pertanian",
    ],
  },
  {
    area: "Infrastruktur & Konektivitas",
    potensi: 78,
    realisasi: 62,
    gap: 16,
    status: "warning",
    issues: [
      "Jalan desa rusak di 8,200 desa",
      "Jaringan internet lambat",
      "Fasilitas penyimpanan kurang",
    ],
    opportunities: [
      "Dana Desa infrastruktur",
      "Kerjasama operator telekomunikasi",
      "Gudang bersama",
    ],
  },
  {
    area: "SDM & Kelembagaan",
    potensi: 80,
    realisasi: 72,
    gap: 8,
    status: "good",
    issues: [
      "Pelatihan teknis kurang merata",
      "Kelembagaan BUMDes lemah",
    ],
    opportunities: [
      "Program pendampingan intensif",
      "Penguatan kapasitas BUMDes",
    ],
  },
  {
    area: "Lingkungan & Keberlanjutan",
    potensi: 75,
    realisasi: 70,
    gap: 5,
    status: "good",
    issues: [
      "Degradasi lahan pertanian",
      "Pengelolaan limbah",
    ],
    opportunities: [
      "Pertanian organik",
      "Program reboisasi",
    ],
  },
]

const riskAlerts = [
  {
    id: "1",
    type: "critical",
    title: "Risiko Kekeringan",
    description: "Prediksi El Nino dapat mempengaruhi 15,000 desa pertanian",
    affected: "15,000 desa",
    timeline: "3-6 bulan ke depan",
  },
  {
    id: "2",
    type: "warning",
    title: "Penurunan Harga Komoditas",
    description: "Harga gabah diprediksi turun 10-15% pada musim panen",
    affected: "23,000 desa",
    timeline: "1-2 bulan ke depan",
  },
  {
    id: "3",
    type: "info",
    title: "Peluang Ekspor",
    description: "Demand kopi arabika meningkat di pasar internasional",
    affected: "2,500 desa",
    timeline: "Sekarang",
  },
]

export default function DiagnosticPage() {
  return (
    <DashboardLayout
      title="Diagnostic Engine"
      description="Analisis kesenjangan potensi, identifikasi masalah, dan deteksi peluang pengembangan desa"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Analytics Layer" },
        { label: "Diagnostic Engine" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Rata-rata Potensi"
          value="82%"
          change={4.2}
          changeLabel="dari bulan lalu"
          icon={<TrendingUp className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Gap Rata-rata"
          value="15%"
          change={-2.5}
          changeLabel="membaik"
          icon={<Target className="h-5 w-5 text-warning" />}
        />
        <StatsCard
          title="Desa Berisiko"
          value="8,452"
          change={-12.3}
          changeLabel="dari bulan lalu"
          icon={<AlertTriangle className="h-5 w-5 text-destructive" />}
        />
        <StatsCard
          title="Peluang Teridentifikasi"
          value="1,250"
          change={18.5}
          changeLabel="baru"
          icon={<Zap className="h-5 w-5 text-info" />}
        />
      </div>

      {/* Trend Chart */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Trend Diagnostik</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={diagnosticTrend}>
              <defs>
                <linearGradient id="colorPotensi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-success)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-success)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorRisiko" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-destructive)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-destructive)" stopOpacity={0} />
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
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="potensi"
                stroke="var(--color-success)"
                fill="url(#colorPotensi)"
                strokeWidth={2}
                name="Realisasi Potensi"
              />
              <Area
                type="monotone"
                dataKey="gap"
                stroke="var(--color-warning)"
                fill="none"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Gap"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-success" />
              <span className="text-sm text-muted-foreground">Realisasi Potensi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full border-2 border-dashed border-warning" />
              <span className="text-sm text-muted-foreground">Gap</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagnostic Areas */}
      <div className="mb-8">
        <h2 className="mb-6 text-xl font-semibold text-foreground">Analisis per Area</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {diagnosticAreas.map((area) => (
            <Card key={area.area} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-card-foreground">{area.area}</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className={
                          area.status === "good"
                            ? "bg-success/20 text-success"
                            : "bg-warning/20 text-warning"
                        }
                      >
                        Gap: {area.gap}%
                      </Badge>
                    </div>
                  </div>
                  {area.status === "good" ? (
                    <CheckCircle className="h-6 w-6 text-success" />
                  ) : (
                    <AlertTriangle className="h-6 w-6 text-warning" />
                  )}
                </div>

                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Potensi</span>
                    <span className="text-card-foreground">{area.potensi}%</span>
                  </div>
                  <Progress value={area.potensi} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Realisasi</span>
                    <span className="text-card-foreground">{area.realisasi}%</span>
                  </div>
                  <Progress value={area.realisasi} className="h-2 bg-warning/20 [&>div]:bg-warning" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-medium text-muted-foreground">ISU UTAMA</p>
                    <ul className="space-y-1">
                      {area.issues.map((issue, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-card-foreground"
                        >
                          <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-warning" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-medium text-muted-foreground">PELUANG</p>
                    <ul className="space-y-1">
                      {area.opportunities.map((opp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-card-foreground"
                        >
                          <Zap className="mt-0.5 h-3 w-3 shrink-0 text-success" />
                          {opp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Risk Alerts */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Alert & Prediksi Risiko</h2>
          <Button variant="outline" className="gap-2">
            <FileSearch className="h-4 w-4" />
            Lihat Semua
          </Button>
        </div>
        <div className="space-y-4">
          {riskAlerts.map((alert) => (
            <Card
              key={alert.id}
              className={`border-l-4 bg-card ${
                alert.type === "critical"
                  ? "border-l-destructive"
                  : alert.type === "warning"
                    ? "border-l-warning"
                    : "border-l-info"
              }`}
            >
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`rounded-lg p-2 ${
                      alert.type === "critical"
                        ? "bg-destructive/20"
                        : alert.type === "warning"
                          ? "bg-warning/20"
                          : "bg-info/20"
                    }`}
                  >
                    {alert.type === "critical" ? (
                      <ShieldAlert className="h-5 w-5 text-destructive" />
                    ) : alert.type === "warning" ? (
                      <AlertTriangle className="h-5 w-5 text-warning" />
                    ) : (
                      <Zap className="h-5 w-5 text-info" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-card-foreground">{alert.title}</h3>
                      <Badge
                        variant="secondary"
                        className={
                          alert.type === "critical"
                            ? "bg-destructive/20 text-destructive"
                            : alert.type === "warning"
                              ? "bg-warning/20 text-warning"
                              : "bg-info/20 text-info"
                        }
                      >
                        {alert.type === "critical"
                          ? "Kritis"
                          : alert.type === "warning"
                            ? "Peringatan"
                            : "Info"}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{alert.description}</p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Terdampak: {alert.affected}</span>
                      <span>|</span>
                      <span>Timeline: {alert.timeline}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Detail
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
