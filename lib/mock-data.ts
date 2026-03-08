// Mock Data for DNA DESA AI Presisi
// Comprehensive dataset for villages, sensors, production, demographics, and analytics

export interface Village {
  id: string
  name: string
  code: string
  province: string
  kabupaten: string
  kecamatan: string
  type: "pertanian" | "perikanan" | "wisata" | "logistik" | "industri"
  score: number
  population: number
  area: number // km²
  mainCommodity: string
  secondaryCommodities: string[]
  climate: {
    rainfall: number // mm/year
    temperature: number // °C average
    humidity: number // %
  }
  topography: {
    elevation: number // meters
    slope: "datar" | "landai" | "curam"
    soilType: string
  }
  infrastructure: {
    roadAccess: "baik" | "sedang" | "buruk"
    electricity: number // % coverage
    internet: number // % coverage
    irrigation: "baik" | "sedang" | "buruk" | "tidak ada"
  }
  economy: {
    gdp: number // million IDR
    averageIncome: number // IDR/month
    umkmCount: number
    cooperativeCount: number
  }
  social: {
    literacyRate: number // %
    healthFacilities: number
    schools: number
    communityGroups: number
  }
  dnaMetrics: {
    productivity: number // 0-100
    infrastructure: number
    humanResources: number
    economy: number
    social: number
    environment: number
  }
  strengths: string[]
  problems: string[]
  opportunities: string[]
  threats: string[]
  priority: "tinggi" | "sedang" | "rendah"
  lastUpdated: string
}

export interface SensorData {
  id: string
  villageId: string
  villageName: string
  sensorType: "soil" | "weather" | "water" | "air_quality"
  location: {
    lat: number
    lng: number
  }
  readings: {
    timestamp: string
    value: number
    unit: string
    status: "normal" | "warning" | "critical"
  }[]
  lastReading: {
    value: number
    unit: string
    timestamp: string
    status: "normal" | "warning" | "critical"
  }
}

export interface ProductionData {
  id: string
  villageId: string
  villageName: string
  commodity: string
  year: number
  month: number
  production: number // tons
  area: number // hectares
  yield: number // tons/hectare
  quality: "A" | "B" | "C"
  price: number // IDR/kg
  revenue: number // million IDR
}

export interface DiagnosticIssue {
  id: string
  villageId: string
  villageName: string
  category: "infrastruktur" | "sdm" | "ekonomi" | "sosial" | "lingkungan" | "produksi"
  severity: "critical" | "high" | "medium" | "low"
  title: string
  description: string
  rootCause: string[]
  impact: string
  affectedPopulation: number
  estimatedLoss: number // million IDR/year
  recommendations: string[]
  status: "open" | "in_progress" | "resolved"
  detectedDate: string
}

export interface Recommendation {
  id: string
  villageId: string
  villageName: string
  category: "komoditas" | "investasi" | "kelembagaan" | "pasar" | "program"
  title: string
  description: string
  rationale: string
  expectedImpact: string
  estimatedCost: number // million IDR
  estimatedRevenue: number // million IDR
  roi: number // %
  timeframe: "pendek" | "menengah" | "panjang" // short/medium/long term
  priority: "tinggi" | "sedang" | "rendah"
  feasibility: number // 0-100
  aiConfidence: number // 0-100
  implementationSteps: string[]
  requiredResources: string[]
  risks: string[]
}

