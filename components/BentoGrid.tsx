'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Users,
  Shield,
  FileText,
  Cloud,
  Bell,
  ChevronDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Marquee } from '@/components/ui/marquee'
import AnimatedListDemo from './AnimatedListDemo'
import AnimatedBeamMultipleOutputDemo from './AnimatedBeamMultipleOutputDemo'

const CELL_SIZE = 140
const GAP = 12
const COLS = 6
const ROWS = 7
const GRID_CENTER_X = (COLS + 1) / 2
const GRID_CENTER_Y = (ROWS + 1) / 2
const STAGGER_MS = 100
const APPEAR_DURATION = 400
const ZOOM_START = 2.8
const ZOOM_END = 1.25
const ZOOM_HOLD_MS = 2330
const ZOOM_DURATION_MS = 1670
const TOTAL_MS = 4000

function distanceFromCenter(item) {
  const cx = item.colStart + item.colSpan / 2 - 0.5
  const cy = item.rowStart + item.rowSpan / 2 - 0.5
  return Math.sqrt((cx - GRID_CENTER_X) ** 2 + (cy - GRID_CENTER_Y) ** 2)
}

const files = [
  { name: 'bitcoin.pdf', body: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.' },
  { name: 'finances.xlsx', body: 'A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.' },
  { name: 'logo.svg', body: 'Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.' },
  { name: 'keys.gpg', body: 'GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.' },
  { name: 'seed.txt', body: 'A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.' },
]

const BENTO_ITEMS_RAW = [
  { cardType: 'feature-dropdown', label: 'Advanced permissions', colStart: 1, rowStart: 1, colSpan: 3, rowSpan: 2, conceptualIcon: 'people' },
  { cardType: 'icon-label', label: 'Email automation', colStart: 4, rowStart: 1, colSpan: 1, rowSpan: 1, icon: 'gmail.svg', color: '#ea4335' },
  { cardType: 'icon-label', label: 'Team chat', colStart: 5, rowStart: 1, colSpan: 1, rowSpan: 1, icon: 'slack.svg', color: '#4a154b' },
  { cardType: 'conceptual-icon', label: 'Custom user roles', colStart: 6, rowStart: 1, colSpan: 1, rowSpan: 1, conceptualIcon: 'graduation' },
  { cardType: 'feature-typography', label: 'Custom branding', colStart: 4, rowStart: 2, colSpan: 2, rowSpan: 1 },
  { cardType: 'icon-label', label: 'Video calls', colStart: 6, rowStart: 2, colSpan: 1, rowSpan: 1, icon: 'zoom.svg', color: '#2d8cff' },
  { cardType: 'icon-label', label: 'Task boards', colStart: 1, rowStart: 3, colSpan: 2, rowSpan: 1, icon: 'trello.svg', color: '#0079bf' },
  { cardType: 'animated-list', label: 'Notifications', colStart: 3, rowStart: 3, colSpan: 2, rowSpan: 1 },
  { cardType: 'icon-label', label: 'File sync', colStart: 5, rowStart: 3, colSpan: 1, rowSpan: 1, icon: 'googledrive.svg', color: '#4285f4' },
  { cardType: 'conceptual-icon', label: 'Secure auth', colStart: 6, rowStart: 3, colSpan: 1, rowSpan: 1, conceptualIcon: 'shield' },
  { cardType: 'feature-list', label: 'Team members', colStart: 1, rowStart: 4, colSpan: 2, rowSpan: 2 },
  { cardType: 'marquee-files', label: 'Save your files', colStart: 3, rowStart: 4, colSpan: 1, rowSpan: 1 },
  { cardType: 'animated-beam', label: 'Integrations', colStart: 4, rowStart: 4, colSpan: 1, rowSpan: 1 },
  { cardType: 'icon-label', label: 'Payments', colStart: 5, rowStart: 4, colSpan: 1, rowSpan: 1, icon: 'stripe.svg', color: '#635bff' },
  { cardType: 'conceptual-icon', label: 'Compliance', colStart: 6, rowStart: 4, colSpan: 1, rowSpan: 1, conceptualIcon: 'compliance' },
  { cardType: 'calendar', label: 'Calendar', colStart: 3, rowStart: 5, colSpan: 1, rowSpan: 1 },
  { cardType: 'feature-progress', label: 'Deploy progress', colStart: 4, rowStart: 5, colSpan: 2, rowSpan: 1 },
  { cardType: 'icon-label', label: 'Code & repos', colStart: 6, rowStart: 5, colSpan: 1, rowSpan: 1, icon: 'github.svg', color: '#24292f' },
  { cardType: 'icon-label', label: 'Messaging', colStart: 1, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'telegram.svg', color: '#0088cc' },
  { cardType: 'icon-label', label: 'Support', colStart: 2, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'whatsapp.svg', color: '#25d366' },
  { cardType: 'icon-label', label: 'Cloud storage', colStart: 3, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'dropbox.svg', color: '#0061ff' },
  { cardType: 'icon-label', label: 'Design', colStart: 4, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'figma.svg', color: '#f24e1e' },
  { cardType: 'icon-label', label: 'Databases', colStart: 5, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'airtable.svg', color: '#18bfff' },
  { cardType: 'icon-label', label: 'Spreadsheets', colStart: 6, rowStart: 6, colSpan: 1, rowSpan: 1, icon: 'excel.svg', color: '#217346' },
  { cardType: 'icon-label', label: 'Meetings', colStart: 1, rowStart: 7, colSpan: 1, rowSpan: 1, icon: 'teams.svg', color: '#6264a7' },
  { cardType: 'icon-label', label: 'Community', colStart: 2, rowStart: 7, colSpan: 1, rowSpan: 1, icon: 'discord.svg', color: '#5865f2' },
  { cardType: 'conceptual-icon', label: 'Notifications', colStart: 3, rowStart: 7, colSpan: 1, rowSpan: 1, conceptualIcon: 'bell' },
  { cardType: 'conceptual-icon', label: 'SAML SSO', colStart: 4, rowStart: 7, colSpan: 1, rowSpan: 1, conceptualIcon: 'cloud' },
  { cardType: 'icon-label', label: 'Projects', colStart: 5, rowStart: 7, colSpan: 1, rowSpan: 1, icon: 'asana.svg', color: '#f06a6a' },
  { cardType: 'icon-label', label: 'HubSpot CRM', colStart: 6, rowStart: 7, colSpan: 1, rowSpan: 1, icon: 'hubspot.svg', color: '#ff7a59' },
]

const CONCEPTUAL_ICONS = {
  graduation: GraduationCap,
  people: Users,
  shield: Shield,
  document: FileText,
  cloud: Cloud,
  bell: Bell,
  compliance: Shield,
}

const CARD_BASE = 'flex flex-col gap-2 p-3.5 rounded-xl bg-[#fafafa] border border-black/[0.04] shadow-[0_4px_12px_rgba(0,0,0,0.06)]'
const LABEL_BASE = 'text-xs font-semibold text-[#1D1C1D] leading-tight'

function IconLabelCard({ item }) {
  return (
    <div className={cn(CARD_BASE, 'items-center justify-center')}>
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] overflow-hidden"
        style={{ backgroundColor: item.color ? `${item.color}18` : '#f3f4f6' }}
      >
        <img src={`/icons/${item.icon}`} alt="" className="h-6 w-6 object-contain" />
      </div>
      <span className={cn(LABEL_BASE, 'text-center')}>{item.label}</span>
    </div>
  )
}

