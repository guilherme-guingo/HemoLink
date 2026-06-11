import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Container, InputWrapper, StyledInput, Label, ErrorMessage, ToggleButton } from './style';

export function Input({ label, error, id, type, ...rest }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const isPasswordType = type === 'password';
  const inputType = isPasswordType && isPasswordVisible ? 'text' : type;

  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper>
        <StyledInput id={id} type={inputType} $hasError={!!error} {...rest} />
        {isPasswordType && (
          <ToggleButton
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            tabIndex="-1"
          >
            {isPasswordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </ToggleButton>
        )}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}