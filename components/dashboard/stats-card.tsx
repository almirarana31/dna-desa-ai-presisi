import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change?: number
  changeLabel?: string
  icon: React.ReactNode
  className?: string
}

export function StatsCard({ title, value, change, changeLabel, icon, className }: StatsCardProps) {
  const getTrendIcon = () => {
    if (!change) return <Minus className="h-3 w-3" />
    return change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />
  }

  const getTrendColor = () => {
    if (!change) return "text-muted-foreground"
    return change > 0 ? "text-success" : "text-destructive"
  }

  return (
    <div className={cn("rounded-xl border border-border bg-card p-6", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-bold text-card-foreground">{value}</p>
          {(change !== undefined || changeLabel) && (
            <div className={cn("mt-2 flex items-center gap-1 text-xs", getTrendColor())}>
              {getTrendIcon()}
              <span>
                {change !== undefined && `${change > 0 ? "+" : ""}${change}%`}
                {changeLabel && ` ${changeLabel}`}
              </span>
            </div>
          )}
        </div>
        <div className="rounded-lg bg-secondary p-3">{icon}</div>
      </div>
    </div>
  )
}