// Generate 100 villages with realistic data
export const villages: Village[] = [
  // Jawa Barat - Pertanian
  {
    id: "V001",
    name: "Sukamaju",
    code: "3201012001",
    province: "Jawa Barat",
    kabupaten: "Garut",
    kecamatan: "Tarogong Kidul",
    type: "pertanian",
    score: 92,
    population: 4520,
    area: 12.5,
    mainCommodity: "Padi",
    secondaryCommodities: ["Cabai", "Tomat", "Jagung"],
    climate: { rainfall: 2500, temperature: 26, humidity: 75 },
    topography: { elevation: 720, slope: "landai", soilType: "Latosol" },
    infrastructure: { roadAccess: "baik", electricity: 98, internet: 85, irrigation: "baik" },
    economy: { gdp: 45000, averageIncome: 3500000, umkmCount: 45, cooperativeCount: 3 },
    social: { literacyRate: 95, healthFacilities: 2, schools: 5, communityGroups: 12 },
    dnaMetrics: { productivity: 92, infrastructure: 88, humanResources: 85, economy: 90, social: 87, environment: 83 },
    strengths: ["Lahan Subur", "Irigasi Teknis", "SDM Terlatih", "Akses Pasar Baik"],
    problems: ["Cold Storage Terbatas", "Modal Kerja Kurang"],
    opportunities: ["Ekspor Cabai", "Agrowisata", "Koperasi Digital"],
    threats: ["Perubahan Iklim", "Hama Wereng"],
    priority: "sedang",
    lastUpdated: "2026-03-07"
  },
  {
    id: "V002",
    name: "Cikondang",
    code: "3201012002",
    province: "Jawa Barat",
    kabupaten: "Garut",
    kecamatan: "Tarogong Kidul",
    type: "pertanian",
    score: 85,
    population: 3800,
    area: 10.2,
    mainCommodity: "Cabai",
    secondaryCommodities: ["Tomat", "Terong", "Bawang Merah"],
    climate: { rainfall: 2400, temperature: 25, humidity: 73 },
    topography: { elevation: 680, slope: "landai", soilType: "Andosol" },
    infrastructure: { roadAccess: "baik", electricity: 95, internet: 78, irrigation: "baik" },
    economy: { gdp: 38000, averageIncome: 3200000, umkmCount: 38, cooperativeCount: 2 },
    social: { literacyRate: 93, healthFacilities: 1, schools: 4, communityGroups: 10 },
    dnaMetrics: { productivity: 88, infrastructure: 82, humanResources: 80, economy: 85, social: 84, environment: 81 },
    strengths: ["Komoditas Unggulan", "Kelompok Tani Aktif"],
    problems: ["Fluktuasi Harga", "Akses Kredit Terbatas"],
    opportunities: ["Kontrak Farming", "Pengolahan Pasca Panen"],
    threats: ["Persaingan Impor", "Cuaca Ekstrem"],
    priority: "sedang",
    lastUpdated: "2026-03-07"
  },
  // Sulawesi Selatan - Perikanan
  {
    id: "V003",
    name: "Pantai Indah",
    code: "7301022001",
    province: "Sulawesi Selatan",
    kabupaten: "Takalar",
    kecamatan: "Mappakasunggu",
    type: "perikanan",
    score: 88,
    population: 3200,
    area: 8.5,
    mainCommodity: "Udang Vaname",
    secondaryCommodities: ["Bandeng", "Rumput Laut", "Kepiting"],
    climate: { rainfall: 1800, temperature: 28, humidity: 80 },
    topography: { elevation: 5, slope: "datar", soilType: "Aluvial" },
    infrastructure: { roadAccess: "sedang", electricity: 92, internet: 70, irrigation: "tidak ada" },
    economy: { gdp: 42000, averageIncome: 3800000, umkmCount: 28, cooperativeCount: 2 },
    social: { literacyRate: 88, healthFacilities: 1, schools: 3, communityGroups: 8 },
    dnaMetrics: { productivity: 90, infrastructure: 75, humanResources: 82, economy: 88, social: 80, environment: 85 },
    strengths: ["Akses Laut", "Budidaya Modern", "Koperasi Aktif"],
    problems: ["Modal Kerja", "Teknologi Terbatas", "Cold Chain"],
    opportunities: ["Ekspor Udang", "Wisata Bahari", "Pengolahan"],
    threats: ["Penyakit Udang", "Pencemaran Laut"],
    priority: "tinggi",
    lastUpdated: "2026-03-07"
  },
  // Bali - Wisata
  {
    id: "V004",
    name: "Wisata Hijau",
    code: "5101032001",
    province: "Bali",
    kabupaten: "Gianyar",
    kecamatan: "Ubud",
    type: "wisata",
    score: 95,
    population: 2100,
    area: 6.8,
    mainCommodity: "Pariwisata",
    secondaryCommodities: ["Kerajinan", "Kopi", "Seni"],
    climate: { rainfall: 2000, temperature: 27, humidity: 78 },
    topography: { elevation: 350, slope: "landai", soilType: "Regosol" },
    infrastructure: { roadAccess: "baik", electricity: 100, internet: 95, irrigation: "baik" },
    economy: { gdp: 85000, averageIncome: 5500000, umkmCount: 120, cooperativeCount: 5 },
    social: { literacyRate: 98, healthFacilities: 3, schools: 6, communityGroups: 25 },
    dnaMetrics: { productivity: 95, infrastructure: 98, humanResources: 92, economy: 96, social: 94, environment: 88 },
    strengths: ["Destinasi Populer", "Budaya Kuat", "Infrastruktur Baik", "SDM Terampil"],
    problems: ["Over Tourism", "Sampah", "Kemacetan"],
    opportunities: ["Eco Tourism", "Digital Marketing", "Homestay"],
    threats: ["Bencana Alam", "Pandemi"],
    priority: "rendah",
    lastUpdated: "2026-03-07"
  },
  // Jawa Timur - Logistik
  {
    id: "V005",
    name: "Simpang Tiga",
    code: "3505042001",
    province: "Jawa Timur",
    kabupaten: "Malang",
    kecamatan: "Gondanglegi",
    type: "logistik",
    score: 83,
    population: 5800,
    area: 15.2,
    mainCommodity: "Distribusi",
    secondaryCommodities: ["Perdagangan", "Jasa", "Industri Kecil"],
    climate: { rainfall: 2200, temperature: 29, humidity: 72 },
    topography: { elevation: 450, slope: "datar", soilType: "Latosol" },
    infrastructure: { roadAccess: "baik", electricity: 98, internet: 88, irrigation: "sedang" },
    economy: { gdp: 52000, averageIncome: 4200000, umkmCount: 85, cooperativeCount: 4 },
    social: { literacyRate: 94, healthFacilities: 2, schools: 7, communityGroups: 15 },
    dnaMetrics: { productivity: 85, infrastructure: 90, humanResources: 88, economy: 87, social: 86, environment: 75 },
    strengths: ["Lokasi Strategis", "Akses Jalan Baik", "Pasar Aktif"],
    problems: ["Kepadatan", "Polusi", "Lahan Terbatas"],
    opportunities: ["Warehouse", "E-Commerce Hub", "Cold Storage"],
    threats: ["Kompetisi", "Biaya Operasional"],
    priority: "sedang",
    lastUpdated: "2026-03-07"
  },
  // Generate 95 more villages programmatically
  ...generateAdditionalVillages(95)
]

