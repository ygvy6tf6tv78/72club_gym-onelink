'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { setReturnSection } from '../../../lib/homeNavigation'

const images = [
  '/club72/hero.jpg',
  '/club72/fitness.jpg',
  '/club72/swimming.jpg',
  '/club72/training.jpg',
]

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto w-full max-w-md py-7">
      <div className="mb-5">
        <div className="section-title-accent mb-2"><h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Gallery</h2></div>
        <p className="text-sm font-medium text-[#CFCFCF] sm:text-base">Gym Floor • Pool • Training Zones • Club Life</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {images.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="relative aspect-square overflow-hidden rounded-[24px] border border-white/10 shadow-[0_18px_36px_rgba(0,0,0,0.24)]"
          >
            <Image src={src} alt={`Club72 Gym gallery ${index + 1}`} fill className="object-cover" sizes="448px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </motion.div>
        ))}
      </div>
      <Link
        href="/gallery"
        onClick={() => setReturnSection('gallery')}
        className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#C92720] to-[#9F1111] text-sm font-black text-white shadow-[0_14px_28px_rgba(159,17,17,0.24)]"
      >
        <span className="flex items-center -space-x-2" aria-hidden>
          <span className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white bg-white shadow-sm">
            <Image src="/club72/fitness.jpg" alt="" fill className="object-cover" sizes="28px" />
          </span>
          <span className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white bg-white shadow-sm">
            <Image src="/club72/swimming.jpg" alt="" fill className="object-cover" sizes="28px" />
          </span>
        </span>
        View Gallery <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}
