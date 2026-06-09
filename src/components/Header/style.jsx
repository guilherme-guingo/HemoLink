import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.surface};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 90px;
  overflow: hidden;
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

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
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
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.15s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textInverseTitle};
    transform: translateY(-1px);
  }
`;