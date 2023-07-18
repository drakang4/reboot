import i18n, { FlatNamespace, KeyPrefix } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { useSearchParams } from 'next/navigation'
import {
  FallbackNs,
  UseTranslationOptions,
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next'
import { fallbackLng, supportedLngs } from './settings'

i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    fallbackLng,
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
  })

export function useTranslation<Ns>(
  ns?: FlatNamespace,
  options?: UseTranslationOptions<KeyPrefix<FallbackNs<Ns>>>,
) {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') ?? undefined

  const ret = useTranslationOrg(ns, {
    lng: lang,
    ...options,
  })

  return ret
}

export default i18n
