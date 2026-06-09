import { useFavoritos } from "../../contexts/FavoritesContext";
import {
  ContainerPerfil,
  TituloPerfil,
  SubtituloPerfil,
  ListaFavoritos,
  CardFavorito,
  NomeHospital,
  EnderecoHospital,
  TipoSanguineo,
  BotaoRemover,
  MensagemVazia,
} from "./style";

export const Perfil = () => {
  const { favoritos, favoritar } = useFavoritos();

  return (
    <ContainerPerfil>
      <TituloPerfil>Perfil do Doador</TituloPerfil>
      <SubtituloPerfil>Hospitais que você marcou como favoritos</SubtituloPerfil>

      {favoritos.length === 0 ? (
        <MensagemVazia>Você ainda não favoritou nenhum hospital.</MensagemVazia>
      ) : (
        <ListaFavoritos>
          {favoritos.map((hospital) => (
            <CardFavorito key={hospital.id}>
              <NomeHospital>{hospital.nome}</NomeHospital>
              <EnderecoHospital>📍 {hospital.endereco}</EnderecoHospital>
              <TipoSanguineo>Necessita: {hospital.sangueNecessario}</TipoSanguineo>
              <BotaoRemover onClick={() => favoritar(hospital)}>
                Remover dos favoritos
              </BotaoRemover>
            </CardFavorito>
          ))}
        </ListaFavoritos>
      )}
    </ContainerPerfil>
  );
};