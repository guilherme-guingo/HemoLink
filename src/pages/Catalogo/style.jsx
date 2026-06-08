import styled from "styled-components";

export const ContainerTitulo = styled.div`
  padding: 100px 40px 100px 40px;
  text-align: center;
  background: #eaf0f6;
`;

export const TituloDiv = styled.div`
  margin-bottom: 20px;
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.colors.textTitle};
  font-size: 3rem;
`;

export const Subtitulo = styled.h2`
  color: ${(props) => props.theme.colors.textBase};
  text-align: center;
  width: 820px;
  margin: 0 auto; //possibilita a centralizacao
  line-height: 1.5;
`;

export const ContainerFiltro = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 0px auto;
  padding: 24px;
  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  gap: 24px;
  align-items: end;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  margin-top: -30px;
`;

export const FiltroDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const BuscaDiv = styled.div`
  width: 40%;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  padding: 14px 16px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.textMuted};
  border: 1px solid ${(props) => props.theme.colors.border};

  &::placeholder {
    color: ${(props) => props.theme.colors.textMuted};
    font-size: 18px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0px 40px 0px;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardDiv = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;

  // Pedro: nota: essa propriedade acaba afetando o desenvolvimento dos outros cards. Necessita analisar com base em cada imagem vinda da api para ajustar adequadamente
  min-height: 400px;

  // Pedro: nota: propriedade que recorta qualquer conteúdo que se estenda além da caixa de preenchimento do seu elemento
  overflow: hidden;

  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.md};
  border: 1px solid #d2dbe4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 20px rgba(0, 0, 0, 0.12),
      0 4px 8px rgba(0, 0, 0, 0.08);
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

export const ConteudoDiv = styled.div`
  width: 100%;
  padding: 16px;
`;

export const Necessidade = styled.span`
  position: absolute;
  font-size: 12px;
  background: ${(props) => props.theme.colors.status.danger};
  color: ${(props) => props.theme.colors.surface};
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;

export const InfoEstoqueDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ProgressoDiv = styled.div`
  width: 100%;
  height: 10px;
  background: #e2e8f0;
  border-radius: ${(props) => props.theme.borderRadius.full};
  overflow: hidden;
`;

export const PorcentagemDiv = styled.div`
  // Nota: essa porcentagem é recebida via props, e ela se adapta conforme ao que é passado pela API
  width: ${({ porcentagem }) => porcentagem}%;
  height: 100%;
  background-color: ${({ porcentagem }) => {
    if (porcentagem < 30) return "#dc2626";
    if (porcentagem < 60) return " #FF8C00";
    return "#466585";
  }};

  border-radius: 999px;
  transition: width 0.3s ease;
`;

export const Situacao = styled.span`
  color: ${({ porcentagem }) => {
    if (porcentagem < 30) return "#dc2626";
    if (porcentagem < 60) return "#FF8C00";
    return "#466585";
  }};
`;

export const ContainerVerMais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const BotaoVerMais = styled.button`
  padding: 13px 25px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 12px;
  color: #c8102e;
  border: 1px solid #c8102e;
  cursor: pointer;
  background: transparent;

  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    background: #c8102e;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 1px 10px #a50d24;
  }
`;

export const ContainerBack = styled.div`
  background: #eaf0f6;
  // background: #ECF5FE;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NaoEncontrouDiv = styled.div`
  background: ${(props) => props.theme.colors.primary};
  width: 80%;
  height: 50%;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubTexto = styled.p`
  margin-top: 5px;
  color: ${(props) => props.theme.colors.textInverseBase};
`;
