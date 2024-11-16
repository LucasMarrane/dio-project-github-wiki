import { ButtonContainer } from './Button.styles'


export function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
       Buscar
    </ButtonContainer>
  )
}
