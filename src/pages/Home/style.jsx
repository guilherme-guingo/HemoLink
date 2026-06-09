import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: 40px 24px 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 3.4vw, 4rem);
  line-height: 1.05;
  color: ${(props) => props.theme.colors.textTitle};
  margin: 0;
`;

export const HeroDescription = styled.p`
  max-width: 640px;
  color: ${(props) => props.theme.colors.textBase};
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 0;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const buttonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const ActionButton = styled(Link)`
  ${buttonStyles}
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textInverseTitle};
  border: 1px solid transparent;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

export const SecondaryButton = styled(Link)`
  ${buttonStyles}
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.surface};

  &:hover {
    background-color: ${(props) => props.theme.colors.surfaceSecondary};
  }
`;

export const HeroIllustration = styled.div`
  min-height: 380px;
  padding: 32px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background: linear-gradient(180deg, rgba(200, 16, 46, 0.08), rgba(248, 250, 252, 0.98));
  border: 1px solid rgba(200, 16, 46, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textTitle};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);

  h3 {
    margin: 0 0 16px;
    font-size: 1.6rem;
  }

  p {
    margin: 0;
    color: ${(props) => props.theme.colors.textBase};
    line-height: 1.8;
    max-width: 380px;
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 16px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  padding: 20px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  background-color: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
`;

export const StatNumber = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textTitle};
`;

export const StatLabel = styled.span`
  color: ${(props) => props.theme.colors.textBase};
  display: block;
  margin-top: 8px;
`;

export const Features = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(240px, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.article`
  padding: 28px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background-color: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 40px rgba(15, 23, 42, 0.08);
  }
`;

export const FeatureIcon = styled.div`
  width: 54px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: rgba(200, 16, 46, 0.08);
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 18px;
`;

export const FeatureTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 1.15rem;
  color: ${(props) => props.theme.colors.textTitle};
`;

export const FeatureText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.textBase};
  line-height: 1.75;
`;