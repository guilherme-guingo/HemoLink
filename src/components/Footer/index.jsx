import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import iconeHemoLink from '../../assets/Marca/icone-hemolink.png';
import {
  Container,
  FooterBrand,
  BloodBagContainer,
  FooterContent,
  FooterColumn,
  ColumnTitle,
  SocialList,
  SocialLink,
  FooterNote,
} from './style';

export function Footer() {
  return (
    <Container>
      <FooterContent>
        <FooterBrand>
          <BloodBagContainer>
            <img src={iconeHemoLink} alt="HemoLink Icon" />
          </BloodBagContainer>
          <p>Conectando doadores e hospitais com uma experiência ágil, segura e humanizada.</p>
        </FooterBrand>

        <FooterColumn>
          <ColumnTitle>Empresa</ColumnTitle>
          <p>Sobre nós</p>
          <p>Carreiras</p>
          <p>Contato</p>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Suporte</ColumnTitle>
          <p>Ajuda</p>
          <p>FAQ</p>
          <p>Política de privacidade</p>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Conecte-se</ColumnTitle>
          <SocialList>
            <SocialLink href="#" aria-label="Instagram">
              <FaInstagram size={18} />
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </SocialLink>
            <SocialLink href="#" aria-label="Facebook">
              <FaFacebookF size={18} />
            </SocialLink>
          </SocialList>
        </FooterColumn>
      </FooterContent>

      <FooterNote>© 2026 HemoLink. Todos os direitos reservados.</FooterNote>
    </Container>
  );
}