import { useSolicitarDoacao } from './hooks/useSolicitarDoacao';
import { CamposLocalizacao } from './campoForms/CamposLocalizacao';
import { CamposSolicitacao } from './campoForms/CamposSolicitacao';
import { Container } from './Style';
import { FormCard } from '../../components/FormCard';
import { MainButton } from '../../components/MainButton';
import { BackButton } from '../../components/BackButton';

export function SolicitarDoacao() {
  const {
    formData,
    estados, loadingEstados, estadoSelecionado,
    cidades, loadingCidades,
    hospitais, loadingHospitais, cidadeSelecionada,
    handleChange, handleEstadoChange, handleCidadeChange, handleSubmit,
  } = useSolicitarDoacao();

  return (
    <Container>
      <div style={{ marginBottom: '24px' }}>
        <BackButton location={-1} />
      </div>

      <FormCard 
        title="Solicitar Doação de Sangue"
        onSubmit={handleSubmit}
        maxWidth="100%"
      >
        <CamposSolicitacao
          formData={formData}
          handleChange={handleChange}
        />

        <CamposLocalizacao
          estados={estados} loadingEstados={loadingEstados} estadoSelecionado={estadoSelecionado} handleEstadoChange={handleEstadoChange}
          cidades={cidades} loadingCidades={loadingCidades} handleCidadeChange={handleCidadeChange}
          hospitais={hospitais} loadingHospitais={loadingHospitais} cidadeSelecionada={cidadeSelecionada}
          formData={formData} handleChange={handleChange}
        />

        <MainButton type="submit" width="100%" style={{ marginTop: '16px' }}>
          Enviar Solicitação
        </MainButton>
      </FormCard>
    </Container>
  );
}