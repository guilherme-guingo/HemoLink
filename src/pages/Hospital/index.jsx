import { useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const mockHospital = {
    nome: "Hospital Maternidade Nova Friburgo",
    endereco: "Av. Alberto Braune, 123 - Centro",
    cidade: "Nova Friburgo - RJ",
    telefone: "(22) 2525-0000",
    horarioFuncionamento: "Segunda a Sexta, das 07h às 16h",
    estoqueCritico: "O- e A+",
    descricao: "O Hemocentro deste hospital está operando com níveis críticos de bolsas de sangue do tipo O- (doador universal). Solicitamos o comparecimento urgente de doadores voluntários."
  };

  const handleAgendar = () => {
    toast.success("Agendamento de doação iniciado! Escolha uma data no próximo passo.");
  };

  return (
    <Container>
      <VoltarLink>
        <Link to="/catalogo">&larr; Catálogo</Link>
      </VoltarLink>

      <Card>
        <HeaderCard>
          <div>
            <h1>{mockHospital.nome}</h1>
            <p>Horário: {mockHospital.horarioFuncionamento}</p>
          </div>
          <BadgeUrgencia>
            Estoque Crítico: {mockHospital.estoqueCritico}
          </BadgeUrgencia>
        </HeaderCard>

        <InfoRow>
          <strong>Endereço:</strong> {mockHospital.endereco}
        </InfoRow>
        
        <InfoRow>
          <strong>Cidade:</strong> {mockHospital.cidade}
        </InfoRow>

        <InfoRow>
          <strong>Telefone de Contato:</strong> {mockHospital.telefone}
        </InfoRow>

        <InfoRow style={{ marginTop: '24px', lineHeight: '1.6' }}>
          <strong>Nota do Hemocentro:</strong><br/>
          {mockHospital.descricao}
        </InfoRow>

        <ActionButton onClick={handleAgendar}>
          Agendar Doação Neste Hospital
        </ActionButton>
      </Card>
      
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Container>
  );
}