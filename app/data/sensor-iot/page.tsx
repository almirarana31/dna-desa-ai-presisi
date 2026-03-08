"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Wifi,
  Thermometer,
  Droplets,
  Wind,
  Activity,
  Signal,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Zap,
  CloudRain,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { sensorData } from "@/lib/mock-data"

// Calculate stats from real sensor data
const totalSensors = sensorData.length
const onlineSensors = sensorData.filter(s => s.lastReading.status !== "critical").length
const warningSensors = sensorData.filter(s => s.lastReading.status === "warning").length
const criticalSensors = sensorData.filter(s => s.lastReading.status === "critical").length

// Generate hourly data for chart (last 24 hours)
const chartData = Array.from({ length: 24 }, (_, i) => {
  const hour = (new Date().getHours() - (23 - i) + 24) % 24
  return {
    waktu: `${hour.toString().padStart(2, '0')}:00`,
    suhu: 24 + Math.random() * 8,
    kelembaban: 60 + Math.random() * 25,
    curahHujan: Math.random() > 0.7 ? Math.random() * 10 : 0,
  }
})

// Map sensor data to display format
const sensors = sensorData.slice(0, 12).map(s => ({
  id: s.id,
  nama: `Sensor ${s.sensorType.toUpperCase()} ${s.villageName}`,
  desa: `${s.villageName}`,
  tipe: s.sensorType === "soil" ? "Soil Sensor" : 
        s.sensorType === "weather" ? "Multi-sensor" :
        s.sensorType === "water" ? "Water Level" : "Air Quality",
  status: s.lastReading.status === "normal" ? "online" : 
          s.lastReading.status === "warning" ? "warning" : "offline",
  lastUpdate: new Date(s.lastReading.timestamp).toLocaleString("id-ID", { 
    hour: "2-digit", 
    minute: "2-digit" 
  }),
  battery: Math.floor(Math.random() * 50) + 50,
  signal: Math.floor(Math.random() * 40) + 60,
  value: s.lastReading.value.toFixed(1),
  unit: s.lastReading.unit,
}))

// Calculate average readings
const avgTemp = chartData.reduce((sum, d) => sum + d.suhu, 0) / chartData.length
const avgHumidity = chartData.reduce((sum, d) => sum + d.kelembaban, 0) / chartData.length
const totalRainfall = chartData.reduce((sum, d) => sum + d.curahHujan, 0)

