import React, { useEffect, useState } from 'react'

import { headerColumns } from './helper/helper.jsx'
import { getHospital, deleteHospital } from '../../services/getHospital.jsx'

import {
    AdmCard,
    AdmCardContainer,
    AdmCardInfo,
    AdmContainer,
    AdmHeader,
    AdmTitle,
    BloodBarContainer,
    BloodBarFill,
    CardTitle,
    Table,
    Td,
    TdBlood,
    TdWrapperIcon,
    Th,
    TitleWrapper,
    Tr,
    TrBody
} from './style'

import { TbEdit } from 'react-icons/tb'
import { RiAdminFill, RiDeleteBin5Fill } from 'react-icons/ri'
import { ToggleBtn } from '../../components/ToggleBtn'
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

//TODO
//[ ].Melhorar UI UX(Ser alem de uma tabela com CRUD)
//[x].Sistema automatico de cores de acordo com nivel do sangue
//[ ].Sistema de avisos ou visual que mostre hospitais que estao em estado emergencial
//[x]. trocar entre tabela e cards
//[ ]. APENAS cards estarao ativos mobile
//[ ]. Cards condizentes com esttilo
//[x] Acesso direto a pagina de cadatro individual de cada hospital[PUT & POST]
//[ ] Paginacao
//[ ] Filtro Digitavel
//[ ] Ordenacao por estoque sangue
//[ ] LOADING

///!!! História 6.5 nao necessariamente precisa ser totalmente aqui mas integrado ao agendamento de sangue
//Quando o agendamento estiver atendido, o esotque aumenta em tempo real, o ADM pde ajustar o estoque manualmente 
//o status muda em tempo real

//LIMAR a tabela para aparecer apenas as informações mais relevantes(ex:nome e taxas de sangue)

//Remodelar tabela para ter mais controle de estilo

export const AdminDashboard = () => {
    const [hospital, setHospital] = useState([])
    const [card, setCard] = useState(false)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    //Toggle Button
    const handleCard = () => {
        setCard(!card)
    }

    useEffect(() => {
        async function listHospitals() {
            try {
                const response = await getHospital();
                console.log("renderizou");
                console.log(response.data);
                if (response && response.status === 200) {
                    setHospital(response.data)
                }
            } catch (err) {
                console.error("erro ao carregar hospital", err)
            } finally {
                setLoading(false)
            }

        }
        listHospitals()
    }, [])

    if (loading) return <AdmContainer><p>Carregando...</p></AdmContainer>
    if (!hospital) return <AdmContainer><p>Hospital não foi encontrado</p></AdmContainer>

    return (
        <AdmContainer>
            <AdmHeader>
                <TitleWrapper>
                    <RiAdminFill size={24} />
                    <AdmTitle>Dashboard</AdmTitle>
                </TitleWrapper>
                <button onClick={() => navigate('/adminDashboard/new')}>Adicionar Hospital</button>
            </AdmHeader>



            <div style={{ display: 'flex', flexDirection: "column", gap: "2rem" }}>

                <div style={{ display: 'flex', gap: "2rem" }}>

                    <ToggleBtn
                        isActive={card}
                        onToggle={handleCard}
                        leftLabel="Tabela"
                        rightLabel="Card"
                    />

                    <input placeholder='buscar' />
                </div>


                {!card ?

                    <>
                        <Table>
                            <thead>
                                <Tr>
                                    {headerColumns.map((header, index) => {
                                        return (
                                            <Th key={index}>
                                                {header.title}
                                            </Th>
                                        )
                                    })}
                                </Tr>
                            </thead>
                            <tbody>
                                {hospital.map((row) => {
                                    return (
                                        <TrBody
                                            key={row.id}
                                            onClick={() => navigate(`/adminDashboard/${row.id}`)}
                                        >
                                            <Td>{row.id}</Td>
                                            <Td><strong>{row.name}</strong></Td>
                                            <TdBlood $percentage={row.bloodStock['A+']}>{row.bloodStock['A+']}</TdBlood>
                                            <TdBlood $percentage={row.bloodStock['A-']}>{row.bloodStock['A-']}</TdBlood>
                                            <TdBlood $percentage={row.bloodStock['B+']}>{row.bloodStock['B+']}</TdBlood>
                                            <TdBlood $percentage={row.bloodStock['B-']}>{row.bloodStock['B-']}</TdBlood>
                                            <TdBlood $percentage={row.bloodStock['AB+']}>{row.bloodStock['AB+']}</TdBlood>
                                            <TdBlood $percentage={row.bloodStock['AB-']}>{row.bloodStock['AB-']}</TdBlood>
                                            <TdBlood $percentage={row.bloodStock['O+']}>{row.bloodStock['O+']}</TdBlood>
                                            <TdBlood $percentage={row.bloodStock['O-']}>{row.bloodStock['O-']}</TdBlood>
                                        </TrBody>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </>
                    :
                    <AdmCardContainer>
                        {hospital.map((item) => {
                            const totalBlood = Object.values(item.bloodStock)
                                .reduce((acc, value) => acc + value, 0);

                            const averageBlood =
                                totalBlood / Object.values(item.bloodStock).length;

                            const percentage = Math.min(averageBlood, 100);

                            return (
                                <AdmCard
                                    key={item.id}
                                    $percentage={percentage}
                                    onClick={() => navigate(`/adminDashboard/${item.id}`)}
                                >
                                    <img
                                        style={{ height: "10rem", width: "100%" }}
                                        src={item.image}
                                        alt={item.name}

                                    />

                                    <AdmCardInfo>
                                        <CardTitle><strong>{item.name}</strong></CardTitle>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <FaPhoneAlt size={14} />
                                            <p>{item.phone}</p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <IoIosMail />
                                            <p>{item.email}</p>
                                        </div>
                                        <p>Média Sangue: {averageBlood.toFixed(1)}%</p>

                                        <BloodBarContainer>
                                            <BloodBarFill $percentage={percentage} />
                                        </BloodBarContainer>
                                    </AdmCardInfo>

                                </AdmCard>
                            );
                        })}
                    </AdmCardContainer>
                }


                <div><BiArrowFromRight /> Paginacao <BiArrowFromLeft /></div>
            </div>

        </AdmContainer>
    )
}
