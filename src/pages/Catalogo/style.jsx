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