export default function SensorIoTPage() {
  return (
    <DashboardLayout
      title="Data Sensor IoT"
      description="Monitoring real-time data dari sensor IoT yang terpasang di berbagai desa"
      breadcrumb={[
        { label: "Dashboard", href: "/" },
        { label: "Data Layer" },
        { label: "Sensor IoT" },
      ]}
    >
      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Sensor"
          value={totalSensors.toLocaleString("id-ID")}
          change={15.2}
          changeLabel="dari bulan lalu"
          icon={<Wifi className="h-5 w-5 text-primary" />}
        />
        <StatsCard
          title="Sensor Online"
          value={onlineSensors.toLocaleString("id-ID")}
          change={2.5}
          changeLabel="dari bulan lalu"
          icon={<CheckCircle className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Perlu Perhatian"
          value={warningSensors.toString()}
          change={-8.3}
          changeLabel="dari bulan lalu"
          icon={<AlertTriangle className="h-5 w-5 text-warning" />}
        />
        <StatsCard
          title="Data per Hari"
          value="2.8 Juta"
          change={12.1}
          changeLabel="records"
          icon={<Activity className="h-5 w-5 text-info" />}
        />
      </div>

      {/* Real-time Monitoring */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-card-foreground">Monitoring Cuaca Real-time</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className="border-success text-success">
              <Zap className="mr-1 h-3 w-3" />
              Live Data
            </Badge>
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-secondary p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-destructive/20 p-2">
                  <Thermometer className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Suhu Rata-rata</p>
                  <p className="text-2xl font-bold text-card-foreground">{avgTemp.toFixed(1)}°C</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-info/20 p-2">
                  <Droplets className="h-5 w-5 text-info" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Kelembaban</p>
                  <p className="text-2xl font-bold text-card-foreground">{avgHumidity.toFixed(0)}%</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/20 p-2">
                  <CloudRain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Curah Hujan 24j</p>
                  <p className="text-2xl font-bold text-card-foreground">{totalRainfall.toFixed(1)} mm</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-warning/20 p-2">
                  <Wind className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Kec. Angin</p>
                  <p className="text-2xl font-bold text-card-foreground">12 km/j</p>
                </div>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis
                dataKey="waktu"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="suhu"
                stroke="var(--color-destructive)"
                strokeWidth={2}
                dot={{ fill: "var(--color-destructive)", r: 4 }}
                name="Suhu (°C)"
              />
              <Line
                type="monotone"
                dataKey="kelembaban"
                stroke="var(--color-info)"
                strokeWidth={2}
                dot={{ fill: "var(--color-info)", r: 4 }}
                name="Kelembaban (%)"
              />
              <Line
                type="monotone"
                dataKey="curahHujan"
                stroke="var(--color-primary)"
                strokeWidth={2}
                dot={{ fill: "var(--color-primary)", r: 4 }}
                name="Curah Hujan (mm)"
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <span className="text-sm text-muted-foreground">Suhu</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-info" />
              <span className="text-sm text-muted-foreground">Kelembaban</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Curah Hujan</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sensor Status Summary */}
      <Card className="mb-8 border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Status Sensor Network</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-success/10 border border-success/20">
              <CheckCircle className="h-8 w-8 text-success" />
              <div>
                <p className="text-2xl font-bold text-success">{onlineSensors}</p>
                <p className="text-sm text-muted-foreground">Online & Normal</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-warning/10 border border-warning/20">
              <AlertTriangle className="h-8 w-8 text-warning" />
              <div>
                <p className="text-2xl font-bold text-warning">{warningSensors}</p>
                <p className="text-sm text-muted-foreground">Warning Status</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <div>
                <p className="text-2xl font-bold text-destructive">{criticalSensors}</p>
                <p className="text-sm text-muted-foreground">Critical/Offline</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-info/10 border border-info/20">
              <Activity className="h-8 w-8 text-info" />
              <div>
                <p className="text-2xl font-bold text-info">{((onlineSensors / totalSensors) * 100).toFixed(1)}%</p>
                <p className="text-sm text-muted-foreground">Uptime Rate</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sensor List */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Daftar Sensor (Menampilkan 12 dari {totalSensors})</h2>
        <Button className="gap-2">
          <Wifi className="h-4 w-4" />
          Tambah Sensor
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sensors.map((sensor) => (
          <Card key={sensor.id} className="border-border bg-card">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="font-semibold text-card-foreground">{sensor.nama}</p>
                  <p className="text-sm text-muted-foreground">{sensor.desa}</p>
                </div>
                <Badge
                  variant="secondary"
                  className={
                    sensor.status === "online"
                      ? "bg-success/20 text-success"
                      : sensor.status === "warning"
                        ? "bg-warning/20 text-warning"
                        : "bg-destructive/20 text-destructive"
                  }
                >
                  {sensor.status === "online"
                    ? "Online"
                    : sensor.status === "warning"
                      ? "Warning"
                      : "Offline"}
                </Badge>
              </div>

              <div className="mb-4 flex items-center gap-4 text-sm">
                <span className="text-muted-foreground">ID: {sensor.id}</span>
                <Badge variant="outline" className="border-border">
                  {sensor.tipe}
                </Badge>
              </div>

              {/* Current Reading */}
              <div className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-xs text-muted-foreground mb-1">Current Reading</p>
                <p className="text-2xl font-bold text-primary">
                  {sensor.value} <span className="text-sm font-normal">{sensor.unit}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-secondary p-3">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Battery</span>
                  </div>
                  <p
                    className={`mt-1 text-lg font-semibold ${sensor.battery > 50 ? "text-success" : sensor.battery > 20 ? "text-warning" : "text-destructive"}`}
                  >
                    {sensor.battery}%
                  </p>
                </div>
                <div className="rounded-lg bg-secondary p-3">
                  <div className="flex items-center gap-2">
                    <Signal className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Signal</span>
                  </div>
                  <p
                    className={`mt-1 text-lg font-semibold ${sensor.signal > 70 ? "text-success" : sensor.signal > 40 ? "text-warning" : "text-destructive"}`}
                  >
                    {sensor.signal}%
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Update terakhir: {sensor.lastUpdate}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
