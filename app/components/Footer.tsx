'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '../data/site'
import { playClickSound } from '../lib/playClickSound'

const ONELINK_URL = 'https://www.onelink.cards/'

export default function Footer() {
  return (
    <footer className="w-full max-w-md mx-auto py-8">
      <div className="text-center space-y-4">
        <p className="text-sm text-[#CFCFCF] font-medium">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        <div className="space-y-3 pt-2 border-t border-[#2A2A2A]">
          <div className="flex flex-col items-center gap-2">
            <Link
              href={ONELINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound()}
              aria-label="Visit OneLink"
              className="text-sm text-white font-semibold flex items-center justify-center gap-1.5 transition-opacity hover:opacity-90"
            >
              <span>OneLink</span>
              <Image
                src="/gallery/onelinklogo.png"
                alt="OneLink Logo"
                width={40}
                height={20}
                className="opacity-100 object-contain"
                quality={100}
                priority
              />
              <span>— your business, one link away.</span>
            </Link>
            <Link
              href="https://repixelx.com/about"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound()}
              className="text-xs transition-colors inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                background: '#111111',
                color: '#CFCFCF',
                border: '1px solid #2A2A2A',
              }}
            >
              Powered by RepixelX Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
