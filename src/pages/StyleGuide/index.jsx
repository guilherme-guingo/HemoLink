import {
  Container,
  Section,
  ColorGrid,
  ColorCard,
  TypographyBox,
  ButtonRow,
  Button,
  gotaSangue
} from './style';

export default function Styleguide() {
  return (
    <Container>
      <h1>Styleguide HemoLink</h1>

      <Section>
        <h2>Cores da Marca e Fundos</h2>
        <ColorGrid>
          <ColorCard $bg="primary">Primary</ColorCard>
          <ColorCard $bg="secondary">Secondary</ColorCard>
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
        <p>Aqui você pode adicionar exemplos de outros componentes personalizados que criamos, como cards, modais, formulários, etc. Isso ajuda a manter a consistência visual e funcional em toda a aplicação.</p>
      
      </Section>
    </Container>
  );
}