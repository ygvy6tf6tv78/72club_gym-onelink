'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, CheckCircle2, ChevronDown, Clock, Phone, ScanLine, User } from 'lucide-react'
import { shopConfig } from '../shops/dogra-associates/config'
import { getWhatsAppLink } from '../lib/phone'
import { prepareReturnToHeroCard } from '../lib/homeNavigation'

const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']

function todayDateValue() {
  const date = new Date()
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  return date.toISOString().slice(0, 10)
}

function formatDateForDisplay(value: string) {
  if (!value) return 'Select date'
  const [year, month, day] = value.split('-').map(Number)
  if (!year || !month || !day) return value
  return new Date(year, month - 1, day).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function BookConsultationPage() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get('service') || ''
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(initialService)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const services = useMemo(() => [
    'Gym Membership',
    'Personal Training',
    'Strength Training',
    'Weight Loss',
    'Functional Training',
    'Swimming',
    'Sports & Recreation',
    'Wellness & Recovery',
  ], [])

  const canSubmit = name.trim().length > 1 && service.trim().length > 0 && date && time
  const whatsappPhone = shopConfig.contactPersons[0]?.whatsappE164 || '918350007272'

  const message = `Hi Club72 Gym,

I would like to book a free trial.

Name: ${name.trim()}
Phone: ${phone.trim()}
Fitness Goal: ${service}
Date: ${date}
Time: ${time}

Please confirm my trial slot.`

  return (
    <main
      className="min-h-screen px-3 pt-[max(0.75rem,env(safe-area-inset-top))]"
      style={{
        background: 'linear-gradient(180deg, #FFF5F4 0%, #ffffff 42%, #FAFAFA 100%)',
      }}
    >
      <div className="mx-auto w-full max-w-md pb-6">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-4 overflow-hidden rounded-[28px] border border-white/25 p-3.5 shadow-[0_24px_54px_rgba(185,28,28,0.22),0_8px_18px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.25)]"
          style={{ background: 'linear-gradient(135deg, #B91C1C 0%, #C92720 62%, #861010 100%)' }}
        >
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              onClick={() => prepareReturnToHeroCard()}
              className="z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-[#B91C1C] shadow-[0_10px_22px_rgba(0,0,0,0.18)] ring-1 ring-white/40 backdrop-blur-md transition-transform active:scale-95"
              aria-label="Back to card"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="absolute left-0 right-0 px-12 text-center text-[1.24rem] font-black leading-tight tracking-tight text-white">
              Book Free Trial
            </h1>
            <span className="z-10 h-10 w-10" aria-hidden />
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.35 }}
          className="rounded-[30px] border border-[#E1261C]/15 bg-white p-4 shadow-[0_22px_52px_rgba(185,28,28,0.12),0_8px_18px_rgba(225,38,28,0.05),inset_0_1px_0_rgba(255,255,255,0.98)]"
              style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF8F7 100%)' }}
        >
          <div className="space-y-3">
            <label className="block">
              <span className="mb-1.5 flex items-center gap-2 text-sm font-bold text-[#111111]">
                <User className="h-4 w-4 text-[#E1261C]" />
                Name
              </span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your full name"
                className="h-12 w-full rounded-2xl border border-[#EAEAEA] bg-white px-4 text-[16px] font-semibold text-slate-950 shadow-[0_6px_14px_rgba(185,28,28,0.04),inset_0_1px_2px_rgba(0,0,0,0.03)] outline-none focus:border-[#E1261C] focus:ring-4 focus:ring-[#E1261C]/10"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 flex items-center gap-2 text-sm font-bold text-[#111111]">
                <Phone className="h-4 w-4 text-[#E1261C]" />
                Phone
              </span>
              <div className="relative flex items-center rounded-2xl border-2 border-[#E6E6E6] bg-white shadow-[0_6px_14px_rgba(185,28,28,0.04)] focus-within:border-[#E1261C] focus-within:ring-4 focus-within:ring-[#E1261C]/10">
                <div className="absolute bottom-0 left-0 top-0 z-10 flex w-20 items-center justify-center rounded-l-[14px] border-r-2 border-[#E6E6E6] bg-[#FFF5F4] text-[14px] font-black text-[#B91C1C]">
                  🇮🇳 +91
                </div>
                <input
                  value={phone}
                  onChange={(event) => {
                    const val = event.target.value.replace(/\D/g, '')
                    if (val.length <= 10) setPhone(val)
                  }}
                  placeholder="10-digit mobile number"
                  inputMode="tel"
                  className="h-12 w-full rounded-2xl border-0 bg-transparent pl-24 pr-4 text-[16px] font-semibold text-slate-950 outline-none placeholder:text-neutral-400"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-1.5 flex items-center gap-2 text-sm font-bold text-[#111111]">
                <ScanLine className="h-4 w-4 text-[#E1261C]" />
                Fitness Goal
              </span>
              <div className="relative">
                <select
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  className="h-12 w-full cursor-pointer appearance-none rounded-2xl border border-[#EAEAEA] bg-white px-4 pr-11 text-[16px] font-semibold text-slate-950 shadow-[0_6px_14px_rgba(185,28,28,0.04),inset_0_1px_2px_rgba(0,0,0,0.03)] outline-none focus:border-[#E1261C] focus:ring-4 focus:ring-[#E1261C]/10"
                >
                  <option value="">Select service</option>
                  {services.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                  <option value="General Fitness">General Fitness</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#E1261C]" />
              </div>
            </label>

            <div className="grid grid-cols-2 gap-3 w-full">
              <label className="block w-full">
                <span className="mb-1.5 flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.08em] text-[#111111]">
                  <Calendar className="h-4 w-4 text-[#E1261C]" />
                  Date
                </span>
                <div className="relative w-full">
                  <input
                    type="date"
                    onClick={(e) => {
                      if (typeof e.currentTarget.showPicker === 'function') {
                        try { e.currentTarget.showPicker() } catch (err) {}
                      }
                    }}
                    onFocus={(e) => {
                      if (typeof e.currentTarget.showPicker === 'function') {
                        try { e.currentTarget.showPicker() } catch (err) {}
                      }
                    }}
                    min={todayDateValue()}
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    className="booking-date-input block h-12 w-full cursor-pointer appearance-none rounded-2xl border border-[#EAEAEA] bg-white pl-3 pr-8 text-[16px] font-semibold shadow-[0_6px_14px_rgba(185,28,28,0.04),inset_0_1px_2px_rgba(0,0,0,0.03)] outline-none focus:border-[#E1261C] focus:ring-4 focus:ring-[#E1261C]/10 m-0"
                    style={{
                      lineHeight: 'normal',
                      color: 'transparent',
                      WebkitTextFillColor: 'transparent',
                    }}
                  />
                  <span className="pointer-events-none absolute left-3 right-8 top-1/2 -translate-y-1/2 truncate text-[16px] font-semibold leading-none text-slate-950">
                    {formatDateForDisplay(date)}
                  </span>
                  <Calendar className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E1261C]" />
                </div>
              </label>
              <label className="block w-full">
                <span className="mb-1.5 flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.08em] text-[#111111]">
                  <Clock className="h-4 w-4 text-[#E1261C]" />
                  Time
                </span>
                <div className="relative w-full">
                  <select
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    className="h-12 w-full cursor-pointer appearance-none rounded-2xl border border-[#EAEAEA] bg-white pl-3 pr-8 text-[16px] font-semibold text-slate-950 shadow-[0_6px_14px_rgba(185,28,28,0.04),inset_0_1px_2px_rgba(0,0,0,0.03)] outline-none focus:border-[#E1261C] focus:ring-4 focus:ring-[#E1261C]/10"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E1261C]" />
                </div>
              </label>
            </div>

          </div>

          <a
            href={canSubmit ? getWhatsAppLink(whatsappPhone, message) : undefined}
            target={canSubmit ? '_blank' : undefined}
            rel="noreferrer"
            aria-disabled={!canSubmit}
            className="mt-5 flex h-12 items-center justify-center gap-2 rounded-2xl text-sm font-black text-white shadow-[0_14px_30px_rgba(225,38,28,0.28)]"
            style={{
              background: canSubmit
                ? 'linear-gradient(135deg, #C92720 0%, #861010 100%)'
                : 'linear-gradient(135deg, #94A3B8 0%, #CBD5E1 100%)',
              pointerEvents: canSubmit ? 'auto' : 'none',
            }}
          >
            <Calendar className="h-4 w-4" />
            Book Free Trial
          </a>
        </motion.section>

        <div className="mt-4 rounded-[24px] border border-[#E5C5C2] bg-white p-4 shadow-[0_12px_28px_rgba(21,21,21,0.07)]">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#9F1111]">Included with your trial</p>
          <h2 className="mt-1 text-lg font-black text-[#111111]">More Than Access</h2>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {['Goal Assessment', 'Coach Induction', 'Plan Guidance', 'Member Support'].map((item) => (
              <div key={item} className="flex min-h-12 items-center gap-2 rounded-xl bg-[#FFF7F6] px-3 text-[11px] font-black text-slate-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#9F1111]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
