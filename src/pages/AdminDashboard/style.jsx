import styled from "styled-components";
import { theme } from "../../styles/theme";


//=== Estilo da secao
export const AdmContainer = styled.div`
    padding-inline: 6rem;
`

export const AdmHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;   
`

export const AdmTitle = styled.h2`
    text-transform:uppercase;
    font-size:1.5rem;
    padding: 2rem 0;
`


//==== Estilo tabela
export const Table = styled.table`
    width: 100%;
    text-align: left;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
              0 4px 6px -4px rgba(0, 0, 0, 0.1);
    border-radius: ${theme.borderRadius.sm};
    overflow: hidden;
    border-collapse: collapse;
    margin-bottom: 2rem;
`
export const Tr = styled.tr`
    background-color: ${theme.colors.secondary};
`
export const Th = styled.th`
    color: ${theme.colors.textInverseTitle};
    padding: 0.75rem 1rem;
`

export const TrBody = styled.tr`
     border-bottom: 2px solid color-mix(in srgb, black 5%, transparent);
     transition: 0.2s ease-in-out;
     cursor: pointer;
     &:hover{
        background-color: color-mix(in srgb,black 5%,transparent);
     }
`

export const Td = styled.td`
    padding: 0.75rem 1rem;
`
export const TdBlood = styled.td`
  padding: 0.75rem 1rem;
  
  //COR
  color: ${({ $percentage}) => {
    const value = Number($percentage); 
    if (value >= 30) {
      return '#000000'; 
    }
    
    return `${theme.colors.status.danger}`;
  }};
  //BOld[]
  font-weight: ${({$percentage}) => {
    const value = Number($percentage);
    if(value > 30){
        return 400
    }
    return 700
  }}
`

export const TdWrapperIcon = styled.td`
    display: flex;
    gap: 0.4rem;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
`


///==========CARDS

export const AdmCardContainer = styled.div`
    display:flex;
    gap:2rem;
    flex-Wrap:wrap;
     justify-content: center;
`

export const AdmCard = styled.div`
  width: 18rem;
  height: 22rem;
  border-radius: 16px;
  border: 0.5rem solid white;
  
  box-shadow:
    0 1px 3px rgba(0,0,0,.05),
    0 4px 12px rgba(0,0,0,.04);
  overflow: hidden;
  cursor: pointer;
  background-color: #e2e8f0;
  transition: .2s;
  &:hover{
    transform: translateY(-3px);
    box-shadow:
      0 8px 20px rgba(0,0,0,.08),
      0 4px 8px rgba(0,0,0,.04);
  }
`;

export const AdmCardInfo = styled.p`
    padding:  0.5rem 01rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
`

export const CardTitle = styled.h3`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-Content:center;
`

export const BloodBarContainer = styled.div`
  width: 100%;
  height: 0.7rem;
  background:  #ecf0ff;
  border-radius: 999px;
  overflow: hidden;

`;

export const BloodBarFill = styled.div`
  height: 100%;
  width: ${({ $percentage }) => `${$percentage}%`};
  background: ${({ $percentage }) => {
        if ($percentage >= 70) return "#466585";
        if ($percentage >= 40) return `${theme.colors.status.warning}`;
        return `${theme.colors.status.danger}`;
    }};

  transition: width 0.4s ease;

`;