import styled from "styled-components";

export const CardDiv = styled.div`
  position: relative;
  width: 320px;
  display: flex;
  flex-direction: column;
  min-height: 430px;
  overflow: hidden;

  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.md};
  border: 1px solid #E8D8D8;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.02),
    0 4px 16px rgba(36, 75, 126, 0.04);

  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow:
     box-shadow: 
      0 12px 24px rgba(36, 75, 126, 0.08),
      0 4px 8px rgba(0, 0, 0, 0.04);
  }
    //ver sobre, pois precisa tirar o a-herf
    a {
    text-decoration: none;
    color: inherit;
  }
  
`;

export const ImagemDiv = styled.div`
  width: 100%;
  position: relative;
`;

export const ImagemHospital = styled.img`
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
`;

export const Necessidade = styled.span`
  position: absolute;
  font-size: 12px;

  background-color: ${({ porcentagem }) => {
    //Obs: nao estou conseguindo puxar o cor global de danger
    if (porcentagem <= 30) return "#dc2626";
    if (porcentagem <= 50) return " #FF8C00";
    return "#466585";
  }};
  color: ${(props) => props.theme.colors.surface};
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;

export const ConteudoDiv = styled.div`
  width: 100%;
  padding: 16px;
`;

export const InfoEstoqueDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Situacao = styled.span`
  color: ${({ porcentagem }) => {
    if (porcentagem <= 30) return "#dc2626";
    if (porcentagem <= 50) return "#FF8C00";
    return "#466585";
  }};
`;

export const ProgressoDiv = styled.div`
  width: 100%;
  height: 10px;
  background: #e2e8f0;
  border-radius: ${(props) => props.theme.borderRadius.full};
  overflow: hidden;
`;

export const PorcentagemDiv = styled.div`
  width: ${({ porcentagem }) => porcentagem}%;
  height: 100%;
  background-color: ${({ porcentagem }) => {
    if (porcentagem <= 30) return "#dc2626";
    if (porcentagem <= 50) return " #FF8C00";
    return "#466585";
  }};

  border-radius: 999px;
  transition: width 0.3s ease;
`;

export const FavoritarDiv = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;
export const BotaoFavoritar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  color: #666666;

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.surface};
    color: #e53e3e;
    transform: scale(1.08);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
  }
  &.favoritado {
    color: #c5112e;
    background-color: ${(props) => props.theme.colors.surface};
  }
`;

export const BotaoConhecer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 40px;
  background: ${(props) => props.theme.colors.status.danger};
  border: 1px solid #777777;
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;
  font-size: 14px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.surface};

  transition:
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background-color: #a30e25;
    box-shadow: 0 4px 12px rgba(197, 17, 46, 0.25);
  }
`;
