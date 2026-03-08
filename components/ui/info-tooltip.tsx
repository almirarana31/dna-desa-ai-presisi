import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HelpCircle } from "lucide-react"

interface InfoTooltipProps {
  content: string
  children?: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  showIcon?: boolean
}

export function InfoTooltip({ 
  content, 
  children, 
  side = "top",
  showIcon = true 
}: InfoTooltipProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children || (
            <button
              type="button"
              className="inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="More information"
            >
              {showIcon && <HelpCircle className="h-4 w-4" />}
            </button>
          )}
        </TooltipTrigger>
        <TooltipContent side={side} className="max-w-xs">
          <p className="text-sm">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface LabelWithTooltipProps {
  label: string
  tooltip: string
  required?: boolean
}

export function LabelWithTooltip({ label, tooltip, required }: LabelWithTooltipProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </span>
      <InfoTooltip content={tooltip} />
    </div>
  )
}
