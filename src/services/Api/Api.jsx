import axios from 'axios'

const hospital_url = 'https://6a27365ca84f9d39e9085516.mockapi.io'

export const HospitalApi = axios.create({
    baseURL: hospital_url
})