function generateAdditionalVillages(count: number): Village[] {
  const provinces = ["Jawa Barat", "Jawa Tengah", "Jawa Timur", "Bali", "Sulawesi Selatan", "Sumatera Utara", "Kalimantan Timur", "NTB", "NTT", "Papua"]
  const types: Village["type"][] = ["pertanian", "perikanan", "wisata", "logistik", "industri"]
  const commodities = {
    pertanian: ["Padi", "Jagung", "Cabai", "Tomat", "Bawang", "Kopi", "Kakao", "Kelapa Sawit"],
    perikanan: ["Udang", "Bandeng", "Nila", "Lele", "Rumput Laut", "Kepiting"],
    wisata: ["Pariwisata", "Kerajinan", "Kuliner", "Budaya"],
    logistik: ["Distribusi", "Perdagangan", "Jasa"],
    industri: ["Manufaktur", "Pengolahan", "Kerajinan"]
  }

  const villages: Village[] = []
  
  for (let i = 0; i < count; i++) {
    const id = `V${String(i + 6).padStart(3, '0')}`
    const province = provinces[Math.floor(Math.random() * provinces.length)]
    const type = types[Math.floor(Math.random() * types.length)]
    const score = Math.floor(Math.random() * 30) + 65 // 65-95
    const population = Math.floor(Math.random() * 5000) + 1500
    
    villages.push({
      id,
      name: `Desa ${generateVillageName()}`,
      code: `${Math.floor(Math.random() * 9000) + 1000}${Math.floor(Math.random() * 900000) + 100000}`,
      province,
      kabupaten: `Kabupaten ${Math.floor(Math.random() * 20) + 1}`,
      kecamatan: `Kecamatan ${Math.floor(Math.random() * 10) + 1}`,
      type,
      score,
      population,
      area: Math.floor(Math.random() * 20) + 5,
      mainCommodity: commodities[type][Math.floor(Math.random() * commodities[type].length)],
      secondaryCommodities: commodities[type].slice(0, 3),
      climate: {
        rainfall: Math.floor(Math.random() * 1500) + 1500,
        temperature: Math.floor(Math.random() * 8) + 24,
        humidity: Math.floor(Math.random() * 20) + 70
      },
      topography: {
        elevation: Math.floor(Math.random() * 1000),
        slope: ["datar", "landai", "curam"][Math.floor(Math.random() * 3)] as any,
        soilType: ["Latosol", "Andosol", "Regosol", "Aluvial"][Math.floor(Math.random() * 4)]
      },
      infrastructure: {
        roadAccess: ["baik", "sedang", "buruk"][Math.floor(Math.random() * 3)] as any,
        electricity: Math.floor(Math.random() * 30) + 70,
        internet: Math.floor(Math.random() * 40) + 50,
        irrigation: ["baik", "sedang", "buruk", "tidak ada"][Math.floor(Math.random() * 4)] as any
      },
      economy: {
        gdp: Math.floor(Math.random() * 50000) + 20000,
        averageIncome: Math.floor(Math.random() * 3000000) + 2000000,
        umkmCount: Math.floor(Math.random() * 80) + 20,
        cooperativeCount: Math.floor(Math.random() * 5) + 1
      },
      social: {
        literacyRate: Math.floor(Math.random() * 20) + 80,
        healthFacilities: Math.floor(Math.random() * 3) + 1,
        schools: Math.floor(Math.random() * 6) + 2,
        communityGroups: Math.floor(Math.random() * 15) + 5
      },
      dnaMetrics: {
        productivity: Math.floor(Math.random() * 30) + 65,
        infrastructure: Math.floor(Math.random() * 30) + 65,
        humanResources: Math.floor(Math.random() * 30) + 65,
        economy: Math.floor(Math.random() * 30) + 65,
        social: Math.floor(Math.random() * 30) + 65,
        environment: Math.floor(Math.random() * 30) + 65
      },
      strengths: generateStrengths(type),
      problems: generateProblems(type),
      opportunities: generateOpportunities(type),
      threats: ["Perubahan Iklim", "Bencana Alam"],
      priority: score > 85 ? "rendah" : score > 75 ? "sedang" : "tinggi",
      lastUpdated: "2026-03-07"
    })
  }
  
  return villages
}

