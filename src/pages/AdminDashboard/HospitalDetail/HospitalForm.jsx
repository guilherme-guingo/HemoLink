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
  FormInput,
  FormLabel,
  FormRow,
  FormSelect,
  FormSubmitButton,
  PageWrapperAdm,
  SectionTitle,
  TopBar,
} from './style'
import { TbArrowLeft, TbDeviceFloppy } from 'react-icons/tb'
import { BackButton } from '../../../components/BackButton/index.jsx'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import loadingAnimation from "../../../assets/loading.json";


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
    setForm((prev) => ({ ...prev, [name]: value }))
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
      } else {
        await createHospital(payload)
      }

      navigate('/adminDashboard')
    } catch (error) {
      console.error('Erro ao salvar hospital:', error)
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
              <FormGroup>
                <FormLabel>URL da Imagem</FormLabel>
                <FormInput
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Nome</FormLabel>
                <FormInput
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>CNPJ</FormLabel>
                <FormInput
                  name="cnpj"
                  value={form.cnpj}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Telefone</FormLabel>
                <FormInput
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>E-mail</FormLabel>
                <FormInput
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormColumn>

            <FormColumn>
              <FormGroup>
                <FormLabel>Endereço</FormLabel>
                <FormInput
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <FormLabel>Cidade</FormLabel>
                  <FormInput
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Estado</FormLabel>
                  <FormSelect
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                  >
                    <option value="">Selecione</option>
                    <option value="RJ">RJ</option>
                    <option value="SP">SP</option>
                  </FormSelect>
                </FormGroup>
              </FormRow>

              <FormGroup>
                <FormLabel>CEP</FormLabel>
                <FormInput
                  name="cep"
                  value={form.cep}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Horário</FormLabel>
                <FormInput
                  name="openingHours"
                  value={form.openingHours}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormColumn>
          </FormGridInfo>
        </FormCard>

        <SectionTitle>Estoque de Sangue</SectionTitle>

        <FormCard>
          <FormGrid>
            {bloodTypes.map((type) => (
              <FormGroupBlood key={type}>
                <FormLabel>{type}</FormLabel>
                <FormInput
                  type="number"
                  min="0"
                  value={form.bloodStock[type]}
                  onChange={(e) =>
                    handleBloodChange(type, e.target.value)
                  }
                />
              </FormGroupBlood>
            ))}
          </FormGrid>
        </FormCard>

        <FormActions>
          <FormSubmitButton type="submit" disabled={saving}>
            <TbDeviceFloppy size={18} />
            {saving ? 'Salvando...' : 'Salvar'}
          </FormSubmitButton>
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
        console.error(err)
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