'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { shopConfig } from '../config'

type Review = { author_name: string; rating: number; text: string; relative_time_description: string; time: number }
type ReviewsData = { rating: number; totalReviews: number; reviews: Review[]; googleUrl?: string }

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsData | null>(null)
  const [loading, setLoading] = useState(Boolean(shopConfig.google.placeId))

  useEffect(() => {
    if (!shopConfig.google.placeId) return
    fetch(`/api/google-reviews?placeId=${encodeURIComponent(shopConfig.google.placeId)}`)
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((result) => setData(result))
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [])

  const reviews = data?.reviews?.slice(0, 2) ?? []
  return (
    <section id="reviews" className="mx-auto w-full max-w-md py-7">
      <div className="mb-5">
        <div className="section-title-accent mb-2"><h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Google Reviews</h2></div>
        <p className="text-sm font-medium text-[#CFCFCF] sm:text-base">Real feedback from the Club72 community</p>
      </div>

      {loading ? (
        <div className="h-40 animate-pulse rounded-[26px] border border-[#EAEAEA] bg-white" />
      ) : (
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[28px] border border-[#EAEAEA] bg-white p-5 shadow-[0_16px_36px_rgba(21,21,21,0.12),inset_0_1px_0_rgba(255,255,255,0.96)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-1">{[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="mt-2 text-sm font-black text-[#111111]">{data ? `${data.rating.toFixed(1)} on Google` : 'Club72 on Google'}</p>
              <p className="mt-1 text-xs font-medium text-neutral-500">{data ? `${data.totalReviews.toLocaleString()} member reviews` : 'View verified member experiences'}</p>
            </div>
            <span className="rounded-full border border-[#EAEAEA] bg-[#FFF5F4] px-3 py-1.5 text-[10px] font-black text-[#B91C1C]">GOOGLE</span>
          </div>

          {reviews.length > 0 && <div className="mt-5 space-y-3">
            {reviews.map((review) => (
              <article key={review.time} className="rounded-2xl border border-[#EAEAEA] bg-[#FAFAFA] p-4">
                <div className="flex items-center justify-between gap-2"><p className="text-xs font-black text-[#111111]">{review.author_name}</p><p className="text-[10px] text-neutral-500">{review.relative_time_description}</p></div>
                <p className="mt-2 line-clamp-3 text-xs font-medium leading-5 text-neutral-600">{review.text}</p>
              </article>
            ))}
          </div>}

          <div className="mt-5 grid grid-cols-2 gap-2">
            <Link href={data?.googleUrl || shopConfig.google.reviewsUrl} target="_blank" rel="noopener noreferrer" className="flex h-11 items-center justify-center gap-1 rounded-2xl border border-[#EAEAEA] bg-white text-xs font-black text-[#111111] shadow-[0_7px_16px_rgba(21,21,21,0.08)]">View Reviews <ArrowRight className="h-3.5 w-3.5 text-[#E1261C]" /></Link>
            <Link href="/reviews" className="flex h-11 items-center justify-center gap-1 rounded-2xl bg-gradient-to-br from-[#C92720] to-[#9F1111] text-xs font-black text-white shadow-[0_8px_18px_rgba(159,17,17,0.22)]">Write Review <Star className="h-3.5 w-3.5" /></Link>
          </div>
        </motion.div>
      )}
    </section>
  )
}
