import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: ${(props) => props.$width || 'fit-content'};
  min-height: 44px;
  padding: 14px 26px;
  border-radius: ${(props) => props.$radius || props.theme.borderRadius.lg};
  background: ${(props) => props.$bg || props.theme.colors.primary};
  color: ${(props) => props.$color || props.theme.colors.surface};
  border: ${(props) => props.$border || 'none'};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  white-space: nowrap;

  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Button = styled.button`
  ${buttonStyles}
`;

export const LinkButton = styled(Link)`
  ${buttonStyles}
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;