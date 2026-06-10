import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 16px;

  h1 {
    font-size: 1.7rem;
    color: #0f172a;
    font-weight: 700;
    margin-bottom: 4px;
  }

  p {
    color: #64748b;
    font-size: 0.85rem;
  }
`;

export const BadgeUrgencia = styled.span`
  background-color: #fff5f5;
  color: #C8102E;
  border: 1px solid #fed7d7;
  padding: 6px 14px;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.8rem;
  white-space: nowrap;
`;

export const InfoBlockBox = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.01);
  
  h3 {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #0f172a;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 4px;
    border-bottom: 2px solid #C8102E;
  }
`;

export const InfoRow = styled.div`
  margin-bottom: 8px;
  color: #334155;
  font-size: 0.95rem;
  line-height: 1.5;

  strong {
    color: #0f172a;
    font-weight: 600;
  }

  a {
    color: #C8102E;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AnnouncementText = styled.p`
  color: #475569;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
`;

export const MapContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 230px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e2e8f0;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export const StockGrid = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 6px; 
  margin-top: 12px;
  width: 100%;
  box-sizing: border-box;
`;

export const StockItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 2px; 
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  flex: 1 1 75px; 

  background: ${props => 
    props.status === 'critico' ? '#fff5f5' : 
    props.status === 'alerta' ? '#fffaf0' : '#f0fff4'};
  border: 1px solid ${props => 
    props.status === 'critico' ? '#fed7d7' : 
    props.status === 'alerta' ? '#feebc8' : '#c6f6d5'};
  color: ${props => 
    props.status === 'critico' ? '#c53030' : 
    props.status === 'alerta' ? '#b7791f' : '#2f855a'};

  span:first-child {
    font-size: 1.05rem;
    font-weight: 700;
  }

  small {
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 700;
    margin: 2px 0;
    white-space: nowrap; 
  }

  span:last-child {
    font-size: 0.7rem;
    font-weight: 500;
    opacity: 0.85;
  }
`;

export const ActionButton = styled.button`
  width: 100%;
  background-color: #C8102E;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  box-shadow: 0 4px 6px rgba(200, 16, 46, 0.12);

  &:hover {
    background-color: #a60d26;
  }

  &:active {
    transform: scale(0.99);
  }
`;