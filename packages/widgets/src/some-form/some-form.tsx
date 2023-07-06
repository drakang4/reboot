import { Button, Input } from '@company/components'
import { useId } from 'react'

export function SomeForm() {
  const id = useId()

  return (
    <div>
      <form name="some-form">
        <label htmlFor={id}>input</label>
        <Input id={id} type="text" />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
