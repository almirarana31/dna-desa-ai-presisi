"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HelpCircle, PlayCircle } from "lucide-react"

interface ContextualHelpProps {
  title: string
  description: string
  videoUrl?: string
}

export function ContextualHelp({ title, description, videoUrl }: ContextualHelpProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button 
            className="inline-flex items-center justify-center"
            aria-label={`Help: ${title}`}
          >
            <HelpCircle className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm p-4" side="right">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">{title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            {videoUrl && (
              <a 
                href={videoUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1 mt-2"
              >
                <PlayCircle className="h-4 w-4" />
                Tonton Tutorial
              </a>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
