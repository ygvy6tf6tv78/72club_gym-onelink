'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight, Dumbbell, HeartPulse, Waves, Activity, Baby, PersonStanding, LayoutGrid } from 'lucide-react'
import { shopConfig } from '../shops/dogra-associates/config'
import { getWhatsAppLink } from '../lib/phone'

const categories = [
  { key: 'all', label: 'All', icon: LayoutGrid, title: 'All Facilities', subtitle: 'Explore the complete Club72 fitness, recreation and recovery experience.', items: [
    { title: 'Strength Floor', description: '100+ stations for focused strength training.', image: '/club72/fitness.jpg' },
    { title: 'Cardio Zone', description: 'Premium cardio for endurance and conditioning.', image: '/club72/infrastructure.jpg' },
    { title: 'Swimming Pool', description: 'Swimming for fitness, recreation and recovery.', image: '/club72/swimming.jpg' },
    { title: 'Personal Training', description: 'One-to-one coaching for structured progress.', image: '/club72/coaching.jpg' },
  ]},
  { key: 'strength', label: 'Strength', icon: Dumbbell, title: 'Strength & Performance', subtitle: 'Premium equipment and structured zones for serious training.', items: [
    { title: 'Strength Floor', description: '100+ stations for focused strength training.', image: '/club72/fitness.jpg' },
    { title: 'Functional Training', description: 'Open zones for movement and performance.', image: '/club72/training.jpg' },
  ]},
  { key: 'cardio', label: 'Cardio', icon: Activity, title: 'Cardio & Endurance', subtitle: 'Build stamina with a wide range of modern cardio equipment.', items: [
    { title: 'Cardio Zone', description: 'Premium cardio for endurance and conditioning.', image: '/club72/infrastructure.jpg' },
  ]},
  { key: 'swimming', label: 'Swimming', icon: Waves, title: 'Swimming', subtitle: 'A premium pool experience inside the complete Club72 ecosystem.', items: [
    { title: 'Swimming Pool', description: 'Swimming for fitness, recreation and recovery.', image: '/club72/swimming.jpg' },
  ]},
  { key: 'training', label: 'Training', icon: PersonStanding, title: 'Specialized Training', subtitle: 'Expert-led programs shaped around individual fitness goals.', items: [
    { title: 'Personal Training', description: 'One-to-one coaching for structured progress.', image: '/club72/coaching.jpg' },
  ]},
  { key: 'recovery', label: 'Recovery', icon: HeartPulse, title: 'Wellness & Recovery', subtitle: 'Reset, recover and return stronger with complete wellness support.', items: [
    { title: 'Recovery Zone', description: 'Mobility, recovery and wellness support.', image: '/club72/wellness.jpg' },
  ]},
  { key: 'kids', label: 'Kids Zone', icon: Baby, title: 'Kids Active Zone', subtitle: 'Movement and activity experiences designed for younger members.', items: [
    { title: 'Kids Active Zone', description: 'A safe, energetic space for active kids.', image: '/club72/kids-zone.jpg' },
  ]},
]

function WhatsAppMark() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#25D366" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}

export default function FacilitiesPage() {
  const [active, setActive] = useState(0)
  const tabsRef = useRef<HTMLDivElement>(null)
  const category = categories[active]
  const whatsapp = getWhatsAppLink(shopConfig.contact.clientPhoneE164, `Hi Club72 Gym, I want to enquire about ${category.title}.`)

  useEffect(() => {
    tabsRef.current?.children[active]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [active])

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF7F6] via-white to-[#FAFAFA] px-4 py-5 text-[#111111]">
      <section className="mx-auto max-w-md">
        <header className="overflow-hidden rounded-[30px] border border-white/20 bg-[#C92720] p-5 text-white shadow-[0_24px_54px_rgba(185,28,28,0.24)]">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10"><ArrowLeft className="h-5 w-5" /></Link>
            <div className="text-center"><h1 className="text-2xl font-black">Facilities</h1><p className="mt-0.5 text-[9px] font-black uppercase tracking-[0.18em] text-white/70">Club72 Gym</p></div>
            <span className="rounded-full border border-white/25 px-2.5 py-1 text-[9px] font-black tracking-[0.14em]">TRAIN</span>
          </div>
          <p className="mt-4 text-sm font-medium leading-6 text-white/90">Fitness, sports, swimming and recovery—everything you need under one roof.</p>

          <nav className="mt-4 grid grid-cols-3 rounded-[18px] border border-white/20 bg-black/10 p-1">
            <Link href="/" className="flex h-9 items-center justify-center rounded-xl text-[11px] font-black text-white/80">Home</Link>
            <Link href="/membership" className="flex h-9 items-center justify-center rounded-xl text-[11px] font-black text-white/80">Membership</Link>
            <Link href="/book-consultation" className="flex h-9 items-center justify-center rounded-xl bg-white text-[11px] font-black text-[#B91C1C]">Book Trial</Link>
          </nav>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">Categories</p>
            <div className="flex gap-2">
              <button onClick={() => setActive((active - 1 + categories.length) % categories.length)} className="flex h-8 items-center gap-1 rounded-full border border-white/25 px-2.5 text-[11px] font-black"><ChevronLeft className="h-3.5 w-3.5" />Prev</button>
              <button onClick={() => setActive((active + 1) % categories.length)} className="flex h-8 items-center gap-1 rounded-full border border-white/25 px-2.5 text-[11px] font-black">Next<ChevronRight className="h-3.5 w-3.5" /></button>
            </div>
          </div>
          <div ref={tabsRef} className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
            {categories.map((item, index) => {
              const Icon = item.icon
              return <button key={item.key} onClick={() => setActive(index)} className={`flex h-10 shrink-0 items-center gap-1.5 rounded-full border px-3 text-xs font-black ${active === index ? 'border-white bg-white text-[#B91C1C]' : 'border-white/25 bg-white/10 text-white'}`}><span className={`flex h-7 w-7 items-center justify-center rounded-full ${active === index ? 'bg-[#FFF1F0]' : 'bg-white/15'}`}><Icon className="h-3.5 w-3.5" /></span>{item.label}</button>
            })}
          </div>
        </header>

        <div className="mt-7 flex items-end justify-between gap-3">
          <div><h2 className="text-2xl font-black">{category.title}</h2><p className="mt-2 text-sm font-medium leading-6 text-neutral-600">{category.subtitle}</p></div>
          <span className="flex h-9 min-w-9 items-center justify-center rounded-full bg-[#FFF1F0] text-xs font-black text-[#B91C1C]">{category.items.length}</span>
        </div>

        <div className="mt-5 space-y-4">
          {category.items.map((item, index) => (
            <article key={item.title} className="group relative min-h-[270px] overflow-hidden rounded-[28px] border border-[#E1261C] bg-[#111111] shadow-[0_18px_42px_rgba(21,21,21,0.16)]">
              <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="448px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/72 to-black/5" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/85">{category.label} · 0{index + 1}</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-white">{item.title}</h3>
                <p className="mt-2 max-w-[20rem] text-sm font-semibold leading-5 text-white">{item.description}</p>
                <Link href={whatsapp} target="_blank" className="mt-4 inline-flex h-10 items-center justify-center rounded-full border border-white/45 bg-white/12 px-5 text-xs font-black text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#B91C1C]">
                  Enquire
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
