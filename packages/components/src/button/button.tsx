import { styled } from 'styled-components'

const StyledButton = styled.button``

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>
}
