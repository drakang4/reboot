import { render, screen } from '@testing-library/react'
import { Button } from './button'

test('Button', () => {
  render(<Button />)

  expect(screen.getByRole('button')).not.toBeNull()
})
