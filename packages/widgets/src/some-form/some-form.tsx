import { Button, Input } from '@company/components'
import { useSearchParams } from 'next/navigation'
import { useId } from 'react'
import { useTranslation } from 'react-i18next'

import i18n from '../i18n'

export function SomeForm() {
  const id = useId()

  const searchParams = useSearchParams()
  const lang = searchParams.get('lang')

  const { t } = useTranslation('some-form', { i18n, lng: lang ?? undefined })

  return (
    <div>
      <h2>{t('some_form')}</h2>
      <form name="some-form">
        <label htmlFor={id}>{t('label')}</label>
        <Input id={id} type="text" />

        <Button type="submit">{t('submit')}</Button>
      </form>
    </div>
  )
}
