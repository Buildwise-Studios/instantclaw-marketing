"use client"

import { AnimatedList } from "@/components/ui/animated-list"
import { cn } from "@/lib/utils"

const items = [
  { title: "New deployment", desc: "Vercel", time: "2m ago" },
  { title: "Build completed", desc: "GitHub", time: "5m ago" },
  { title: "Payment received", desc: "Stripe", time: "12m ago" },
  { title: "User signed up", desc: "Auth", time: "1h ago" },
  { title: "Backup finished", desc: "Database", time: "2h ago" },
]

export default function AnimatedListDemo({ className }) {
  return (
    <AnimatedList className={cn("", className)} delay={800}>
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg border bg-background/50 px-3 py-2 shadow-sm"
        >
          <div className="h-8 w-8 shrink-0 rounded-md bg-muted" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{item.title}</p>
            <p className="text-xs text-muted-foreground truncate">{item.desc}</p>
          </div>
          <span className="text-xs text-muted-foreground shrink-0">{item.time}</span>
        </div>
      ))}
    </AnimatedList>
  )
}
