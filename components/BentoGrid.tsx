"use client"

import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons"
import {
  Bell,
  Share2,
  Mic,
  BarChart3,
  Mail,
  Video,
  FileSearch,
  MessageCircle,
  Target,
  Receipt,
  Code,
  Plane,
} from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import AnimatedBeamMultipleOutputDemo from "./AnimatedBeamMultipleOutputDemo"
import AnimatedListDemo from "./AnimatedListDemo"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Marquee } from "@/components/ui/marquee"
import TranscribeWaveformDemo from "./bento-demos/TranscribeWaveformDemo"
import SpreadsheetSparkline from "./bento-demos/SpreadsheetSparkline"
import EmailTriageDemo from "./bento-demos/EmailTriageDemo"
import MeetingNotesDemo from "./bento-demos/MeetingNotesDemo"
import PDFExtractionDemo from "./bento-demos/PDFExtractionDemo"
import SocialMonitoringDemo from "./bento-demos/SocialMonitoringDemo"
import LeadQualificationDemo from "./bento-demos/LeadQualificationDemo"
import InvoiceStackDemo from "./bento-demos/InvoiceStackDemo"
import CodeReviewDemo from "./bento-demos/CodeReviewDemo"
import TravelMarqueeDemo from "./bento-demos/TravelMarqueeDemo"

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
]

const BENTO_MASK =
  "[mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]"
const BENTO_ABSOLUTE = "absolute inset-x-0 top-4"

const mainFeatures = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className={cn(
          BENTO_ABSOLUTE,
          "top-10 left-0 right-0 h-28 max-h-[40%] overflow-hidden",
          BENTO_MASK,
          "[--duration:20s]"
        )}
      >
        {files.map((f, idx) => {
          const colors = [
            "border-amber-200/60 bg-amber-50/80",
            "border-emerald-200/60 bg-emerald-50/80",
            "border-blue-200/60 bg-blue-50/80",
            "border-purple-200/60 bg-purple-50/80",
            "border-rose-200/60 bg-rose-50/80",
          ]
          return (
            <figure
              key={idx}
              className={cn(
                "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                colors[idx % colors.length],
                "hover:bg-opacity-100 transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs text-neutral-600">
                {f.body}
              </blockquote>
            </figure>
          )
        })}
      </Marquee>
    ),
  },
  {
    Icon: Bell,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2",
    background: (
      <AnimatedListDemo
        className={cn(
          "top-4 right-2 h-[300px] w-full scale-75 border-none",
          BENTO_MASK,
          "transition-all duration-300 ease-out group-hover:scale-90"
        )}
      />
    ),
  },
  {
    Icon: Share2,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo
        className={cn(
          "top-4 right-2 h-[300px] border-none",
          BENTO_MASK,
          "transition-all duration-300 ease-out group-hover:scale-105"
        )}
      />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className={cn(
          "top-10 right-0 origin-top scale-75 rounded-md border",
          BENTO_MASK,
          "transition-all duration-300 ease-out group-hover:scale-90",
          "[&_button[data-selected-single=true]]:!bg-[#D4A574] [&_button[data-selected-single=true]]:!text-white"
        )}
      />
    ),
  },
]

const moreFeatures = [
  {
    Icon: Mic,
    name: "Transcribe Audio",
    description: "Convert voice memos to text instantly.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2",
    background: (
      <TranscribeWaveformDemo
        className={cn(BENTO_ABSOLUTE, "scale-90", BENTO_MASK)}
      />
    ),
  },
  {
    Icon: BarChart3,
    name: "Spreadsheet Analysis",
    description: "Get insights from your data.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1",
    background: (
      <SpreadsheetSparkline
        className={cn(BENTO_ABSOLUTE, BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Mail,
    name: "Email Triage",
    description: "Sort and prioritize your inbox.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2",
    background: (
      <EmailTriageDemo
        className={cn(BENTO_ABSOLUTE, "right-2 h-[220px] scale-90", BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Video,
    name: "Meeting Notes",
    description: "Capture and summarize calls.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1",
    background: (
      <MeetingNotesDemo
        className={cn(BENTO_ABSOLUTE, BENTO_MASK)}
      />
    ),
  },
  {
    Icon: FileSearch,
    name: "PDF Extraction",
    description: "Pull data from contracts and docs.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1",
    background: (
      <PDFExtractionDemo
        className={cn(BENTO_ABSOLUTE, BENTO_MASK)}
      />
    ),
  },
  {
    Icon: MessageCircle,
    name: "Social Monitoring",
    description: "Track mentions and DMs across platforms.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2",
    background: (
      <SocialMonitoringDemo
        className={cn(BENTO_ABSOLUTE, "right-2 h-[220px] scale-90", BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Target,
    name: "Lead Qualification",
    description: "Enrich and score CRM contacts.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2",
    background: (
      <LeadQualificationDemo
        className={cn(BENTO_ABSOLUTE, "h-[140px]", BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Receipt,
    name: "Invoice Processing",
    description: "Extract and categorize expenses.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1",
    background: (
      <InvoiceStackDemo
        className={cn(BENTO_ABSOLUTE, "h-[130px]", BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Code,
    name: "Code Review",
    description: "Automated PR feedback and suggestions.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1",
    background: (
      <CodeReviewDemo
        className={cn(BENTO_ABSOLUTE, "mx-4 max-w-[240px]", BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Plane,
    name: "Travel Assistant",
    description: "24/7 booking and trip planning.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2",
    background: (
      <TravelMarqueeDemo
        className={cn(BENTO_ABSOLUTE, BENTO_MASK)}
      />
    ),
  },
]

const STAGGER_DELAY = 0.5
const CARD_ANIMATION = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
}

const allFeatures = [...mainFeatures, ...moreFeatures]

export function BentoDemo() {
  const moreSectionRef = useRef<HTMLDivElement>(null)
  const moreInView = useInView(moreSectionRef, {
    once: true,
    amount: 0.05,
  })

  return (
    <div className="min-w-[600px]">
      <BentoGrid>
        {allFeatures.map((feature, idx) => {
          const isInMoreSection = idx >= mainFeatures.length
          const delay = isInMoreSection
            ? (moreInView ? (idx - mainFeatures.length) * 0.12 : 0)
            : idx * STAGGER_DELAY
          const shouldAnimate =
            !isInMoreSection || (isInMoreSection && moreInView)

          return (
            <motion.div
              key={idx}
              ref={isInMoreSection && idx === mainFeatures.length ? moreSectionRef : undefined}
              className={cn("flex min-h-0 min-w-0 overflow-hidden", feature.className)}
              initial={CARD_ANIMATION.initial}
              animate={shouldAnimate ? CARD_ANIMATION.animate : CARD_ANIMATION.initial}
              transition={{
                ...CARD_ANIMATION.transition,
                delay,
              }}
            >
              <BentoCard {...feature} className="h-full min-h-0 flex-1" />
            </motion.div>
          )
        })}
      </BentoGrid>
    </div>
  )
}
