import styled from 'styled-components';

export const ActionButton = styled.button`
  margin-top: 32px;
  width: 100%;
  padding: 16px;
  background-color: ${(props) => props.theme.colors?.primary || '#C8102E'};
  color: ${(props) => props.theme.colors?.textInverseTitle || '#FFFFFF'};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius?.md || '8px'};
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors?.primaryHover || '#A50D24'};
  }
`;

export const BadgeUrgencia = styled.span`
  background-color: ${(props) => props.theme.colors?.status?.danger || '#C8102E'};
  color: ${(props) => props.theme.colors?.textInverseBase || '#FFFFFF'};
  padding: 6px 12px;
  border-radius: ${(props) => props.theme.borderRadius?.full || '9999px'};
  font-size: 0.875rem;
  font-weight: bold;
`;

export const Card = styled.section`
    background-color: ${(props) => props.theme.colors?.surface || '#FFFFFF'};
    border: 1px solid ${(props) => props.theme.colors?.border || '#D2DBE4'};
    border-radius: ${(props) => props.theme.borderRadius?.md || '8px'};
    padding: 32px;
    box-shadow: 0 4px 6px rgba (0, 0, 0, 0.05);
`;

export const Container = styled-main`
    max-width:800px;
    margin 40px auto;
    padding: 20px;
    background-color: ${(props) => props.theme.colors?.background || '#F8F9FA'};
    min-height: 80vh;
`;

export const HeaderCard = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors?.border || '#D2DBE4'};
  padding-bottom: 16px;

  h1 {
    color: ${(props) => props.theme.colors?.textTitle || '#001E2F'};
    margin: 0 0 8px 0;
    font-size: 1.5rem;
  }

  p {
    color: ${(props) => props.theme.colors?.textMuted || '#6C757D'};
    margin: 0;
  }
`;

export const InfoRow = styled.div`
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors?.textBase || '#50606F'};

  strong {
    color: ${(props) => props.theme.colors?.textTitle || '#001E2F'};
  }
`;

export const VoltarLink = styled.div`
    margin-bottom: 24px;
    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors?.textMuted || '#6C757D'};
        font-weight: 500;
        transition: color 0.2s;
        
        $:hover {
            color: ${(props.theme.colors?.primary || '#C8102E')};
        }
    }
 `;



