import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textInverseBase};
  padding: 64px 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  p {
    color: ${(props) => props.theme.colors.textInverseMuted};
    line-height: 1.6;
    max-width: 320px;
    margin: 0;
  }
`;

export const BloodBagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 104px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px 10px 24px 24px;
  position: relative;
  margin-bottom: 24px;
  margin-top: 12px;

  img {
    width: auto;
    height: 60%;
    margin-left: 4px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 10px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-bottom: none;
    border-radius: 6px 6px 0 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 24px;
    width: 4px;
    height: 12px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 0 0 4px 4px;
    box-shadow: 18px 0 0 ${(props) => props.theme.colors.primary};
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    color: ${(props) => props.theme.colors.textInverseMuted};
    cursor: pointer;
    transition: color 0.2s;
    margin: 0;

    &:hover {
      color: ${(props) => props.theme.colors.textInverseTitle};
    }
  }
`;

export const ColumnTitle = styled.h4`
  color: ${(props) => props.theme.colors.textInverseTitle};
  font-size: 18px;
  margin: 0 0 8px 0;
`;

export const SocialList = styled.div`
  display: flex;
  gap: 12px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background-color: rgba(255, 255, 255, 0.05);
  color: ${(props) => props.theme.colors.textInverseTitle};
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

export const FooterNote = styled.div`
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme.colors.textInverseMuted};
  font-size: 14px;
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
`;