import styled from "styled-components";

export const ContainerPerfil = styled.main`
    min-height: 100vh;
    padding: 60px 40px;
    background: ${(props) => props.theme.colors.background};
`;

export const TituloPerfil = styled.h1`
    color: ${(props) => props.theme.colors.textTitle};
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 8px;
`;

export const SubtituloPerfil = styled.p`
    color: ${(props) => props.theme.colors.textMuted};
    text-align: center;
    margin-bottom: 40px;
`;

export const ListaFavoritos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;
`;

export const CardFavorito = styled.div`
    width: 320px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: ${(props) => props.theme.colors.surface};
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: ${(props) => props.theme.borderRadius.md};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 4px 16px rgba(36, 75, 126, 0.04);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 24px rgba(36, 75, 126, 0.08), 0 4px 8px rgba(0, 0, 0, 0.04);
    }
`;

export const NomeHospital = styled.h3`
    color: ${(props) => props.theme.colors.textTitle};
    margin-bottom: 10px;
`;

export const EnderecoHospital = styled.p`
    color: ${(props) => props.theme.colors.textBase};
    margin-bottom: 15px;
`;

export const TiposNecessarios = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    padding: 8px 12px;
    border: 1px dashed ${(props) => props.theme.colors.border};
    border-radius: ${(props) => props.theme.borderRadius.sm};
    font-size: 14px;
    color: ${(props) => props.theme.colors.textBase};

    strong {
        color: ${(props) => props.theme.colors.primary};
    }
`;

export const TipoSanguineo = styled.span`
    align-self: flex-start;
    padding: 6px 12px;
    margin-bottom: 15px;
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.surface};
    border-radius: ${(props) => props.theme.borderRadius.full};
    background-color: ${(props) => {
    if (props.$urgencia === "Critico") return props.theme.colors.status.danger;
    if (props.$urgencia === "Alerta") return props.theme.colors.status.warning;
    return props.theme.colors.status.success;
    }};
`;

export const BotaoRemover = styled.button`
    margin-top: auto;
    padding: 10px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius.md};
    transition: all 0.3s ease;

    &:hover {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.surface};
    }
`;

export const MensagemVazia = styled.p`
    text-align: center;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.textMuted};
    margin-top: 40px;
`;