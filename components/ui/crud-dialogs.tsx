"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Download, Upload, Filter, Plus } from "lucide-react"

// ==================== TAMBAH DESA DIALOG ====================
interface TambahDesaDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TambahDesaDialog({ open, onOpenChange }: TambahDesaDialogProps) {
  const [formData, setFormData] = React.useState({
    kode: "",
    nama: "",
    kecamatan: "",
    kabupaten: "",
    provinsi: "",
    tipe: "",
    populasi: "",
    luas: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nama || !formData.kode) {
      toast.error("Nama desa dan kode harus diisi")
      return
    }
    toast.success(`Desa "${formData.nama}" berhasil ditambahkan`)
    onOpenChange(false)
    setFormData({ kode: "", nama: "", kecamatan: "", kabupaten: "", provinsi: "", tipe: "", populasi: "", luas: "" })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Tambah Desa Baru</DialogTitle>
          <DialogDescription>
            Masukkan informasi desa yang akan ditambahkan ke sistem
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="kode">Kode Desa *</Label>
                <Input
                  id="kode"
                  value={formData.kode}
                  onChange={(e) => setFormData({ ...formData, kode: e.target.value })}
                  placeholder="32.01.01.2001"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nama">Nama Desa *</Label>
                <Input
                  id="nama"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  placeholder="Nama desa"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="kecamatan">Kecamatan</Label>
                <Input
                  id="kecamatan"
                  value={formData.kecamatan}
                  onChange={(e) => setFormData({ ...formData, kecamatan: e.target.value })}
                  placeholder="Nama kecamatan"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kabupaten">Kabupaten</Label>
                <Input
                  id="kabupaten"
                  value={formData.kabupaten}
                  onChange={(e) => setFormData({ ...formData, kabupaten: e.target.value })}
                  placeholder="Nama kabupaten"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="provinsi">Provinsi</Label>
              <Select
                value={formData.provinsi}
                onValueChange={(value) => setFormData({ ...formData, provinsi: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih provinsi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Jawa Barat">Jawa Barat</SelectItem>
                  <SelectItem value="Jawa Tengah">Jawa Tengah</SelectItem>
                  <SelectItem value="Jawa Timur">Jawa Timur</SelectItem>
                  <SelectItem value="DKI Jakarta">DKI Jakarta</SelectItem>
                  <SelectItem value="Banten">Banten</SelectItem>
                  <SelectItem value="DIY">DI Yogyakarta</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipe">Tipe Desa</Label>
              <Select
                value={formData.tipe}
                onValueChange={(value) => setFormData({ ...formData, tipe: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih tipe desa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pertanian">Pertanian</SelectItem>
                  <SelectItem value="perikanan">Perikanan</SelectItem>
                  <SelectItem value="wisata">Wisata</SelectItem>
                  <SelectItem value="logistik">Logistik</SelectItem>
                  <SelectItem value="industri">Industri</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="populasi">Populasi</Label>
                <Input
                  id="populasi"
                  type="number"
                  value={formData.populasi}
                  onChange={(e) => setFormData({ ...formData, populasi: e.target.value })}
                  placeholder="0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="luas">Luas (km²)</Label>
                <Input
                  id="luas"
                  type="number"
                  value={formData.luas}
                  onChange={(e) => setFormData({ ...formData, luas: e.target.value })}
                  placeholder="0"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Batal
            </Button>
            <Button type="submit">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Desa
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// ==================== TAMBAH KOMODITAS DIALOG ====================
interface TambahKomoditasDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TambahKomoditasDialog({ open, onOpenChange }: TambahKomoditasDialogProps) {
  const [formData, setFormData] = React.useState({
    kode: "",
    nama: "",
    kategori: "",
    satuan: "",
    harga: "",
    deskripsi: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nama || !formData.kode) {
      toast.error("Nama komoditas dan kode harus diisi")
      return
    }
    toast.success(`Komoditas "${formData.nama}" berhasil ditambahkan`)
    onOpenChange(false)
    setFormData({ kode: "", nama: "", kategori: "", satuan: "", harga: "", deskripsi: "" })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Tambah Komoditas Baru</DialogTitle>
          <DialogDescription>
            Masukkan informasi komoditas yang akan ditambahkan ke sistem
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="kode">Kode Komoditas *</Label>
                <Input
                  id="kode"
                  value={formData.kode}
                  onChange={(e) => setFormData({ ...formData, kode: e.target.value })}
                  placeholder="KOM-001"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nama">Nama Komoditas *</Label>
                <Input
                  id="nama"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  placeholder="Nama komoditas"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="kategori">Kategori</Label>
                <Select
                  value={formData.kategori}
                  onValueChange={(value) => setFormData({ ...formData, kategori: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pertanian">Pertanian</SelectItem>
                    <SelectItem value="Perikanan">Perikanan</SelectItem>
                    <SelectItem value="Perkebunan">Perkebunan</SelectItem>
                    <SelectItem value="Kehutanan">Kehutanan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="satuan">Satuan</Label>
                <Select
                  value={formData.satuan}
                  onValueChange={(value) => setFormData({ ...formData, satuan: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih satuan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Kg">Kilogram (Kg)</SelectItem>
                    <SelectItem value="Ton">Ton</SelectItem>
                    <SelectItem value="Kuintal">Kuintal</SelectItem>
                    <SelectItem value="Liter">Liter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="harga">Harga Rata-rata (Rp/Kg)</Label>
              <Input
                id="harga"
                type="number"
                value={formData.harga}
                onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                placeholder="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deskripsi">Deskripsi</Label>
              <Textarea
                id="deskripsi"
                value={formData.deskripsi}
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                placeholder="Deskripsi komoditas..."
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Batal
            </Button>
            <Button type="submit">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Komoditas
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// ==================== TAMBAH PENDUDUK DIALOG ====================
interface TambahPendudukDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TambahPendudukDialog({ open, onOpenChange }: TambahPendudukDialogProps) {
  const [formData, setFormData] = React.useState({
    nik: "",
    nama: "",
    jenisKelamin: "",
    tanggalLahir: "",
    desa: "",
    pekerjaan: "",
    pendidikan: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nama || !formData.nik) {
      toast.error("NIK dan nama harus diisi")
      return
    }
    toast.success(`Data penduduk "${formData.nama}" berhasil ditambahkan`)
    onOpenChange(false)
    setFormData({ nik: "", nama: "", jenisKelamin: "", tanggalLahir: "", desa: "", pekerjaan: "", pendidikan: "" })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Tambah Data Penduduk</DialogTitle>
          <DialogDescription>
            Masukkan informasi penduduk yang akan ditambahkan ke sistem
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="nik">NIK *</Label>
              <Input
                id="nik"
                value={formData.nik}
                onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                placeholder="16 digit NIK"
                maxLength={16}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nama">Nama Lengkap *</Label>
              <Input
                id="nama"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                placeholder="Nama lengkap"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="jenisKelamin">Jenis Kelamin</Label>
                <Select
                  value={formData.jenisKelamin}
                  onValueChange={(value) => setFormData({ ...formData, jenisKelamin: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="L">Laki-laki</SelectItem>
                    <SelectItem value="P">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tanggalLahir">Tanggal Lahir</Label>
                <Input
                  id="tanggalLahir"
                  type="date"
                  value={formData.tanggalLahir}
                  onChange={(e) => setFormData({ ...formData, tanggalLahir: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="desa">Desa</Label>
              <Input
                id="desa"
                value={formData.desa}
                onChange={(e) => setFormData({ ...formData, desa: e.target.value })}
                placeholder="Nama desa"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pekerjaan">Pekerjaan</Label>
                <Select
                  value={formData.pekerjaan}
                  onValueChange={(value) => setFormData({ ...formData, pekerjaan: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Petani">Petani</SelectItem>
                    <SelectItem value="Nelayan">Nelayan</SelectItem>
                    <SelectItem value="Pedagang">Pedagang</SelectItem>
                    <SelectItem value="PNS">PNS</SelectItem>
                    <SelectItem value="Wiraswasta">Wiraswasta</SelectItem>
                    <SelectItem value="Lainnya">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pendidikan">Pendidikan</Label>
                <Select
                  value={formData.pendidikan}
                  onValueChange={(value) => setFormData({ ...formData, pendidikan: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SD">SD</SelectItem>
                    <SelectItem value="SMP">SMP</SelectItem>
                    <SelectItem value="SMA">SMA</SelectItem>
                    <SelectItem value="D3">D3</SelectItem>
                    <SelectItem value="S1">S1</SelectItem>
                    <SelectItem value="S2">S2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Batal
            </Button>
            <Button type="submit">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Penduduk
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// ==================== TAMBAH SENSOR DIALOG ====================
interface TambahSensorDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TambahSensorDialog({ open, onOpenChange }: TambahSensorDialogProps) {
  const [formData, setFormData] = React.useState({
    kode: "",
    nama: "",
    tipe: "",
    lokasi: "",
    latitude: "",
    longitude: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nama || !formData.kode) {
      toast.error("Nama sensor dan kode harus diisi")
      return
    }
    toast.success(`Sensor "${formData.nama}" berhasil ditambahkan`)
    onOpenChange(false)
    setFormData({ kode: "", nama: "", tipe: "", lokasi: "", latitude: "", longitude: "" })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Tambah Sensor IoT</DialogTitle>
          <DialogDescription>
            Masukkan informasi sensor yang akan ditambahkan ke jaringan
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="kode">Kode Sensor *</Label>
                <Input
                  id="kode"
                  value={formData.kode}
                  onChange={(e) => setFormData({ ...formData, kode: e.target.value })}
                  placeholder="SENSOR-001"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nama">Nama Sensor *</Label>
                <Input
                  id="nama"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  placeholder="Nama sensor"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipe">Tipe Sensor</Label>
              <Select
                value={formData.tipe}
                onValueChange={(value) => setFormData({ ...formData, tipe: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih tipe sensor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cuaca">Weather Station</SelectItem>
                  <SelectItem value="Tanah">Soil Sensor</SelectItem>
                  <SelectItem value="Air">Water Quality</SelectItem>
                  <SelectItem value="Udara">Air Quality</SelectItem>
                  <SelectItem value="Kamera">Camera/CCTV</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lokasi">Lokasi/Desa</Label>
              <Input
                id="lokasi"
                value={formData.lokasi}
                onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
                placeholder="Nama desa atau lokasi"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="latitude">Latitude</Label>
                <Input
                  id="latitude"
                  type="number"
                  step="any"
                  value={formData.latitude}
                  onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                  placeholder="-6.2088"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="longitude">Longitude</Label>
                <Input
                  id="longitude"
                  type="number"
                  step="any"
                  value={formData.longitude}
                  onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                  placeholder="106.8456"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Batal
            </Button>
            <Button type="submit">
              <Plus className="mr-2 h-4 w-4" />
              Tambah Sensor
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// ==================== IMPORT/EXPORT/FILTER DIALOGS ====================
interface ImportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
}

export function ImportDialog({ open, onOpenChange, title = "Data" }: ImportDialogProps) {
  const [file, setFile] = React.useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      toast.error("Pilih file terlebih dahulu")
      return
    }
    toast.success(`File "${file.name}" berhasil diimpor`)
    onOpenChange(false)
    setFile(null)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Import {title}</DialogTitle>
          <DialogDescription>
            Upload file Excel (.xlsx) atau CSV untuk mengimpor data
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="file">Pilih File</Label>
              <Input
                id="file"
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              <p className="text-xs text-muted-foreground">
                Format: Excel (.xlsx, .xls) atau CSV
              </p>
            </div>
            {file && (
              <div className="rounded-lg bg-secondary p-3">
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Batal
            </Button>
            <Button type="submit">
              <Upload className="mr-2 h-4 w-4" />
              Import
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

interface ExportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
}

export function ExportDialog({ open, onOpenChange, title = "Data" }: ExportDialogProps) {
  const [format, setFormat] = React.useState("xlsx")

  const handleExport = () => {
    toast.success(`${title} berhasil diekspor dalam format ${format.toUpperCase()}`)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Export {title}</DialogTitle>
          <DialogDescription>
            Pilih format file untuk mengekspor data
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Format File</Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xlsx">Excel (.xlsx)</SelectItem>
                <SelectItem value="csv">CSV (.csv)</SelectItem>
                <SelectItem value="pdf">PDF (.pdf)</SelectItem>
                <SelectItem value="json">JSON (.json)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Batal
          </Button>
          <Button onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

interface FilterDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  filters?: {
    name: string
    label: string
    options: { value: string; label: string }[]
  }[]
}

export function FilterDialog({ open, onOpenChange, filters = [] }: FilterDialogProps) {
  const defaultFilters = filters.length > 0 ? filters : [
    {
      name: "status",
      label: "Status",
      options: [
        { value: "all", label: "Semua" },
        { value: "aktif", label: "Aktif" },
        { value: "pending", label: "Pending" },
        { value: "nonaktif", label: "Non-aktif" },
      ],
    },
    {
      name: "provinsi",
      label: "Provinsi",
      options: [
        { value: "all", label: "Semua Provinsi" },
        { value: "jawa-barat", label: "Jawa Barat" },
        { value: "jawa-tengah", label: "Jawa Tengah" },
        { value: "jawa-timur", label: "Jawa Timur" },
      ],
    },
    {
      name: "tipe",
      label: "Tipe",
      options: [
        { value: "all", label: "Semua Tipe" },
        { value: "pertanian", label: "Pertanian" },
        { value: "perikanan", label: "Perikanan" },
        { value: "wisata", label: "Wisata" },
      ],
    },
  ]

  const [filterValues, setFilterValues] = React.useState<Record<string, string>>({})

  const handleApply = () => {
    toast.success("Filter berhasil diterapkan")
    onOpenChange(false)
  }

  const handleReset = () => {
    setFilterValues({})
    toast.info("Filter direset")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Filter Data</DialogTitle>
          <DialogDescription>
            Atur filter untuk menyaring data yang ditampilkan
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {defaultFilters.map((filter) => (
            <div key={filter.name} className="space-y-2">
              <Label>{filter.label}</Label>
              <Select
                value={filterValues[filter.name] || "all"}
                onValueChange={(value) =>
                  setFilterValues({ ...filterValues, [filter.name]: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {filter.options.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleApply}>
            <Filter className="mr-2 h-4 w-4" />
            Terapkan Filter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ==================== DELETE CONFIRMATION DIALOG ====================
interface DeleteConfirmDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  itemName: string
  onConfirm: () => void
}

export function DeleteConfirmDialog({
  open,
  onOpenChange,
  itemName,
  onConfirm,
}: DeleteConfirmDialogProps) {
  const handleConfirm = () => {
    onConfirm()
    onOpenChange(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Konfirmasi Hapus</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah Anda yakin ingin menghapus <strong>{itemName}</strong>? Tindakan ini tidak dapat
            dibatalkan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

// ==================== DETAIL DIALOG ====================
interface DetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: React.ReactNode
}

export function DetailDialog({ open, onOpenChange, title, children }: DetailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">{children}</div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Tutup</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
