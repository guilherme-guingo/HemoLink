import styled from 'styled-components';

export const Container = styled.main`
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
`;

export const Titulo = styled.h1`
  color: ${({ theme }) => theme.colors.textTitle};
  margin-bottom: 8px;
`;

export const Subtitulo = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 32px;
`;

export const Formulario = styled.form`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 24px;
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

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textBase};
  background-color: ${({ theme }) => theme.colors.background};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
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
`;

export const Botao = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.textMuted};
    cursor: not-allowed;
  }
`;