function generateVillageName(): string {
  const prefixes = ["Suka", "Maju", "Jaya", "Makmur", "Sejahtera", "Indah", "Subur", "Sentosa", "Damai", "Harapan"]
  const suffixes = ["maju", "jaya", "makmur", "sejahtera", "indah", "asri", "permai", "raya", "baru", "lestari"]
  return `${prefixes[Math.floor(Math.random() * prefixes.length)]}${suffixes[Math.floor(Math.random() * suffixes.length)]}`
}

function generateStrengths(type: Village["type"]): string[] {
  const strengths = {
    pertanian: ["Lahan Subur", "Irigasi Baik", "SDM Terlatih", "Kelompok Tani Aktif"],
    perikanan: ["Akses Laut", "Budidaya Modern", "Koperasi Aktif", "SDM Terampil"],
    wisata: ["Destinasi Menarik", "Budaya Kuat", "Infrastruktur Baik", "Aksesibilitas"],
    logistik: ["Lokasi Strategis", "Akses Jalan", "Pasar Aktif", "Infrastruktur"],
    industri: ["Tenaga Kerja", "Bahan Baku", "Akses Pasar", "Teknologi"]
  }
  return strengths[type].slice(0, 2)
}

function generateProblems(type: Village["type"]): string[] {
  const problems = {
    pertanian: ["Modal Kerja", "Cold Storage", "Akses Pasar", "Teknologi"],
    perikanan: ["Modal Kerja", "Teknologi", "Cold Chain", "Penyakit"],
    wisata: ["Over Tourism", "Sampah", "Kemacetan", "Infrastruktur"],
    logistik: ["Kepadatan", "Polusi", "Biaya Operasional", "Kompetisi"],
    industri: ["Modal", "Teknologi", "SDM", "Regulasi"]
  }
  return problems[type].slice(0, 2)
}

