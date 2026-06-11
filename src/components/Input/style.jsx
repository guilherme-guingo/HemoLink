import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textTitle || '#1e293b'};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const baseInputStyles = css`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.$hasError ? props.theme.colors.error || '#dc3545' : props.theme.colors.secondary || '#94a3b8')};
  background-color: ${(props) => props.theme.colors.surface || '#ffffff'};
  color: ${(props) => props.theme.colors.textBase || '#334155'};
  font-size: 16px;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$hasError ? props.theme.colors.error || '#dc3545' : props.theme.colors.secondary || '#94a3b8')};
    box-shadow: 0 0 0 2px ${(props) => (props.$hasError ? 'rgba(220, 53, 69, 0.2)' : 'rgba(148, 163, 184, 0.2)')};
  }

  &:disabled {
    background-color: #f1f5f9;
    color: #94a3b8;
    cursor: not-allowed;
  }
`;

export const StyledInput = styled.input`
  ${baseInputStyles}
  padding-right: ${(props) => (props.type === 'password' || props.type === 'text' ? '40px' : '16px')};

  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
  
  &::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    position: absolute;
    right: 0;
  }
`;

export const StyledSelect = styled.select`
  ${baseInputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  padding-right: 40px;
  cursor: pointer;
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 12px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #94a3b8;
  padding: 0;

  &:hover {
    color: ${(props) => props.theme.colors.secondary || '#94a3b8'};
  }
`;

export const ErrorMessage = styled.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.error || '#dc3545'};
`;