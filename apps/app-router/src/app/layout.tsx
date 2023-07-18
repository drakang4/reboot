import I18nextRegistry from '@/lib/i18next-registry'
import StyledComponentsRegistry from '@/lib/styled-registry'
import { type Metadata } from 'next'
import Html from './html'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
    minimumScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
  },
  alternates: {
    languages: {
      en: '?lang=en',
      ko: '?lang=ko',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Html>
      <body>
        <StyledComponentsRegistry>
          <I18nextRegistry>{children}</I18nextRegistry>
        </StyledComponentsRegistry>
      </body>
    </Html>
  )
}
