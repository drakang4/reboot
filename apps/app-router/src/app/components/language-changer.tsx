'use client'

import { useTranslation } from '@/i18n/client'
import { useRouter } from 'next/navigation'

export const LanguageChanger = () => {
  const { t, i18n } = useTranslation()
  const router = useRouter()

  return (
    <footer>
      <button
        onClick={() => {
          console.log('ko')
          i18n.changeLanguage('ko')
          router.push('/')
        }}
      >
        {t('change_lng')} ko
      </button>
      <button
        onClick={() => {
          console.log('en')
          i18n.changeLanguage('en')
          router.push('/?lang=en')
        }}
      >
        {t('change_lng')} en
      </button>
    </footer>
  )
}
