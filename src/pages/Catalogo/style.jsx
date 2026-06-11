import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  canvas,
  svg {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0 auto;
  }
`;

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

  @media (min-width: 1500px) {
    font-size: 4rem;
  }
`;

export const Subtitulo = styled.h2`
  color: ${(props) => props.theme.colors.textBase};
  text-align: center;
  min-width: 200px;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.5;
  font-size: 1.2rem;

  @media (min-width: 1500px) {
    font-size: 1.5rem;
  }
`;

export const ContainerFiltro = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 0px auto;
  padding: 24px;
  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  gap: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  margin-top: -30px;
`;

export const FiltroDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

export const BuscaDiv = styled.div`
  @media (min-width: 1100px) {
    width: 40%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 5px auto 20px auto;
  border-radius: ${(props) => props.theme.borderRadius.md};
  padding: 14px 16px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.textMuted};
  border: 1px solid ${(props) => props.theme.colors.border};

  &::placeholder {
    color: ${(props) => props.theme.colors.textMuted};
    font-size: 18px;
  }

  @media (min-width: 1100px) {
    margin: 10px auto 0px auto;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 100px auto 40px auto;
  max-width: 1500px;
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
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  background: transparent;

  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 1px 10px ${(props) => props.theme.colors.primaryHover};
  }
`;

export const ContainerBack = styled.div`
  background: #eaf0f6;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NaoEncontrouDiv = styled.div`
  background: ${(props) => props.theme.colors.primary};
  width: 90%;
  height: 80%;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 40px;

  @media (min-width: 700px) {
    padding: 30px;
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    width: 80%;
    padding: 0px;
  }
`;

export const NaoEncontouFilhoDiv = styled.div`
  @media (min-width: 1000px) {
    margin-left: 70px;
  }
`;

export const SubTexto = styled.p`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.textInverseBase};
  text-align: center;
  line-height: 1.5;
  font-size: 0.8rem;

  @media (min-width: 450px) {
    margin-top: 5px;
    font-size: 1rem;
  }
  @media (min-width: 700px) {
    margin-top: 5px;
    font-size: 1.2rem;
  }

  @media (min-width: 1000px) {
    text-align: start;
    font-size: 1rem;
  }
`;

export const BotaoBuscar = styled.button`
  padding: 15px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;
  background: #466585;
  outline: none;
  border: none;

  transition: all 0.5s ease;
  &:hover {
    background: #3d5875;
  }

  @media (min-width: 1100px) {
    padding: 10px 20px;
  }
  @media (min-width: 1300px) {
    padding: 15px 30px;
  }
  @media (min-width: 1500px) {
    padding: 15px 40px;
  }
`;

export const TextoFiltro = styled.p`
  margin-top: 0;
  line-height: 1.3;
  font-size: 15px;
  color: ${(props) => props.theme.colors.surface};
`;

export const TituloTexto = styled.h1`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.surface};
  text-align: center;

  @media (min-width: 450px) {
    font-size: 2rem;
  }

  @media (min-width: 700px) {
    font-size: 2.3rem;
  }

  @media (min-width: 1000px) {
    font-size: 2.3rem;
    text-align: start;
  }
`;

export const BotaoFalarConosco = styled.button`
  padding: 13px 30px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.status.danger};
  cursor: pointer;
  background: ${(props) => props.theme.colors.surface};
  transition: all 0.5s ease;
  font-weight: 550;
  border: none;

  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    transform 0.2s ease;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.surface};
  }

  @media (min-width: 1000px) {
    margin-right: 70px;
  }
`;
