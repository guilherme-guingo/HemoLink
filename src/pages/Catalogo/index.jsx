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
  Situacao,
  ContainerVerMais,
  BotaoVerMais,
  ContainerBack,
  NaoEncontrouDiv,
  SubTexto,
  BotaoBuscar,
  TextoFiltro,
} from "./style";
import { DadosVindoDaApi } from "./data";
import { IoFilter } from "react-icons/io5";

import { useFavoritos } from "../../contexts/FavoritesContext";

export const Catalogo = () => {
  //Funcionalidade loading e carregamento de dados da API
  const [Hospitais, setHospitais] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {favoritar, isFavorito} = useFavoritos();

  //Funcionalidade de ver mais/ver menos dos cards
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(4);
  const todosVisiveis = quantidadeVisivel >= DadosVindoDaApi.length;

  async function carregarInformaçoes() {
    setIsLoading(true);

    const response = await GetHospitais();

    if (response.status !== 200) {
      console.log("Erro ao carregar as informações vinda da API");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setHospitais(response.data);
      setIsLoading(false);
    }, 5000);

    useEffect(() => {
      carregarInformacoes();
    }, []);
  }

  return (
    <main>
      {/* {!isLoading && hospitais.length === 0 && (
        <>
          <h1>Sem hospitais para exibir no momento!</h1>
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
          <BotaoBuscar>
            <IoFilter size={20} color="white" />
            <TextoFiltro>
              Aplicar
              <br />
              Filtros
            </TextoFiltro>
          </BotaoBuscar>
        </FiltroDiv>
      </ContainerFiltro>
      {/* NOTA: Simulacao de dados vindo da API */}
      <ContainerCard>
        {DadosVindoDaApi.slice(0, quantidadeVisivel).map((dados) => (
          <CardDiv key={dados.id}>
            <ImagemDiv>
              {dados.imagem && (
                <ImagemHospital
                  src={dados.imagem}
                  alt="Imagem de um Hospital"
                />
              )}
              <Necessidade porcentagem={dados.porcentagemBanco}>
                {dados.porcentagemBanco <= 30
                  ? `Urgência: ${dados.sangueNecessario}`
                  : `Necessita: ${dados.sangueNecessario}`}
              </Necessidade>
            </ImagemDiv>

            <ConteudoDiv>
              <h3 style={{ marginBottom: 10 }}>{dados.nome}</h3>
              <p style={{ marginBottom: 15 }}>📍 ​{dados.endereco}</p>
              {/* Pedro: deixar o campo endereço no ver mais */}
              {/* <p>Contato: {dados.telefone}</p> */}

              <InfoEstoqueDiv>
                <span style={{ fontSize: 12 }}>Estoque Geral</span>
                <Situacao
                  style={{ fontSize: 12, fontWeight: 600 }}
                  porcentagem={dados.porcentagemBanco}
                >
                  {dados.porcentagemBanco <= 30
                    ? `Critico (${dados.porcentagemBanco}%)`
                    : `${dados.porcentagemBanco}` <= 50
                      ? `Alerta (${dados.porcentagemBanco}%)`
                      : `Regular (${dados.porcentagemBanco}%)`}
                </Situacao>
              </InfoEstoqueDiv>

              <ProgressoDiv>
                <PorcentagemDiv porcentagem={dados.porcentagemBanco} />
              </ProgressoDiv>
            </ConteudoDiv>

            <div>
              <button onClick={() => favoritar(dados)}>
                {isFavorito(dados.id) ? "♥ Favoritado" : "♡ Favoritar"}
              </button>
            </div>
          </CardDiv>
        ))}
      </ContainerCard>
      <ContainerVerMais>
        <BotaoVerMais
          onClick={() => {
            if (todosVisiveis) {
              setQuantidadeVisivel(4);
            } else {
              setQuantidadeVisivel(quantidadeVisivel + 4);
            }
          }}
        >
          {todosVisiveis ? "Ver Menos Unidades" : "Ver Mais Unidades"}
        </BotaoVerMais>
      </ContainerVerMais>
      <ContainerBack>
        <NaoEncontrouDiv>
          <div style={{ marginLeft: 40, color: "#ffffff" }}>
            <h1 style={{ marginBottom: 10, fontSize: "2.3rem" }}>
              Não encontrou o que procurava?
            </h1>
            <SubTexto>
              Nós possuimos parceiros em todo o território nacional.
            </SubTexto>
            <SubTexto>
              Você também pode solicitar uma campanha móvel para sua empresa ou
              condomínio.
            </SubTexto>
          </div>
          <div>
            {/* Nota: provavelmente cabe um componente de botão */}
            <button>Falar Conosco</button>
          </div>
        </NaoEncontrouDiv>
      </ContainerBack>
    </main>
  );
};
