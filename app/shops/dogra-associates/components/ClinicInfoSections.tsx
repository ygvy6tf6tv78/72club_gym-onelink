'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import { getWhatsAppLink } from '../../../lib/phone'
import { shopConfig } from '../config'

const trainers = [
  { role: 'Strength', image: '/club72/coaching.jpg' },
  { role: 'Performance', image: '/club72/training.jpg' },
  { role: 'Wellness', image: '/club72/wellness.jpg' },
]

export default function ClinicInfoSections() {
  return (
    <section className="mx-auto w-full max-w-md py-7">
      <div className="mb-5">
        <div className="section-title-accent mb-2"><h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Meet The Trainers</h2></div>
        <p className="text-sm font-medium text-[#CFCFCF] sm:text-base">Expert guidance for better results</p>
      </div>

      <div className="rounded-[28px] border border-[#E5C5C2] bg-white p-3 shadow-[0_16px_34px_rgba(17,17,17,0.10)]">
        <div className="grid grid-cols-3 gap-2.5">
          {trainers.map((trainer, index) => {
            const href = getWhatsAppLink(
              shopConfig.contact.clientPhoneE164,
              `Hi Club72 Gym, I want to enquire about your ${trainer.role}.`
            )
            return (
              <motion.article
                key={trainer.role}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-[0.78] overflow-hidden rounded-[20px] border-2 border-[#C92720] bg-[#111111] shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
              >
                <Image src={trainer.image} alt={`${trainer.role} coaches`} fill quality={95} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="145px" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <span className="absolute right-2 top-2 rounded-full border border-white/30 bg-black/25 px-2 py-1 text-[8px] font-black text-white backdrop-blur-md">0{index + 1}</span>
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#F2A09A]">Club72</p>
                  <h3 className="mt-1 text-xs font-black leading-tight text-white">{trainer.role}</h3>
                </div>
                <Link href={href} target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label={`Enquire about ${trainer.role} coaches`} />
              </motion.article>
            )
          })}
        </div>
      </div>

      <Link href="/trainers" className="mt-4 flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#C92720] to-[#9F1111] text-sm font-black text-white shadow-[0_14px_28px_rgba(159,17,17,0.24)]">
        Explore Trainers <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}
