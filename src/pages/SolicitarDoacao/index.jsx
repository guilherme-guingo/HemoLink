import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSolicitarDoacao } from './hooks/useSolicitarDoacao';
import { CamposLocalizacao } from './components/CamposLocalizacao';
import { CamposSolicitacao } from './components/CamposSolicitacao';
import { Container, Titulo, Formulario, Botao } from './Style';

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
      <ToastContainer position="top-right" autoClose={2000} />
      <Titulo>Solicitar Doação de Sangue</Titulo>
      <Formulario>

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

        <Botao onClick={handleSubmit}>
          Enviar Solicitação
        </Botao>

      </Formulario>
    </Container>
  );
}