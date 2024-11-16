import { InputContainer } from "./Input.styles"

export function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange}/>
    </InputContainer>
  )
}
