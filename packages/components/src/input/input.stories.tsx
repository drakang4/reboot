import { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

export default {
  component: Input,
} satisfies Meta<typeof Input>

export const Basic: StoryObj<typeof Input> = {
  args: {
    placeholder: 'Placeholder',
  },
}
