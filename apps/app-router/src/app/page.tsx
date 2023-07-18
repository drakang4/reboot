import { createI18n } from '@/i18n'
import { SomeForm } from '@company/widgets'
import { type Metadata } from 'next'
import { LanguageChanger } from './components/language-changer'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { t } = await createI18n({
    lng: Array.isArray(searchParams.lang)
      ? searchParams.lang[0]
      : searchParams.lang,
    ns: 'meta',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Home({ searchParams }: Props) {
  const { t } = await createI18n({
    lng: Array.isArray(searchParams.lang)
      ? searchParams.lang[0]
      : searchParams.lang,
  })

  return (
    <main>
      <h1>{t('hello')}</h1>

      <SomeForm />

      <LanguageChanger />
    </main>
  )
}
