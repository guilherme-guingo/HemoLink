import styled from "styled-components";

export const ContainerTitulo = styled.div`
  padding: 100px 40px 40px 40px;
  text-align: center;
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
`;

export const ContainerFiltro = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 24px;
  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  gap: 24px;
  align-items: end;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
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
  margin: 80px 80px;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardDiv = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;

  // Pedro: nota: essa propriedade acaba afetando o desenvolvimento dos outros cards. Necessita analisar com base em cada imagem vinda da api para ajustar adequadamente
  min-height: 350px;

  // Pedro: nota: propriedade que recorta qualquer conteúdo que se estenda além da caixa de preenchimento do seu elemento
  overflow: hidden;

  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.md};
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
  width: ${({ porcentagem }) => porcentagem};
  height: 100%;
  background-color: #dc2626;
  border-radius: 999px;
  transition: width 0.3s ease;
`;
