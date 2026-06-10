import { GrupoCampo, Label, Select } from '../../Style';

export function CamposLocalizacao({
  estados, loadingEstados, estadoSelecionado, handleEstadoChange,
  cidades, loadingCidades, formData, handleCidadeChange,
  hospitais, loadingHospitais, cidadeSelecionada, handleChange,
}) {
  return (
    <>
      <GrupoCampo>
        <Label htmlFor="estado">Estado</Label>
        <Select
          id="estado"
          name="estado"
          value={estadoSelecionado}
          onChange={handleEstadoChange}
          disabled={loadingEstados}
        >
          <option value="">
            {loadingEstados ? 'Carregando estados...' : 'Selecione o estado'}
          </option>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.sigla}>
              {estado.nome}
            </option>
          ))}
        </Select>
      </GrupoCampo>

      <GrupoCampo>
        <Label htmlFor="cidade">Cidade</Label>
        <Select
          id="cidade"
          name="cidade"
          disabled={loadingCidades || !estadoSelecionado}
          value={formData.cidade}
          onChange={handleCidadeChange}
        >
          <option value="">
            {loadingCidades
              ? 'Carregando cidades...'
              : !estadoSelecionado
              ? 'Selecione primeiro um estado'
              : 'Selecione a cidade'}
          </option>
          {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.nome}>
              {cidade.nome}
            </option>
          ))}
        </Select>
      </GrupoCampo>

      <GrupoCampo>
        <Label htmlFor="hospital">Hospital</Label>
        <Select
          id="hospital"
          name="nomeHospital"
          disabled={loadingHospitais || !cidadeSelecionada}
          value={formData.nomeHospital}
          onChange={handleChange}
        >
          <option value="">
            {loadingHospitais
              ? 'Carregando hospitais...'
              : !cidadeSelecionada
              ? 'Selecione primeiro uma cidade'
              : 'Selecione o hospital'}
          </option>
          {hospitais.map((hospital) => (
            <option key={hospital.id} value={hospital.name}>
              {hospital.name}
            </option>
          ))}
        </Select>
      </GrupoCampo>
    </>
  );
}