import React from 'react';
import {
  Mic,
  ChartBar,
  Mail,
  Video,
  FileSearch,
  MessageCircle,
  Target,
  Receipt,
  Code,
  Plane,
} from 'lucide-react';
import { BentoGrid, BentoGridCard, BENTO_ABSOLUTE, BENTO_MASK } from './BentoGrid';
import { BentoCard } from './BentoCard';
import { cn } from '../../lib/utils';
import { TranscribeWaveformDemo } from './demos/TranscribeWaveformDemo';
import { SpreadsheetSparkline } from './demos/SpreadsheetSparkline';
import { EmailTriageDemo } from './demos/EmailTriageDemo';
import { MeetingNotesDemo } from './demos/MeetingNotesDemo';
import { PDFExtractionDemo } from './demos/PDFExtractionDemo';
import { SocialMonitoringDemo } from './demos/SocialMonitoringDemo';
import { LeadQualificationDemo } from './demos/LeadQualificationDemo';
import { InvoiceStackDemo } from './demos/InvoiceStackDemo';
import { CodeReviewDemo } from './demos/CodeReviewDemo';
import { TravelMarqueeDemo } from './demos/TravelMarqueeDemo';

const moreFeatures = [
  {
    Icon: Mic,
    name: 'Transcribe Audio',
    description: 'Convert voice memos to text instantly.',
    className: 'col-span-2',
    background: (
      <TranscribeWaveformDemo
        className={cn(BENTO_ABSOLUTE, 'scale-90', BENTO_MASK)}
      />
    ),
  },
  {
    Icon: ChartBar,
    name: 'Spreadsheet Analysis',
    description: 'Get insights from your data.',
    className: 'col-span-1',
    background: (
      <SpreadsheetSparkline
        className={cn(BENTO_ABSOLUTE, BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Mail,
    name: 'Email Triage',
    description: 'Sort and prioritize your inbox.',
    className: 'col-span-2',
    background: (
      <EmailTriageDemo
        className={cn(BENTO_ABSOLUTE, 'right-2 h-[220px] scale-90', BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Video,
    name: 'Meeting Notes',
    description: 'Capture and summarize calls.',
    className: 'col-span-1',
    background: (
      <MeetingNotesDemo
        className={cn(BENTO_ABSOLUTE, BENTO_MASK)}
      />
    ),
  },
  {
    Icon: FileSearch,
    name: 'PDF Extraction',
    description: 'Pull data from contracts and docs.',
    className: 'col-span-1',
    background: (
      <PDFExtractionDemo
        className={cn(BENTO_ABSOLUTE, BENTO_MASK)}
      />
    ),
  },
  {
    Icon: MessageCircle,
    name: 'Social Monitoring',
    description: 'Track mentions and DMs across platforms.',
    className: 'col-span-2',
    background: (
      <SocialMonitoringDemo
        className={cn(BENTO_ABSOLUTE, 'right-2 h-[220px] scale-90', BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Target,
    name: 'Lead Qualification',
    description: 'Enrich and score CRM contacts.',
    className: 'col-span-2',
    background: (
      <LeadQualificationDemo
        className={cn(BENTO_ABSOLUTE, 'h-[240px]', BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Receipt,
    name: 'Invoice Processing',
    description: 'Extract and categorize expenses.',
    className: 'col-span-1',
    background: (
      <InvoiceStackDemo
        className={cn(BENTO_ABSOLUTE, 'h-[130px]', BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Code,
    name: 'Code Review',
    description: 'Automated PR feedback and suggestions.',
    className: 'col-span-1',
    background: (
      <CodeReviewDemo
        className={cn(BENTO_ABSOLUTE, 'mx-4 max-w-[240px]', BENTO_MASK)}
      />
    ),
  },
  {
    Icon: Plane,
    name: 'Travel Assistant',
    description: '24/7 booking and trip planning.',
    className: 'col-span-2',
    background: (
      <TravelMarqueeDemo
        className={cn(BENTO_ABSOLUTE, BENTO_MASK)}
      />
    ),
  },
];

export function RemotionBentoGrid() {
  return (
    <BentoGrid className="w-[1080px] h-[1920px] grid-rows-5">
      {moreFeatures.map((feature, idx) => (
        <BentoGridCard
          key={feature.name}
          index={idx}
          className={feature.className}
          startFrame={10}
          staggerFrames={6}
        >
          <BentoCard
            name={feature.name}
            className="h-full"
            background={feature.background}
            Icon={feature.Icon}
            description={feature.description}
          />
        </BentoGridCard>
      ))}
    </BentoGrid>
  );
}
