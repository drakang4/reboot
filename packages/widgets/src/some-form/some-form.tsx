import { Button, Input } from '../../../components/src'

import {} from 'next'

export type SomeFormProps = {}

export function SomeForm({}: SomeFormProps) {
  return (
    <div>
      <form>
        <label>
          input
          <Input type="text" />
        </label>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
