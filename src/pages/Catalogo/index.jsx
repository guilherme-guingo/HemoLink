import {
  ContainerTitulo,
  Titulo,
  Subtitulo,
  TituloDiv,
  ContainerFiltro,
  FiltroDiv,
  BuscaDiv,
  Input,
} from "./style";

export const Catalogo = () => {
  return (
    <main>
      <ContainerTitulo>
        <TituloDiv>
          <Titulo>Hospitais Parceiros</Titulo>
        </TituloDiv>
        <Subtitulo>
          Sua doação pode ser o fôlego de vida que alguém espera hoje. Encontre
          a unidade de saúde mais próxima e agende sua contribuição para a nossa
          rede de solidariedade.
        </Subtitulo>
      </ContainerTitulo>
      <ContainerFiltro>
        <FiltroDiv>
          <BuscaDiv>
            <p style={{ fontWeight: 600 }}>Cidade</p>
            <Input type="text" placeholder="Todas as cidades" />
          </BuscaDiv>
          <BuscaDiv>
            <p style={{ fontWeight: 600 }}>Tipo sanguíneo necessário</p>
            <Input type="text" placeholder="Todas os tipos" />
          </BuscaDiv>
          <div>
            <button>teste</button>
          </div>
        </FiltroDiv>
      </ContainerFiltro>
    </main>
  );
};
