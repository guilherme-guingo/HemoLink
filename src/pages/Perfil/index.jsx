import { useFavoritos } from '../../contexts/FavoritesContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
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
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [navigate, user])

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