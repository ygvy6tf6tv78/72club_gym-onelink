import { PUBLIC_SITE_URL } from '../../lib/public-site-url'

export type ContactPersonLabel = 'Club72'

export interface ContactPerson {
  label: ContactPersonLabel
  phoneE164: string
  phoneDisplay: string
  whatsappE164: string
}

export const shopConfig = {
  name: 'Club72 Gym',
  tagline: "India's Biggest Gym",
  taglineShort: 'Premium fitness, sports and wellness under one roof.',
  serviceTagline: 'Mohali Sector 72 • Fitness • Sports • Wellness',
  snapshotLocationLine: 'Sector 72, Sahibzada Ajit Singh Nagar, Punjab',
  snapshotServicesLine:
    'Fitness • Sports • Swimming • Personal Training • Recovery • Kids Active Zone',
  snapshotHours: 'Mon-Sat 6:00 AM - 11:30 PM • Sun 12:00 PM - 9:00 PM',
  url: PUBLIC_SITE_URL,
  cardType: 'B2C' as const,
  keywordBadges: ['1 Lakh+ Sq. Ft.', '300+ Machines'] as string[],

  contact: {
    phones: ['8350007272'],
    email: '',
    address: 'Plot No. A 33, Phase-8, Industrial Area, Sector 72, Sahibzada Ajit Singh Nagar, Punjab 160071',
    locationLine: 'Mohali Sector 72',
    mapQuery: 'Club72 Gym Sector 72 Mohali Punjab 160071',
    storeHours: 'Mon-Sat 6:00 AM - 11:30 PM',
    storeHoursStatus: 'Gym Hours',
    officePhone: '8350007272',
    clientPhone: '8350007272',
    clientPhoneE164: '918350007272',
    officePhoneE164: '918350007272',
  },

  contactPersons: [
    {
      label: 'Club72' as ContactPersonLabel,
      phoneE164: '918350007272',
      phoneDisplay: '+91 83500 07272',
      whatsappE164: '918350007272',
    },
  ] as ContactPerson[],

  whatsapp: {
    defaultPhone: '8350007272',
    defaultMessage: 'Hi Club72 Gym, I would like to know about membership and book a trial.',
    showSelector: false,
    selectorPersons: ['Club72'] as ContactPersonLabel[],
  },

  social: {
    facebook: '',
    instagram: 'https://www.instagram.com/club72gym/',
    instagramJammu: '',
    twitter: '',
    linkedin: '',
    zomato: '',
  },

  trustBadges: ['1 Lakh+ Sq. Ft.', '300+ Machines', '15+ Training Zones'] as string[],
  brands: [
    { name: 'Fitness & Performance', tagline: '', logo: '' },
    { name: 'Sports & Recreation', tagline: '', logo: '' },
    { name: 'Specialized Training', tagline: '', logo: '' },
    { name: 'Wellness & Recovery', tagline: '', logo: '' },
  ],

  about: {
    title: 'Welcome to Club72 Gym',
    shortDescription:
      'Spread across 1 lakh+ sq. ft. in Mohali, Club72 brings premium fitness, sports, swimming, specialized training and recovery together in one complete destination—so every member can train, move and progress with purpose.',
  },
  menuUrl: '/facilities',

  payment: {
    upiId: 'club72.demo@upi',
    upiId2: '',
    upiName: 'Club72 Gym',
    upiQrImageUrl: '',
    scannerImage: '/club72/club72-logo.png',
    bank: {
      bankName: 'Demo Bank',
      accountNumberMasked: 'XXXX XXXX 7272',
      ifsc: 'DEMO0007272',
      accountHolder: 'CLUB72 GYM',
    },
    showScanner: true,
    showDownloadQR: true,
  },

  google: {
    placeId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || '',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Club72+Gym+Sector+72+Mohali+Punjab+160071',
    reviewsUrl: 'https://www.google.com/search?q=Club72+Gym+Mohali+reviews',
  },

  seo: {
    title: "Club72 Gym | India's Biggest Gym in Mohali",
    description:
      'Club72 Gym in Mohali Sector 72 — 1 lakh+ sq. ft., 300+ machines, 15+ training zones, swimming, sports and complete wellness.',
    keywords:
      'Club72 Gym, gym Mohali, gym Sector 72 Mohali, biggest gym India, personal training Mohali, swimming pool Mohali',
  },

  credits: { designer: 'RepixelX Studio', designerUrl: 'https://repixelx.com' },
  sections: {
    showAbout: true,
    showMenu: false,
    showServices: true,
    showGallery: true,
    showReviews: true,
    showSocialConnect: true,
    showContactCard: true,
    showFooter: true,
  },
  assets: {
    logo: '/club72/club72-logo-profile.png',
    cover: '/club72/hero.jpg',
    gallery: '/club72/',
    qr: '/club72/club72-logo.png',
  },
  catalog: [] as Array<{
    id: string
    title: string
    description: string
    logo: string
    details: string
    images: string[]
  }>,
  brochures: [] as Array<{ href: string; title: string }>,
}

export type ShopConfig = typeof shopConfig
