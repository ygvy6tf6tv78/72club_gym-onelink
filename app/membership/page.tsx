'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, HeartPulse, Phone } from 'lucide-react'
import { shopConfig } from '../shops/dogra-associates/config'
import { getWhatsAppLink } from '../lib/phone'

const plans = [
  { title: 'Gym Membership', category: 'Gym', label: 'Strength & Performance', description: 'Full access to premium strength, cardio and functional training zones.', image: '/club72/fitness.jpg' },
  { title: 'Swimming Membership', category: 'Swimming', label: 'Fitness & Recreation', description: 'Dedicated pool access for members who want swimming in their routine.', image: '/club72/swimming.jpg' },
  { title: 'Family Membership', category: 'Family', label: 'Move Together', description: 'A complete fitness and recreation experience designed for the whole family.', image: '/club72/kids-zone.jpg' },
]

function WhatsAppMark() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#25D366" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}

export default function MembershipPage() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? plans : plans.filter((plan) => plan.category === filter)
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF7F6] via-white to-[#FAFAFA] px-4 py-5 text-[#111111]">
      <section className="mx-auto max-w-md">
        <header className="overflow-hidden rounded-[30px] border border-white/20 bg-[#C92720] p-5 text-white shadow-[0_24px_54px_rgba(185,28,28,0.24)]">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/10"><ArrowLeft className="h-5 w-5" /></Link>
            <h1 className="text-2xl font-black tracking-tight">Membership</h1>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/10"><HeartPulse className="h-5 w-5" /></span>
          </div>
          <p className="mt-4 text-sm font-medium leading-6 text-white/90">Choose a Club72 experience built around your training, coaching and family goals.</p>
          <nav className="mt-5 grid grid-cols-3 rounded-[20px] border border-white/20 bg-black/10 p-1.5">
            <Link href="/" className="flex h-10 items-center justify-center rounded-2xl text-xs font-black text-white/80">Home</Link>
            <Link href="/facilities" className="flex h-10 items-center justify-center rounded-2xl text-xs font-black text-white/80">Facilities</Link>
            <Link href="/book-consultation" className="flex h-10 items-center justify-center rounded-2xl bg-white text-xs font-black text-[#B91C1C]">Book Trial</Link>
          </nav>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
            {['All', 'Gym', 'Swimming', 'Family'].map((item) => <button key={item} onClick={() => setFilter(item)} className={`h-9 shrink-0 rounded-full border px-3 text-[11px] font-black ${filter === item ? 'border-white bg-white text-[#B91C1C]' : 'border-white/25 bg-white/10 text-white'}`}>{item === 'All' ? 'All Plans' : item}</button>)}
          </div>
        </header>

        <div className="mt-6 space-y-5">
          {visible.map((plan, index) => {
            const whatsapp = getWhatsAppLink(shopConfig.contact.clientPhoneE164, `Hi Club72 Gym, I want to know about ${plan.title}.`)
            return (
              <article key={plan.title} className="relative overflow-hidden rounded-[30px] border border-[#E7C9C6] bg-white p-4 shadow-[0_18px_42px_rgba(21,21,21,0.10)]">
                <span className="pointer-events-none absolute -right-2 top-0 text-[72px] font-black leading-none text-[#B91C1C]/[0.035]">0{index + 1}</span>
                <div className="relative flex items-center gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[26px] border-2 border-[#E1261C] bg-black shadow-[0_10px_24px_rgba(185,28,28,0.16)]">
                    <Image src={plan.image} alt={plan.title} fill className="object-cover" sizes="96px" />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="min-w-0">
                    <span className="inline-flex rounded-full bg-[#FFF1F0] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#B91C1C]">{plan.category}</span>
                    <h2 className="mt-2 text-xl font-black leading-tight text-[#111111]">{plan.title}</h2>
                    <p className="mt-1 text-[9px] font-black uppercase tracking-[0.13em] text-[#B91C1C]">{plan.label}</p>
                  </div>
                </div>
                <div className="relative pt-4">
                  <p className="mt-4 text-sm font-medium leading-6 text-neutral-600">{plan.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#EED8D5] bg-[#FFF8F7] px-3 py-1.5 text-[10px] font-black text-[#7F1D1D]">Expert Guidance</span>
                    <span className="rounded-full border border-[#EED8D5] bg-[#FFF8F7] px-3 py-1.5 text-[10px] font-black text-[#7F1D1D]">Premium Access</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <a href={`tel:+${shopConfig.contact.clientPhoneE164}`} className="flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-[#C92720] to-[#9F1111] text-xs font-black text-white shadow-[0_9px_20px_rgba(159,17,17,0.23),0_4px_8px_rgba(21,21,21,0.08),inset_0_1px_0_rgba(255,255,255,0.16)]"><Phone className="h-4 w-4" />Call Now</a>
                    <Link href={whatsapp} target="_blank" className="flex h-11 items-center justify-center gap-2 rounded-full border border-[#EAEAEA] bg-white text-xs font-black shadow-[0_9px_20px_rgba(21,21,21,0.10),inset_0_1px_0_rgba(255,255,255,0.96)]"><WhatsAppMark />WhatsApp</Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
