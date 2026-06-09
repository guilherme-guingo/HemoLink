import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getHospital } from '../../services/getHospital'; 

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
  
  // Estados de controle sincronizados
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

  // Tela de Carregamento
  if (loading) {
    return (
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <h2>Buscando dados do hospital...</h2>
        </div>
      </Container>
    );
  }

  // Tela de Erro 
  if (erro || !hospital) {
    return (
      <Container>
        <VoltarLink>
          <Link to="/catalogo">&larr; Voltar para o Catálogo</Link>
        </VoltarLink>
        <Card style={{ borderColor: '#C8102E', textAlign: 'center', padding: '40px' }}>
          <h2 style={{ color: '#C8102E', marginBottom: '16px' }}>Ops! Algo deu errado.</h2>
          <p style={{ color: '#50606F' }}>{erro || "Hospital não encontrado."}</p>
        </Card>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </Container>
    );
  }

  // Tela Principal 
  return (
    <Container>
      <VoltarLink>
        <Link to="/catalogo">&larr; Catálogo</Link>
      </VoltarLink>

      <Card>
        <HeaderCard>
          <div>
            <h1>{hospital.nome || hospital.name}</h1>
            <p>Horário: {hospital.horarioFuncionamento || "Segunda a Sexta, das 07h às 16h"}</p>
          </div>
          <BadgeUrgencia>
            Estoque Crítico: {hospital.estoqueCritico || "O-"}
          </BadgeUrgencia>
        </HeaderCard>

        <InfoRow>
          <strong>Endereço:</strong> {hospital.endereco || hospital.address}
        </InfoRow>
        
        <InfoRow>
          <strong>Cidade:</strong> {hospital.cidade || hospital.city}
        </InfoRow>

        <InfoRow>
          <strong>Telefone de Contato:</strong> {hospital.telefone || "(22) 2525-0000"}
        </InfoRow>

        <InfoRow style={{ marginTop: '24px', lineHeight: '1.6' }}>
          <strong>Nota do Hemocentro:</strong><br/>
          {hospital.descricao || "Solicitamos o comparecimento urgente de doadores voluntários para reposição de estoque."}
        </InfoRow>

        <ActionButton onClick={handleAgendar}>
          Agendar Doação Neste Hospital
        </ActionButton>
      </Card>
      
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Container>
  );
}