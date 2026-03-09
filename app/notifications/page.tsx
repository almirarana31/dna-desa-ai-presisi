"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav"
import { DeleteConfirmDialog } from "@/components/ui/crud-dialogs"
import { toast } from "sonner"
import { 
  Bell, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  Clock,
  Trash2,
  MailOpen
} from "lucide-react"

interface Notification {
  id: string
  type: "alert" | "info" | "success" | "update"
  title: string
  description: string
  timestamp: string
  isRead: boolean
}

const initialNotifications: Notification[] = [
  {
    id: "1",
    type: "alert",
    title: "Alert: Risiko Gagal Panen",
    description: "Desa Sukamaju memiliki indikasi kekurangan air untuk tanaman padi. Diperlukan tindakan segera untuk mengantisipasi gagal panen.",
    timestamp: "2 jam yang lalu",
    isRead: false
  },
  {
    id: "2",
    type: "update",
    title: "Update Data Sensor",
    description: "12 sensor IoT baru terdeteksi di Kabupaten Bandung. Data real-time sudah tersedia di dashboard monitoring.",
    timestamp: "5 jam yang lalu",
    isRead: false
  },
  {
    id: "3",
    type: "success",
    title: "Rekomendasi Baru",
    description: "5 desa potensial untuk program hortikultura telah diidentifikasi berdasarkan analisis DNA Desa terbaru.",
    timestamp: "1 hari yang lalu",
    isRead: false
  },
  {
    id: "4",
    type: "info",
    title: "Pembaruan Sistem",
    description: "Sistem AI Desa telah diperbarui dengan fitur prediksi cuaca yang lebih akurat.",
    timestamp: "2 hari yang lalu",
    isRead: true
  },
  {
    id: "5",
    type: "alert",
    title: "Peringatan Cuaca Ekstrem",
    description: "Potensi hujan lebat di 15 desa wilayah Jawa Barat dalam 48 jam ke depan.",
    timestamp: "3 hari yang lalu",
    isRead: true
  },
  {
    id: "6",
    type: "success",
    title: "Target Produksi Tercapai",
    description: "Desa Makmur berhasil mencapai 120% target produksi padi untuk kuartal ini.",
    timestamp: "4 hari yang lalu",
    isRead: true
  }
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [deleteAllDialogOpen, setDeleteAllDialogOpen] = useState(false)
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const unreadCount = notifications.filter(n => !n.isRead).length

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })))
    toast.success("Semua notifikasi ditandai sebagai dibaca")
  }

  const handleDeleteAll = () => {
    setNotifications([])
    setDeleteAllDialogOpen(false)
    toast.success("Semua notifikasi telah dihapus")
  }

  const handleDeleteNotification = (notification: Notification) => {
    setSelectedNotification(notification)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (selectedNotification) {
      setNotifications(notifications.filter(n => n.id !== selectedNotification.id))
      toast.success(`"${selectedNotification.title}" telah dihapus`)
      setSelectedNotification(null)
    }
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-destructive" />
      case "info":
        return <Info className="h-5 w-5 text-info" />
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-success" />
      case "update":
        return <Bell className="h-5 w-5 text-primary" />
      default:
        return <Bell className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getNotificationBadge = (type: string) => {
    switch (type) {
      case "alert":
        return <Badge variant="destructive">Alert</Badge>
      case "info":
        return <Badge className="bg-info text-info-foreground">Info</Badge>
      case "success":
        return <Badge className="bg-success text-success-foreground">Sukses</Badge>
      case "update":
        return <Badge className="bg-primary text-primary-foreground">Update</Badge>
      default:
        return <Badge variant="secondary">Notifikasi</Badge>
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 sm:p-6">
          {/* Breadcrumb Navigation */}
          <BreadcrumbNav />

          {/* Page Title */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Notifikasi</h1>
                <p className="mt-1 text-muted-foreground">
                  Kelola dan lihat semua notifikasi sistem
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" onClick={handleMarkAllRead}>
                  <MailOpen className="mr-2 h-4 w-4" />
                  Tandai Semua Dibaca
                </Button>
                <Button variant="outline" size="sm" onClick={() => setDeleteAllDialogOpen(true)}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Hapus Semua
                </Button>
              </div>
            </div>
          </div>

          {/* Notification Stats */}
          <div className="mb-6 grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Notifikasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{notifications.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Belum Dibaca
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{unreadCount}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Sudah Dibaca
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-muted-foreground">
                  {notifications.length - unreadCount}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications Tabs */}
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="bg-secondary">
              <TabsTrigger value="all">
                Semua ({notifications.length})
              </TabsTrigger>
              <TabsTrigger value="unread">
                Belum Dibaca ({unreadCount})
              </TabsTrigger>
              <TabsTrigger value="read">
                Sudah Dibaca ({notifications.length - unreadCount})
              </TabsTrigger>
            </TabsList>

            {/* All Notifications */}
            <TabsContent value="all" className="space-y-4">
              {notifications.map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`transition-all hover:shadow-md ${
                    !notification.isRead ? "border-l-4 border-l-primary bg-card" : "bg-card"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {getNotificationBadge(notification.type)}
                            {!notification.isRead && (
                              <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                                Baru
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg text-foreground">
                            {notification.title}
                          </CardTitle>
                          <CardDescription className="mt-2 text-muted-foreground">
                            {notification.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteNotification(notification)}>
                        <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{notification.timestamp}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {notifications.length === 0 && (
                <Card className="bg-card">
                  <CardContent className="py-12 text-center">
                    <Bell className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <p className="mt-4 text-muted-foreground">Tidak ada notifikasi</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Unread Notifications */}
            <TabsContent value="unread" className="space-y-4">
              {notifications
                .filter((n) => !n.isRead)
                .map((notification) => (
                  <Card 
                    key={notification.id} 
                    className="border-l-4 border-l-primary bg-card transition-all hover:shadow-md"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {getNotificationBadge(notification.type)}
                              <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                                Baru
                              </Badge>
                            </div>
                            <CardTitle className="text-lg text-foreground">
                              {notification.title}
                            </CardTitle>
                            <CardDescription className="mt-2 text-muted-foreground">
                              {notification.description}
                            </CardDescription>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteNotification(notification)}>
                          <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{notification.timestamp}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              {notifications.filter(n => !n.isRead).length === 0 && (
                <Card className="bg-card">
                  <CardContent className="py-12 text-center">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-success/50" />
                    <p className="mt-4 text-muted-foreground">Semua notifikasi sudah dibaca</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Read Notifications */}
            <TabsContent value="read" className="space-y-4">
              {notifications
                .filter((n) => n.isRead)
                .map((notification) => (
                  <Card 
                    key={notification.id} 
                    className="bg-card transition-all hover:shadow-md"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="mb-2">
                              {getNotificationBadge(notification.type)}
                            </div>
                            <CardTitle className="text-lg text-foreground">
                              {notification.title}
                            </CardTitle>
                            <CardDescription className="mt-2 text-muted-foreground">
                              {notification.description}
                            </CardDescription>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteNotification(notification)}>
                          <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{notification.timestamp}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              {notifications.filter(n => n.isRead).length === 0 && (
                <Card className="bg-card">
                  <CardContent className="py-12 text-center">
                    <Bell className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <p className="mt-4 text-muted-foreground">Tidak ada notifikasi yang sudah dibaca</p>
                  </CardContent>
                </Card>
              )}
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

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        itemName={selectedNotification?.title || ""}
        onConfirm={confirmDelete}
      />
      <DeleteConfirmDialog
        open={deleteAllDialogOpen}
        onOpenChange={setDeleteAllDialogOpen}
        itemName="semua notifikasi"
        onConfirm={handleDeleteAll}
      />
    </div>
  )
}
