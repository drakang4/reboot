import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

export default {
  component: Button,
} satisfies Meta<typeof Button>

export const Basic: StoryObj<typeof Button> = {
  args: {
    children: 'Basic Button',
  },
}
