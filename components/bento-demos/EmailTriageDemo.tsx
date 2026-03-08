"use client"

import { Mail, Star } from "lucide-react"
import { AnimatedList } from "@/components/ui/animated-list"
import { cn } from "@/lib/utils"

const emails = [
  { subject: "Q1 Report ready", preview: "Your team shared...", important: true },
  { subject: "Meeting tomorrow 10am", preview: "Reminder: All-hands...", important: true },
  { subject: "Newsletter March", preview: "Check out the latest...", important: false },
]

function EmailItem({
  subject,
  preview,
  important,
}: {
  subject: string
  preview: string
  important: boolean
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2 shadow-sm">
      {important && (
        <Star className="h-4 w-4 shrink-0 text-[#D4A574]" fill="#D4A574" />
      )}
      <Mail
        className={cn("h-4 w-4 shrink-0", important ? "text-[#D4A574]" : "text-neutral-400")}
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-neutral-900">{subject}</p>
        <p className="truncate text-xs text-neutral-500">{preview}</p>
      </div>
    </div>
  )
}

export default function EmailTriageDemo({ className }: { className?: string }) {
  return (
    <AnimatedList className={cn("flex flex-col gap-3", className)} delay={1000}>
      {emails.map((e, i) => (
        <EmailItem key={i} {...e} />
      ))}
    </AnimatedList>
  )
}
