import { styled } from 'styled-components'

const StyledInput = styled.input``

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input({ children, ...props }: InputProps) {
  return <StyledInput {...props}>{children}</StyledInput>
}
