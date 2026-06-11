import { Input } from '../../../../components/Input';

export function CamposLocalizacao({
  estados, loadingEstados, estadoSelecionado, handleEstadoChange,
  cidades, loadingCidades, formData, handleCidadeChange,
  hospitais, loadingHospitais, cidadeSelecionada, handleChange,
}) {
  return (
    <>
      <Input
        label="Estado"
        id="estado"
        name="estado"
        type="select"
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
      </Input>

      <Input
        label="Cidade"
        id="cidade"
        name="cidade"
        type="select"
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
      </Input>

      <Input
        label="Hospital"
        id="hospital"
        name="nomeHospital"
        type="select"
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
      </Input>
    </>
  );
}