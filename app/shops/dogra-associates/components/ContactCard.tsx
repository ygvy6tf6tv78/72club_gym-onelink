'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, MapPin, Phone } from 'lucide-react'
import { getWhatsAppLink } from '../../../lib/phone'
import { shopConfig } from '../config'

function WhatsAppMark({ color = '#25D366' }: { color?: string }) {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill={color} aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}

const card =
  'relative overflow-hidden rounded-[24px] border border-[#F0DDDB] bg-gradient-to-br from-white via-white to-[#FFF4F3] p-4 shadow-[0_10px_26px_rgba(21,21,21,0.08),inset_0_1px_0_rgba(255,255,255,0.96)]'
const icon =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E9A7A2] bg-gradient-to-br from-white to-[#FFD9D6] text-[#B91C1C] shadow-[0_3px_9px_rgba(185,28,28,0.20)]'
const cta =
  'flex h-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#C92720] to-[#9F1111] text-xs font-black text-white shadow-[0_8px_18px_rgba(159,17,17,0.22)]'

export default function ContactCard() {
  const whatsapp = getWhatsAppLink(shopConfig.contact.clientPhoneE164, shopConfig.whatsapp.defaultMessage)

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto w-full max-w-md py-5"
    >
      <div className="rounded-[30px] border border-white/15 bg-gradient-to-br from-[#B91C1C] via-[#D32924] to-[#9F1111] p-3.5 shadow-[0_18px_40px_rgba(185,28,28,0.20)]">
        <div className="relative overflow-hidden rounded-[26px] p-3.5">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div className="section-title-accent mb-5">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Get in Touch</h2>
          </div>

          <div className="space-y-4">
            <div className={card}>
              <div className="relative z-10 flex items-start gap-3">
                <div className={icon}><Phone className="h-5 w-5" /></div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-black text-[#111111]">Phone</h3>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <div><p className="text-sm font-bold text-[#111111]">Club72 Gym</p><p className="text-xs font-medium text-neutral-600">+91 83500 07272</p></div>
                    <a href={`tel:+${shopConfig.contact.clientPhoneE164}`} className="flex h-8 items-center justify-center rounded-full bg-[#C92720] px-4 text-xs font-black text-white shadow-[0_6px_14px_rgba(185,28,28,0.22)]">Call</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={card}>
              <div className="relative z-10 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E9A7A2] bg-gradient-to-br from-white to-[#FFD9D6] shadow-[0_3px_9px_rgba(185,28,28,0.18)]"><WhatsAppMark color="#E1261C" /></div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-black text-[#111111]">Membership Enquiry</h3>
                  <p className="mt-1 text-sm font-medium text-neutral-600">Trials, plans and trainer guidance</p>
                </div>
              </div>
              <Link href={whatsapp} target="_blank" className="mt-4 flex h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#C92720] to-[#9F1111] text-xs font-black text-white shadow-[0_8px_18px_rgba(159,17,17,0.22)]"><WhatsAppMark color="#FFFFFF" />Chat on WhatsApp</Link>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-[#F0DDDB] bg-gradient-to-br from-white via-white to-[#FFF4F3] shadow-[0_10px_26px_rgba(21,21,21,0.08)]">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className={icon}><MapPin className="h-5 w-5" /></div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-black text-[#111111]">Location</h3>
                    <p className="mt-1 text-sm font-medium leading-6 text-neutral-600">{shopConfig.contact.address}</p>
                  </div>
                </div>
                <Link href={shopConfig.google.mapsUrl} target="_blank" className={`${cta} mt-4 gap-2`}><MapPin className="h-4 w-4" />Open in Maps</Link>
              </div>
              <div className="h-48 bg-neutral-100">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(shopConfig.contact.mapQuery)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Club72 Gym location"
                />
              </div>
            </div>

            <div className={card}>
              <div className="relative z-10 flex items-start gap-3">
                <div className={icon}><Clock className="h-5 w-5" /></div>
                <div>
                  <h3 className="text-base font-black text-[#111111]">Gym Hours</h3>
                  <p className="mt-1 text-sm font-medium leading-6 text-neutral-600">Mon–Sat: 6 AM–11:30 PM<br />Sunday: 12 PM–9 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
