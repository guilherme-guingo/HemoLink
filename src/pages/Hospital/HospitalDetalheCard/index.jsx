import { FiMapPin, FiClock, FiBell, FiBarChart2 } from "react-icons/fi";

import {
  CardContainer,
  HeaderCard,
  BadgeUrgencia,
  InfoBlockBox,
  InfoRow,
  AnnouncementText,
  MapContainer,
  StockGrid,
  StockItem,
  ActionButton,
} from "./style";
import { obterTiposSanguineosCriticos } from "../../../util/obterTiposSanguineosCriticos.jsx";

export function HospitalDetalheCard({ hospital, onAgendar }) {
  if (!hospital) return null;

  const queryMapa = `${hospital.name}, ${hospital.address}, ${hospital.city} - CEP ${hospital.cep}`;
  
  const formatarTelefone = (tel) => {
    if (!tel) return ""; //Segurança: Caso o telefone do hospital não esteja cadastrado
    const apenasNumeros = String(tel).replace(/\D/g, "");
    if (apenasNumeros.length === 10) {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 6)}-${apenasNumeros.slice(6)}`;
    }
    if (apenasNumeros.length === 11) {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7)}`;
    }
    return tel;
  };

  return (
    <CardContainer>
      <HeaderCard>
        <div>
          <h1>{hospital.name}</h1>
          <p>
            <strong>CNPJ:</strong>
            {hospital.cnpj}
          </p>
        </div>
        <BadgeUrgencia>
          Estoque Crítico: {obterTiposSanguineosCriticos(hospital.bloodStock)}
        </BadgeUrgencia>
      </HeaderCard>

      <InfoBlockBox>
        <h3>
          <FiMapPin />
          Localização e Contato
        </h3>
        <InfoRow>
          <strong>Endereço:</strong>
          {hospital.address}
        </InfoRow>
        <InfoRow>
          <strong>Cidade:</strong>
          {hospital.city} - {hospital.state}
        </InfoRow>
        <InfoRow>
          <strong>CEP:</strong>
          {hospital.cep}
        </InfoRow>
        {hospital.phone && (
          <InfoRow>
            <strong>Telefone:</strong>
            {formatarTelefone(hospital.phone)}
          </InfoRow>
        )}
        <InfoRow>
          <strong>E-mail:</strong>
          {hospital.email}
        </InfoRow>
        <InfoRow>
          <strong>Website:</strong>
          <a href={hospital.website} target="_blank" rel="">
            {hospital.website}
          </a>
        </InfoRow>

        {hospital.address && (
          <MapContainer>
            <iframe
              title="Google Maps Location"
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${encodeURIComponent(queryMapa)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            />
          </MapContainer>
        )}
      </InfoBlockBox>

      <InfoBlockBox>
        <h3>
          <FiClock />
          Atendimento e Infraestrutura
        </h3>
        <InfoRow>
          <strong>Horário de Funcionamento:</strong>
          {hospital.openingHours?.replace("-", " às ")}
        </InfoRow>
        <InfoRow>
          <strong>Estacionamento:</strong>
          Cobertura gratuita para doadores de sangue cadastrados.
        </InfoRow>
        <InfoRow>
          <strong>Acessibilidade:</strong>
          Rampas de acesso, elevadores e sinalização tátil disponíveis.
        </InfoRow>
        <InfoRow>
          <strong>Coleta de Plaquetas:</strong>
          Disponível (necessário agendamento prévio).
        </InfoRow>
      </InfoBlockBox>

      <InfoBlockBox>
        <h3>
          <FiBell />
          Comunicado do Hemocentro
        </h3>
        <AnnouncementText>
          Atenção! O estoque do tipo faturado como crítico necessita de
          reposição urgente. Solicitamos o comparecimento de voluntários aptos
          para a coleta de sangue total o mais breve possível.
        </AnnouncementText>
      </InfoBlockBox>

      <InfoBlockBox>
        <h3>
          <FiBarChart2 />
          Visão Geral do Estoque Sanguíneo
        </h3>
        <StockGrid>
          {hospital.bloodStock &&
            Object.entries(hospital.bloodStock).map(([tipo, porcentagem]) => {
              let status = "estavel";
              let statusTexto = "Estável";

              if (porcentagem < 50) {
                status = "critico";
                statusTexto = "Crítico";
              } else if (porcentagem < 80) {
                status = "alerta";
                statusTexto = "Alerta";
              }

              return (
                <StockItem key={tipo} status={status}>
                  <span>{tipo}</span>
                  <small>{statusTexto}</small>
                  <span>{porcentagem}%</span>
                </StockItem>
              );
            })}
        </StockGrid>
      </InfoBlockBox>
      <ActionButton onClick={onAgendar}>
        Solicitar Doação de Sangue
      </ActionButton>
    </CardContainer>
  );
}