function ConceptualIconCard({ item }) {
  const IconComponent = CONCEPTUAL_ICONS[item.conceptualIcon] || FileText
  return (
    <div className={cn(CARD_BASE, 'items-center justify-center')}>
      <IconComponent className="h-7 w-7 text-[#4b5563]" strokeWidth={1.5} />
      <span className={cn(LABEL_BASE, 'text-center')}>{item.label}</span>
    </div>
  )
}

function FeatureDropdownCard({ item }) {
  const IconComponent = CONCEPTUAL_ICONS[item.conceptualIcon] || Users
  return (
    <div className={cn(CARD_BASE)}>
      <div className="flex items-center gap-1.5 mb-1">
        <IconComponent className="h-7 w-7 shrink-0 text-[#4b5563]" strokeWidth={1.5} />
        <span className={LABEL_BASE}>{item.label}</span>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-2 py-1.5 text-sm">
        <span className="flex-1 text-[#374151]">Select role...</span>
        <ChevronDown className="h-4 w-4 text-[#6b7280]" />
      </div>
    </div>
  )
}

function FeatureTypographyCard({ item }) {
  return (
    <div className={cn(CARD_BASE)}>
      <span className={LABEL_BASE}>{item.label}</span>
      <div className="flex flex-col gap-1 text-[10px] text-[#374151]">
        <div className="font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>Aa Bb Cc</div>
        <div className="opacity-70">The quick brown fox</div>
      </div>
    </div>
  )
}

