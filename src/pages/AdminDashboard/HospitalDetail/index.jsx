import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getHospitalById, deleteHospital } from '../../../services/getHospital.jsx'
import {
  ActionButtons, BloodCard, BloodGrid, BloodType, BloodValue, HeroImage, HeroInfo, HeroSection, HospitalName, InfoCard, InfoGrid, InfoItem, InfoLabel, InfoLink, InfoRow, InfoValue, PageWrapperAdm, SectionTitle, TopBar,
} from './style'
import { MainButton } from '../../../components/MainButton'
import { TbArrowLeft, TbEdit, TbTrash } from 'react-icons/tb'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { HiOutlineClock } from 'react-icons/hi'
import { PiGlobe } from 'react-icons/pi'
import { MdBloodtype } from 'react-icons/md'
import { BackButton } from '../../../components/BackButton/index.jsx'
import loadingAnimation from "../../../assets/loading.json";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { toast, ToastContainer } from 'react-toastify'

export const HospitalDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [hospital, setHospital] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isMobile,setIsMobile] = useState(window.innerWidth <= 430)

  useEffect(() => {
    async function loadHospital() {
      try {
        const response = await getHospitalById(id)
        if (response && response.status === 200) {
          setHospital(response.data)
        }
      } catch (err) {
        toast.error("Erro ao carregar hospital")

        if (status === 404) {
          toast.error("Hospital Não encontrado")
        }
      } finally {
        setLoading(false)
      }
    }
    loadHospital()
  }, [id])

  //DELEE
  const handleDelete = async () => {
    if (!window.confirm(`Excluir ${hospital.name}?`)) return

    try {
      toast.success("Hospital Deletado com sucesso")
      
      setTimeout(async () => {
        await deleteHospital(id)
        navigate('/adminDashboard')
      }, 1000)
      
    } catch (err) {
      toast.error("Erro ao excluir o hospital")
    }
  }

  //efeito Controle da tela
  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth <= 430)
    }
    window.addEventListener('resize',handleSize)

    return() => {
      window.removeEventListener('resise',handleSize)
    }
  },[])

  if (loading) return <PageWrapperAdm> <DotLottieReact data={loadingAnimation} loop autoplay /></PageWrapperAdm>
  if (!hospital) return <PageWrapperAdm><p>Hospital não foi encontrado</p></PageWrapperAdm>

  const bloodTypes = Object.entries(hospital.bloodStock || {})

  return (
    <PageWrapperAdm>
      <ToastContainer position="top-right" autoClose={2000} />
      <TopBar>

        <BackButton location={'/adminDashboard'} />
        <ActionButtons>
          <MainButton 
            onClick={() => navigate(`/adminDashboard/${id}/edit`)}
            icon={<TbEdit size={18} />}
          >
            {!isMobile && 'Editar'}
          </MainButton>

          <MainButton 
            onClick={handleDelete}
            icon={<TbTrash size={18} />}
            background="transparent"
            color="#C8102E"
            border="1px solid #C8102E"
          >
            {!isMobile && 'Excluir'}
          </MainButton>
        </ActionButtons>
      </TopBar>

      <HeroSection>
        <HeroImage src={hospital.image} alt={hospital.name} />
        <HeroInfo>
          <HospitalName>{hospital.name}</HospitalName>
          <InfoRow>
            <FaPhoneAlt size={14} />
            {hospital.phone}
          </InfoRow>
          <InfoRow>
            <IoIosMail size={16} />
            {hospital.email}
          </InfoRow>
          <InfoRow>
            <PiGlobe size={16} />
            <InfoLink href={hospital.website} target="_blank" rel="noopener noreferrer">
              {hospital.website?.replace(/^https?:\/\//, '')}
            </InfoLink>
          </InfoRow>
          <InfoRow>
            <HiOutlineClock size={16} />
            {hospital.openingHours}
          </InfoRow>
        </HeroInfo>
      </HeroSection>

      <SectionTitle>
        <MdBloodtype size={24} color="#C8102E" />
        Estoque de Sangue
      </SectionTitle>
      <BloodGrid>
        {bloodTypes.map(([type, percente]) => (
          <BloodCard key={type} $percente={percente}>
            <BloodType>{type}</BloodType>
            <BloodValue $percente={percente}>
              {percente}
            </BloodValue>
          </BloodCard>
        ))}
      </BloodGrid>

      <SectionTitle>Informações do Hospital</SectionTitle>
      <InfoCard>
        <InfoGrid>
          <InfoItem>
            <InfoLabel>CNPJ</InfoLabel>
            <InfoValue>{hospital.cnpj}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Endereço</InfoLabel>
            <InfoValue>
              {hospital.address}, {hospital.city} - {hospital.state}
            </InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>CEP</InfoLabel>
            <InfoValue>{hospital.cep}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Telefone</InfoLabel>
            <InfoValue>{hospital.phone}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>E-mail</InfoLabel>
            <InfoValue>{hospital.email}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Website</InfoLabel>
            <InfoValue>
              <InfoLink href={hospital.website} target="_blank" rel="noopener noreferrer">
                {hospital.website?.replace(/^https?:\/\//, '')}
              </InfoLink>
            </InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Horário de Funcionamento</InfoLabel>
            <InfoValue>{hospital.openingHours}</InfoValue>
          </InfoItem>
        </InfoGrid>
      </InfoCard>
    </PageWrapperAdm>
  )
}
