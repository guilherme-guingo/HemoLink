import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Inter', sans-serif;
`;

export const VoltarLink = styled.div`
  margin-bottom: 20px;
  
  a {
    color: ${(props) => props.theme.colors?.textSecondary || '#50606F'};
    text-decoration: none;
    font-size: 0.95rem;
    display: inline-flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors?.primary || '#C8102E'};
    }
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors?.surface || '#FFFFFF'};
  border: 1px solid ${(props) => props.theme.colors?.border || '#D2DBE4'};
  border-radius: ${(props) => props.theme.borderRadius?.lg || '12px'};
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 24px;

  h1 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors?.textTitle || '#001E2F'};
    margin: 0 0 8px 0;
  }

  p {
    margin: 0;
    color: ${(props) => props.theme.colors?.textSecondary || '#50606F'};
    font-size: 0.95rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BadgeUrgencia = styled.span`
  background-color: #FFD4D4;
  color: ${(props) => props.theme.colors?.primary || '#C8102E'};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  border: 1px solid #F5B7B7;
  white-space: nowrap;
`;

export const InfoRow = styled.p`
  margin: 12px 0;
  color: ${(props) => props.theme.colors?.textBody || '#1C2E3D'};
  font-size: 1rem;

  strong {
    color: ${(props) => props.theme.colors?.textTitle || '#001E2F'};
    font-weight: 600;
  }
`;

export const ActionButton = styled.button`
  background-color: ${(props) => props.theme.colors?.primary || '#C8102E'};
  color: #FFFFFF;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius?.md || '8px'};
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  margin-top: 32px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: ${(props) => props.theme.colors?.primaryHover || '#A60D24'};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const CarouselSection = styled.section`
  margin-bottom: 24px;
  width: 100%;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
  border-radius: ${(props) => props.theme.borderRadius?.lg || '12px'};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  background-color: #E5E9ED;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
`;

export const CarouselNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: #FFFFFF;
  border: none;
  font-size: 2.5rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.2s;
  border-radius: 50%;
  user-select: none;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &.left { left: 16px; }
  &.right { right: 16px; }
`;

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.$active ? (props.theme.colors?.primary || '#C8102E') : '#D2DBE4'};
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 24px;
  border-top: 1px solid ${(props) => props.theme.colors?.border || '#D2DBE4'};
  padding-top: 24px;
`;

export const InfoBlock = styled.div`
  background: ${(props) => props.theme.colors?.surfaceVariant || '#F8F9FA'};
  padding: 24px;
  border-radius: ${(props) => props.theme.borderRadius?.md || '8px'};
  border: 1px solid ${(props) => props.theme.colors?.border || '#E5E9ED'};

  h3 {
    margin-top: 0;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors?.textTitle || '#001E2F'};
    font-size: 1.1rem;
    border-bottom: 2px solid ${(props) => props.theme.colors?.primary || '#C8102E'};
    padding-bottom: 6px;
    display: inline-block;
  }

  a {
    color: ${(props) => props.theme.colors?.primary || '#C8102E'};
    text-decoration: none;
    font-weight: 500;
    &:hover { text-decoration: underline; }
  }
`;

export const StockGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px; 
  margin-top: 12px;
  width: 100%;

  @media (max-width: 650px) {
    grid-template-columns: repeat(4, 1fr); 
    gap: 8px;
  }
`;

export const StockItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 4px; 
  border-radius: 8px;
  font-weight: 700;
  text-align: center;
  transition: transform 0.2s;
  
  background-color: ${(props) => 
    props.status === 'critico' ? '#FFD4D4' : 
    props.status === 'alerta' ? '#FFEAA7' : '#D4EDDA'};
    
  color: ${(props) => 
    props.status === 'critico' ? '#C8102E' : 
    props.status === 'alerta' ? '#D39E00' : '#155724'};
    
  border: 1px solid ${(props) => 
    props.status === 'critico' ? '#F5B7B7' : 
    props.status === 'alerta' ? '#F3D470' : '#C3E6CB'};

  span {
    font-size: 1.1rem; 
  }

  small {
    font-size: 0.6rem;
    margin-top: 4px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.3px;
  }
`;

export const MapContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 220px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors?.border || '#E5E9ED'};
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.05);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;