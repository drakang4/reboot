import type { Meta, StoryObj } from '@storybook/react'

import { SomeForm } from './some-form'

export default {
  component: SomeForm,
} satisfies Meta<typeof SomeForm>

export const Basic: StoryObj<typeof SomeForm> = {
  args: {},
}
