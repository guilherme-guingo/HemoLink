import { TbArrowLeft } from "react-icons/tb";
import { BackBtn } from "./style";
import { useNavigate } from "react-router-dom";

export const BackButton = ({location}) => {
    const navigate = useNavigate();
    return (
        <BackBtn onClick={() => navigate(location)}>
            <TbArrowLeft size={20} />
            Voltar
        </BackBtn>
    )
}