function generateOpportunities(type: Village["type"]): string[] {
  const opportunities = {
    pertanian: ["Ekspor", "Agrowisata", "Koperasi Digital", "Pengolahan"],
    perikanan: ["Ekspor", "Wisata Bahari", "Pengolahan", "Budidaya Modern"],
    wisata: ["Eco Tourism", "Digital Marketing", "Homestay", "Event"],
    logistik: ["Warehouse", "E-Commerce Hub", "Cold Storage", "Distribusi"],
    industri: ["Ekspor", "Teknologi", "Kemitraan", "Diversifikasi"]
  }
  return opportunities[type].slice(0, 3)
}

// Sensor Data (50 sensors across villages)
export const sensorData: SensorData[] = villages.slice(0, 50).map((village, index) => ({
  id: `S${String(index + 1).padStart(3, '0')}`,
  villageId: village.id,
  villageName: village.name,
  sensorType: ["soil", "weather", "water", "air_quality"][index % 4] as any,
  location: {
    lat: -6.2 + Math.random() * 8,
    lng: 106.8 + Math.random() * 15
  },
  readings: generateSensorReadings(30),
  lastReading: {
    value: Math.random() * 100,
    unit: getSensorUnit(["soil", "weather", "water", "air_quality"][index % 4] as any),
    timestamp: new Date().toISOString(),
    status: Math.random() > 0.8 ? "warning" : "normal"
  }
}))

function generateSensorReadings(count: number): SensorData["readings"] {
  const readings: SensorData["readings"] = []
  const now = new Date()
  
  for (let i = 0; i < count; i++) {
    const timestamp = new Date(now.getTime() - i * 3600000) // hourly
    readings.push({
      timestamp: timestamp.toISOString(),
      value: Math.random() * 100,
      unit: "unit",
      status: Math.random() > 0.9 ? "warning" : "normal"
    })
  }
  
  return readings
}

function getSensorUnit(type: SensorData["sensorType"]): string {
  const units = {
    soil: "pH",
    weather: "°C",
    water: "cm",
    air_quality: "AQI"
  }
  return units[type]
}

// Production Data (500 records)
export const productionData: ProductionData[] = villages.slice(0, 50).flatMap(village =>
  Array.from({ length: 10 }, (_, i) => ({
    id: `P${village.id}-${i + 1}`,
    villageId: village.id,
    villageName: village.name,
    commodity: village.mainCommodity,
    year: 2025 + Math.floor(i / 12),
    month: (i % 12) + 1,
    production: Math.floor(Math.random() * 500) + 100,
    area: Math.floor(Math.random() * 50) + 10,
    yield: Math.random() * 5 + 2,
    quality: ["A", "B", "C"][Math.floor(Math.random() * 3)] as any,
    price: Math.floor(Math.random() * 10000) + 5000,
    revenue: Math.floor(Math.random() * 500) + 50
  }))
)

