import { render, screen } from '@testing-library/react'

import { Input } from './input'

test('Input renders.', () => {
  render(<Input />)

  expect(screen.getByRole('textbox')).not.toBeNull()
})
