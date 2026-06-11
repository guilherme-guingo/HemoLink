import styled from "styled-components";
import { theme } from "../../styles/theme";


//=== Estilo da secao
export const AdmContainer = styled.div`
    margin-bottom: 2rem;
    @media (min-width: 460px){
    //padding-inline: 6rem;
    }
`

export const AdmHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  background: #eaf0f6;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;   
    color: ${theme.colors.textTitle};
    font-size:1.5rem;
    @media (min-width:768px){
      font-size:2rem;
    }
`
export const AdmHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 8%;
  gap: 1rem;
  align-items: center;

  @media (max-width: 480px) {
    padding: 0.5rem 4%;
  }
`

export const AdmTitle = styled.h2`
    text-transform:uppercase;    
    padding: 3.5rem 0;
`


//==== CORPO

export const BodyContainer = styled.div`
    display: flex;
    flex-Direction: column;
    gap: 2rem;
    align-Items: center;
  padding:0 5%;

`

//====Filter

export const AdmFilterBar = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  color: ${({ $percentage }) => {
    const value = Number($percentage);
    if (value > 30) {
      return `${theme.colors.textTitle}`;
    }

    return `${theme.colors.status.danger}`;
  }};
  //BOld[]
  font-weight: ${({ $percentage }) => {
    const value = Number($percentage);
    if (value > 30) {
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

export const AdmCardInfo = styled.div`
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
    if ($percentage >= 70) return `${theme.colors.status.neutral}`;
    if ($percentage > 30) return `${theme.colors.status.warning}`;
    return `${theme.colors.status.danger}`;
  }};

  transition: width 0.4s ease;

`;

export const BloodPerc = styled.div`
  color: ${({ $percentage }) => {
    if ($percentage >= 70) return `${theme.colors.status.neutral}`;
    if ($percentage > 30) return `${theme.colors.status.warning}`;
    return `${theme.colors.status.danger}`;
  }};
`

///============ 

export const PaginationContainer = styled.div`
  display:flex;
  justify-Content:center;
  align-Items:center;
   gap:1rem;
`

export const PaginatedPage = styled.button`
  background: none;
  border: 1px solid gray;
  padding: 0.5rem;
  border-radius: 999px;
  color: gray;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.secondary};
    color: white;
  }
`;