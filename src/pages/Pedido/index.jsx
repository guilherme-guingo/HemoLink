import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  VoltarLink,
  Card,
  HeaderCard,
  BadgeUrgencia,
  InfoRow,
  ActionButton
} from './style';

export function DetalhesPedido() {
  const { id } = useParams();

  const [pedido, setPedido] = useState(null);

  console.log(`Página carregada. ID capturado: ${id}. Aguardando integração com API...`);

  if (!pedido) {
    return (
      <Container>
        <VoltarLink>
          <Link to="/catalogo">&larr; Voltar para o Catálogo</Link>
        </VoltarLink>
        <h2>Estrutura pronta. Aguardando dados do pedido {id}...</h2>
      </Container>
    );
  }

  return (
    <Container>
      <VoltarLink>
        <Link to="/catalogo">&larr; Voltar para o Catálogo</Link>
      </VoltarLink>

      <Card>
        <HeaderCard>
          <div>
            <h1>{pedido.hospital}</h1>
            <p>Data da solicitação: {pedido.dataSolicitacao}</p>
          </div>
          <BadgeUrgencia>
            {pedido.tipoSanguineo} • {pedido.urgencia}
          </BadgeUrgencia>
        </HeaderCard>

        <InfoRow>
          <strong>Paciente:</strong> {pedido.paciente}
        </InfoRow>
        
        <InfoRow>
          <strong>Localidade:</strong> {pedido.cidade}
        </InfoRow>

        <InfoRow style={{ marginTop: '24px', lineHeight: '1.6' }}>
          <strong>Descrição Médica:</strong><br/>
          {pedido.descricao}
        </InfoRow>

        <ActionButton>
          Quero Doar Sangue
        </ActionButton>
      </Card>
    </Container>
  );
}