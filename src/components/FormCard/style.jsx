import styled from 'styled-components';

export const Card = styled.form`
  width: 100%;
  max-width: ${(props) => props.$maxWidth || '420px'};
  padding: 36px;
  border-radius: ${(props) => props.theme.borderRadius.lg || '16px'};
  background: ${(props) => props.theme.colors.surface || '#ffffff'};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const Title = styled.h1`
  margin: 0 0 28px;
  font-size: 30px;
  color: ${(props) => props.theme.colors.textTitle || '#1e293b'};
  text-align: center;
`;