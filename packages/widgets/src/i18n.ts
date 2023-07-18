import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

const i18n = createInstance()

i18n
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    fallbackLng: 'ko',
    supportedLngs: ['ko', 'en'],

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
