'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import InstagramBrandIcon from '../../../components/InstagramBrandIcon'
import { shopConfig } from '../config'

export default function InstagramCTA() {
  return (
    <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto w-full max-w-md py-5">
      <div className="rounded-[29px] bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] p-[1.5px] shadow-[0_16px_34px_rgba(0,0,0,0.18)]">
      <div className="overflow-hidden rounded-[27px] bg-white p-3.5">
        <div className="flex items-center gap-3 rounded-[20px] bg-gradient-to-r from-[#FFF8F4] via-[#FFF5F7] to-[#FFF4FB] p-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#F2D3DE] bg-white shadow-[0_7px_16px_rgba(220,39,67,0.14)]"><InstagramBrandIcon className="h-8 w-8" /></span>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#C13584]">@club72gym</p>
            <h2 className="mt-1 text-lg font-black text-[#111111]">Follow us on Instagram</h2>
            <p className="mt-1 text-[11px] font-semibold text-neutral-500">Training moments, club updates and member stories.</p>
          </div>
        </div>
        <Link href={shopConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-sm font-black text-white shadow-[0_9px_20px_rgba(193,53,132,0.22)]"><InstagramBrandIcon className="h-5 w-5 brightness-0 invert" />Open Instagram<ArrowRight className="h-4 w-4" /></Link>
      </div>
      </div>
    </motion.section>
  )
}
