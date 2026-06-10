import api from './Api/Api'

export const postSolicitacao = async (formData) => {
  try {
    const response = await api.post('/pedidos', formData)
    return response
  } 
  catch (error) {
    throw error
  }
}