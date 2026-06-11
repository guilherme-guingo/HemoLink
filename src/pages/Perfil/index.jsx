import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useFavoritos } from "../../contexts/FavoritesContext";
import { obterTiposSanguineosCriticos } from "../../util/obterTiposSanguineosCriticos";
import { calculateBloodStock } from "../../util/bloodStock";
import {
  ContainerPerfil,
  TituloPerfil,
  SubtituloPerfil,
  ListaFavoritos,
  CardFavorito,
  NomeHospital,
  EnderecoHospital,
  TipoSanguineo,
  TiposNecessarios,
  MensagemVazia,
} from "./style";
import { MainButton } from "../../components/MainButton";

export const Perfil = () => {
  const { favoritos, favoritar } = useFavoritos();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <ContainerPerfil>
      <TituloPerfil>Perfil do Doador</TituloPerfil>
      <SubtituloPerfil>
        Hospitais que você marcou como favoritos
      </SubtituloPerfil>

      {favoritos.length === 0 ? (
        <MensagemVazia>Você ainda não favoritou nenhum hospital.</MensagemVazia>
      ) : (
        <ListaFavoritos>
          {favoritos.map((hospital) => {
            const { totalBlood, averageBlood, percentage } =
              calculateBloodStock(hospital.bloodStock);
            const urgencia =
              percentage <= 30
                ? "Critico"
                : percentage <= 50
                  ? "Alerta"
                  : "Regular";

            return (
              <CardFavorito key={hospital.id}>
                <NomeHospital>{hospital.name}</NomeHospital>
                <EnderecoHospital>
                  📍 {hospital.city} - {hospital.state}
                </EnderecoHospital>
                <TipoSanguineo $urgencia={urgencia}>
                  {urgencia} ({percentage}%)
                </TipoSanguineo>
                <TiposNecessarios>
                  Precisa de:{" "}
                  <strong>
                    {obterTiposSanguineosCriticos(hospital.bloodStock)}
                  </strong>
                </TiposNecessarios>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                  <MainButton 
                    to={`/hospital/${hospital.id}`} 
                    width="100%"
                  >
                    Visualizar Hospital
                  </MainButton>
                  
                  <MainButton 
                    onClick={() => favoritar(hospital)}
                    background="transparent"
                    color="#C8102E"
                    border="1px solid #C8102E"
                    width="100%"
                  >
                    Remover dos favoritos
                  </MainButton>
                </div>
              </CardFavorito>
            );
          })}
        </ListaFavoritos>
      )}
    </ContainerPerfil>
  );
};
