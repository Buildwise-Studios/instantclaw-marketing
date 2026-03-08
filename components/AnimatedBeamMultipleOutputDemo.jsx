'use client'

import React, { forwardRef, useRef } from 'react'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import { cn } from '@/lib/utils'
import {
  siGoogledrive,
  siGoogledocs,
  siWhatsapp,
  siMessenger,
} from 'simple-icons'

const Circle = forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-neutral-200 bg-white',
      className
    )}
    {...props}
  >
    {children}
  </div>
))
Circle.displayName = 'Circle'

const PlatformIcon = ({ icon, color, size = 20 }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={icon.path} />
  </svg>
)

export default function AnimatedBeamMultipleOutputDemo({ className }) {
  const containerRef = useRef(null)
  const userRef = useRef(null)
  const centerRef = useRef(null)
  const driveRef = useRef(null)
  const docsRef = useRef(null)
  const whatsappRef = useRef(null)
  const messengerRef = useRef(null)

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white p-4',
        className
      )}
    >
      <div className="flex h-full w-full max-w-lg flex-row items-stretch justify-between gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <Circle ref={userRef} className="border-neutral-300 bg-neutral-100">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-neutral-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Circle>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <Circle ref={centerRef} className="border-neutral-300 bg-neutral-100">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-neutral-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 8.0225a6.0557 6.0557 0 0 0 3.9964-2.9024 5.9894 5.9894 0 0 0 5.0256-8.2989zm-9.022 12.6081a8.1439 8.1439 0 0 1-4.4145-1.2952l.384-.2607 2.8418-.495a.636.636 0 0 0 .334-.962 8.3463 8.3463 0 0 1-.6652-1.299.636.636 0 0 0-.6136-.2672l-2.8836.5045-.3291-.2326a8.4369 8.4369 0 0 1-3.8587-6.382 8.2445 8.2445 0 0 1 2.3146-5.963 8.405 8.405 0 0 1 5.9658-2.3165 8.3026 8.3026 0 0 1 5.9624 2.3165 8.2445 8.2445 0 0 1 2.3146 5.963 8.4369 8.4369 0 0 1-3.8587 6.382l-.3291.2326-2.8836-.5045a.636.636 0 0 0-.6136.2672 8.3463 8.3463 0 0 1-.6652 1.299.636.636 0 0 0 .334.962l2.8418.495.384.2607a8.1439 8.1439 0 0 1-4.4145 1.2952z" />
            </svg>
          </Circle>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-3">
          <Circle ref={driveRef} className="border-blue-100 bg-blue-50/50">
            <PlatformIcon icon={siGoogledrive} color={`#${siGoogledrive.hex}`} size={20} />
          </Circle>
          <Circle ref={docsRef} className="border-blue-100 bg-blue-50/50">
            <PlatformIcon icon={siGoogledocs} color={`#${siGoogledocs.hex}`} size={20} />
          </Circle>
          <Circle ref={whatsappRef} className="border-green-100 bg-green-50/50">
            <PlatformIcon icon={siWhatsapp} color={`#${siWhatsapp.hex}`} size={20} />
          </Circle>
          <Circle ref={messengerRef} className="border-blue-100 bg-blue-50/50">
            <PlatformIcon icon={siMessenger} color={`#${siMessenger.hex}`} size={20} />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={userRef}
        toRef={centerRef}
        curvature={0}
        gradientStartColor="#D4A574"
        gradientStopColor="#c53131"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={driveRef}
        curvature={-20}
        gradientStartColor="#D4A574"
        gradientStopColor="#c53131"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={docsRef}
        curvature={-10}
        gradientStartColor="#94a3b8"
        gradientStopColor="#4285F4"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={whatsappRef}
        curvature={10}
        gradientStartColor="#94a3b8"
        gradientStopColor="#25D366"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={messengerRef}
        curvature={20}
        gradientStartColor="#94a3b8"
        gradientStopColor="#0084FF"
      />
    </div>
  )
}
