import { FiSearch, FiHeart, FiShield } from 'react-icons/fi';
import { MainButton } from '../../components/MainButton';
import {
  Container,
  Hero,
  HeroCol,
  HeroTitle,
  HeroDescription,
  HeroActions,
  HeroIllustration,
  Stats,
  StatCard,
  StatNumber,
  StatLabel,
  Features,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
} from './style';

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeroCol>
          <HeroTitle>
            A maneira mais rápida de conectar doadores e hospitais.
          </HeroTitle>
          <HeroDescription>
            HemoLink facilita a busca por estoque de sangue, organização de doações e comunicação direta com instituições de saúde.
          </HeroDescription>
          <HeroActions>
            <HeroActions>
            <MainButton to="/catalogo">
              Ver hospitais
            </MainButton>
            
            <MainButton
              to="/perfil"
              background="#FFFFFF"
              color="#C8102E"
              border="1px solid #C8102E"
            >
              Meus favoritos
            </MainButton>
            
            <MainButton to="/solicitar">
              Solicitar doação
            </MainButton>
          </HeroActions>
          </HeroActions>

          <Stats>
            <StatCard>
              <StatNumber>120+</StatNumber>
              <StatLabel>Hospitais disponíveis</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>4.8</StatNumber>
              <StatLabel>Avaliação média</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Suporte confiável</StatLabel>
            </StatCard>
          </Stats>
        </HeroCol>

        <HeroIllustration>
          <div>
            <h3>Busque por estoque sob demanda</h3>
            <p>Filtre por tipo sanguíneo, local e urgência para encontrar o suporte certo de forma rápida.</p>
          </div>
        </HeroIllustration>
      </Hero>

      <Features>
        <FeatureCard>
          <FeatureIcon>
            <FiSearch size={22} />
          </FeatureIcon>
          <FeatureTitle>Pesquisa rápida</FeatureTitle>
          <FeatureText>Encontre hospitais precisando do seu apoio de forma rápida.</FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FiHeart size={22} />
          </FeatureIcon>
          <FeatureTitle>Sistema de favoritar</FeatureTitle>
          <FeatureText>Salve hospitais e acompanhe doações que importam para você.</FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FiShield size={22} />
          </FeatureIcon>
          <FeatureTitle>Segurança e confiança</FeatureTitle>
          <FeatureText>Informações protegidas e envio confiável de solicitações de sangue.</FeatureText>
        </FeatureCard>
      </Features>
    </Container>
  );
}