import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Container, InputWrapper, StyledInput, StyledSelect, StyledTextarea, Label, ErrorMessage, ToggleButton } from './style';

export function Input({ label, error, id, type, children, margin, ...rest }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const isPasswordType = type === 'password';
  const isSelectType = type === 'select';
  const isTextareaType = type === 'textarea';
  const inputType = isPasswordType && isPasswordVisible ? 'text' : type;

  return (
    <Container $margin={margin}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper>
        {isSelectType ? (
          <StyledSelect id={id} $hasError={!!error} {...rest}>
            {children}
          </StyledSelect>
        ) : isTextareaType ? (
          <StyledTextarea id={id} $hasError={!!error} {...rest} />
        ) : (
          <StyledInput id={id} type={inputType} $hasError={!!error} {...rest} />
        )}
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