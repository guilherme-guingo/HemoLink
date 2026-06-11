import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useFavoritos } from "../../contexts/FavoritesContext";
// import { obterTiposSanguineosCriticos } from "../Catalogo";
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
  BotaoRemover,
  MensagemVazia,
} from "./style";

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
                <BotaoRemover onClick={() => favoritar(hospital)}>
                  Remover dos favoritos
                </BotaoRemover>
              </CardFavorito>
            );
          })}
        </ListaFavoritos>
      )}
    </ContainerPerfil>
  );
};
