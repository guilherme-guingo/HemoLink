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
} from "./style";

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
    </main>
  );
};
