'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, RefreshCw, Star } from 'lucide-react'
import { prepareReturnToHeroCard } from '../lib/homeNavigation'
import { shopConfig } from '../shops/dogra-associates/config'

type GoogleReview = {
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

type GoogleReviewsResponse = {
  rating: number
  totalReviews: number
  reviews: GoogleReview[]
  googleUrl?: string
  error?: string
  message?: string
  unavailable?: boolean
}

function Stars({ rating, size = 'h-5 w-5' }: { rating: number; size?: string }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className={`${size} ${star <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`} />
      ))}
    </div>
  )
}

function ReviewAvatar({ review }: { review: GoogleReview }) {
  const [failed, setFailed] = useState(false)
  if (review.profile_photo_url && !failed) {
    return <Image src={review.profile_photo_url} alt={review.author_name} width={48} height={48} className="h-12 w-12 shrink-0 rounded-full object-cover" unoptimized onError={() => setFailed(true)} />
  }
  return <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E1261C] to-[#B91C1C] text-lg font-black text-white shadow-[0_8px_18px_rgba(185,28,28,0.20)]">{review.author_name.trim().charAt(0).toUpperCase() || 'G'}</span>
}

export default function ReviewsPage() {
  const placeId = shopConfig.google.placeId
  const [data, setData] = useState<GoogleReviewsResponse | null>(null)
  const [loading, setLoading] = useState(Boolean(placeId))
  const [message, setMessage] = useState<string | null>(null)
  const [displayCount, setDisplayCount] = useState(3)

  const googleUrl = useMemo(() => data?.googleUrl || shopConfig.google.reviewsUrl, [data?.googleUrl])
  const writeUrl = placeId
    ? `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`
    : shopConfig.google.reviewsUrl

  const load = useCallback(async () => {
    if (!placeId) {
      setLoading(false)
      setMessage('Google reviews will appear here automatically after the Place ID and API key are connected.')
      return
    }
    setLoading(true)
    setMessage(null)
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 8000)
    try {
      const response = await fetch(`/api/google-reviews?placeId=${encodeURIComponent(placeId)}`, {
        cache: 'no-store',
        signal: controller.signal,
      })
      const json = (await response.json()) as GoogleReviewsResponse
      if (!response.ok || json.error) throw new Error(json.message || json.error || 'Reviews could not be loaded.')
      setData(json)
      if (json.unavailable && json.message) setMessage(json.message)
    } catch (error) {
      setData(null)
      setMessage(error instanceof Error ? error.message : 'Reviews could not be loaded.')
    } finally {
      window.clearTimeout(timeout)
      setLoading(false)
    }
  }, [placeId])

  useEffect(() => { void load() }, [load])

  const visibleReviews = data?.reviews.slice(0, displayCount) ?? []
  const hasMore = (data?.reviews.length ?? 0) > visibleReviews.length

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF7F6] via-white to-[#FAFAFA] pb-12 pt-[max(.4rem,env(safe-area-inset-top))] text-[#111111]">
      <div className="mx-auto w-full max-w-md px-4">
        <header className="sticky top-0 z-20 -mx-4 mb-5 border-b border-[#EAEAEA] bg-white/90 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={prepareReturnToHeroCard} className="flex h-11 w-11 items-center justify-center rounded-full text-[#B91C1C]" aria-label="Back"><ArrowLeft className="h-6 w-6" /></Link>
            <h1 className="text-[1.35rem] font-black tracking-tight">Google Reviews</h1>
            <button type="button" onClick={() => void load()} className="flex h-11 w-11 items-center justify-center rounded-full text-[#B91C1C]" aria-label="Refresh reviews"><RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} /></button>
          </div>
        </header>

        <section className="mb-6 rounded-[26px] border border-[#EAEAEA] bg-white p-5 text-center shadow-[0_14px_30px_rgba(17,17,17,0.08)]">
          <div className="mb-3 flex items-center justify-center gap-3">
            <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
            <h2 className="text-xl font-black">Review Club72</h2>
            <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
          </div>
          <p className="mx-auto max-w-xs text-sm font-medium leading-6 text-neutral-600">Share your experience and help the fitness community discover Club72.</p>
          <Link href={writeUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#E1261C] to-[#B91C1C] text-sm font-black text-white shadow-[0_12px_25px_rgba(225,38,28,0.24)]"><Star className="h-5 w-5 fill-white" />Write a Review<ExternalLink className="h-4 w-4" /></Link>
          <p className="mt-3 text-[11px] font-semibold text-neutral-500">Opens Google to submit your review</p>
        </section>

        {loading ? (
          <div className="space-y-4">{[1, 2].map((item) => <div key={item} className="h-32 animate-pulse rounded-[24px] border border-[#EAEAEA] bg-white" />)}</div>
        ) : (
          <>
            {data && (
              <section className="mb-5 rounded-[24px] border border-[#F1E6C4] bg-white p-5 text-center shadow-[0_12px_26px_rgba(21,21,21,0.07)]">
                <div className="mb-3 flex items-center justify-center gap-3"><Stars rating={data.rating} size="h-6 w-6" /><span className="text-3xl font-black">{data.rating.toFixed(1)}</span></div>
                <p className="text-sm font-semibold text-neutral-600">Based on {data.totalReviews.toLocaleString()} reviews on Google</p>
              </section>
            )}

            {message && (
              <div className="mb-5 rounded-[24px] border border-[#F0D8D5] bg-white p-5 text-center shadow-[0_12px_26px_rgba(21,21,21,0.07)]">
                <p className="text-sm font-semibold leading-6 text-neutral-600">{message}</p>
                <Link href={googleUrl} target="_blank" className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-[#F0D8D5] bg-[#FFF7F6] px-4 text-xs font-black text-[#B91C1C]">View on Google<ExternalLink className="h-4 w-4" /></Link>
              </div>
            )}

            <div className="space-y-4">
              {visibleReviews.map((review) => (
                <motion.article key={`${review.author_name}-${review.time}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[24px] border border-[#F0D8D5] bg-white p-5 shadow-[0_12px_26px_rgba(21,21,21,0.08)]">
                  <div className="mb-4 flex items-start gap-3">
                    <ReviewAvatar review={review} />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-black leading-tight">{review.author_name}</h3>
                      <div className="mt-1.5"><Stars rating={review.rating} size="h-4 w-4" /></div>
                      <p className="mt-1 text-xs font-medium text-neutral-500">{review.relative_time_description}</p>
                    </div>
                  </div>
                  <p className="line-clamp-4 text-sm font-medium leading-7 text-neutral-700">{review.text}</p>
                </motion.article>
              ))}
            </div>

            {hasMore && <button type="button" onClick={() => setDisplayCount((count) => count + 3)} className="mt-5 flex h-12 w-full items-center justify-center rounded-2xl bg-[#111111] text-sm font-black text-white">View More Reviews</button>}
            <Link href={googleUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#E1261C] to-[#B91C1C] text-sm font-black text-white shadow-[0_10px_22px_rgba(225,38,28,0.22)]">View All Reviews on Google<ExternalLink className="h-4 w-4" /></Link>
          </>
        )}
      </div>
    </main>
  )
}
