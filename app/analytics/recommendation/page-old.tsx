"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  ArrowRight,
  Brain,
  Zap,
  ThumbsUp,
  ThumbsDown,
  MapPin,
  Filter,
} from "lucide-react"

const recommendations = [
  {
    id: "1",
    title: "Optimasi Rotasi Tanaman untuk 250 Desa Pertanian di Jawa Barat",
    description:
      "Berdasarkan analisis iklim dan kondisi tanah, disarankan rotasi padi-jagung-kedelai untuk meningkatkan produktivitas 15-20%.",
    category: "Pertanian",
    priority: "Tinggi",
    impact: "Potensi peningkatan pendapatan Rp 45 Miliar/tahun",
    villages: 250,
    confidence: 94,
    status: "pending",
    reasoning: [
      "Kondisi tanah cocok untuk rotasi",
      "Curah hujan mendukung",
      "Akses pasar tersedia",
    ],
  },
  {
    id: "2",
    title: "Pembentukan Klaster Perikanan Terpadu di Pesisir Selatan",
    description:
      "Menggabungkan 85 desa pesisir dalam klaster produksi dan pemasaran bersama untuk efisiensi logistik.",
    category: "Perikanan",
    priority: "Tinggi",
    impact: "Efisiensi biaya logistik 25%",
    villages: 85,
    confidence: 89,
    status: "approved",
    reasoning: [
      "Lokasi geografis berdekatan",
      "Komoditas serupa",
      "BUMDes aktif",
    ],
  },
  {
    id: "3",
    title: "Program Digitalisasi Pasar Desa",
    description:
      "Implementasi platform e-commerce untuk 500 desa dengan potensi pasar lokal yang kuat.",
    category: "Ekonomi",
    priority: "Sedang",
    impact: "Peningkatan omzet UMKM 30%",
    villages: 500,
    confidence: 87,
    status: "implementing",
    reasoning: [
      "Penetrasi internet memadai",
      "UMKM aktif",
      "Produk unik lokal",
    ],
  },
  {
    id: "4",
    title: "Sistem Peringatan Dini Banjir Berbasis IoT",
    description:
      "Instalasi sensor dan sistem peringatan untuk 120 desa rawan banjir di DAS Citarum.",
    category: "Mitigasi",
    priority: "Tinggi",
    impact: "Pengurangan kerugian 60%",
    villages: 120,
    confidence: 92,
    status: "pending",
    reasoning: [
      "Riwayat banjir tinggi",
      "Kepadatan penduduk tinggi",
      "Infrastruktur mendukung",
    ],
  },
  {
    id: "5",
    title: "Pengembangan Agrowisata Terintegrasi",
    description:
      "Membangun paket wisata terintegrasi untuk 45 desa dengan potensi alam dan budaya.",
    category: "Wisata",
    priority: "Sedang",
    impact: "Pendapatan wisata Rp 12 Miliar/tahun",
    villages: 45,
    confidence: 85,
    status: "pending",
    reasoning: [
      "Potensi wisata unik",
      "Akses transportasi",
      "Dukungan komunitas",
    ],
  },
]

const aiInsights = [
  {
    title: "Prediksi Musim Tanam Optimal",
    description: "Model AI memprediksi waktu tanam optimal untuk padi di 15,000 desa berdasarkan data BMKG dan historis.",
    accuracy: "92%",
  },
  {
    title: "Deteksi Anomali Harga",
    description: "Sistem mendeteksi potensi fluktuasi harga gabah dalam 30 hari ke depan di 5 provinsi.",
    accuracy: "88%",
  },
  {
    title: "Clustering Desa Serupa",
    description: "Identifikasi 1,250 klaster desa dengan karakteristik serupa untuk replikasi program sukses.",
    accuracy: "94%",
  },
]

