import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  position: relative;
  background: ${(props) => props.theme.colors.background};
`

export const FixedBackButton = styled(BackButton)`
  position: absolute;
  top: 20px;
  left: 20px;
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
  transition: background 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const FooterMessage = styled.p`
  margin-top: 18px;
  text-align: center;
  color: ${(props) => props.theme.colors.textBase};
  font-size: 14px;
`

export const SwitchLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 700;
  margin-left: 6px;
`