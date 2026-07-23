'use client'

import { motion } from 'framer-motion'
import { shopConfig } from '../config'

export default function About() {
  return (
    <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} className="mx-auto w-full max-w-md py-4">
      <div className="relative isolate overflow-hidden rounded-[30px] border border-white/15 bg-[#C92720] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.20)] sm:p-7">
        <div className="relative">
          <div className="section-title-accent mb-4">
            <h2 className="text-left text-2xl font-bold tracking-tight text-white sm:text-3xl">{shopConfig.about.title}</h2>
          </div>
          <p className="text-[15px] leading-[1.7] text-white/90">{shopConfig.about.shortDescription}</p>
        </div>
      </div>
    </motion.section>
  )
}
