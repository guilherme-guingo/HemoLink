import {
  Container,
  Section,
  ColorGrid,
  ColorCard,
  TypographyBox,
  InverseTypographyBox,
  ButtonRow,
  Button,
  gotaSangue
} from './style';
import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { MainButton } from '../../components/MainButton';
import { TbArrowRight } from 'react-icons/tb';

export default function Styleguide() {
  return (
    <Container>
      <h1>Styleguide HemoLink</h1>

      <Section>
        <h2>Cores da Marca e Fundos</h2>
        <ColorGrid>
          <ColorCard $bg="primary">Primary</ColorCard>
          <ColorCard $bg="secondary">Secondary</ColorCard>
          <ColorCard $bg="terciary" $darkText>Terciary</ColorCard>
          <ColorCard $bg="background" $darkText>Background</ColorCard>
          <ColorCard $bg="surface" $darkText>Surface</ColorCard>
          <ColorCard $bg="surfaceSecondary" $darkText>Surface Secondary</ColorCard>
        </ColorGrid>
      </Section>

      <Section>
        <h2>Cores de Status</h2>
        <ColorGrid>
          <ColorCard $status="success">Success</ColorCard>
          <ColorCard $status="warning">Warning</ColorCard>
          <ColorCard $status="danger">Danger</ColorCard>
        </ColorGrid>
      </Section>

      <Section>
        <h2>Tipografia</h2>
        <TypographyBox>
          <h1>H1: Exemplo de Título Principal</h1>
          <h2>H2: Exemplo de Subtítulo</h2>
          <p>Texto Base: Este é o texto padrão para parágrafos e leituras longas na plataforma.</p>
          <span>Texto Muted: Usado para legendas, placeholders e informações secundárias.</span>
        </TypographyBox>
        <InverseTypographyBox>
          <h1>H1: Exemplo de Título Principal</h1>
          <h2>H2: Exemplo de Subtítulo</h2>
          <p>Texto Base: Este é o texto padrão para parágrafos e leituras longas na plataforma.</p>
          <span>Texto Muted: Usado para legendas, placeholders e informações secundárias.</span>
        </InverseTypographyBox>
      </Section>

      <Section>
        <h2>Botões e Interações</h2>
        <ButtonRow>
          <Button $variant="primary">Botão Principal</Button>
          <Button $variant="secondary">Botão Secundário</Button>
        </ButtonRow>
      </Section>

      <Section>
        <h2>Componentes Personalizados</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3>BackButton</h3>
          <p>Botão de navegação para voltar para a página anterior.</p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <BackButton location="/" />
          </div>
        </div>

        <div>
          <h3>Input</h3>
          <p>Campo de entrada com suporte a rótulo e mensagens de erro.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
            <Input 
              label="Email" 
              placeholder="Digite seu email..."
              type="email"
            />
            <Input 
              label="Senha"
              placeholder="Digite sua senha..."
              type="password"
            />
            <Input 
              label="Campo com Erro"
              placeholder="Este campo tem um erro"
              error="Este campo é obrigatório"
            />
            <Input 
              placeholder="Sem rótulo"
            />
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>MainButton</h3>
          <p>Botão global altamente customizável com ícone opcional.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <MainButton text="Padrão" />
            <MainButton
              text="Personalizado"
              background="#1E293B"
              color="#FFFFFF"
              radius="9999px"
            />
            <MainButton
              text="Com ícone"
              icon={TbArrowRight}
              background="#C8102E"
              color="#FFFFFF"
            />
          </div>
        </div>
      </Section>
    </Container>
  );
}