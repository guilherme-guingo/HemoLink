import React, { useEffect, useState } from 'react'

import { headerColumns } from './helper/helper.jsx'
import { getHospital, deleteHospital } from '../../services/getHospital.jsx'
import loadingAnimation from "../../assets/loading.json";
import {
    AddHospitalBtn,
    AdmCard,
    AdmCardContainer,
    AdmCardInfo,
    AdmContainer,
    AdmFilterBar,
    AdmHeader,
    AdmHeaderWrapper,
    AdmTitle,
    BloodBarContainer,
    BloodBarFill,
    BloodPerc,
    BodyContainer,
    CardTitle,
    Input,
    PaginatedPage,
    PaginationContainer,
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
import { ToggleBtn } from './ToggleBtn'
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { FaHospital, FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail, IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

//TODO
//[x].Ser alem de uma tabela com CRUD
//[x].Sistema automatico de cores de acordo com nivel do sangue
//[ ].Sistema de avisos ou visual que mostre hospitais que estao em estado emergencial
//[x]. trocar entre tabela e cards
//[x]. APENAS cards estarao ativos mobile
//[x]. Responsividade
//[x] Acesso direto a pagina de cadatro individual de cada hospital[PUT & POST]
//[x] Paginacao
//[x] Filtro Digitavel
//[ ] Ordenacao por estoque sangue
//[x] LOADING

//Remodelar tabela para ter mais controle de estilo

export const AdminDashboard = () => {
    const [hospital, setHospital] = useState([])
    const [card, setCard] = useState(false)
    const [loading, setLoading] = useState(true)
    const [isMobile, setIsMobile] = useState(window.innerWidth <=864);
    const [search, setSearch] = useState('')

    //PAGINACAO
    const [currentPage, setCurrentPage] = useState(1)
    const itensPerPage = 20

    const navigate = useNavigate()

    //Toggle Button
    const handleCard = () => {
        setCard(!card)
    }

    //Modo Mobile
    useEffect(() => {
        const handleMobile = () => {
            setIsMobile(window.innerWidth <=864)
        }
        window.addEventListener('resize', handleMobile)

        return () => window.removeEventListener('resize', handleMobile)
    }, [])
    useEffect(() => {
        if (isMobile) {
            setCard(true)
        }
    }, [isMobile])

    useEffect(() => {
        async function listHospitals() {
            try {
                const response = await getHospital();
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

    if (loading) return <AdmContainer> <DotLottieReact data={loadingAnimation} loop autoplay /></AdmContainer>
    if (!hospital) return <AdmContainer><p>Hospital não foi encontrado</p></AdmContainer>

    //FIltro Busca
    const filteredHospitals = hospital.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    })


    //Const Paginacao
    const indexFinal = currentPage * itensPerPage
    const indexStart = indexFinal - itensPerPage
    const paginateHospital = filteredHospitals.slice(indexStart, indexFinal)

    const totalPages = Math.ceil(filteredHospitals.length / itensPerPage)

    return (
        <AdmContainer>
            <AdmHeader>
                <TitleWrapper>
                    <RiAdminFill />
                    <AdmTitle>Dashboard</AdmTitle>
                </TitleWrapper>


            </AdmHeader>



            <BodyContainer>


                {/* ======  Header filtros e opcoes */}
                <AdmHeaderWrapper >
                    <AdmFilterBar>
                        {!isMobile && (
                            <ToggleBtn
                                isActive={card}
                                onToggle={handleCard}
                                leftLabel="Tabela"
                                rightLabel="Card"

                            />)}

                        <Input
                            placeholder='buscar por nome'
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                                setCurrentPage(1)
                            }}
                        />

                    </AdmFilterBar>

                    <AddHospitalBtn onClick={() => navigate('/adminDashboard/new')}>
                        + Novo Hospital
                    </AddHospitalBtn>
                </AdmHeaderWrapper >


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
                                {paginateHospital.map((row) => {
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
                        {paginateHospital.map((item) => {
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
                                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                            <FaPhoneAlt size={13} />
                                            <p>{item.phone}</p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                            <IoIosMail />
                                            <p>{item.email}</p>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <p style={{ fontSize: '0.8rem' }}>Média Sangue:</p>
                                            <BloodPerc $percentage={percentage} style={{ fontSize: '0.8rem' }}> <strong>{averageBlood.toFixed(1)}%</strong> </BloodPerc>
                                        </div>

                                        <BloodBarContainer>
                                            <BloodBarFill $percentage={percentage} />
                                        </BloodBarContainer>
                                    </AdmCardInfo>

                                </AdmCard>
                            );
                        })}
                    </AdmCardContainer>
                }

                {/*====PAGINAÇÂO====*/}
                <PaginationContainer>
                    <PaginatedPage onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
                        <IoMdArrowRoundBack />
                    </PaginatedPage>
                    <span className="text-gray-600">
                        Página {currentPage} de {totalPages}
                    </span>
                    <PaginatedPage onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
                        <IoMdArrowRoundForward />
                    </PaginatedPage>
                </PaginationContainer>

            </BodyContainer>

        </AdmContainer>
    )
}
