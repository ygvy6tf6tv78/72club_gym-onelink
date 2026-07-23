'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  Baby,
  Dumbbell,
  HeartPulse,
  PersonStanding,
  Waves,
} from 'lucide-react'

import { setReturnSection } from '../../../lib/homeNavigation'

const facilities = [
  {
    title: 'Fitness & Performance',
    description: 'Strength, cardio and endurance training.',
    image: '/club72/infrastructure.jpg',
    icon: Dumbbell,
  },
  {
    title: 'Sports & Recreation',
    description: 'Multi-sport facilities for an active lifestyle.',
    image: '/club72/swimming.jpg',
    icon: Activity,
  },
  {
    title: 'Specialized Training',
    description: 'Expert-led programs for every fitness goal.',
    image: '/club72/coaching.jpg',
    icon: PersonStanding,
  },
  {
    title: 'Wellness & Recovery',
    description: 'Recovery, rehab and complete wellness support.',
    image: '/club72/complete-wellness.jpg',
    icon: HeartPulse,
  },
  {
    title: 'Swimming Pool',
    description: 'Premium swimming experience for members.',
    image: '/club72/swimming.jpg',
    icon: Waves,
  },
  {
    title: 'Kids Active Zone',
    description: 'Fitness and activity space for kids.',
    image: '/club72/kids-zone.jpg',
    icon: Baby,
  },
]

export default function MenuPreview() {
  return (
    <section id="services" className="mx-auto w-full max-w-md py-6">
      <div className="mb-5">
        <div className="section-title-accent mb-2">
          <h2 className="text-left text-2xl font-bold tracking-tight text-white sm:text-3xl">Facilities</h2>
        </div>
        <p className="text-left text-sm font-medium text-[#CFCFCF] sm:text-base">Everything you need under one roof</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {facilities.slice(0, 4).map((facility, index) => {
          const Icon = facility.icon
          return (
            <motion.article
              key={facility.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: index * 0.04 }}
              className="group relative aspect-square overflow-hidden rounded-[24px] border border-white/10 bg-[#111111] shadow-[0_16px_32px_rgba(0,0,0,0.30)]"
            >
              <Image src={facility.image} alt={facility.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="220px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
              <div className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-white/15 shadow-[0_8px_18px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.30)] backdrop-blur-md">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3.5">
                <h3 className="text-[16px] font-black leading-tight text-white">{facility.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-[12px] font-medium leading-[1.35] text-white/80">
                  {facility.description}
                </p>
                <Link href="/facilities" onClick={() => setReturnSection('services')} className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/28 bg-black/15 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md">
                  View Facility <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          )
        })}
      </div>

      <Link
        href="/facilities"
        onClick={() => setReturnSection('services')}
        className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#C92720] to-[#9F1111] text-sm font-black text-white shadow-[0_10px_24px_rgba(159,17,17,0.26),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all hover:-translate-y-0.5"
      >
        View All Facilities <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}
