import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logoHemoLink from "../../assets/Marca/logo-hemolink.png";
import { useAuth } from "../../contexts/AuthContext";
import {
  Container,
  Logo,
  Nav,
  NavLink,
  ProfileLink,
  LogoutButton,
  Greeting,
  MenuHamburguer,
  NavRight,
} from "./style";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isAuthenticated = Boolean(user);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleProfileClick = () => {
    setIsMobileMenuOpen(false);
    if (!user) {
      navigate("/login");
      return;
    }

    if (user.tipo === "admin") {
      navigate("/adminDashboard");
      return;
    }

    navigate("/perfil");
  };

  const handleLogout = () => {
    setIsMobileMenuOpen(false);
    logout();
    navigate("/login");
  };

  return (
    <Container>
      <Logo to="/" onClick={handleLogoClick}>
        <img src={logoHemoLink} alt="HemoLink Logo" />
      </Logo>
      <MenuHamburguer onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? (
          <AiOutlineClose size={26} />
        ) : (
          <AiOutlineMenu size={26} />
        )}
      </MenuHamburguer>
      <Nav $isOpen={isMobileMenuOpen}>
        <NavRight>
          <Greeting>Olá, {isAuthenticated ? user.nome : "visitante"}</Greeting>
          <NavLink to="/catalogo" onClick={() => setIsMobileMenuOpen(false)}>
            Catálogo
          </NavLink>
          <ProfileLink onClick={handleProfileClick} aria-label="perfil">
            <AiOutlineUser size={24} />
          </ProfileLink>
          {isAuthenticated && (
            <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
          )}
        </NavRight>
      </Nav>
    </Container>
  );
}
