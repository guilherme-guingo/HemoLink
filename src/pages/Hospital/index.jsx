import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useToast } from '../../components/Toast'; 

import { getHospital } from '../../services/getHospital'; 

import {
  Container,
  VoltarLink,
  ImageWrapper, 
  Image,
  LoadingWrapper,
  ErrorCard,
  ErrorTitle,
  ErrorText
} from './style';
import { HospitalDetalheCard } from './HospitalDetalheCard';

export function Hospital() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notifyError } = useToast();
  const [hospital, setHospital] = useState([]);
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
        notifyError("Erro de conexão com o banco de dados.");
        
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadHospital();
    }
  }, [id]); 

  const handleAgendar = () => {
    navigate('/solicitar', {
      state: {
        hospitalPreenchido: {
          nomeHospital: hospital.name,
          cidade: hospital.city,
          estado: hospital.state,
        },
      },
    });
  };

  const handleConfirmarDoacao = () => {
    navigate('/doar');
  };

  if (loading) {
    return (
      <Container>
        <LoadingWrapper>
          <h2>
            Buscando dados completos do hospital...
          </h2>
        </LoadingWrapper>
      </Container>
    );
  }

  if (erro || !hospital) {
    return (
      <Container>
        <VoltarLink>
          <Link 
          to="/catalogo">
            <FiArrowLeft /> 
            Voltar para o Catálogo
          </Link>
        </VoltarLink>
        
        <ErrorCard>
          <ErrorTitle>
            Ops! Algo deu errado.
          </ErrorTitle>
          <ErrorText>
            {erro || "Hospital não encontrado."}
          </ErrorText>
        </ErrorCard>
      </Container>
    );
  }

  return (
    <Container>
      <VoltarLink>
        <Link 
        to="/catalogo">
          <FiArrowLeft /> 
          Catálogo
        </Link>
      </VoltarLink>

      {hospital.image && (
        <ImageWrapper>
          <Image
            src={hospital.image}
            alt={`Foto de fachada do ${hospital.name}`}
          />
        </ImageWrapper>
      )}

      <HospitalDetalheCard 
      hospital={hospital} 
      onAgendar={handleAgendar}
      onConfirmarDoacao={handleConfirmarDoacao}
      />
    </Container>
  );
}