import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6a271c9ba84f9d39e90846df.mockapi.io',
});

const hospital_url = 'https://6a27365ca84f9d39e9085516.mockapi.io';

export const HospitalApi = axios.create({
  baseURL: hospital_url,
});

export const UserApi = axios.create({
  baseURL:'https://6a2879f44e1e783349a58ef3.mockapi.io',
});

export default api;