'use client'

import React, { useRef } from 'react'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import { cn } from '@/lib/utils'

function AnimatedBeamMultipleOutputDemo({ className }) {
  const containerRef = useRef(null)
  const inputRef = useRef(null)
  const output1Ref = useRef(null)
  const output2Ref = useRef(null)
  const output3Ref = useRef(null)

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white p-4',
        className
      )}
    >
      <div className="flex h-full w-full max-w-lg flex-row items-stretch justify-between gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <div ref={inputRef} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-800 bg-white" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <div ref={output1Ref} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-800 bg-white" />
          <div ref={output2Ref} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-800 bg-white" />
          <div ref={output3Ref} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-800 bg-white" />
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={inputRef}
        toRef={output1Ref}
        curvature={-15}
        gradientStartColor="#D4A574"
        gradientStopColor="#c53131"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={inputRef}
        toRef={output2Ref}
        curvature={0}
        gradientStartColor="#D4A574"
        gradientStopColor="#c53131"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={inputRef}
        toRef={output3Ref}
        curvature={15}
        gradientStartColor="#D4A574"
        gradientStopColor="#c53131"
      />
    </div>
  )
}

export default AnimatedBeamMultipleOutputDemo
