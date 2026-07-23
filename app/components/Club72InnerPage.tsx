'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react'
import { shopConfig } from '../shops/dogra-associates/config'
import { getWhatsAppLink } from '../lib/phone'

export type Club72Item = { title: string; description: string; image: string; meta?: string }

export default function Club72InnerPage({
  eyebrow,
  title,
  subtitle,
  items,
}: {
  eyebrow: string
  title: string
  subtitle: string
  items: Club72Item[]
}) {
  const pathname = usePathname()
  const whatsapp = getWhatsAppLink(shopConfig.contact.clientPhoneE164, `Hi Club72 Gym, I want to enquire about ${title}.`)
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/membership', label: 'Membership' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/trainers', label: 'Trainers' },
  ]
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF5F4] via-white to-[#FAFAFA] px-4 pb-12 text-[#111111]">
      <header className="sticky top-0 z-30 -mx-4 border-b border-[#EAEAEA] bg-white/90 px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAEAEA] bg-white text-[#B91C1C] shadow-[0_7px_16px_rgba(21,21,21,0.08)]"><ArrowLeft className="h-4 w-4" /></Link>
          <span className="flex h-9 w-32 items-center justify-center overflow-hidden rounded-xl bg-black">
            <Image src="/club72/club72-logo-profile.png" alt="Club72 Gym" width={128} height={40} className="h-full w-full object-contain" />
          </span>
          <a href={`tel:+${shopConfig.contact.clientPhoneE164}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E1261C] shadow-[0_8px_18px_rgba(225,38,28,0.3)]"><Phone className="h-4 w-4" /></a>
        </div>
      </header>
      <section className="mx-auto max-w-md pt-9">
        <nav className="mb-7 overflow-x-auto rounded-[22px] border border-[#EAEAEA] bg-white p-2 shadow-[0_12px_28px_rgba(21,21,21,0.09)] [scrollbar-width:none]">
          <div className="flex min-w-max items-center gap-1.5">
            {navItems.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex h-10 items-center justify-center rounded-2xl px-4 text-xs font-black transition-all ${
                    active
                      ? 'bg-gradient-to-br from-[#E1261C] to-[#B91C1C] text-white shadow-[0_7px_16px_rgba(225,38,28,0.22)]'
                      : 'bg-[#FAFAFA] text-neutral-600 hover:bg-[#FFF5F4] hover:text-[#B91C1C]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#E1261C]">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight">{title}</h1>
        <p className="mt-3 text-sm font-medium leading-6 text-neutral-600">{subtitle}</p>
        <div className="mt-7 space-y-4">
          {items.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[26px] border border-[#F0D8D5] bg-white p-3 shadow-[0_18px_36px_rgba(21,21,21,0.10),inset_0_1px_0_rgba(255,255,255,0.96)]">
              <div className="relative h-44 overflow-hidden rounded-[20px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="448px" />
                {item.meta && <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-black/60 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-md">{item.meta}</span>}
              </div>
              <div className="px-2 pb-2 pt-4">
                <h2 className="text-xl font-black text-[#111111]">{item.title}</h2>
                <p className="mt-2 text-sm font-medium leading-6 text-neutral-600">{item.description}</p>
                <Link href={whatsapp} target="_blank" className="mt-4 inline-flex h-10 items-center gap-2 rounded-xl border border-[#F0D8D5] bg-[#FFF6F5] px-4 text-xs font-black text-[#B91C1C]">Enquire Now <ArrowRight className="h-4 w-4 text-[#E1261C]" /></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3">
          <a href={`tel:+${shopConfig.contact.clientPhoneE164}`} className="flex h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#B91C1C] to-[#E1261C] text-sm font-black shadow-[0_10px_24px_rgba(225,38,28,0.32)]">Call Now</a>
          <Link href={whatsapp} target="_blank" className="flex h-12 items-center justify-center rounded-full bg-[#25D366] text-sm font-black text-white shadow-[0_10px_24px_rgba(37,211,102,0.25)]">WhatsApp</Link>
        </div>
      </section>
    </main>
  )
}
