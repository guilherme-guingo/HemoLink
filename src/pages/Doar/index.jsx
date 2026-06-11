import { useState } from "react";
import { postDoacao } from "../../services/postDoacao";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Container, Titulo, Subtitulo, Formulario, GrupoCampo, Label, Select, Botao } from "./style";
import { Input } from "../../components/Input";
import "react-toastify/dist/ReactToastify.css";

export const Doar = () => {
    const [nome, setNome] = useState("");
    const [tipoSanguineo, setTipoSanguineo] = useState("");
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");
    const [enviando, setEnviando] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if(!nome || !tipoSanguineo || !data || !horario) {
            toast.warning("Preencha todos os campos!");
            return;
        }

        setEnviando(true);

        try {
            await postDoacao({
                nomePaciente: nome,
                tipoSanguineo: tipoSanguineo,
                data: data,
                horario: horario,
                tipo: "doacao",
            });
            toast.success("Doação confirmada com sucesso!");
            setNome("");
            setTipoSanguineo("");
            setData("");
            setHorario("");
            setTimeout(() => navigate("/"), 3000);
        } catch (error) {
            console.error("Erro ao confirmar doação:", error);
            toast.error("Erro ao confirmar. Tente novamente.");
            setEnviando(false);
        }
    }

    return (
        <Container>
            <ToastContainer position="top-right" autoClose={2000} />
            <Titulo>Quero doar</Titulo>
            <Subtitulo>Preencha seus dados para confirmar sua doacao.</Subtitulo>

            <Formulario onSubmit={handleSubmit}>
                <Input
                    label="Nome completo"
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome"
                />  

                <GrupoCampo>
                    <Label>Tipo sanguíneo</Label>
                    <Select
                        value={tipoSanguineo}
                        onChange={(e) => setTipoSanguineo(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </Select>
                </GrupoCampo>

                <GrupoCampo>
                    <Label>Data da doação</Label>
                    <Input
                        type="date"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </GrupoCampo>

                <Input
                    label="Data da doação"
                    id="data"
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />

                <Input
                    label="Horário"
                    id="horario"
                    type="time"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                />

                <Botao type="submit" disabled={enviando}>
                    {enviando ? "Enviando..." : "Confirmar doação"}
                </Botao>
            </Formulario>
        </Container>
    );
};