import { GrupoCampo, Label, Input, Select, Textarea } from '../../Style';

export function CamposSolicitacao({ formData, handleChange }) {
  return (
    <>
      <GrupoCampo>
        <Label htmlFor="nomePaciente">Nome do Paciente</Label>
        <Input
          id="nomePaciente"
          name="nomePaciente"
          type="text"
          placeholder="Nome completo do paciente"
          value={formData.nomePaciente}
          onChange={handleChange}
        />
      </GrupoCampo>

      <GrupoCampo>
        <Label htmlFor="tipoSanguineo">Tipo Sanguíneo Necessário</Label>
        <Select
          id="tipoSanguineo"
          name="tipoSanguineo"
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
        </Select>
      </GrupoCampo>

      <GrupoCampo>
        <Label htmlFor="urgencia">Nível de Urgência</Label>
        <Select
          id="urgencia"
          name="urgencia"
          value={formData.urgencia}
          onChange={handleChange}
        >
          <option value="">Selecione o nível de urgência</option>
          <option value="Crítico">Crítico</option>
          <option value="Moderado">Moderado</option>
          <option value="Baixo">Baixo</option>
        </Select>
      </GrupoCampo>

      <GrupoCampo>
        <Label htmlFor="descricao">Descrição Adicional</Label>
        <Textarea
          id="descricao"
          name="descricao"
          placeholder="Descreva detalhes adicionais sobre o caso"
          value={formData.descricao}
          onChange={handleChange}
        />
      </GrupoCampo>
    </>
  );
}