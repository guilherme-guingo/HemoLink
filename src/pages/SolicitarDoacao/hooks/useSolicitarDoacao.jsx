import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postSolicitacao } from '../../../services/postSolicitacao.jsx';
import { getHospital } from '../../../services/getHospital';
import axios from 'axios';

const FORM_INICIAL = {
  nomePaciente: '',
  nomeHospital: '',
  tipoSanguineo: '',
  urgencia: '',
  estado: '',
  cidade: '',
  descricao: '',
};

export function useSolicitarDoacao() {
  const [formData, setFormData] = useState(FORM_INICIAL);
  const [estados, setEstados] = useState([]);
  const [loadingEstados, setLoadingEstados] = useState(false);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidades, setCidades] = useState([]);
  const [loadingCidades, setLoadingCidades] = useState(false);
  const [hospitais, setHospitais] = useState([]);
  const [loadingHospitais, setLoadingHospitais] = useState(false);
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleEstadoChange(event) {
    const sigla = event.target.value;
    setEstadoSelecionado(sigla);
    setFormData({ ...formData, estado: sigla, cidade: '' });
  }

  function handleCidadeChange(event) {
    const cidade = event.target.value;
    setCidadeSelecionada(cidade);
    setFormData({ ...formData, cidade: cidade });
  }

  async function handleSubmit() {
    try {
      await postSolicitacao(formData);
      toast.success('Solicitação enviada com sucesso!');
      setFormData(FORM_INICIAL);
      setEstadoSelecionado('');
      setCidades([]);
      setTimeout(() => navigate('/'), 3000);
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      toast.error('Erro ao enviar solicitação. Tente novamente.');
    }
  }

  async function buscarEstados() {
    setLoadingEstados(true);
    try {
      const response = await axios.get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
      );
      setEstados(response.data);
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    } finally {
      setLoadingEstados(false);
    }
  }

  async function buscarCidades(sigla) {
    setCidades([]);
    setLoadingCidades(true);
    try {
      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`
      );
      setCidades(response.data);
    } catch (error) {
      console.error('Erro ao buscar cidades:', error);
    } finally {
      setLoadingCidades(false);
    }
  }

  async function buscarHospitais(cidade) {
    setHospitais([]);
    setLoadingHospitais(true);
    try {
      const response = await getHospital();
      const filtrados = response.data.filter(
        (hospital) => hospital.city === cidade
      );
      setHospitais(filtrados);
    } catch (error) {
      console.error('Erro ao buscar hospitais:', error);
    } finally {
      setLoadingHospitais(false);
    }
  }

  useEffect(() => { buscarEstados(); }, []);

  useEffect(() => {
    if (!estadoSelecionado) return;
    buscarCidades(estadoSelecionado);
  }, [estadoSelecionado]);

  useEffect(() => {
    if (!cidadeSelecionada) return;
    buscarHospitais(cidadeSelecionada);
  }, [cidadeSelecionada]);

  return {
    formData,
    estados, loadingEstados, estadoSelecionado,
    cidades, loadingCidades,
    hospitais, loadingHospitais, cidadeSelecionada,
    handleChange, handleEstadoChange, handleCidadeChange, handleSubmit,
  };
}