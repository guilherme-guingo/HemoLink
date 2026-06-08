import React from 'react'
import { bodyRows, headerColumns } from './data/mockDate'
import { AdmContainer, AdmHeader, AdmTitle, Table, Td, TdWrapperIcon, Th, TitleWrapper, Tr, TrBody } from './style'
import { TbEdit } from 'react-icons/tb'
import { RiAdminFill, RiDeleteBin5Fill } from 'react-icons/ri'

//TODO
//1.Melhorar UI UX(Ser alem de uma tabela com CRUD)
//2.Sistema automatico de cores de acordo com nivel do sangue
//3.Sistema de avisos ou visual que mostre hospitais que estao em estado emergencial
//4. trocar entre tabela e cards
//5.Cards terao um sistema mais visual do estoque do sangue

///!!! História 6.5 nao necessariamente precisa ser totalmente aqui mas integrado ao agendamento de sangue
//Quando o agendamento estiver atendido, o esotque aumenta em tempo real, o ADM pde ajustar o estoque manualmente 
//o status muda em tempo real

//LIMAR a tabela para aparecer apenas as informações mais relevantes(ex:nome e taxas de sangue)

//Remodelar tabela para ter mais controle de estilo

export const AdminDashboard = () => {
    return (
        <AdmContainer>
            <AdmHeader>
                <TitleWrapper>
                    <RiAdminFill size={24} />
                    <AdmTitle>Dashboard</AdmTitle>
                </TitleWrapper>
                <button>Adicionar Hospital</button>
            </AdmHeader>
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
                    {bodyRows.map((row) => {
                        return (
                            <TrBody key={row.id}>
                                <Td>{row.id}</Td>
                                <Td>{row.name}</Td>
                                <Td>{row['a+']}</Td>
                                <Td>{row['a-']}</Td>
                                <Td>{row['b+']}</Td>
                                <Td>{row['b-']}</Td>
                                <Td>{row['ab+']}</Td>
                                <Td>{row['ab-']}</Td>
                                <Td>{row['o+']}</Td>
                                <Td>{row['o-']}</Td>
                                <TdWrapperIcon>
                                    <TbEdit />
                                    <RiDeleteBin5Fill />
                                </TdWrapperIcon>
                            </TrBody>
                        )
                    })}
                </tbody>
            </Table>

        </AdmContainer>
    )
}
