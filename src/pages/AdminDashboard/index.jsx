import React, { useEffect, useState } from 'react'

import { headerColumns } from './helper/helper.jsx'
import { getHospital, deleteHospital } from '../../services/getHospital.jsx'
import loadingAnimation from "../../assets/loading.json";
import {
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
import { Input } from '../../components/Input'
import { MainButton } from '../../components/MainButton'

import { TbEdit } from 'react-icons/tb'
import { RiAdminFill, RiDeleteBin5Fill } from 'react-icons/ri'
import { ToggleBtn } from './ToggleBtn'
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { FaHospital, FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail, IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { toast } from 'react-toastify';
import { calculateBloodStock } from '../../util/bloodStock.jsx';


export const AdminDashboard = () => {
    const [hospital, setHospital] = useState([])
    const [loading, setLoading] = useState(true)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 864);
    const [search, setSearch] = useState('')


    const [card, setCard] = useState(() => {
        const saved = localStorage.getItem('admin_dashboard_view')
        return saved ? JSON.parse(saved) : false
    })

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
            setIsMobile(window.innerWidth <= 864)
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
                toast.error("erro ao carregar hospital" )
                console.log(err)
            
            } finally {
                setLoading(false)
            }

        }
        listHospitals()
    }, [])

    //Persistencia Estado
    useEffect(() => {
        localStorage.setItem('admin_dashboard_view', JSON.stringify(card))
    }, [card])

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
                <AdmHeaderWrapper>
                    {!isMobile && (
                        <div style={{ width: '100%', display: 'flex' }}>
                            <ToggleBtn
                                isActive={card}
                                onToggle={handleCard}
                                leftLabel="Tabela"
                                rightLabel="Card"
                            />
                        </div>
                    )}
                    <AdmFilterBar>
                        <Input
                            margin="0"
                            placeholder="buscar por nome"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                                setCurrentPage(1)
                            }}
                        />
                        <MainButton 
                            onClick={() => navigate('/adminDashboard/new')}
                            width={isMobile ? '100%' : '12rem'}
                        >
                            + Novo Hospital
                        </MainButton>
                    </AdmFilterBar>
                </AdmHeaderWrapper>


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
                            const{totalBlood,averageBlood,percentage} = calculateBloodStock(item.bloodStock)

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
