'use client'

import { fallbackLng } from '@/i18n/settings'
import { useSearchParams } from 'next/navigation'

export default function Html({ children }: { children?: React.ReactNode }) {
  const searchParams = useSearchParams()

  const lang = searchParams.get('lang')

  return (
    <html lang={Array.isArray(lang) ? lang[0] : lang ?? fallbackLng}>
      {children}
    </html>
  )
}
