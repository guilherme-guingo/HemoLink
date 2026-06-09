import { HospitalApi } from "./Api/Api"



export const getHospital = async () => {
    try{
        const response = await HospitalApi.get('/hospital')
        return response
    }catch(error){
        throw error;
    }
}

export const getHospitalById = async (id) => {
    try {
        const response = await HospitalApi.get(`/hospital/${id}`)
        return response
    } catch (error) {
        throw error
    }
}

export const createHospital = async (data) => {
    try {
        const response = await HospitalApi.post('/hospital', data)
        return response
    } catch (error) {
        throw error
    }
}

export const updateHospital = async (id, data) => {
    try {
        const response = await HospitalApi.put(`/hospital/${id}`, data)
        return response
    } catch (error) {
        throw error
    }
}

export const deleteHospital = async (id) => {
    try {
        const response = await HospitalApi.delete(`/hospital/${id}`)
        return response
    } catch (error) {
        throw error
    }
}
