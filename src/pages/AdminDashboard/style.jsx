import styled from "styled-components";
import { theme } from "../../styles/theme";


//=== Estilo da secao
export const AdmContainer = styled.div`
    padding-inline: 10rem;
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
     &:hover{
        background-color: color-mix(in srgb,black 5%,transparent);
     }
`

export const Td = styled.td`
    padding: 0.75rem 1rem;
   
`

export const TdWrapperIcon = styled.td`
    display: flex;
    gap: 0.4rem;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
`
