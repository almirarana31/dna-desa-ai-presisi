"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import type { LatLngExpression } from "leaflet"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

// Fix Leaflet default marker icon
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Custom marker icons
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  })
}

const greenIcon = createCustomIcon("#22c55e")
const yellowIcon = createCustomIcon("#eab308")
const redIcon = createCustomIcon("#ef4444")

interface Village {
  id: string
  name: string
  province: string
  type: string
  score: number
  lat?: number
  lng?: number
  population?: number
}

interface InteractiveMapProps {
  villages: Village[]
  center?: LatLngExpression
  zoom?: number
  height?: string
  onViewVillage?: (village: Village) => void
}

// Component to update map view
function MapUpdater({ center }: { center: LatLngExpression }) {
  const map = useMap()
  useEffect(() => {
    map.setView(center)
  }, [center, map])
  return null
}

export function InteractiveMap({
  villages,
  center = [-2.5, 118],
  zoom = 5,
  height = "500px",
  onViewVillage,
}: InteractiveMapProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div
        className="flex items-center justify-center rounded-lg bg-secondary animate-pulse"
        style={{ height }}
      >
        <p className="text-muted-foreground">Memuat peta...</p>
      </div>
    )
  }

  // Generate coordinates for villages if not provided
  const villagesWithCoords = villages.map((village, index) => {
    if (village.lat && village.lng) {
      return village
    }
    // Generate random coordinates within Indonesia bounds
    const baseLat = -6.2 + (index % 10) * 0.5 + Math.random() * 0.3
    const baseLng = 106.8 + Math.floor(index / 10) * 1.5 + Math.random() * 0.5
    return {
      ...village,
      lat: baseLat,
      lng: baseLng,
    }
  })

  const getMarkerIcon = (score: number) => {
    if (score > 85) return greenIcon
    if (score > 75) return yellowIcon
    return redIcon
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height, width: "100%", borderRadius: "0.5rem" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapUpdater center={center} />
      {villagesWithCoords.map((village) => (
        <Marker
          key={village.id}
          position={[village.lat!, village.lng!]}
          icon={getMarkerIcon(village.score)}
        >
          <Popup>
            <div className="min-w-[200px] p-1">
              <h3 className="font-semibold text-foreground">{village.name}</h3>
              <p className="text-sm text-muted-foreground">{village.province}</p>
              <div className="mt-2 flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  {village.type}
                </Badge>
                <span
                  className={`text-sm font-bold ${
                    village.score > 85
                      ? "text-green-600"
                      : village.score > 75
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  Score: {village.score}
                </span>
              </div>
              {village.population && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Populasi: {village.population.toLocaleString("id-ID")}
                </p>
              )}
              {onViewVillage && (
                <Button
                  size="sm"
                  className="mt-2 w-full"
                  onClick={() => onViewVillage(village)}
                >
                  <Eye className="mr-2 h-3 w-3" />
                  Lihat Detail
                </Button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