// Diagnostic Issues (100 issues)
export const diagnosticIssues: DiagnosticIssue[] = villages.slice(0, 50).flatMap((village, index) => [
  {
    id: `D${String(index * 2 + 1).padStart(3, '0')}`,
    villageId: village.id,
    villageName: village.name,
    category: village.problems[0]?.includes("Modal") ? "ekonomi" : "infrastruktur",
    severity: village.score < 75 ? "high" : "medium",
    title: village.problems[0] || "Masalah Umum",
    description: `${village.problems[0]} menjadi kendala utama di ${village.name}`,
    rootCause: ["Keterbatasan Anggaran", "Kurangnya Akses", "Infrastruktur Terbatas"],
    impact: `Menurunkan produktivitas hingga 30% dan pendapatan petani`,
    affectedPopulation: Math.floor(village.population * 0.6),
    estimatedLoss: Math.floor(Math.random() * 500) + 100,
    recommendations: ["Bantuan Modal", "Pelatihan", "Infrastruktur"],
    status: Math.random() > 0.5 ? "open" : "in_progress",
    detectedDate: "2026-02-15"
  },
  {
    id: `D${String(index * 2 + 2).padStart(3, '0')}`,
    villageId: village.id,
    villageName: village.name,
    category: "sdm",
    severity: "medium",
    title: village.problems[1] || "Masalah SDM",
    description: `Kurangnya ${village.problems[1]} di ${village.name}`,
    rootCause: ["Pendidikan Terbatas", "Migrasi", "Kurangnya Pelatihan"],
    impact: `Menghambat adopsi teknologi dan inovasi`,
    affectedPopulation: Math.floor(village.population * 0.4),
    estimatedLoss: Math.floor(Math.random() * 300) + 50,
    recommendations: ["Pelatihan Teknis", "Pendampingan", "Sertifikasi"],
    status: "open",
    detectedDate: "2026-02-20"
  }
])

