import { FiMapPin, FiClock, FiBell, FiBarChart2 } from 'react-icons/fi';
import { MainButton } from '../../../../components/MainButton';

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
} from './style'; 

const formatarTelefone = (tel) => {
  if (!tel) return "";
  const apenasNumeros = String(tel).replace(/\D/g, '');
  if (apenasNumeros.length === 10) {
    return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 6)}-${apenasNumeros.slice(6)}`;
  }
  if (apenasNumeros.length === 11) {
    return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7)}`;
  }
  return tel;
};

const obterEstoqueCritico = (bloodStock) => {
  if (!bloodStock) return "O-";
  const entries = Object.entries(bloodStock);
  if (entries.length === 0) return "O-";
  const [menorTipo] = entries.reduce((min, cur) => cur[1] < min[1] ? cur : min, entries[0]);
  return menorTipo;
};

export function HospitalCard({ hospital, onAgendar }) {
  if (!hospital) return null;

  const queryMapa = `${hospital.name}, ${hospital.address}, ${hospital.city} - CEP ${hospital.cep || ""}`;

  return (
    <CardContainer>
      <HeaderCard>
        <div>
          <h1>{hospital.name}</h1>
          <p><strong>CNPJ:</strong> {hospital.cnpj || "00.000.000/0001-00"}</p>
        </div>
        <BadgeUrgencia>
          Estoque Crítico: {obterEstoqueCritico(hospital.bloodStock)}
        </BadgeUrgencia>
      </HeaderCard>

      <InfoBlockBox>
        <h3>
          <FiMapPin /> Localização e Contato
        </h3>
        <InfoRow><strong>Endereço:</strong> {hospital.address}</InfoRow>
        <InfoRow><strong>Cidade:</strong> {hospital.city} - {hospital.state || "SP"}</InfoRow>
        <InfoRow><strong>CEP:</strong> {hospital.cep || "Não informado"}</InfoRow>
        {hospital.phone && (
          <InfoRow><strong>Telefone:</strong> {formatarTelefone(hospital.phone)}</InfoRow>
        )}
        <InfoRow><strong>E-mail:</strong> {hospital.email}</InfoRow>
        <InfoRow><strong>Website:</strong> <a href={hospital.website} target="_blank" rel="noreferrer">{hospital.website}</a></InfoRow>

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
          <FiClock /> Atendimento e Infraestrutura
        </h3>
        <InfoRow><strong>Horário de Funcionamento:</strong> {hospital.openingHours?.replace('-', ' às ') || "07:00 às 18:00"}</InfoRow>
        <InfoRow><strong>Estacionamento:</strong> Cobertura gratuita para doadores de sangue cadastrados.</InfoRow>
        <InfoRow><strong>Acessibilidade:</strong> Rampas de acesso, elevadores e sinalização tátil disponíveis.</InfoRow>
        <InfoRow><strong>Coleta de Plaquetas:</strong> Disponível (necessário agendamento prévio).</InfoRow>
      </InfoBlockBox>

      <InfoBlockBox>
        <h3>
          <FiBell /> Comunicado do Hemocentro
        </h3>
        <AnnouncementText>
          Atenção! O estoque do tipo faturado como crítico necessita de reposição urgente. Solicitamos o comparecimento de voluntários aptos para a coleta de sangue total o mais breve possível.
        </AnnouncementText>
      </InfoBlockBox>

      <InfoBlockBox>
        <h3>
          <FiBarChart2 /> Visão Geral do Estoque Sanguíneo
        </h3>
        <StockGrid>
          {hospital.bloodStock && Object.entries(hospital.bloodStock).map(([tipo, porcentagem]) => {
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

      <MainButton
        text="Solicitar Doação de Sangue"
        onClick={onAgendar}
        background="#C8102E"
        color="#FFFFFF"
        radius="8px"
      />
    </CardContainer>
  );
}