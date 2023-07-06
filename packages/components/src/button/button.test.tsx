import { render, screen } from '@testing-library/react'

import { Button } from './button'

test('Button renders.', () => {
  render(<Button />)

  expect(screen.getByRole('button')).not.toBeNull()
})
