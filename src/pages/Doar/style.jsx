import styled from 'styled-components';

export const Container = styled.main`
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
`;

export const GrupoCampo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textTitle};
  font-size: 14px;
`;

export const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textBase};
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
`;