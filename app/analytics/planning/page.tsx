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
  Calendar,
  Clock,
  Target,
  TrendingUp,
  DollarSign,
  CheckCircle2,
  FileText,
  Download,
  Zap,
} from "lucide-react"
import { recommendations } from "@/lib/mock-data"

// Filter recommendations by timeframe
const shortTermPlans = recommendations.filter(r => r.timeframe === "pendek")
const mediumTermPlans = recommendations.filter(r => r.timeframe === "menengah")
const longTermPlans = recommendations.filter(r => r.timeframe === "panjang")

// Calculate statistics
const totalInvestment = recommendations.reduce((sum, r) => sum + r.estimatedCost, 0)
const totalExpectedRevenue = recommendations.reduce((sum, r) => sum + r.estimatedRevenue, 0)
const averageROI = recommendations.reduce((sum, r) => sum + r.roi, 0) / recommendations.length

export default function PlanningEnginePage() {
  const [detailOpen, setDetailOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<typeof recommendations[0] | null>(null)

  const handleSetujui = (plan: typeof recommendations[0]) => {
    toast.success(`Rencana "${plan.title}" telah disetujui`)
  }

  const handleViewDetail = (plan: typeof recommendations[0]) => {
    setSelectedPlan(plan)
    setDetailOpen(true)
  }

  return (
    <DashboardLayout
      title="Planning Engine"
      description="Perencanaan pembangunan desa berbasis data dengan 3 timeframe: Pendek, Menengah, dan Panjang"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Analytics Layer" },
        { label: "Planning Engine" },
      ]}
    >
      {/* Stats Overview */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Rencana Aktif"
          value={recommendations.length.toString()}
          change={15}
          changeLabel="dari bulan lalu"
          icon={<FileText className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Total Investasi"
          value={`Rp ${(totalInvestment / 1000).toFixed(1)}M`}
          change={22}
          changeLabel="alokasi anggaran"
          icon={<DollarSign className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Proyeksi Revenue"
          value={`Rp ${(totalExpectedRevenue / 1000).toFixed(1)}M`}
          change={35}
          changeLabel="potensi pendapatan"
          icon={<TrendingUp className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Rata-rata ROI"
          value={`${averageROI.toFixed(0)}%`}
          change={12}
          changeLabel="return on investment"
          icon={<Target className="h-5 w-5 text-warning" />}
        />
      </div>

      {/* Planning Timeframes - PowerPoint Slide 9 */}
      <Tabs defaultValue="pendek" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="pendek" className="gap-2">
            <Zap className="h-4 w-4" />
            Jangka Pendek ({shortTermPlans.length})
          </TabsTrigger>
          <TabsTrigger value="menengah" className="gap-2">
            <Clock className="h-4 w-4" />
            Jangka Menengah ({mediumTermPlans.length})
          </TabsTrigger>
          <TabsTrigger value="panjang" className="gap-2">
            <Calendar className="h-4 w-4" />
            Jangka Panjang ({longTermPlans.length})
          </TabsTrigger>
        </TabsList>

        {/* Short Term Plans */}
        <TabsContent value="pendek" className="space-y-6">
          <Card className="border-success/30 bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Rencana Jangka Pendek (0-12 Bulan)</CardTitle>
              <CardDescription>Program quick-win dengan implementasi cepat</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {shortTermPlans.slice(0, 6).map((plan) => (
                  <Card key={plan.id} className="border-border bg-secondary/50">
                    <CardContent className="py-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-success/20 p-3">
                          <Target className="h-6 w-6 text-success" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-card-foreground">{plan.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{plan.villageName}</p>
                          <p className="mt-2 text-sm text-card-foreground">{plan.description}</p>
                          
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                            <div>
                              <span className="text-muted-foreground">Investasi: </span>
                              <span className="font-semibold">Rp {plan.estimatedCost} juta</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Revenue: </span>
                              <span className="font-semibold">Rp {plan.estimatedRevenue} juta</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">ROI: </span>
                              <span className="font-semibold text-success">{plan.roi}%</span>
                            </div>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            <Button size="sm" onClick={() => handleSetujui(plan)}>
                              <CheckCircle2 className="mr-2 h-4 w-4" />
                              Setujui
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleViewDetail(plan)}>
                              Detail
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Medium Term Plans */}
        <TabsContent value="menengah" className="space-y-6">
          <Card className="border-info/30 bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Rencana Jangka Menengah (12-36 Bulan)</CardTitle>
              <CardDescription>Program strategis dengan dampak berkelanjutan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mediumTermPlans.slice(0, 6).map((plan) => (
                  <Card key={plan.id} className="border-border bg-secondary/50">
                    <CardContent className="py-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-info/20 p-3">
                          <Clock className="h-6 w-6 text-info" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-card-foreground">{plan.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{plan.villageName}</p>
                          <p className="mt-2 text-sm text-card-foreground">{plan.description}</p>
                          
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                            <div>
                              <span className="text-muted-foreground">Investasi: </span>
                              <span className="font-semibold">Rp {plan.estimatedCost} juta</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Revenue: </span>
                              <span className="font-semibold">Rp {plan.estimatedRevenue} juta</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">ROI: </span>
                              <span className="font-semibold text-success">{plan.roi}%</span>
                            </div>
                          </div>

                          <div className="mt-3 flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleViewDetail(plan)}>Detail</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Long Term Plans */}
        <TabsContent value="panjang" className="space-y-6">
          <Card className="border-warning/30 bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Rencana Jangka Panjang (36+ Bulan)</CardTitle>
              <CardDescription>Program transformatif dengan dampak jangka panjang</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {longTermPlans.slice(0, 6).map((plan) => (
                  <Card key={plan.id} className="border-border bg-secondary/50">
                    <CardContent className="py-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-warning/20 p-3">
                          <Calendar className="h-6 w-6 text-warning" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-card-foreground">{plan.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{plan.villageName}</p>
                          <p className="mt-2 text-sm text-card-foreground">{plan.description}</p>
                          
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                            <div>
                              <span className="text-muted-foreground">Investasi: </span>
                              <span className="font-semibold">Rp {plan.estimatedCost} juta</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Revenue: </span>
                              <span className="font-semibold">Rp {plan.estimatedRevenue} juta</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">ROI: </span>
                              <span className="font-semibold text-success">{plan.roi}%</span>
                            </div>
                          </div>

                          <div className="mt-3 flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleViewDetail(plan)}>Detail</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Detail Dialog */}
      <DetailDialog
        open={detailOpen}
        onOpenChange={setDetailOpen}
        title={selectedPlan?.title || "Detail Rencana"}
      >
        {selectedPlan && (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground">Desa</h4>
              <p className="text-muted-foreground">{selectedPlan.villageName}</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Deskripsi</h4>
              <p className="text-muted-foreground">{selectedPlan.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-foreground">Investasi</h4>
                <p className="text-xl font-bold text-primary">Rp {selectedPlan.estimatedCost} juta</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Proyeksi Revenue</h4>
                <p className="text-xl font-bold text-success">Rp {selectedPlan.estimatedRevenue} juta</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-foreground">ROI</h4>
                <p className="text-xl font-bold text-info">{selectedPlan.roi}%</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Jangka Waktu</h4>
                <Badge variant="outline" className="capitalize">
                  {selectedPlan.timeframe === "pendek" ? "0-12 Bulan" : 
                   selectedPlan.timeframe === "menengah" ? "12-36 Bulan" : "36+ Bulan"}
                </Badge>
              </div>
            </div>
            <div className="pt-4 flex gap-2">
              <Button className="flex-1" onClick={() => { handleSetujui(selectedPlan); setDetailOpen(false); }}>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Setujui Rencana
              </Button>
            </div>
          </div>
        )}
      </DetailDialog>
    </DashboardLayout>
  )
}
