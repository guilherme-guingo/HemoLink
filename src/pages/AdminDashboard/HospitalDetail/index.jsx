import React from 'react'
import { useParams } from 'react-router-dom'
import { bodyRows } from '../data/mockDate'

export const HospitalDetail = () => {

    const { id } = useParams()
    const hospital = bodyRows.find((h) => h.id === Number(id))

    if (!hospital) {
        return <p>Hospital não foi encontrado</p>
    }
    return (
        <div>
            <img style={{height:"10rem"}} src={hospital.image} />
            <h2>{hospital.name}</h2>
            <p>{hospital.address}</p>
            <p>{hospital.phone}</p>

            <p>Estoque sangue</p>
            {/* colocar o estoque aqui */}
        </div>
    )
}
