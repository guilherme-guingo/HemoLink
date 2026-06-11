import { TbArrowLeft } from "react-icons/tb";
import { BackBtn } from "./style";
import { useNavigate } from "react-router-dom";

export const BackButton = ({ location, ...rest }) => {
    const navigate = useNavigate();
    return (
        <BackBtn onClick={() => navigate(location)} {...rest}>
            <TbArrowLeft size={20} />
            Voltar
        </BackBtn>
    )
}