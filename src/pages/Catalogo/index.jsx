import { useEffect, useState } from "react";
import {
  ContainerTitulo,
  Titulo,
  Subtitulo,
  TituloDiv,
  ContainerFiltro,
  FiltroDiv,
  BuscaDiv,
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
  ContainerBack,
  NaoEncontrouDiv,
  SubTexto,
  BotaoBuscar,
  TextoFiltro,
  FavoritarDiv,
  BotaoFavoritar,
  BotaoConhecer,
  LoadingContainer,
  NaoEncontouFilhoDiv,
  TituloTexto,
} from "./style";
import { Input } from "../../components/Input";
import { MainButton } from "../../components/MainButton";
import { IoFilter } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa6";

import { useFavoritos } from "../../contexts/FavoritesContext";
import { getHospital } from "../../services/getHospital";

import loadingAnimation from "../../assets/loading.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

//Funcao para retornar os tipos sanguineos mais baixos
export const obterTiposSanguineosCriticos = (bloodStock) => {
  if (!bloodStock || Object.keys(bloodStock).length === 0) return "Nenhum";
  const menoresEstoques = Object.entries(bloodStock)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 2);
  return menoresEstoques.map((item) => item[0]).join(", ");
};

export const Catalogo = () => {
  //Funcionalidade loading e carregamento de dados da API
  const [hospitais, setHospitais] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDados, setIsDados] = useState(false); 

  //Funcionalidade favoritar card
  const { favoritar, isFavorito } = useFavoritos();

  //Funcionalidade de ver mais/ver menos dos cards
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(4);
  const todosVisiveis = quantidadeVisivel >= hospitais.length;

  //Funcionalidade de filtro
  const [enderecoOuInstituicao, setEnderecoOuInstituicao] = useState("");
  const [tipoSanguineo, setTipoSanguineo] = useState("");
  const [resultadoFiltro, setResultadoFiltro] = useState([]);

  async function carregarInformacoes() {
    setIsLoading(true);

    const response = await getHospital(); 
    if (response.status !== 200) {
      //Toast aqui
      console.log("Erro ao carregar as informações vinda da API");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setHospitais(response.data);
      setResultadoFiltro(response.data);
      setIsLoading(false);
      setIsDados(true);
    }, 1500);
  }
  useEffect(() => {
    carregarInformacoes();
  }, []);

  const aplicarFiltro = (e) => {
    e.preventDefault(); 
    const hospitaisFiltrados = hospitais.filter((hospital) => {
      const filtroEndeOuInst =
        hospital.name
          .toLowerCase()
          .includes(enderecoOuInstituicao.toLowerCase()) ||
        hospital.city
          .toLowerCase()
          .includes(enderecoOuInstituicao.toLowerCase());

      const filtoTipoSanguineo = obterTiposSanguineosCriticos(
        hospital.bloodStock,
      )
        .toLowerCase()
        .includes(tipoSanguineo.toLowerCase());

      return filtroEndeOuInst && filtoTipoSanguineo;
    });

    setResultadoFiltro(hospitaisFiltrados);
  };
  return (
    <main>
      {isLoading ? (
        <LoadingContainer>
          <DotLottieReact data={loadingAnimation} loop autoplay />
        </LoadingContainer>
      ) : isDados && hospitais.length === 0 ? (
        <>
          <h1>Sem hospitais para exibir no momento!</h1>
        </>
      ) : (
        <>
          <ContainerTitulo>
            <TituloDiv>
              <Titulo>Hospitais Parceiros</Titulo>
            </TituloDiv>
            <Subtitulo>
              Sua doação pode ser o fôlego de vida que alguém espera hoje.
              Encontre a unidade de saúde mais próxima e agende sua contribuição
              para a nossa rede de solidariedade.
            </Subtitulo>
          </ContainerTitulo>
          <ContainerFiltro>
            <FiltroDiv>
              <BuscaDiv>
                <form onSubmit={aplicarFiltro}>
                  <Input
                    id="cidade"
                    label="Cidade ou Instituição"
                    type="text"
                    placeholder="Todas as instituições"
                    value={enderecoOuInstituicao}
                    onChange={(e) => setEnderecoOuInstituicao(e.target.value)}
                  />
                </form>
              </BuscaDiv>
              <BuscaDiv>
                <form onSubmit={aplicarFiltro}>
                  <Input
                    id="tipoSanguineo"
                    label="Tipo sanguíneo necessário"
                    type="text"
                    placeholder="Todas os tipos"
                    value={tipoSanguineo}
                    onChange={(e) => setTipoSanguineo(e.target.value)}
                  />
                </form>
              </BuscaDiv>
              <BotaoBuscar onClick={aplicarFiltro}>
                <IoFilter size={22} color="white" />
                <TextoFiltro>Aplicar Filtros</TextoFiltro>
              </BotaoBuscar>
            </FiltroDiv>
          </ContainerFiltro>
          <ContainerCard>
            {resultadoFiltro.slice(0, quantidadeVisivel).map((dados) => {
              const totalBlood = Object.values(dados.bloodStock).reduce(
                (acc, value) => acc + value,
                0,
              );
              const averageBlood =
                totalBlood / Object.values(dados.bloodStock).length;
              const percentage = Math.min(averageBlood, 100);

              return (
                <CardDiv key={dados.id}>
                  <ImagemDiv>
                    {dados.image && (
                      <ImagemHospital
                        src={dados.image}
                        alt="Imagem de um Hospital"
                      />
                    )}
                    <Necessidade porcentagem={percentage}>
                      {percentage <= 30
                        ? `Urgência: ${obterTiposSanguineosCriticos(dados.bloodStock)}`
                        : `Necessita: ${obterTiposSanguineosCriticos(dados.bloodStock)}`}
                    </Necessidade>
                  </ImagemDiv>
                  <ConteudoDiv>
                    <h3 style={{ marginBottom: 10 }}>{dados.name}</h3>
                    <p style={{ marginBottom: 15 }}>
                      📍 ​{dados.city} - {dados.state}
                    </p>
                    <InfoEstoqueDiv>
                      <span style={{ fontSize: 12 }}>Estoque Geral</span>
                      <Situacao
                        style={{ fontSize: 12, fontWeight: 600 }}
                        porcentagem={percentage}
                      >
                        {percentage <= 30
                          ? `Critico (${percentage}%)`
                          : `${percentage}` <= 50
                            ? `Alerta (${percentage}%)`
                            : `Regular (${percentage}%)`}
                      </Situacao>
                    </InfoEstoqueDiv>

                    <ProgressoDiv>
                      <PorcentagemDiv porcentagem={percentage} />
                    </ProgressoDiv>
                  </ConteudoDiv>
                  <FavoritarDiv>
                    <BotaoFavoritar onClick={() => favoritar(dados)}>
                      {isFavorito(dados.id) ? <FaHeart /> : <FaRegHeart />}
                    </BotaoFavoritar>
                  </FavoritarDiv>
                  <div>
                    <a href={`/hospital/${dados.id}`}>
                      <BotaoConhecer>
                        <RiContactsLine />
                        Conhecer esta Unidade
                      </BotaoConhecer>
                    </a>
                  </div>
                </CardDiv>
              );
            })}
          </ContainerCard>
          <ContainerVerMais>
            {resultadoFiltro.length === 0 || resultadoFiltro.length < 5 ? (
              ""
            ) : (
              <MainButton
                text={todosVisiveis ? "Ver Menos Unidades" : "Ver Mais Unidades"}
                background="transparent"
                color="#C8102E"
                border="1px solid #C8102E"
                radius="9999px"
                onClick={() => {
                  if (todosVisiveis) {
                    setQuantidadeVisivel(4);
                  } else {
                    setQuantidadeVisivel(quantidadeVisivel + 4);
                  }
                }}
              />
            )}
          </ContainerVerMais>
          <ContainerBack>
            <NaoEncontrouDiv>
              <NaoEncontouFilhoDiv>
                <TituloTexto>Não encontrou o que procurava?</TituloTexto>
                <SubTexto>
                  Nós possuimos parceiros em todo o território nacional.
                </SubTexto>
                <SubTexto>
                  Você também pode solicitar uma campanha móvel para sua empresa
                  ou condomínio.
                </SubTexto>
              </NaoEncontouFilhoDiv>
              <div>
                <MainButton
                  text="Falar Conosco"
                  background="#FFFFFF"
                  color="#C8102E"
                  radius="9999px"
                />
              </div>
            </NaoEncontrouDiv>
          </ContainerBack>

          <div style={{ height: 100 }}></div>
        </>
      )}
    </main>
  );
};
