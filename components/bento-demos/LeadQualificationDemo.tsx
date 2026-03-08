"use client"

import { forwardRef, useRef } from "react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { cn } from "@/lib/utils"

const Circle = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-neutral-200 bg-white text-[10px] font-medium",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
Circle.displayName = "Circle"

export default function LeadQualificationDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const leadRef = useRef<HTMLDivElement>(null)
  const enrichRef = useRef<HTMLDivElement>(null)
  const scoreRef = useRef<HTMLDivElement>(null)
  const crmRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg p-4",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Circle ref={leadRef} className="border-[#D4A574]/40 bg-amber-50">
          Lead
        </Circle>
        <Circle ref={enrichRef} className="border-neutral-200">Enrich</Circle>
        <Circle ref={scoreRef} className="border-neutral-200">Score</Circle>
        <Circle ref={crmRef} className="border-neutral-200">CRM</Circle>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leadRef}
        toRef={enrichRef}
        curvature={5}
        gradientStartColor="#D4A574"
        gradientStopColor="#c53131"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={enrichRef}
        toRef={scoreRef}
        curvature={5}
        gradientStartColor="#D4A574"
        gradientStopColor="#c53131"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={scoreRef}
        toRef={crmRef}
        curvature={5}
        gradientStartColor="#D4A574"
        gradientStopColor="#c53131"
      />
      <span className="absolute bottom-2 right-2 text-[10px] text-neutral-400">
        +47 today
      </span>
    </div>
  )
}
