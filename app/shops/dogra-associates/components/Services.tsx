'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BadgeCheck, Dumbbell, HeartPulse, Trophy } from 'lucide-react'

const advantages = [
  {
    title: "India's Biggest Gym",
    description: '1 lakh+ sq. ft. under one roof.',
    image: '/club72/hero.jpg',
    icon: Trophy,
  },
  {
    title: 'World-Class Infrastructure',
    description: 'Premium machines and training zones.',
    image: '/club72/infrastructure.jpg',
    icon: Dumbbell,
  },
  {
    title: 'Expert-Led Coaching',
    description: 'Experienced coaches for every goal.',
    image: '/club72/coaching.jpg',
    icon: BadgeCheck,
  },
  {
    title: 'Complete Wellness',
    description: 'Training, recovery and wellness together.',
    image: '/club72/complete-wellness.jpg',
    icon: HeartPulse,
  },
]

export default function Services() {
  return (
    <section className="mx-auto w-full max-w-md py-7">
      <div className="mb-5">
        <div className="section-title-accent mb-2"><h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Why Club72?</h2></div>
        <p className="text-sm font-medium text-[#CFCFCF] sm:text-base">Scale • Coaching • Performance • Wellness</p>
      </div>

      <div className="w-full space-y-3">
        {advantages.map((advantage, index) => {
          const Icon = advantage.icon
          return (
            <motion.article
              key={advantage.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              className="relative h-[108px] w-full overflow-hidden rounded-[24px] border border-[#DDA9A5] bg-white shadow-[0_12px_26px_rgba(0,0,0,0.14)]"
            >
              <div className="absolute inset-y-0 left-0 w-[54%]">
                <Image src={advantage.image} alt="" fill className="object-cover opacity-70" sizes="250px" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/35 via-white/95 to-white" />
              <div className="relative flex h-[108px] items-center gap-3 p-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] border border-[#E6B3AF] bg-white/92 text-[#A91317] shadow-[0_7px_16px_rgba(159,17,17,0.10)] backdrop-blur-md">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="mb-0.5 text-[8px] font-black uppercase tracking-[0.16em] text-[#9F1111]">Club Advantage</p>
                    <span className="rounded-full border border-[#E8C4C1] bg-white px-2 py-0.5 text-[8px] font-black text-[#9F1111]">0{index + 1}</span>
                  </div>
                  <h3 className="truncate text-base font-black text-[#151515]">{advantage.title}</h3>
                  <p className="mt-1 truncate text-xs font-medium text-slate-600">{advantage.description}</p>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
