import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.surface};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 70px;

  @media (min-width: 768px) {
    padding: 20px 40px;
    height: 90px;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`;

export const MenuHamburguer = styled.button`
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textBase};
  align-items: center;
  justify-content: center;
  padding: 4px;

  @media (min-width: 701px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.colors.surface};
  padding: 2rem;
  gap: 2rem;
  z-index: 99;
  border-bottom: ${(props) =>
    props.$isOpen ? `1px solid ${props.theme.colors.border}` : "none"};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  display: flex;

  @media (min-width: 701px) {
    flex-direction: row;
    position: static;
    width: auto;
    padding: 0;
    gap: 24px;
    background: transparent;
    border-bottom: none;
    visibility: visible;
  }
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.textBase};
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const ProfileLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
  transition: color 0.2s;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const LogoutButton = styled.button`
  color: ${(props) => props.theme.colors.textBase};
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 8px 14px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;
  font-weight: 700;
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    transform 0.15s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textInverseTitle};
    transform: translateY(-1px);
  }
`;

export const Greeting = styled.span`
  color: ${(props) => props.theme.colors.textBase};
  font-weight: 500;
  font-size: 16px;
  display: none;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`;
