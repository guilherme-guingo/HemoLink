import api from '../services/Api/Api'

export const postDoacao = async (formData) => {
    try{
        const response = await api.post('/pedidos', formData)
        return response
    }
    catch (error) {
        throw error
    }
}