import { render, screen } from '@testing-library/react'

import { SomeForm } from './some-form'

test('SomeForm renders.', () => {
  render(<SomeForm />)

  expect(screen.getByRole('form')).not.toBeNull()
})
