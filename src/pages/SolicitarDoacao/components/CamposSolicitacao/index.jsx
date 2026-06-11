import { Input } from '../../../../components/Input';

export function CamposSolicitacao({ formData, handleChange }) {
  return (
    <>
      <Input
        label="Nome do Paciente"
        id="nomePaciente"
        name="nomePaciente"
        type="text"
        placeholder="Nome completo do paciente"
        value={formData.nomePaciente}
        onChange={handleChange}
      />

      <Input
        label="Tipo Sanguíneo Necessário"
        id="tipoSanguineo"
        name="tipoSanguineo"
        type="select"
        value={formData.tipoSanguineo}
        onChange={handleChange}
      >
        <option value="">Selecione o tipo sanguíneo</option>
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
        label="Nível de Urgência"
        id="urgencia"
        name="urgencia"
        type="select"
        value={formData.urgencia}
        onChange={handleChange}
      >
        <option value="">Selecione o nível de urgência</option>
        <option value="Crítico">Crítico</option>
        <option value="Moderado">Moderado</option>
        <option value="Baixo">Baixo</option>
      </Input>

      <Input
        label="Descrição Adicional"
        id="descricao"
        name="descricao"
        type="textarea"
        placeholder="Descreva detalhes adicionais sobre o caso"
        value={formData.descricao}
        onChange={handleChange}
      />
    </>
  );
}