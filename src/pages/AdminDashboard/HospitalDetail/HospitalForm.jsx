import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  createHospital,
  getHospitalById,
  updateHospital
} from '../../../services/getHospital.jsx'
import {
  AdmFormHeader,
  FormActions,
  FormCard,
  FormColumn,
  FormGrid,
  FormGridInfo,
  FormGroup,
  FormGroupBlood,
  FormRow,
  PageWrapperAdm,
  SectionTitle,
  TopBar,
} from './style'
import { Input } from '../../../components/Input'
import { MainButton } from '../../../components/MainButton'
import { TbDeviceFloppy } from 'react-icons/tb'
import { BackButton } from '../../../components/BackButton/index.jsx'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import loadingAnimation from "../../../assets/loading.json";
import { listaEstado } from '../helper/helper.jsx'
import { toast, ToastContainer } from 'react-toastify'


const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

const emptyForm = {
  image: '',
  name: '',
  cnpj: '',
  address: '',
  city: '',
  state: '',
  cep: '',
  phone: '',
  email: '',
  website: '',
  openingHours: '',
  bloodStock: {
    'A+': 0, 'A-': 0, 'B+': 0, 'B-': 0,
    'AB+': 0, 'AB-': 0, 'O+': 0, 'O-': 0,
  },
}

export const HospitalForm = ({ initialData }) => {
  const isEditing = !!initialData
  const navigate = useNavigate()

  const [form, setForm] = useState(
    isEditing
      ? {
        image: initialData.image || '',
        name: initialData.name || '',
        cnpj: initialData.cnpj || '',
        address: initialData.address || '',
        city: initialData.city || '',
        state: initialData.state || '',
        cep: initialData.cep || '',
        phone: initialData.phone || '',
        email: initialData.email || '',
        website: initialData.website || '',
        openingHours: initialData.openingHours || '',
        bloodStock: initialData.bloodStock || emptyForm.bloodStock,
      }
      : emptyForm
  )

  const [saving, setSaving] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    let formatValue = value

    //formatcaoCep
    if (name === 'cep') {
      formatValue = value.replace(/\D/g, "")

      formatValue = formatValue
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 9);
    }
    if (name === "cnpj") {
      let v = value.replace(/\D/g, "").slice(0, 14);

      v = v
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");

      formatValue = v;
    }
    if (name === "phone") {
      let v = value.replace(/\D/g, "").slice(0, 11);

      if (v.length <= 10) {
        // telefone fixo: (00) 0000-0000
        v = v
          .replace(/^(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{4})(\d)/, "$1-$2");
      } else {
        // celular: (00) 00000-0000
        v = v
          .replace(/^(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{5})(\d)/, "$1-$2");
      }

      formatValue = v;
    }


    setForm((prev) => ({ ...prev, [name]: formatValue }))
  }

  const handleBloodChange = (type, value) => {
    setForm((prev) => ({
      ...prev,
      bloodStock: {
        ...prev.bloodStock,
        [type]: Number(value),
      },
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      const payload = { ...form }

      if (isEditing) {
        await updateHospital(initialData.id, payload)
        toast.success("Hospital atualizado com sucesso!")
      } else {
        await createHospital(payload)
        toast.success("Hospital cadastrado com sucesso!")
      }
      setTimeout(() => {
        navigate('/adminDashboard')
      }, 1000);

    } catch (error) {
      toast.error("Erro ao carregar hospital", err)

      if (status === 404) {
        toast.error("404 - Não encontrado")
      }
    } finally {
      setSaving(false)
    }
  }

  return (
    <PageWrapperAdm>
      <form onSubmit={handleSubmit}>
        <AdmFormHeader >
          <SectionTitle>
            {isEditing ? 'Editar Hospital' : 'Adicionar Hospital'}
          </SectionTitle>

          <TopBar>
            <BackButton location={"/adminDashboard"} />
          </TopBar>

        </AdmFormHeader>


        <FormCard>
          <FormGridInfo>
            <FormColumn>
              <Input
                label="URL da Imagem"
                name="image"
                value={form.image}
                onChange={handleChange}
                margin="0"
                required
              />
              <Input
                label="Nome"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                margin="0"
              />
              <Input
                label="CNPJ"
                name="cnpj"
                value={form.cnpj}
                onChange={handleChange}
                margin="0"
                required
              />
              <Input
                label="Telefone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                margin="0"
                required
              />
              <Input
                label="E-mail"
                name="email"
                value={form.email}
                onChange={handleChange}
                margin="0"
                required
              />
            </FormColumn>

            <FormColumn>
              <Input
                label="Endereço"
                name="address"
                value={form.address}
                onChange={handleChange}
                margin="0"
                required
              />

              <FormRow>
                <Input
                  label="Cidade"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  margin="0"
                  required
                />
                <Input
                  label="Estado"
                  name="state"
                  type="select"
                  value={form.state}
                  onChange={handleChange}
                  margin="0"
                  required
                >
                  <option value="">Selecione</option>
                  {listaEstado.map(((estado, index) => (
                    <option key={index} value={estado.sigla}>{estado.sigla}</option>
                  )))}
                </Input>
              </FormRow>

              <Input
                label="CEP"
                name="cep"
                value={form.cep}
                onChange={handleChange}
                maxLength={9}
                margin="0"
                required
              />
              <Input
                label="Horário"
                name="openingHours"
                value={form.openingHours}
                onChange={handleChange}
                margin="0"
                required
              />
            </FormColumn>
          </FormGridInfo>
        </FormCard>

        <SectionTitle>Estoque de Sangue</SectionTitle>

        <FormCard>
          <FormGrid>
            {bloodTypes.map((type) => (
              <Input
                key={type}
                label={type}
                type="number"
                min="0"
                max="100"
                value={form.bloodStock[type]}
                onChange={(e) =>
                  handleBloodChange(type, e.target.value)
                }
                margin="0"
              />
            ))}
          </FormGrid>
        </FormCard>

        <FormActions>
          <MainButton
            type="submit"
            disabled={saving}
            icon={<TbDeviceFloppy size={18} />}
          >
            {saving ? 'Salvando...' : 'Salvar'}
          </MainButton>
        </FormActions>
      </form>
    </PageWrapperAdm>
  )
}

export const AddHospital = () => {
  return <HospitalForm />
}

export const EditHospital = () => {
  const { id } = useParams()
  const [hospital, setHospital] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await getHospitalById(id)
        if (res && res.status === 200) {
          setHospital(res.data)
        }
      } catch (err) {
        toast.error("Um erro aconteceu")
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [id])


  if (loading) return <PageWrapperAdm> <DotLottieReact data={loadingAnimation} loop autoplay /></PageWrapperAdm>
  if (!hospital) return <PageWrapperAdm>Hospital não encontrado</PageWrapperAdm>

  return <HospitalForm initialData={hospital} />
}