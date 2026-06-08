import React, { useEffect, useState } from 'react'
import { bodyRows, headerColumns } from './data/mockDate'
import { AdmCard, AdmCardContainer, AdmCardInfo, AdmContainer, AdmHeader, AdmTitle, BloodBarContainer, BloodBarFill, Table, Td, TdWrapperIcon, Th, TitleWrapper, Tr, TrBody } from './style'
import { TbEdit } from 'react-icons/tb'
import { RiAdminFill, RiDeleteBin5Fill } from 'react-icons/ri'
import { ToggleBtn } from '../../components/ToggleBtn'
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { getHospital } from '../../services/getHospital'

//TODO
//[ ].Melhorar UI UX(Ser alem de uma tabela com CRUD)
//[ ].Sistema automatico de cores de acordo com nivel do sangue
//[ ].Sistema de avisos ou visual que mostre hospitais que estao em estado emergencial
//[x]. trocar entre tabela e cards
//[ ]. APENAS cars estarao ativos mobile
//[ ]. Cards condizentes com esttilo
//[ ] Acesso direto a pagina de cadatro individual de cada hospital
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
    const [hospital,setHospital] = useState([])
    const [card, setCard] = useState(false)

    const navigate = useNavigate()

    //Toggle Button
    const handleCard = () => {
        setCard(!card)
    }

    useEffect(() => {
        async function listHospitals(){
            const response = await getHospital();
            console.log("RENDERIZOU");
            console.log(response.data);
            if(response && response.status === 200){
                setHospital(response.data)
            }
        }
        listHospitals()
    },[])


    return (
        <AdmContainer>
            <AdmHeader>
                <TitleWrapper>
                    <RiAdminFill size={24} />
                    <AdmTitle>Dashboard</AdmTitle>
                </TitleWrapper>
                <button>Adicionar Hospital</button>
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
                                            <Td>{row.bloodStock['A+']}</Td>
                                            <Td>{row.bloodStock['A-']}</Td>
                                            <Td>{row.bloodStock['B+']}</Td>
                                            <Td>{row.bloodStock['B-']}</Td>
                                            <Td>{row.bloodStock['AB+']}</Td>
                                            <Td>{row.bloodStock['AB-']}</Td>
                                            <Td>{row.bloodStock['O+']}</Td>
                                            <Td>{row.bloodStock['O-']}</Td>
                                            <TdWrapperIcon>
                                                <TbEdit />
                                                <RiDeleteBin5Fill />
                                            </TdWrapperIcon>
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
                                        <h3 style={{height:"3rem"}}><strong>{item.name}</strong></h3>
                                        <p>{item.phone}</p>
                                        <p>{item.email}</p>
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
