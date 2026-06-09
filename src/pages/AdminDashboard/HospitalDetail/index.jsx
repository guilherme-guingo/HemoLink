import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getHospitalById, deleteHospital } from '../../../services/getHospital.jsx'
import {ActionButtons,BloodCard,BloodGrid,BloodType,BloodValue,DeleteButton,EditButton,HeroImage,HeroInfo,HeroSection,HospitalName,InfoCard,InfoGrid,InfoItem,InfoLabel,InfoLink,InfoRow,InfoValue,PageWrapperAdm,SectionTitle,TopBar,
} from './style'
import { TbArrowLeft, TbEdit, TbTrash } from 'react-icons/tb'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { HiOutlineClock } from 'react-icons/hi'
import { PiGlobe } from 'react-icons/pi'
import { MdBloodtype } from 'react-icons/md'
import { BackButton } from '../../../components/BackButton/index.jsx'

export const HospitalDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [hospital, setHospital] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function loadHospital() {
      try {
        const response = await getHospitalById(id)
        if (response && response.status === 200) {
          setHospital(response.data)
        }
      } catch (error) {
        console.error("Erro ao buscar hospital:", error)
      } finally {
        setLoading(false)
      }
    }
    loadHospital()
  }, [id])

  if (loading) return <PageWrapperAdm><p>Carregando...</p></PageWrapperAdm>
  if (!hospital) return <PageWrapperAdm><p>Hospital não foi encontrado</p></PageWrapperAdm>

  const bloodTypes = Object.entries(hospital.bloodStock || {})

  return (
    <PageWrapperAdm>
      <TopBar>

        <BackButton location={'/adminDashboard'} />
        <ActionButtons>
          <EditButton onClick={() => navigate(`/adminDashboard/${id}/edit`)}>
            <TbEdit size={18} />
            Editar
          </EditButton>
      
          <DeleteButton onClick={async () => {
            if (window.confirm(`Excluir ${hospital.name}?`)) {
              await deleteHospital(id)
              navigate('/adminDashboard')
            }
          }}>
            <TbTrash size={18} />
            Excluir
          </DeleteButton>
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
        {bloodTypes.map(([type, value]) => (
          <BloodCard key={type} $level={value}>
            <BloodType>{type}</BloodType>
            <BloodValue $level={value}>{value}</BloodValue>
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
  