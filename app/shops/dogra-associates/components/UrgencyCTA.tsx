'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react'

const memberships = [
  { title: 'Gym Membership', description: 'Strength, cardio and functional zones', image: '/club72/fitness.jpg', code: 'GYM' },
  { title: 'Personal Training', description: 'Goal-led coaching and accountability', image: '/club72/coaching.jpg', code: 'PT' },
  { title: 'Swimming Access', description: 'Pool access for fitness and recovery', image: '/club72/swimming.jpg', code: 'SWIM' },
  { title: 'Family Fitness', description: 'Active experiences for adults and kids', image: '/club72/kids-zone.jpg', code: 'FAMILY' },
]

export default function UrgencyCTA() {
  const plansRef = useRef<HTMLDivElement>(null)
  const showNextPlan = () => {
    const rail = plansRef.current
    if (!rail) return
    rail.scrollBy({ left: rail.clientWidth * 0.8, behavior: 'smooth' })
  }
  const showPreviousPlan = () => {
    const rail = plansRef.current
    if (!rail) return
    rail.scrollBy({ left: -rail.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section className="mx-auto w-full max-w-md py-7">
      <div className="mb-5">
        <div className="section-title-accent mb-2"><h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Membership</h2></div>
        <p className="text-sm font-medium text-[#CFCFCF] sm:text-base">Choose the right way to train at Club72</p>
      </div>

      <div ref={plansRef} className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 [scrollbar-width:none]">
          {memberships.map((membership, index) => {
            return (
              <motion.article
                key={membership.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: index * 0.04 }}
                className="group relative aspect-square w-[76%] shrink-0 snap-center overflow-hidden rounded-[28px] bg-[#111111]"
              >
                <Image src={membership.image} alt={membership.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="340px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-[#B91C1C]/15" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                  <span className="rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">{membership.code}</span>
                  <span className="text-4xl font-black leading-none text-white/18">0{index + 1}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#FFB1AB]">Club72 Membership</p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-white">{membership.title}</h3>
                  <p className="mt-2 max-w-[15rem] text-xs font-semibold leading-5 text-white/75">{membership.description}</p>
                  <Link href="/membership" className="mt-4 inline-flex h-10 items-center gap-2 rounded-full border border-white/35 bg-white/12 px-4 text-[11px] font-black text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#B91C1C]" aria-label={`View ${membership.title}`}>
                    View Plan <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            )
          })}
      </div>
      <div className="mt-1 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <p className="text-[10px] font-black uppercase tracking-[0.13em] text-[#CFCFCF]">Swipe to explore plans</p>
          <span className="flex items-center gap-1.5">
            <button type="button" onClick={showPreviousPlan} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B91C1C]/70 bg-[#231616] text-white shadow-[0_8px_18px_rgba(159,17,17,0.18)] transition-transform active:scale-95" aria-label="Show previous membership plan">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={showNextPlan} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B91C1C]/70 bg-[#231616] text-white shadow-[0_8px_18px_rgba(159,17,17,0.18)] transition-transform active:scale-95" aria-label="Show next membership plan">
              <ArrowRight className="h-4 w-4" />
            </button>
          </span>
        </div>
        <Link href="/book-consultation" className="flex h-11 min-w-[138px] items-center justify-center gap-2 rounded-full border border-white/10 bg-[#B91C1C] px-4 text-xs font-black text-white shadow-[0_9px_20px_rgba(159,17,17,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]"><CalendarDays className="h-4 w-4" />Book Trial</Link>
      </div>
    </section>
  )
}
