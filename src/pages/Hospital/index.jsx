import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiArrowLeft } from 'react-icons/fi';

import { getHospital } from '../../services/getHospital'; 
import { HospitalCard } from './components/HospitalCard'; 

import {
  Container,
  VoltarLink,
  Card,
  CarouselWrapper, 
  CarouselImage    
} from './style';

export function Hospital() {
  const { id } = useParams();
  const navigate = useNavigate();

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
    navigate('/solicitar');
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

  const imagemHospital = hospital.image || hospital.imagens?.[0] || hospital.fotos?.[0] || null;

  return (
    <Container>
      <VoltarLink>
        <Link to="/catalogo">
          <FiArrowLeft style={{ marginRight: '8px' }} /> Catálogo
        </Link>
      </VoltarLink>

      {imagemHospital && (
        <div style={{ marginBottom: '24px' }}>
          <CarouselWrapper>
            <CarouselImage src={imagemHospital} alt={`Foto de fachada do ${hospital.name}`} />
          </CarouselWrapper>
        </div>
      )}

      <HospitalCard hospital={hospital} onAgendar={handleAgendar} />
      
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Container>
  );
}