export default function RecommendationPage() {
  return (
    <DashboardLayout
      title="Recommendation Engine"
      description="Rekomendasi AI berbasis data untuk intervensi dan pengembangan desa"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Analytics Layer" },
        { label: "Recommendation Engine" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Rekomendasi"
          value="1,250"
          change={85}
          changeLabel="baru minggu ini"
          icon={<Lightbulb className="h-5 w-5 text-warning" />}
        />
        <StatsCard
          title="Diterima"
          value="892"
          change={71.4}
          changeLabel="acceptance rate"
          icon={<CheckCircle className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Diimplementasi"
          value="456"
          change={51.1}
          changeLabel="implementation rate"
          icon={<Zap className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Akurasi Model"
          value="91.2%"
          change={2.5}
          changeLabel="improvement"
          icon={<Brain className="h-5 w-5 text-info" />}
        />
      </div>

      {/* AI Insights */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle className="text-card-foreground">AI Insights</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {aiInsights.map((insight) => (
              <div key={insight.title} className="rounded-lg bg-secondary p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold text-card-foreground">{insight.title}</h4>
                  <Badge variant="secondary" className="bg-success/20 text-success">
                    {insight.accuracy}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations List */}
      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="bg-secondary">
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="pending">Menunggu</TabsTrigger>
            <TabsTrigger value="approved">Disetujui</TabsTrigger>
            <TabsTrigger value="implementing">Implementasi</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="gap-2">
              <Sparkles className="h-4 w-4" />
              Generate Baru
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          {recommendations.map((rec) => (
            <Card key={rec.id} className="border-border bg-card">
              <CardContent className="py-6">
                <div className="flex gap-6">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className={
                          rec.category === "Pertanian"
                            ? "bg-success/20 text-success"
                            : rec.category === "Perikanan"
                              ? "bg-info/20 text-info"
                              : rec.category === "Wisata"
                                ? "bg-warning/20 text-warning"
                                : rec.category === "Mitigasi"
                                  ? "bg-destructive/20 text-destructive"
                                  : "bg-chart-2/20 text-chart-2"
                        }
                      >
                        {rec.category}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={
                          rec.priority === "Tinggi"
                            ? "bg-destructive/20 text-destructive"
                            : "bg-info/20 text-info"
                        }
                      >
                        Prioritas {rec.priority}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={
                          rec.status === "pending"
                            ? "bg-warning/20 text-warning"
                            : rec.status === "approved"
                              ? "bg-success/20 text-success"
                              : "bg-primary/20 text-primary"
                        }
                      >
                        {rec.status === "pending" ? (
                          <Clock className="mr-1 h-3 w-3" />
                        ) : rec.status === "approved" ? (
                          <CheckCircle className="mr-1 h-3 w-3" />
                        ) : (
                          <Zap className="mr-1 h-3 w-3" />
                        )}
                        {rec.status === "pending"
                          ? "Menunggu"
                          : rec.status === "approved"
                            ? "Disetujui"
                            : "Implementasi"}
                      </Badge>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold text-card-foreground">{rec.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{rec.description}</p>

                    <div className="mb-4 flex items-center gap-6 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {rec.villages} Desa
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Target className="h-4 w-4" />
                        {rec.impact}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Brain className="h-4 w-4" />
                        Confidence: {rec.confidence}%
                      </span>
                    </div>

                    {/* Reasoning */}
                    <div className="rounded-lg bg-secondary p-3">
                      <p className="mb-2 text-xs font-medium text-muted-foreground">
                        AI REASONING
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {rec.reasoning.map((reason, idx) => (
                          <Badge key={idx} variant="outline" className="border-border">
                            {reason}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    {rec.status === "pending" && (
                      <>
                        <Button className="gap-2">
                          <ThumbsUp className="h-4 w-4" />
                          Setujui
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <ThumbsDown className="h-4 w-4" />
                          Tolak
                        </Button>
                      </>
                    )}
                    <Button variant="ghost" className="gap-2">
                      Detail
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending">
          <Card className="border-border bg-card p-8 text-center">
            <Clock className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Rekomendasi yang menunggu persetujuan</p>
          </Card>
        </TabsContent>

        <TabsContent value="approved">
          <Card className="border-border bg-card p-8 text-center">
            <CheckCircle className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Rekomendasi yang sudah disetujui</p>
          </Card>
        </TabsContent>

        <TabsContent value="implementing">
          <Card className="border-border bg-card p-8 text-center">
            <Zap className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-card-foreground">Rekomendasi yang sedang diimplementasi</p>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
