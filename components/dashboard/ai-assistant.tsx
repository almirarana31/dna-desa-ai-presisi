"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Bot, Send, Sparkles, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const sampleQuestions = [
  "Desa mana yang cocok untuk program hortikultura?",
  "Apa risiko utama di Kabupaten Bandung?",
  "Rekomendasi investasi untuk desa perikanan?",
  "Analisis produksi padi bulan ini",
]

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Halo! Saya AI Asisten untuk analisis desa. Saya bisa membantu Anda memahami data desa, memberikan rekomendasi kebijakan, dan menjawab pertanyaan seputar pembangunan desa. Apa yang ingin Anda ketahui?",
    timestamp: new Date(),
  },
]

export function AIAssistantPanel() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "hortikultura": "Berdasarkan analisis DNA Desa, 5 desa paling cocok untuk program hortikultura adalah:\n\n1. **Desa Sukamaju** (Jawa Barat) - Skor 85/100\n   - Curah hujan optimal: 2500mm/tahun\n   - Lahan subur dengan pH 6.5\n   - Akses jalan provinsi baik\n\n2. **Desa Mekar Sari** (Jawa Tengah) - Skor 82/100\n3. **Desa Tani Jaya** (DIY) - Skor 80/100\n\nRekomendasi komoditas: Cabai, Tomat, Bawang Merah",
        "risiko": "Risiko utama di Kabupaten Bandung berdasarkan analisis terkini:\n\n⚠️ **Kekeringan** - 12 desa terindikasi kekurangan air\n⚠️ **Over Supply Cabai** - Harga turun 15% dalam 2 minggu\n⚠️ **Infrastruktur** - 5 cold storage kapasitas penuh\n\nRekomendasi mitigasi:\n- Redistribusi hasil panen ke daerah defisit\n- Program irigasi tetes untuk desa rawan kering",
        "default": "Terima kasih atas pertanyaannya. Berdasarkan data Village Data Hub, saya menemukan beberapa insight menarik yang bisa membantu pengambilan keputusan. Mari kita analisis lebih dalam berdasarkan DNA Desa dan indikator yang tersedia.\n\nApakah Anda ingin saya fokus pada aspek tertentu seperti komoditas, infrastruktur, atau kelembagaan?",
      }

      const responseKey = Object.keys(responses).find(key => 
        input.toLowerCase().includes(key)
      ) || "default"

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responses[responseKey],
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <div className="flex h-[500px] flex-col rounded-xl border border-border bg-card">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border p-4">
        <div className="rounded-lg bg-primary/20 p-2">
          <Bot className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-card-foreground">AI Asisten Desa</h3>
          <p className="text-xs text-muted-foreground">Powered by LLM + Village Data Hub</p>
        </div>
        <div className="ml-auto flex items-center gap-1 rounded-full bg-success/20 px-2 py-0.5 text-xs text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Online
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3",
              message.role === "user" && "flex-row-reverse"
            )}
          >
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                message.role === "assistant" ? "bg-primary/20" : "bg-secondary"
              )}
            >
              {message.role === "assistant" ? (
                <Sparkles className="h-4 w-4 text-primary" />
              ) : (
                <User className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
            <div
              className={cn(
                "max-w-[80%] rounded-xl px-4 py-3",
                message.role === "assistant"
                  ? "bg-secondary text-card-foreground"
                  : "bg-primary text-primary-foreground"
              )}
            >
              <p className="whitespace-pre-wrap text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <div className="rounded-xl bg-secondary px-4 py-3">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0.2s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Questions */}
      <div className="border-t border-border px-4 py-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {sampleQuestions.map((question) => (
            <button
              key={question}
              onClick={() => handleQuickQuestion(question)}
              className="shrink-0 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-card-foreground"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-border p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanyakan tentang data desa..."
            className="flex-1 bg-secondary"
          />
          <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
