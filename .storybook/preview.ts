import { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass',
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  loaders: [mswLoader],
}

export default preview
