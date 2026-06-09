import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Ícones do Feather Icons
import { 
  FiArrowLeft, 
  FiMapPin, 
  FiClock, 
  FiBell, 
  FiBarChart2 
} from 'react-icons/fi';

// Serviço de busca integrado com a API
import { getHospital } from '../../services/getHospital'; 

import {
  Container,
  VoltarLink,
  Card,
  HeaderCard,
  BadgeUrgencia,
  InfoRow,
  ActionButton,
  InfoBlock,
  StockGrid,
  StockItem,
  MapContainer,
  CarouselWrapper, 
  CarouselImage    
} from './style';

// Função auxiliar para formatar dinamicamente o telefone com parênteses no DDD
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

export function Hospital() {
  const { id } = useParams();
  
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function loadHospital() {
      try {
        setLoading(true);
        setErro(null);

        const response = await getHospital();
        
        if (response && response.status === 200) {
          const found = response.data.find((h) => String(h.id) === String(id));
          
          if (found) {
            setHospital(found);
          } else {
            setErro("Hospital não encontrado na base de dados.");
          }
        }
      } catch (error) {
        console.error("Erro ao buscar hospital:", error);
        setErro("Não foi possível carregar as informações do servidor.");
        toast.error("Erro de conexão com o banco de dados.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadHospital();
    }
  }, [id]);

  const handleAgendar = () => {
    toast.success("Agendamento de doação iniciado! Escolha uma data no próximo passo.");
  };

  if (loading) {
    return (
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <h2>Buscando dados completos do hospital...</h2>
        </div>
      </Container>
    );
  }

  if (erro || !hospital) {
    return (
      <Container>
        <VoltarLink>
          <Link to="/catalogo">
            <FiArrowLeft style={{ marginRight: '8px' }} /> Voltar para o Catálogo
          </Link>
        </VoltarLink>
        <Card style={{ borderColor: '#C8102E', textAlign: 'center', padding: '40px' }}>
          <h2 style={{ color: '#C8102E', marginBottom: '16px' }}>Ops! Algo deu errado.</h2>
          <p style={{ color: '#50606F' }}>{erro || "Hospital não encontrado."}</p>
        </Card>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </Container>
    );
  }

  // Segurança removida: foca apenas nas chaves reais vindas do banco de dados ou retorna nulo
  const imagemHospital = hospital.image || hospital.imagens?.[0] || hospital.fotos?.[0] || null;

  // Descobre automaticamente qual tipo sanguíneo está com a menor porcentagem
  const obterEstoqueCritico = () => {
    if (!hospital.bloodStock) return "O-";
    const entries = Object.entries(hospital.bloodStock);
    const [menorTipo] = entries.reduce((min, cur) => cur[1] < min[1] ? cur : min, entries[0]);
    return menorTipo;
  };

  return (
    <Container>
      <VoltarLink>
        <Link to="/catalogo">
          <FiArrowLeft style={{ marginRight: '8px' }} /> Catálogo
        </Link>
      </VoltarLink>

      {/* Só renderiza o bloco estrutural se houver um link de imagem válido no banco do Pedro */}
      {imagemHospital && (
        <div style={{ marginBottom: '24px' }}>
          <CarouselWrapper>
            <CarouselImage src={imagemHospital} alt={`Foto de fachada do ${hospital.name}`} />
          </CarouselWrapper>
        </div>
      )}

      <Card>
        <HeaderCard>
          <div>
            <h1>{hospital.name}</h1>
            <p><strong>CNPJ:</strong> {hospital.cnpj || "00.000.000/0001-00"}</p>
          </div>
          <BadgeUrgencia>
            Estoque Crítico: {obterEstoqueCritico()}
          </BadgeUrgencia>
        </HeaderCard>

        {/* Bloco 1: Localização e Contato com o Google Maps */}
        <InfoBlock style={{ marginTop: '24px' }}>
          <h3>
            <FiMapPin style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
            Localização e Contato
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
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  `${hospital.name}, ${hospital.address}, ${hospital.city} - ${hospital.cep}`
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              />
            </MapContainer>
          )}
        </InfoBlock>

        {/* Bloco 2: Atendimento e Infraestrutura */}
        <InfoBlock style={{ marginTop: '24px' }}>
          <h3>
            <FiClock style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
            Atendimento e Infraestrutura
          </h3>
          <InfoRow><strong>Horário de Funcionamento:</strong> {hospital.openingHours?.replace('-', ' às ') || "07:00 às 18:00"}</InfoRow>
          <InfoRow><strong>Estacionamento:</strong> Cobertura gratuita para doadores de sangue cadastrados.</InfoRow>
          <InfoRow><strong>Acessibilidade:</strong> Rampas de acesso, elevadores e sinalização tátil disponíveis.</InfoRow>
          <InfoRow><strong>Coleta de Plaquetas:</strong> Disponível (necessário agendamento prévio).</InfoRow>
        </InfoBlock>

        {/* Bloco 3: Comunicado Oficial */}
        <InfoBlock style={{ marginTop: '24px' }}>
          <h3>
            <FiBell style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
            Comunicado do Hemocentro
          </h3>
          <p style={{ color: '#50606F', lineHeight: '1.6', margin: 0 }}>
            Atenção! O estoque do tipo faturado como crítico necessita de reposição urgente. Solicitamos o comparecimento de voluntários aptos para a coleta de sangue total o mais breve possível.
          </p>
        </InfoBlock>

        {/* Bloco 4: Visão Geral do Estoque Sanguíneo Dinâmico */}
        <InfoBlock style={{ marginTop: '24px' }}>
          <h3>
            <FiBarChart2 style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
            Visão Geral do Estoque Sanguíneo
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
                  <span style={{ fontSize: '0.75rem', fontWeight: 'normal', marginTop: '2px' }}>{porcentagem}%</span>
                </StockItem>
              );
            })}
          </StockGrid>
        </InfoBlock>

        <ActionButton onClick={handleAgendar}>
          Confirmar Doação 
        </ActionButton>
      </Card>
      
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Container>
  );
}