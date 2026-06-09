import styled from "styled-components";
import { theme } from "../../styles/theme";

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  color: ${theme.colors.secondary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.sm};
  transition: 0.2s;
  border: 2px solid  transparent;

  &:hover {
    background: ${theme.colors.surfaceSecondary};
    border: 2px solid  ${theme.colors.secondary};
  }
`;