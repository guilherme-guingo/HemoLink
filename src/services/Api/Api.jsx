import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6a27365ca84f9d39e9085516.mockapi.io',
});

export default api;