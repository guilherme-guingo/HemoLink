import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`;

export const ColorCard = styled.div`
  height: 120px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  padding: 12px;
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => (props.$darkText ? props.theme.colors.textTitle : props.theme.colors.textInverseTitle)};
  background-color: ${(props) => {
    if (props.$status) return props.theme.colors.status[props.$status];
    return props.theme.colors[props.$bg];
  }};
`;

export const gotaSangue = styled.div`
  height: 120px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  padding: 12px;
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => (props.$darkText ? props.theme.colors.textTitle : props.theme.colors.textInverseTitle)};
  background-color: ${(props) => {
    if (props.$status) return props.theme.colors.status[props.$status];
    return props.theme.colors[props.$bg];
  }};
`;

export const TypographyBox = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  padding: 24px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1, h2 {
    color: ${(props) => props.theme.colors.textTitle};
  }

  p {
    color: ${(props) => props.theme.colors.textBase};
  }

  span {
    color: ${(props) => props.theme.colors.textMuted};
    font-size: 14px;
  }
`;

export const InverseTypographyBox = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 24px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1, h2 {
    color: ${(props) => props.theme.colors.textInverseTitle};
  }

  p {
    color: ${(props) => props.theme.colors.textInverseBase};
  }

  span {
    color: ${(props) => props.theme.colors.textInverseMuted};
    font-size: 14px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  transition: background-color 0.2s;

  background-color: ${(props) =>
    props.$variant === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textInverseTitle};

  &:hover {
    background-color: ${(props) =>
      props.$variant === 'primary'
        ? props.theme.colors.primaryHover || '#A50D24'
        : '#122540'};
  }
`;