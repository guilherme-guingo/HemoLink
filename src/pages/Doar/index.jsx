import { useState } from "react";
import { postDoacao } from "../../services/postDoacao";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Container, GrupoCampo, Label, Select } from "./style";
import { Input } from "../../components/Input";
import { MainButton } from "../../components/MainButton";
import { FormCard } from "../../components/FormCard";
import { BackButton } from "../../components/BackButton";
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

    if (!nome || !tipoSanguineo || !data || !horario) {
      toast.error("Preencha todos os campos!");
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
      toast.error("Erro ao confirmar. Tente novamente.");
      setEnviando(false);
    }
  }

  return (
    <Container>
      <div style={{ marginBottom: "24px" }}>
        <BackButton location={-1} />
      </div>

      <FormCard
        title="Quero doar"
        subtitle="Preencha seus dados para confirmar sua doação."
        onSubmit={handleSubmit}
      >
        <Input
          label="Nome completo"
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          disabled={enviando}
        />

        <Input
          label="Tipo sanguíneo"
          id="tipoSanguineo"
          type="select"
          value={tipoSanguineo}
          onChange={(e) => setTipoSanguineo(e.target.value)}
          disabled={enviando}
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
        </Input>

        <Input
          label="Data da doação"
          id="data"
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          disabled={enviando}
        />

        <Input
          label="Horário"
          id="horario"
          type="time"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          disabled={enviando}
        />

        <MainButton
          type="submit"
          disabled={enviando}
          width="100%"
          style={{ marginTop: "16px" }}
        >
          {enviando ? "Enviando..." : "Confirmar doação"}
        </MainButton>
      </FormCard>
    </Container>
  );
};
