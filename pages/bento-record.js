import { BentoDemo } from '../components/BentoGrid'

export default function BentoRecordPage() {
  return (
    <div
      className="flex min-h-screen min-w-screen items-center justify-center overflow-hidden bg-[#F8F7F5]"
      style={{
        // Fixed viewport for recording: 1080x1920 (Reels format)
        minWidth: 1080,
        minHeight: 1920,
        width: 1080,
        height: 1920,
      }}
    >
      <BentoDemo />
    </div>
  )
}
