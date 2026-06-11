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
  ContainerVerMais,
  ContainerBack,
  NaoEncontrouDiv,
  SubTexto,
  BotaoBuscar,
  TextoFiltro,
  BotaoFalarConosco,
  LoadingContainer,
  NaoEncontouFilhoDiv,
  TituloTexto,
} from "./style";
import { Input } from "../../components/Input";
import { MainButton } from "../../components/MainButton";
import { IoFilter } from "react-icons/io5";

import { useFavoritos } from "../../contexts/FavoritesContext";
import { getHospital } from "../../services/getHospital";

import loadingAnimation from "../../assets/loading.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { CardHospital } from "../../components/CardHospital";
import { calculateBloodStock } from "../../util/bloodStock";
import { obterTiposSanguineosCriticos } from "../../util/obterTiposSanguineosCriticos";
import { toast } from "react-toastify";

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
      toast.error("Erro ao carregar as informações");
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
                <p style={{ fontWeight: 600 }}>Cidade ou Instituição</p>
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
              const { totalBlood, averageBlood, percentage } =
                calculateBloodStock(dados.bloodStock);

              return (
                <div key={dados.id}>
                  <CardHospital dados={dados} percentage={percentage} />
                </div>
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
