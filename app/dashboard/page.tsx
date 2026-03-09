"use client"

import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { StatsCard } from "@/components/dashboard/stats-card"
import { VillageDNACard, sampleVillages } from "@/components/dashboard/village-dna-card"
import {
  ProductionTrendChart,
  VillageTypeChart,
  RegionalPerformanceChart,
} from "@/components/dashboard/analytics-charts"
import { RecommendationPanel, AlertsPanel } from "@/components/dashboard/recommendation-panel"
import { DataHubPanel } from "@/components/dashboard/data-hub-panel"
import { AIAssistantPanel } from "@/components/dashboard/ai-assistant"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav"
import { InfoTooltip } from "@/components/ui/info-tooltip"
import {
  MapPin,
  Users,
  TrendingUp,
  Database,
  Activity,
  BarChart3,
  Brain,
  Target,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1">
        <Header />

        <main className="p-6">
          {/* Breadcrumb Navigation */}
          <BreadcrumbNav />

          {/* Page Title */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold text-foreground">Dashboard AI Desa</h1>
              <InfoTooltip content="Platform analitik terintegrasi untuk pemetaan DNA Desa, diagnostik potensi, perencanaan pembangunan presisi, dan monitoring evaluasi berbasis AI" />
            </div>
            <p className="mt-1 text-muted-foreground">
              Platform analitik untuk pemetaan DNA Desa, diagnostik potensi, dan perencanaan
              pembangunan presisi
            </p>
          </div>

          {/* Stats Overview */}
          <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Desa Terpetakan"
              value="83,721"
              change={12.5}
              changeLabel="dari bulan lalu"
              icon={<MapPin className="h-5 w-5 text-primary" />}
            />
            <StatsCard
              title="Penduduk Tercakup"
              value="45.2 Juta"
              change={8.3}
              changeLabel="dari bulan lalu"
              icon={<Users className="h-5 w-5 text-chart-2" />}
            />
            <StatsCard
              title="Produksi Total"
              value="2.8 Juta Ton"
              change={15.7}
              changeLabel="dari bulan lalu"
              icon={<TrendingUp className="h-5 w-5 text-success" />}
            />
            <StatsCard
              title="Data Terintegrasi"
              value="2.6 Juta"
              change={-2.3}
              changeLabel="records pending"
              icon={<Database className="h-5 w-5 text-warning" />}
            />
          </div>

          {/* Main Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-secondary">
              <TabsTrigger value="overview" className="gap-2">
                <Activity className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="dna-desa" className="gap-2">
                <Brain className="h-4 w-4" />
                DNA Desa
              </TabsTrigger>
              <TabsTrigger value="analytics" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="gap-2">
                <Target className="h-4 w-4" />
                Rekomendasi
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Charts Row */}
              <div className="grid gap-6 lg:grid-cols-2">
                <ProductionTrendChart />
                <VillageTypeChart />
              </div>

              {/* Alerts and Data Hub */}
              <div className="grid gap-6 lg:grid-cols-2">
                <AlertsPanel />
                <DataHubPanel />
              </div>

              {/* AI Assistant */}
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <RegionalPerformanceChart />
                </div>
                <AIAssistantPanel />
              </div>
            </TabsContent>

            {/* DNA Desa Tab */}
            <TabsContent value="dna-desa" className="space-y-6">
              {/* Section Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Profil DNA Desa</h2>
                  <p className="text-sm text-muted-foreground">
                    Klasifikasi dan profiling desa berdasarkan potensi, risiko, dan karakteristik
                  </p>
                </div>
                <div className="flex gap-2">
                  <select className="rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground">
                    <option>Semua Provinsi</option>
                    <option>Jawa Barat</option>
                    <option>Jawa Tengah</option>
                    <option>Jawa Timur</option>
                  </select>
                  <select className="rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground">
                    <option>Semua Tipe</option>
                    <option>Pertanian</option>
                    <option>Perikanan</option>
                    <option>Wisata</option>
                    <option>Logistik</option>
                  </select>
                </div>
              </div>

              {/* Village Cards Grid */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {sampleVillages.map((village) => (
                  <VillageDNACard key={village.id} village={village} />
                ))}
              </div>

              {/* Summary Stats */}
              <div className="grid gap-4 md:grid-cols-4">
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-success/20 p-2">
                      <TrendingUp className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-card-foreground">45%</p>
                      <p className="text-sm text-muted-foreground">Desa Pertanian</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-info/20 p-2">
                      <Activity className="h-5 w-5 text-info" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-card-foreground">78</p>
                      <p className="text-sm text-muted-foreground">Skor Rata-rata</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-warning/20 p-2">
                      <Target className="h-5 w-5 text-warning" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-card-foreground">1,250</p>
                      <p className="text-sm text-muted-foreground">Desa Prioritas</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-chart-2/20 p-2">
                      <Brain className="h-5 w-5 text-chart-2" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-card-foreground">98%</p>
                      <p className="text-sm text-muted-foreground">Akurasi Klasifikasi</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <ProductionTrendChart />
                <RegionalPerformanceChart />
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                <VillageTypeChart />
                <div className="lg:col-span-2">
                  <DataHubPanel />
                </div>
              </div>
            </TabsContent>

            {/* Recommendations Tab */}
            <TabsContent value="recommendations" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <RecommendationPanel />
                </div>
                <AIAssistantPanel />
              </div>
              <AlertsPanel />
            </TabsContent>
          </Tabs>
        </main>

        {/* Footer */}
        <footer className="border-t border-border px-6 py-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2024 AI Desa Framework - Kementerian Desa, PDT, dan Transmigrasi</p>
            <div className="flex items-center gap-4">
              <span>Versi 1.0.0</span>
              <span>•</span>
              <span>Data terakhir diperbarui: 7 Maret 2026</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
