import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: ${(props) => props.theme.colors.background};
`

export const Form = styled.form`
  width: 100%;
  max-width: 420px;
  padding: 36px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background: ${(props) => props.theme.colors.surface};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
`

export const Title = styled.h1`
  margin: 0 0 28px;
  font-size: 30px;
  color: ${(props) => props.theme.colors.textTitle};
  text-align: center;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.colors.textBase};
`

export const Input = styled.input`
  height: 52px;
  padding: 0 16px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 14px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.textTitle};
  background: ${(props) => props.theme.colors.surfaceSecondary};
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }
`

export const Select = styled.select`
  height: 52px;
  padding: 0 16px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 14px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.textTitle};
  background: ${(props) => props.theme.colors.surfaceSecondary};
`

export const Button = styled.button`
  width: 100%;
  height: 52px;
  margin-top: 8px;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textInverseTitle};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
  }
`

export const ErrorMessage = styled.span`
  display: block;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.status.danger};
  font-size: 14px;
  text-align: center;
`

export const FooterMessage = styled.p`
  margin-top: 18px;
  text-align: center;
  color: ${(props) => props.theme.colors.textBase};
  font-size: 14px;
`;

export const SwitchLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 700;
  margin-left: 6px;
`;

export const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.textBase};
  border-radius: ${(props) => props.theme.borderRadius.md};
  text-decoration: none;
  font-weight: 700;
  transition: background 0.15s ease, transform 0.12s ease;

  &:hover {
    background: ${(props) => props.theme.colors.surfaceSecondary};
    transform: translateY(-1px);
  }
`;
