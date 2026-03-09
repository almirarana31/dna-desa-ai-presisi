"use client"

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

// Production Trend Data
const productionData = [
  { month: "Jan", padi: 4200, jagung: 2800, cabai: 1800 },
  { month: "Feb", padi: 4500, jagung: 2600, cabai: 2100 },
  { month: "Mar", padi: 4800, jagung: 3100, cabai: 2400 },
  { month: "Apr", padi: 5200, jagung: 3400, cabai: 2200 },
  { month: "Mei", padi: 5800, jagung: 3800, cabai: 2600 },
  { month: "Jun", padi: 5500, jagung: 3600, cabai: 2900 },
  { month: "Jul", padi: 5900, jagung: 4000, cabai: 3200 },
  { month: "Agu", padi: 6200, jagung: 4200, cabai: 3500 },
]

// Village Type Distribution
const villageTypeData = [
  { name: "Pertanian", value: 45, color: "hsl(145, 63%, 49%)" },
  { name: "Perikanan", value: 20, color: "hsl(250, 63%, 60%)" },
  { name: "Wisata", value: 15, color: "hsl(280, 60%, 60%)" },
  { name: "Logistik", value: 12, color: "hsl(85, 60%, 55%)" },
  { name: "Lainnya", value: 8, color: "hsl(0, 0%, 50%)" },
]

// Regional Performance
const regionalData = [
  { region: "Jawa", desa: 1250, score: 78 },
  { region: "Sumatera", desa: 890, score: 72 },
  { region: "Kalimantan", desa: 520, score: 68 },
  { region: "Sulawesi", desa: 430, score: 71 },
  { region: "Papua", desa: 280, score: 62 },
  { region: "Bali-Nusa", desa: 350, score: 82 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-popover p-3 shadow-lg">
        <p className="mb-2 font-medium text-popover-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString("id-ID")}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function ProductionTrendChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Tren Produksi Komoditas</h3>
        <p className="text-sm text-muted-foreground">Volume produksi per bulan (ton)</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={productionData}>
          <defs>
            <linearGradient id="colorPadi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(160, 60%, 45%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(160, 60%, 45%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorJagung" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(280, 60%, 60%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(280, 60%, 60%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorCabai" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(85, 60%, 55%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(85, 60%, 55%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
          <XAxis dataKey="month" stroke="hsl(0, 0%, 50%)" fontSize={12} />
          <YAxis stroke="hsl(0, 0%, 50%)" fontSize={12} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="padi"
            name="Padi"
            stroke="hsl(160, 60%, 45%)"
            fillOpacity={1}
            fill="url(#colorPadi)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="jagung"
            name="Jagung"
            stroke="hsl(280, 60%, 60%)"
            fillOpacity={1}
            fill="url(#colorJagung)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="cabai"
            name="Cabai"
            stroke="hsl(85, 60%, 55%)"
            fillOpacity={1}
            fill="url(#colorCabai)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function VillageTypeChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Distribusi Tipe Desa</h3>
        <p className="text-sm text-muted-foreground">Berdasarkan klasifikasi DNA Desa</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={villageTypeData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {villageTypeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={(value) => <span className="text-foreground">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export function RegionalPerformanceChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Performa Regional</h3>
        <p className="text-sm text-muted-foreground">Jumlah desa dan skor rata-rata per wilayah</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={regionalData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 20%)" />
          <XAxis type="number" stroke="hsl(0, 0%, 50%)" fontSize={12} />
          <YAxis dataKey="region" type="category" stroke="hsl(0, 0%, 50%)" fontSize={12} width={80} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="desa" name="Jumlah Desa" fill="hsl(160, 60%, 45%)" radius={[0, 4, 4, 0]} />
          <Bar dataKey="score" name="Skor Rata-rata" fill="hsl(250, 60%, 60%)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