// Recommendations (200 recommendations)
export const recommendations: Recommendation[] = villages.slice(0, 40).flatMap((village, index) => [
  {
    id: `R${String(index * 5 + 1).padStart(3, '0')}`,
    villageId: village.id,
    villageName: village.name,
    category: "komoditas",
    title: `Diversifikasi ${village.mainCommodity}`,
    description: `Mengembangkan varietas unggul dan diversifikasi produk ${village.mainCommodity}`,
    rationale: `Potensi lahan dan iklim mendukung pengembangan komoditas unggulan`,
    expectedImpact: `Peningkatan produktivitas 40% dan pendapatan 50%`,
    estimatedCost: 500,
    estimatedRevenue: 1200,
    roi: 140,
    timeframe: "menengah",
    priority: "tinggi",
    feasibility: 85,
    aiConfidence: 92,
    implementationSteps: ["Survey Lahan", "Pelatihan Petani", "Pengadaan Bibit", "Monitoring"],
    requiredResources: ["Bibit Unggul", "Pupuk", "Peralatan", "Tenaga Ahli"],
    risks: ["Cuaca Ekstrem", "Hama Penyakit", "Fluktuasi Harga"]
  },
  {
    id: `R${String(index * 5 + 2).padStart(3, '0')}`,
    villageId: village.id,
    villageName: village.name,
    category: "investasi",
    title: "Pembangunan Cold Storage",
    description: "Investasi fasilitas penyimpanan dingin untuk menjaga kualitas hasil panen",
    rationale: "Mengurangi kerugian pasca panen hingga 60%",
    expectedImpact: "Peningkatan nilai jual 30% dan pengurangan waste 50%",
    estimatedCost: 2000,
    estimatedRevenue: 4500,
    roi: 125,
    timeframe: "panjang",
    priority: "tinggi",
    feasibility: 75,
    aiConfidence: 88,
    implementationSteps: ["Studi Kelayakan", "Desain", "Konstruksi", "Operasional"],
    requiredResources: ["Lahan", "Teknologi Pendingin", "Listrik", "Operator"],
    risks: ["Biaya Operasional Tinggi", "Kerusakan Teknis"]
  },
  {
    id: `R${String(index * 5 + 3).padStart(3, '0')}`,
    villageId: village.id,
    villageName: village.name,
    category: "kelembagaan",
    title: "Penguatan Koperasi Digital",
    description: "Transformasi koperasi tradisional menjadi platform digital",
    rationale: "Meningkatkan efisiensi dan jangkauan pasar",
    expectedImpact: "Peningkatan anggota 100% dan transaksi 200%",
    estimatedCost: 300,
    estimatedRevenue: 800,
    roi: 167,
    timeframe: "pendek",
    priority: "sedang",
    feasibility: 90,
    aiConfidence: 85,
    implementationSteps: ["Platform Development", "Training", "Marketing", "Scaling"],
    requiredResources: ["Software", "Hardware", "Internet", "SDM IT"],
    risks: ["Adopsi Lambat", "Kompetisi"]
  },
  {
    id: `R${String(index * 5 + 4).padStart(3, '0')}`,
    villageId: village.id,
    villageName: village.name,
    category: "pasar",
    title: "Akses Pasar Ekspor",
    description: "Membuka jalur ekspor untuk produk unggulan desa",
    rationale: "Harga ekspor 2-3x lebih tinggi dari pasar lokal",
    expectedImpact: "Peningkatan pendapatan petani 150%",
    estimatedCost: 800,
    estimatedRevenue: 3000,
    roi: 275,
    timeframe: "panjang",
    priority: "tinggi",
    feasibility: 70,
    aiConfidence: 80,
    implementationSteps: ["Sertifikasi", "Kemitraan", "Logistik", "Marketing"],
    requiredResources: ["Sertifikat GAP", "Cold Chain", "Eksportir", "Quality Control"],
    risks: ["Regulasi", "Kompetisi Global", "Kualitas"]
  },
  {
    id: `R${String(index * 5 + 5).padStart(3, '0')}`,
    villageId: village.id,
    villageName: village.name,
    category: "program",
    title: "Program Agrowisata Terpadu",
    description: "Mengembangkan wisata pertanian sebagai sumber pendapatan tambahan",
    rationale: "Memanfaatkan potensi wisata dan edukasi pertanian",
    expectedImpact: "Pendapatan tambahan 500 juta/tahun",
    estimatedCost: 600,
    estimatedRevenue: 1500,
    roi: 150,
    timeframe: "menengah",
    priority: "sedang",
    feasibility: 80,
    aiConfidence: 78,
    implementationSteps: ["Desain Paket Wisata", "Infrastruktur", "Promosi", "Operasional"],
    requiredResources: ["Lahan", "Fasilitas", "Pemandu", "Marketing"],
    risks: ["Musim", "Kompetisi", "Aksesibilitas"]
  }
])

// Helper functions for filtering and searching
export function getVillageById(id: string): Village | undefined {
  return villages.find(v => v.id === id)
}

export function getVillagesByProvince(province: string): Village[] {
  return villages.filter(v => v.province === province)
}

export function getVillagesByType(type: Village["type"]): Village[] {
  return villages.filter(v => v.type === type)
}

export function getTopVillages(limit: number = 10): Village[] {
  return [...villages].sort((a, b) => b.score - a.score).slice(0, limit)
}

export function getPriorityVillages(): Village[] {
  return villages.filter(v => v.priority === "tinggi")
}

export function getVillageStats() {
  return {
    total: villages.length,
    byType: {
      pertanian: villages.filter(v => v.type === "pertanian").length,
      perikanan: villages.filter(v => v.type === "perikanan").length,
      wisata: villages.filter(v => v.type === "wisata").length,
      logistik: villages.filter(v => v.type === "logistik").length,
      industri: villages.filter(v => v.type === "industri").length
    },
    byPriority: {
      tinggi: villages.filter(v => v.priority === "tinggi").length,
      sedang: villages.filter(v => v.priority === "sedang").length,
      rendah: villages.filter(v => v.priority === "rendah").length
    },
    averageScore: Math.round(villages.reduce((sum, v) => sum + v.score, 0) / villages.length),
    totalPopulation: villages.reduce((sum, v) => sum + v.population, 0)
  }
}
