import { styled } from 'styled-components'

const StyledButton = styled.button`
  appearance: none;
  display: inline-flex;
  padding: 20px;
  border: 0;
  background-color: green;
`

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>
}
