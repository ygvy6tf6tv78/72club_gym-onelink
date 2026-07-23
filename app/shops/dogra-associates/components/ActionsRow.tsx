'use client'

import { forwardRef, useImperativeHandle } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  BadgeCheck, CalendarDays, Download, Globe2, LayoutGrid,
  MapPin, Phone, Star,
} from 'lucide-react'
import { shopConfig } from '../config'
import { generateVCard, downloadVCard } from '../../../lib/vcard'
import { getWhatsAppLink } from '../../../lib/phone'
import { playClickSound } from '../../../lib/playClickSound'
import { prepareReturnToHeroCard } from '../../../lib/homeNavigation'
import InstagramBrandIcon from '../../../components/InstagramBrandIcon'

interface ActionsRowProps {
  onOpenPayments?: () => void
  onOpenAppointment?: () => void
  onOpenDoctorProfile?: () => void
}
export interface ActionsRowRef { openWhatsAppSelector: () => void }

function WhatsAppMark() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#25D366" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}

const primary =
  'group relative flex h-11 min-w-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-[#C92720] to-[#9F1111] px-2 text-sm font-bold text-white shadow-[0_8px_20px_rgba(159,17,17,0.26),0_4px_8px_rgba(21,21,21,0.10),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]'
const utility =
  'flex h-11 min-w-0 -translate-y-px items-center justify-center gap-2 rounded-2xl border border-[#EAEAEA] bg-white px-2 text-sm font-bold text-[#111111] shadow-[0_8px_18px_rgba(21,21,21,0.08),0_4px_8px_rgba(21,21,21,0.05),inset_0_1px_0_rgba(255,255,255,0.96)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E1261C]/35 hover:shadow-[0_10px_22px_rgba(225,38,28,0.14),0_6px_12px_rgba(21,21,21,0.08),inset_0_1px_0_rgba(255,255,255,0.98)] active:scale-[0.97]'
const brandUtility =
  'flex h-11 min-w-0 -translate-y-px items-center justify-center gap-2 rounded-2xl border border-[#F0C8C5] bg-white px-2 text-sm font-black text-[#B91C1C] shadow-[0_8px_18px_rgba(185,28,28,0.10),0_4px_8px_rgba(21,21,21,0.05),inset_0_1px_0_rgba(255,255,255,0.98)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E1261C] hover:bg-[#FFF8F7] active:scale-[0.97]'
const warmUtility =
  'flex h-11 min-w-0 -translate-y-px items-center justify-center gap-2 rounded-2xl border border-[#F0E8CC] bg-white px-2 text-sm font-bold text-[#111111] shadow-[0_6px_13px_rgba(234,179,8,0.055),0_3px_6px_rgba(21,21,21,0.05),inset_0_1px_0_rgba(255,255,255,0.96)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(234,179,8,0.09),0_4px_8px_rgba(21,21,21,0.06),inset_0_1px_0_rgba(255,255,255,0.98)] active:scale-[0.97]'

const ActionsRow = forwardRef<ActionsRowRef, ActionsRowProps>(({ onOpenPayments }, ref) => {
  const whatsappUrl = getWhatsAppLink(shopConfig.contact.clientPhoneE164, shopConfig.whatsapp.defaultMessage)
  useImperativeHandle(ref, () => ({ openWhatsAppSelector: () => window.open(whatsappUrl, '_blank', 'noopener,noreferrer') }))

  const saveContact = () => {
    playClickSound()
    downloadVCard(generateVCard({
      name: shopConfig.name,
      organization: shopConfig.name,
      phones: shopConfig.contact.phones,
      email: shopConfig.contact.email,
      address: shopConfig.contact.address,
      website: 'https://www.club72gym.com/',
    }), 'Club72-Gym.vcf')
  }
  const openInner = () => { playClickSound(); prepareReturnToHeroCard() }

  return (
    <div className="w-full space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <a href={`tel:+${shopConfig.contact.clientPhoneE164}`} className={primary}><Phone className="relative z-10 h-4 w-4" /><span className="relative z-10">Call Now</span></a>
        <Link href="/book-consultation" onClick={openInner} className={primary}><CalendarDays className="relative z-10 h-4 w-4" /><span className="relative z-10">Book Trial</span></Link>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <a href={shopConfig.social.instagram} target="_blank" rel="noopener noreferrer" className={utility}><InstagramBrandIcon className="h-4 w-4" />Instagram</a>
        <Link href="/membership" onClick={openInner} className={brandUtility}><BadgeCheck className="h-4 w-4" />Membership</Link>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Link href="/facilities" onClick={openInner} className={brandUtility}><LayoutGrid className="h-4 w-4" />Facilities</Link>
        <a href="https://www.club72gym.com/" target="_blank" rel="noopener noreferrer" className={utility}><Globe2 className="h-4 w-4 text-[#E1261C]" />Website</a>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={utility}><WhatsAppMark />WhatsApp</a>
        <button type="button" onClick={() => { playClickSound(); onOpenPayments?.() }} className="flex h-11 min-w-0 items-center justify-center gap-2 rounded-2xl border border-[#157C82] bg-[radial-gradient(circle_at_30%_30%,#199097_0%,#0F766E_42%,#111315_100%)] px-2 text-sm font-bold text-white shadow-[0_8px_20px_rgba(21,124,130,0.40),0_4px_8px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97]"><Image src="/icons8-bhim-48.png" alt="" width={16} height={16} className="h-4 w-4 object-contain brightness-0 invert" />Payment</button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Link href="/reviews" onClick={openInner} className={warmUtility}><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />Reviews</Link>
        <a href={shopConfig.google.mapsUrl} target="_blank" rel="noopener noreferrer" className={utility}><MapPin className="h-4 w-4 text-[#E1261C]" />Location</a>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" onClick={saveContact} className="relative flex h-11 min-w-0 -translate-y-px items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-[#E1261C] bg-[#FFF9F5] px-2 text-sm font-bold text-[#D12325] shadow-[0_8px_18px_rgba(209,35,37,0.14),0_4px_8px_rgba(21,21,21,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] transition-all hover:-translate-y-0.5 active:scale-[0.97]"><span className="pointer-events-none absolute inset-0 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#E1261C]/10 to-transparent" /><Download className="relative z-10 h-4 w-4" /><span className="relative z-10">Save Contact</span></button>
        <Link href="/gallery" onClick={openInner} className={utility}>
          <span className="flex items-center -space-x-1.5" aria-hidden>
            <span className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-[#E1261C] bg-white shadow-sm"><Image src="/club72/fitness.jpg" alt="" fill className="object-cover" sizes="28px" /></span>
            <span className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-[#E1261C] bg-white shadow-sm"><Image src="/club72/swimming.jpg" alt="" fill className="object-cover" sizes="28px" /></span>
          </span>
          Gallery
        </Link>
      </div>
    </div>
  )
})
ActionsRow.displayName = 'ActionsRow'
export default ActionsRow
