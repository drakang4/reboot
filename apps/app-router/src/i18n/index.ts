import { InitOptions, createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { fallbackLng } from './settings'

export const createI18n = async (options: InitOptions) => {
  const i18n = createInstance()

  await i18n
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init({
      interpolation: {
        escapeValue: false,
      },
      fallbackLng,
      ...options,
    })

  return i18n
}
