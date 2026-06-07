import { useEffect, useState } from "react";
//falta o import do getHospitais e do CardHospitais
import {
  ContainerTitulo,
  Titulo,
  Subtitulo,
  TituloDiv,
  ContainerFiltro,
  FiltroDiv,
  BuscaDiv,
  Input,
  ContainerCard,
  CardDiv,
  ImagemDiv,
  ImagemHospital,
  ConteudoDiv,
  Necessidade,
  InfoEstoqueDiv,
  ProgressoDiv,
  PorcentagemDiv,
} from "./style";
import { DadosVindoDaApi } from "./data";

export const Catalogo = () => {
  const [Hospitais, setHospitais] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function carregarInformaçoes() {
    setIsLoading(true);

    const response = await GetHospitais();

    if (response.status !== 200) {
      console.log("Erro ao carregar as informações vinda da API");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setAlunos(response.data);
      setIsLoading(false);
    }, 5000);

    useEffect(() => {
      carregarInformacoes();
    }, []);
  }

  return (
    <main>
      {/* {!isLoading && alunos.length === 0 && (
        <>
          <h1>Sem alunos para exibir no momento!</h1>
        </>
      )}

      {isLoading && (
        <>
          <span>Carregando...</span>
        </>
      )} */}

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

      {/* NOTA: Simulacao de dados vindo da API */}
      <ContainerCard>
        {DadosVindoDaApi.map((dados) => (
          <CardDiv key={dados.id}>
            <ImagemDiv>
              {dados.imagem && (
                <ImagemHospital
                  src={dados.imagem}
                  alt="Imagem de um Hospital"
                />
              )}
              <Necessidade>Necessita: {dados.sangueNecessario}</Necessidade>
            </ImagemDiv>

            <ConteudoDiv>
              <h3 style={{ marginBottom: 10 }}>{dados.nome}</h3>
              <p style={{ marginBottom: 15 }}>📍 ​{dados.endereco}</p>
              {/* Pedro: deixar o campo endereço no ver mais */}
              {/* <p>Contato: {dados.telefone}</p> */}

              <InfoEstoqueDiv>
                <span style={{ fontSize: 12 }}>Estoque Geral</span>
                <span style={{ fontSize: 12 }}>
                  Situação: ({dados.porcentagemBanco})
                </span>
              </InfoEstoqueDiv>

              <ProgressoDiv>
                <PorcentagemDiv porcentagem={dados.porcentagemBanco} />
              </ProgressoDiv>
            </ConteudoDiv>

            <div>
              <button>Teste</button>
            </div>
          </CardDiv>
        ))}
      </ContainerCard>
    </main>
  );
};
