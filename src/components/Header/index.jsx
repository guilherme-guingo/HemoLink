import { useState } from 'react';
import { Container, Logo } from './style';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <Container>
      <Logo to="/" onClick={handleLogoClick}>
        HemoLink
      </Logo>
    </Container>
  );
}