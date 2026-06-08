import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HospitalApi as api } from '../../services/Api/Api';


import {
  Container,
  VoltarLink,
  Card,
  HeaderCard,
  BadgeUrgencia,
  InfoRow,
  ActionButton
} from './style';

export function Hospital() {
  const { id } = useParams();


  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);


  useEffect(() => {
    async function buscarDadosHospital() {
      try {
        setLoading(true);
        setErro(null);
        
        const resposta = await api.get(`/hospital/${id}`);
        
        setHospital(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar dados do hospital:", error);
        setErro("Não foi possível carregar as informações deste hospital. Verifique se o ID existe.");
        toast.error("Erro de conexão com o servidor.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      buscarDadosHospital();
    }
  }, [id]);

  const handleAgendar = () => {
    toast.success("Agendamento de doação iniciado! Escolha uma data no próximo passo.");
  };

  // 1. Tela de Carregamento 
  if (loading) {
    return (
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <h2>Carregando dados do hospital...</h2>
        </div>
      </Container>
    );
  }

  // 2. Tela de Erro 
  if (erro || !hospital) {
    return (
      <Container>
        <VoltarLink>
          <Link to="/catalogo">&larr; Voltar para o Catálogo</Link>
        </VoltarLink>
        <Card style={{ borderColor: '#C8102E', textAlign: 'center', padding: '40px' }}>
          <h2 style={{ color: '#C8102E', marginBottom: '16px' }}>Ops! Algo deu errado.</h2>
          <p style={{ color: '#50606F' }}>{erro || "Hospital não encontrado no banco de dados."}</p>
        </Card>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </Container>
    );
  }
  // 3. Tela Principal 
  return (
    <Container>
      <VoltarLink>
        <Link to="/catalogo">&larr; Catálogo</Link>
      </VoltarLink>

      <Card>
        <HeaderCard>
          <div>
            <h1>{hospital.nome}</h1>
            <p>Horário: {hospital.horarioFuncionamento}</p>
          </div>
          <BadgeUrgencia>
            Estoque Crítico: {hospital.estoqueCritico}
          </BadgeUrgencia>
        </HeaderCard>

        <InfoRow>
          <strong>Endereço:</strong> {hospital.endereco}
        </InfoRow>
        
        <InfoRow>
          <strong>Cidade:</strong> {hospital.cidade}
        </InfoRow>

        <InfoRow>
          <strong>Telefone de Contato:</strong> {hospital.telefone}
        </InfoRow>

        <InfoRow style={{ marginTop: '24px', lineHeight: '1.6' }}>
          <strong>Nota do Hemocentro:</strong><br/>
          {hospital.descricao}
        </InfoRow>

        <ActionButton onClick={handleAgendar}>
          Agendar Doação Neste Hospital
        </ActionButton>
      </Card>
      
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Container>
  );
}