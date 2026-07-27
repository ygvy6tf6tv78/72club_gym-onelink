'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, Star } from 'lucide-react'

import { shopConfig } from '../config'

interface Review {
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

interface ReviewsData {
  rating: number
  totalReviews: number
  reviews: Review[]
  googleUrl?: string
  unavailable?: boolean
  message?: string
}

function googleWriteReviewUrl(placeId: string) {
  return `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`
}

function ReviewAvatar({ review }: { review: Review }) {
  const [imageFailed, setImageFailed] = useState(false)
  const initial = review.author_name.trim().charAt(0).toUpperCase() || 'G'

  if (review.profile_photo_url && !imageFailed) {
    return (
      <Image
        src={review.profile_photo_url}
        alt={review.author_name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
        unoptimized
        onError={() => setImageFailed(true)}
      />
    )
  }

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF0EF] text-sm font-black text-[#B91C1C]">
      {initial}
    </span>
  )
}

export default function GoogleReviews() {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!shopConfig.google.placeId) {
      setLoading(false)
      setError('Google Place ID is not configured.')
      return
    }

    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 8000)

    fetch(`/api/google-reviews?placeId=${encodeURIComponent(shopConfig.google.placeId)}`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        const result = (await response.json()) as ReviewsData & { error?: string }
        if (!response.ok || result.error) throw new Error('Google reviews could not be loaded.')
        return result
      })
      .then((result) => {
        setError(null)
        setReviewsData(result)
      })
      .catch((requestError: unknown) => {
        if (requestError instanceof Error && requestError.name === 'AbortError') return
        setError('Google reviews are temporarily unavailable.')
      })
      .finally(() => {
        window.clearTimeout(timeout)
        setLoading(false)
      })

    return () => {
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [])

  const writeReviewUrl = googleWriteReviewUrl(shopConfig.google.placeId)

  if (loading) {
    return (
      <section id="reviews" className="mx-auto w-full max-w-md py-7">
        <div className="mb-5">
          <div className="section-title-accent mb-2">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Google Reviews</h2>
          </div>
          <p className="text-sm font-medium text-[#CFCFCF] sm:text-base">Real feedback from the Club72 community</p>
        </div>
        <div className="space-y-3">
          {[1, 2].map((item) => (
            <div key={item} className="h-[120px] animate-pulse rounded-2xl border border-[#EAEAEA] bg-white" />
          ))}
        </div>
      </section>
    )
  }

  if (error || !reviewsData) {
    return (
      <section id="reviews" className="mx-auto w-full max-w-md py-7">
        <div className="mb-5 flex items-center justify-between">
          <div className="section-title-accent">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Google Reviews</h2>
          </div>
          <Link href="/reviews" className="flex items-center gap-1 text-sm font-semibold text-white/90">
            View All <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-2xl border border-[#EAEAEA] bg-white p-6 text-center shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
          <p className="text-sm font-medium text-neutral-600">{error}</p>
          <Link href="/reviews" className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#C92720] px-5 text-sm font-black text-white">
            Open Reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    )
  }

  const displayReviews = reviewsData.reviews.slice(0, 2)

  return (
    <section id="reviews" className="mx-auto w-full max-w-md py-7">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="section-title-accent mb-2">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Google Reviews</h2>
          </div>
          <p className="text-sm font-medium text-[#CFCFCF] sm:text-base">Real feedback from the Club72 community</p>
        </div>
        <Link href="/reviews" className="flex shrink-0 items-center gap-1 text-xs font-bold text-white/90">
          View All <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.3 }}
        className="mb-4 rounded-[24px] border border-[#F1E6C4] bg-white p-5 shadow-[0_14px_30px_rgba(0,0,0,0.18)]"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-6 w-6 ${
                      star <= Math.round(reviewsData.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-black leading-none text-[#111111]">
                {reviewsData.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-sm font-medium leading-6 text-neutral-600">
              Based on {reviewsData.totalReviews.toLocaleString()} reviews on Google
            </p>
          </div>
          <span className="mt-1 shrink-0 rounded-full border border-[#F0D8D5] bg-[#FFF5F4] px-3 py-1.5 text-[10px] font-black text-[#B91C1C]">
            GOOGLE
          </span>
        </div>
      </motion.div>

      {reviewsData.unavailable ? (
        <div className="rounded-2xl border border-[#EAEAEA] bg-white p-5 shadow-[0_8px_20px_rgba(0,0,0,0.10)]">
          <div className="mb-3 flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-black text-[#111111]">
              {reviewsData.rating > 0 ? reviewsData.rating.toFixed(1) : 'Google'}
            </span>
          </div>
          <p className="text-sm leading-6 text-neutral-600">
            {reviewsData.message || 'Google reviews are temporarily unavailable.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {displayReviews.map((review, index) => (
            <motion.article
              key={`${review.author_name}-${review.time}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="rounded-2xl border border-[#EAEAEA] bg-white p-4 shadow-[0_8px_20px_rgba(0,0,0,0.10)]"
            >
              <div className="mb-2 flex items-start gap-3">
                <ReviewAvatar review={review} />
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-black text-[#111111]">{review.author_name}</h3>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-3.5 w-3.5 ${
                            star <= review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-neutral-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500">{review.relative_time_description}</p>
                </div>
              </div>
              <p className="line-clamp-3 text-sm leading-relaxed text-neutral-700">{review.text}</p>
            </motion.article>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="mt-5 grid grid-cols-2 gap-2.5"
      >
        <Link
          href="/reviews"
          className="flex h-12 items-center justify-center gap-1.5 rounded-2xl border border-[#EAEAEA] bg-white px-3 text-xs font-black text-[#111111] shadow-[0_8px_20px_rgba(0,0,0,0.10)]"
        >
          View Reviews <ArrowRight className="h-4 w-4 text-[#E1261C]" />
        </Link>
        <Link
          href={writeReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-br from-[#C92720] to-[#9F1111] px-3 text-xs font-black text-white shadow-[0_10px_22px_rgba(159,17,17,0.24)]"
        >
          Write Review <Star className="h-4 w-4 fill-white text-white" />
        </Link>
      </motion.div>
    </section>
  )
}