function FeatureListCard({ item }) {
  const IconComponent = Users
  const users = ['Alice', 'Bob', 'Carol']
  return (
    <div className={cn(CARD_BASE)}>
      <div className="flex items-center gap-1.5 mb-1">
        <IconComponent className="h-7 w-7 shrink-0 text-[#4b5563]" strokeWidth={1.5} />
        <span className={LABEL_BASE}>{item.label}</span>
      </div>
      <div className="flex flex-col gap-1">
        {users.map((u, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-gray-200 shrink-0" />
            <span className="text-xs text-[#374151] truncate">{u}</span>
            {i === 0 && <div className="h-1.5 w-1.5 rounded-full bg-green-500 ml-auto shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  )
}

function FeatureProgressCard({ item }) {
  return (
    <div className={cn(CARD_BASE)}>
      <span className={LABEL_BASE}>{item.label}</span>
      <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
        <div className="h-full w-[65%] rounded-full bg-[#3b82f6]" />
      </div>
    </div>
  )
}

function MarqueeFilesCard({ item }) {
  return (
    <div className={cn(CARD_BASE, 'overflow-hidden')}>
      <span className={LABEL_BASE}>{item.label}</span>
      <div className="flex-1 min-h-0 overflow-hidden [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
        <Marquee pauseOnHover className="absolute [--duration:20s]" vertical={false}>
          {files.map((f, idx) => (
            <figure
              key={idx}
              className="relative w-28 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-gray-50/50 p-2"
            >
              <figcaption className="text-xs font-medium text-[#1a1a1a] truncate">{f.name}</figcaption>
              <blockquote className="mt-1 text-[10px] text-gray-500 line-clamp-2">{f.body}</blockquote>
            </figure>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

function AnimatedListCard({ item }) {
  return (
    <div className={cn(CARD_BASE, 'overflow-hidden')}>
      <span className={LABEL_BASE}>{item.label}</span>
      <div className="flex-1 min-h-0 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
        <AnimatedListDemo className="h-full w-full scale-75 origin-top" />
      </div>
    </div>
  )
}

function AnimatedBeamCard({ item }) {
  return (
    <div className={cn(CARD_BASE, 'overflow-hidden')}>
      <span className={LABEL_BASE}>{item.label}</span>
      <div className="flex-1 min-h-[80px] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
        <AnimatedBeamMultipleOutputDemo className="h-full w-full scale-75 origin-top" />
      </div>
    </div>
  )
}

function SimpleCalendar() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  return (
    <div className="text-[10px] font-medium">
      <div className="mb-1 text-center text-[#1D1C1D]">May 2022</div>
      <div className="grid grid-cols-7 gap-0.5">
        {days.map((d, i) => (
          <div key={i} className="py-0.5 text-center text-[#6b7280]">{d}</div>
        ))}
        {dates.map((d, i) => (
          <div
            key={i}
            className={cn(
              'flex h-5 w-5 items-center justify-center rounded',
              d === 11 ? 'bg-[#D4A574] text-white' : 'text-[#1D1C1D]'
            )}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}

function CalendarCard({ item }) {
  return (
    <div className={cn(CARD_BASE, 'overflow-hidden')}>
      <span className={LABEL_BASE}>{item.label}</span>
      <div className="flex-1 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
        <SimpleCalendar />
      </div>
    </div>
  )
}

function BentoCard({ item, appearOrder }) {
  let content
  switch (item.cardType) {
    case 'icon-label':
      content = <IconLabelCard item={item} />
      break
    case 'conceptual-icon':
      content = <ConceptualIconCard item={item} />
      break
    case 'feature-dropdown':
      content = <FeatureDropdownCard item={item} />
      break
    case 'feature-typography':
      content = <FeatureTypographyCard item={item} />
      break
    case 'feature-list':
      content = <FeatureListCard item={item} />
      break
    case 'feature-progress':
      content = <FeatureProgressCard item={item} />
      break
    case 'marquee-files':
      content = <MarqueeFilesCard item={item} />
      break
    case 'animated-list':
      content = <AnimatedListCard item={item} />
      break
    case 'animated-beam':
      content = <AnimatedBeamCard item={item} />
      break
    case 'calendar':
      content = <CalendarCard item={item} />
      break
    default:
      content = <div className={CARD_BASE}><span className={LABEL_BASE}>{item.label}</span></div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: appearOrder * STAGGER_MS,
        duration: APPEAR_DURATION / 1000,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className="h-full w-full"
      style={{
        gridColumn: `${item.colStart} / span ${item.colSpan}`,
        gridRow: `${item.rowStart} / span ${item.rowSpan}`,
      }}
    >
      {content}
    </motion.div>
  )
}

export function BentoDemo() {
  const itemsWithOrder = useMemo(() => {
    const indexed = BENTO_ITEMS_RAW.map((item, idx) => ({ item, idx, d: distanceFromCenter(item) }))
    indexed.sort((a, b) => a.d - b.d)
    return BENTO_ITEMS_RAW.map((item, originalIdx) => {
      const rank = indexed.findIndex((x) => x.idx === originalIdx)
      return { ...item, appearOrder: rank }
    })
  }, [])

  const gridWidth = COLS * CELL_SIZE + (COLS - 1) * GAP
  const gridHeight = ROWS * CELL_SIZE + (ROWS - 1) * GAP

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-[#F5F4F2] overflow-hidden">
      <motion.div
        className="flex items-center justify-center"
        initial={{ scale: ZOOM_START }}
        animate={{ scale: ZOOM_END }}
        transition={{
          duration: ZOOM_DURATION_MS / 1000,
          delay: ZOOM_HOLD_MS / 1000,
          ease: [0.33, 1, 0.68, 1],
        }}
        style={{ transformOrigin: 'center center' }}
      >
        <div
          className="grid gap-3"
          style={{
            width: gridWidth,
            height: gridHeight,
            gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
            gap: GAP,
          }}
        >
          {itemsWithOrder.map((item, idx) => (
            <BentoCard key={idx} item={item} appearOrder={item.appearOrder} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
