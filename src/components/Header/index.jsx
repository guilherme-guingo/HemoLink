import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import logoHemoLink from '../../assets/marca/logo-hemolink.png';
import { Container, Logo, Nav, NavLink, ProfileLink } from './style';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <Container>
      <Logo to="/" onClick={handleLogoClick}>
        <img src={logoHemoLink} alt="HemoLink Logo" />
      </Logo>
      <Nav>
        <NavLink to="/catalogo" onClick={() => setIsMobileMenuOpen(false)}>
          Catálogo
        </NavLink>
        <ProfileLink to="/adminDashboard" aria-label="Dashboard">
          <AiOutlineUser size={24} />
        </ProfileLink>
      </Nav>
    </Container>
  );
}