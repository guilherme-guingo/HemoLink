import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const PageWrapperAdm = styled.div`
  padding: 2rem 6rem;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;



export const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: ${theme.borderRadius.sm};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  color: ${theme.colors.status.danger};
  border: 2px solid ${theme.colors.status.danger};
  padding: 0.5rem 1.2rem;
  border-radius: ${theme.borderRadius.sm};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${theme.colors.status.danger};
    color: white;
  }
`;

export const HeroSection = styled.div`
  display: flex;
  gap: 2rem;
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const HeroImage = styled.img`
  width: 22rem;
  min-height: 16rem;
  object-fit: cover;
  flex-shrink: 0;
`;

export const HeroInfo = styled.div`
  padding: 1.5rem 2rem 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  flex: 1;
`;

export const HospitalName = styled.h1`
  font-size: 1.8rem;
  color: ${theme.colors.textTitle};
  margin: 0;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${theme.colors.textBase};
  font-size: 0.95rem;
`;

export const InfoLink = styled.a`
  color: ${theme.colors.textBase};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: ${theme.colors.textTitle};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BloodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const BloodCard = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.md};
  padding: 1.2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  border-left: 5px solid ${({ $level }) => {
    if ($level >= 70) return theme.colors.status.success;
    if ($level >= 40) return theme.colors.status.warning;
    return theme.colors.status.danger;
  }};
`;

export const BloodType = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${theme.colors.textTitle};
  margin: 0 0 0.3rem 0;
`;

export const BloodValue = styled.p`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({ $level }) => {
    if ($level >= 70) return theme.colors.status.success;
    if ($level >= 40) return theme.colors.status.warning;
    return theme.colors.status.danger;
  }};
  margin: 0;
`;

export const InfoCard = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  padding: 1.5rem 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const InfoLabel = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.colors.textMuted};
  font-weight: 600;
`;

export const InfoValue = styled.span`
  font-size: 1rem;
  color: ${theme.colors.textTitle};
  font-weight: 500;
`;

// === FORM STYLES ===

export const FormCard = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const FormLabel = styled.label`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.colors.textMuted};
  font-weight: 600;
`;

export const FormInput = styled.input`
  padding: 0.6rem 0.8rem;
  border: 1.5px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  font-size: 0.95rem;
  color: ${theme.colors.textTitle};
  background: ${theme.colors.terciary};
  transition: 0.2s;
  outline: none;

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(200, 16, 46, 0.1);
  }
`;

export const FormSelect = styled.select`
  padding: 0.6rem 0.8rem;
  border: 1.5px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  font-size: 0.95rem;
  color: ${theme.colors.textTitle};
  background: ${theme.colors.terciary};
  transition: 0.2s;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(200, 16, 46, 0.1);
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export const FormSubmitButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: ${theme.borderRadius.sm};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
