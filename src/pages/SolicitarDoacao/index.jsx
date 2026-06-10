import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api/Api.jsx';
import { Container, Titulo, Formulario,
         Label, Input, Select,
         Textarea, Botao, GrupoCampo,
        } from './Style';
import axios from 'axios';


export function SolicitarDoacao() {

  const [formData, setFormData] = useState({
    nomePaciente: '',
    nomeHospital: '',
    tipoSanguineo: '',
    urgencia: '',
    estado: '',
    cidade: '',
    descricao: '',
  });

  const [estados, setEstados] = useState([]);
  const [loadingEstados, setLoadingEstados] = useState(false);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidades, setCidades] = useState([]);
  const [loadingCidades, setLoadingCidades] = useState(false);
  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit() {
    try {
      await api.post('/pedidos', formData);
      toast.success('Solicitação enviada com sucesso!');
      setFormData({
        nomePaciente: '',
        nomeHospital: '',
        tipoSanguineo: '',
        urgencia: '',
        estado: '',
        cidade: '',
        descricao: '',
      });
      setEstadoSelecionado('');
      setCidades([]);
      setTimeout(() => navigate('/'), 3000);
    } 
    catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      toast.error('Erro ao enviar solicitação. Tente novamente.');
    }
  }

  async function buscarEstados() {
    setLoadingEstados(true);
    try {
        const response = await axios.get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
        setEstados(response.data);
    } 
    
    catch (error) {
    console.error('Erro ao buscar estados:', error);
    } 
    
    finally {setLoadingEstados(false);
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
    } 
    catch (error) {
      console.error('Erro ao buscar cidades:', error);
    } 
    finally {
      setLoadingCidades(false);
    }
  }

  useEffect(() => {buscarEstados();}, []);
  
  useEffect(() => {
    if (!estadoSelecionado) return;
    buscarCidades(estadoSelecionado);
  }, [estadoSelecionado]);

  function handleEstadoChange(event) {
    const sigla = event.target.value;
    setEstadoSelecionado(sigla);
    setFormData({ ...formData, estado: sigla, cidade: '' });
  }

  return (
    <Container>
      <ToastContainer position="top-right" autoClose={2000} />
      <Titulo>Solicitar Doação de Sangue</Titulo>
      <Formulario>

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
          <Label htmlFor="nomeHospital">Nome do Hospital</Label>
          <Input
            id="nomeHospital"
            name="nomeHospital"
            type="text"
            placeholder="Hospital onde o paciente está internado"
            value={formData.nomeHospital}
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
                    <option key={estado.id} value={estado.sigla}>{estado.nome}
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
            onChange={(event) =>
              setFormData({ ...formData, cidade: event.target.value })
            }
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
          <Label htmlFor="descricao">Descrição Adicional</Label>
          <Textarea
            id="descricao"
            name="descricao"
            placeholder="Descreva detalhes adicionais sobre o caso"
            value={formData.descricao}
            onChange={handleChange}
          />
        </GrupoCampo>

        <Botao onClick={handleSubmit}>
          Enviar Solicitação
        </Botao>

      </Formulario>
    </Container>
  );
}